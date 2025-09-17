const fs = require('fs');

console.log('🔧 FINAL COMPREHENSIVE DEDUPLICATION TOOL');
console.log('Removing ALL redundant Japanese words...\n');

// Read the original file
const originalContent = fs.readFileSync('src/data/vocabulary.ts', 'utf8');

// Extract imports section
const importsEnd = originalContent.indexOf('export interface VocabularyWord');
const importsSection = originalContent.substring(0, importsEnd);

// Extract the array content between [ and ];
const arrayStart = originalContent.indexOf('export const vocabularyData: VocabularyWord[] = [');
const arrayEnd = originalContent.lastIndexOf('};') + 2;

if (arrayStart === -1 || arrayEnd === -1) {
  console.error('❌ Could not find vocabulary array boundaries');
  process.exit(1);
}

const beforeArray = originalContent.substring(0, arrayStart);
const afterArray = originalContent.substring(arrayEnd);

// Extract individual entries
const arrayContent = originalContent.substring(arrayStart, arrayEnd);

// More robust entry extraction
const entries = [];
let currentEntry = '';
let braceDepth = 0;
let inEntry = false;

const lines = arrayContent.split('\n');
for (let i = 0; i < lines.length; i++) {
  const line = lines[i].trim();
  
  // Skip the array declaration line
  if (line.includes('export const vocabularyData: VocabularyWord[] = [')) {
    continue;
  }
  
  // Skip the closing array bracket
  if (line === '];') {
    break;
  }
  
  // Track when we enter an entry
  if (line.startsWith('{') || (line.includes('{') && !inEntry)) {
    inEntry = true;
    currentEntry = lines[i] + '\n';
    braceDepth = (line.match(/{/g) || []).length - (line.match(/}/g) || []).length;
    
    if (braceDepth === 0) {
      // Single-line entry
      entries.push(currentEntry.trim());
      currentEntry = '';
      inEntry = false;
    }
    continue;
  }
  
  // Continue building the current entry
  if (inEntry) {
    currentEntry += lines[i] + '\n';
    braceDepth += (line.match(/{/g) || []).length - (line.match(/}/g) || []).length;
    
    // Entry is complete when braceDepth reaches 0
    if (braceDepth === 0) {
      entries.push(currentEntry.trim());
      currentEntry = '';
      inEntry = false;
    }
  }
}

console.log(`📊 Extracted ${entries.length} entries for analysis`);

// Parse each entry to extract Japanese word and ID
const parsedEntries = [];
entries.forEach((entry, index) => {
  const japaneseMatch = entry.match(/japanese:\s*["']([^"']+)["']/);
  const idMatch = entry.match(/id:\s*["']([^"']+)["']/);
  
  if (japaneseMatch && idMatch) {
    parsedEntries.push({
      japanese: japaneseMatch[1],
      id: idMatch[1],
      entry: entry,
      index: index
    });
  }
});

console.log(`📝 Successfully parsed ${parsedEntries.length} entries`);

// Find duplicates based on Japanese text
const seenJapanese = new Map();
const uniqueEntries = [];
const duplicatesFound = [];

parsedEntries.forEach((parsed) => {
  if (seenJapanese.has(parsed.japanese)) {
    // This is a duplicate
    const original = seenJapanese.get(parsed.japanese);
    duplicatesFound.push({
      japanese: parsed.japanese,
      duplicate_id: parsed.id,
      original_id: original.id
    });
  } else {
    // First occurrence - keep it
    seenJapanese.set(parsed.japanese, parsed);
    uniqueEntries.push(parsed.entry);
  }
});

// Report findings
console.log(`\n🎯 DEDUPLICATION RESULTS:`);
console.log(`- Total entries: ${parsedEntries.length}`);
console.log(`- Unique Japanese words: ${uniqueEntries.length}`);
console.log(`- Duplicates removed: ${duplicatesFound.length}\n`);

if (duplicatesFound.length > 0) {
  console.log('🗑️ REMOVED DUPLICATES:');
  duplicatesFound.forEach(dup => {
    console.log(`- "${dup.japanese}": removed ${dup.duplicate_id} (keeping ${dup.original_id})`);
  });
  console.log('');
}

// Reconstruct the file with only unique entries
const cleanedArrayContent = 'export const vocabularyData: VocabularyWord[] = [\n  ' + 
                           uniqueEntries.join(',\n  ') + 
                           '\n];';

const newContent = beforeArray + cleanedArrayContent + afterArray;

// Write the cleaned file
fs.writeFileSync('src/data/vocabulary.ts', newContent, 'utf8');

console.log('✅ DEDUPLICATION COMPLETED SUCCESSFULLY!');
console.log(`📁 Updated src/data/vocabulary.ts with ${uniqueEntries.length} unique entries`);
console.log(`🎉 Removed ${duplicatesFound.length} duplicate entries`);
