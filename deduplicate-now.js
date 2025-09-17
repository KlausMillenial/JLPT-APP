const fs = require('fs');

console.log('🚀 IMMEDIATE DEDUPLICATION: Cleaning vocabulary.ts...\n');

// Read file
const originalContent = fs.readFileSync('src/data/vocabulary.ts', 'utf8');

// Find array boundaries more precisely
const arrayStartMarker = 'export const vocabularyData: VocabularyWord[] = [';
const arrayEndMarker = '];\n\nexport const categories';

const startIndex = originalContent.indexOf(arrayStartMarker);
const arrayOpenBrace = originalContent.indexOf('[', startIndex);
const arrayCloseIndex = originalContent.indexOf(arrayEndMarker);

if (startIndex === -1 || arrayCloseIndex === -1) {
  console.error('❌ Cannot find vocabulary array boundaries');
  process.exit(1);
}

// Extract sections
const beforeArray = originalContent.substring(0, arrayOpenBrace + 1);
const afterArray = originalContent.substring(arrayCloseIndex);
const arrayBody = originalContent.substring(arrayOpenBrace + 1, arrayCloseIndex);

console.log('📝 Parsing entries...');

// Parse entries more carefully
const entries = [];
let currentEntry = '';
let braceDepth = 0;
let inQuote = false;
let quoteChar = '';

for (let i = 0; i < arrayBody.length; i++) {
  const char = arrayBody[i];
  const prevChar = i > 0 ? arrayBody[i-1] : '';
  
  currentEntry += char;
  
  // Handle quotes (strings)
  if ((char === "\"" || char === "'") && prevChar !== '\\') {
    if (!inQuote) {
      inQuote = true;
      quoteChar = char;
    } else if (char === quoteChar) {
      inQuote = false;
      quoteChar = '';
    }
  }
  
  // Count braces when not in quotes
  if (!inQuote) {
    if (char === '{') {
      braceDepth++;
    } else if (char === '}') {
      braceDepth--;
      
      if (braceDepth === 0) {
        // Entry complete
        let cleanEntry = currentEntry.trim();
        
        // Remove trailing comma
        if (cleanEntry.endsWith(',')) {
          cleanEntry = cleanEntry.slice(0, -1);
        }
        
        // Only add if it looks like a valid entry
        if (cleanEntry.includes('id:') && cleanEntry.includes('japanese:')) {
          entries.push(cleanEntry);
        }
        
        currentEntry = '';
      }
    }
  }
}

console.log(`📊 Found ${entries.length} total entries`);

// Extract metadata for deduplication
const processed = entries.map((entry, index) => {
  const idRegex = /id:\s*["']([^"']+)["]/;
  const japaneseRegex = /japanese:\s*["']([^"']+)["]/;
  
  const idMatch = entry.match(idRegex);
  const japaneseMatch = entry.match(japaneseRegex);
  
  return {
    index,
    entry,
    id: idMatch ? idMatch[1] : `unknown_${index}`,
    japanese: japaneseMatch ? japaneseMatch[1] : `unknown_${index}`
  };
}).filter(item => item.id.startsWith('unknown_') === false && item.japanese.startsWith('unknown_') === false);

console.log(`✅ Extracted ${processed.length} valid entries for processing`);

// Deduplicate: keep first occurrence of each Japanese word
const seenJapanese = new Set();
const seenIds = new Set();
const uniqueEntries = [];
let removedCount = 0;

processed.forEach(item => {
  const key = item.japanese;
  
  if (!seenJapanese.has(key) && !seenIds.has(item.id)) {
    seenJapanese.add(key);
    seenIds.add(item.id);
    uniqueEntries.push(item.entry);
  } else {
    removedCount++;
    console.log(`🗑️  Removed duplicate: "${item.japanese}" (${item.id})`);
  }
});

console.log(`\n📈 Deduplication Results:`);
console.log(`- Original entries: ${processed.length}`);
console.log(`- Unique entries: ${uniqueEntries.length}`);
console.log(`- Duplicates removed: ${removedCount}`);

// Rebuild file
const cleanArrayBody = uniqueEntries.join(',\n  ');
const newFileContent = beforeArray + '\n  ' + cleanArrayBody + '\n' + afterArray;

// Write the result
fs.writeFileSync('src/data/vocabulary.ts', newFileContent, 'utf8');

console.log('\n🎉 Deduplication completed successfully!');

// Final verification
const finalContent = fs.readFileSync('src/data/vocabulary.ts', 'utf8');
const finalJapaneseMatches = [...finalContent.matchAll(/japanese:\s*["']([^"']+)["]/g)];
const finalIdMatches = [...finalContent.matchAll(/id:\s*["']([^"']+)["]/g)];

const finalUniqueJapanese = new Set(finalJapaneseMatches.map(m => m[1]));
const finalUniqueIds = new Set(finalIdMatches.map(m => m[1]));

console.log(`\n📊 Final Verification:`);
console.log(`- Japanese entries: ${finalJapaneseMatches.length}`);
console.log(`- Unique Japanese: ${finalUniqueJapanese.size}`);
console.log(`- ID entries: ${finalIdMatches.length}`);
console.log(`- Unique IDs: ${finalUniqueIds.size}`);

if (finalJapaneseMatches.length === finalUniqueJapanese.size && 
    finalIdMatches.length === finalUniqueIds.size) {
  console.log(`\n✨ PERFECT! ${uniqueEntries.length} completely unique vocabulary entries!`);
} else {
  console.log('\n⚠️  Some duplicates may still exist');
}

console.log(`\n💾 File saved: src/data/vocabulary.ts`);
console.log(`🎯 Your app now has ${uniqueEntries.length} unique Japanese vocabulary words!`);
