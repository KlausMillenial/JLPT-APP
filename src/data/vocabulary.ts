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
    id: "asa",
    japanese: "朝",
    hiragana: "あさ",
    romaji: "asa",
    english: "morning",
    french: "matin",
    level: "N5",
    category: "time",
    wordType: "noun",
    examples: [
      {
        japanese: "朝、コーヒーを飲みます。",
        hiragana: "あさ、こーひーをのみます。",
        romaji: "Asa, kōhī o nomimasu.",
        english: "I drink coffee in the morning.",
        french: "Je bois du café le matin."
      }
    ]
  },
  {
    id: "yoru",
    japanese: "夜",
    hiragana: "よる",
    romaji: "yoru",
    english: "night",
    french: "nuit",
    level: "N5",
    category: "time",
    wordType: "noun",
    examples: [
      {
        japanese: "夜は静かです。",
        hiragana: "よるはしずかです。",
        romaji: "Yoru wa shizuka desu.",
        english: "The night is quiet.",
        french: "La nuit est calme."
      }
    ]
  },
  {
    id: "hon",
    japanese: "本",
    hiragana: "ほん",
    romaji: "hon",
    english: "book",
    french: "livre",
    level: "N5",
    category: "objects",
    wordType: "noun",
    examples: [
      {
        japanese: "面白い本を読んでいます。",
        hiragana: "おもしろいほんをよんでいます。",
        romaji: "Omoshiroi hon o yonde imasu.",
        english: "I am reading an interesting book.",
        french: "Je lis un livre intéressant."
      }
    ]
  },
  {
    id: "taberu",
    japanese: "食べる",
    hiragana: "たべる",
    romaji: "taberu",
    english: "to eat",
    french: "manger",
    level: "N5",
    category: "verbs",
    wordType: "verb",
    examples: [
      {
        japanese: "寿司を食べたいです。",
        hiragana: "すしをたべたいです。",
        romaji: "Sushi o tabetai desu.",
        english: "I want to eat sushi.",
        french: "Je veux manger des sushis."
      }
    ]
  },
  {
    id: "akai",
    japanese: "赤い",
    hiragana: "あかい",
    romaji: "akai",
    english: "red",
    french: "rouge",
    level: "N5",
    category: "colors",
    wordType: "adjective",
    examples: [
      {
        japanese: "赤い花が美しいです。",
        hiragana: "あかいはながうつくしいです。",
        romaji: "Akai hana ga utsukushii desu.",
        english: "The red flowers are beautiful.",
        french: "Les fleurs rouges sont belles."
      }
    ]
  },
  {
    id: "gakkou",
    japanese: "学校",
    hiragana: "がっこう",
    romaji: "gakkou",
    english: "school",
    french: "école",
    level: "N5",
    category: "places",
    wordType: "noun",
    examples: [
      {
        japanese: "学校で日本語を勉強します。",
        hiragana: "がっこうでにほんごをべんきょうします。",
        romaji: "Gakkou de nihongo o benkyou shimasu.",
        english: "I study Japanese at school.",
        french: "J'étudie le japonais à l'école."
      }
    ]
  },
  {
    id: "mizu",
    japanese: "水",
    hiragana: "みず",
    romaji: "mizu",
    english: "water",
    french: "eau",
    level: "N5",
    category: "nature",
    wordType: "noun",
    examples: [
      {
        japanese: "冷たい水を飲みました。",
        hiragana: "つめたいみずをのみました。",
        romaji: "Tsumetai mizu o nomimashita.",
        english: "I drank cold water.",
        french: "J'ai bu de l'eau froide."
      }
    ]
  },
  // New vocabulary words added from JSON
  {
    id: "au",
    japanese: "会う",
    hiragana: "あう",
    romaji: "au",
    english: "to meet",
    french: "rencontrer",
    level: "N5",
    category: "verb",
    wordType: "verb",
    examples: [
      {
        japanese: "友達に会う。",
        hiragana: "ともだちにあう。",
        romaji: "Tomodachi ni au.",
        english: "I meet a friend.",
        french: "Je rencontre un ami."
      }
    ]
  },
  {
    id: "ao",
    japanese: "青",
    hiragana: "あお",
    romaji: "ao",
    english: "blue",
    french: "bleu",
    level: "N5",
    category: "color",
    wordType: "noun",
    examples: [
      {
        japanese: "空は青です。",
        hiragana: "そらはあおです。",
        romaji: "Sora wa ao desu.",
        english: "The sky is blue.",
        french: "Le ciel est bleu."
      }
    ]
  },
  {
    id: "aoi",
    japanese: "青い",
    hiragana: "あおい",
    romaji: "aoi",
    english: "blue",
    french: "bleu (adjectif)",
    level: "N5",
    category: "color",
    wordType: "adjective",
    examples: [
      {
        japanese: "青いシャツを着ています。",
        hiragana: "あおいしゃつをきています。",
        romaji: "Aoi shatsu o kite imasu.",
        english: "I am wearing a blue shirt.",
        french: "Je porte une chemise bleue."
      }
    ]
  },
  {
    id: "aka",
    japanese: "赤",
    hiragana: "あか",
    romaji: "aka",
    english: "red",
    french: "rouge",
    level: "N5",
    category: "color",
    wordType: "noun",
    examples: [
      {
        japanese: "赤が好きです。",
        hiragana: "あかがすきです。",
        romaji: "Aka ga suki desu.",
        english: "I like red.",
        french: "J'aime le rouge."
      }
    ]
  },
  {
    id: "akai_new",
    japanese: "赤い",
    hiragana: "あかい",
    romaji: "akai",
    english: "red",
    french: "rouge (adjectif)",
    level: "N5",
    category: "color",
    wordType: "adjective",
    examples: [
      {
        japanese: "赤い車があります。",
        hiragana: "あかいくるまがあります。",
        romaji: "Akai kuruma ga arimasu.",
        english: "There is a red car.",
        french: "Il y a une voiture rouge."
      }
    ]
  },
  {
    id: "akarui",
    japanese: "明るい",
    hiragana: "あかるい",
    romaji: "akarui",
    english: "bright",
    french: "lumineux",
    level: "N5",
    category: "adjective",
    wordType: "adjective",
    examples: [
      {
        japanese: "部屋は明るいです。",
        hiragana: "へやはあかるいです。",
        romaji: "Heya wa akarui desu.",
        english: "The room is bright.",
        french: "La chambre est lumineuse."
      }
    ]
  },
  {
    id: "aki",
    japanese: "秋",
    hiragana: "あき",
    romaji: "aki",
    english: "autumn",
    french: "automne",
    level: "N5",
    category: "season",
    wordType: "noun",
    examples: [
      {
        japanese: "秋は涼しいです。",
        hiragana: "あきはすずしいです。",
        romaji: "Aki wa suzushii desu.",
        english: "Autumn is cool.",
        french: "L'automne est frais."
      }
    ]
  },
  {
    id: "aku",
    japanese: "開く",
    hiragana: "あく",
    romaji: "aku",
    english: "to open, to become open",
    french: "s'ouvrir",
    level: "N5",
    category: "verb",
    wordType: "verb",
    examples: [
      {
        japanese: "ドアが開く。",
        hiragana: "ドアがあく。",
        romaji: "Doa ga aku.",
        english: "The door opens.",
        french: "La porte s'ouvre."
      }
    ]
  },
  {
    id: "akeru",
    japanese: "開ける",
    hiragana: "あける",
    romaji: "akeru",
    english: "to open",
    french: "ouvrir",
    level: "N5",
    category: "verb",
    wordType: "verb",
    examples: [
      {
        japanese: "窓を開ける。",
        hiragana: "まどをあける。",
        romaji: "Mado o akeru.",
        english: "I open the window.",
        french: "J'ouvre la fenêtre."
      }
    ]
  },
  {
    id: "ageru",
    japanese: "上げる",
    hiragana: "あげる",
    romaji: "ageru",
    english: "to give",
    french: "donner",
    level: "N5",
    category: "verb",
    wordType: "verb",
    examples: [
      {
        japanese: "本を上げる。",
        hiragana: "ほんをあげる。",
        romaji: "Hon o ageru.",
        english: "I give a book.",
        french: "Je donne un livre."
      }
    ]
  },
  {
    id: "asagohan",
    japanese: "朝御飯",
    hiragana: "あさごはん",
    romaji: "asagohan",
    english: "breakfast",
    french: "petit-déjeuner",
    level: "N5",
    category: "food",
    wordType: "noun",
    examples: [
      {
        japanese: "朝御飯を作る。",
        hiragana: "あさごはんをつくる。",
        romaji: "Asagohan o tsukuru.",
        english: "I make breakfast.",
        french: "Je prépare le petit-déjeuner."
      }
    ]
  },
  {
    id: "asatte",
    japanese: "あさって",
    hiragana: "あさって",
    romaji: "asatte",
    english: "day after tomorrow",
    french: "après-demain",
    level: "N5",
    category: "time",
    wordType: "noun",
    examples: [
      {
        japanese: "あさって映画に行く。",
        hiragana: "あさってえいがにいく。",
        romaji: "Asatte eiga ni iku.",
        english: "I will go to the movies the day after tomorrow.",
        french: "J'irai au cinéma après-demain."
      }
    ]
  },
  {
    id: "ashi",
    japanese: "足",
    hiragana: "あし",
    romaji: "ashi",
    english: "foot, leg",
    french: "pied, jambe",
    level: "N5",
    category: "body parts",
    wordType: "noun",
    examples: [
      {
        japanese: "足が痛い。",
        hiragana: "あしがいたい。",
        romaji: "Ashi ga itai.",
        english: "My leg hurts.",
        french: "J'ai mal à la jambe."
      }
    ]
  },
  {
    id: "ashita",
    japanese: "明日",
    hiragana: "あした",
    romaji: "ashita",
    english: "tomorrow",
    french: "demain",
    level: "N5",
    category: "time",
    wordType: "noun",
    examples: [
      {
        japanese: "明日学校に行く。",
        hiragana: "あしたがっこうにいく。",
        romaji: "Ashita gakkou ni iku.",
        english: "I will go to school tomorrow.",
        french: "J'irai à l'école demain."
      }
    ]
  },
  {
    id: "asoko",
    japanese: "あそこ",
    hiragana: "あそこ",
    romaji: "asoko",
    english: "over there",
    french: "là-bas",
    level: "N5",
    category: "location",
    wordType: "noun",
    examples: [
      {
        japanese: "店はあそこです。",
        hiragana: "みせはあそこです。",
        romaji: "Mise wa asoko desu.",
        english: "The shop is over there.",
        french: "Le magasin est là-bas."
      }
    ]
  },
  {
    id: "asobu",
    japanese: "遊ぶ",
    hiragana: "あそぶ",
    romaji: "asobu",
    english: "to play, to make a visit",
    french: "jouer, rendre visite",
    level: "N5",
    category: "verb",
    wordType: "verb",
    examples: [
      {
        japanese: "子どもたちが遊ぶ。",
        hiragana: "こどもたちがあそぶ。",
        romaji: "Kodomo-tachi ga asobu.",
        english: "The children play.",
        french: "Les enfants jouent."
      }
    ]
  },
  {
    id: "atatakai",
    japanese: "暖かい",
    hiragana: "あたたかい",
    romaji: "atatakai",
    english: "warm",
    french: "chaud, tiède",
    level: "N5",
    category: "adjective",
    wordType: "adjective",
    examples: [
      {
        japanese: "今日は暖かいです。",
        hiragana: "きょうはあたたかいです。",
        romaji: "Kyou wa atatakai desu.",
        english: "It is warm today.",
        french: "Il fait chaud aujourd'hui."
      }
    ]
  }
];

export const categories = [...new Set(vocabularyData.map(word => word.category))];
export const levels = ['N5', 'N4', 'N3', 'N2', 'N1'] as const;