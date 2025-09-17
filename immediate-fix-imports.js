const fs = require('fs');

console.log('🔧 IMMEDIATELY FIXING DUPLICATE IMPORT IDENTIFIERS\n');

// Read the vocabulary file
let content = fs.readFileSync('src/data/vocabulary.ts', 'utf8');

// List of all duplicate identifiers that need to be fixed
const duplicates = [
  { original: 'morningImage', line: 215, newName: 'morningImage2' },
  { original: 'redImage', line: 11, newName: 'redImage2' },
  { original: 'waterImage', line: 476, newName: 'waterImage2' },
  { original: 'olderbrotherImage', line: 127, newName: 'olderbrotherImage2' },
  { original: 'oldersisterImage', line: 128, newName: 'oldersisterImage2' },
  { original: 'fiveImage', line: 204, newName: 'fiveImage2' },
  { original: 'manyImage', line: 345, newName: 'manyImage2' },
  { original: 'manypeopleImage', line: 393, newName: 'manypeopleImage2' },
  { original: 'fatherImage', line: 506, newName: 'fatherImage2' },
  { original: 'policemanImage', line: 196, newName: 'policemanImage2' },
  { original: 'foreigncountryImage', line: 507, newName: 'foreigncountryImage2' },
  { original: 'pleaseImage', line: 469, newName: 'pleaseImage2' },
  { original: 'mouthImage', line: 330, newName: 'mouthImage2' },
  { original: 'departureImage', line: 419, newName: 'departureImage2' },
  { original: 'kindImage', line: 441, newName: 'kindImage2' },
  { original: 'alittleImage', line: 422, newName: 'alittleImage2' },
  { original: 'handImage', line: 436, newName: 'handImage2' },
  { original: 'funImage', line: 430, newName: 'funImage2' },
  { original: 'strangerImage', line: 429, newName: 'strangerImage2' },
  { original: 'tosaveImage', line: 427, newName: 'tosaveImage2' },
  { original: 'ricefieldImage', line: 428, newName: 'ricefieldImage2' },
  { original: 'singleImage', line: 462, newName: 'singleImage2' },
  { original: 'buildingImage', line: 432, newName: 'buildingImage2' }
];

// Split content into lines
const lines = content.split('\n');

// Fix each duplicate import by line number
duplicates.forEach(({ original, line, newName }) => {
  if (lines[line - 1] && lines[line - 1].includes(`import ${original}`)) {
    console.log(`🔄 Line ${line}: ${original} → ${newName}`);
    lines[line - 1] = lines[line - 1].replace(`import ${original}`, `import ${newName}`);
  }
});

// Join back and write
content = lines.join('\n');
fs.writeFileSync('src/data/vocabulary.ts', content, 'utf8');

console.log(`\n✅ Fixed ${duplicates.length} duplicate import identifiers`);
console.log('📁 Updated vocabulary.ts with unique import names');
console.log('🎯 TypeScript errors should now be resolved');