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
  },
  {
    id: "atama",
    japanese: "頭",
    hiragana: "あたま",
    romaji: "atama",
    english: "head",
    french: "tête",
    level: "N5",
    category: "body parts",
    wordType: "noun",
    examples: [
      {
        japanese: "頭が痛いです。",
        hiragana: "あたまがいたいです。",
        romaji: "Atama ga itai desu.",
        english: "I have a headache.",
        french: "J'ai mal à la tête."
      }
    ]
  },
  {
    id: "atarashii",
    japanese: "新しい",
    hiragana: "あたらしい",
    romaji: "atarashii",
    english: "new",
    french: "nouveau",
    level: "N5",
    category: "adjective",
    wordType: "adjective",
    examples: [
      {
        japanese: "新しい本を買いました。",
        hiragana: "あたらしいほんをかいました。",
        romaji: "Atarashii hon o kaimashita.",
        english: "I bought a new book.",
        french: "J'ai acheté un nouveau livre."
      }
    ]
  },
  {
    id: "achira",
    japanese: "あちら",
    hiragana: "あちら",
    romaji: "achira",
    english: "there",
    french: "là-bas",
    level: "N5",
    category: "location",
    wordType: "pronoun",
    examples: [
      {
        japanese: "先生はあちらです。",
        hiragana: "せんせいはあちらです。",
        romaji: "Sensei wa achira desu.",
        english: "The teacher is over there.",
        french: "Le professeur est là-bas."
      }
    ]
  },
  {
    id: "atsui",
    japanese: "暑い",
    hiragana: "あつい",
    romaji: "atsui",
    english: "hot (weather)",
    french: "chaud (temps)",
    level: "N5",
    category: "adjective",
    wordType: "adjective",
    examples: [
      {
        japanese: "今日は暑いです。",
        hiragana: "きょうはあついです。",
        romaji: "Kyou wa atsui desu.",
        english: "It is hot today.",
        french: "Il fait chaud aujourd'hui."
      }
    ]
  },
  {
    id: "atsui_touch",
    japanese: "熱い",
    hiragana: "あつい",
    romaji: "atsui",
    english: "hot (to the touch)",
    french: "chaud (au toucher)",
    level: "N5",
    category: "adjective",
    wordType: "adjective",
    examples: [
      {
        japanese: "このスープは熱いです。",
        hiragana: "このすーぷはあついです。",
        romaji: "Kono suupu wa atsui desu.",
        english: "This soup is hot.",
        french: "Cette soupe est chaude."
      }
    ]
  },
  {
    id: "atsui_thick",
    japanese: "厚い",
    hiragana: "あつい",
    romaji: "atsui",
    english: "thick, kind",
    french: "épais, gentil",
    level: "N5",
    category: "adjective",
    wordType: "adjective",
    examples: [
      {
        japanese: "厚い本を読みます。",
        hiragana: "あついほんをよみます。",
        romaji: "Atsui hon o yomimasu.",
        english: "I read a thick book.",
        french: "Je lis un livre épais."
      }
    ]
  },
  {
    id: "acchi",
    japanese: "あっち",
    hiragana: "あっち",
    romaji: "acchi",
    english: "over there",
    french: "là-bas",
    level: "N5",
    category: "location",
    wordType: "pronoun",
    examples: [
      {
        japanese: "学校はあっちです。",
        hiragana: "がっこうはあっちです。",
        romaji: "Gakkou wa acchi desu.",
        english: "The school is over there.",
        french: "L'école est là-bas."
      }
    ]
  },
  {
    id: "ato",
    japanese: "後",
    hiragana: "あと",
    romaji: "ato",
    english: "afterwards",
    french: "après",
    level: "N5",
    category: "time",
    wordType: "noun",
    examples: [
      {
        japanese: "授業の後で会いましょう。",
        hiragana: "じゅぎょうのあとであいましょう。",
        romaji: "Jugyou no ato de aimashou.",
        english: "Let's meet after class.",
        french: "Retrouvons-nous après le cours."
      }
    ]
  },
  {
    id: "anata",
    japanese: "あなた",
    hiragana: "あなた",
    romaji: "anata",
    english: "you",
    french: "toi, vous",
    level: "N5",
    category: "pronoun",
    wordType: "pronoun",
    examples: [
      {
        japanese: "あなたは学生ですか？",
        hiragana: "あなたはがくせいですか？",
        romaji: "Anata wa gakusei desu ka?",
        english: "Are you a student?",
        french: "Es-tu étudiant ?"
      }
    ]
  },
  {
    id: "ani",
    japanese: "兄",
    hiragana: "あに",
    romaji: "ani",
    english: "older brother (humble)",
    french: "frère aîné (humble)",
    level: "N5",
    category: "family",
    wordType: "noun",
    examples: [
      {
        japanese: "兄は東京に住んでいます。",
        hiragana: "あにはとうきょうにすんでいます。",
        romaji: "Ani wa Toukyou ni sunde imasu.",
        english: "My older brother lives in Tokyo.",
        french: "Mon frère aîné habite à Tokyo."
      }
    ]
  },
  {
    id: "ane",
    japanese: "姉",
    hiragana: "あね",
    romaji: "ane",
    english: "older sister (humble)",
    french: "sœur aînée (humble)",
    level: "N5",
    category: "family",
    wordType: "noun",
    examples: [
      {
        japanese: "姉は医者です。",
        hiragana: "あねはいしゃです。",
        romaji: "Ane wa isha desu.",
        english: "My older sister is a doctor.",
        french: "Ma sœur aînée est médecin."
      }
    ]
  },
  {
    id: "ano",
    japanese: "あの",
    hiragana: "あの",
    romaji: "ano",
    english: "that (over there)",
    french: "ce/cette (là-bas)",
    level: "N5",
    category: "demonstrative",
    wordType: "adjective",
    examples: [
      {
        japanese: "あの山は高いです。",
        hiragana: "あのやまはたかいです。",
        romaji: "Ano yama wa takai desu.",
        english: "That mountain is tall.",
        french: "Cette montagne est haute."
      }
    ]
  },
  {
    id: "ano_um",
    japanese: "あの",
    hiragana: "あの",
    romaji: "ano",
    english: "um...",
    french: "euh...",
    level: "N5",
    category: "expression",
    wordType: "interjection",
    examples: [
      {
        japanese: "あの、ちょっといいですか？",
        hiragana: "あの、ちょっといいですか？",
        romaji: "Ano, chotto ii desu ka?",
        english: "Um, may I ask you something?",
        french: "Euh, puis-je vous demander quelque chose ?"
      }
    ]
  },
  {
    id: "apaato",
    japanese: "アパート",
    hiragana: "アパート",
    romaji: "apaato",
    english: "apartment",
    french: "appartement",
    level: "N5",
    category: "housing",
    wordType: "noun",
    examples: [
      {
        japanese: "私はアパートに住んでいます。",
        hiragana: "わたしはあぱーとにすんでいます。",
        romaji: "Watashi wa apaato ni sunde imasu.",
        english: "I live in an apartment.",
        french: "J'habite dans un appartement."
      }
    ]
  },
  {
    id: "abiru",
    japanese: "あびる",
    hiragana: "あびる",
    romaji: "abiru",
    english: "to bathe, to shower",
    french: "se doucher, se baigner",
    level: "N5",
    category: "verb",
    wordType: "verb",
    examples: [
      {
        japanese: "毎朝シャワーをあびます。",
        hiragana: "まいあさしゃわーをあびます。",
        romaji: "Maiasa shawaa o abimasu.",
        english: "I take a shower every morning.",
        french: "Je prends une douche chaque matin."
      }
    ]
  },
  {
    id: "abunai",
    japanese: "危ない",
    hiragana: "あぶない",
    romaji: "abunai",
    english: "dangerous",
    french: "dangereux",
    level: "N5",
    category: "adjective",
    wordType: "adjective",
    examples: [
      {
        japanese: "ここは危ないです。",
        hiragana: "ここはあぶないです。",
        romaji: "Koko wa abunai desu.",
        english: "It is dangerous here.",
        french: "C'est dangereux ici."
      }
    ]
  },
  {
    id: "amai",
    japanese: "甘い",
    hiragana: "あまい",
    romaji: "amai",
    english: "sweet",
    french: "sucré",
    level: "N5",
    category: "adjective",
    wordType: "adjective",
    examples: [
      {
        japanese: "このケーキは甘いです。",
        hiragana: "このけーきはあまいです。",
        romaji: "Kono keeki wa amai desu.",
        english: "This cake is sweet.",
        french: "Ce gâteau est sucré."
      }
    ]
  },
  {
    id: "amari",
    japanese: "あまり",
    hiragana: "あまり",
    romaji: "amari",
    english: "not very",
    french: "pas très",
    level: "N5",
    category: "adverb",
    wordType: "adverb",
    examples: [
      {
        japanese: "日本語はあまり難しくないです。",
        hiragana: "にほんごはあまりむずかしくないです。",
        romaji: "Nihongo wa amari muzukashikunai desu.",
        english: "Japanese is not very difficult.",
        french: "Le japonais n'est pas très difficile."
      }
    ]
  },
  {
    id: "ame",
    japanese: "雨",
    hiragana: "あめ",
    romaji: "ame",
    english: "rain",
    french: "pluie",
    level: "N5",
    category: "nature",
    wordType: "noun",
    examples: [
      {
        japanese: "今日は雨です。",
        hiragana: "きょうはあめです。",
        romaji: "Kyou wa ame desu.",
        english: "It is raining today.",
        french: "Il pleut aujourd'hui."
      }
    ]
  },
  {
    id: "ame_candy",
    japanese: "飴",
    hiragana: "あめ",
    romaji: "ame",
    english: "candy",
    french: "bonbon",
    level: "N5",
    category: "food",
    wordType: "noun",
    examples: [
      {
        japanese: "飴を食べます。",
        hiragana: "あめをたべます。",
        romaji: "Ame o tabemasu.",
        english: "I eat candy.",
        french: "Je mange un bonbon."
      }
    ]
  }
];

export const categories = [...new Set(vocabularyData.map(word => word.category))];
export const levels = ['N5', 'N4', 'N3', 'N2', 'N1'] as const;