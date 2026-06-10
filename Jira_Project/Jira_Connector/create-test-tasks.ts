import axios from 'axios';
import * as fs from 'fs';
import * as path from 'path';
import * as winston from 'winston';
import { createLogger } from '../utils/logger';

interface TestCase {
  id: string;
  title: string;
  type: string;
  priority: string;
  description: string;
  component: string;
}

const JIRA_CONFIG = {
  baseUrl: 'https://rajeshsavir02.atlassian.net',
  email: 'rajeshsavir02@gmail.com',
  apiToken: 'ATATT3xFfGF0Bam3oRXTmGAfOfhhYbKIS0Ok4gc6b1YPlToiCWr_ekE5ZKiEm4iFdKb2Fi7oQTHBdXjcLO-6kIa6LqYDP2bNfXHuo3KjZATiQmpk8TBk1dduqeo18FToF2gu_UriwiOFT8_1m9afbCQLyxbUA52eQjbIm1cPyuhf_52meDAw8bs=624B7750',
};

const testCases: TestCase[] = [
  {
    id: 'TC-AIR-6-001',
    title: 'Search for one-way flight with valid airports and future date',
    type: 'Positive / Functional',
    priority: 'Highest',
    component: 'Flight Search',
    description: 'Verify user can successfully search for one-way flights with valid airports and future dates, displaying all required flight details.',
  },
  {
    id: 'TC-AIR-6-002',
    title: 'Search for round-trip flight with all valid inputs',
    type: 'Positive / Functional',
    priority: 'Highest',
    component: 'Flight Search',
    description: 'Verify user can successfully search for round-trip flights, displaying both outbound and return flight results.',
  },
  {
    id: 'TC-AIR-6-003',
    title: 'Search for multi-city flight with three airports',
    type: 'Positive / Functional',
    priority: 'High',
    component: 'Flight Search',
    description: 'Verify user can successfully search for multi-city flights with multiple legs, displaying results organized by leg.',
  },
  {
    id: 'TC-AIR-6-004',
    title: 'Search fails with invalid departure airport',
    type: 'Negative / Input Validation',
    priority: 'High',
    component: 'Flight Search',
    description: 'Verify system rejects searches with invalid departure airports and displays appropriate error message.',
  },
  {
    id: 'TC-AIR-6-005',
    title: 'Search fails with invalid destination airport',
    type: 'Negative / Input Validation',
    priority: 'High',
    component: 'Flight Search',
    description: 'Verify system rejects searches with invalid destination airports and displays appropriate error message.',
  },
  {
    id: 'TC-AIR-6-006',
    title: 'Search fails with past departure date',
    type: 'Negative / Input Validation',
    priority: 'High',
    component: 'Flight Search',
    description: 'Verify system prevents searching with past dates and disables or rejects such selections.',
  },
  {
    id: 'TC-AIR-6-007',
    title: 'Search fails with same departure and destination airports',
    type: 'Negative / Edge Case',
    priority: 'High',
    component: 'Flight Search',
    description: 'Verify system validates that departure and destination airports must be different.',
  },
  {
    id: 'TC-AIR-6-008',
    title: 'Verify flight result data accuracy',
    type: 'Positive / Data Validation',
    priority: 'High',
    component: 'Flight Search',
    description: 'Verify flight results display accurate data in correct format for departure time, arrival time, duration, and price.',
  },
  {
    id: 'TC-AIR-6-009',
    title: 'Search returns empty results for unavailable route',
    type: 'Edge Case / Error Handling',
    priority: 'Medium',
    component: 'Flight Search',
    description: 'Verify system gracefully handles searches with no available flights with appropriate message.',
  },
  {
    id: 'TC-AIR-6-010',
    title: 'Search with immediate future date',
    type: 'Edge Case / Boundary Testing',
    priority: 'Medium',
    component: 'Flight Search',
    description: 'Verify system allows searching with minimum advance booking period (1 day ahead).',
  },
];

async function createJiraTask(testCase: TestCase, logger: winston.Logger): Promise<string> {
  const auth = Buffer.from(`${JIRA_CONFIG.email}:${JIRA_CONFIG.apiToken}`).toString('base64');

  const taskData: any = {
    fields: {
      project: { key: 'AIR' },
      summary: `[${testCase.id}] ${testCase.title}`,
      description: `Test Case: ${testCase.id}\nType: ${testCase.type}\nComponent: ${testCase.component}\n\n${testCase.description}`,
      issuetype: { name: 'Task' },
      priority: { name: testCase.priority },
      labels: ['test-automation', 'AIR-6', testCase.type.split('/')[0].trim().replace(/\s+/g, '-').toLowerCase()],
    },
  };

  try {
    const response = await axios.post(`${JIRA_CONFIG.baseUrl}/rest/api/2/issue`, taskData, {
      headers: {
        Authorization: `Basic ${auth}`,
        'Content-Type': 'application/json',
      },
    });

    console.log(`✅ Created task: ${testCase.id} - ${response.data.key}`);
    logger.info(`✅ Created task: ${testCase.id} - ${response.data.key}`);
    return response.data.key;
  } catch (error: any) {
    const errorData = error.response?.data;
    console.log(`Error details:`, JSON.stringify(errorData, null, 2));
    logger.error(`Error details: ${JSON.stringify(errorData, null, 2)}`);
    
    if (error.response?.status === 400 && error.response?.data?.errors?.parent) {
      console.warn(`⚠️  ${testCase.id}: Parent linking not supported. Creating as standalone task...`);
      logger.warn(`⚠️  ${testCase.id}: Parent linking not supported. Creating as standalone task...`);
      
      // Retry without parent
      const taskDataNoParent: any = { ...taskData };
      taskDataNoParent.fields = { ...taskData.fields };
      delete taskDataNoParent.fields['parent'];

      try {
        const response = await axios.post(`${JIRA_CONFIG.baseUrl}/rest/api/2/issue`, taskDataNoParent, {
          headers: {
            Authorization: `Basic ${auth}`,
            'Content-Type': 'application/json',
          },
        });

        console.log(`✅ Created task (standalone): ${testCase.id} - ${response.data.key}`);
        logger.info(`✅ Created task (standalone): ${testCase.id} - ${response.data.key}`);
        return response.data.key;
      } catch (retryError: any) {
        console.error(`❌ Failed to create task ${testCase.id}:`, retryError.response?.data?.errors || retryError.message);
        logger.error(`❌ Failed to create task ${testCase.id}: ${retryError.response?.data?.errors || retryError.message}`);
        throw retryError;
      }
    } else {
      console.error(`❌ Failed to create task ${testCase.id}:`, error.response?.data?.errors || error.message);
      logger.error(`❌ Failed to create task ${testCase.id}: ${error.response?.data?.errors || error.message}`);
      throw error;
    }
  }
}

async function updateJiraWithTestCases(): Promise<void> {
  const logger = createLogger('create-test-tasks');
  
  console.log('\n🚀 Starting Jira Test Case Upload\n');
  console.log(`📊 Total test cases to upload: ${testCases.length}\n`);
  logger.info('🚀 Starting Jira Test Case Upload');
  logger.info(`📊 Total test cases to upload: ${testCases.length}`);

  const results: { [key: string]: string } = {};
  let successCount = 0;
  let failureCount = 0;

  for (const testCase of testCases) {
    try {
      const key = await createJiraTask(testCase, logger);
      results[testCase.id] = key;
      successCount++;
    } catch (error) {
      console.error(`Error creating task for ${testCase.id}`);
      logger.error(`Error creating task for ${testCase.id}`);
      failureCount++;
    }
  }

  // Save results to file
  const resultsFile = path.join(__dirname, '../reports/story-output/jira-task-creation-results.json');
  fs.writeFileSync(
    resultsFile,
    JSON.stringify(
      {
        timestamp: new Date().toISOString(),
        totalCases: testCases.length,
        successful: successCount,
        failed: failureCount,
        results: results,
      },
      null,
      2
    )
  );

  console.log('\n' + '='.repeat(60));
  console.log('📈 UPLOAD SUMMARY');
  console.log('='.repeat(60));
  console.log(`✅ Successful: ${successCount}/${testCases.length}`);
  console.log(`❌ Failed: ${failureCount}/${testCases.length}`);
  console.log(`📁 Results saved: ${resultsFile}`);
  console.log('='.repeat(60) + '\n');
  
  logger.info('📈 UPLOAD SUMMARY');
  logger.info(`✅ Successful: ${successCount}/${testCases.length}`);
  logger.info(`❌ Failed: ${failureCount}/${testCases.length}`);
  logger.info(`📁 Results saved: ${resultsFile}`);

  if (failureCount > 0) {
    console.log('📋 Created Tasks:');
    Object.entries(results).forEach(([id, key]) => {
      console.log(`   ${id}: ${JIRA_CONFIG.baseUrl}/browse/${key}`);
      logger.info(`   ${id}: ${JIRA_CONFIG.baseUrl}/browse/${key}`);
    });
  } else {
    console.log('🎉 All test cases successfully uploaded to Jira!\n');
    console.log('📋 Created Tasks:');
    logger.info('🎉 All test cases successfully uploaded to Jira!');
    Object.entries(results).forEach(([id, key]) => {
      console.log(`   ${id}: ${JIRA_CONFIG.baseUrl}/browse/${key}`);
      logger.info(`   ${id}: ${JIRA_CONFIG.baseUrl}/browse/${key}`);
    });
  }
}

// Run the script
updateJiraWithTestCases().catch((error) => {
  console.error('Fatal error:', error);
  const logger = createLogger('create-test-tasks');
  logger.error(`Fatal error: ${error}`);
  process.exit(1);
});
