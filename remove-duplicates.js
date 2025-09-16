const fs = require('fs');

console.log('Starting deduplication process...');

// Read the vocabulary file
const fileContent = fs.readFileSync('src/data/vocabulary.ts', 'utf8');

// Find duplicates by analyzing the structure
const duplicateIds = new Set();
const duplicateJapanese = new Set();
const seenIds = new Set();
const seenJapanese = new Set();

// Find all entries and their line positions
const lines = fileContent.split('\n');
const entriesToRemove = [];

let currentEntry = null;
let entryStartLine = -1;
let braceDepth = 0;
let inVocabularyArray = false;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i].trim();
  
  // Detect start of vocabulary array
  if (line.includes('export const vocabularyData: VocabularyWord[] = [')) {
    inVocabularyArray = true;
    continue;
  }
  
  // Detect end of vocabulary array
  if (inVocabularyArray && line === '];') {
    inVocabularyArray = false;
    break;
  }
  
  if (!inVocabularyArray) continue;
  
  // Track brace depth
  const openBraces = (line.match(/{/g) || []).length;
  const closeBraces = (line.match(/}/g) || []).length;
  braceDepth += openBraces - closeBraces;
  
  // Start of new entry
  if (line.startsWith('{') && braceDepth === 1) {
    entryStartLine = i;
    currentEntry = { id: null, japanese: null };
  }
  
  // Extract ID and Japanese from current entry
  if (currentEntry && line.includes('id:')) {
    const idMatch = line.match(/id:\s*"([^"]+)"/);
    if (idMatch) currentEntry.id = idMatch[1];
  }
  
  if (currentEntry && line.includes('japanese:')) {
    const japaneseMatch = line.match(/japanese:\s*"([^"]+)"/);
    if (japaneseMatch) currentEntry.japanese = japaneseMatch[1];
  }
  
  // End of entry
  if (braceDepth === 0 && currentEntry && currentEntry.id && currentEntry.japanese) {
    const isDuplicateId = seenIds.has(currentEntry.id);
    const isDuplicateJapanese = seenJapanese.has(currentEntry.japanese);
    
    if (isDuplicateId || isDuplicateJapanese) {
      console.log(`Found duplicate: ${currentEntry.id} (${currentEntry.japanese}) - ID dup: ${isDuplicateId}, Japanese dup: ${isDuplicateJapanese}`);
      entriesToRemove.push({
        startLine: entryStartLine,
        endLine: i,
        id: currentEntry.id,
        japanese: currentEntry.japanese
      });
      
      if (isDuplicateId) duplicateIds.add(currentEntry.id);
      if (isDuplicateJapanese) duplicateJapanese.add(currentEntry.japanese);
    } else {
      seenIds.add(currentEntry.id);
      seenJapanese.add(currentEntry.japanese);
    }
    
    currentEntry = null;
    entryStartLine = -1;
  }
}

console.log(`Total unique IDs: ${seenIds.size}`);
console.log(`Total unique Japanese words: ${seenJapanese.size}`);
console.log(`Duplicate entries to remove: ${entriesToRemove.length}`);

if (entriesToRemove.length > 0) {
  console.log('\nRemoving duplicate entries...');
  
  // Sort by line number in reverse order to avoid index shifting
  entriesToRemove.sort((a, b) => b.startLine - a.startLine);
  
  let newLines = [...lines];
  
  entriesToRemove.forEach(entry => {
    console.log(`Removing: ${entry.id} (${entry.japanese}) lines ${entry.startLine}-${entry.endLine}`);
    // Remove the entry and the comma from the previous line if it exists
    newLines.splice(entry.startLine, entry.endLine - entry.startLine + 1);
    
    // Clean up trailing comma if needed
    if (entry.startLine > 0 && newLines[entry.startLine - 1].trim().endsWith(',')) {
      const prevLine = newLines[entry.startLine - 1];
      if (newLines[entry.startLine] && newLines[entry.startLine].trim() === '];') {
        // Remove trailing comma before closing bracket
        newLines[entry.startLine - 1] = prevLine.slice(0, -1);
      }
    }
  });
  
  // Write the cleaned file
  const newContent = newLines.join('\n');
  fs.writeFileSync('src/data/vocabulary.ts', newContent);
  
  console.log(`Successfully removed ${entriesToRemove.length} duplicate entries`);
  console.log(`File reduced from ${lines.length} to ${newLines.length} lines`);
} else {
  console.log('No duplicates found!');
}

console.log('\nDeduplication complete!');