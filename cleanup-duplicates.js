const fs = require('fs');

console.log('Cleaning up duplicates in vocabulary.ts...');

// Read the vocabulary file
const content = fs.readFileSync('src/data/vocabulary.ts', 'utf8');

// Find the start and end of the vocabularyData array
const arrayStart = content.indexOf('export const vocabularyData: VocabularyWord[] = [');
const arrayEnd = content.lastIndexOf(''];') + 2;

if (arrayStart === -1 || arrayEnd === -1) {
  console.error('Could not find vocabularyData array boundaries');
  process.exit(1);
}

// Extract the parts
const beforeArray = content.substring(0, arrayStart);
const afterArray = content.substring(arrayEnd);

// Extract entries from the array content
const arrayContent = content.substring(arrayStart, arrayEnd);
const entries = [];
let currentEntry = '';
let braceDepth = 0;
let inArray = false;

const lines = arrayContent.split('\n');
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  
  if (line.includes('export const vocabularyData: VocabularyWord[] = [')) {
    inArray = true;
    continue;
  }
  
  if (!inArray) continue;
  
  if (line.trim() === '];') {
    break;
  }

  currentEntry += line + '\n';
  
  // Count braces to determine complete entries
  for (const char of line) {
    if (char === '{') braceDepth++;
    if (char === '}') braceDepth--;
  }
  
  // If we're back to depth 0 and have content, we have a complete entry
  if (braceDepth === 0 && currentEntry.trim()) {
    const trimmed = currentEntry.trim();
    if (trimmed.endsWith(',')) {
      entries.push(trimmed);
    } else if (trimmed.endsWith('}')) {
      entries.push(trimmed + ',');
    }
    currentEntry = '';
  }
}

console.log(`Found ${entries.length} entries`);

// Parse entries to extract id and japanese for duplicate detection
const parsedEntries = entries.map((entry, index) => {
  const idMatch = entry.match(/id:\s*["']([^"']+)["']/);
  const japaneseMatch = entry.match(/japanese:\s*["']([^"']+)["']/);
  
  return {
    id: idMatch ? idMatch[1] : `unknown_${index}`,
    japanese: japaneseMatch ? japaneseMatch[1] : `unknown_${index}`,
    entry: entry,
    originalIndex: index
  };
});

// Remove duplicates - keep first occurrence of each id and japanese
const seenIds = new Set();
const seenJapanese = new Set();
const uniqueEntries = [];

parsedEntries.forEach((parsed) => {
  if (!seenIds.has(parsed.id) && !seenJapanese.has(parsed.japanese)) {
    seenIds.add(parsed.id);
    seenJapanese.add(parsed.japanese);
    uniqueEntries.push(parsed.entry);
  } else {
    console.log(`Removing duplicate: ${parsed.id} (${parsed.japanese})`);
  }
});

console.log(`Removed ${entries.length - uniqueEntries.length} duplicates`);
console.log(`Keeping ${uniqueEntries.length} unique entries`);

// Reconstruct the file
const newArrayContent = 'export const vocabularyData: VocabularyWord[] = [\n' + 
                       uniqueEntries.join('\n') + 
                       '\n];';

const newContent = beforeArray + newArrayContent + afterArray;

// Write the cleaned file
fs.writeFileSync('src/data/vocabulary.ts', newContent, 'utf8');

console.log('✅ Duplicates removed successfully!');
console.log(`- Original entries: ${entries.length}`);
console.log(`- Unique entries: ${uniqueEntries.length}`);
console.log(`- Duplicates removed: ${entries.length - uniqueEntries.length}`);
