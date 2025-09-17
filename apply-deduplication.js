const fs = require('fs');

console.log('🚀 Applying deduplication to vocabulary.ts...\n');

// Read the current vocabulary file
const content = fs.readFileSync('src/data/vocabulary.ts', 'utf8');

// Extract array boundaries
const arrayStart = content.indexOf('export const vocabularyData: VocabularyWord[] = [');
const arrayOpenBrace = content.indexOf('[', arrayStart);
const arrayCloseBrace = content.lastIndexOf('];');

const prefix = content.substring(0, arrayOpenBrace + 1);
const suffix = content.substring(arrayCloseBrace);
const arrayBody = content.substring(arrayOpenBrace + 1, arrayCloseBrace);

// Parse entries by finding complete objects
const entries = [];
const lines = arrayBody.split('\n');
let currentEntry = '';
let braceCount = 0;
let inEntry = false;

for (const line of lines) {
  const trimmedLine = line.trim();
  
  // Count opening braces
  const openBraces = (trimmedLine.match(/\{/g) || []).length;
  const closeBraces = (trimmedLine.match(/\}/g) || []).length;
  
  if (openBraces > 0) {
    inEntry = true;
  }
  
  if (inEntry) {
    currentEntry += line + '\n';
    braceCount += openBraces - closeBraces;
    
    if (braceCount === 0) {
      // Entry complete
      entries.push(currentEntry.trim());
      currentEntry = '';
      inEntry = false;
    }
  }
}

console.log(`📊 Found ${entries.length} total entries`);

// Deduplicate entries
const seenJapanese = new Set();
const seenIds = new Set();
const uniqueEntries = [];
let removed = 0;

entries.forEach(entry => {
  const idMatch = entry.match(/id:\s*["']([^"']+)["']/);
  const japaneseMatch = entry.match(/japanese:\s*["']([^"']+)["']/);
  
  if (idMatch && japaneseMatch) {
    const id = idMatch[1];
    const japanese = japaneseMatch[1];
    
    if (!seenJapanese.has(japanese) && !seenIds.has(id)) {
      seenJapanese.add(japanese);
      seenIds.add(id);
      uniqueEntries.push(entry);
    } else {
      console.log(`🗑️  Removed: ${japanese} (${id})`);
      removed++;
    }
  }
});

// Rebuild file
const newArrayBody = uniqueEntries.join(',\n  ');
const newContent = prefix + '\n  ' + newArrayBody + '\n' + suffix;

fs.writeFileSync('src/data/vocabulary.ts', newContent, 'utf8');

console.log(`\n✅ Deduplication complete!`);
console.log(`- Kept: ${uniqueEntries.length} unique entries`);
console.log(`- Removed: ${removed} duplicates`);

// Verify result
const finalContent = fs.readFileSync('src/data/vocabulary.ts', 'utf8');
const finalJapanese = [...finalContent.matchAll(/japanese:\s*["']([^"']+)["']/g)];
const finalIds = [...finalContent.matchAll(/id:\s*["']([^"']+)["']/g)];
const uniqueJapaneseSet = new Set(finalJapanese.map(m => m[1]));
const uniqueIdSet = new Set(finalIds.map(m => m[1]));

console.log(`\n📈 Final verification:`);
console.log(`- Total Japanese entries: ${finalJapanese.length}`);
console.log(`- Unique Japanese words: ${uniqueJapaneseSet.size}`);
console.log(`- Total ID entries: ${finalIds.length}`);
console.log(`- Unique IDs: ${uniqueIdSet.size}`);

if (finalJapanese.length === uniqueJapaneseSet.size && finalIds.length === uniqueIdSet.size) {
  console.log('🎉 SUCCESS: No duplicates remaining!');
} else {
  console.log('⚠️  WARNING: Some duplicates may still exist');
}