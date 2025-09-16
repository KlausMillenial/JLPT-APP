import { vocabularyData } from '@/data/vocabulary';

export const extractAllVocabularyWords = () => {
  const allWords = vocabularyData.map((word, index) => {
    return `${index + 1}. ${word.japanese} (${word.hiragana}) - ${word.romaji} - "${word.english}" [${word.level}] [${word.category}]`;
  });

  const summary = {
    total: vocabularyData.length,
    byLevel: {} as Record<string, number>,
    byCategory: {} as Record<string, number>,
    wordList: allWords
  };

  vocabularyData.forEach(word => {
    // Count by level
    summary.byLevel[word.level] = (summary.byLevel[word.level] || 0) + 1;
    
    // Count by category
    summary.byCategory[word.category] = (summary.byCategory[word.category] || 0) + 1;
  });

  return summary;
};

// Function to generate the complete word list as a formatted string
export const generateCompleteWordList = () => {
  const data = extractAllVocabularyWords();
  
  let output = `=== COMPLETE JLPT VOCABULARY DATABASE (${data.total} Words) ===\n\n`;
  
  // Add summary by level
  output += "BREAKDOWN BY JLPT LEVEL:\n";
  Object.entries(data.byLevel)
    .sort(([a], [b]) => a.localeCompare(b))
    .forEach(([level, count]) => {
      output += `${level}: ${count} words\n`;
    });
  
  output += "\nBREAKDOWN BY CATEGORY:\n";
  Object.entries(data.byCategory)
    .sort(([a], [b]) => a.localeCompare(b))
    .forEach(([category, count]) => {
      output += `${category}: ${count} words\n`;
    });
  
  output += "\n" + "=".repeat(60) + "\n";
  output += "COMPLETE ALPHABETICAL WORD LIST:\n";
  output += "=".repeat(60) + "\n\n";
  
  // Add all words
  data.wordList.forEach(word => {
    output += word + "\n";
  });
  
  return output;
};