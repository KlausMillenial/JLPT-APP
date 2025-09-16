const fs = require('fs');

// Read and process the vocabulary file
const content = fs.readFileSync('src/data/vocabulary.ts', 'utf8');
const lines = content.split('\n');

// Find the start and end of the vocabulary array
let startIndex = -1;
let endIndex = -1;

for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('export const vocabularyData: VocabularyWord[] = [')) {
    startIndex = i + 1;
  }
  if (lines[i].trim() === '];' && startIndex !== -1) {
    endIndex = i;
    break;
  }
}

if (startIndex === -1 || endIndex === -1) {
  console.log('Could not find vocabulary array boundaries');
  process.exit(1);
}

console.log(`Processing vocabulary from line ${startIndex} to ${endIndex}`);

// Extract all vocabulary entries
const entries = [];
let currentEntry = [];
let braceDepth = 0;
let inEntry = false;

for (let i = startIndex; i < endIndex; i++) {
  const line = lines[i];
  const trimmedLine = line.trim();
  
  // Count braces to track entry boundaries
  const openBraces = (line.match(/{/g) || []).length;
  const closeBraces = (line.match(/}/g) || []).length;
  braceDepth += openBraces - closeBraces;
  
  if (trimmedLine.startsWith('{') && !inEntry) {
    // Start of new entry
    inEntry = true;
    currentEntry = [line];
  } else if (inEntry) {
    currentEntry.push(line);
    
    if (braceDepth === 0) {
      // End of entry
      entries.push({
        lines: [...currentEntry],
        startLine: i - currentEntry.length + 1,
        endLine: i
      });
      currentEntry = [];
      inEntry = false;
    }
  }
}

console.log(`Found ${entries.length} entries`);

// Extract ID and Japanese from each entry
const processedEntries = entries.map((entry, index) => {
  let id = null;
  let japanese = null;
  
  for (const line of entry.lines) {
    const idMatch = line.match(/id:\s*"([^"]+)"/);
    if (idMatch) id = idMatch[1];
    
    const japaneseMatch = line.match(/japanese:\s*"([^"]+)"/);
    if (japaneseMatch) japanese = japaneseMatch[1];
  }
  
  return {
    ...entry,
    id,
    japanese,
    index
  };
});

// Find duplicates
const seenIds = new Map();
const seenJapanese = new Map();
const duplicates = [];

processedEntries.forEach((entry, index) => {
  let isDuplicate = false;
  
  if (entry.id && seenIds.has(entry.id)) {
    console.log(`Duplicate ID found: ${entry.id} at entry ${index}`);
    isDuplicate = true;
  }
  
  if (entry.japanese && seenJapanese.has(entry.japanese)) {
    console.log(`Duplicate Japanese found: ${entry.japanese} (${entry.id}) at entry ${index}`);
    isDuplicate = true;
  }
  
  if (isDuplicate) {
    duplicates.push(entry);
  } else {
    if (entry.id) seenIds.set(entry.id, entry);
    if (entry.japanese) seenJapanese.set(entry.japanese, entry);
  }
});

console.log(`\nFound ${duplicates.length} duplicate entries to remove`);

if (duplicates.length > 0) {
  // Remove duplicates from the file
  const newLines = [...lines];
  
  // Sort by line number in reverse order to avoid index shifting
  duplicates.sort((a, b) => b.startLine - a.startLine);
  
  duplicates.forEach(duplicate => {
    console.log(`Removing duplicate: ${duplicate.id} (${duplicate.japanese})`);
    // Remove the entry lines
    const linesToRemove = duplicate.endLine - duplicate.startLine + 1;
    newLines.splice(duplicate.startLine, linesToRemove);
    
    // Also remove the trailing comma if it exists
    if (duplicate.startLine > 0 && newLines[duplicate.startLine - 1].trim().endsWith(',')) {
      // Check if next line is closing bracket
      if (newLines[duplicate.startLine] && newLines[duplicate.startLine].trim() === '];') {
        // Remove comma from previous line
        const prevLine = newLines[duplicate.startLine - 1];
        newLines[duplicate.startLine - 1] = prevLine.replace(/,$/, '');
      }
    }
  });
  
  // Write the cleaned file
  fs.writeFileSync('src/data/vocabulary.ts', newLines.join('\n'));
  console.log(`\nRemoved ${duplicates.length} duplicate entries`);
  console.log(`File updated: ${lines.length} -> ${newLines.length} lines`);
} else {
  console.log('\nNo duplicates found - vocabulary is already clean!');
}

// Final statistics
console.log(`\nFinal statistics:`);
console.log(`- Unique IDs: ${seenIds.size}`);
console.log(`- Unique Japanese words: ${seenJapanese.size}`);
console.log(`- Total entries: ${processedEntries.length - duplicates.length}`);