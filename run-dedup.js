const fs = require('fs');

console.log('🔍 Removing ALL duplicate Japanese words from vocabulary...');

// Read the vocabulary file
let content = fs.readFileSync('src/data/vocabulary.ts', 'utf8');

// Extract all entries using regex
const entryPattern = /\{\s*(?:(?!^\s*\}).)*?japanese:\s*["']([^"']+)["'].*?\}/gms;
const matches = [...content.matchAll(entryPattern)];

console.log(`📊 Found ${matches.length} total entries`);

// Track seen Japanese words and duplicates
const seenJapanese = new Set();
const duplicates = [];
const entriesToKeep = [];

matches.forEach((match, index) => {
  const fullEntry = match[0];
  const japanese = match[1];
  
  if (seenJapanese.has(japanese)) {
    duplicates.push({
      japanese,
      entry: fullEntry,
      index
    });
  } else {
    seenJapanese.add(japanese);
    entriesToKeep.push({
      japanese,
      entry: fullEntry,
      index
    });
  }
});

console.log(`\n🚨 Found ${duplicates.length} duplicates to remove:`);
duplicates.forEach(dup => {
  console.log(`- Removing duplicate: "${dup.japanese}"`);
});

console.log(`\n✅ Keeping ${entriesToKeep.length} unique entries`);

// Sort duplicates by index in reverse order to avoid index shifting
duplicates.sort((a, b) => b.index - a.index);

// Remove duplicates from content
duplicates.forEach(dup => {
  content = content.replace(dup.entry, '');
});

// Clean up extra commas and whitespace
content = content.replace(/,\s*,/g, ',');  // Remove double commas
content = content.replace(/,\s*\]/g, ']');  // Remove trailing comma before ]
content = content.replace(/\[\s*,/g, '[');  // Remove leading comma after [

// Write the cleaned file
fs.writeFileSync('src/data/vocabulary.ts', content, 'utf8');

console.log('\n🎉 Deduplication complete!');
console.log(`📈 Statistics:`);
console.log(`- Original entries: ${matches.length}`);
console.log(`- Unique entries kept: ${entriesToKeep.length}`);
console.log(`- Duplicates removed: ${duplicates.length}`);