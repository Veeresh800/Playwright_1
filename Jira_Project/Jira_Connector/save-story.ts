import { getFullStoryDetails } from '../utils/story-connector';
import * as fs from 'fs';
import * as path from 'path';
import * as winston from 'winston';
import { createLogger } from '../utils/logger';

(async () => {
  const logger = createLogger('save-story');
  
  try {
    logger.info('Starting story save process...');
    const storyDetails = await getFullStoryDetails();
    
    // Create output directory if it doesn't exist
    const outputDir = path.join(__dirname, '../reports/story-output');
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    
    // Save as JSON file
    const filename = `${storyDetails.storyName}-${storyDetails.storyNumber}.json`;
    const filePath = path.join(outputDir, filename);
    
    fs.writeFileSync(filePath, JSON.stringify(storyDetails, null, 2));
    
    console.log('\n✅ Story details saved to:');
    console.log(`📁 ${filePath}\n`);
    logger.info(`✅ Story details saved to: ${filePath}`);
    
    // Also save description as separate text file
    const descFilePath = path.join(outputDir, `${storyDetails.storyName}-${storyDetails.storyNumber}-description.txt`);
    fs.writeFileSync(descFilePath, storyDetails.description);
    
    console.log(`📄 Description saved to:`);
    console.log(`📁 ${descFilePath}\n`);
    logger.info(`✅ Description saved to: ${descFilePath}`);
    
  } catch (error) {
    console.error('Error:', error);
    logger.error(`Error: ${error}`);
  }
})();
