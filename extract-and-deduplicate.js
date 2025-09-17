const fs = require('fs');

console.log('🔧 Extracting and deduplicating vocabulary entries...\n');

// Read the file
const content = fs.readFileSync('src/data/vocabulary.ts', 'utf8');

// Find vocabulary array boundaries  
const startPos = content.indexOf('export const vocabularyData: VocabularyWord[] = [');
const openBrace = content.indexOf('[', startPos);
const closeBrace = content.lastIndexOf(']; \n\nexport const categories');

if (openBrace === -1 || closeBrace === -1) {
  console.error('Could not find array boundaries');
  process.exit(1);
}

// Extract sections
const beforeData = content.substring(0, openBrace + 1);
const afterData = content.substring(closeBrace);
const dataSection = content.substring(openBrace + 1, closeBrace);

console.log('Processing data section...');

// Split into individual entries by finding complete objects
let entries = [];
let current = '';
let depth = 0;
let inString = false;
let stringChar = '';
let lineNum = 0;

const lines = dataSection.split('\n');
for (const line of lines) {
  lineNum++;
  current += line + '\n';
  
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    const prev = i > 0 ? line[i-1] : '';
    
    // Handle string literals
    if ((char === "\"" || char === '\'') && prev !== '\\') {
      if (!inString) {
        inString = true;
        stringChar = char;
      } else if (char === stringChar) {
        inString = false;
      }
    }
    
    // Track object depth
    if (!inString) {
      if (char === '{') depth++;
      if (char === '}') depth--;
      
      // Complete entry
      if (depth === 0 && current.trim()) {
        let entry = current.trim();
        if (entry.endsWith(',')) {
          entry = entry.slice(0, -1);
        }
        if (entry.length > 10) { // Valid entry
          entries.push(entry);
        }
        current = '';
      }
    }
  }
}

console.log(`Found ${entries.length} entries`);

// Extract Japanese and ID from each entry
const processedEntries = [];
entries.forEach((entry, index) => {
  const japaneseMatch = entry.match(/japanese:\s*"([^"]+)"/);
  const idMatch = entry.match(/id:\s*"([^"]+)"/);
  
  if (japaneseMatch && idMatch) {
    processedEntries.push({
      index,
      japanese: japaneseMatch[1],
      id: idMatch[1],
      entry: entry
    });
  }
});

console.log(`Processed ${processedEntries.length} valid entries`);

// Find duplicates by Japanese word
const japaneseMap = new Map();
processedEntries.forEach(item => {
  if (!japaneseMap.has(item.japanese)) {
    japaneseMap.set(item.japanese, []);
  }
  japaneseMap.get(item.japanese).push(item);
});

// Identify duplicates
const duplicates = [];
const unique = [];

japaneseMap.forEach((items, japanese) => {
  if (items.length > 1) {
    // Keep first, mark others as duplicates
    unique.push(items[0]);
    for (let i = 1; i < items.length; i++) {
      duplicates.push(items[i]);
      console.log(`Duplicate: ${japanese} (ID: ${items[i].id})`);
    }
  } else {
    unique.push(items[0]);
  }
});

console.log(`\nDuplication Analysis:`);
console.log(`- Total entries: ${processedEntries.length}`);
console.log(`- Unique entries: ${unique.length}`);
console.log(`- Duplicates: ${duplicates.length}`);

// Rebuild the file with unique entries only
const uniqueEntries = unique.map(item => item.entry);
const newDataSection = uniqueEntries.join(',\n  ');
const newContent = beforeData + '\n  ' + newDataSection + '\n' + afterData;

// Write the new file
fs.writeFileSync('src/data/vocabulary.ts', newContent, 'utf8');

console.log(`\n✅ Deduplication complete!`);
console.log(`📁 File updated with ${unique.length} unique entries`);

// Verify the result
const verifyContent = fs.readFileSync('src/data/vocabulary.ts', 'utf8');
const japaneseCount = (verifyContent.match(/japanese:\s*"[^"]+"/g) || []).length;
const idCount = (verifyContent.match(/id:\s*"[^"]+"/g) || []).length;

console.log(`\nVerification:`);
console.log(`- Japanese entries found: ${japaneseCount}`);
console.log(`- ID entries found: ${idCount}`);
console.log(`- Expected unique count: ${unique.length}`);

if (japaneseCount === unique.length && idCount === unique.length) {
  console.log(`🎉 SUCCESS! All ${unique.length} entries are unique.`);
} else {
  console.log('⚠️  Warning: Counts don\'t match expected values');
}
