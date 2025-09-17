const fs = require('fs');

console.log('🧹 Removing ALL duplicate vocabulary entries...');

// Read the vocabulary file
let content = fs.readFileSync('src/data/vocabulary.ts', 'utf8');

// Find the vocabularyData array bounds
const arrayStart = content.indexOf('export const vocabularyData: VocabularyWord[] = [');
const arrayStartIndex = content.indexOf('[', arrayStart);
const arrayEndIndex = content.lastIndexOf('];');

if (arrayStartIndex === -1 || arrayEndIndex === -1) {
  console.error('❌ Could not find vocabularyData array bounds');
  process.exit(1);
}

// Extract parts
const beforeArray = content.substring(0, arrayStartIndex + 1);
const afterArray = content.substring(arrayEndIndex);
const arrayContent = content.substring(arrayStartIndex + 1, arrayEndIndex);

// Parse entries
const entries = [];
let currentEntry = '';
let braceCount = 0;
let inEntry = false;

const lines = arrayContent.split('\n');
for (const line of lines) {
  const trimmedLine = line.trim();
  
  if (trimmedLine.includes('{')) {
    braceCount += (trimmedLine.match(/\{/g) || []).length;
    inEntry = true;
  }
  
  if (inEntry) {
    currentEntry += line + '\n';
  }
  
  if (trimmedLine.includes('}')) {
    braceCount -= (trimmedLine.match(/\}/g) || []).length;
    
    if (braceCount === 0 && inEntry) {
      // Complete entry found
      entries.push(currentEntry.trim());
      currentEntry = '';
      inEntry = false;
    }
  }
}

console.log(`📊 Found ${entries.length} total entries`);

// Extract Japanese words and IDs for deduplication
const seenJapanese = new Set();
const seenIds = new Set();
const uniqueEntries = [];
let duplicatesRemoved = 0;

entries.forEach(entry => {
  // Extract Japanese and ID
  const japaneseMatch = entry.match(/japanese:\s*["']([^"']+)["']/);
  const idMatch = entry.match(/id:\s*["']([^"']+)["']/);
  
  if (japaneseMatch && idMatch) {
    const japanese = japaneseMatch[1];
    const id = idMatch[1];
    
    // Keep only if both Japanese and ID are unique
    if (!seenJapanese.has(japanese) && !seenIds.has(id)) {
      seenJapanese.add(japanese);
      seenIds.add(id);
      uniqueEntries.push(entry);
    } else {
      duplicatesRemoved++;
      console.log(`🗑️  Removed duplicate: ${japanese} (ID: ${id})`);
    }
  }
});

console.log(`\n✅ Deduplication complete:`);
console.log(`- Original entries: ${entries.length}`);
console.log(`- Unique entries kept: ${uniqueEntries.length}`);
console.log(`- Duplicates removed: ${duplicatesRemoved}`);

// Rebuild the file
const newArrayContent = uniqueEntries.join(',\n  ');
const newFileContent = beforeArray + '\n  ' + newArrayContent + '\n' + afterArray;

// Write the cleaned file
fs.writeFileSync('src/data/vocabulary.ts', newFileContent, 'utf8');

console.log(`\n🎉 Successfully cleaned vocabulary.ts!`);
console.log(`📚 Your vocabulary now contains ${uniqueEntries.length} unique entries.`);
