import * as fs from 'fs';
import * as path from 'path';
import * as https from 'https';
import * as winston from 'winston';
import { createLogger } from './logger';

/**
 * Read properties file and get value
 */
function getProperty(propKey: string): string {
  const propsPath = path.join(__dirname, '../config/jira.properties');
  const content = fs.readFileSync(propsPath, 'utf-8');
  
  const lines = content.split('\n');
  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed.startsWith(propKey + '=')) {
      return trimmed.split('=')[1].trim();
    }
  }
  
  throw new Error(`Property ${propKey} not found`);
}

/**
 * Get story configuration from jira.story.json using dynamic story name
 */
function getStoryFromCredentials(): any {
  const storyName = getProperty('StoryName'); // Get dynamic story name from properties
  const credPath = path.join(__dirname, '../test-data/jira.story.json');
  const credContent = fs.readFileSync(credPath, 'utf-8');
  const creds = JSON.parse(credContent);
  
  if (!creds[storyName]) {
    throw new Error(`Story "${storyName}" not found in jira.story.json`);
  }
  
  const storyData = creds[storyName];
  return {
    storyName,
    scrumNumber: storyData.scrumNumber,
    epic: storyData.epic,
    storyNumber: storyData.story || storyData.storyNumber  // Support both 'story' and 'storyNumber'
  };
}

/**
 * Get Jira connection details from jira.cred.json and jira.story.json
 */
function getJiraConnection(): any {
  const mcpPath = path.join(__dirname, '../test-data/jira.cred.json');
  
  const mcp = JSON.parse(fs.readFileSync(mcpPath, 'utf-8'));
  const email = mcp.servers.jira.email;
  const apiToken = mcp.servers.jira.apiToken;
  
  // Create Basic auth header: base64(email:apiToken)
  const basicAuth = Buffer.from(`${email}:${apiToken}`).toString('base64');
  
  return {
    baseUrl: mcp.servers.jira.baseUrl,
    email: email,
    apiToken: apiToken,
    basicAuth: basicAuth
  };
}

/**
 * Fetch story description from Jira board
 */
export async function getStoryDescription(): Promise<any> {
  const logger = createLogger('story-connector');
  
  try {
    const desiredStory = getStoryFromCredentials();
    const jira = getJiraConnection();

    console.log(`\n📋 Story Information (configured):`);
    logger.info(`📋 Story Information (configured):`);
    console.log(`   Story Name: ${desiredStory.storyName}`);
    logger.info(`   Story Name: ${desiredStory.storyName}`);
    console.log(`   Scrum Number: ${desiredStory.scrumNumber}`);
    logger.info(`   Scrum Number: ${desiredStory.scrumNumber}`);
    console.log(`   Epic: ${desiredStory.epic}`);
    logger.info(`   Epic: ${desiredStory.epic}`);
    console.log(`   Story Number: ${desiredStory.storyNumber}`);
    logger.info(`   Story Number: ${desiredStory.storyNumber}`);

    // Validate API token
    if (!jira.apiToken || jira.apiToken.length < 20) {
      throw new Error('Invalid API token: Token is too short or missing. Please check test-data/jira.cred.json');
    }

    // Try configured story first, then fallback to others in jira_cred.json if access fails
    try {
      const description = await fetchFromJira(jira.baseUrl, desiredStory.storyNumber, jira.basicAuth, logger);
      return {
        ...desiredStory,
        description,
        jiraUrl: `${jira.baseUrl}/browse/${desiredStory.storyNumber}`
      };
    } catch (firstError) {
      // If 404 or permission error, attempt fallback to other stories in jira.story.json
      console.warn(`Configured story '${desiredStory.storyNumber}' failed: ${firstError}. Attempting fallback stories...`);
      if (logger) logger.warn(`Configured story '${desiredStory.storyNumber}' failed: ${firstError}. Attempting fallback stories...`);

      const credPath = path.join(__dirname, '../test-data/jira.story.json');
      const credContent = fs.readFileSync(credPath, 'utf-8');
      const creds = JSON.parse(credContent);

      for (const key of Object.keys(creds)) {
        const s = creds[key];
        const candidateStoryNumber = s.story || s.storyNumber;
        if (candidateStoryNumber === desiredStory.storyNumber) continue; // skip already tried

        try {
          console.log(`Trying alternative story: ${candidateStoryNumber}`);
          if (logger) logger.info(`Trying alternative story: ${candidateStoryNumber}`);
          const description = await fetchFromJira(jira.baseUrl, candidateStoryNumber, jira.basicAuth, logger);
          return {
            storyName: key,
            scrumNumber: s.scrumNumber,
            epic: s.epic,
            storyNumber: candidateStoryNumber,
            description,
            jiraUrl: `${jira.baseUrl}/browse/${candidateStoryNumber}`
          };
        } catch (e) {
          // continue to next candidate
          if (logger) logger.warn(`Candidate ${candidateStoryNumber} failed: ${e}`);
        }
      }

      // No fallback succeeded; rethrow original error
      throw firstError;
    }
  } catch (error) {
    console.error(`Error: ${error}`);
    const logger = createLogger('story-connector');
    logger.error(`Error: ${error}`);
    throw error;
  }
}

/**
 * Fetch story details from Jira API
 */
function fetchFromJira(baseUrl: string, storyKey: string, basicAuth: string, logger?: winston.Logger): Promise<string> {
  return new Promise((resolve, reject) => {
    // Use REST API v2 /issue endpoint
    const url = new URL(`${baseUrl}/rest/api/2/issue/${storyKey}`);
    
    const options = {
      hostname: url.hostname,
      path: url.pathname + url.search,
      method: 'GET',
      headers: {
        'Authorization': `Basic ${basicAuth}`,
        'Content-Type': 'application/json'
      },
      timeout: 30000  // 30 second timeout
    };

    console.log(`\n🔗 Fetching from: ${url.toString()}`);
    if (logger) logger.info(`🔗 Fetching from: ${url.toString()}`);
    console.log(`🔐 Auth: Basic ${basicAuth.substring(0, 20)}...`);
    if (logger) logger.info(`🔐 Auth: Basic ${basicAuth.substring(0, 20)}...`);

    const req = https.request(options, (res) => {
      let data = '';
      
      console.log(`📊 Response Status: ${res.statusCode}`);
      if (logger) logger.info(`📊 Response Status: ${res.statusCode}`);
      
      res.on('data', chunk => {
        data += chunk;
      });
      
      res.on('end', () => {
        try {
          if (res.statusCode === 200) {
            const response = JSON.parse(data);
            
            // REST API v2 format
            const description = response.fields?.description || 'No description available';
            
            console.log(`✅ Description fetched successfully`);
            if (logger) logger.info(`✅ Description fetched successfully`);
            resolve(description);
          } else {
            const response = JSON.parse(data);
            console.log(`⚠️  Status: ${res.statusCode}`);
            if (logger) logger.warn(`⚠️  Status: ${res.statusCode}`);
            const errorMsg = response.errorMessages?.[0] || 'Unknown error';
            console.log(`Error: ${errorMsg}`);
            if (logger) logger.error(`Error: ${errorMsg}`);
            reject(new Error(`Jira API error (${res.statusCode}): ${errorMsg}`));
          }
        } catch (e) {
          console.log(`❌ Parse error: ${e}`);
          if (logger) logger.error(`❌ Parse error: ${e}`);
          reject(new Error(`Failed to parse Jira response: ${e}`));
        }
      });
    });

    req.on('timeout', () => {
      console.warn('❌ Request timeout');
      if (logger) logger.error('❌ Request timeout');
      req.destroy();
      reject(new Error('Connection timeout: Request took too long'));
    });

    req.on('error', (error) => {
      console.warn('❌ Connection error:', error.message);
      if (logger) logger.error(`❌ Connection error: ${error.message}`);
      reject(new Error(`Connection failed: ${error.message}`));
    });

    req.end();
  });
}

/**
 * Main function - get all story details
 */
export async function getFullStoryDetails(): Promise<any> {
  return await getStoryDescription();
}

// Export helper functions
export { getStoryFromCredentials, getJiraConnection };
