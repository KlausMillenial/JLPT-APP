import fs from "fs";

const filePath = "./src/data/vocabulary.ts"; // adjust path if needed
let content = fs.readFileSync(filePath, "utf8");

content = content.replace(
  /imageUrl:\s*".*?"/g,
  (match, offset, string) => {
    const objText = string.slice(offset - 300, offset + 300);
    const englishMatch = objText.match(/english:\s*"([^"]+)"/);
    const romajiMatch = objText.match(/romaji:\s*"([^"]+)"/);

    if (!englishMatch || !romajiMatch) return match;

    const english = englishMatch[1]
      .toLowerCase()
      .replace(/\s+/g, "");
    const romaji = romajiMatch[1].toLowerCase();

    const url = `https://ekzwzljwgncwsrpczxzo.supabase.co/storage/v1/object/public/images/${english}-${romaji}.png`;
    return `imageUrl: "${url}"`;
  }
);

fs.writeFileSync(filePath, content, "utf8");
console.log("✅ All imageUrl fields updated!");
