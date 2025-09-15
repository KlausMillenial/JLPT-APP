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
    category: "object",
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
    category: "verb",
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
    category: "color",
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
    category: "place",
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
    category: "body part",
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
    category: "body part",
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
  },
  {
    id: "arau",
    japanese: "洗う",
    hiragana: "あらう",
    romaji: "arau",
    english: "to wash",
    french: "laver",
    level: "N5",
    category: "verb",
    wordType: "verb",
    examples: [
      {
        japanese: "手を洗います。",
        hiragana: "てをあらいます。",
        romaji: "Te o araimasu.",
        english: "I wash my hands.",
        french: "Je me lave les mains."
      }
    ]
  },
  {
    id: "aru_inanimate",
    japanese: "ある",
    hiragana: "ある",
    romaji: "aru",
    english: "to be, to have (inanimate)",
    french: "être, avoir (inanimé)",
    level: "N5",
    category: "verb",
    wordType: "verb",
    examples: [
      {
        japanese: "机の上に本がある。",
        hiragana: "つくえのうえにほんがある。",
        romaji: "Tsukue no ue ni hon ga aru.",
        english: "There is a book on the desk.",
        french: "Il y a un livre sur le bureau."
      }
    ]
  },
  {
    id: "aruku",
    japanese: "歩く",
    hiragana: "あるく",
    romaji: "aruku",
    english: "to walk",
    french: "marcher",
    level: "N5",
    category: "verb",
    wordType: "verb",
    examples: [
      {
        japanese: "公園を歩きます。",
        hiragana: "こうえんをあるきます。",
        romaji: "Kouen o arukimasu.",
        english: "I walk in the park.",
        french: "Je marche dans le parc."
      }
    ]
  },
  {
    id: "are",
    japanese: "あれ",
    hiragana: "あれ",
    romaji: "are",
    english: "that",
    french: "cela",
    level: "N5",
    category: "pronoun",
    wordType: "pronoun",
    examples: [
      {
        japanese: "あれは何ですか？",
        hiragana: "あれはなんですか？",
        romaji: "Are wa nan desu ka?",
        english: "What is that?",
        french: "Qu'est-ce que c'est ?"
      }
    ]
  },
  {
    id: "ii",
    japanese: "いい/よい",
    hiragana: "いい/よい",
    romaji: "ii/yo-i",
    english: "good",
    french: "bon",
    level: "N5",
    category: "adjective",
    wordType: "adjective",
    examples: [
      {
        japanese: "この本はいいです。",
        hiragana: "このほんはいいです。",
        romaji: "Kono hon wa ii desu.",
        english: "This book is good.",
        french: "Ce livre est bon."
      }
    ]
  },
  {
    id: "iie",
    japanese: "いいえ",
    hiragana: "いいえ",
    romaji: "iie",
    english: "no",
    french: "non",
    level: "N5",
    category: "expression",
    wordType: "interjection",
    examples: [
      {
        japanese: "いいえ、違います。",
        hiragana: "いいえ、ちがいます。",
        romaji: "Iie, chigaimasu.",
        english: "No, that's not right.",
        french: "Non, ce n'est pas correct."
      }
    ]
  },
  {
    id: "iu",
    japanese: "言う",
    hiragana: "いう",
    romaji: "iu",
    english: "to say",
    french: "dire",
    level: "N5",
    category: "verb",
    wordType: "verb",
    examples: [
      {
        japanese: "先生が言いました。",
        hiragana: "せんせいがいいました。",
        romaji: "Sensei ga iimashita.",
        english: "The teacher said it.",
        french: "Le professeur l'a dit."
      }
    ]
  },
  {
    id: "ie",
    japanese: "家",
    hiragana: "いえ",
    romaji: "ie",
    english: "house",
    french: "maison",
    level: "N5",
    category: "housing",
    wordType: "noun",
    examples: [
      {
        japanese: "私の家は大きいです。",
        hiragana: "わたしのいえはおおきいです。",
        romaji: "Watashi no ie wa ookii desu.",
        english: "My house is big.",
        french: "Ma maison est grande."
      }
    ]
  },
  {
    id: "ikaga",
    japanese: "いかが",
    hiragana: "いかが",
    romaji: "ikaga",
    english: "how",
    french: "comment",
    level: "N5",
    category: "expression",
    wordType: "adverb",
    examples: [
      {
        japanese: "コーヒーはいかがですか？",
        hiragana: "こーひーはいかがですか？",
        romaji: "Koohii wa ikaga desu ka?",
        english: "How about some coffee?",
        french: "Un café, comment ?"
      }
    ]
  },
  {
    id: "iku",
    japanese: "行く",
    hiragana: "いく",
    romaji: "iku",
    english: "to go",
    french: "aller",
    level: "N5",
    category: "verb",
    wordType: "verb",
    examples: [
      {
        japanese: "学校に行きます。",
        hiragana: "がっこうにいきます。",
        romaji: "Gakkou ni ikimasu.",
        english: "I go to school.",
        french: "Je vais à l'école."
      }
    ]
  },
  {
    id: "ikutsu",
    japanese: "いくつ",
    hiragana: "いくつ",
    romaji: "ikutsu",
    english: "how many?, how old?",
    french: "combien ?, quel âge ?",
    level: "N5",
    category: "question",
    wordType: "noun",
    examples: [
      {
        japanese: "りんごはいくつありますか？",
        hiragana: "りんごはいくつありますか？",
        romaji: "Ringo wa ikutsu arimasu ka?",
        english: "How many apples are there?",
        french: "Combien de pommes y a-t-il ?"
      }
    ]
  },
  {
    id: "ikura",
    japanese: "いくら",
    hiragana: "いくら",
    romaji: "ikura",
    english: "how much?",
    french: "combien ?",
    level: "N5",
    category: "question",
    wordType: "noun",
    examples: [
      {
        japanese: "この本はいくらですか？",
        hiragana: "このほんはいくらですか？",
        romaji: "Kono hon wa ikura desu ka?",
        english: "How much is this book?",
        french: "Combien coûte ce livre ?"
      }
    ]
  },
  {
    id: "ike",
    japanese: "池",
    hiragana: "いけ",
    romaji: "ike",
    english: "pond",
    french: "étang",
    level: "N5",
    category: "nature",
    wordType: "noun",
    examples: [
      {
        japanese: "池に魚がいます。",
        hiragana: "いけにさかながいます。",
        romaji: "Ike ni sakana ga imasu.",
        english: "There are fish in the pond.",
        french: "Il y a des poissons dans l'étang."
      }
    ]
  },
  {
    id: "isha",
    japanese: "医者",
    hiragana: "いしゃ",
    romaji: "isha",
    english: "medical doctor",
    french: "médecin",
    level: "N5",
    category: "profession",
    wordType: "noun",
    examples: [
      {
        japanese: "父は医者です。",
        hiragana: "ちちはいしゃです。",
        romaji: "Chichi wa isha desu.",
        english: "My father is a doctor.",
        french: "Mon père est médecin."
      }
    ]
  },
  {
    id: "isu",
    japanese: "いす",
    hiragana: "いす",
    romaji: "isu",
    english: "chair",
    french: "chaise",
    level: "N5",
    category: "furniture",
    wordType: "noun",
    examples: [
      {
        japanese: "椅子に座ります。",
        hiragana: "いすにすわります。",
        romaji: "Isu ni suwarimasu.",
        english: "I sit on a chair.",
        french: "Je m'assois sur une chaise."
      }
    ]
  },
  {
    id: "isogashii",
    japanese: "忙しい",
    hiragana: "いそがしい",
    romaji: "isogashii",
    english: "busy, irritated",
    french: "occupé, agacé",
    level: "N5",
    category: "adjective",
    wordType: "adjective",
    examples: [
      {
        japanese: "今日は忙しいです。",
        hiragana: "きょうはいそがしいです。",
        romaji: "Kyou wa isogashii desu.",
        english: "I am busy today.",
        french: "Je suis occupé aujourd'hui."
      }
    ]
  },
  {
    id: "itai",
    japanese: "痛い",
    hiragana: "いたい",
    romaji: "itai",
    english: "painful",
    french: "douloureux",
    level: "N5",
    category: "adjective",
    wordType: "adjective",
    examples: [
      {
        japanese: "歯が痛いです。",
        hiragana: "はがいたいです。",
        romaji: "Ha ga itai desu.",
        english: "My tooth hurts.",
        french: "J'ai mal aux dents."
      }
    ]
  },
  {
    id: "ichi",
    japanese: "一",
    hiragana: "いち",
    romaji: "ichi",
    english: "one",
    french: "un",
    level: "N5",
    category: "number",
    wordType: "noun",
    examples: [
      {
        japanese: "一つください。",
        hiragana: "ひとつください。",
        romaji: "Hitotsu kudasai.",
        english: "Please give me one.",
        french: "Donnez-m'en un, s'il vous plaît."
      }
    ]
  },
  {
    id: "ichinichi",
    japanese: "一日",
    hiragana: "いちにち",
    romaji: "ichinichi",
    english: "first of the month / one day",
    french: "le premier du mois / un jour",
    level: "N5",
    category: "time",
    wordType: "noun",
    examples: [
      {
        japanese: "一日中勉強しました。",
        hiragana: "いちにちじゅうべんきょうしました。",
        romaji: "Ichinichi juu benkyou shimashita.",
        english: "I studied all day.",
        french: "J'ai étudié toute la journée."
      }
    ]
  },
  {
    id: "ichiban",
    japanese: "いちばん",
    hiragana: "いちばん",
    romaji: "ichiban",
    english: "best, first",
    french: "meilleur, premier",
    level: "N5",
    category: "adverb",
    wordType: "adverb",
    examples: [
      {
        japanese: "寿司が一番好きです。",
        hiragana: "すしがいちばんすきです。",
        romaji: "Sushi ga ichiban suki desu.",
        english: "I like sushi the best.",
        french: "J'aime le sushi le plus."
      }
    ]
  },
  {
    id: "itsu",
    japanese: "いつ",
    hiragana: "いつ",
    romaji: "itsu",
    english: "when",
    french: "quand",
    level: "N5",
    category: "question",
    wordType: "adverb",
    examples: [
      {
        japanese: "いつ来ますか？",
        hiragana: "いつきますか？",
        romaji: "Itsu kimasu ka?",
        english: "When will you come?",
        french: "Quand viendras-tu ?"
      }
    ]
  },
  {
    id: "itsuka",
    japanese: "五日",
    hiragana: "いつか",
    romaji: "itsuka",
    english: "five days, fifth day",
    french: "cinq jours, le 5e jour",
    level: "N5",
    category: "time",
    wordType: "noun",
    examples: [
      {
        japanese: "五日は休みです。",
        hiragana: "いつかはやすみです。",
        romaji: "Itsuka wa yasumi desu.",
        english: "The fifth is a holiday.",
        french: "Le cinq est un jour férié."
      }
    ]
  },
  {
    id: "issho",
    japanese: "一緒",
    hiragana: "いっしょ",
    romaji: "issho",
    english: "together",
    french: "ensemble",
    level: "N5",
    category: "adverb",
    wordType: "adverb",
    examples: [
      {
        japanese: "友達と一緒に行きます。",
        hiragana: "ともだちといっしょにいきます。",
        romaji: "Tomodachi to issho ni ikimasu.",
        english: "I go with my friend.",
        french: "Je vais avec mon ami."
      }
    ]
  },
  {
    id: "itsutsu",
    japanese: "五つ",
    hiragana: "いつつ",
    romaji: "itsutsu",
    english: "five",
    french: "cinq",
    level: "N5",
    category: "number",
    wordType: "noun",
    examples: [
      {
        japanese: "リンゴを五つ食べました。",
        hiragana: "りんごをいつつたべました。",
        romaji: "Ringo o itsutsu tabemashita.",
        english: "I ate five apples.",
        french: "J'ai mangé cinq pommes."
      }
    ]
  },
  {
    id: "itsumo",
    japanese: "いつも",
    hiragana: "いつも",
    romaji: "itsumo",
    english: "always",
    french: "toujours",
    level: "N5",
    category: "adverb",
    wordType: "adverb",
    examples: [
      {
        japanese: "彼はいつも元気です。",
        hiragana: "かれはいつもげんきです。",
        romaji: "Kare wa itsumo genki desu.",
        english: "He is always energetic.",
        french: "Il est toujours en forme."
      }
    ]
  },
  {
    id: "inu",
    japanese: "犬",
    hiragana: "いぬ",
    romaji: "inu",
    english: "dog",
    french: "chien",
    level: "N5",
    category: "animal",
    wordType: "noun",
    examples: [
      {
        japanese: "犬が走っています。",
        hiragana: "いぬがはしっています。",
        romaji: "Inu ga hashitte imasu.",
        english: "The dog is running.",
        french: "Le chien court."
      }
    ]
  },
  {
    id: "ima",
    japanese: "今",
    hiragana: "いま",
    romaji: "ima",
    english: "now",
    french: "maintenant",
    level: "N5",
    category: "time",
    wordType: "noun",
    examples: [
      {
        japanese: "今行きます。",
        hiragana: "いまいきます。",
        romaji: "Ima ikimasu.",
        english: "I am going now.",
        french: "J'y vais maintenant."
      }
    ]
  },
  {
    id: "imi",
    japanese: "意味",
    hiragana: "いみ",
    romaji: "imi",
    english: "meaning",
    french: "sens, signification",
    level: "N5",
    category: "noun",
    wordType: "noun",
    examples: [
      {
        japanese: "この言葉の意味は何ですか？",
        hiragana: "このことばのいみはなんですか？",
        romaji: "Kono kotoba no imi wa nan desu ka?",
        english: "What does this word mean?",
        french: "Quel est le sens de ce mot ?"
      }
    ]
  },
  {
    id: "imouto",
    japanese: "妹",
    hiragana: "いもうと",
    romaji: "imouto",
    english: "younger sister (humble)",
    french: "petite sœur (humble)",
    level: "N5",
    category: "family",
    wordType: "noun",
    examples: [
      {
        japanese: "妹は学生です。",
        hiragana: "いもうとはがくせいです。",
        romaji: "Imouto wa gakusei desu.",
        english: "My younger sister is a student.",
        french: "Ma petite sœur est étudiante."
      }
    ]
  },
  {
    id: "iya",
    japanese: "嫌",
    hiragana: "いや",
    romaji: "iya",
    english: "unpleasant",
    french: "désagréable",
    level: "N5",
    category: "adjective",
    wordType: "adjective",
    examples: [
      {
        japanese: "それは嫌です。",
        hiragana: "それはいやです。",
        romaji: "Sore wa iya desu.",
        english: "I don't like that.",
        french: "Je n'aime pas ça."
      }
    ]
  },
  {
    id: "iriguchi",
    japanese: "入口",
    hiragana: "いりぐち",
    romaji: "iriguchi",
    english: "entrance",
    french: "entrée",
    level: "N5",
    category: "place",
    wordType: "noun",
    examples: [
      {
        japanese: "入口はこちらです。",
        hiragana: "いりぐちはこちらです。",
        romaji: "Iriguchi wa kochira desu.",
        english: "The entrance is this way.",
        french: "L'entrée est par ici."
      }
    ]
  },
  {
    id: "iru_people",
    japanese: "居る",
    hiragana: "いる",
    romaji: "iru",
    english: "to be, to have (for people/animals)",
    french: "être, avoir (personnes/animaux)",
    level: "N5",
    category: "verb",
    wordType: "verb",
    examples: [
      {
        japanese: "猫が居ます。",
        hiragana: "ねこがいます。",
        romaji: "Neko ga imasu.",
        english: "There is a cat.",
        french: "Il y a un chat."
      }
    ]
  },
  {
    id: "iru_need",
    japanese: "要る",
    hiragana: "いる",
    romaji: "iru",
    english: "to need",
    french: "avoir besoin de",
    level: "N5",
    category: "verb",
    wordType: "verb",
    examples: [
      {
        japanese: "お金が要ります。",
        hiragana: "おかねがいります。",
        romaji: "Okane ga irimasu.",
        english: "I need money.",
        french: "J'ai besoin d'argent."
      }
    ]
  },
  {
    id: "ireru",
    japanese: "入れる",
    hiragana: "いれる",
    romaji: "ireru",
    english: "to put in",
    french: "mettre, insérer",
    level: "N5",
    category: "verb",
    wordType: "verb",
    examples: [
      {
        japanese: "コーヒーに砂糖を入れる。",
        hiragana: "こーひーにさとうをいれる。",
        romaji: "Koohii ni satou o ireru.",
        english: "I put sugar in the coffee.",
        french: "Je mets du sucre dans le café."
      }
    ]
  },
  {
    id: "iro",
    japanese: "色",
    hiragana: "いろ",
    romaji: "iro",
    english: "color",
    french: "couleur",
    level: "N5",
    category: "noun",
    wordType: "noun",
    examples: [
      {
        japanese: "好きな色は青です。",
        hiragana: "すきないろはあおです。",
        romaji: "Sukina iro wa ao desu.",
        english: "My favorite color is blue.",
        french: "Ma couleur préférée est le bleu."
      }
    ]
  },
  {
    id: "iroiro",
    japanese: "いろいろ",
    hiragana: "いろいろ",
    romaji: "iroiro",
    english: "various",
    french: "divers, varié",
    level: "N5",
    category: "adjective",
    wordType: "adjective",
    examples: [
      {
        japanese: "いろいろな本があります。",
        hiragana: "いろいろなほんがあります。",
        romaji: "Iroiro na hon ga arimasu.",
        english: "There are various books.",
        french: "Il y a divers livres."
      }
    ]
  },
  {
    id: "ue",
    japanese: "上",
    hiragana: "うえ",
    romaji: "ue",
    english: "on top of",
    french: "au-dessus",
    level: "N5",
    category: "location",
    wordType: "noun",
    examples: [
      {
        japanese: "机の上に猫がいる。",
        hiragana: "つくえのうえにねこがいる。",
        romaji: "Tsukue no ue ni neko ga iru.",
        english: "There is a cat on the desk.",
        french: "Il y a un chat sur le bureau."
      }
    ]
  },
  {
    id: "ushiro",
    japanese: "後ろ",
    hiragana: "うしろ",
    romaji: "ushiro",
    english: "behind",
    french: "derrière",
    level: "N5",
    category: "location",
    wordType: "noun",
    examples: [
      {
        japanese: "学校の後ろに公園があります。",
        hiragana: "がっこうのうしろにこうえんがあります。",
        romaji: "Gakkou no ushiro ni kouen ga arimasu.",
        english: "There is a park behind the school.",
        french: "Il y a un parc derrière l'école."
      }
    ]
  },
  {
    id: "usui",
    japanese: "薄い",
    hiragana: "うすい",
    romaji: "usui",
    english: "thin, weak",
    french: "fin, faible",
    level: "N5",
    category: "adjective",
    wordType: "adjective",
    examples: [
      {
        japanese: "この本は薄いです。",
        hiragana: "このほんはうすいです。",
        romaji: "Kono hon wa usui desu.",
        english: "This book is thin.",
        french: "Ce livre est fin."
      }
    ]
  },
  {
    id: "uta",
    japanese: "歌",
    hiragana: "うた",
    romaji: "uta",
    english: "song",
    french: "chanson",
    level: "N5",
    category: "music",
    wordType: "noun",
    examples: [
      {
        japanese: "日本の歌を聞きます。",
        hiragana: "にほんのうたをききます。",
        romaji: "Nihon no uta o kikimasu.",
        english: "I listen to Japanese songs.",
        french: "J'écoute des chansons japonaises."
      }
    ]
  },
  {
    id: "utau",
    japanese: "歌う",
    hiragana: "うたう",
    romaji: "utau",
    english: "to sing",
    french: "chanter",
    level: "N5",
    category: "verb",
    wordType: "verb",
    examples: [
      {
        japanese: "カラオケで歌います。",
        hiragana: "からおけでうたいます。",
        romaji: "Karaoke de utaimasu.",
        english: "I sing at karaoke.",
        french: "Je chante au karaoké."
      }
    ]
  },
  {
    id: "umareru",
    japanese: "生まれる",
    hiragana: "うまれる",
    romaji: "umareru",
    english: "to be born",
    french: "naître",
    level: "N5",
    category: "verb",
    wordType: "verb",
    examples: [
      {
        japanese: "子どもが生まれました。",
        hiragana: "こどもがうまれました。",
        romaji: "Kodomo ga umaremashita.",
        english: "A child was born.",
        french: "Un enfant est né."
      }
    ]
  },
  {
    id: "umi",
    japanese: "海",
    hiragana: "うみ",
    romaji: "umi",
    english: "sea",
    french: "mer",
    level: "N5",
    category: "nature",
    wordType: "noun",
    examples: [
      {
        japanese: "夏に海へ行きます。",
        hiragana: "なつにうみへいきます。",
        romaji: "Natsu ni umi e ikimasu.",
        english: "I go to the sea in summer.",
        french: "Je vais à la mer en été."
      }
    ]
  },
  {
    id: "uru",
    japanese: "売る",
    hiragana: "うる",
    romaji: "uru",
    english: "to sell",
    french: "vendre",
    level: "N5",
    category: "verb",
    wordType: "verb",
    examples: [
      {
        japanese: "本を売ります。",
        hiragana: "ほんをうります。",
        romaji: "Hon o urimasu.",
        english: "I sell books.",
        french: "Je vends des livres."
      }
    ]
  },
  {
    id: "urusai",
    japanese: "煩い",
    hiragana: "うるさい",
    romaji: "urusai",
    english: "noisy, annoying",
    french: "bruyant, agaçant",
    level: "N5",
    category: "adjective",
    wordType: "adjective",
    examples: [
      {
        japanese: "子どもの声がうるさい。",
        hiragana: "こどものこえがうるさい。",
        romaji: "Kodomo no koe ga urusai.",
        english: "The children's voices are noisy.",
        french: "Les voix des enfants sont bruyantes."
      }
    ]
  },
  {
    id: "uwagi",
    japanese: "上着",
    hiragana: "うわぎ",
    romaji: "uwagi",
    english: "jacket",
    french: "veste, manteau",
    level: "N5",
    category: "clothing",
    wordType: "noun",
    examples: [
      {
        japanese: "上着を着てください。",
        hiragana: "うわぎをきてください。",
        romaji: "Uwagi o kite kudasai.",
        english: "Please wear a jacket.",
        french: "Mettez une veste, s'il vous plaît."
      }
    ]
  },
  {
    id: "e",
    japanese: "絵",
    hiragana: "え",
    romaji: "e",
    english: "picture",
    french: "image, tableau",
    level: "N5",
    category: "art",
    wordType: "noun",
    examples: [
      {
        japanese: "きれいな絵を見ました。",
        hiragana: "きれいなえをみました。",
        romaji: "Kirei na e o mimashita.",
        english: "I saw a beautiful picture.",
        french: "J'ai vu une belle image."
      }
    ]
  },
  {
    id: "eiga",
    japanese: "映画",
    hiragana: "えいが",
    romaji: "eiga",
    english: "movie",
    french: "film",
    level: "N5",
    category: "entertainment",
    wordType: "noun",
    examples: [
      {
        japanese: "映画を見に行きます。",
        hiragana: "えいがをみにいきます。",
        romaji: "Eiga o mi ni ikimasu.",
        english: "I go to watch a movie.",
        french: "Je vais voir un film."
      }
    ]
  },
  {
    id: "eigakan",
    japanese: "映画館",
    hiragana: "えいがかん",
    romaji: "eigakan",
    english: "cinema",
    french: "cinéma",
    level: "N5",
    category: "place",
    wordType: "noun",
    examples: [
      {
        japanese: "映画館は駅の近くです。",
        hiragana: "えいがかんはえきのちかくです。",
        romaji: "Eigakan wa eki no chikaku desu.",
        english: "The cinema is near the station.",
        french: "Le cinéma est près de la gare."
      }
    ]
  },
  {
    id: "eigo",
    japanese: "英語",
    hiragana: "えいご",
    romaji: "eigo",
    english: "English language",
    french: "anglais (langue)",
    level: "N5",
    category: "language",
    wordType: "noun",
    examples: [
      {
        japanese: "英語を勉強しています。",
        hiragana: "えいごをべんきょうしています。",
        romaji: "Eigo o benkyou shite imasu.",
        english: "I am studying English.",
        french: "J'étudie l'anglais."
      }
    ]
  },
  {
    id: "ee",
    japanese: "ええ",
    hiragana: "ええ",
    romaji: "ee",
    english: "yes",
    french: "oui",
    level: "N5",
    category: "expression",
    wordType: "interjection",
    examples: [
      {
        japanese: "ええ、そうです。",
        hiragana: "ええ、そうです。",
        romaji: "Ee, sou desu.",
        english: "Yes, that's right.",
        french: "Oui, c'est ça."
      }
    ]
  },
  {
    id: "eki",
    japanese: "駅",
    hiragana: "えき",
    romaji: "eki",
    english: "station",
    french: "gare",
    level: "N5",
    category: "place",
    wordType: "noun",
    examples: [
      {
        japanese: "駅で友達に会います。",
        hiragana: "えきでともだちにあいます。",
        romaji: "Eki de tomodachi ni aimasu.",
        english: "I meet my friend at the station.",
        french: "Je rencontre mon ami à la gare."
      }
    ]
  },
  {
    id: "erebeetaa",
    japanese: "エレベーター",
    hiragana: "エレベーター",
    romaji: "erebeetaa",
    english: "elevator",
    french: "ascenseur",
    level: "N5",
    category: "building",
    wordType: "noun",
    examples: [
      {
        japanese: "エレベーターで5階へ行きます。",
        hiragana: "えれべーたーでごかいへいきます。",
        romaji: "Erebeetaa de gokai e ikimasu.",
        english: "I go to the 5th floor by elevator.",
        french: "Je monte au 5e étage en ascenseur."
      }
    ]
  },
  {
    id: "enpitsu",
    japanese: "鉛筆",
    hiragana: "えんぴつ",
    romaji: "enpitsu",
    english: "pencil",
    french: "crayon",
    level: "N5",
    category: "stationery",
    wordType: "noun",
    examples: [
      {
        japanese: "鉛筆で書きます。",
        hiragana: "えんぴつでかきます。",
        romaji: "Enpitsu de kakimasu.",
        english: "I write with a pencil.",
        french: "J'écris avec un crayon."
      }
    ]
  },
  {
    id: "oishii",
    japanese: "おいしい",
    hiragana: "おいしい",
    romaji: "oishii",
    english: "delicious",
    french: "délicieux",
    level: "N5",
    category: "adjective",
    wordType: "adjective",
    examples: [
      {
        japanese: "このケーキはおいしいです。",
        hiragana: "このけーきはおいしいです。",
        romaji: "Kono keeki wa oishii desu.",
        english: "This cake is delicious.",
        french: "Ce gâteau est délicieux."
      }
    ]
  },
  {
    id: "ooi",
    japanese: "多い",
    hiragana: "おおい",
    romaji: "ooi",
    english: "many",
    french: "beaucoup",
    level: "N5",
    category: "adjective",
    wordType: "adjective",
    examples: [
      {
        japanese: "公園に人が多いです。",
        hiragana: "こうえんにひとがおおいです。",
        romaji: "Kouen ni hito ga ooi desu.",
        english: "There are many people in the park.",
        french: "Il y a beaucoup de monde dans le parc."
      }
    ]
  },
  {
    id: "ookii",
    japanese: "大きい",
    hiragana: "おおきい",
    romaji: "ookii",
    english: "big",
    french: "grand",
    level: "N5",
    category: "adjective",
    wordType: "adjective",
    examples: [
      {
        japanese: "大きい犬がいます。",
        hiragana: "おおきいいぬがいます。",
        romaji: "Ookii inu ga imasu.",
        english: "There is a big dog.",
        french: "Il y a un grand chien."
      }
    ]
  },
  {
    id: "ookina",
    japanese: "大きな",
    hiragana: "おおきな",
    romaji: "ookina",
    english: "big (prefix)",
    french: "grand (préfixe)",
    level: "N5",
    category: "adjective",
    wordType: "adjective",
    examples: [
      {
        japanese: "大きな家を建てました。",
        hiragana: "おおきないえをたてました。",
        romaji: "Ookina ie o tatemashita.",
        english: "I built a big house.",
        french: "J'ai construit une grande maison."
      }
    ]
  },
  {
    id: "oozei",
    japanese: "大勢",
    hiragana: "おおぜい",
    romaji: "oozei",
    english: "a great number of people",
    french: "beaucoup de gens",
    level: "N5",
    category: "noun",
    wordType: "noun",
    examples: [
      {
        japanese: "駅に大勢の人がいました。",
        hiragana: "えきにおおぜいのひとがいました。",
        romaji: "Eki ni oozei no hito ga imashita.",
        english: "There were many people at the station.",
        french: "Il y avait beaucoup de gens à la gare."
      }
    ]
  },
  {
    id: "okaasan",
    japanese: "お母さん",
    hiragana: "おかあさん",
    romaji: "okaasan",
    english: "mother (honorific)",
    french: "mère (honorifique)",
    level: "N5",
    category: "family",
    wordType: "noun",
    examples: [
      {
        japanese: "お母さんは元気ですか？",
        hiragana: "おかあさんはげんきですか？",
        romaji: "Okaasan wa genki desu ka?",
        english: "How is your mother?",
        french: "Comment va ta mère ?"
      }
    ]
  },
  {
    "id": "okashi",
    "japanese": "お菓子",
    "hiragana": "おかし",
    "romaji": "okashi",
    "english": "sweets, candy",
    "french": "friandises, bonbons",
    "level": "N5",
    "category": "food",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "子どもはお菓子が好きです。",
        "hiragana": "こどもはおかしがすきです。",
        "romaji": "Kodomo wa okashi ga suki desu.",
        "english": "Children like sweets.",
        "french": "Les enfants aiment les bonbons."
      }
    ]
  },
  {
    "id": "okane",
    "japanese": "お金",
    "hiragana": "おかね",
    "romaji": "okane",
    "english": "money",
    "french": "argent",
    "level": "N5",
    "category": "economy",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "お金を持っていますか？",
        "hiragana": "おかねをもっていますか？",
        "romaji": "Okane o motte imasu ka?",
        "english": "Do you have money?",
        "french": "As-tu de l'argent ?"
      }
    ]
  },
  {
    "id": "okiru",
    "japanese": "起きる",
    "hiragana": "おきる",
    "romaji": "okiru",
    "english": "to get up",
    "french": "se lever",
    "level": "N5",
    "category": "verb",
    "wordType": "verb",
    "examples": [
      {
        "japanese": "毎朝6時に起きます。",
        "hiragana": "まいあさろくじにおきます。",
        "romaji": "Maiasa rokuji ni okimasu.",
        "english": "I get up at 6 every morning.",
        "french": "Je me lève à 6 heures chaque matin."
      }
    ]
  },
  {
    "id": "oku",
    "japanese": "置く",
    "hiragana": "おく",
    "romaji": "oku",
    "english": "to put, to place",
    "french": "poser, placer",
    "level": "N5",
    "category": "verb",
    "wordType": "verb",
    "examples": [
      {
        "japanese": "本を机の上に置きます。",
        "hiragana": "ほんをつくえのうえにおきます。",
        "romaji": "Hon o tsukue no ue ni okimasu.",
        "english": "I put the book on the desk.",
        "french": "Je pose le livre sur le bureau."
      }
    ]
  },
  {
    "id": "okusan",
    "japanese": "奥さん",
    "hiragana": "おくさん",
    "romaji": "okusan",
    "english": "(honorific) wife",
    "french": "épouse (honorifique)",
    "level": "N5",
    "category": "family",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "田中さんの奥さんは先生です。",
        "hiragana": "たなかさんのおくさんはせんせいです。",
        "romaji": "Tanaka-san no okusan wa sensei desu.",
        "english": "Mr. Tanaka's wife is a teacher.",
        "french": "La femme de M. Tanaka est professeur."
      }
    ]
  },
  {
    "id": "osake",
    "japanese": "お酒",
    "hiragana": "おさけ",
    "romaji": "osake",
    "english": "alcohol, rice wine",
    "french": "alcool, saké",
    "level": "N5",
    "category": "drink",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "父はお酒を飲みます。",
        "hiragana": "ちはおさけをのみます。",
        "romaji": "Chichi wa osake o nomimasu.",
        "english": "My father drinks alcohol.",
        "french": "Mon père boit de l'alcool."
      }
    ]
  },
  {
    "id": "osara",
    "japanese": "お皿",
    "hiragana": "おさら",
    "romaji": "osara",
    "english": "plate, dish",
    "french": "assiette, plat",
    "level": "N5",
    "category": "kitchen",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "お皿を洗います。",
        "hiragana": "おさらをあらいます。",
        "romaji": "Osara o araimasu.",
        "english": "I wash the dishes.",
        "french": "Je lave les assiettes."
      }
    ]
  },
  {
    "id": "ojiisan",
    "japanese": "伯父/叔父",
    "hiragana": "おじいさん",
    "romaji": "ojiisan",
    "english": "grandfather, elderly man",
    "french": "grand-père, vieil homme",
    "level": "N5",
    "category": "family",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "おじいさんは畑にいます。",
        "hiragana": "おじいさんははたけにいます。",
        "romaji": "Ojiisan wa hatake ni imasu.",
        "english": "Grandfather is in the field.",
        "french": "Mon grand-père est dans le champ."
      }
    ]
  },
  {
    "id": "oshieru",
    "japanese": "教える",
    "hiragana": "おしえる",
    "romaji": "oshieru",
    "english": "to teach, to tell",
    "french": "enseigner, dire",
    "level": "N5",
    "category": "verb",
    "wordType": "verb",
    "examples": [
      {
        "japanese": "日本語を教えます。",
        "hiragana": "にほんごをおしえます。",
        "romaji": "Nihongo o oshiemasu.",
        "english": "I teach Japanese.",
        "french": "J'enseigne le japonais."
      }
    ]
  },
  {
    "id": "ojisan",
    "japanese": "伯父/叔父",
    "hiragana": "おじさん",
    "romaji": "ojisan",
    "english": "uncle, middle-aged man",
    "french": "oncle, homme d'âge moyen",
    "level": "N5",
    "category": "family",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "おじさんが来ました。",
        "hiragana": "おじさんがきました。",
        "romaji": "Ojisan ga kimashita.",
        "english": "My uncle came.",
        "french": "Mon oncle est venu."
      }
    ]
  },
  {
    "id": "osu",
    "japanese": "押す",
    "hiragana": "おす",
    "romaji": "osu",
    "english": "to push, to press",
    "french": "pousser, appuyer",
    "level": "N5",
    "category": "verb",
    "wordType": "verb",
    "examples": [
      {
        "japanese": "ボタンを押してください。",
        "hiragana": "ぼたんをおしてください。",
        "romaji": "Botan o oshite kudasai.",
        "english": "Please press the button.",
        "french": "Appuie sur le bouton, s'il te plaît."
      }
    ]
  },
  {
    "id": "osoi",
    "japanese": "遅い",
    "hiragana": "おそい",
    "romaji": "osoi",
    "english": "late, slow",
    "french": "tard, lent",
    "level": "N5",
    "category": "adjective",
    "wordType": "adjective",
    "examples": [
      {
        "japanese": "今日は学校に遅れました。",
        "hiragana": "きょうはがっこうにおくれました。",
        "romaji": "Kyou wa gakkou ni okuremashita.",
        "english": "I was late for school today.",
        "french": "Aujourd'hui je suis arrivé en retard à l'école."
      }
    ]
  },
  {
    "id": "ocha",
    "japanese": "お茶",
    "hiragana": "おちゃ",
    "romaji": "ocha",
    "english": "green tea",
    "french": "thé vert",
    "level": "N5",
    "category": "drink",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "お茶を飲みます。",
        "hiragana": "おちゃをのみます。",
        "romaji": "Ocha o nomimasu.",
        "english": "I drink green tea.",
        "french": "Je bois du thé vert."
      }
    ]
  },
  {
    "id": "otearai",
    "japanese": "お手洗い",
    "hiragana": "おてあらい",
    "romaji": "otearai",
    "english": "bathroom",
    "french": "toilettes",
    "level": "N5",
    "category": "place",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "お手洗いはどこですか？",
        "hiragana": "おてあらいはどこですか？",
        "romaji": "Otearai wa doko desu ka?",
        "english": "Where is the bathroom?",
        "french": "Où sont les toilettes ?"
      }
    ]
  },
  {
    "id": "otousan",
    "japanese": "お父さん",
    "hiragana": "おとうさん",
    "romaji": "otousan",
    "english": "father (honorific)",
    "french": "père (honorifique)",
    "level": "N5",
    "category": "family",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "お父さんは仕事に行きました。",
        "hiragana": "おとうさんはしごとにいきました。",
        "romaji": "Otousan wa shigoto ni ikimashita.",
        "english": "My father went to work.",
        "french": "Mon père est allé au travail."
      }
    ]
  },
  {
    "id": "otouto",
    "japanese": "弟",
    "hiragana": "おとうと",
    "romaji": "otouto",
    "english": "younger brother",
    "french": "petit frère",
    "level": "N5",
    "category": "family",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "弟はサッカーが好きです。",
        "hiragana": "おとうとはさっかーがすきです。",
        "romaji": "Otouto wa sakkaa ga suki desu.",
        "english": "My younger brother likes soccer.",
        "french": "Mon petit frère aime le football."
      }
    ]
  },
  {
    "id": "otoko",
    "japanese": "男",
    "hiragana": "おとこ",
    "romaji": "otoko",
    "english": "man",
    "french": "homme",
    "level": "N5",
    "category": "people",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "あの男は先生です。",
        "hiragana": "あのおとこはせんせいです。",
        "romaji": "Ano otoko wa sensei desu.",
        "english": "That man is a teacher.",
        "french": "Cet homme est professeur."
      }
    ]
  },
  {
    "id": "otokonoko",
    "japanese": "男の子",
    "hiragana": "おとこのこ",
    "romaji": "otokonoko",
    "english": "boy",
    "french": "garçon",
    "level": "N5",
    "category": "people",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "男の子が走っています。",
        "hiragana": "おとこのこがはしっています。",
        "romaji": "Otokonoko ga hashitte imasu.",
        "english": "The boy is running.",
        "french": "Le garçon court."
      }
    ]
  },
  {
    "id": "ototoi",
    "japanese": "一昨日",
    "hiragana": "おととい",
    "romaji": "ototoi",
    "english": "day before yesterday",
    "french": "avant-hier",
    "level": "N5",
    "category": "time",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "一昨日映画を見ました。",
        "hiragana": "おとといえいがをみました。",
        "romaji": "Ototoi eiga o mimashita.",
        "english": "I watched a movie the day before yesterday.",
        "french": "J'ai vu un film avant-hier."
      }
    ]
  },
  {
    "id": "ototoshi",
    "japanese": "一昨年",
    "hiragana": "おととし",
    "romaji": "ototoshi",
    "english": "year before last",
    "french": "l'année avant la dernière",
    "level": "N5",
    "category": "time",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "一昨年日本に行きました。",
        "hiragana": "おととしにほんにいきました。",
        "romaji": "Ototoshi Nihon ni ikimashita.",
        "english": "I went to Japan the year before last.",
        "french": "Je suis allé au Japon l'avant-dernière année."
      }
    ]
  },
  {
    "id": "otona",
    "japanese": "大人",
    "hiragana": "おとな",
    "romaji": "otona",
    "english": "adult",
    "french": "adulte",
    "level": "N5",
    "category": "people",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "彼は大人です。",
        "hiragana": "かれはおとなです。",
        "romaji": "Kare wa otona desu.",
        "english": "He is an adult.",
        "french": "C'est un adulte."
      }
    ]
  },
  {
    "id": "onaka",
    "japanese": "おなか",
    "hiragana": "おなか",
    "romaji": "onaka",
    "english": "stomach",
    "french": "ventre",
    "level": "N5",
    "category": "body parts",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "おなかが痛いです。",
        "hiragana": "おなかがいたいです。",
        "romaji": "Onaka ga itai desu.",
        "english": "My stomach hurts.",
        "french": "J'ai mal au ventre."
      }
    ]
  },
  {
    "id": "onaji",
    "japanese": "同じ",
    "hiragana": "おなじ",
    "romaji": "onaji",
    "english": "same",
    "french": "même, identique",
    "level": "N5",
    "category": "adjective",
    "wordType": "adjective",
    "examples": [
      {
        "japanese": "私たちは同じ学校に通っています。",
        "hiragana": "わたしたちはおなじがっこうにかよっています。",
        "romaji": "Watashitachi wa onaji gakkou ni kayotte imasu.",
        "english": "We go to the same school.",
        "french": "Nous allons à la même école."
      }
    ]
  },
  {
    "id": "oniisan",
    "japanese": "お兄さん",
    "hiragana": "おにいさん",
    "romaji": "oniisan",
    "english": "older brother (honorific)",
    "french": "frère aîné (honorifique)",
    "level": "N5",
    "category": "family",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "お兄さんは大学生です。",
        "hiragana": "おにいさんはだいがくせいです。",
        "romaji": "Oniisan wa daigakusei desu.",
        "english": "My older brother is a university student.",
        "french": "Mon grand frère est étudiant à l'université."
      }
    ]
  },
  {
    "id": "oneesan",
    "japanese": "お姉さん",
    "hiragana": "おねえさん",
    "romaji": "oneesan",
    "english": "older sister (honorific)",
    "french": "sœur aînée (honorifique)",
    "level": "N5",
    "category": "family",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "お姉さんは先生です。",
        "hiragana": "おねえさんはせんせいです。",
        "romaji": "Oneesan wa sensei desu.",
        "english": "My older sister is a teacher.",
        "french": "Ma grande sœur est professeur."
      }
    ]
  },
  {
    "id": "obaasan",
    "japanese": "おばあさん",
    "hiragana": "おばあさん",
    "romaji": "obaasan",
    "english": "grandmother, elderly woman",
    "french": "grand-mère, vieille femme",
    "level": "N5",
    "category": "family",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "おばあさんは元気です。",
        "hiragana": "おばあさんはげんきです。",
        "romaji": "Obaasan wa genki desu.",
        "english": "Grandmother is healthy.",
        "french": "Ma grand-mère est en bonne santé."
      }
    ]
  },
  {
    "id": "obasan",
    "japanese": "伯母さん/叔母さん",
    "hiragana": "おばさん",
    "romaji": "obasan",
    "english": "aunt",
    "french": "tante",
    "level": "N5",
    "category": "family",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "おばさんが遊びに来ました。",
        "hiragana": "おばさんがあそびにきました。",
        "romaji": "Obasan ga asobi ni kimashita.",
        "english": "My aunt came to visit.",
        "french": "Ma tante est venue rendre visite."
      }
    ]
  },
  {
    "id": "ofuro",
    "japanese": "お風呂",
    "hiragana": "おふろ",
    "romaji": "ofuro",
    "english": "bath",
    "french": "bain",
    "level": "N5",
    "category": "daily life",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "毎日お風呂に入ります。",
        "hiragana": "まいにちおふろにはいります。",
        "romaji": "Mainichi ofuro ni hairimasu.",
        "english": "I take a bath every day.",
        "french": "Je prends un bain tous les jours."
      }
    ]
  },
  {
    "id": "obentou",
    "japanese": "お弁当",
    "hiragana": "おべんとう",
    "romaji": "obentou",
    "english": "boxed lunch",
    "french": "boîte repas, bento",
    "level": "N5",
    "category": "food",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "お弁当を作りました。",
        "hiragana": "おべんとうをつくりました。",
        "romaji": "Obentou o tsukurimashita.",
        "english": "I made a boxed lunch.",
        "french": "J'ai préparé un bento."
      }
    ]
  },
  {
    "id": "oboeru",
    "japanese": "覚える",
    "hiragana": "おぼえる",
    "romaji": "oboeru",
    "english": "to remember",
    "french": "se souvenir, mémoriser",
    "level": "N5",
    "category": "verb",
    "wordType": "verb",
    "examples": [
      {
        "japanese": "新しい単語を覚えます。",
        "hiragana": "あたらしいたんごをおぼえます。",
        "romaji": "Atarashii tango o oboemasu.",
        "english": "I remember new words.",
        "french": "Je mémorise de nouveaux mots."
      }
    ]
  },
  {
    "id": "omawarisan",
    "japanese": "おまわりさん",
    "hiragana": "おまわりさん",
    "romaji": "omawarisan",
    "english": "friendly term for policeman",
    "french": "agent de police (familier)",
    "level": "N5",
    "category": "people",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "おまわりさんに道を聞きました。",
        "hiragana": "おまわりさんにみちをききました。",
        "romaji": "Omawarisan ni michi o kikimashita.",
        "english": "I asked the policeman for directions.",
        "french": "J'ai demandé le chemin à un policier."
      }
    ]
  },
  {
    "id": "omoi",
    "japanese": "重い",
    "hiragana": "おもい",
    "romaji": "omoi",
    "english": "heavy",
    "french": "lourd",
    "level": "N5",
    "category": "adjective",
    "wordType": "adjective",
    "examples": [
      {
        "japanese": "このかばんは重いです。",
        "hiragana": "このかばんはおもいです。",
        "romaji": "Kono kaban wa omoi desu.",
        "english": "This bag is heavy.",
        "french": "Ce sac est lourd."
      }
    ]
  },
  {
    "id": "omoshiroi",
    "japanese": "おもしろい",
    "hiragana": "おもしろい",
    "romaji": "omoshiroi",
    "english": "interesting",
    "french": "intéressant",
    "level": "N5",
    "category": "adjective",
    "wordType": "adjective",
    "examples": [
      {
        "japanese": "この映画はおもしろいです。",
        "hiragana": "このえいがはおもしろいです。",
        "romaji": "Kono eiga wa omoshiroi desu.",
        "english": "This movie is interesting.",
        "french": "Ce film est intéressant."
      }
    ]
  },
  {
    "id": "oyogu",
    "japanese": "泳ぐ",
    "hiragana": "およぐ",
    "romaji": "oyogu",
    "english": "to swim",
    "french": "nager",
    "level": "N5",
    "category": "verb",
    "wordType": "verb",
    "examples": [
      {
        "japanese": "プールで泳ぎます。",
        "hiragana": "ぷーるでおよぎます。",
        "romaji": "Pūru de oyogimasu.",
        "english": "I swim in the pool.",
        "french": "Je nage dans la piscine."
      }
    ]
  },
  {
    "id": "oriru",
    "japanese": "降りる",
    "hiragana": "おりる",
    "romaji": "oriru",
    "english": "to get off, to descend",
    "french": "descendre",
    "level": "N5",
    "category": "verb",
    "wordType": "verb",
    "examples": [
      {
        "japanese": "電車を降ります。",
        "hiragana": "でんしゃをおります。",
        "romaji": "Densha o orimasu.",
        "english": "I get off the train.",
        "french": "Je descends du train."
      }
    ]
  },
  {
    "id": "owaru",
    "japanese": "終る",
    "hiragana": "おわる",
    "romaji": "owaru",
    "english": "to finish",
    "french": "finir, terminer",
    "level": "N5",
    "category": "verb",
    "wordType": "verb",
    "examples": [
      {
        "japanese": "授業は3時に終わります。",
        "hiragana": "じゅぎょうはさんじにおわります。",
        "romaji": "Jugyou wa sanji ni owarimasu.",
        "english": "The class ends at 3.",
        "french": "Le cours se termine à 3 heures."
      }
    ]
  },
  {
    "id": "ongaku",
    "japanese": "音楽",
    "hiragana": "おんがく",
    "romaji": "ongaku",
    "english": "music",
    "french": "musique",
    "level": "N5",
    "category": "art",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "音楽を聞きます。",
        "hiragana": "おんがくをききます。",
        "romaji": "Ongaku o kikimasu.",
        "english": "I listen to music.",
        "french": "J'écoute de la musique."
      }
    ]
  },
  {
    "id": "onna",
    "japanese": "女",
    "hiragana": "おんな",
    "romaji": "onna",
    "english": "woman",
    "french": "femme",
    "level": "N5",
    "category": "people",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "その女は医者です。",
        "hiragana": "そのおんなはいしゃです。",
        "romaji": "Sono onna wa isha desu.",
        "english": "That woman is a doctor.",
        "french": "Cette femme est médecin."
      }
    ]
  },
  {
    "id": "onnanoko",
    "japanese": "女の子",
    "hiragana": "おんなのこ",
    "romaji": "onnanoko",
    "english": "girl",
    "french": "fille",
    "level": "N5",
    "category": "people",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "女の子が笑っています。",
        "hiragana": "おんなのこがわらっています。",
        "romaji": "Onnanoko ga waratte imasu.",
        "english": "The girl is smiling.",
        "french": "La fille sourit."
      }
    ]
  },
  {
    "id": "gaikoku",
    "japanese": "外国",
    "hiragana": "がいこく",
    "romaji": "gaikoku",
    "english": "foreign country",
    "french": "pays étranger",
    "level": "N5",
    "category": "geography",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "外国へ旅行します。",
        "hiragana": "がいこくへりょこうします。",
        "romaji": "Gaikoku e ryokou shimasu.",
        "english": "I travel to a foreign country.",
        "french": "Je voyage à l'étranger."
      }
    ]
  }
];

export const categories = [...new Set(vocabularyData.map(word => word.category))];
export const levels = ['N5', 'N4', 'N3', 'N2', 'N1'] as const;