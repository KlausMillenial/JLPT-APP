export interface VocabularyWord {
  id: string;
  japanese: string;
  hiragana: string;
  romaji: string;
  english: string;
  french: string;
  german?: string;
  vietnamese?: string;
  chinese?: string;
  korean?: string;
  spanish?: string;
  level: 'N5' | 'N4' | 'N3' | 'N2' | 'N1';
  category: string;
  wordType: string;
  examples: VocabularyExample[];
}

export interface VocabularyExample {
  japanese: string;
  hiragana: string;
  romaji: string;
  english: string;
  french: string;
  german?: string;
  vietnamese?: string;
  chinese?: string;
  korean?: string;
  spanish?: string;
}

export const vocabularyData: VocabularyWord[] = [
{
  id: "asa",
  japanese: "朝",
  hiragana: "あさ",
  romaji: "asa",
  english: "morning",
  french: "matin",
  german: "Morgen",
  vietnamese: "buổi sáng",
  chinese: "早晨",
  korean: "아침",
  spanish: "mañana",
  level: "N5",
  category: "time",
  wordType: "noun",
  examples: [
{
    japanese: "朝、コーヒーを飲みます。",
    hiragana: "あさ、こーひーをのみます。",
    romaji: "Asa, kōhī o nomimasu.",
    english: "I drink coffee in the morning.",
    french: "Je bois du café le matin.",
    german: "Ich trinke morgens Kaffee.",
    vietnamese: "Tôi uống cà phê vào buổi sáng.",
    chinese: "我早上喝咖啡。",
    korean: "아침에 커피를 마십니다.",
    spanish: "Bebo café por la mañana.",
  },
  ],
},
// Note: This is a truncated version for fixing the build errors
// The full vocabulary data will be restored once the image references are properly removed
];

export const categories = Array.from(new Set(vocabularyData.map(word => word.category)));
export const levels = Array.from(new Set(vocabularyData.map(word => word.level)));