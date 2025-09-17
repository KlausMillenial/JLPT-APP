const fs = require('fs');

console.log('🧹 Starting comprehensive vocabulary deduplication...\n');

// Read the vocabulary file
let content = fs.readFileSync('src/data/vocabulary.ts', 'utf8');

// Find the vocabularyData array
const startMarker = 'export const vocabularyData: VocabularyWord[] = [';
const endMarker = '];';

const startIndex = content.indexOf(startMarker);
const startBracket = content.indexOf('[', startIndex);
const endBracket = content.lastIndexOf(endMarker);

if (startIndex === -1 || endBracket === -1) {
  console.error('❌ Could not locate vocabularyData array');
  process.exit(1);
}

// Extract the three parts
const beforeArray = content.substring(0, startBracket + 1);
const afterArray = content.substring(endBracket);
const arrayContent = content.substring(startBracket + 1, endBracket);

console.log('📊 Parsing vocabulary entries...');

// Parse individual entries
const entries = [];
let currentEntry = '';
let braceDepth = 0;
let inString = false;
let stringChar = '';

for (let i = 0; i < arrayContent.length; i++) {
  const char = arrayContent[i];
  const prevChar = i > 0 ? arrayContent[i - 1] : '';
  
  currentEntry += char;
  
  // Handle string literals
  if ((char === '"' || char === "'") && prevChar !== '\\') {
    if (!inString) {
      inString = true;
      stringChar = char;
    } else if (char === stringChar) {
      inString = false;
      stringChar = '';
    }
  }
  
  // Count braces only when not in strings
  if (!inString) {
    if (char === '{') {
      braceDepth++;
    } else if (char === '}') {
      braceDepth--;
      
      if (braceDepth === 0 && currentEntry.trim()) {
        // Complete entry found - clean it up
        let cleanEntry = currentEntry.trim();
        if (cleanEntry.endsWith(',')) {
          cleanEntry = cleanEntry.slice(0, -1);
        }
        
        entries.push(cleanEntry);
        currentEntry = '';
      }
    }
  }
}

console.log(`✅ Parsed ${entries.length} entries`);

// Extract data for deduplication
const processedEntries = entries.map(entry => {
  const idMatch = entry.match(/id:\s*["']([^"']+)["]/);
  const japaneseMatch = entry.match(/japanese:\s*["']([^"']+)["]/);
  
  return {
    entry,
    id: idMatch ? idMatch[1] : null,
    japanese: japaneseMatch ? japaneseMatch[1] : null
  };
}).filter(item => item.id && item.japanese);

console.log(`🔍 Processing ${processedEntries.length} valid entries for deduplication...\n`);

// Deduplicate by keeping first occurrence of each unique japanese + id combination
const seen = new Set();
const uniqueEntries = [];
const duplicates = [];

processedEntries.forEach((item, index) => {
  const key = `${item.japanese}|${item.id}`;
  
  if (!seen.has(key)) {
    seen.add(key);
    uniqueEntries.push(item.entry);
  } else {
    duplicates.push(`${item.japanese} (${item.id})`);
    console.log(`🗑️  Removing duplicate: ${item.japanese} (${item.id})`);
  }
});

console.log(`\n📈 Deduplication Summary:`);
console.log(`- Original entries: ${processedEntries.length}`);
console.log(`- Unique entries kept: ${uniqueEntries.length}`);
console.log(`- Duplicates removed: ${duplicates.length}`);

// Reconstruct the file
const newArrayContent = uniqueEntries.join(',\n  ');
const newContent = beforeArray + '\n  ' + newArrayContent + '\n' + afterArray;

// Write the cleaned file
fs.writeFileSync('src/data/vocabulary.ts', newContent, 'utf8');

console.log(`\n🎉 Deduplication completed successfully!`);
console.log(`📚 Your vocabulary now contains ${uniqueEntries.length} unique entries.`);
console.log(`💾 File saved: src/data/vocabulary.ts`);
