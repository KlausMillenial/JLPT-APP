const fs = require('fs');

console.log('🔧 FIXING DUPLICATE IMPORT IDENTIFIERS\n');

// Read the vocabulary file
const content = fs.readFileSync('src/data/vocabulary.ts', 'utf8');
const lines = content.split('\n');

// Track seen import variable names and their counts
const seenImports = new Map();
const importLines = [];
const duplicateLines = [];

// Find all import lines
for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.startsWith('import ') && line.includes(' from \'@/assets/')) {
        const match = line.match(/import\s+(\w+)\s+from/);
        if (match) {
            const varName = match[1];
            importLines.push({ lineNumber: i, line, varName, originalLine: line });
            
            if (seenImports.has(varName)) {
                seenImports.set(varName, seenImports.get(varName) + 1);
                duplicateLines.push({ lineNumber: i, varName, count: seenImports.get(varName) });
            } else {
                seenImports.set(varName, 1);
            }
        }
    }
}

console.log(`📊 Found ${importLines.length} total imports`);
console.log(`🚨 Found ${duplicateLines.length} duplicate import identifiers`);

if (duplicateLines.length === 0) {
    console.log('✅ No duplicate imports found!');
    process.exit(0);
}

// Create mapping of old names to new names
const nameMapping = new Map();
const duplicateCounts = new Map();

// First pass: identify what needs to be renamed
duplicateLines.forEach(({ varName, count }) => {
    if (!duplicateCounts.has(varName)) {
        duplicateCounts.set(varName, 1); // Start from 1 since first occurrence keeps original name
    }
    duplicateCounts.set(varName, duplicateCounts.get(varName) + 1);
});

// Second pass: create the actual mappings and modify lines
let modifiedLines = [...lines];

// Track which variables we've seen and assign incremental numbers
const processedVars = new Map();

for (let i = 0; i < modifiedLines.length; i++) {
    const line = modifiedLines[i];
    if (line.startsWith('import ') && line.includes(' from \'@/assets/')) {
        const match = line.match(/import\s+(\w+)\s+from/);
        if (match) {
            const varName = match[1];
            
            if (seenImports.get(varName) > 1) {
                // This variable name has duplicates
                if (!processedVars.has(varName)) {
                    // First occurrence - keep original name
                    processedVars.set(varName, 1);
                } else {
                    // Subsequent occurrence - rename it
                    const count = processedVars.get(varName) + 1;
                    processedVars.set(varName, count);
                    
                    const newVarName = `${varName}${count}`;
                    const newLine = line.replace(`import ${varName}`, `import ${newVarName}`);
                    modifiedLines[i] = newLine;
                    
                    nameMapping.set(`${varName}_line_${i}`, newVarName);
                    
                    console.log(`🔄 Renamed: ${varName} → ${newVarName} (line ${i + 1})`);
                }
            }
        }
    }
}

// Now we need to update any references in the vocabulary data
// Find the vocabularyData section
const vocabularyStartIndex = modifiedLines.findIndex(line => line.includes('export const vocabularyData'));
if (vocabularyStartIndex === -1) {
    console.error('❌ Could not find vocabularyData array');
    process.exit(1);
}

// Update references in the vocabulary data
for (let i = vocabularyStartIndex; i < modifiedLines.length; i++) {
    let line = modifiedLines[i];
    
    // Check if this line references any of the renamed variables
    nameMapping.forEach((newName, oldKey) => {
        // Extract the original variable name and line number from the key
        const [originalVar, , lineNum] = oldKey.split('_');
        
        // Create a regex to match the variable usage in image field
        const imageRegex = new RegExp(`image:\\s*${originalVar}(?=[,\\s}])`, 'g');
        
        if (imageRegex.test(line)) {
            line = line.replace(imageRegex, `image: ${newName}`);
            modifiedLines[i] = line;
        }
    });
}

// Write the fixed content back to file
const newContent = modifiedLines.join('\n');
fs.writeFileSync('src/data/vocabulary.ts', newContent, 'utf8');

console.log(`\n✅ Fixed ${duplicateLines.length} duplicate import identifiers`);
console.log('📁 Updated vocabulary.ts with unique import names');
console.log('🎯 TypeScript errors should now be resolved');
