export interface VocabularyWord {
  id: string;
  japanese: string;
  hiragana: string;
  romaji: string;
  english: string;
  french: string;
  level: 'N5' | 'N4' | 'N3' | 'N2' | 'N1';
  category: string;
  wordType: string;
  examples: VocabularyExample[];
  imageUrl?: string;
}

export interface VocabularyExample {
  japanese: string;
  hiragana: string;
  romaji: string;
  english: string;
  french: string;
}

export const vocabularyData: VocabularyWord[] = [
  {
    "id": "tamashii",
    "japanese": "魂",
    "hiragana": "たましい",
    "romaji": "tamashii",
    "english": "soul",
    "french": "âme",
    "level": "N5",
    "category": "concept",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "魂を込めて歌います。",
        "hiragana": "たましいをこめてうたいます。",
        "romaji": "Tamashii o komete utaimasu.",
        "english": "I sing with all my soul.",
        "french": "Je chante avec toute mon âme."
      }
    ]
  }
];

export const categories = [...new Set(vocabularyData.map(word => word.category))];
export const levels = ['N5', 'N4', 'N3', 'N2', 'N1'] as const;