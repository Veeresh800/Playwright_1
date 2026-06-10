import * as fs from 'fs';
import * as path from 'path';
import * as winston from 'winston';
import { createLogger } from './logger';

/**
 * Generate a Gherkin feature file from Jira story details
 * Uses structured prompt format for AI-driven feature generation
 */
export function generateFeatureFile(storyDetails: any): string {
  const featureTemplate = buildFeaturePrompt(storyDetails);
  return featureTemplate;
}

/**
 * Build a structured prompt for the Jira Test Automation Agent
 * This prompt can be used with AI to generate BDD-style feature files
 */
function buildFeaturePrompt(storyDetails: any): string {
  return `
# JIRA STORY DETAILS FOR FEATURE FILE GENERATION

## Story Information
- **Story ID:** ${storyDetails.storyNumber || 'N/A'}
- **Story Name:** ${storyDetails.storyName || 'N/A'}
- **Epic:** ${storyDetails.epic || 'N/A'}
- **Sprint:** ${storyDetails.scrumNumber || 'N/A'}
- **JIRA URL:** ${storyDetails.jiraUrl || 'N/A'}

## Story Description
${storyDetails.description || 'No description available'}

---

## TASK FOR JIRA TEST AUTOMATION AGENT

Please analyze the above Jira story details and generate a comprehensive Gherkin feature file (.feature) with the following requirements:

### Requirements:
1. **Feature Header**: Create an appropriate feature file header with:
   - Feature: [Story Name]
   - Background scenarios (if applicable)

2. **Scenarios to Generate**:
   - **Acceptance Criteria Scenarios**: At least 2-3 positive scenarios based on the story description
   - **Negative Test Scenarios**: At least 1-2 negative/edge case scenarios
   - **Boundary Conditions**: If applicable

3. **Scenario Structure**:
   - Use "Given", "When", "Then", "And" keywords
   - Make steps actionable and specific
   - Include data tables where applicable
   - Reference all acceptance criteria from the story description

4. **Output Format**:
   - Standard Gherkin syntax (.feature file format)
   - Clear, business-readable language
   - Automation-ready step definitions

5. **Coverage Areas**:
   - Happy path scenarios
   - Error handling scenarios
   - Input validation scenarios
   - Data accuracy verification
   - UI/UX scenarios (if applicable)

---

Please generate the complete feature file content now:
`;
}

/**
 * Save generated feature file content to a .feature file
 */
export async function saveFeatureFile(
  storyDetails: any,
  featureContent: string,
  outputDir: string = '../specs'
): Promise<string> {
  const logger = createLogger('feature-generator');
  
  try {
    // Ensure output directory exists
    const fullOutputDir = path.join(__dirname, outputDir);
    if (!fs.existsSync(fullOutputDir)) {
      fs.mkdirSync(fullOutputDir, { recursive: true });
    }

    // Generate filename from story number or name
    const storyId = storyDetails.storyNumber || storyDetails.storyName || 'generated';
    const filename = `${storyId.toLowerCase().replace(/\s+/g, '-')}-auto.feature`;
    const filepath = path.join(fullOutputDir, filename);

    // Save the file
    fs.writeFileSync(filepath, featureContent, 'utf-8');

    console.log(`✓ Feature file generated successfully:`);
    console.log(`  ${filepath}`);
    logger.info(`✓ Feature file generated successfully: ${filepath}`);

    return filepath;
  } catch (error) {
    console.error(`Error saving feature file: ${error}`);
    logger.error(`Error saving feature file: ${error}`);
    throw error;
  }
}

/**
 * Parse Jira story and create a structured context for the Test Automation Agent
 */
export function createTestAutomationContext(storyDetails: any): any {
  return {
    storyId: storyDetails.storyNumber,
    storyName: storyDetails.storyName,
    epic: storyDetails.epic,
    sprint: storyDetails.scrumNumber,
    jiraUrl: storyDetails.jiraUrl,
    description: storyDetails.description,
    generatedAt: new Date().toISOString(),
    agentPrompt: generateFeatureFile(storyDetails)
  };
}

export default {
  generateFeatureFile,
  saveFeatureFile,
  createTestAutomationContext
};
