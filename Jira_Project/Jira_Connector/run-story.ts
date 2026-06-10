import { getFullStoryDetails } from '../utils/story-connector';
import { generateFeatureFile, createTestAutomationContext } from '../utils/feature-generator';
import { generateFeatureFileWithAI, extractFeatureContent, saveGeneratedFeatureFile } from '../utils/ai-agent-service';
import fs from 'fs';
import path from 'path';
import * as winston from 'winston';
import { createLogger } from '../utils/logger';

interface ExecutionReport {
  executionId: string;
  timestamp: string;
  status: 'success' | 'failure';
  executionDuration: string;
  data?: any;
  error?: string;
  metadata: {
    environment: string;
    nodeVersion: string;
    platform: string;
  };
}

async function saveExecutionReport(report: ExecutionReport, logger: winston.Logger): Promise<void> {
  const outputDir = path.join(__dirname, '../reports/story-output');
  
  // Ensure output directory exists
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Generate filenames with timestamp
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const executionId = `execution-${timestamp}`;
  
  // Save formatted text report (human-readable)
  const textPath = path.join(outputDir, `${executionId}-report.txt`);
  const textContent = generateTextReport(report);
  fs.writeFileSync(textPath, textContent);

  // Also save a stable filename `report.txt` for easy lookup of latest report
  const stablePath = path.join(outputDir, 'report.txt');
  fs.writeFileSync(stablePath, textContent);

  console.log(`\n✓ Report saved successfully:`);
  console.log(`  ${textPath}`);
  console.log(`  ${stablePath}`);
  logger.info(`✓ Report saved successfully: ${textPath}`);
  logger.info(`✓ Report saved (stable): ${stablePath}`);
}

function generateTextReport(report: ExecutionReport): string {
  const divider = '='.repeat(80);
  const lines = [
    divider,
    'STORY EXECUTION REPORT',
    divider,
    '',
    `Execution ID:     ${report.executionId}`,
    `Timestamp:        ${report.timestamp}`,
    `Status:           ${report.status.toUpperCase()}`,
    `Duration:         ${report.executionDuration}`,
    '',
    'ENVIRONMENT',
    divider,
    `Platform:         ${report.metadata.platform}`,
    `Node Version:     ${report.metadata.nodeVersion}`,
    `Environment:      ${report.metadata.environment}`,
    '',
  ];

  if (report.status === 'success' && report.data) {
    lines.push('STORY DETAILS');
    lines.push(divider);
    
    const data = report.data;
    if (data.storyName) lines.push(`Story Name:       ${data.storyName}`);
    if (data.storyNumber) lines.push(`Story Number:     ${data.storyNumber}`);
    if (data.epic) lines.push(`Epic:             ${data.epic}`);
    if (data.scrumNumber) lines.push(`Scrum:            ${data.scrumNumber}`);
    if (data.jiraUrl) lines.push(`JIRA URL:         ${data.jiraUrl}`);
    
    if (data.description) {
      lines.push('');
      lines.push('Description:');
      lines.push('-'.repeat(80));
      // Format description by replacing \n with actual newlines and indenting
      const formattedDesc = data.description
        .split('\\n')
        .map((line: string) => `  ${line.trim()}`)
        .filter((line: string) => line.trim().length > 0);
      lines.push(...formattedDesc);
      lines.push('-'.repeat(80));
    }
  } else if (report.status === 'failure') {
    lines.push('ERROR DETAILS');
    lines.push(divider);
    lines.push(report.error || 'Unknown error');
  }

  lines.push('');
  lines.push(divider);
  lines.push(`Generated at: ${new Date().toLocaleString()}`);
  lines.push(divider);

  return lines.join('\n');
}

(async () => {
  const startTime = Date.now();
  const logger = createLogger('run-story');
  
  try {
    logger.info('Starting story execution process...');
    const storyDetails = await getFullStoryDetails();
    
    // Create context for Test Automation Agent
    const automationContext = createTestAutomationContext(storyDetails);
    
    // Generate feature file prompt
    const featurePrompt = generateFeatureFile(storyDetails);
    
    const duration = Date.now() - startTime;

    const report: ExecutionReport = {
      executionId: `exec-${Date.now()}`,
      timestamp: new Date().toISOString(),
      status: 'success',
      executionDuration: `${duration}ms`,
      data: storyDetails,
      metadata: {
        environment: process.env.NODE_ENV || 'development',
        nodeVersion: process.version,
        platform: process.platform,
      },
    };

    // Display output
    console.log('\n=== Story Details ===\n');
    console.log(JSON.stringify(storyDetails, null, 2));
    logger.info('Story details retrieved successfully');
    
    // Display feature generation prompt for Jira Test Automation Agent
    console.log('\n=== Jira Test Automation Agent Prompt ===\n');
    console.log(featurePrompt);
    logger.info('Feature file prompt generated');
    
    // Attempt to automatically generate feature file with AI
    let featureContent: string | null = null;
    let generatedFilePath: string | null = null;
    
    try {
      featureContent = await generateFeatureFileWithAI(featurePrompt);
      
      if (featureContent) {
        // Extract feature content (remove markdown if present)
        const cleanedContent = extractFeatureContent(featureContent);
        
        // Save the generated feature file
        generatedFilePath = saveGeneratedFeatureFile(
          cleanedContent,
          storyDetails.storyNumber
        );
      }
    } catch (aiError) {
      console.error('⚠️  AI generation skipped, but continuing...');
      logger.warn('AI generation skipped, but continuing...');
    }
    
    // Save automation context for agent processing
    const contextPath = path.join(__dirname, '../reports/story-output/automation-context.json');
    fs.writeFileSync(contextPath, JSON.stringify(automationContext, null, 2));
    console.log(`\n✓ Automation context saved: ${contextPath}`);
    logger.info(`Automation context saved: ${contextPath}`);

    // Add generated file path to report if available
    if (generatedFilePath) {
      (report as any).generatedFeatureFile = generatedFilePath;
    }

    // Save report
    await saveExecutionReport(report, logger);
    
    // Summary
    console.log('\n=== EXECUTION SUMMARY ===\n');
    console.log(`✅ Story fetched from Jira: ${storyDetails.storyNumber}`);
    console.log(`✅ Acceptance criteria extracted`);
    console.log(`✅ Agent prompt generated`);
    if (generatedFilePath) {
      console.log(`✅ Feature file AUTOMATICALLY GENERATED and saved`);
    } else {
      console.log(`ℹ️  To manually generate feature file:`);
      console.log(`   1. Copy the "Jira Test Automation Agent Prompt" above`);
      console.log(`   2. Paste into GitHub Copilot chat`);
      console.log(`   3. Copy the generated feature file`);
      console.log(`   4. Save to specs/[story-id].feature`);
    }
    console.log(`✅ Ready to test: npm test`);
    logger.info('Execution completed successfully');
  } catch (error) {
    const duration = Date.now() - startTime;
    const errorMessage = error instanceof Error ? error.message : String(error);

    console.error('Error:', error);
    logger.error(`Error: ${errorMessage}`);

    const report: ExecutionReport = {
      executionId: `exec-${Date.now()}`,
      timestamp: new Date().toISOString(),
      status: 'failure',
      executionDuration: `${duration}ms`,
      error: errorMessage,
      metadata: {
        environment: process.env.NODE_ENV || 'development',
        nodeVersion: process.version,
        platform: process.platform,
      },
    };

    // Save failure report
    await saveExecutionReport(report, logger);
    process.exit(1);
  }
})();
