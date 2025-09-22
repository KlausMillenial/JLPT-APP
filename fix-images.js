import fs from "fs";
import path from "path";

const vocabFile = path.join("src", "data", "vocabulary.ts");
const assetsDir = path.join("src", "assets");

// Read vocabulary.ts
let content = fs.readFileSync(vocabFile, "utf8");

// Find all `imageUrl: SomethingImage`
const imageVarRegex = /imageUrl:\s*([a-zA-Z0-9_]+),?/g;
let matches = [...content.matchAll(imageVarRegex)];

const foundVars = matches.map(m => m[1]);

// Find all imports
const importRegex = /import\s+([a-zA-Z0-9_]+)\s+from\s+['"]@\/assets\/([^'"]+)['"]/g;
let importMatches = [...content.matchAll(importRegex)];
const existingImports = Object.fromEntries(importMatches.map(m => [m[1], m[2]]));

let newImports = "";

// For each variable, ensure import exists
for (const variable of foundVars) {
  if (!existingImports[variable]) {
    const filename = variable
      .replace(/Image$/, "")
      .replace(/([A-Z])/g, "-$1")
      .toLowerCase()
      .replace(/^-/, "") + ".png";

    newImports += `import ${variable} from '@/assets/${filename}';\n`;

    // Ensure placeholder image exists
    const imgPath = path.join(assetsDir, filename);
    if (!fs.existsSync(imgPath)) {
      fs.writeFileSync(imgPath, Buffer.from([])); // blank PNG file
      console.log(`⚠️ Created placeholder: ${imgPath}`);
    }
  }
}

// Add new imports to top of file
if (newImports) {
  content = newImports + "\n" + content;
  fs.writeFileSync(vocabFile, content, "utf8");
  console.log("✅ Missing imports added to vocabulary.ts");
} else {
  console.log("✅ All imports already present");
}
