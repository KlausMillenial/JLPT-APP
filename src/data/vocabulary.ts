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
  }
];

export const categories = [...new Set(vocabularyData.map(word => word.category))];
export const levels = ['N5', 'N4', 'N3', 'N2', 'N1'] as const;