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
  imageUrl?: string;
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
        spanish: "Bebo café por la mañana."
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
    german: "Nacht",
    vietnamese: "buổi tối",
    chinese: "夜晚",
    korean: "밤",
    spanish: "noche",
    level: "N5",
    category: "time",
    wordType: "noun",
    examples: [
      {
        japanese: "夜は静かです。",
        hiragana: "よるはしずかです。",
        romaji: "Yoru wa shizuka desu.",
        english: "The night is quiet.",
        french: "La nuit est calme.",
        german: "Die Nacht ist ruhig.",
        vietnamese: "Ban đêm yên tĩnh.",
        chinese: "夜晚很安静。",
        korean: "밤은 조용합니다.",
        spanish: "La noche es tranquila."
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
    german: "Buch",
    vietnamese: "sách",
    chinese: "书",
    korean: "책",
    spanish: "libro",
    level: "N5",
    category: "object",
    wordType: "noun",
    examples: [
      {
        japanese: "面白い本を読んでいます。",
        hiragana: "おもしろいほんをよんでいます。",
        romaji: "Omoshiroi hon o yonde imasu.",
        english: "I am reading an interesting book.",
        french: "Je lis un livre intéressant.",
        german: "Ich lese ein interessantes Buch.",
        vietnamese: "Tôi đang đọc một cuốn sách thú vị.",
        chinese: "我在读一本有趣的书。",
        korean: "나는 재미있는 책을 읽고 있습니다.",
        spanish: "Estoy leyendo un libro interesante."
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
    german: "essen",
    vietnamese: "ăn",
    chinese: "吃",
    korean: "먹다",
    spanish: "comer",
    level: "N5",
    category: "verb",
    wordType: "verb",
    examples: [
      {
        japanese: "寿司を食べたいです。",
        hiragana: "すしをたべたいです。",
        romaji: "Sushi o tabetai desu.",
        english: "I want to eat sushi.",
        french: "Je veux manger des sushis.",
        german: "Ich möchte Sushi essen.",
        vietnamese: "Tôi muốn ăn sushi.",
        chinese: "我想吃寿司。",
        korean: "초밥을 먹고 싶습니다.",
        spanish: "Quiero comer sushi."
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
    german: "rot",
    vietnamese: "đỏ",
    chinese: "红色的",
    korean: "빨간",
    spanish: "rojo",
    level: "N5",
    category: "color",
    wordType: "adjective",
    examples: [
      {
        japanese: "赤い花が美しいです。",
        hiragana: "あかいはながうつくしいです。",
        romaji: "Akai hana ga utsukushii desu.",
        english: "The red flowers are beautiful.",
        french: "Les fleurs rouges sont belles.",
        german: "Die roten Blumen sind schön.",
        vietnamese: "Những bông hoa đỏ rất đẹp.",
        chinese: "红花很美。",
        korean: "빨간 꽃이 아름답습니다.",
        spanish: "Las flores rojas son hermosas."
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
    german: "Schule",
    vietnamese: "trường học",
    chinese: "学校",
    korean: "학교",
    spanish: "escuela",
    level: "N5",
    category: "place",
    wordType: "noun",
    examples: [
      {
        japanese: "学校で日本語を勉強します。",
        hiragana: "がっこうでにほんごをべんきょうします。",
        romaji: "Gakkou de nihongo o benkyou shimasu.",
        english: "I study Japanese at school.",
        french: "J'étudie le japonais à l'école.",
        german: "Ich lerne Japanisch in der Schule.",
        vietnamese: "Tôi học tiếng Nhật ở trường.",
        chinese: "我在学校学习日语。",
        korean: "학교에서 일본어를 공부합니다.",
        spanish: "Estudio japonés en la escuela."
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
    german: "Wasser",
    vietnamese: "nước",
    chinese: "水",
    korean: "물",
    spanish: "agua",
    level: "N5",
    category: "nature",
    wordType: "noun",
    examples: [
      {
        japanese: "冷たい水を飲みました。",
        hiragana: "つめたいみずをのみました。",
        romaji: "Tsumetai mizu o nomimashita.",
        english: "I drank cold water.",
        french: "J'ai bu de l'eau froide.",
        german: "Ich habe kaltes Wasser getrunken.",
        vietnamese: "Tôi đã uống nước lạnh.",
        chinese: "我喝了冷水。",
        korean: "찬물을 마셨습니다.",
        spanish: "Bebí agua fría."
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
    german: "treffen",
    vietnamese: "gặp",
    chinese: "见面",
    korean: "만나다",
    spanish: "encontrar / reunirse",
    level: "N5",
    category: "verb",
    wordType: "verb",
    examples: [
      {
        japanese: "友達に会う。",
        hiragana: "ともだちにあう。",
        romaji: "Tomodachi ni au.",
        english: "I meet a friend.",
        french: "Je rencontre un ami.",
        german: "Ich treffe einen Freund.",
        vietnamese: "Tôi gặp một người bạn.",
        chinese: "我见朋友。",
        korean: "친구를 만난다.",
        spanish: "Me encuentro con un amigo."
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
    german: "Blau",
    vietnamese: "xanh dương",
    chinese: "蓝色",
    korean: "파랑",
    spanish: "azul",
    level: "N5",
    category: "color",
    wordType: "noun",
    examples: [
      {
        japanese: "空は青です。",
        hiragana: "そらはあおです。",
        romaji: "Sora wa ao desu.",
        english: "The sky is blue.",
        french: "Le ciel est bleu.",
        german: "Der Himmel ist blau.",
        vietnamese: "Bầu trời màu xanh.",
        chinese: "天空是蓝色的。",
        korean: "하늘은 파랗습니다.",
        spanish: "El cielo es azul."
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
    german: "blau",
    vietnamese: "xanh",
    chinese: "蓝色的",
    korean: "파란",
    spanish: "azul",
    level: "N5",
    category: "color",
    wordType: "adjective",
    examples: [
      {
        japanese: "青いシャツを着ています。",
        hiragana: "あおいしゃつをきています。",
        romaji: "Aoi shatsu o kite imasu.",
        english: "I am wearing a blue shirt.",
        french: "Je porte une chemise bleue.",
        german: "Ich trage ein blaues Hemd.",
        vietnamese: "Tôi đang mặc áo sơ mi màu xanh.",
        chinese: "我穿着蓝色的衬衫。",
        korean: "나는 파란 셔츠를 입고 있습니다.",
        spanish: "Llevo una camisa azul."
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
    german: "Rot",
    vietnamese: "màu đỏ",
    chinese: "红色",
    korean: "빨강",
    spanish: "rojo",
    level: "N5",
    category: "color",
    wordType: "noun",
    examples: [
      {
        japanese: "赤が好きです。",
        hiragana: "あかがすきです。",
        romaji: "Aka ga suki desu.",
        english: "I like red.",
        french: "J'aime le rouge.",
        german: "Ich mag Rot.",
        vietnamese: "Tôi thích màu đỏ.",
        chinese: "我喜欢红色。",
        korean: "나는 빨강을 좋아합니다.",
        spanish: "Me gusta el rojo."
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
    german: "hell",
    vietnamese: "sáng",
    chinese: "明亮",
    korean: "밝은",
    spanish: "brillante",
    level: "N5",
    category: "adjective",
    wordType: "adjective",
    examples: [
      {
        japanese: "部屋は明るいです。",
        hiragana: "へやはあかるいです。",
        romaji: "Heya wa akarui desu.",
        english: "The room is bright.",
        french: "La chambre est lumineuse.",
        german: "Das Zimmer ist hell.",
        vietnamese: "Căn phòng sáng sủa.",
        chinese: "房间很明亮。",
        korean: "방이 밝습니다.",
        spanish: "La habitación es luminosa."
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
    german: "Herbst",
    vietnamese: "mùa thu",
    chinese: "秋天",
    korean: "가을",
    spanish: "otoño",
    level: "N5",
    category: "season",
    wordType: "noun",
    examples: [
      {
        japanese: "秋は涼しいです。",
        hiragana: "あきはすずしいです。",
        romaji: "Aki wa suzushii desu.",
        english: "Autumn is cool.",
        french: "L'automne est frais.",
        german: "Der Herbst ist kühl.",
        vietnamese: "Mùa thu thì mát mẻ.",
        chinese: "秋天很凉快。",
        korean: "가을은 시원합니다.",
        spanish: "El otoño es fresco."
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
  },
  {
    "id": "katei",
    "japanese": "家庭",
    "hiragana": "かてい",
    "romaji": "katei",
    "english": "household",
    "french": "foyer, ménage",
    "level": "N5",
    "category": "life",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "家庭を大切にします。",
        "hiragana": "かていをたいせつにします。",
        "romaji": "Katei o taisetsu ni shimasu.",
        "english": "I value my household.",
        "french": "Je prends soin de mon foyer."
      }
    ]
  },
  {
    "id": "kado",
    "japanese": "角",
    "hiragana": "かど",
    "romaji": "kado",
    "english": "corner",
    "french": "coin",
    "level": "N5",
    "category": "place",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "角で待ちます。",
        "hiragana": "かどでまちます。",
        "romaji": "Kado de machimasu.",
        "english": "I wait at the corner.",
        "french": "J'attends au coin."
      }
    ]
  },
  {
    "id": "kaban",
    "japanese": "かばん",
    "hiragana": "かばん",
    "romaji": "kaban",
    "english": "bag",
    "french": "sac",
    "level": "N5",
    "category": "object",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "新しいかばんを買いました。",
        "hiragana": "あたらしいかばんをかいました。",
        "romaji": "Atarashii kaban o kaimashita.",
        "english": "I bought a new bag.",
        "french": "J'ai acheté un nouveau sac."
      }
    ]
  },
  {
    "id": "kabin",
    "japanese": "花瓶",
    "hiragana": "かびん",
    "romaji": "kabin",
    "english": "vase",
    "french": "vase",
    "level": "N5",
    "category": "object",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "花瓶に花を入れました。",
        "hiragana": "かびんにはなをいれました。",
        "romaji": "Kabin ni hana o iremashita.",
        "english": "I put flowers in the vase.",
        "french": "J'ai mis des fleurs dans le vase."
      }
    ]
  },
  {
    "id": "kami",
    "japanese": "紙",
    "hiragana": "かみ",
    "romaji": "kami",
    "english": "paper",
    "french": "papier",
    "level": "N5",
    "category": "object",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "紙に名前を書きます。",
        "hiragana": "かみになまえをかきます。",
        "romaji": "Kami ni namae o kakimasu.",
        "english": "I write my name on the paper.",
        "french": "J'écris mon nom sur le papier."
      }
    ]
  },
  {
    "id": "kamera",
    "japanese": "カメラ",
    "hiragana": "カメラ",
    "romaji": "kamera",
    "english": "camera",
    "french": "appareil photo",
    "level": "N5",
    "category": "object",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "カメラで写真を撮ります。",
        "hiragana": "かめらでしゃしんをとります。",
        "romaji": "Kamera de shashin o torimasu.",
        "english": "I take pictures with a camera.",
        "french": "Je prends des photos avec un appareil photo."
      }
    ]
  },
  {
    "id": "kayoubi",
    "japanese": "火曜日",
    "hiragana": "かようび",
    "romaji": "kayoubi",
    "english": "Tuesday",
    "french": "mardi",
    "level": "N5",
    "category": "time",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "火曜日に会いましょう。",
        "hiragana": "かようびにあいましょう。",
        "romaji": "Kayoubi ni aimashou.",
        "english": "Let's meet on Tuesday.",
        "french": "Rencontrons-nous mardi."
      }
    ]
  },
  {
    "id": "karai",
    "japanese": "辛い",
    "hiragana": "からい",
    "romaji": "karai",
    "english": "spicy",
    "french": "épicé",
    "level": "N5",
    "category": "taste",
    "wordType": "adjective",
    "examples": [
      {
        "japanese": "カレーは辛いです。",
        "hiragana": "かれーはからいです。",
        "romaji": "Karee wa karai desu.",
        "english": "The curry is spicy.",
        "french": "Le curry est épicé."
      }
    ]
  },
  {
    "id": "karada",
    "japanese": "体",
    "hiragana": "からだ",
    "romaji": "karada",
    "english": "body",
    "french": "corps",
    "level": "N5",
    "category": "body parts",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "体が疲れています。",
        "hiragana": "からだがつかれています。",
        "romaji": "Karada ga tsukarete imasu.",
        "english": "My body is tired.",
        "french": "Mon corps est fatigué."
      }
    ]
  },
  {
    "id": "kariru",
    "japanese": "借りる",
    "hiragana": "かりる",
    "romaji": "kariru",
    "english": "to borrow",
    "french": "emprunter",
    "level": "N5",
    "category": "verb",
    "wordType": "verb",
    "examples": [
      {
        "japanese": "友達に本を借りました。",
        "hiragana": "ともだちにほんをかりました。",
        "romaji": "Tomodachi ni hon o karimashita.",
        "english": "I borrowed a book from my friend.",
        "french": "J'ai emprunté un livre à mon ami."
      }
    ]
  },
  {
    "id": "karui",
    "japanese": "軽い",
    "hiragana": "かるい",
    "romaji": "karui",
    "english": "light (not heavy)",
    "french": "léger",
    "level": "N5",
    "category": "adjective",
    "wordType": "adjective",
    "examples": [
      {
        "japanese": "この箱は軽いです。",
        "hiragana": "このはこはかるいです。",
        "romaji": "Kono hako wa karui desu.",
        "english": "This box is light.",
        "french": "Cette boîte est légère."
      }
    ]
  },
  {
    "id": "karee",
    "japanese": "カレー",
    "hiragana": "カレー",
    "romaji": "karee",
    "english": "curry",
    "french": "curry",
    "level": "N5",
    "category": "food",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "カレーを食べます。",
        "hiragana": "かれーをたべます。",
        "romaji": "Karee o tabemasu.",
        "english": "I eat curry.",
        "french": "Je mange du curry."
      }
    ]
  },
  {
    "id": "karendaa",
    "japanese": "カレンダー",
    "hiragana": "カレンダー",
    "romaji": "karendaa",
    "english": "calendar",
    "french": "calendrier",
    "level": "N5",
    "category": "object",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "カレンダーを見ます。",
        "hiragana": "かれんだーをみます。",
        "romaji": "Karendaa o mimasu.",
        "english": "I look at the calendar.",
        "french": "Je regarde le calendrier."
      }
    ]
  },
  {
    "id": "kawa",
    "japanese": "川/河",
    "hiragana": "かわ",
    "romaji": "kawa",
    "english": "river",
    "french": "rivière, fleuve",
    "level": "N5",
    "category": "nature",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "川で泳ぎます。",
        "hiragana": "かわでおよぎます。",
        "romaji": "Kawa de oyogimasu.",
        "english": "I swim in the river.",
        "french": "Je nage dans la rivière."
      }
    ]
  },
  {
    "id": "kawaii",
    "japanese": "かわいい",
    "hiragana": "かわいい",
    "romaji": "kawaii",
    "english": "cute",
    "french": "mignon",
    "level": "N5",
    "category": "adjective",
    "wordType": "adjective",
    "examples": [
      {
        "japanese": "その猫はかわいいです。",
        "hiragana": "そのねこはかわいいです。",
        "romaji": "Sono neko wa kawaii desu.",
        "english": "That cat is cute.",
        "french": "Ce chat est mignon."
      }
    ]
  },
  {
    "id": "kanji",
    "japanese": "漢字",
    "hiragana": "かんじ",
    "romaji": "kanji",
    "english": "Chinese character",
    "french": "kanji, caractère chinois",
    "level": "N5",
    "category": "language",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "漢字を勉強します。",
        "hiragana": "かんじをべんきょうします。",
        "romaji": "Kanji o benkyou shimasu.",
        "english": "I study kanji.",
        "french": "J'étudie les kanjis."
      }
    ]
  },
  {
    "id": "ki",
    "japanese": "木",
    "hiragana": "き",
    "romaji": "ki",
    "english": "tree, wood",
    "french": "arbre, bois",
    "level": "N5",
    "category": "nature",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "庭に木があります。",
        "hiragana": "にわにきがあります。",
        "romaji": "Niwa ni ki ga arimasu.",
        "english": "There is a tree in the garden.",
        "french": "Il y a un arbre dans le jardin."
      }
    ]
  },
  {
    "id": "kiiro",
    "japanese": "黄色",
    "hiragana": "きいろ",
    "romaji": "kiiro",
    "english": "yellow",
    "french": "jaune",
    "level": "N5",
    "category": "color",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "黄色が好きです。",
        "hiragana": "きいろがすきです。",
        "romaji": "Kiiro ga suki desu.",
        "english": "I like yellow.",
        "french": "J'aime le jaune."
      }
    ]
  },
  {
    "id": "kiiroi",
    "japanese": "黄色い",
    "hiragana": "きいろい",
    "romaji": "kiiroi",
    "english": "yellow (adjective)",
    "french": "jaune (adjectif)",
    "level": "N5",
    "category": "color",
    "wordType": "adjective",
    "examples": [
      {
        "japanese": "黄色い花があります。",
        "hiragana": "きいろいはながあります。",
        "romaji": "Kiiroi hana ga arimasu.",
        "english": "There are yellow flowers.",
        "french": "Il y a des fleurs jaunes."
      }
    ]
  },
  {
    "id": "kieru",
    "japanese": "消える",
    "hiragana": "きえる",
    "romaji": "kieru",
    "english": "to disappear",
    "french": "disparaître",
    "level": "N5",
    "category": "verb",
    "wordType": "verb",
    "examples": [
      {
        "japanese": "電気が消えました。",
        "hiragana": "でんきがきえました。",
        "romaji": "Denki ga kiemashita.",
        "english": "The light went out.",
        "french": "La lumière s'est éteinte."
      }
    ]
  },
  {
    "id": "kiku",
    "japanese": "聞く",
    "hiragana": "きく",
    "romaji": "kiku",
    "english": "to hear, to listen, to ask",
    "french": "écouter, demander",
    "level": "N5",
    "category": "verb",
    "wordType": "verb",
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
    "id": "kita",
    "japanese": "北",
    "hiragana": "きた",
    "romaji": "kita",
    "english": "north",
    "french": "nord",
    "level": "N5",
    "category": "geography",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "北海道は日本の北にあります。",
        "hiragana": "ほっかいどうはにほんのきたにあります。",
        "romaji": "Hokkaidou wa Nihon no kita ni arimasu.",
        "english": "Hokkaido is in the north of Japan.",
        "french": "Hokkaido est au nord du Japon."
      }
    ]
  },
  {
    "id": "gitaa",
    "japanese": "ギター",
    "hiragana": "ギター",
    "romaji": "gitaa",
    "english": "guitar",
    "french": "guitare",
    "level": "N5",
    "category": "music",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "ギターを弾きます。",
        "hiragana": "ぎたーをひきます。",
        "romaji": "Gitaa o hikimasu.",
        "english": "I play the guitar.",
        "french": "Je joue de la guitare."
      }
    ]
  },
  {
    "id": "kitanai",
    "japanese": "汚い",
    "hiragana": "きたない",
    "romaji": "kitanai",
    "english": "dirty",
    "french": "sale",
    "level": "N5",
    "category": "adjective",
    "wordType": "adjective",
    "examples": [
      {
        "japanese": "部屋が汚いです。",
        "hiragana": "へやがきたないです。",
        "romaji": "Heya ga kitanai desu.",
        "english": "The room is dirty.",
        "french": "La chambre est sale."
      }
    ]
  },
  {
    "id": "kissaten",
    "japanese": "喫茶店",
    "hiragana": "きっさてん",
    "romaji": "kissaten",
    "english": "coffee shop",
    "french": "salon de thé, café",
    "level": "N5",
    "category": "place",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "友達と喫茶店に行きます。",
        "hiragana": "ともだちできっさてんにいきます。",
        "romaji": "Tomodachi to kissaten ni ikimasu.",
        "english": "I go to a coffee shop with my friend.",
        "french": "Je vais au café avec mon ami."
      }
    ]
  },
  {
    "id": "kitte",
    "japanese": "切手",
    "hiragana": "きって",
    "romaji": "kitte",
    "english": "postage stamp",
    "french": "timbre",
    "level": "N5",
    "category": "object",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "切手を買います。",
        "hiragana": "きってをかいます。",
        "romaji": "Kitte o kaimasu.",
        "english": "I buy stamps.",
        "french": "J'achète des timbres."
      }
    ]
  },
  {
    "id": "kippu",
    "japanese": "切符",
    "hiragana": "きっぷ",
    "romaji": "kippu",
    "english": "ticket",
    "french": "billet",
    "level": "N5",
    "category": "object",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "電車の切符を買いました。",
        "hiragana": "でんしゃのきっぷをかいました。",
        "romaji": "Densha no kippu o kaimashita.",
        "english": "I bought a train ticket.",
        "french": "J'ai acheté un billet de train."
      }
    ]
  },
  {
    "id": "kinou",
    "japanese": "昨日",
    "hiragana": "きのう",
    "romaji": "kinou",
    "english": "yesterday",
    "french": "hier",
    "level": "N5",
    "category": "time",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "昨日は雨でした。",
        "hiragana": "きのうはあめでした。",
        "romaji": "Kinou wa ame deshita.",
        "english": "It rained yesterday.",
        "french": "Il a plu hier."
      }
    ]
  },
  {
    "id": "kyuu",
    "japanese": "九",
    "hiragana": "きゅう/く",
    "romaji": "kyuu/ku",
    "english": "nine",
    "french": "neuf",
    "level": "N5",
    "category": "number",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "九人の学生がいます。",
        "hiragana": "きゅうにんのがくせいがいます。",
        "romaji": "Kyuu nin no gakusei ga imasu.",
        "english": "There are nine students.",
        "french": "Il y a neuf étudiants."
      }
    ]
  },
  {
    "id": "gyuuniku",
    "japanese": "牛肉",
    "hiragana": "ぎゅうにく",
    "romaji": "gyuuniku",
    "english": "beef",
    "french": "bœuf",
    "level": "N5",
    "category": "food",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "牛肉を食べます。",
        "hiragana": "ぎゅうにくをたべます。",
        "romaji": "Gyuuniku o tabemasu.",
        "english": "I eat beef.",
        "french": "Je mange du bœuf."
      }
    ]
  },
  {
    "id": "gyuunyuu",
    "japanese": "牛乳",
    "hiragana": "ぎゅうにゅう",
    "romaji": "gyuunyuu",
    "english": "milk",
    "french": "lait",
    "level": "N5",
    "category": "food",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "毎朝牛乳を飲みます。",
        "hiragana": "まいあさぎゅうにゅうをのみます。",
        "romaji": "Maiasa gyuunyuu o nomimasu.",
        "english": "I drink milk every morning.",
        "french": "Je bois du lait chaque matin."
      }
    ]
  },
  {
    "id": "kyou",
    "japanese": "今日",
    "hiragana": "きょう",
    "romaji": "kyou",
    "english": "today",
    "french": "aujourd'hui",
    "level": "N5",
    "category": "time",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "今日は暑いです。",
        "hiragana": "きょうはあついです。",
        "romaji": "Kyou wa atsui desu.",
        "english": "It is hot today.",
        "french": "Il fait chaud aujourd'hui."
      }
    ]
  },
  {
    "id": "kyoushitsu",
    "japanese": "教室",
    "hiragana": "きょうしつ",
    "romaji": "kyoushitsu",
    "english": "classroom",
    "french": "salle de classe",
    "level": "N5",
    "category": "place",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "教室に学生がいます。",
        "hiragana": "きょうしつにがくせいがいます。",
        "romaji": "Kyoushitsu ni gakusei ga imasu.",
        "english": "There are students in the classroom.",
        "french": "Il y a des étudiants dans la salle de classe."
      }
    ]
  },
  {
    "id": "kyoudai",
    "japanese": "兄弟",
    "hiragana": "きょうだい",
    "romaji": "kyoudai",
    "english": "siblings",
    "french": "frères et sœurs",
    "level": "N5",
    "category": "family",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "兄弟が三人います。",
        "hiragana": "きょうだいがさんにんいます。",
        "romaji": "Kyoudai ga sannin imasu.",
        "english": "I have three siblings.",
        "french": "J'ai trois frères et sœurs."
      }
    ]
  },
  {
    "id": "kyonen",
    "japanese": "去年",
    "hiragana": "きょねん",
    "romaji": "kyonen",
    "english": "last year",
    "french": "l'année dernière",
    "level": "N5",
    "category": "time",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "去年日本に行きました。",
        "hiragana": "きょねんにほんにいきました。",
        "romaji": "Kyonen Nihon ni ikimashita.",
        "english": "I went to Japan last year.",
        "french": "Je suis allé au Japon l'année dernière."
      }
    ]
  },
  {
    "id": "kirai",
    "japanese": "嫌い",
    "hiragana": "きらい",
    "romaji": "kirai",
    "english": "dislike, hate",
    "french": "détester",
    "level": "N5",
    "category": "adjective",
    "wordType": "adjective",
    "examples": [
      {
        "japanese": "私は納豆が嫌いです。",
        "hiragana": "わたしはなっとうがきらいです。",
        "romaji": "Watashi wa nattou ga kirai desu.",
        "english": "I dislike natto.",
        "french": "Je déteste le natto."
      }
    ]
  },
  {
    "id": "kiru",
    "japanese": "切る",
    "hiragana": "きる",
    "romaji": "kiru",
    "english": "to cut",
    "french": "couper",
    "level": "N5",
    "category": "verb",
    "wordType": "verb",
    "examples": [
      {
        "japanese": "紙を切ります。",
        "hiragana": "かみをきります。",
        "romaji": "Kami o kirimasu.",
        "english": "I cut paper.",
        "french": "Je coupe du papier."
      }
    ]
  },
  {
    "id": "kiru_wear",
    "japanese": "着る",
    "hiragana": "きる",
    "romaji": "kiru",
    "english": "to wear (from shoulders down)",
    "french": "porter (vêtements)",
    "level": "N5",
    "category": "verb",
    "wordType": "verb",
    "examples": [
      {
        "japanese": "シャツを着ます。",
        "hiragana": "しゃつをきます。",
        "romaji": "Shatsu o kimasu.",
        "english": "I wear a shirt.",
        "french": "Je porte une chemise."
      }
    ]
  },
  {
    "id": "kirei",
    "japanese": "きれい",
    "hiragana": "きれい",
    "romaji": "kirei",
    "english": "pretty, clean",
    "french": "joli, propre",
    "level": "N5",
    "category": "adjective",
    "wordType": "adjective",
    "examples": [
      {
        "japanese": "部屋はきれいです。",
        "hiragana": "へやはきれいです。",
        "romaji": "Heya wa kirei desu.",
        "english": "The room is clean.",
        "french": "La chambre est propre."
      }
    ]
  },
  {
    "id": "kiro",
    "japanese": "キロ/キログラム",
    "hiragana": "きろ/きろぐらむ",
    "romaji": "kiro / kiroguramu",
    "english": "kilogram",
    "french": "kilogramme",
    "level": "N5",
    "category": "measurement",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "りんごを1キロ買いました。",
        "hiragana": "りんごをいちきろかいました。",
        "romaji": "Ringo o ichi kiro kaimashita.",
        "english": "I bought one kilogram of apples.",
        "french": "J'ai acheté un kilo de pommes."
      }
    ]
  },
  {
    "id": "kiromeetoru",
    "japanese": "キロ/キロメートル",
    "hiragana": "きろ/きろめーとる",
    "romaji": "kiro / kiromeetoru",
    "english": "kilometer",
    "french": "kilomètre",
    "level": "N5",
    "category": "measurement",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "駅まで2キロです。",
        "hiragana": "えきまでにきろです。",
        "romaji": "Eki made ni kiro desu.",
        "english": "It is 2 kilometers to the station.",
        "french": "Il y a 2 kilomètres jusqu'à la gare."
      }
    ]
  },
  {
    "id": "ginkou",
    "japanese": "銀行",
    "hiragana": "ぎんこう",
    "romaji": "ginkou",
    "english": "bank",
    "french": "banque",
    "level": "N5",
    "category": "place",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "お金を銀行に預けます。",
        "hiragana": "おかねをぎんこうにあずけます。",
        "romaji": "Okane o ginkou ni azukemasu.",
        "english": "I deposit money in the bank.",
        "french": "Je dépose de l'argent à la banque."
      }
    ]
  },
  {
    "id": "kinyoubi",
    "japanese": "金曜日",
    "hiragana": "きんようび",
    "romaji": "kinyoubi",
    "english": "Friday",
    "french": "vendredi",
    "level": "N5",
    "category": "time",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "金曜日に友達と出かけます。",
        "hiragana": "きんようびにともだちとでかけます。",
        "romaji": "Kinyoubi ni tomodachi to dekakemasu.",
        "english": "I go out with friends on Friday.",
        "french": "Je sors avec des amis vendredi."
      }
    ]
  },
  {
    "id": "kusuri",
    "japanese": "薬",
    "hiragana": "くすり",
    "romaji": "kusuri",
    "english": "medicine",
    "french": "médicament",
    "level": "N5",
    "category": "health",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "薬を飲みます。",
        "hiragana": "くすりをのみます。",
        "romaji": "Kusuri o nomimasu.",
        "english": "I take medicine.",
        "french": "Je prends un médicament."
      }
    ]
  },
  {
    "id": "kudasai",
    "japanese": "ください",
    "hiragana": "ください",
    "romaji": "kudasai",
    "english": "please (give me)",
    "french": "s'il vous plaît (donnez-moi)",
    "level": "N5",
    "category": "expression",
    "wordType": "verb (imperative)",
    "examples": [
      {
        "japanese": "水をください。",
        "hiragana": "みずをください。",
        "romaji": "Mizu o kudasai.",
        "english": "Please give me water.",
        "french": "Donnez-moi de l'eau, s'il vous plaît."
      }
    ]
  },
  {
    "id": "kudamono",
    "japanese": "果物",
    "hiragana": "くだもの",
    "romaji": "kudamono",
    "english": "fruit",
    "french": "fruit",
    "level": "N5",
    "category": "food",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "果物をよく食べます。",
        "hiragana": "くだものをよくたべます。",
        "romaji": "Kudamono o yoku tabemasu.",
        "english": "I often eat fruit.",
        "french": "Je mange souvent des fruits."
      }
    ]
  },
  {
    "id": "kuchi",
    "japanese": "口",
    "hiragana": "くち",
    "romaji": "kuchi",
    "english": "mouth, opening",
    "french": "bouche, ouverture",
    "level": "N5",
    "category": "body parts",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "口を開けてください。",
        "hiragana": "くちをあけてください。",
        "romaji": "Kuchi o akete kudasai.",
        "english": "Please open your mouth.",
        "french": "Ouvrez la bouche, s'il vous plaît."
      }
    ]
  },
  {
    "id": "kutsu",
    "japanese": "靴",
    "hiragana": "くつ",
    "romaji": "kutsu",
    "english": "shoes",
    "french": "chaussures",
    "level": "N5",
    "category": "clothing",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "新しい靴を買いました。",
        "hiragana": "あたらしいくつをかいました。",
        "romaji": "Atarashii kutsu o kaimashita.",
        "english": "I bought new shoes.",
        "french": "J'ai acheté de nouvelles chaussures."
      }
    ]
  },
  {
    "id": "kutsushita",
    "japanese": "靴下",
    "hiragana": "くつした",
    "romaji": "kutsushita",
    "english": "socks",
    "french": "chaussettes",
    "level": "N5",
    "category": "clothing",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "靴下を履きます。",
        "hiragana": "くつしたをはきます。",
        "romaji": "Kutsushita o hakimasu.",
        "english": "I put on socks.",
        "french": "Je mets des chaussettes."
      }
    ]
  },
  {
    "id": "kuni",
    "japanese": "国",
    "hiragana": "くに",
    "romaji": "kuni",
    "english": "country",
    "french": "pays",
    "level": "N5",
    "category": "geography",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "日本は美しい国です。",
        "hiragana": "にほんはうつくしいくにです。",
        "romaji": "Nihon wa utsukushii kuni desu.",
        "english": "Japan is a beautiful country.",
        "french": "Le Japon est un beau pays."
      }
    ]
  },
  {
    "id": "kumori",
    "japanese": "曇り",
    "hiragana": "くもり",
    "romaji": "kumori",
    "english": "cloudy weather",
    "french": "temps nuageux",
    "level": "N5",
    "category": "weather",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "今日は曇りです。",
        "hiragana": "きょうはくもりです。",
        "romaji": "Kyou wa kumori desu.",
        "english": "It is cloudy today.",
        "french": "Il fait nuageux aujourd'hui."
      }
    ]
  },
  {
    "id": "kumoru",
    "japanese": "曇る",
    "hiragana": "くもる",
    "romaji": "kumoru",
    "english": "to become cloudy",
    "french": "se couvrir (ciel)",
    "level": "N5",
    "category": "weather",
    "wordType": "verb",
    "examples": [
      {
        "japanese": "空が曇っています。",
        "hiragana": "そらがくもっています。",
        "romaji": "Sora ga kumotte imasu.",
        "english": "The sky is cloudy.",
        "french": "Le ciel est couvert."
      }
    ]
  },
  {
    "id": "keikan",
    "japanese": "警官",
    "hiragana": "けいかん",
    "romaji": "keikan",
    "english": "policeman",
    "french": "policier",
    "level": "N5",
    "category": "people",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "警官が道を渡っています。",
        "hiragana": "けいかんがみちをわたっています。",
        "romaji": "Keikan ga michi o watatte imasu.",
        "english": "The policeman is crossing the street.",
        "french": "Le policier traverse la rue."
      }
    ]
  },
  {
    "id": "kesa",
    "japanese": "今朝",
    "hiragana": "けさ",
    "romaji": "kesa",
    "english": "this morning",
    "french": "ce matin",
    "level": "N5",
    "category": "time",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "今朝は寒かったです。",
        "hiragana": "けさはさむかったです。",
        "romaji": "Kesa wa samukatta desu.",
        "english": "It was cold this morning.",
        "french": "Il faisait froid ce matin."
      }
    ]
  },
  {
    "id": "kesu",
    "japanese": "消す",
    "hiragana": "けす",
    "romaji": "kesu",
    "english": "to erase, to turn off",
    "french": "effacer, éteindre",
    "level": "N5",
    "category": "verb",
    "wordType": "verb",
    "examples": [
      {
        "japanese": "電気を消してください。",
        "hiragana": "でんきをけしてください。",
        "romaji": "Denki o keshite kudasai.",
        "english": "Please turn off the light.",
        "french": "Éteignez la lumière, s'il vous plaît."
      }
    ]
  },
  {
    "id": "kekkou",
    "japanese": "結構",
    "hiragana": "けっこう",
    "romaji": "kekkou",
    "english": "splendid, enough",
    "french": "magnifique, suffisant",
    "level": "N5",
    "category": "expression",
    "wordType": "adjective",
    "examples": [
      {
        "japanese": "この料理は結構おいしいです。",
        "hiragana": "このりょうりはけっこうおいしいです。",
        "romaji": "Kono ryouri wa kekkou oishii desu.",
        "english": "This dish is quite delicious.",
        "french": "Ce plat est assez délicieux."
      }
    ]
  },
  {
    "id": "kekkon",
    "japanese": "結婚",
    "hiragana": "けっこん",
    "romaji": "kekkon",
    "english": "marriage",
    "french": "mariage",
    "level": "N5",
    "category": "life",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "彼らは去年結婚しました。",
        "hiragana": "かれらはきょねんけっこんしました。",
        "romaji": "Karera wa kyonen kekkon shimashita.",
        "english": "They got married last year.",
        "french": "Ils se sont mariés l'année dernière."
      }
    ]
  },
  {
    "id": "getsuyoubi",
    "japanese": "月曜日",
    "hiragana": "げつようび",
    "romaji": "getsuyoubi",
    "english": "Monday",
    "french": "lundi",
    "level": "N5",
    "category": "time",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "月曜日に会議があります。",
        "hiragana": "げつようびにかいぎがあります。",
        "romaji": "Getsuyoubi ni kaigi ga arimasu.",
        "english": "There is a meeting on Monday.",
        "french": "Il y a une réunion lundi."
      }
    ]
  },
  {
    "id": "genkan",
    "japanese": "玄関",
    "hiragana": "げんかん",
    "romaji": "genkan",
    "english": "entry hall",
    "french": "entrée (maison)",
    "level": "N5",
    "category": "house",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "靴は玄関で脱いでください。",
        "hiragana": "くつはげんかんでぬいでください。",
        "romaji": "Kutsu wa genkan de nuide kudasai.",
        "english": "Please take off your shoes at the entrance.",
        "french": "Enlevez vos chaussures à l'entrée, s'il vous plaît."
      }
    ]
  },
  {
    "id": "genki",
    "japanese": "元気",
    "hiragana": "げんき",
    "romaji": "genki",
    "english": "health, energy",
    "french": "santé, énergie",
    "level": "N5",
    "category": "adjective",
    "wordType": "adjective",
    "examples": [
      {
        "japanese": "お元気ですか？",
        "hiragana": "おげんきですか？",
        "romaji": "Ogenki desu ka?",
        "english": "How are you?",
        "french": "Comment allez-vous ?"
      }
    ]
  },
  {
    "id": "go",
    "japanese": "五",
    "hiragana": "ご",
    "romaji": "go",
    "english": "five",
    "french": "cinq",
    "level": "N5",
    "category": "number",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "りんごを五つください。",
        "hiragana": "りんごをいつつください。",
        "romaji": "Ringo o itsutsu kudasai.",
        "english": "Please give me five apples.",
        "french": "Donnez-moi cinq pommes, s'il vous plaît."
      }
    ]
  },
  {
    "id": "kouen",
    "japanese": "公園",
    "hiragana": "こうえん",
    "romaji": "kouen",
    "english": "park",
    "french": "parc",
    "level": "N5",
    "category": "place",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "公園で遊びます。",
        "hiragana": "こうえんであそびます。",
        "romaji": "Kouen de asobimasu.",
        "english": "I play in the park.",
        "french": "Je joue dans le parc."
      }
    ]
  },
  {
    "id": "kousaten",
    "japanese": "交差点",
    "hiragana": "こうさてん",
    "romaji": "kousaten",
    "english": "intersection",
    "french": "carrefour",
    "level": "N5",
    "category": "place",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "交差点で信号を待ちます。",
        "hiragana": "こうさてんでしんごうをまちます。",
        "romaji": "Kousaten de shingou o machimasu.",
        "english": "I wait at the traffic light at the intersection.",
        "french": "J'attends au feu rouge au carrefour."
      }
    ]
  },
  {
    "id": "koucha",
    "japanese": "紅茶",
    "hiragana": "こうちゃ",
    "romaji": "koucha",
    "english": "black tea",
    "french": "thé noir",
    "level": "N5",
    "category": "drink",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "紅茶に砂糖を入れます。",
        "hiragana": "こうちゃにさとうをいれます。",
        "romaji": "Koucha ni satou o iremasu.",
        "english": "I put sugar in my tea.",
        "french": "Je mets du sucre dans mon thé."
      }
    ]
  },
  {
    "id": "kouban",
    "japanese": "交番",
    "hiragana": "こうばん",
    "romaji": "kouban",
    "english": "police box",
    "french": "poste de police",
    "level": "N5",
    "category": "place",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "交番で道を聞きました。",
        "hiragana": "こうばんでみちをききました。",
        "romaji": "Kouban de michi o kikimashita.",
        "english": "I asked for directions at the police box.",
        "french": "J'ai demandé mon chemin au poste de police."
      }
    ]
  },
  {
    "id": "koe",
    "japanese": "声",
    "hiragana": "こえ",
    "romaji": "koe",
    "english": "voice",
    "french": "voix",
    "level": "N5",
    "category": "body",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "大きな声で話してください。",
        "hiragana": "おおきなこえではなしてください。",
        "romaji": "Ookina koe de hanashite kudasai.",
        "english": "Please speak in a loud voice.",
        "french": "Parlez à voix haute, s'il vous plaît."
      }
    ]
  },
  {
    "id": "kooto",
    "japanese": "コート",
    "hiragana": "こーと",
    "romaji": "kooto",
    "english": "coat",
    "french": "manteau",
    "level": "N5",
    "category": "clothing",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "冬にコートを着ます。",
        "hiragana": "ふゆにこーとをきます。",
        "romaji": "Fuyu ni kooto o kimasu.",
        "english": "I wear a coat in winter.",
        "french": "Je porte un manteau en hiver."
      }
    ]
  },
  {
    "id": "koohii",
    "japanese": "コーヒー",
    "hiragana": "こーひー",
    "romaji": "koohii",
    "english": "coffee",
    "french": "café",
    "level": "N5",
    "category": "drink",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "毎朝コーヒーを飲みます。",
        "hiragana": "まいあさこーひーをのみます。",
        "romaji": "Maiasa koohii o nomimasu.",
        "english": "I drink coffee every morning.",
        "french": "Je bois du café tous les matins."
      }
    ]
  },
  {
    "id": "koko",
    "japanese": "ここ",
    "hiragana": "ここ",
    "romaji": "koko",
    "english": "here",
    "french": "ici",
    "level": "N5",
    "category": "location",
    "wordType": "pronoun",
    "examples": [
      {
        "japanese": "ここに座ってください。",
        "hiragana": "ここにすわってください。",
        "romaji": "Koko ni suwatte kudasai.",
        "english": "Please sit here.",
        "french": "Asseyez-vous ici, s'il vous plaît."
      }
    ]
  },
  {
    "id": "koko",
    "japanese": "此処",
    "hiragana": "ここ",
    "romaji": "koko",
    "english": "here",
    "french": "ici",
    "level": "N5",
    "category": "location",
    "wordType": "pronoun",
    "examples": [
      {
        "japanese": "ここに置いてください。",
        "hiragana": "ここにおいてください。",
        "romaji": "Koko ni oite kudasai.",
        "english": "Please put it here.",
        "french": "Mettez-le ici, s'il vous plaît."
      }
    ]
  },
  {
    "id": "gochisousama",
    "japanese": "ご馳走様",
    "hiragana": "ごちそうさま",
    "romaji": "gochisousama",
    "english": "thank you for the meal",
    "french": "merci pour le repas",
    "level": "N5",
    "category": "expression",
    "wordType": "phrase",
    "examples": [
      {
        "japanese": "ご馳走様でした。",
        "hiragana": "ごちそうさまでした。",
        "romaji": "Gochisousama deshita.",
        "english": "Thank you for the meal.",
        "french": "Merci pour le repas."
      }
    ]
  },
  {
    "id": "kokoasa",
    "japanese": "今朝",
    "hiragana": "けさ",
    "romaji": "kesa",
    "english": "this morning",
    "french": "ce matin",
    "level": "N5",
    "category": "time",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "今朝は早く起きました。",
        "hiragana": "けさははやくおきました。",
        "romaji": "Kesa wa hayaku okimashita.",
        "english": "I woke up early this morning.",
        "french": "Je me suis levé tôt ce matin."
      }
    ]
  },
  {
    "id": "kokoasaasa",
    "japanese": "午後",
    "hiragana": "ごご",
    "romaji": "gogo",
    "english": "afternoon, p.m.",
    "french": "après-midi",
    "level": "N5",
    "category": "time",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "午後3時に会いましょう。",
        "hiragana": "ごごさんじにあいましょう。",
        "romaji": "Gogo sanji ni aimashou.",
        "english": "Let's meet at 3 p.m.",
        "french": "Rendez-vous à 15h."
      }
    ]
  },
  {
    "id": "gozen",
    "japanese": "午前",
    "hiragana": "ごぜん",
    "romaji": "gozen",
    "english": "morning, a.m.",
    "french": "matin (a.m.)",
    "level": "N5",
    "category": "time",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "午前9時に授業が始まります。",
        "hiragana": "ごぜんくじにじゅぎょうがはじまります。",
        "romaji": "Gozen kuji ni jugyou ga hajimarimasu.",
        "english": "Class starts at 9 a.m.",
        "french": "Le cours commence à 9h du matin."
      }
    ]
  },
  {
    "id": "kotoba",
    "japanese": "言葉",
    "hiragana": "ことば",
    "romaji": "kotoba",
    "english": "word, language",
    "french": "mot, langue",
    "level": "N5",
    "category": "language",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "新しい言葉を覚えました。",
        "hiragana": "あたらしいことばをおぼえました。",
        "romaji": "Atarashii kotoba o oboemashita.",
        "english": "I learned a new word.",
        "french": "J'ai appris un nouveau mot."
      }
    ]
  },
  {
    "id": "kotoshi",
    "japanese": "今年",
    "hiragana": "ことし",
    "romaji": "kotoshi",
    "english": "this year",
    "french": "cette année",
    "level": "N5",
    "category": "time",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "今年日本へ行きます。",
        "hiragana": "ことしにほんへいきます。",
        "romaji": "Kotoshi Nihon e ikimasu.",
        "english": "I will go to Japan this year.",
        "french": "Je vais au Japon cette année."
      }
    ]
  },
  {
    "id": "kodomo",
    "japanese": "子供",
    "hiragana": "こども",
    "romaji": "kodomo",
    "english": "child",
    "french": "enfant",
    "level": "N5",
    "category": "people",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "子供が遊んでいます。",
        "hiragana": "こどもがあそんでいます。",
        "romaji": "Kodomo ga asonde imasu.",
        "english": "The child is playing.",
        "french": "L'enfant joue."
      }
    ]
  },
  {
    "id": "gochisou",
    "japanese": "ご馳走",
    "hiragana": "ごちそう",
    "romaji": "gochisou",
    "english": "feast, treat",
    "french": "festin, régal",
    "level": "N5",
    "category": "food",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "友達にご馳走しました。",
        "hiragana": "ともだちにごちそうしました。",
        "romaji": "Tomodachi ni gochisou shimashita.",
        "english": "I treated my friend to a meal.",
        "french": "J'ai offert un repas à mon ami."
      }
    ]
  },
  {
    "id": "kondo",
    "japanese": "今度",
    "hiragana": "こんど",
    "romaji": "kondo",
    "english": "next time",
    "french": "la prochaine fois",
    "level": "N5",
    "category": "time",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "今度一緒に行きましょう。",
        "hiragana": "こんどいっしょにいきましょう。",
        "romaji": "Kondo issho ni ikimashou.",
        "english": "Let's go together next time.",
        "french": "Allons-y ensemble la prochaine fois."
      }
    ]
  },
  {
    "id": "konban",
    "japanese": "今晩",
    "hiragana": "こんばん",
    "romaji": "konban",
    "english": "this evening, tonight",
    "french": "ce soir",
    "level": "N5",
    "category": "time",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "今晩は星が見えます。",
        "hiragana": "こんばんほしがみえます。",
        "romaji": "Konban hoshi ga miemasu.",
        "english": "We can see stars tonight.",
        "french": "On peut voir les étoiles ce soir."
      }
    ]
  },
  {
    "id": "kongetsu",
    "japanese": "今月",
    "hiragana": "こんげつ",
    "romaji": "kongetsu",
    "english": "this month",
    "french": "ce mois-ci",
    "level": "N5",
    "category": "time",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "今月から新しい仕事を始めました。",
        "hiragana": "こんげつからあたらしいしごとをはじめました。",
        "romaji": "Kongetsu kara atarashii shigoto o hajimemashita.",
        "english": "I started a new job this month.",
        "french": "J'ai commencé un nouveau travail ce mois-ci."
      }
    ]
  },
  {
    "id": "konshuu",
    "japanese": "今週",
    "hiragana": "こんしゅう",
    "romaji": "konshuu",
    "english": "this week",
    "french": "cette semaine",
    "level": "N5",
    "category": "time",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "今週は忙しいです。",
        "hiragana": "こんしゅうはいそがしいです。",
        "romaji": "Konshuu wa isogashii desu.",
        "english": "I am busy this week.",
        "french": "Je suis occupé cette semaine."
      }
    ]
  },
  {
    "id": "konna",
    "japanese": "こんな",
    "hiragana": "こんな",
    "romaji": "konna",
    "english": "such, like this",
    "french": "tel, comme ça",
    "level": "N5",
    "category": "expression",
    "wordType": "adjective",
    "examples": [
      {
        "japanese": "こんなに大きいケーキは初めてです。",
        "hiragana": "こんなにおおきいけーきははじめてです。",
        "romaji": "Konna ni ookii keeki wa hajimete desu.",
        "english": "It's the first time I see such a big cake.",
        "french": "C'est la première fois que je vois un gâteau aussi grand."
      }
    ]
  },
  {
    "id": "konya",
    "japanese": "今夜",
    "hiragana": "こんや",
    "romaji": "konya",
    "english": "tonight",
    "french": "ce soir",
    "level": "N5",
    "category": "time",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "今夜は月がきれいです。",
        "hiragana": "こんやはつきがきれいです。",
        "romaji": "Konya wa tsuki ga kirei desu.",
        "english": "The moon is beautiful tonight.",
        "french": "La lune est belle ce soir."
      }
    ]
  },
  {
    "id": "konpyuutaa",
    "japanese": "コンピュータ",
    "hiragana": "こんぴゅーた",
    "romaji": "konpyuutaa",
    "english": "computer",
    "french": "ordinateur",
    "level": "N5",
    "category": "technology",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "コンピュータを使います。",
        "hiragana": "こんぴゅーたをつかいます。",
        "romaji": "Konpyuutaa o tsukaimasu.",
        "english": "I use a computer.",
        "french": "J'utilise un ordinateur."
      }
    ]
  },
  {
    "id": "saifu",
    "japanese": "財布",
    "hiragana": "さいふ",
    "romaji": "saifu",
    "english": "wallet",
    "french": "portefeuille",
    "level": "N5",
    "category": "object",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "財布を忘れました。",
        "hiragana": "さいふをわすれました。",
        "romaji": "Saifu o wasuremashita.",
        "english": "I forgot my wallet.",
        "french": "J'ai oublié mon portefeuille."
      }
    ]
  },
  {
    "id": "sakura",
    "japanese": "桜",
    "hiragana": "さくら",
    "romaji": "sakura",
    "english": "cherry blossom",
    "french": "fleur de cerisier",
    "level": "N5",
    "category": "nature",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "春に桜が咲きます。",
        "hiragana": "はるにさくらがさきます。",
        "romaji": "Haru ni sakura ga sakimasu.",
        "english": "Cherry blossoms bloom in spring.",
        "french": "Les cerisiers fleurissent au printemps."
      }
    ]
  },
  {
    "id": "sai",
    "japanese": "歳",
    "hiragana": "さい",
    "romaji": "sai",
    "english": "years old (age)",
    "french": "ans (âge)",
    "level": "N5",
    "category": "measurement",
    "wordType": "counter",
    "examples": [
      {
        "japanese": "私は二十歳です。",
        "hiragana": "わたしははたちです。",
        "romaji": "Watashi wa hatachi desu.",
        "english": "I am twenty years old.",
        "french": "J'ai vingt ans."
      }
    ]
  },
  {
    "id": "sakanaya",
    "japanese": "魚屋",
    "hiragana": "さかなや",
    "romaji": "sakanaya",
    "english": "fish shop",
    "french": "poissonnerie",
    "level": "N5",
    "category": "place",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "魚屋で魚を買います。",
        "hiragana": "さかなやでさかなをかいます。",
        "romaji": "Sakanaya de sakana o kaimasu.",
        "english": "I buy fish at the fish shop.",
        "french": "J'achète du poisson à la poissonnerie."
      }
    ]
  },
  {
    "id": "sakana",
    "japanese": "魚",
    "hiragana": "さかな",
    "romaji": "sakana",
    "english": "fish",
    "french": "poisson",
    "level": "N5",
    "category": "food",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "魚を食べます。",
        "hiragana": "さかなをたべます。",
        "romaji": "Sakana o tabemasu.",
        "english": "I eat fish.",
        "french": "Je mange du poisson."
      }
    ]
  },
  {
    "id": "sashimi",
    "japanese": "刺身",
    "hiragana": "さしみ",
    "romaji": "sashimi",
    "english": "sliced raw fish",
    "french": "poisson cru (sashimi)",
    "level": "N5",
    "category": "food",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "寿司と刺身が好きです。",
        "hiragana": "すしとさしみがすきです。",
        "romaji": "Sushi to sashimi ga suki desu.",
        "english": "I like sushi and sashimi.",
        "french": "J'aime les sushis et les sashimis."
      }
    ]
  },
  {
    "id": "sasu",
    "japanese": "指す",
    "hiragana": "さす",
    "romaji": "sasu",
    "english": "to point",
    "french": "indiquer, pointer",
    "level": "N5",
    "category": "verb",
    "wordType": "verb",
    "examples": [
      {
        "japanese": "時計を指しました。",
        "hiragana": "とけいをさしました。",
        "romaji": "Tokei o sashimashita.",
        "english": "He pointed at the clock.",
        "french": "Il a montré l'horloge du doigt."
      }
    ]
  },
  {
    "id": "zatshi",
    "japanese": "雑誌",
    "hiragana": "ざっし",
    "romaji": "zasshi",
    "english": "magazine",
    "french": "magazine, revue",
    "level": "N5",
    "category": "object",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "雑誌を読みます。",
        "hiragana": "ざっしをよみます。",
        "romaji": "Zasshi o yomimasu.",
        "english": "I read a magazine.",
        "french": "Je lis un magazine."
      }
    ]
  },
  {
    "id": "samuai",
    "japanese": "寒い",
    "hiragana": "さむい",
    "romaji": "samui",
    "english": "cold (weather)",
    "french": "froid (temps)",
    "level": "N5",
    "category": "adjective",
    "wordType": "adjective",
    "examples": [
      {
        "japanese": "今日は寒いです。",
        "hiragana": "きょうはさむいです。",
        "romaji": "Kyou wa samui desu.",
        "english": "It is cold today.",
        "french": "Il fait froid aujourd'hui."
      }
    ]
  },
  {
    "id": "sarada",
    "japanese": "サラダ",
    "hiragana": "さらだ",
    "romaji": "sarada",
    "english": "salad",
    "french": "salade",
    "level": "N5",
    "category": "food",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "サラダを食べます。",
        "hiragana": "さらだをたべます。",
        "romaji": "Sarada o tabemasu.",
        "english": "I eat salad.",
        "french": "Je mange de la salade."
      }
    ]
  },
  {
    "id": "san",
    "japanese": "三",
    "hiragana": "さん",
    "romaji": "san",
    "english": "three",
    "french": "trois",
    "level": "N5",
    "category": "number",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "三人の友達がいます。",
        "hiragana": "さんにんのともだちがいます。",
        "romaji": "San nin no tomodachi ga imasu.",
        "english": "I have three friends.",
        "french": "J'ai trois amis."
      }
    ]
  },
  {
    "id": "sanpo",
    "japanese": "散歩",
    "hiragana": "さんぽ",
    "romaji": "sanpo",
    "english": "walk, stroll",
    "french": "promenade",
    "level": "N5",
    "category": "activity",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "犬と散歩します。",
        "hiragana": "いぬとさんぽします。",
        "romaji": "Inu to sanpo shimasu.",
        "english": "I take a walk with my dog.",
        "french": "Je me promène avec mon chien."
      }
    ]
  },
  {
    "id": "shawa",
    "japanese": "シャワー",
    "hiragana": "しゃわー",
    "romaji": "shawaa",
    "english": "shower",
    "french": "douche",
    "level": "N5",
    "category": "daily life",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "シャワーを浴びます。",
        "hiragana": "しゃわーをあびます。",
        "romaji": "Shawaa o abimasu.",
        "english": "I take a shower.",
        "french": "Je prends une douche."
      }
    ]
  },
  {
    "id": "shashin",
    "japanese": "写真",
    "hiragana": "しゃしん",
    "romaji": "shashin",
    "english": "photograph",
    "french": "photo",
    "level": "N5",
    "category": "object",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "写真を撮ります。",
        "hiragana": "しゃしんをとります。",
        "romaji": "Shashin o torimasu.",
        "english": "I take a photo.",
        "french": "Je prends une photo."
      }
    ]
  },
  {
    "id": "jikan",
    "japanese": "時間",
    "hiragana": "じかん",
    "romaji": "jikan",
    "english": "time, hour",
    "french": "temps, heure",
    "level": "N5",
    "category": "time",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "時間がありますか？",
        "hiragana": "じかんがありますか？",
        "romaji": "Jikan ga arimasu ka?",
        "english": "Do you have time?",
        "french": "As-tu du temps ?"
      }
    ]
  },
  {
    "id": "jisho",
    "japanese": "辞書",
    "hiragana": "じしょ",
    "romaji": "jisho",
    "english": "dictionary",
    "french": "dictionnaire",
    "level": "N5",
    "category": "object",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "辞書で単語を調べます。",
        "hiragana": "じしょでたんごをしらべます。",
        "romaji": "Jisho de tango o shirabemasu.",
        "english": "I look up words in a dictionary.",
        "french": "Je cherche des mots dans un dictionnaire."
      }
    ]
  },
  {
    "id": "shizuka",
    "japanese": "静か",
    "hiragana": "しずか",
    "romaji": "shizuka",
    "english": "quiet",
    "french": "calme",
    "level": "N5",
    "category": "adjective",
    "wordType": "adjective",
    "examples": [
      {
        "japanese": "図書館は静かです。",
        "hiragana": "としょかんはしずかです。",
        "romaji": "Toshokan wa shizuka desu.",
        "english": "The library is quiet.",
        "french": "La bibliothèque est calme."
      }
    ]
  },
  {
    "id": "shimeru",
    "japanese": "閉める",
    "hiragana": "しめる",
    "romaji": "shimeru",
    "english": "to close",
    "french": "fermer",
    "level": "N5",
    "category": "verb",
    "wordType": "verb",
    "examples": [
      {
        "japanese": "ドアを閉めてください。",
        "hiragana": "どあをしめてください。",
        "romaji": "Doa o shimete kudasai.",
        "english": "Please close the door.",
        "french": "Fermez la porte, s'il vous plaît."
      }
    ]
  },
  {
    "id": "shinu",
    "japanese": "死ぬ",
    "hiragana": "しぬ",
    "romaji": "shinu",
    "english": "to die",
    "french": "mourir",
    "level": "N5",
    "category": "verb",
    "wordType": "verb",
    "examples": [
      {
        "japanese": "魚が死にました。",
        "hiragana": "さかながしにました。",
        "romaji": "Sakana ga shinimashita.",
        "english": "The fish died.",
        "french": "Le poisson est mort."
      }
    ]
  },
  {
    "id": "shiraberu",
    "japanese": "調べる",
    "hiragana": "しらべる",
    "romaji": "shiraberu",
    "english": "to investigate, to check",
    "french": "vérifier, examiner",
    "level": "N5",
    "category": "verb",
    "wordType": "verb",
    "examples": [
      {
        "japanese": "インターネットで調べます。",
        "hiragana": "いんたーねっとでしらべます。",
        "romaji": "Intaanetto de shirabemasu.",
        "english": "I check on the internet.",
        "french": "Je vérifie sur internet."
      }
    ]
  },
  {
    "id": "shirimasu",
    "japanese": "知る",
    "hiragana": "しる",
    "romaji": "shiru",
    "english": "to know",
    "french": "savoir, connaître",
    "level": "N5",
    "category": "verb",
    "wordType": "verb",
    "examples": [
      {
        "japanese": "彼の名前を知っています。",
        "hiragana": "かれのなまえをしっています。",
        "romaji": "Kare no namae o shitte imasu.",
        "english": "I know his name.",
        "french": "Je connais son nom."
      }
    ]
  },
  {
    "id": "shiro",
    "japanese": "白",
    "hiragana": "しろ",
    "romaji": "shiro",
    "english": "white",
    "french": "blanc",
    "level": "N5",
    "category": "color",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "雪は白いです。",
        "hiragana": "ゆきはしろいです。",
        "romaji": "Yuki wa shiroi desu.",
        "english": "Snow is white.",
        "french": "La neige est blanche."
      }
    ]
  },
  {
    "id": "shiroi",
    "japanese": "白い",
    "hiragana": "しろい",
    "romaji": "shiroi",
    "english": "white (adjective)",
    "french": "blanc (adjectif)",
    "level": "N5",
    "category": "color",
    "wordType": "adjective",
    "examples": [
      {
        "japanese": "白いシャツを着ています。",
        "hiragana": "しろいしゃつをきています。",
        "romaji": "Shiroi shatsu o kite imasu.",
        "english": "I am wearing a white shirt.",
        "french": "Je porte une chemise blanche."
      }
    ]
  },
  {
    "id": "shokudou",
    "japanese": "食堂",
    "hiragana": "しょくどう",
    "romaji": "shokudou",
    "english": "cafeteria, dining hall",
    "french": "cantine, salle à manger",
    "level": "N5",
    "category": "place",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "大学の食堂で昼ご飯を食べます。",
        "hiragana": "だいがくのしょくどうでひるごはんをたべます。",
        "romaji": "Daigaku no shokudou de hirugohan o tabemasu.",
        "english": "I eat lunch at the university cafeteria.",
        "french": "Je déjeune à la cantine de l'université."
      }
    ]
  },
  {
    "id": "shouyu",
    "japanese": "醤油",
    "hiragana": "しょうゆ",
    "romaji": "shouyu",
    "english": "soy sauce",
    "french": "sauce soja",
    "level": "N5",
    "category": "food",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "寿司に醤油をつけます。",
        "hiragana": "すしにしょうゆをつけます。",
        "romaji": "Sushi ni shouyu o tsukemasu.",
        "english": "I put soy sauce on sushi.",
        "french": "Je mets de la sauce soja sur les sushis."
      }
    ]
  },
  {
    "id": "shokuin",
    "japanese": "職員",
    "hiragana": "しょくいん",
    "romaji": "shokuin",
    "english": "staff member",
    "french": "employé",
    "level": "N5",
    "category": "people",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "学校の職員です。",
        "hiragana": "がっこうのしょくいんです。",
        "romaji": "Gakkou no shokuin desu.",
        "english": "He is a school staff member.",
        "french": "C'est un employé de l'école."
      }
    ]
  },
  {
    "id": "shougakusei",
    "japanese": "小学生",
    "hiragana": "しょうがくせい",
    "romaji": "shougakusei",
    "english": "elementary school student",
    "french": "élève d'école primaire",
    "level": "N5",
    "category": "people",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "弟は小学生です。",
        "hiragana": "おとうとはしょうがくせいです。",
        "romaji": "Otouto wa shougakusei desu.",
        "english": "My younger brother is an elementary school student.",
        "french": "Mon petit frère est à l'école primaire."
      }
    ]
  },
  {
    "id": "shounen",
    "japanese": "少年",
    "hiragana": "しょうねん",
    "romaji": "shounen",
    "english": "boy, youth",
    "french": "garçon, jeune garçon",
    "level": "N5",
    "category": "people",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "その少年は走っています。",
        "hiragana": "そのしょうねんははしっています。",
        "romaji": "Sono shounen wa hashitte imasu.",
        "english": "That boy is running.",
        "french": "Ce garçon court."
      }
    ]
  },
  {
    "id": "shoujo",
    "japanese": "少女",
    "hiragana": "しょうじょ",
    "romaji": "shoujo",
    "english": "girl, young girl",
    "french": "fille, jeune fille",
    "level": "N5",
    "category": "people",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "少女が歌っています。",
        "hiragana": "しょうじょがうたっています。",
        "romaji": "Shoujo ga utatte imasu.",
        "english": "A girl is singing.",
        "french": "Une fille chante."
      }
    ]
  },
  {
    "id": "shoujiki",
    "japanese": "正直",
    "hiragana": "しょうじき",
    "romaji": "shoujiki",
    "english": "honest",
    "french": "honnête",
    "level": "N5",
    "category": "adjective",
    "wordType": "adjective",
    "examples": [
      {
        "japanese": "彼は正直な人です。",
        "hiragana": "かれはしょうじきなひとです。",
        "romaji": "Kare wa shoujiki na hito desu.",
        "english": "He is an honest person.",
        "french": "C'est une personne honnête."
      }
    ]
  },
  {
    "id": "shuppatsu",
    "japanese": "出発",
    "hiragana": "しゅっぱつ",
    "romaji": "shuppatsu",
    "english": "departure",
    "french": "départ",
    "level": "N5",
    "category": "travel",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "明日の出発は8時です。",
        "hiragana": "あしたのしゅっぱつははちじです。",
        "romaji": "Ashita no shuppatsu wa hachiji desu.",
        "english": "The departure is at 8 tomorrow.",
        "french": "Le départ est à 8 heures demain."
      }
    ]
  },
  {
    "id": "shusseki",
    "japanese": "出席",
    "hiragana": "しゅっせき",
    "romaji": "shusseki",
    "english": "attendance",
    "french": "présence",
    "level": "N5",
    "category": "school",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "出席を取ります。",
        "hiragana": "しゅっせきをとります。",
        "romaji": "Shusseki o torimasu.",
        "english": "I take attendance.",
        "french": "Je fais l'appel."
      }
    ]
  },
  {
    "id": "shuumatsu",
    "japanese": "週末",
    "hiragana": "しゅうまつ",
    "romaji": "shuumatsu",
    "english": "weekend",
    "french": "week-end",
    "level": "N5",
    "category": "time",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "週末に友達と遊びます。",
        "hiragana": "しゅうまつにともだちとあそびます。",
        "romaji": "Shuumatsu ni tomodachi to asobimasu.",
        "english": "I hang out with friends on weekends.",
        "french": "Je sors avec des amis le week-end."
      }
    ]
  },
  {
    "id": "jiyuu",
    "japanese": "自由",
    "hiragana": "じゆう",
    "romaji": "jiyuu",
    "english": "freedom",
    "french": "liberté",
    "level": "N5",
    "category": "concept",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "自由に話してください。",
        "hiragana": "じゆうにはなしてください。",
        "romaji": "Jiyuu ni hanashite kudasai.",
        "english": "Please speak freely.",
        "french": "Parlez librement, s'il vous plaît."
      }
    ]
  },
  {
    "id": "shouhin",
    "japanese": "商品",
    "hiragana": "しょうひん",
    "romaji": "shouhin",
    "english": "goods, product",
    "french": "marchandise, produit",
    "level": "N5",
    "category": "economy",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "新しい商品を紹介します。",
        "hiragana": "あたらしいしょうひんをしょうかいします。",
        "romaji": "Atarashii shouhin o shoukai shimasu.",
        "english": "We introduce a new product.",
        "french": "Nous présentons un nouveau produit."
      }
    ]
  },
  {
    "id": "shokki",
    "japanese": "食器",
    "hiragana": "しょっき",
    "romaji": "shokki",
    "english": "tableware",
    "french": "vaisselle",
    "level": "N5",
    "category": "kitchen",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "食器を洗いました。",
        "hiragana": "しょっきをあらいました。",
        "romaji": "Shokki o araimashita.",
        "english": "I washed the dishes.",
        "french": "J'ai lavé la vaisselle."
      }
    ]
  },
  {
    "id": "shoumei",
    "japanese": "照明",
    "hiragana": "しょうめい",
    "romaji": "shoumei",
    "english": "lighting",
    "french": "éclairage",
    "level": "N5",
    "category": "object",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "照明を消してください。",
        "hiragana": "しょうめいをけしてください。",
        "romaji": "Shoumei o keshite kudasai.",
        "english": "Please turn off the light.",
        "french": "Éteignez la lumière, s'il vous plaît."
      }
    ]
  },
  {
    "id": "shoujojo",
    "japanese": "消防士",
    "hiragana": "しょうぼうし",
    "romaji": "shouboushi",
    "english": "firefighter",
    "french": "pompier",
    "level": "N5",
    "category": "profession",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "消防士が火を消しています。",
        "hiragana": "しょうぼうしがひをけしています。",
        "romaji": "Shouboushi ga hi o keshite imasu.",
        "english": "The firefighter is putting out the fire.",
        "french": "Le pompier éteint le feu."
      }
    ]
  },
  {
    "id": "shinbun",
    "japanese": "新聞",
    "hiragana": "しんぶん",
    "romaji": "shinbun",
    "english": "newspaper",
    "french": "journal",
    "level": "N5",
    "category": "object",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "新聞を読みます。",
        "hiragana": "しんぶんをよみます。",
        "romaji": "Shinbun o yomimasu.",
        "english": "I read a newspaper.",
        "french": "Je lis un journal."
      }
    ]
  },
  {
    "id": "shinsetsu",
    "japanese": "親切",
    "hiragana": "しんせつ",
    "romaji": "shinsetsu",
    "english": "kind",
    "french": "gentil",
    "level": "N5",
    "category": "adjective",
    "wordType": "adjective",
    "examples": [
      {
        "japanese": "彼はとても親切です。",
        "hiragana": "かれはとてもしんせつです。",
        "romaji": "Kare wa totemo shinsetsu desu.",
        "english": "He is very kind.",
        "french": "Il est très gentil."
      }
    ]
  },
  {
    "id": "shinshitsu",
    "japanese": "寝室",
    "hiragana": "しんしつ",
    "romaji": "shinshitsu",
    "english": "bedroom",
    "french": "chambre à coucher",
    "level": "N5",
    "category": "house",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "寝室で寝ます。",
        "hiragana": "しんしつでねます。",
        "romaji": "Shinshitsu de nemasu.",
        "english": "I sleep in the bedroom.",
        "french": "Je dors dans la chambre."
      }
    ]
  },
  {
    "id": "shinsha",
    "japanese": "新車",
    "hiragana": "しんしゃ",
    "romaji": "shinsha",
    "english": "new car",
    "french": "voiture neuve",
    "level": "N5",
    "category": "transport",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "新車を買いました。",
        "hiragana": "しんしゃをかいました。",
        "romaji": "Shinsha o kaimashita.",
        "english": "I bought a new car.",
        "french": "J'ai acheté une voiture neuve."
      }
    ]
  },
  {
    "id": "shinryou",
    "japanese": "診療",
    "hiragana": "しんりょう",
    "romaji": "shinryou",
    "english": "medical consultation",
    "french": "consultation médicale",
    "level": "N5",
    "category": "health",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "病院で診療を受けました。",
        "hiragana": "びょういんでしんりょうをうけました。",
        "romaji": "Byouin de shinryou o ukemashita.",
        "english": "I had a consultation at the hospital.",
        "french": "J'ai eu une consultation à l'hôpital."
      }
    ]
  },
  {
    "id": "shinsetsu_na",
    "japanese": "新設",
    "hiragana": "しんせつ",
    "romaji": "shinsetsu",
    "english": "newly established",
    "french": "nouvellement établi",
    "level": "N5",
    "category": "concept",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "新設の学校です。",
        "hiragana": "しんせつのがっこうです。",
        "romaji": "Shinsetsu no gakkou desu.",
        "english": "It is a newly established school.",
        "french": "C'est une école nouvellement créée."
      }
    ]
  },
  {
    "id": "shinbunsha",
    "japanese": "新聞社",
    "hiragana": "しんぶんしゃ",
    "romaji": "shinbunsha",
    "english": "newspaper company",
    "french": "compagnie de journaux",
    "level": "N5",
    "category": "place",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "新聞社で働いています。",
        "hiragana": "しんぶんしゃではたらいています。",
        "romaji": "Shinbunsha de hataraite imasu.",
        "english": "I work at a newspaper company.",
        "french": "Je travaille dans une société de journaux."
      }
    ]
  },
  {
    "id": "shinnyuu",
    "japanese": "進入",
    "hiragana": "しんにゅう",
    "romaji": "shinnyuu",
    "english": "entry, admission",
    "french": "entrée, admission",
    "level": "N5",
    "category": "concept",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "進入禁止の場所です。",
        "hiragana": "しんにゅうきんしのばしょです。",
        "romaji": "Shinnyuu kinshi no basho desu.",
        "english": "Entry is prohibited here.",
        "french": "Entrée interdite ici."
      }
    ]
  },
  {
    "id": "shinrai",
    "japanese": "信頼",
    "hiragana": "しんらい",
    "romaji": "shinrai",
    "english": "trust, confidence",
    "french": "confiance",
    "level": "N5",
    "category": "concept",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "彼に信頼しています。",
        "hiragana": "かれにしんらいしています。",
        "romaji": "Kare ni shinrai shite imasu.",
        "english": "I trust him.",
        "french": "J'ai confiance en lui."
      }
    ]
  },
  {
    "id": "shinwa",
    "japanese": "神話",
    "hiragana": "しんわ",
    "romaji": "shinwa",
    "english": "myth",
    "french": "mythe",
    "level": "N5",
    "category": "culture",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "日本の神話を読みました。",
        "hiragana": "にほんのしんわをよみました。",
        "romaji": "Nihon no shinwa o yomimashita.",
        "english": "I read Japanese myths.",
        "french": "J'ai lu des mythes japonais."
      }
    ]
  },
  {
    "id": "shinrai_na",
    "japanese": "信頼できる",
    "hiragana": "しんらいできる",
    "romaji": "shinrai dekiru",
    "english": "reliable",
    "french": "fiable",
    "level": "N5",
    "category": "adjective",
    "wordType": "adjective",
    "examples": [
      {
        "japanese": "彼は信頼できる人です。",
        "hiragana": "かれはしんらいできるひとです。",
        "romaji": "Kare wa shinrai dekiru hito desu.",
        "english": "He is a reliable person.",
        "french": "C'est une personne fiable."
      }
    ]
  },
  {
    "id": "shinryaku",
    "japanese": "侵略",
    "hiragana": "しんりゃく",
    "romaji": "shinryaku",
    "english": "invasion",
    "french": "invasion",
    "level": "N5",
    "category": "concept",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "国の侵略を防ぎます。",
        "hiragana": "くにのしんりゃくをふせぎます。",
        "romaji": "Kuni no shinryaku o fusegimasu.",
        "english": "We prevent the invasion of the country.",
        "french": "Nous empêchons l'invasion du pays."
      }
    ]
  },
  {
    "id": "shinwa_bunka",
    "japanese": "神話文化",
    "hiragana": "しんわぶんか",
    "romaji": "shinwa bunka",
    "english": "mythology culture",
    "french": "culture mythologique",
    "level": "N5",
    "category": "culture",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "神話文化を研究しています。",
        "hiragana": "しんわぶんかをけんきゅうしています。",
        "romaji": "Shinwa bunka o kenkyuu shite imasu.",
        "english": "I am studying mythology culture.",
        "french": "J'étudie la culture mythologique."
      }
    ]
  },
  {
    "id": "shinzo",
    "japanese": "心臓",
    "hiragana": "しんぞう",
    "romaji": "shinzou",
    "english": "heart (organ)",
    "french": "cœur (organe)",
    "level": "N5",
    "category": "body",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "心臓が速く動いています。",
        "hiragana": "しんぞうがはやくうごいています。",
        "romaji": "Shinzou ga hayaku ugoite imasu.",
        "english": "The heart is beating fast.",
        "french": "Le cœur bat vite."
      }
    ]
  },
  {
    "id": "shinpi",
    "japanese": "神秘",
    "hiragana": "しんぴ",
    "romaji": "shinpi",
    "english": "mystery",
    "french": "mystère",
    "level": "N5",
    "category": "concept",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "海は神秘的です。",
        "hiragana": "うみはしんぴてきです。",
        "romaji": "Umi wa shinpiteki desu.",
        "english": "The sea is mysterious.",
        "french": "La mer est mystérieuse."
      }
    ]
  },
  {
    "id": "shinpai",
    "japanese": "心配",
    "hiragana": "しんぱい",
    "romaji": "shinpai",
    "english": "worry",
    "french": "inquiétude",
    "level": "N5",
    "category": "emotion",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "心配しないでください。",
        "hiragana": "しんぱいしないでください。",
        "romaji": "Shinpai shinaide kudasai.",
        "english": "Please don't worry.",
        "french": "Ne vous inquiétez pas."
      }
    ]
  },
  {
    "id": "suiei",
    "japanese": "水泳",
    "hiragana": "すいえい",
    "romaji": "suiei",
    "english": "swimming",
    "french": "natation",
    "level": "N5",
    "category": "sport",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "私は水泳が得意です。",
        "hiragana": "わたしはすいえいがとくいです。",
        "romaji": "Watashi wa suiei ga tokui desu.",
        "english": "I am good at swimming.",
        "french": "Je suis bon en natation."
      }
    ]
  },
  {
    "id": "suizokukan",
    "japanese": "水族館",
    "hiragana": "すいぞくかん",
    "romaji": "suizokukan",
    "english": "aquarium",
    "french": "aquarium",
    "level": "N5",
    "category": "place",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "水族館で魚を見ました。",
        "hiragana": "すいぞくかんでさかなをみました。",
        "romaji": "Suizokukan de sakana o mimashita.",
        "english": "I saw fish at the aquarium.",
        "french": "J'ai vu des poissons à l'aquarium."
      }
    ]
  },
  {
    "id": "suupaa",
    "japanese": "スーパー",
    "hiragana": "すーぱー",
    "romaji": "suupaa",
    "english": "supermarket",
    "french": "supermarché",
    "level": "N5",
    "category": "place",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "スーパーで野菜を買います。",
        "hiragana": "すーぱーでやさいをかいます。",
        "romaji": "Suupaa de yasai o kaimasu.",
        "english": "I buy vegetables at the supermarket.",
        "french": "J'achète des légumes au supermarché."
      }
    ]
  },
  {
    "id": "suiyoubi",
    "japanese": "水曜日",
    "hiragana": "すいようび",
    "romaji": "suiyoubi",
    "english": "Wednesday",
    "french": "mercredi",
    "level": "N5",
    "category": "time",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "水曜日に会いましょう。",
        "hiragana": "すいようびにあいましょう。",
        "romaji": "Suiyoubi ni aimashou.",
        "english": "Let's meet on Wednesday.",
        "french": "Rencontrons-nous mercredi."
      }
    ]
  },
  {
    "id": "suutsu",
    "japanese": "スーツ",
    "hiragana": "すーつ",
    "romaji": "suutsu",
    "english": "suit",
    "french": "costume",
    "level": "N5",
    "category": "clothing",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "彼はスーツを着ています。",
        "hiragana": "かれはすーつをきています。",
        "romaji": "Kare wa suutsu o kite imasu.",
        "english": "He is wearing a suit.",
        "french": "Il porte un costume."
      }
    ]
  },
  {
    "id": "sugoi",
    "japanese": "すごい",
    "hiragana": "すごい",
    "romaji": "sugoi",
    "english": "amazing, great",
    "french": "formidable, génial",
    "level": "N5",
    "category": "adjective",
    "wordType": "adjective",
    "examples": [
      {
        "japanese": "彼の歌はすごいです。",
        "hiragana": "かれのうたはすごいです。",
        "romaji": "Kare no uta wa sugoi desu.",
        "english": "His singing is amazing.",
        "french": "Son chant est génial."
      }
    ]
  },
  {
    "id": "sugu",
    "japanese": "直ぐ",
    "hiragana": "すぐ",
    "romaji": "sugu",
    "english": "immediately, right away",
    "french": "tout de suite, immédiatement",
    "level": "N5",
    "category": "expression",
    "wordType": "adverb",
    "examples": [
      {
        "japanese": "すぐに行きます。",
        "hiragana": "すぐにいきます。",
        "romaji": "Sugu ni ikimasu.",
        "english": "I'll go right away.",
        "french": "J'y vais tout de suite."
      }
    ]
  },
  {
    "id": "sukii",
    "japanese": "スキー",
    "hiragana": "すきー",
    "romaji": "sukii",
    "english": "skiing",
    "french": "ski",
    "level": "N5",
    "category": "sport",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "冬にスキーをします。",
        "hiragana": "ふゆにすきーをします。",
        "romaji": "Fuyu ni sukii o shimasu.",
        "english": "I ski in winter.",
        "french": "Je fais du ski en hiver."
      }
    ]
  },
  {
    "id": "sukoshi",
    "japanese": "少し",
    "hiragana": "すこし",
    "romaji": "sukoshi",
    "english": "a little",
    "french": "un peu",
    "level": "N5",
    "category": "adverb",
    "wordType": "adverb",
    "examples": [
      {
        "japanese": "少し疲れました。",
        "hiragana": "すこしつかれました。",
        "romaji": "Sukoshi tsukaremashita.",
        "english": "I'm a little tired.",
        "french": "Je suis un peu fatigué."
      }
    ]
  },
  {
    "id": "sugite",
    "japanese": "過ぎて",
    "hiragana": "すぎて",
    "romaji": "sugite",
    "english": "too much, after",
    "french": "trop, après",
    "level": "N5",
    "category": "expression",
    "wordType": "verb",
    "examples": [
      {
        "japanese": "時間が過ぎています。",
        "hiragana": "じかんがすぎています。",
        "romaji": "Jikan ga sugite imasu.",
        "english": "Time is passing.",
        "french": "Le temps passe."
      }
    ]
  },
  {
    "id": "sugoi_na",
    "japanese": "凄い",
    "hiragana": "すごい",
    "romaji": "sugoi",
    "english": "terrific",
    "french": "extraordinaire",
    "level": "N5",
    "category": "adjective",
    "wordType": "adjective",
    "examples": [
      {
        "japanese": "凄い景色ですね。",
        "hiragana": "すごいけしきですね。",
        "romaji": "Sugoi keshiki desu ne.",
        "english": "That's an amazing view.",
        "french": "C'est une vue extraordinaire."
      }
    ]
  },
  {
    "id": "sukina",
    "japanese": "好きな",
    "hiragana": "すきな",
    "romaji": "sukina",
    "english": "favorite, liked",
    "french": "préféré, aimé",
    "level": "N5",
    "category": "adjective",
    "wordType": "adjective",
    "examples": [
      {
        "japanese": "好きな食べ物は何ですか？",
        "hiragana": "すきなたべものはなんですか？",
        "romaji": "Sukina tabemono wa nan desu ka?",
        "english": "What is your favorite food?",
        "french": "Quel est ton plat préféré ?"
      }
    ]
  },
  {
    "id": "sumairu",
    "japanese": "スマイル",
    "hiragana": "すまいる",
    "romaji": "sumairu",
    "english": "smile",
    "french": "sourire",
    "level": "N5",
    "category": "emotion",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "彼女のスマイルが好きです。",
        "hiragana": "かのじょのすまいるがすきです。",
        "romaji": "Kanojo no sumairu ga suki desu.",
        "english": "I like her smile.",
        "french": "J'aime son sourire."
      }
    ]
  },
  {
    "id": "sumairu_suru",
    "japanese": "スマイルする",
    "hiragana": "すまいるする",
    "romaji": "sumairu suru",
    "english": "to smile",
    "french": "sourire (verbe)",
    "level": "N5",
    "category": "verb",
    "wordType": "verb",
    "examples": [
      {
        "japanese": "彼はいつもスマイルしています。",
        "hiragana": "かれはいつもすまいるしています。",
        "romaji": "Kare wa itsumo sumairu shite imasu.",
        "english": "He is always smiling.",
        "french": "Il sourit toujours."
      }
    ]
  },
  {
    "id": "sumu",
    "japanese": "住む",
    "hiragana": "すむ",
    "romaji": "sumu",
    "english": "to live (reside)",
    "french": "habiter, résider",
    "level": "N5",
    "category": "verb",
    "wordType": "verb",
    "examples": [
      {
        "japanese": "東京に住んでいます。",
        "hiragana": "とうきょうにすんでいます。",
        "romaji": "Toukyou ni sunde imasu.",
        "english": "I live in Tokyo.",
        "french": "J'habite à Tokyo."
      }
    ]
  },
  {
    "id": "sumimasen",
    "japanese": "すみません",
    "hiragana": "すみません",
    "romaji": "sumimasen",
    "english": "excuse me, sorry",
    "french": "excusez-moi, désolé",
    "level": "N5",
    "category": "expression",
    "wordType": "phrase",
    "examples": [
      {
        "japanese": "すみません、道を教えてください。",
        "hiragana": "すみません、みちをおしえてください。",
        "romaji": "Sumimasen, michi o oshiete kudasai.",
        "english": "Excuse me, please tell me the way.",
        "french": "Excusez-moi, indiquez-moi le chemin s'il vous plaît."
      }
    ]
  },
  {
    "id": "sumou",
    "japanese": "相撲",
    "hiragana": "すもう",
    "romaji": "sumou",
    "english": "sumo wrestling",
    "french": "sumo",
    "level": "N5",
    "category": "sport",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "相撲を見たことがあります。",
        "hiragana": "すもうをみたことがあります。",
        "romaji": "Sumou o mita koto ga arimasu.",
        "english": "I have watched sumo.",
        "french": "J'ai déjà vu du sumo."
      }
    ]
  },
  {
    "id": "suru",
    "japanese": "する",
    "hiragana": "する",
    "romaji": "suru",
    "english": "to do",
    "french": "faire",
    "level": "N5",
    "category": "verb",
    "wordType": "verb",
    "examples": [
      {
        "japanese": "宿題をします。",
        "hiragana": "しゅくだいをします。",
        "romaji": "Shukudai o shimasu.",
        "english": "I do homework.",
        "french": "Je fais mes devoirs."
      }
    ]
  },
  {
    "id": "seito",
    "japanese": "生徒",
    "hiragana": "せいと",
    "romaji": "seito",
    "english": "student",
    "french": "élève",
    "level": "N5",
    "category": "people",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "教室に生徒がいます。",
        "hiragana": "きょうしつにせいとがいます。",
        "romaji": "Kyoushitsu ni seito ga imasu.",
        "english": "There are students in the classroom.",
        "french": "Il y a des élèves dans la salle de classe."
      }
    ]
  },
  {
    "id": "sekai",
    "japanese": "世界",
    "hiragana": "せかい",
    "romaji": "sekai",
    "english": "world",
    "french": "monde",
    "level": "N5",
    "category": "geography",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "世界は広いです。",
        "hiragana": "せかいはひろいです。",
        "romaji": "Sekai wa hiroi desu.",
        "english": "The world is big.",
        "french": "Le monde est vaste."
      }
    ]
  },
  {
    "id": "sekken",
    "japanese": "石鹸",
    "hiragana": "せっけん",
    "romaji": "sekken",
    "english": "soap",
    "french": "savon",
    "level": "N5",
    "category": "object",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "石鹸で手を洗います。",
        "hiragana": "せっけんでてをあらいます。",
        "romaji": "Sekken de te o araimasu.",
        "english": "I wash my hands with soap.",
        "french": "Je me lave les mains avec du savon."
      }
    ]
  },
  {
    "id": "sekken_kaiwa",
    "japanese": "石鹸会話",
    "hiragana": "せっけんかいわ",
    "romaji": "sekken kaiwa",
    "english": "casual talk",
    "french": "conversation banale",
    "level": "N5",
    "category": "expression",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "石鹸会話をしました。",
        "hiragana": "せっけんかいわをしました。",
        "romaji": "Sekken kaiwa o shimashita.",
        "english": "We had a small talk.",
        "french": "Nous avons eu une petite conversation."
      }
    ]
  },
  {
    "id": "sekou",
    "japanese": "成功",
    "hiragana": "せいこう",
    "romaji": "seikou",
    "english": "success",
    "french": "succès",
    "level": "N5",
    "category": "concept",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "試験に成功しました。",
        "hiragana": "しけんにせいこうしました。",
        "romaji": "Shiken ni seikou shimashita.",
        "english": "I succeeded in the exam.",
        "french": "J'ai réussi l'examen."
      }
    ]
  },
  {
    "id": "seibutsu",
    "japanese": "生物",
    "hiragana": "せいぶつ",
    "romaji": "seibutsu",
    "english": "living thing",
    "french": "être vivant",
    "level": "N5",
    "category": "science",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "森には多くの生物がいます。",
        "hiragana": "もりにはおおくのせいぶつがいます。",
        "romaji": "Mori ni wa ooku no seibutsu ga imasu.",
        "english": "There are many living things in the forest.",
        "french": "Il y a beaucoup d'êtres vivants dans la forêt."
      }
    ]
  },
  {
    "id": "seito_tachi",
    "japanese": "生徒たち",
    "hiragana": "せいとたち",
    "romaji": "seito-tachi",
    "english": "students",
    "french": "élèves",
    "level": "N5",
    "category": "people",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "生徒たちが外で遊んでいます。",
        "hiragana": "せいとたちがそとであそんでいます。",
        "romaji": "Seito-tachi ga soto de asonde imasu.",
        "english": "The students are playing outside.",
        "french": "Les élèves jouent dehors."
      }
    ]
  },
  {
    "id": "seibun",
    "japanese": "成分",
    "hiragana": "せいぶん",
    "romaji": "seibun",
    "english": "ingredient, component",
    "french": "ingrédient, composant",
    "level": "N5",
    "category": "science",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "この薬の成分を確認しました。",
        "hiragana": "このくすりのせいぶんをかくにんしました。",
        "romaji": "Kono kusuri no seibun o kakunin shimashita.",
        "english": "I checked the ingredients of this medicine.",
        "french": "J'ai vérifié les ingrédients de ce médicament."
      }
    ]
  },
  {
    "id": "seinen",
    "japanese": "青年",
    "hiragana": "せいねん",
    "romaji": "seinen",
    "english": "young man",
    "french": "jeune homme",
    "level": "N5",
    "category": "people",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "その青年は学生です。",
        "hiragana": "そのせいねんはがくせいです。",
        "romaji": "Sono seinen wa gakusei desu.",
        "english": "That young man is a student.",
        "french": "Ce jeune homme est étudiant."
      }
    ]
  },
  {
    "id": "seikatsu",
    "japanese": "生活",
    "hiragana": "せいかつ",
    "romaji": "seikatsu",
    "english": "life, livelihood",
    "french": "vie quotidienne",
    "level": "N5",
    "category": "daily life",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "日本での生活は楽しいです。",
        "hiragana": "にほんでのせいかつはたのしいです。",
        "romaji": "Nihon de no seikatsu wa tanoshii desu.",
        "english": "Life in Japan is enjoyable.",
        "french": "La vie au Japon est agréable."
      }
    ]
  },
  {
    "id": "seiyou",
    "japanese": "西洋",
    "hiragana": "せいよう",
    "romaji": "seiyou",
    "english": "the West",
    "french": "Occident",
    "level": "N5",
    "category": "geography",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "西洋の文化を勉強します。",
        "hiragana": "せいようのぶんかをべんきょうします。",
        "romaji": "Seiyou no bunka o benkyou shimasu.",
        "english": "I study Western culture.",
        "french": "J'étudie la culture occidentale."
      }
    ]
  },
  {
    "id": "sekken_soap",
    "japanese": "石けん",
    "hiragana": "せっけん",
    "romaji": "sekken",
    "english": "soap",
    "french": "savon",
    "level": "N5",
    "category": "object",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "石けんで手を洗います。",
        "hiragana": "せっけんでてをあらいます。",
        "romaji": "Sekken de te o araimasu.",
        "english": "I wash my hands with soap.",
        "french": "Je me lave les mains avec du savon."
      }
    ]
  },
  {
    "id": "setsumei",
    "japanese": "説明",
    "hiragana": "せつめい",
    "romaji": "setsumei",
    "english": "explanation",
    "french": "explication",
    "level": "N5",
    "category": "school",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "先生が説明をしました。",
        "hiragana": "せんせいがせつめいをしました。",
        "romaji": "Sensei ga setsumei o shimashita.",
        "english": "The teacher gave an explanation.",
        "french": "Le professeur a donné une explication."
      }
    ]
  },
  {
    "id": "senaka",
    "japanese": "背中",
    "hiragana": "せなか",
    "romaji": "senaka",
    "english": "back (body part)",
    "french": "dos",
    "level": "N5",
    "category": "body parts",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "背中が痛いです。",
        "hiragana": "せなかがいたいです。",
        "romaji": "Senaka ga itai desu.",
        "english": "My back hurts.",
        "french": "J'ai mal au dos."
      }
    ]
  },
  {
    "id": "sensei",
    "japanese": "先生",
    "hiragana": "せんせい",
    "romaji": "sensei",
    "english": "teacher",
    "french": "professeur",
    "level": "N5",
    "category": "people",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "先生に質問します。",
        "hiragana": "せんせいにしつもんします。",
        "romaji": "Sensei ni shitsumon shimasu.",
        "english": "I ask the teacher a question.",
        "french": "Je pose une question au professeur."
      }
    ]
  },
  {
    "id": "senaka_ushiro",
    "japanese": "後ろ",
    "hiragana": "うしろ",
    "romaji": "ushiro",
    "english": "behind, back",
    "french": "derrière",
    "level": "N5",
    "category": "location",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "犬が家の後ろにいます。",
        "hiragana": "いぬがいえのうしろにいます。",
        "romaji": "Inu ga ie no ushiro ni imasu.",
        "english": "The dog is behind the house.",
        "french": "Le chien est derrière la maison."
      }
    ]
  },
  {
    "id": "senmon",
    "japanese": "専門",
    "hiragana": "せんもん",
    "romaji": "senmon",
    "english": "specialty, major",
    "french": "spécialité",
    "level": "N5",
    "category": "school",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "私の専門は経済です。",
        "hiragana": "わたしのせんもんはけいざいです。",
        "romaji": "Watashi no senmon wa keizai desu.",
        "english": "My major is economics.",
        "french": "Ma spécialité est l'économie."
      }
    ]
  },
  {
    "id": "sentaku",
    "japanese": "洗濯",
    "hiragana": "せんたく",
    "romaji": "sentaku",
    "english": "laundry",
    "french": "lessive",
    "level": "N5",
    "category": "daily life",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "洗濯をします。",
        "hiragana": "せんたくをします。",
        "romaji": "Sentaku o shimasu.",
        "english": "I do the laundry.",
        "french": "Je fais la lessive."
      }
    ]
  },
  {
    "id": "senro",
    "japanese": "線路",
    "hiragana": "せんろ",
    "romaji": "senro",
    "english": "railway track",
    "french": "voie ferrée",
    "level": "N5",
    "category": "transport",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "線路を渡ってはいけません。",
        "hiragana": "せんろをわたってはいけません。",
        "romaji": "Senro o watatte wa ikemasen.",
        "english": "Do not cross the railway tracks.",
        "french": "Il ne faut pas traverser la voie ferrée."
      }
    ]
  },
  {
    "id": "senaka_shisen",
    "japanese": "視線",
    "hiragana": "しせん",
    "romaji": "shisen",
    "english": "gaze, line of sight",
    "french": "regard",
    "level": "N5",
    "category": "concept",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "彼の視線を感じました。",
        "hiragana": "かれのしせんをかんじました。",
        "romaji": "Kare no shisen o kanjimashita.",
        "english": "I felt his gaze.",
        "french": "J'ai senti son regard."
      }
    ]
  },
  {
    "id": "seru",
    "japanese": "セル",
    "hiragana": "せる",
    "romaji": "seru",
    "english": "cell",
    "french": "cellule",
    "level": "N5",
    "category": "science",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "体は多くのセルでできています。",
        "hiragana": "からだはおおくのせるでできています。",
        "romaji": "Karada wa ooku no seru de dekite imasu.",
        "english": "The body is made up of many cells.",
        "french": "Le corps est constitué de nombreuses cellules."
      }
    ]
  },
  {
    "id": "serifu",
    "japanese": "台詞",
    "hiragana": "せりふ",
    "romaji": "serifu",
    "english": "line (dialogue)",
    "french": "réplique",
    "level": "N5",
    "category": "culture",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "彼の台詞を覚えました。",
        "hiragana": "かれのせりふをおぼえました。",
        "romaji": "Kare no serifu o oboemashita.",
        "english": "I memorized his lines.",
        "french": "J'ai mémorisé ses répliques."
      }
    ]
  },
  {
    "id": "sewa",
    "japanese": "世話",
    "hiragana": "せわ",
    "romaji": "sewa",
    "english": "care, help",
    "french": "soin, aide",
    "level": "N5",
    "category": "daily life",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "犬の世話をします。",
        "hiragana": "いぬのせわをします。",
        "romaji": "Inu no sewa o shimasu.",
        "english": "I take care of the dog.",
        "french": "Je m'occupe du chien."
      }
    ]
  },
  {
    "id": "seiza",
    "japanese": "星座",
    "hiragana": "せいざ",
    "romaji": "seiza",
    "english": "constellation",
    "french": "constellation",
    "level": "N5",
    "category": "astronomy",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "オリオン座は有名な星座です。",
        "hiragana": "おりおんざはゆうめいなせいざです。",
        "romaji": "Orion-za wa yuumei na seiza desu.",
        "english": "Orion is a famous constellation.",
        "french": "Orion est une constellation célèbre."
      }
    ]
  },
  {
    "id": "seikou",
    "japanese": "成功",
    "hiragana": "せいこう",
    "romaji": "seikou",
    "english": "success",
    "french": "succès",
    "level": "N5",
    "category": "concept",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "彼は成功しました。",
        "hiragana": "かれはせいこうしました。",
        "romaji": "Kare wa seikou shimashita.",
        "english": "He succeeded.",
        "french": "Il a réussi."
      }
    ]
  },
  {
    "id": "sekai_ryokou",
    "japanese": "世界旅行",
    "hiragana": "せかいりょこう",
    "romaji": "sekai ryokou",
    "english": "world trip",
    "french": "voyage autour du monde",
    "level": "N5",
    "category": "travel",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "世界旅行をしたいです。",
        "hiragana": "せかいりょこうをしたいです。",
        "romaji": "Sekai ryokou o shitai desu.",
        "english": "I want to travel around the world.",
        "french": "Je veux faire le tour du monde."
      }
    ]
  },
  {
    "id": "senaka_hara",
    "japanese": "腹",
    "hiragana": "はら",
    "romaji": "hara",
    "english": "stomach, belly",
    "french": "ventre",
    "level": "N5",
    "category": "body parts",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "腹が空きました。",
        "hiragana": "はらがすきました。",
        "romaji": "Hara ga sukimashita.",
        "english": "I am hungry.",
        "french": "J'ai faim."
      }
    ]
  },
  {
    "id": "senaka_te",
    "japanese": "手",
    "hiragana": "て",
    "romaji": "te",
    "english": "hand",
    "french": "main",
    "level": "N5",
    "category": "body parts",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "手を洗ってください。",
        "hiragana": "てをあらってください。",
        "romaji": "Te o aratte kudasai.",
        "english": "Please wash your hands.",
        "french": "Lavez-vous les mains, s'il vous plaît."
      }
    ]
  },
  {
    "id": "senaka_ashi",
    "japanese": "足",
    "hiragana": "あし",
    "romaji": "ashi",
    "english": "leg, foot",
    "french": "jambe, pied",
    "level": "N5",
    "category": "body parts",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "足が痛いです。",
        "hiragana": "あしがいたいです。",
        "romaji": "Ashi ga itai desu.",
        "english": "My leg hurts.",
        "french": "J'ai mal à la jambe."
      }
    ]
  },
  {
    "id": "senaka_me",
    "japanese": "目",
    "hiragana": "め",
    "romaji": "me",
    "english": "eye",
    "french": "œil",
    "level": "N5",
    "category": "body parts",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "目を閉じてください。",
        "hiragana": "めをとじてください。",
        "romaji": "Me o tojite kudasai.",
        "english": "Please close your eyes.",
        "french": "Fermez les yeux, s'il vous plaît."
      }
    ]
  },
  {
    "id": "senaka_mimi",
    "japanese": "耳",
    "hiragana": "みみ",
    "romaji": "mimi",
    "english": "ear",
    "french": "oreille",
    "level": "N5",
    "category": "body parts",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "音楽を耳で聞きます。",
        "hiragana": "おんがくをみみでききます。",
        "romaji": "Ongaku o mimi de kikimasu.",
        "english": "I listen to music with my ears.",
        "french": "J'écoute de la musique avec mes oreilles."
      }
    ]
  },
  {
    "id": "senaka_kuchi",
    "japanese": "口",
    "hiragana": "くち",
    "romaji": "kuchi",
    "english": "mouth",
    "french": "bouche",
    "level": "N5",
    "category": "body parts",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "口を大きく開けてください。",
        "hiragana": "くちをおおきくあけてください。",
        "romaji": "Kuchi o ookiku akete kudasai.",
        "english": "Please open your mouth wide.",
        "french": "Ouvrez grand la bouche, s'il vous plaît."
      }
    ]
  },
  {
    "id": "senaka_hana",
    "japanese": "鼻",
    "hiragana": "はな",
    "romaji": "hana",
    "english": "nose",
    "french": "nez",
    "level": "N5",
    "category": "body parts",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "鼻が詰まっています。",
        "hiragana": "はながつまっています。",
        "romaji": "Hana ga tsumatte imasu.",
        "english": "My nose is blocked.",
        "french": "Mon nez est bouché."
      }
    ]
  },
  {
    "id": "senaka_hair",
    "japanese": "髪",
    "hiragana": "かみ",
    "romaji": "kami",
    "english": "hair",
    "french": "cheveux",
    "level": "N5",
    "category": "body parts",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "髪を切りました。",
        "hiragana": "かみをきりました。",
        "romaji": "Kami o kirimashita.",
        "english": "I cut my hair.",
        "french": "J'ai coupé mes cheveux."
      }
    ]
  },
  {
    "id": "senaka_hara2",
    "japanese": "腹",
    "hiragana": "はら",
    "romaji": "hara",
    "english": "belly",
    "french": "ventre",
    "level": "N5",
    "category": "body parts",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "腹が立ちました。",
        "hiragana": "はらがたちました。",
        "romaji": "Hara ga tachimashita.",
        "english": "I got angry.",
        "french": "Je me suis fâché."
      }
    ]
  },
  {
    "id": "senaka_kao",
    "japanese": "顔",
    "hiragana": "かお",
    "romaji": "kao",
    "english": "face",
    "french": "visage",
    "level": "N5",
    "category": "body parts",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "顔を洗います。",
        "hiragana": "かおをあらいます。",
        "romaji": "Kao o araimasu.",
        "english": "I wash my face.",
        "french": "Je me lave le visage."
      }
    ]
  },
  {
    "id": "senaka_hoppe",
    "japanese": "ほっぺ",
    "hiragana": "ほっぺ",
    "romaji": "hoppe",
    "english": "cheek",
    "french": "joue",
    "level": "N5",
    "category": "body parts",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "ほっぺが赤いです。",
        "hiragana": "ほっぺがあかいです。",
        "romaji": "Hoppe ga akai desu.",
        "english": "His cheeks are red.",
        "french": "Ses joues sont rouges."
      }
    ]
  },
  {
    "id": "seki_seki",
    "japanese": "咳",
    "hiragana": "せき",
    "romaji": "seki",
    "english": "cough",
    "french": "toux",
    "level": "N5",
    "category": "health",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "咳が出ます。",
        "hiragana": "せきがでます。",
        "romaji": "Seki ga demasu.",
        "english": "I am coughing.",
        "french": "Je tousse."
      }
    ]
  },
  {
    "id": "seikou_shippai",
    "japanese": "失敗",
    "hiragana": "しっぱい",
    "romaji": "shippai",
    "english": "failure",
    "french": "échec",
    "level": "N5",
    "category": "concept",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "試験に失敗しました。",
        "hiragana": "しけんにしっぱいしました。",
        "romaji": "Shiken ni shippai shimashita.",
        "english": "I failed the exam.",
        "french": "J'ai échoué à l'examen."
      }
    ]
  },
  {
    "id": "seikou_juubun",
    "japanese": "十分",
    "hiragana": "じゅうぶん",
    "romaji": "juubun",
    "english": "enough",
    "french": "suffisant",
    "level": "N5",
    "category": "expression",
    "wordType": "adjective",
    "examples": [
      {
        "japanese": "十分に休んでください。",
        "hiragana": "じゅうぶんにやすんでください。",
        "romaji": "Juubun ni yasunde kudasai.",
        "english": "Please rest enough.",
        "french": "Reposez-vous suffisamment."
      }
    ]
  },
  {
    "id": "sekinin",
    "japanese": "責任",
    "hiragana": "せきにん",
    "romaji": "sekinin",
    "english": "responsibility",
    "french": "responsabilité",
    "level": "N5",
    "category": "concept",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "責任を持ちます。",
        "hiragana": "せきにんをもちます。",
        "romaji": "Sekinin o mochimasu.",
        "english": "I take responsibility.",
        "french": "J'assume la responsabilité."
      }
    ]
  },
  {
    "id": "sekken_omocha",
    "japanese": "おもちゃ",
    "hiragana": "おもちゃ",
    "romaji": "omocha",
    "english": "toy",
    "french": "jouet",
    "level": "N5",
    "category": "object",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "子供がおもちゃで遊んでいます。",
        "hiragana": "こどもがおもちゃであそんでいます。",
        "romaji": "Kodomo ga omocha de asonde imasu.",
        "english": "The child is playing with a toy.",
        "french": "L'enfant joue avec un jouet."
      }
    ]
  },
  {
    "id": "sekou_mondai",
    "japanese": "問題",
    "hiragana": "もんだい",
    "romaji": "mondai",
    "english": "problem, question",
    "french": "problème, question",
    "level": "N5",
    "category": "school",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "この問題は難しいです。",
        "hiragana": "このもんだいはむずかしいです。",
        "romaji": "Kono mondai wa muzukashii desu.",
        "english": "This problem is difficult.",
        "french": "Ce problème est difficile."
      }
    ]
  },
  {
    "id": "senaka_yubi",
    "japanese": "指",
    "hiragana": "ゆび",
    "romaji": "yubi",
    "english": "finger",
    "french": "doigt",
    "level": "N5",
    "category": "body parts",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "指にけがをしました。",
        "hiragana": "ゆびにけがをしました。",
        "romaji": "Yubi ni kega o shimashita.",
        "english": "I hurt my finger.",
        "french": "Je me suis blessé au doigt."
      }
    ]
  },
  {
    "id": "seki_tabako",
    "japanese": "たばこ",
    "hiragana": "たばこ",
    "romaji": "tabako",
    "english": "tobacco, cigarette",
    "french": "tabac, cigarette",
    "level": "N5",
    "category": "object",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "父はたばこを吸います。",
        "hiragana": "ちちはたばこをすいます。",
        "romaji": "Chichi wa tabako o suimasu.",
        "english": "My father smokes cigarettes.",
        "french": "Mon père fume des cigarettes."
      }
    ]
  },
  {
    "id": "takai",
    "japanese": "高い",
    "hiragana": "たかい",
    "romaji": "takai",
    "english": "tall, expensive",
    "french": "grand, cher",
    "level": "N5",
    "category": "adjective",
    "wordType": "adjective",
    "examples": [
      {
        "japanese": "この本は高いです。",
        "hiragana": "このほんはたかいです。",
        "romaji": "Kono hon wa takai desu.",
        "english": "This book is expensive.",
        "french": "Ce livre est cher."
      }
    ]
  },
  {
    "id": "takusan",
    "japanese": "たくさん",
    "hiragana": "たくさん",
    "romaji": "takusan",
    "english": "many, a lot",
    "french": "beaucoup",
    "level": "N5",
    "category": "adverb",
    "wordType": "adverb",
    "examples": [
      {
        "japanese": "たくさんの人が来ました。",
        "hiragana": "たくさんのひとがきました。",
        "romaji": "Takusan no hito ga kimashita.",
        "english": "Many people came.",
        "french": "Beaucoup de gens sont venus."
      }
    ]
  },
  {
    "id": "tabemono",
    "japanese": "食べ物",
    "hiragana": "たべもの",
    "romaji": "tabemono",
    "english": "food",
    "french": "nourriture",
    "level": "N5",
    "category": "food",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "日本の食べ物はおいしいです。",
        "hiragana": "にほんのたべものはおいしいです。",
        "romaji": "Nihon no tabemono wa oishii desu.",
        "english": "Japanese food is delicious.",
        "french": "La nourriture japonaise est délicieuse."
      }
    ]
  },
  {
    "id": "taberu",
    "japanese": "食べる",
    "hiragana": "たべる",
    "romaji": "taberu",
    "english": "to eat",
    "french": "manger",
    "level": "N5",
    "category": "verb",
    "wordType": "verb",
    "examples": [
      {
        "japanese": "パンを食べます。",
        "hiragana": "ぱんをたべます。",
        "romaji": "Pan o tabemasu.",
        "english": "I eat bread.",
        "french": "Je mange du pain."
      }
    ]
  },
  {
    "id": "taihen",
    "japanese": "大変",
    "hiragana": "たいへん",
    "romaji": "taihen",
    "english": "serious, very",
    "french": "grave, très",
    "level": "N5",
    "category": "adjective",
    "wordType": "adjective",
    "examples": [
      {
        "japanese": "今日は大変忙しいです。",
        "hiragana": "きょうはたいへんいそがしいです。",
        "romaji": "Kyou wa taihen isogashii desu.",
        "english": "I am very busy today.",
        "french": "Je suis très occupé aujourd'hui."
      }
    ]
  },
  {
    "id": "taisetsu",
    "japanese": "大切",
    "hiragana": "たいせつ",
    "romaji": "taisetsu",
    "english": "important, precious",
    "french": "important, précieux",
    "level": "N5",
    "category": "adjective",
    "wordType": "adjective",
    "examples": [
      {
        "japanese": "家族はとても大切です。",
        "hiragana": "かぞくはとてもたいせつです。",
        "romaji": "Kazoku wa totemo taisetsu desu.",
        "english": "Family is very important.",
        "french": "La famille est très importante."
      }
    ]
  },
  {
    "id": "taiiku",
    "japanese": "体育",
    "hiragana": "たいいく",
    "romaji": "taiiku",
    "english": "physical education",
    "french": "éducation physique",
    "level": "N5",
    "category": "school",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "体育の授業があります。",
        "hiragana": "たいいくのじゅぎょうがあります。",
        "romaji": "Taiiku no jugyou ga arimasu.",
        "english": "There is a physical education class.",
        "french": "Il y a un cours d'éducation physique."
      }
    ]
  },
  {
    "id": "taoreru",
    "japanese": "倒れる",
    "hiragana": "たおれる",
    "romaji": "taoreru",
    "english": "to fall down",
    "french": "tomber",
    "level": "N5",
    "category": "verb",
    "wordType": "verb",
    "examples": [
      {
        "japanese": "木が倒れました。",
        "hiragana": "きがたおれました。",
        "romaji": "Ki ga taoremashita.",
        "english": "The tree fell down.",
        "french": "L'arbre est tombé."
      }
    ]
  },
  {
    "id": "taisou",
    "japanese": "体操",
    "hiragana": "たいそう",
    "romaji": "taisou",
    "english": "gymnastics, exercise",
    "french": "gymnastique, exercice",
    "level": "N5",
    "category": "sport",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "朝に体操をします。",
        "hiragana": "あさにたいそうをします。",
        "romaji": "Asa ni taisou o shimasu.",
        "english": "I do exercises in the morning.",
        "french": "Je fais de la gymnastique le matin."
      }
    ]
  },
  {
    "id": "takusan_arigatou",
    "japanese": "たくさんありがとう",
    "hiragana": "たくさんありがとう",
    "romaji": "takusan arigatou",
    "english": "thanks a lot",
    "french": "merci beaucoup",
    "level": "N5",
    "category": "expression",
    "wordType": "phrase",
    "examples": [
      {
        "japanese": "たくさんありがとう！",
        "hiragana": "たくさんありがとう！",
        "romaji": "Takusan arigatou!",
        "english": "Thank you so much!",
        "french": "Merci beaucoup !"
      }
    ]
  },
  {
    "id": "tada",
    "japanese": "ただ",
    "hiragana": "ただ",
    "romaji": "tada",
    "english": "free of charge, just",
    "french": "gratuit, seulement",
    "level": "N5",
    "category": "expression",
    "wordType": "adverb",
    "examples": [
      {
        "japanese": "これはただです。",
        "hiragana": "これはただです。",
        "romaji": "Kore wa tada desu.",
        "english": "This is free.",
        "french": "C'est gratuit."
      }
    ]
  },
  {
    "id": "tadashii",
    "japanese": "正しい",
    "hiragana": "ただしい",
    "romaji": "tadashii",
    "english": "correct, right",
    "french": "correct, juste",
    "level": "N5",
    "category": "adjective",
    "wordType": "adjective",
    "examples": [
      {
        "japanese": "答えは正しいです。",
        "hiragana": "こたえはただしいです。",
        "romaji": "Kotae wa tadashii desu.",
        "english": "The answer is correct.",
        "french": "La réponse est correcte."
      }
    ]
  },
  {
    "id": "tanoshii",
    "japanese": "楽しい",
    "hiragana": "たのしい",
    "romaji": "tanoshii",
    "english": "fun, enjoyable",
    "french": "amusant, agréable",
    "level": "N5",
    "category": "adjective",
    "wordType": "adjective",
    "examples": [
      {
        "japanese": "パーティーは楽しかったです。",
        "hiragana": "ぱーてぃーはたのしかったです。",
        "romaji": "Paatii wa tanoshikatta desu.",
        "english": "The party was fun.",
        "french": "La fête était amusante."
      }
    ]
  },
  {
    "id": "tanomu",
    "japanese": "頼む",
    "hiragana": "たのむ",
    "romaji": "tanomu",
    "english": "to request, to ask",
    "french": "demander, prier",
    "level": "N5",
    "category": "verb",
    "wordType": "verb",
    "examples": [
      {
        "japanese": "先生に頼みました。",
        "hiragana": "せんせいにたのみました。",
        "romaji": "Sensei ni tanomimashita.",
        "english": "I asked the teacher.",
        "french": "J'ai demandé au professeur."
      }
    ]
  },
  {
    "id": "tanoshi_mu",
    "japanese": "楽しむ",
    "hiragana": "たのしむ",
    "romaji": "tanoshimu",
    "english": "to enjoy",
    "french": "profiter, s'amuser",
    "level": "N5",
    "category": "verb",
    "wordType": "verb",
    "examples": [
      {
        "japanese": "旅行を楽しみます。",
        "hiragana": "りょこうをたのしみます。",
        "romaji": "Ryokou o tanoshimimasu.",
        "english": "I enjoy traveling.",
        "french": "Je profite du voyage."
      }
    ]
  },
  {
    "id": "tanjoubi",
    "japanese": "誕生日",
    "hiragana": "たんじょうび",
    "romaji": "tanjoubi",
    "english": "birthday",
    "french": "anniversaire",
    "level": "N5",
    "category": "time",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "今日は私の誕生日です。",
        "hiragana": "きょうはわたしのたんじょうびです。",
        "romaji": "Kyou wa watashi no tanjoubi desu.",
        "english": "Today is my birthday.",
        "french": "Aujourd'hui, c'est mon anniversaire."
      }
    ]
  },
  {
    "id": "tanin",
    "japanese": "他人",
    "hiragana": "たにん",
    "romaji": "tanin",
    "english": "stranger, other people",
    "french": "étranger, autrui",
    "level": "N5",
    "category": "people",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "他人を信じますか？",
        "hiragana": "たにんをしんじますか？",
        "romaji": "Tanin o shinjimasu ka?",
        "english": "Do you trust other people?",
        "french": "Fais-tu confiance aux autres ?"
      }
    ]
  },
  {
    "id": "tane",
    "japanese": "種",
    "hiragana": "たね",
    "romaji": "tane",
    "english": "seed",
    "french": "graine",
    "level": "N5",
    "category": "nature",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "花の種を植えました。",
        "hiragana": "はなのたねをうえました。",
        "romaji": "Hana no tane o uemashita.",
        "english": "I planted flower seeds.",
        "french": "J'ai planté des graines de fleurs."
      }
    ]
  },
  {
    "id": "tabun",
    "japanese": "多分",
    "hiragana": "たぶん",
    "romaji": "tabun",
    "english": "probably",
    "french": "probablement",
    "level": "N5",
    "category": "expression",
    "wordType": "adverb",
    "examples": [
      {
        "japanese": "明日は多分雨です。",
        "hiragana": "あしたはたぶんあめです。",
        "romaji": "Ashita wa tabun ame desu.",
        "english": "It will probably rain tomorrow.",
        "french": "Il pleuvra probablement demain."
      }
    ]
  },
  {
    "id": "tamaru",
    "japanese": "溜まる",
    "hiragana": "たまる",
    "romaji": "tamaru",
    "english": "to accumulate",
    "french": "s'accumuler",
    "level": "N5",
    "category": "verb",
    "wordType": "verb",
    "examples": [
      {
        "japanese": "仕事が溜まっています。",
        "hiragana": "しごとがたまっています。",
        "romaji": "Shigoto ga tamatte imasu.",
        "english": "Work is piling up.",
        "french": "Le travail s'accumule."
      }
    ]
  },
  {
    "id": "tamago",
    "japanese": "卵",
    "hiragana": "たまご",
    "romaji": "tamago",
    "english": "egg",
    "french": "œuf",
    "level": "N5",
    "category": "food",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "卵を食べます。",
        "hiragana": "たまごをたべます。",
        "romaji": "Tamago o tabemasu.",
        "english": "I eat eggs.",
        "french": "Je mange des œufs."
      }
    ]
  },
  {
    "id": "tameru",
    "japanese": "貯める",
    "hiragana": "ためる",
    "romaji": "tameru",
    "english": "to save (money)",
    "french": "épargner",
    "level": "N5",
    "category": "verb",
    "wordType": "verb",
    "examples": [
      {
        "japanese": "お金を貯めています。",
        "hiragana": "おかねをためています。",
        "romaji": "Okane o tamete imasu.",
        "english": "I am saving money.",
        "french": "J'épargne de l'argent."
      }
    ]
  },
  {
    "id": "tanbo",
    "japanese": "田んぼ",
    "hiragana": "たんぼ",
    "romaji": "tanbo",
    "english": "rice field",
    "french": "rizière",
    "level": "N5",
    "category": "nature",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "田んぼで米を作ります。",
        "hiragana": "たんぼでこめをつくります。",
        "romaji": "Tanbo de kome o tsukurimasu.",
        "english": "They grow rice in the fields.",
        "french": "On cultive du riz dans les rizières."
      }
    ]
  },
  {
    "id": "tanoshimi",
    "japanese": "楽しみ",
    "hiragana": "たのしみ",
    "romaji": "tanoshimi",
    "english": "pleasure, enjoyment",
    "french": "plaisir",
    "level": "N5",
    "category": "emotion",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "旅行が楽しみです。",
        "hiragana": "りょこうがたのしみです。",
        "romaji": "Ryokou ga tanoshimi desu.",
        "english": "I am looking forward to the trip.",
        "french": "J'ai hâte du voyage."
      }
    ]
  },
  {
    "id": "tanoshi_geki",
    "japanese": "楽劇",
    "hiragana": "がくげき",
    "romaji": "gakugeki",
    "english": "musical drama",
    "french": "drame musical",
    "level": "N5",
    "category": "culture",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "楽劇を見ました。",
        "hiragana": "がくげきをみました。",
        "romaji": "Gakugeki o mimashita.",
        "english": "I watched a musical drama.",
        "french": "J'ai vu un drame musical."
      }
    ]
  },
  {
    "id": "tanjun",
    "japanese": "単純",
    "hiragana": "たんじゅん",
    "romaji": "tanjun",
    "english": "simple",
    "french": "simple",
    "level": "N5",
    "category": "adjective",
    "wordType": "adjective",
    "examples": [
      {
        "japanese": "答えは単純です。",
        "hiragana": "こたえはたんじゅんです。",
        "romaji": "Kotae wa tanjun desu.",
        "english": "The answer is simple.",
        "french": "La réponse est simple."
      }
    ]
  },
  {
    "id": "tanken",
    "japanese": "探検",
    "hiragana": "たんけん",
    "romaji": "tanken",
    "english": "exploration",
    "french": "exploration",
    "level": "N5",
    "category": "activity",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "森を探検しました。",
        "hiragana": "もりをたんけんしました。",
        "romaji": "Mori o tanken shimashita.",
        "english": "I explored the forest.",
        "french": "J'ai exploré la forêt."
      }
    ]
  },
  {
    "id": "tanrei",
    "japanese": "端麗",
    "hiragana": "たんれい",
    "romaji": "tanrei",
    "english": "graceful, beautiful",
    "french": "élégant, beau",
    "level": "N5",
    "category": "adjective",
    "wordType": "adjective",
    "examples": [
      {
        "japanese": "彼女は端麗な女性です。",
        "hiragana": "かのじょはたんれいなじょせいです。",
        "romaji": "Kanojo wa tanrei na josei desu.",
        "english": "She is a graceful woman.",
        "french": "C'est une femme élégante."
      }
    ]
  },
  {
    "id": "tate",
    "japanese": "縦",
    "hiragana": "たて",
    "romaji": "tate",
    "english": "vertical",
    "french": "vertical",
    "level": "N5",
    "category": "direction",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "縦に並んでください。",
        "hiragana": "たてにならんでください。",
        "romaji": "Tate ni narande kudasai.",
        "english": "Please line up vertically.",
        "french": "Alignez-vous verticalement."
      }
    ]
  },
  {
    "id": "tateru",
    "japanese": "建てる",
    "hiragana": "たてる",
    "romaji": "tateru",
    "english": "to build",
    "french": "construire",
    "level": "N5",
    "category": "verb",
    "wordType": "verb",
    "examples": [
      {
        "japanese": "家を建てます。",
        "hiragana": "いえをたてます。",
        "romaji": "Ie o tatemasu.",
        "english": "I build a house.",
        "french": "Je construis une maison."
      }
    ]
  },
  {
    "id": "tatsu",
    "japanese": "立つ",
    "hiragana": "たつ",
    "romaji": "tatsu",
    "english": "to stand",
    "french": "se lever, être debout",
    "level": "N5",
    "category": "verb",
    "wordType": "verb",
    "examples": [
      {
        "japanese": "椅子から立ちます。",
        "hiragana": "いすからたちます。",
        "romaji": "Isu kara tachimasu.",
        "english": "I stand up from the chair.",
        "french": "Je me lève de la chaise."
      }
    ]
  },
  {
    "id": "tabidatsu",
    "japanese": "旅立つ",
    "hiragana": "たびだつ",
    "romaji": "tabidatsu",
    "english": "to depart on a journey",
    "french": "partir en voyage",
    "level": "N5",
    "category": "travel",
    "wordType": "verb",
    "examples": [
      {
        "japanese": "彼は一人で旅立ちました。",
        "hiragana": "かれはひとりでたびだちました。",
        "romaji": "Kare wa hitori de tabidachimashita.",
        "english": "He departed alone on a journey.",
        "french": "Il est parti seul en voyage."
      }
    ]
  },
  {
    "id": "tabiji",
    "japanese": "旅路",
    "hiragana": "たびじ",
    "romaji": "tabiji",
    "english": "journey, trip",
    "french": "trajet, voyage",
    "level": "N5",
    "category": "travel",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "旅路は長かったです。",
        "hiragana": "たびじはながかったです。",
        "romaji": "Tabiji wa nagakatta desu.",
        "english": "The journey was long.",
        "french": "Le voyage était long."
      }
    ]
  },
  {
    "id": "tabun2",
    "japanese": "多文",
    "hiragana": "たぶん",
    "romaji": "tabun",
    "english": "many sentences",
    "french": "beaucoup de phrases",
    "level": "N5",
    "category": "language",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "多文を勉強します。",
        "hiragana": "たぶんをべんきょうします。",
        "romaji": "Tabun o benkyou shimasu.",
        "english": "I study many sentences.",
        "french": "J'étudie beaucoup de phrases."
      }
    ]
  },
  {
    "id": "tabun_kamoshirenai",
    "japanese": "かもしれない",
    "hiragana": "かもしれない",
    "romaji": "kamoshirenai",
    "english": "might, maybe",
    "french": "peut-être",
    "level": "N5",
    "category": "expression",
    "wordType": "adverb",
    "examples": [
      {
        "japanese": "明日は雨かもしれない。",
        "hiragana": "あしたはあめかもしれない。",
        "romaji": "Ashita wa ame kamoshirenai.",
        "english": "It might rain tomorrow.",
        "french": "Il pourrait pleuvoir demain."
      }
    ]
  },
  {
    "id": "takkyuubin",
    "japanese": "宅急便",
    "hiragana": "たっきゅうびん",
    "romaji": "takkyuubin",
    "english": "courier service",
    "french": "service de messagerie",
    "level": "N5",
    "category": "service",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "宅急便で荷物を送りました。",
        "hiragana": "たっきゅうびんでにもつをおくりました。",
        "romaji": "Takkyuubin de nimotsu o okurimashita.",
        "english": "I sent the package by courier.",
        "french": "J'ai envoyé le colis par messagerie."
      }
    ]
  },
  {
    "id": "tadashiku",
    "japanese": "正しく",
    "hiragana": "ただしく",
    "romaji": "tadashiku",
    "english": "correctly",
    "french": "correctement",
    "level": "N5",
    "category": "adverb",
    "wordType": "adverb",
    "examples": [
      {
        "japanese": "名前を正しく書いてください。",
        "hiragana": "なまえをただしくかいてください。",
        "romaji": "Namae o tadashiku kaite kudasai.",
        "english": "Please write your name correctly.",
        "french": "Écrivez correctement votre nom."
      }
    ]
  },
  {
    "id": "taiiku_kan",
    "japanese": "体育館",
    "hiragana": "たいいくかん",
    "romaji": "taiikukan",
    "english": "gymnasium",
    "french": "gymnase",
    "level": "N5",
    "category": "place",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "体育館でバスケットをしました。",
        "hiragana": "たいいくかんでばすけっとをしました。",
        "romaji": "Taiikukan de basuketto o shimashita.",
        "english": "I played basketball in the gymnasium.",
        "french": "J'ai joué au basket dans le gymnase."
      }
    ]
  },
  {
    "id": "taimu",
    "japanese": "タイム",
    "hiragana": "たいむ",
    "romaji": "taimu",
    "english": "time (loanword)",
    "french": "temps",
    "level": "N5",
    "category": "time",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "タイムを計ります。",
        "hiragana": "たいむをはかります。",
        "romaji": "Taimu o hakarimasu.",
        "english": "I measure the time.",
        "french": "Je mesure le temps."
      }
    ]
  },
  {
    "id": "taiko",
    "japanese": "太鼓",
    "hiragana": "たいこ",
    "romaji": "taiko",
    "english": "drum",
    "french": "tambour",
    "level": "N5",
    "category": "music",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "太鼓を叩きます。",
        "hiragana": "たいこをたたきます。",
        "romaji": "Taiko o tatakimasu.",
        "english": "I play the drum.",
        "french": "Je joue du tambour."
      }
    ]
  },
  {
    "id": "taishikan",
    "japanese": "大使館",
    "hiragana": "たいしかん",
    "romaji": "taishikan",
    "english": "embassy",
    "french": "ambassade",
    "level": "N5",
    "category": "place",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "大使館でビザを申請しました。",
        "hiragana": "たいしかんでびざをしんせいしました。",
        "romaji": "Taishikan de biza o shinsei shimashita.",
        "english": "I applied for a visa at the embassy.",
        "french": "J'ai demandé un visa à l'ambassade."
      }
    ]
  },
  {
    "id": "taishou",
    "japanese": "対象",
    "hiragana": "たいしょう",
    "romaji": "taishou",
    "english": "target, object",
    "french": "cible, objet",
    "level": "N5",
    "category": "concept",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "子供が対象です。",
        "hiragana": "こどもがたいしょうです。",
        "romaji": "Kodomo ga taishou desu.",
        "english": "Children are the target.",
        "french": "Les enfants sont la cible."
      }
    ]
  },
  {
    "id": "taitei",
    "japanese": "大抵",
    "hiragana": "たいてい",
    "romaji": "taitei",
    "english": "usually",
    "french": "d'habitude",
    "level": "N5",
    "category": "adverb",
    "wordType": "adverb",
    "examples": [
      {
        "japanese": "私は大抵家にいます。",
        "hiragana": "わたしはたいていいえにいます。",
        "romaji": "Watashi wa taitei ie ni imasu.",
        "english": "I am usually at home.",
        "french": "Je suis d'habitude à la maison."
      }
    ]
  },
  {
    "id": "taikutsu",
    "japanese": "退屈",
    "hiragana": "たいくつ",
    "romaji": "taikutsu",
    "english": "boredom",
    "french": "ennui",
    "level": "N5",
    "category": "emotion",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "今日は退屈です。",
        "hiragana": "きょうはたいくつです。",
        "romaji": "Kyou wa taikutsu desu.",
        "english": "I am bored today.",
        "french": "Je m'ennuie aujourd'hui."
      }
    ]
  },
  {
    "id": "taiyou",
    "japanese": "太陽",
    "hiragana": "たいよう",
    "romaji": "taiyou",
    "english": "sun",
    "french": "soleil",
    "level": "N5",
    "category": "nature",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "太陽が昇ります。",
        "hiragana": "たいようがのぼります。",
        "romaji": "Taiyou ga noborimasu.",
        "english": "The sun rises.",
        "french": "Le soleil se lève."
      }
    ]
  },
  {
    "id": "taoreru2",
    "japanese": "崩れる",
    "hiragana": "くずれる",
    "romaji": "kuzureru",
    "english": "to collapse",
    "french": "s'effondrer",
    "level": "N5",
    "category": "verb",
    "wordType": "verb",
    "examples": [
      {
        "japanese": "山が崩れました。",
        "hiragana": "やまがくずれました。",
        "romaji": "Yama ga kuzuremashita.",
        "english": "The mountain collapsed.",
        "french": "La montagne s'est effondrée."
      }
    ]
  },
  {
    "id": "taosu",
    "japanese": "倒す",
    "hiragana": "たおす",
    "romaji": "taosu",
    "english": "to knock down, defeat",
    "french": "abattre, vaincre",
    "level": "N5",
    "category": "verb",
    "wordType": "verb",
    "examples": [
      {
        "japanese": "敵を倒しました。",
        "hiragana": "てきをたおしました。",
        "romaji": "Teki o taoshimashita.",
        "english": "I defeated the enemy.",
        "french": "J'ai vaincu l'ennemi."
      }
    ]
  },
  {
    "id": "takara",
    "japanese": "宝",
    "hiragana": "たから",
    "romaji": "takara",
    "english": "treasure",
    "french": "trésor",
    "level": "N5",
    "category": "object",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "友達は私の宝です。",
        "hiragana": "ともだちはわたしのたからです。",
        "romaji": "Tomodachi wa watashi no takara desu.",
        "english": "Friends are my treasure.",
        "french": "Les amis sont mon trésor."
      }
    ]
  },
  {
    "id": "takarakuji",
    "japanese": "宝くじ",
    "hiragana": "たからくじ",
    "romaji": "takarakuji",
    "english": "lottery",
    "french": "loterie",
    "level": "N5",
    "category": "economy",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "宝くじに当たりました。",
        "hiragana": "たからくじにあたりました。",
        "romaji": "Takarakuji ni atarimashita.",
        "english": "I won the lottery.",
        "french": "J'ai gagné à la loterie."
      }
    ]
  },
  {
    "id": "takkyuu",
    "japanese": "卓球",
    "hiragana": "たっきゅう",
    "romaji": "takkyuu",
    "english": "table tennis",
    "french": "tennis de table",
    "level": "N5",
    "category": "sport",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "卓球をします。",
        "hiragana": "たっきゅうをします。",
        "romaji": "Takkyuu o shimasu.",
        "english": "I play table tennis.",
        "french": "Je joue au tennis de table."
      }
    ]
  },
  {
    "id": "takusan_hito",
    "japanese": "大勢",
    "hiragana": "おおぜい",
    "romaji": "oozei",
    "english": "many people, crowd",
    "french": "foule, beaucoup de gens",
    "level": "N5",
    "category": "people",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "大勢の人が集まりました。",
        "hiragana": "おおぜいのひとがあつまりました。",
        "romaji": "Oozei no hito ga atsumarimashita.",
        "english": "A crowd of people gathered.",
        "french": "Une foule de gens s'est rassemblée."
      }
    ]
  },
  {
    "id": "tamashii",
    "japanese": "魂",
    "hiragana": "たましい",
    "romaji": "tamashii",
    "english": "soul, spirit",
    "french": "âme, esprit",
    "level": "N5",
    "category": "concept",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "音楽は魂を動かします。",
        "hiragana": "おんがくはたましいをうごかします。",
        "romaji": "Ongaku wa tamashii o ugokashimasu.",
        "english": "Music moves the soul.",
        "french": "La musique touche l'âme."
      }
    ]
  },
  {
    "id": "tanbo_saku",
    "japanese": "作物",
    "hiragana": "さくもつ",
    "romaji": "sakumotsu",
    "english": "crops",
    "french": "récoltes",
    "level": "N5",
    "category": "nature",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "田んぼで作物を育てます。",
        "hiragana": "たんぼでさくもつをそだてます。",
        "romaji": "Tanbo de sakumotsu o sodate masu.",
        "english": "They grow crops in the rice field.",
        "french": "On cultive des récoltes dans la rizière."
      }
    ]
  },
  {
    "id": "tanoshimu2",
    "japanese": "愉しむ",
    "hiragana": "たのしむ",
    "romaji": "tanoshimu",
    "english": "to enjoy",
    "french": "apprécier, savourer",
    "level": "N5",
    "category": "verb",
    "wordType": "verb",
    "examples": [
      {
        "japanese": "人生を愉しみましょう。",
        "hiragana": "じんせいをたのしみましょう。",
        "romaji": "Jinsei o tanoshimimashou.",
        "english": "Let's enjoy life.",
        "french": "Profitons de la vie."
      }
    ]
  },
  {
    "id": "tanjun_na",
    "japanese": "単純な",
    "hiragana": "たんじゅんな",
    "romaji": "tanjun na",
    "english": "simple, naive",
    "french": "simple, naïf",
    "level": "N5",
    "category": "adjective",
    "wordType": "adjective",
    "examples": [
      {
        "japanese": "彼は単純な性格です。",
        "hiragana": "かれはたんじゅんなせいかくです。",
        "romaji": "Kare wa tanjun na seikaku desu.",
        "english": "He has a simple personality.",
        "french": "Il a une personnalité simple."
      }
    ]
  },
  {
    "id": "tanoshimi_ni",
    "japanese": "楽しみに",
    "hiragana": "たのしみに",
    "romaji": "tanoshimi ni",
    "english": "looking forward to",
    "french": "avoir hâte de",
    "level": "N5",
    "category": "expression",
    "wordType": "phrase",
    "examples": [
      {
        "japanese": "旅行を楽しみにしています。",
        "hiragana": "りょこうをたのしみにしています。",
        "romaji": "Ryokou o tanoshimi ni shite imasu.",
        "english": "I am looking forward to the trip.",
        "french": "J'ai hâte pour le voyage."
      }
    ]
  },
  {
    "id": "tansan",
    "japanese": "炭酸",
    "hiragana": "たんさん",
    "romaji": "tansan",
    "english": "carbonated (drink)",
    "french": "gazeux",
    "level": "N5",
    "category": "food",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "炭酸水を飲みます。",
        "hiragana": "たんさんすいをのみます。",
        "romaji": "Tansan-sui o nomimasu.",
        "english": "I drink carbonated water.",
        "french": "Je bois de l'eau gazeuse."
      }
    ]
  },
  {
    "id": "tanjou",
    "japanese": "誕生",
    "hiragana": "たんじょう",
    "romaji": "tanjou",
    "english": "birth",
    "french": "naissance",
    "level": "N5",
    "category": "life",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "赤ちゃんの誕生を祝います。",
        "hiragana": "あかちゃんのたんじょうをいわいます。",
        "romaji": "Akachan no tanjou o iwaimasu.",
        "english": "We celebrate the baby's birth.",
        "french": "Nous célébrons la naissance du bébé."
      }
    ]
  },
  {
    "id": "tanshin",
    "japanese": "単身",
    "hiragana": "たんしん",
    "romaji": "tanshin",
    "english": "single, alone",
    "french": "seul",
    "level": "N5",
    "category": "status",
    "wordType": "adjective",
    "examples": [
      {
        "japanese": "彼は単身で東京に住んでいます。",
        "hiragana": "かれはたんしんでとうきょうにすんでいます。",
        "romaji": "Kare wa tanshin de Toukyou ni sunde imasu.",
        "english": "He lives alone in Tokyo.",
        "french": "Il vit seul à Tokyo."
      }
    ]
  },
  {
    "id": "tanuki",
    "japanese": "たぬき",
    "hiragana": "たぬき",
    "romaji": "tanuki",
    "english": "raccoon dog",
    "french": "tanuki (chien viverrin)",
    "level": "N5",
    "category": "animal",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "たぬきは日本の動物です。",
        "hiragana": "たぬきはにほんのどうぶつです。",
        "romaji": "Tanuki wa Nihon no doubutsu desu.",
        "english": "The tanuki is a Japanese animal.",
        "french": "Le tanuki est un animal du Japon."
      }
    ]
  },
  {
    "id": "tango",
    "japanese": "単語",
    "hiragana": "たんご",
    "romaji": "tango",
    "english": "word, vocabulary",
    "french": "mot, vocabulaire",
    "level": "N5",
    "category": "language",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "新しい単語を覚えました。",
        "hiragana": "あたらしいたんごをおぼえました。",
        "romaji": "Atarashii tango o oboemashita.",
        "english": "I learned a new word.",
        "french": "J'ai appris un nouveau mot."
      }
    ]
  },
  {
    "id": "tanbo_sagyou",
    "japanese": "田んぼ作業",
    "hiragana": "たんぼさぎょう",
    "romaji": "tanbo sagyou",
    "english": "rice field work",
    "french": "travail dans les rizières",
    "level": "N5",
    "category": "nature",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "田んぼ作業を手伝いました。",
        "hiragana": "たんぼさぎょうをてつだいました。",
        "romaji": "Tanbo sagyou o tetsudaimashita.",
        "english": "I helped with rice field work.",
        "french": "J'ai aidé aux travaux de la rizière."
      }
    ]
  },
  {
    "id": "tanjo_kinenbi",
    "japanese": "誕生記念日",
    "hiragana": "たんじょうきねんび",
    "romaji": "tanjou kinenbi",
    "english": "birthday anniversary",
    "french": "jour commémoratif de naissance",
    "level": "N5",
    "category": "time",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "誕生記念日を祝います。",
        "hiragana": "たんじょうきねんびをいわいます。",
        "romaji": "Tanjou kinenbi o iwaimasu.",
        "english": "We celebrate the birth anniversary.",
        "french": "Nous célébrons l'anniversaire de naissance."
      }
    ]
  },
  {
    "id": "tansaku",
    "japanese": "探索",
    "hiragana": "たんさく",
    "romaji": "tansaku",
    "english": "search, exploration",
    "french": "recherche, exploration",
    "level": "N5",
    "category": "activity",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "インターネットで情報を探索します。",
        "hiragana": "いんたーねっとでじょうほうをたんさくします。",
        "romaji": "Intaanetto de jouhou o tansaku shimasu.",
        "english": "I search for information on the internet.",
        "french": "Je recherche des informations sur internet."
      }
    ]
  },
  {
    "id": "tanjikan",
    "japanese": "短時間",
    "hiragana": "たんじかん",
    "romaji": "tanjikan",
    "english": "short time",
    "french": "court laps de temps",
    "level": "N5",
    "category": "time",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "短時間で終わりました。",
        "hiragana": "たんじかんでおわりました。",
        "romaji": "Tanjikan de owarimashita.",
        "english": "It finished in a short time.",
        "french": "C'est fini en peu de temps."
      }
    ]
  },
  {
    "id": "tansu",
    "japanese": "タンス",
    "hiragana": "たんす",
    "romaji": "tansu",
    "english": "chest of drawers",
    "french": "commode",
    "level": "N5",
    "category": "furniture",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "服をタンスに入れます。",
        "hiragana": "ふくをたんすにいれます。",
        "romaji": "Fuku o tansu ni iremasu.",
        "english": "I put clothes in the chest of drawers.",
        "french": "Je mets les vêtements dans la commode."
      }
    ]
  },
  {
    "id": "tanbo_mizu",
    "japanese": "田んぼの水",
    "hiragana": "たんぼのみず",
    "romaji": "tanbo no mizu",
    "english": "rice field water",
    "french": "eau de la rizière",
    "level": "N5",
    "category": "nature",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "田んぼの水が冷たいです。",
        "hiragana": "たんぼのみずがつめたいです。",
        "romaji": "Tanbo no mizu ga tsumetai desu.",
        "english": "The rice field water is cold.",
        "french": "L'eau de la rizière est froide."
      }
    ]
  },
  {
    "id": "taraa",
    "japanese": "タラ",
    "hiragana": "たら",
    "romaji": "tara",
    "english": "cod (fish)",
    "french": "morue",
    "level": "N5",
    "category": "food",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "タラの料理を食べました。",
        "hiragana": "たらのりょうりをたべました。",
        "romaji": "Tara no ryouri o tabemashita.",
        "english": "I ate a cod dish.",
        "french": "J'ai mangé un plat de morue."
      }
    ]
  },
  {
    "id": "tariru",
    "japanese": "足りる",
    "hiragana": "たりる",
    "romaji": "tariru",
    "english": "to be enough",
    "french": "suffire",
    "level": "N5",
    "category": "verb",
    "wordType": "verb",
    "examples": [
      {
        "japanese": "お金が足りますか？",
        "hiragana": "おかねがたりますか？",
        "romaji": "Okane ga tarimasu ka?",
        "english": "Is the money enough?",
        "french": "L'argent suffit-il ?"
      }
    ]
  },
  {
    "id": "taore_ru",
    "japanese": "倒れる",
    "hiragana": "たおれる",
    "romaji": "taoreru",
    "english": "to fall down",
    "french": "tomber",
    "level": "N5",
    "category": "verb",
    "wordType": "verb",
    "examples": [
      {
        "japanese": "彼は道で倒れました。",
        "hiragana": "かれはみちでたおれました。",
        "romaji": "Kare wa michi de taoremashita.",
        "english": "He collapsed on the street.",
        "french": "Il est tombé dans la rue."
      }
    ]
  },
  {
    "id": "tanbo_keiken",
    "japanese": "田んぼ経験",
    "hiragana": "たんぼけいけん",
    "romaji": "tanbo keiken",
    "english": "rice field experience",
    "french": "expérience dans les rizières",
    "level": "N5",
    "category": "nature",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "田んぼ経験をしました。",
        "hiragana": "たんぼけいけんをしました。",
        "romaji": "Tanbo keiken o shimashita.",
        "english": "I had experience in a rice field.",
        "french": "J'ai eu une expérience dans une rizière."
      }
    ]
  },
  {
    "id": "tate_mono",
    "japanese": "建物",
    "hiragana": "たてもの",
    "romaji": "tatemono",
    "english": "building",
    "french": "bâtiment",
    "level": "N5",
    "category": "place",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "新しい建物が建ちました。",
        "hiragana": "あたらしいたてものがたちました。",
        "romaji": "Atarashii tatemono ga tachimashita.",
        "english": "A new building was built.",
        "french": "Un nouveau bâtiment a été construit."
      }
    ]
  },
  {
    "id": "tateru_kensetsu",
    "japanese": "建設",
    "hiragana": "けんせつ",
    "romaji": "kensetsu",
    "english": "construction",
    "french": "construction",
    "level": "N5",
    "category": "work",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "橋の建設が始まりました。",
        "hiragana": "はしのけんせつがはじまりました。",
        "romaji": "Hashi no kensetsu ga hajimarimashita.",
        "english": "The construction of the bridge has started.",
        "french": "La construction du pont a commencé."
      }
    ]
  },
  {
    "id": "tatsu_kouen",
    "japanese": "立つ",
    "hiragana": "たつ",
    "romaji": "tatsu",
    "english": "to stand",
    "french": "se lever",
    "level": "N5",
    "category": "verb",
    "wordType": "verb",
    "examples": [
      {
        "japanese": "私は椅子から立ちました。",
        "hiragana": "わたしはいすからたちました。",
        "romaji": "Watashi wa isu kara tachimashita.",
        "english": "I stood up from the chair.",
        "french": "Je me suis levé de la chaise."
      }
    ]
  },
  {
    "id": "tabako",
    "japanese": "煙草",
    "hiragana": "たばこ",
    "romaji": "tabako",
    "english": "cigarette, tobacco",
    "french": "cigarette, tabac",
    "level": "N5",
    "category": "object",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "煙草を吸いますか？",
        "hiragana": "たばこをすいますか？",
        "romaji": "Tabako o suimasu ka?",
        "english": "Do you smoke?",
        "french": "Fumez-vous ?"
      }
    ]
  },
  {
    "id": "tanaka",
    "japanese": "田中",
    "hiragana": "たなか",
    "romaji": "Tanaka",
    "english": "Tanaka (surname)",
    "french": "Tanaka (nom de famille)",
    "level": "N5",
    "category": "name",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "田中さんは先生です。",
        "hiragana": "たなかさんはせんせいです。",
        "romaji": "Tanaka-san wa sensei desu.",
        "english": "Mr. Tanaka is a teacher.",
        "french": "M. Tanaka est professeur."
      }
    ]
  },
  {
    "id": "tanoshi_koto",
    "japanese": "楽しいこと",
    "hiragana": "たのしいこと",
    "romaji": "tanoshii koto",
    "english": "fun thing",
    "french": "chose amusante",
    "level": "N5",
    "category": "expression",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "楽しいことが好きです。",
        "hiragana": "たのしいことがすきです。",
        "romaji": "Tanoshii koto ga suki desu.",
        "english": "I like fun things.",
        "french": "J'aime les choses amusantes."
      }
    ]
  },
  {
    "id": "tanomu_onegai",
    "japanese": "頼む",
    "hiragana": "たのむ",
    "romaji": "tanomu",
    "english": "to request",
    "french": "demander",
    "level": "N5",
    "category": "verb",
    "wordType": "verb",
    "examples": [
      {
        "japanese": "友達に頼みました。",
        "hiragana": "ともだちにたのみました。",
        "romaji": "Tomodachi ni tanomimashita.",
        "english": "I asked a friend.",
        "french": "J'ai demandé à un ami."
      }
    ]
  },
  {
    "id": "tanjou",
    "japanese": "誕生",
    "hiragana": "たんじょう",
    "romaji": "tanjou",
    "english": "birth",
    "french": "naissance",
    "level": "N5",
    "category": "life",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "子供の誕生を祝いました。",
        "hiragana": "こどものたんじょうをいわいました。",
        "romaji": "Kodomo no tanjou o iwaimashita.",
        "english": "We celebrated the child's birth.",
        "french": "Nous avons célébré la naissance de l'enfant."
      }
    ]
  },
  {
    "id": "tanoshii_omoide",
    "japanese": "楽しい思い出",
    "hiragana": "たのしいおもいで",
    "romaji": "tanoshii omoide",
    "english": "happy memory",
    "french": "souvenir heureux",
    "level": "N5",
    "category": "expression",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "旅行は楽しい思い出になりました。",
        "hiragana": "りょこうはたのしいおもいでになりました。",
        "romaji": "Ryokou wa tanoshii omoide ni narimashita.",
        "english": "The trip became a happy memory.",
        "french": "Le voyage est devenu un bon souvenir."
      }
    ]
  },
  {
    "id": "tanoshimi",
    "japanese": "楽しみ",
    "hiragana": "たのしみ",
    "romaji": "tanoshimi",
    "english": "pleasure, expectation",
    "french": "plaisir, attente",
    "level": "N5",
    "category": "emotion",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "新しい仕事が楽しみです。",
        "hiragana": "あたらしいしごとがたのしみです。",
        "romaji": "Atarashii shigoto ga tanoshimi desu.",
        "english": "I am looking forward to the new job.",
        "french": "J'ai hâte pour le nouveau travail."
      }
    ]
  },
  {
    "id": "tansu",
    "japanese": "タンス",
    "hiragana": "たんす",
    "romaji": "tansu",
    "english": "chest of drawers",
    "french": "commode",
    "level": "N5",
    "category": "furniture",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "服をタンスにしまいました。",
        "hiragana": "ふくをたんすにしまいました。",
        "romaji": "Fuku o tansu ni shimaimashita.",
        "english": "I put the clothes in the drawer.",
        "french": "J'ai rangé les vêtements dans la commode."
      }
    ]
  },
  {
    "id": "tateru",
    "japanese": "建てる",
    "hiragana": "たてる",
    "romaji": "tateru",
    "english": "to build",
    "french": "construire",
    "level": "N5",
    "category": "verb",
    "wordType": "verb",
    "examples": [
      {
        "japanese": "家を建てます。",
        "hiragana": "いえをたてます。",
        "romaji": "Ie o tatemasu.",
        "english": "I build a house.",
        "french": "Je construis une maison."
      }
    ]
  },
  {
    "id": "tabi",
    "japanese": "旅",
    "hiragana": "たび",
    "romaji": "tabi",
    "english": "trip, travel",
    "french": "voyage",
    "level": "N5",
    "category": "travel",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "旅に出ます。",
        "hiragana": "たびにでます。",
        "romaji": "Tabi ni demasu.",
        "english": "I go on a trip.",
        "french": "Je pars en voyage."
      }
    ]
  },
  {
    "id": "tabidachi",
    "japanese": "旅立ち",
    "hiragana": "たびだち",
    "romaji": "tabidachi",
    "english": "departure",
    "french": "départ",
    "level": "N5",
    "category": "travel",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "彼の旅立ちを見送りました。",
        "hiragana": "かれのたびだちをみおくりました。",
        "romaji": "Kare no tabidachi o miokurimashita.",
        "english": "I saw him off on his departure.",
        "french": "J'ai assisté à son départ."
      }
    ]
  },
  {
    "id": "tadashii",
    "japanese": "正しい",
    "hiragana": "ただしい",
    "romaji": "tadashii",
    "english": "correct",
    "french": "correct",
    "level": "N5",
    "category": "adjective",
    "wordType": "adjective",
    "examples": [
      {
        "japanese": "答えは正しいです。",
        "hiragana": "こたえはただしいです。",
        "romaji": "Kotae wa tadashii desu.",
        "english": "The answer is correct.",
        "french": "La réponse est correcte."
      }
    ]
  },
  {
    "id": "tashika",
    "japanese": "確か",
    "hiragana": "たしか",
    "romaji": "tashika",
    "english": "certain, sure",
    "french": "sûr, certain",
    "level": "N5",
    "category": "adjective",
    "wordType": "adjective",
    "examples": [
      {
        "japanese": "それは確かです。",
        "hiragana": "それはたしかです。",
        "romaji": "Sore wa tashika desu.",
        "english": "That is certain.",
        "french": "C'est certain."
      }
    ]
  },
  {
    "id": "tashou",
    "japanese": "多少",
    "hiragana": "たしょう",
    "romaji": "tashou",
    "english": "a little, somewhat",
    "french": "un peu, quelque peu",
    "level": "N5",
    "category": "adverb",
    "wordType": "adverb",
    "examples": [
      {
        "japanese": "多少疲れました。",
        "hiragana": "たしょうつかれました。",
        "romaji": "Tashou tsukaremashita.",
        "english": "I am somewhat tired.",
        "french": "Je suis un peu fatigué."
      }
    ]
  },
  {
    "id": "tashika_ni",
    "japanese": "確かに",
    "hiragana": "たしかに",
    "romaji": "tashika ni",
    "english": "surely, indeed",
    "french": "sûrement, en effet",
    "level": "N5",
    "category": "expression",
    "wordType": "adverb",
    "examples": [
      {
        "japanese": "彼は確かに来ます。",
        "hiragana": "かれはたしかにきます。",
        "romaji": "Kare wa tashika ni kimasu.",
        "english": "He will surely come.",
        "french": "Il viendra sûrement."
      }
    ]
  },
  {
    "id": "tameru_chokin",
    "japanese": "貯金",
    "hiragana": "ちょきん",
    "romaji": "chokin",
    "english": "savings",
    "french": "économies",
    "level": "N5",
    "category": "economy",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "毎月貯金をします。",
        "hiragana": "まいつきちょきんをします。",
        "romaji": "Maitsuki chokin o shimasu.",
        "english": "I save money every month.",
        "french": "J'économise de l'argent chaque mois."
      }
    ]
  },
  {
    "id": "tama",
    "japanese": "玉",
    "hiragana": "たま",
    "romaji": "tama",
    "english": "ball, jewel",
    "french": "balle, bijou",
    "level": "N5",
    "category": "object",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "ガラスの玉を見つけました。",
        "hiragana": "がらすのたまをみつけました。",
        "romaji": "Garasu no tama o mitsukemashita.",
        "english": "I found a glass ball.",
        "french": "J'ai trouvé une boule de verre."
      }
    ]
  },
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
  },
  {
    "id": "tamani",
    "japanese": "たまに",
    "hiragana": "たまに",
    "romaji": "tamani",
    "english": "occasionally",
    "french": "de temps en temps",
    "level": "N5",
    "category": "adverb",
    "wordType": "adverb",
    "examples": [
      {
        "japanese": "たまに映画を見ます。",
        "hiragana": "たまにえいがをみます。",
        "romaji": "Tamani eiga o mimasu.",
        "english": "I sometimes watch movies.",
        "french": "Je regarde parfois des films."
      }
    ]
  },
  {
    "id": "tamashii",
    "japanese": "魂",
    "hiragana": "たましい",
    "romaji": "tamashii",
    "english": "soul, spirit",
    "french": "âme, esprit",
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
  },
  {
    "id": "tameru",
    "japanese": "貯める",
    "hiragana": "ためる",
    "romaji": "tameru",
    "english": "to save, accumulate",
    "french": "épargner, accumuler",
    "level": "N5",
    "category": "verb",
    "wordType": "verb",
    "examples": [
      {
        "japanese": "お金を貯めています。",
        "hiragana": "おかねをためています。",
        "romaji": "Okane o tamete imasu.",
        "english": "I am saving money.",
        "french": "J'épargne de l'argent."
      }
    ]
  },
  {
    "id": "tanbo",
    "japanese": "田んぼ",
    "hiragana": "たんぼ",
    "romaji": "tanbo",
    "english": "rice field",
    "french": "rizière",
    "level": "N5",
    "category": "nature",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "田んぼで米を作ります。",
        "hiragana": "たんぼでこめをつくります。",
        "romaji": "Tanbo de kome o tsukurimasu.",
        "english": "They grow rice in the fields.",
        "french": "On cultive du riz dans les rizières."
      }
    ]
  },
  {
    "id": "tanin",
    "japanese": "他人",
    "hiragana": "たにん",
    "romaji": "tanin",
    "english": "stranger, other people",
    "french": "autrui, étranger",
    "level": "N5",
    "category": "people",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "他人に頼らないでください。",
        "hiragana": "たにんにたよらないでください。",
        "romaji": "Tanin ni tayoranaide kudasai.",
        "english": "Please don't rely on others.",
        "french": "Ne dépendez pas des autres."
      }
    ]
  },
  {
    "id": "tanoshii",
    "japanese": "楽しい",
    "hiragana": "たのしい",
    "romaji": "tanoshii",
    "english": "fun, enjoyable",
    "french": "amusant, agréable",
    "level": "N5",
    "category": "adjective",
    "wordType": "adjective",
    "examples": [
      {
        "japanese": "今日はとても楽しいです。",
        "hiragana": "きょうはとてもたのしいです。",
        "romaji": "Kyou wa totemo tanoshii desu.",
        "english": "Today is very fun.",
        "french": "Aujourd'hui est très amusant."
      }
    ]
  },
  {
    "id": "tanoshimu",
    "japanese": "楽しむ",
    "hiragana": "たのしむ",
    "romaji": "tanoshimu",
    "english": "to enjoy",
    "french": "profiter, s'amuser",
    "level": "N5",
    "category": "verb",
    "wordType": "verb",
    "examples": [
      {
        "japanese": "音楽を楽しみます。",
        "hiragana": "おんがくをたのしみます。",
        "romaji": "Ongaku o tanoshimimasu.",
        "english": "I enjoy music.",
        "french": "Je profite de la musique."
      }
    ]
  },
  {
    "id": "tanoshimi",
    "japanese": "楽しみ",
    "hiragana": "たのしみ",
    "romaji": "tanoshimi",
    "english": "pleasure, expectation",
    "french": "plaisir, attente",
    "level": "N5",
    "category": "emotion",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "旅行が楽しみです。",
        "hiragana": "りょこうがたのしみです。",
        "romaji": "Ryokou ga tanoshimi desu.",
        "english": "I look forward to the trip.",
        "french": "J'ai hâte pour le voyage."
      }
    ]
  },
  {
    "id": "tanjoubi",
    "japanese": "誕生日",
    "hiragana": "たんじょうび",
    "romaji": "tanjoubi",
    "english": "birthday",
    "french": "anniversaire",
    "level": "N5",
    "category": "time",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "明日は彼の誕生日です。",
        "hiragana": "あしたはかれのたんじょうびです。",
        "romaji": "Ashita wa kare no tanjoubi desu.",
        "english": "Tomorrow is his birthday.",
        "french": "Demain c'est son anniversaire."
      }
    ]
  },
  {
    "id": "tansu",
    "japanese": "タンス",
    "hiragana": "たんす",
    "romaji": "tansu",
    "english": "chest of drawers",
    "french": "commode",
    "level": "N5",
    "category": "furniture",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "タンスに服をしまいました。",
        "hiragana": "たんすにふくをしまいました。",
        "romaji": "Tansu ni fuku o shimaimashita.",
        "english": "I put clothes in the dresser.",
        "french": "J'ai rangé les vêtements dans la commode."
      }
    ]
  },
  {
    "id": "tatakau",
    "japanese": "戦う",
    "hiragana": "たたかう",
    "romaji": "tatakau",
    "english": "to fight",
    "french": "se battre",
    "level": "N5",
    "category": "verb",
    "wordType": "verb",
    "examples": [
      {
        "japanese": "彼らは戦いました。",
        "hiragana": "かれらはたたかいました。",
        "romaji": "Karera wa tatakaimashita.",
        "english": "They fought.",
        "french": "Ils se sont battus."
      }
    ]
  },
  {
    "id": "tatemono",
    "japanese": "建物",
    "hiragana": "たてもの",
    "romaji": "tatemono",
    "english": "building",
    "french": "bâtiment",
    "level": "N5",
    "category": "place",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "古い建物があります。",
        "hiragana": "ふるいたてものがあります。",
        "romaji": "Furui tatemono ga arimasu.",
        "english": "There is an old building.",
        "french": "Il y a un vieux bâtiment."
      }
    ]
  },
  {
    "id": "tateru",
    "japanese": "建てる",
    "hiragana": "たてる",
    "romaji": "tateru",
    "english": "to build",
    "french": "construire",
    "level": "N5",
    "category": "verb",
    "wordType": "verb",
    "examples": [
      {
        "japanese": "家を建てます。",
        "hiragana": "いえをたてます。",
        "romaji": "Ie o tatemasu.",
        "english": "I build a house.",
        "french": "Je construis une maison."
      }
    ]
  },
  {
    "id": "tatsu",
    "japanese": "立つ",
    "hiragana": "たつ",
    "romaji": "tatsu",
    "english": "to stand",
    "french": "se lever",
    "level": "N5",
    "category": "verb",
    "wordType": "verb",
    "examples": [
      {
        "japanese": "彼は急に立ちました。",
        "hiragana": "かれはきゅうにたちました。",
        "romaji": "Kare wa kyuu ni tachimashita.",
        "english": "He suddenly stood up.",
        "french": "Il s'est levé soudainement."
      }
    ]
  },
  {
    "id": "tatemono_takai",
    "japanese": "高い建物",
    "hiragana": "たかいたてもの",
    "romaji": "takai tatemono",
    "english": "tall building",
    "french": "bâtiment haut",
    "level": "N5",
    "category": "place",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "高い建物が並んでいます。",
        "hiragana": "たかいたてものがならんでいます。",
        "romaji": "Takai tatemono ga narande imasu.",
        "english": "Tall buildings are lined up.",
        "french": "Des bâtiments hauts sont alignés."
      }
    ]
  },
  {
    "id": "tawaa",
    "japanese": "タワー",
    "hiragana": "たわー",
    "romaji": "tawaa",
    "english": "tower",
    "french": "tour",
    "level": "N5",
    "category": "place",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "東京タワーに行きました。",
        "hiragana": "とうきょうたわーにいきました。",
        "romaji": "Toukyou Tawaa ni ikimashita.",
        "english": "I went to Tokyo Tower.",
        "french": "Je suis allé à la Tour de Tokyo."
      }
    ]
  },
  {
    "id": "tayori",
    "japanese": "便り",
    "hiragana": "たより",
    "romaji": "tayori",
    "english": "news, letter",
    "french": "nouvelles, lettre",
    "level": "N5",
    "category": "communication",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "友達から便りが来ました。",
        "hiragana": "ともだちからたよりがきました。",
        "romaji": "Tomodachi kara tayori ga kimashita.",
        "english": "I received a letter from a friend.",
        "french": "J'ai reçu une lettre d'un ami."
      }
    ]
  },
  {
    "id": "te",
    "japanese": "手",
    "hiragana": "て",
    "romaji": "te",
    "english": "hand",
    "french": "main",
    "level": "N5",
    "category": "body parts",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "手を洗ってください。",
        "hiragana": "てをあらってください。",
        "romaji": "Te o aratte kudasai.",
        "english": "Please wash your hands.",
        "french": "Lavez-vous les mains, s'il vous plaît."
      }
    ]
  },
  {
    "id": "tegami",
    "japanese": "手紙",
    "hiragana": "てがみ",
    "romaji": "tegami",
    "english": "letter",
    "french": "lettre",
    "level": "N5",
    "category": "communication",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "友達に手紙を書きました。",
        "hiragana": "ともだちにてがみをかきました。",
        "romaji": "Tomodachi ni tegami o kakimashita.",
        "english": "I wrote a letter to my friend.",
        "french": "J'ai écrit une lettre à mon ami."
      }
    ]
  },
  {
    "id": "tegami_hakobu",
    "japanese": "運ぶ",
    "hiragana": "はこぶ",
    "romaji": "hakobu",
    "english": "to carry",
    "french": "porter, transporter",
    "level": "N5",
    "category": "verb",
    "wordType": "verb",
    "examples": [
      {
        "japanese": "荷物を運びました。",
        "hiragana": "にもつをはこびました。",
        "romaji": "Nimotsu o hakobimashita.",
        "english": "I carried the luggage.",
        "french": "J'ai transporté les bagages."
      }
    ]
  },
  {
    "id": "tegami_tsukau",
    "japanese": "使う",
    "hiragana": "つかう",
    "romaji": "tsukau",
    "english": "to use",
    "french": "utiliser",
    "level": "N5",
    "category": "verb",
    "wordType": "verb",
    "examples": [
      {
        "japanese": "この辞書を使ってください。",
        "hiragana": "このじしょをつかってください。",
        "romaji": "Kono jisho o tsukatte kudasai.",
        "english": "Please use this dictionary.",
        "french": "Utilisez ce dictionnaire, s'il vous plaît."
      }
    ]
  },
  {
    "id": "teburu",
    "japanese": "テーブル",
    "hiragana": "てーぶる",
    "romaji": "teeburu",
    "english": "table",
    "french": "table",
    "level": "N5",
    "category": "furniture",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "テーブルの上に花があります。",
        "hiragana": "てーぶるのうえにはながあります。",
        "romaji": "Teeburu no ue ni hana ga arimasu.",
        "english": "There is a flower on the table.",
        "french": "Il y a une fleur sur la table."
      }
    ]
  },
  {
    "id": "tegami_yasashii",
    "japanese": "優しい",
    "hiragana": "やさしい",
    "romaji": "yasashii",
    "english": "kind, gentle",
    "french": "gentil, doux",
    "level": "N5",
    "category": "adjective",
    "wordType": "adjective",
    "examples": [
      {
        "japanese": "彼はとても優しいです。",
        "hiragana": "かれはとてもやさしいです。",
        "romaji": "Kare wa totemo yasashii desu.",
        "english": "He is very kind.",
        "french": "Il est très gentil."
      }
    ]
  },
  {
    "id": "tehon",
    "japanese": "手本",
    "hiragana": "てほん",
    "romaji": "tehon",
    "english": "model, example",
    "french": "modèle, exemple",
    "level": "N5",
    "category": "school",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "先生が手本を見せました。",
        "hiragana": "せんせいがてほんをみせました。",
        "romaji": "Sensei ga tehon o misemashita.",
        "english": "The teacher showed an example.",
        "french": "Le professeur a montré un exemple."
      }
    ]
  },
  {
    "id": "tegami_denwa",
    "japanese": "電話",
    "hiragana": "でんわ",
    "romaji": "denwa",
    "english": "telephone",
    "french": "téléphone",
    "level": "N5",
    "category": "communication",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "友達に電話しました。",
        "hiragana": "ともだちにでんわしました。",
        "romaji": "Tomodachi ni denwa shimashita.",
        "english": "I called my friend.",
        "french": "J'ai téléphoné à mon ami."
      }
    ]
  },
  {
    "id": "denki",
    "japanese": "電気",
    "hiragana": "でんき",
    "romaji": "denki",
    "english": "electricity, light",
    "french": "électricité, lumière",
    "level": "N5",
    "category": "object",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "電気を消してください。",
        "hiragana": "でんきをけしてください。",
        "romaji": "Denki o keshite kudasai.",
        "english": "Please turn off the light.",
        "french": "Éteignez la lumière, s'il vous plaît."
      }
    ]
  },
  {
    "id": "densha",
    "japanese": "電車",
    "hiragana": "でんしゃ",
    "romaji": "densha",
    "english": "train",
    "french": "train",
    "level": "N5",
    "category": "transport",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "毎日電車で通勤します。",
        "hiragana": "まいにちでんしゃでつうきんします。",
        "romaji": "Mainichi densha de tsuukin shimasu.",
        "english": "I commute by train every day.",
        "french": "Je vais au travail en train tous les jours."
      }
    ]
  },
  {
    "id": "denwa",
    "japanese": "電話",
    "hiragana": "でんわ",
    "romaji": "denwa",
    "english": "telephone",
    "french": "téléphone",
    "level": "N5",
    "category": "communication",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "友達に電話しました。",
        "hiragana": "ともだちにでんわしました。",
        "romaji": "Tomodachi ni denwa shimashita.",
        "english": "I called my friend.",
        "french": "J'ai téléphoné à mon ami."
      }
    ]
  },
  {
    "id": "denwa_bangou",
    "japanese": "電話番号",
    "hiragana": "でんわばんごう",
    "romaji": "denwa bangou",
    "english": "phone number",
    "french": "numéro de téléphone",
    "level": "N5",
    "category": "communication",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "電話番号を教えてください。",
        "hiragana": "でんわばんごうをおしえてください。",
        "romaji": "Denwa bangou o oshiete kudasai.",
        "english": "Please tell me your phone number.",
        "french": "Donnez-moi votre numéro de téléphone."
      }
    ]
  },
  {
    "id": "deru",
    "japanese": "出る",
    "hiragana": "でる",
    "romaji": "deru",
    "english": "to go out, to leave",
    "french": "sortir, quitter",
    "level": "N5",
    "category": "verb",
    "wordType": "verb",
    "examples": [
      {
        "japanese": "8時に家を出ます。",
        "hiragana": "はちじにいえをでます。",
        "romaji": "Hachiji ni ie o demasu.",
        "english": "I leave the house at 8 o'clock.",
        "french": "Je quitte la maison à 8 heures."
      }
    ]
  },
  {
    "id": "dezain",
    "japanese": "デザイン",
    "hiragana": "でざいん",
    "romaji": "dezain",
    "english": "design",
    "french": "design",
    "level": "N5",
    "category": "art",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "この椅子のデザインはモダンです。",
        "hiragana": "このいすのでざいんはもだんです。",
        "romaji": "Kono isu no dezain wa modan desu.",
        "english": "The design of this chair is modern.",
        "french": "Le design de cette chaise est moderne."
      }
    ]
  },
  {
    "id": "dezaato",
    "japanese": "デザート",
    "hiragana": "でざーと",
    "romaji": "dezaato",
    "english": "dessert",
    "french": "dessert",
    "level": "N5",
    "category": "food",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "デザートに果物を食べました。",
        "hiragana": "でざーとにくだものをたべました。",
        "romaji": "Dezaato ni kudamono o tabemashita.",
        "english": "I ate fruit for dessert.",
        "french": "J'ai mangé des fruits en dessert."
      }
    ]
  },
  {
    "id": "dezunii",
    "japanese": "ディズニー",
    "hiragana": "でぃずにー",
    "romaji": "dizunii",
    "english": "Disney",
    "french": "Disney",
    "level": "N5",
    "category": "culture",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "彼女はディズニーが大好きです。",
        "hiragana": "かのじょはでぃずにーがだいすきです。",
        "romaji": "Kanojo wa dizunii ga daisuki desu.",
        "english": "She loves Disney.",
        "french": "Elle adore Disney."
      }
    ]
  },
  {
    "id": "doa",
    "japanese": "ドア",
    "hiragana": "どあ",
    "romaji": "doa",
    "english": "door",
    "french": "porte",
    "level": "N5",
    "category": "object",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "ドアを閉めてください。",
        "hiragana": "どあをしめてください。",
        "romaji": "Doa o shimete kudasai.",
        "english": "Please close the door.",
        "french": "Fermez la porte, s'il vous plaît."
      }
    ]
  },
  {
    "id": "doitsugo",
    "japanese": "ドイツ語",
    "hiragana": "どいつご",
    "romaji": "doitsugo",
    "english": "German (language)",
    "french": "allemand (langue)",
    "level": "N5",
    "category": "language",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "ドイツ語を習っています。",
        "hiragana": "どいつごをならっています。",
        "romaji": "Doitsugo o naratte imasu.",
        "english": "I am learning German.",
        "french": "J'apprends l'allemand."
      }
    ]
  },
  {
    "id": "dokoro",
    "japanese": "所",
    "hiragana": "ところ",
    "romaji": "tokoro",
    "english": "place",
    "french": "endroit, lieu",
    "level": "N5",
    "category": "location",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "良い所に住んでいます。",
        "hiragana": "いいところにすんでいます。",
        "romaji": "Ii tokoro ni sunde imasu.",
        "english": "I live in a good place.",
        "french": "J'habite dans un bon endroit."
      }
    ]
  },
  {
    "id": "doko",
    "japanese": "どこ",
    "hiragana": "どこ",
    "romaji": "doko",
    "english": "where",
    "french": "où",
    "level": "N5",
    "category": "expression",
    "wordType": "interrogative",
    "examples": [
      {
        "japanese": "駅はどこですか？",
        "hiragana": "えきはどこですか？",
        "romaji": "Eki wa doko desu ka?",
        "english": "Where is the station?",
        "french": "Où est la gare ?"
      }
    ]
  },
  {
    "id": "dokoka",
    "japanese": "どこか",
    "hiragana": "どこか",
    "romaji": "dokoka",
    "english": "somewhere",
    "french": "quelque part",
    "level": "N5",
    "category": "expression",
    "wordType": "adverb",
    "examples": [
      {
        "japanese": "どこかに財布を忘れました。",
        "hiragana": "どこかにさいふをわすれました。",
        "romaji": "Dokoka ni saifu o wasuremashita.",
        "english": "I forgot my wallet somewhere.",
        "french": "J'ai oublié mon portefeuille quelque part."
      }
    ]
  },
  {
    "id": "dokodemo",
    "japanese": "どこでも",
    "hiragana": "どこでも",
    "romaji": "dokodemo",
    "english": "anywhere",
    "french": "n'importe où",
    "level": "N5",
    "category": "expression",
    "wordType": "adverb",
    "examples": [
      {
        "japanese": "どこでも座ってください。",
        "hiragana": "どこでもすわってください。",
        "romaji": "Dokodemo suwatte kudasai.",
        "english": "Please sit anywhere.",
        "french": "Asseyez-vous n'importe où."
      }
    ]
  },
  {
    "id": "dokoka_tabemono",
    "japanese": "どこか食べ物",
    "hiragana": "どこかたべもの",
    "romaji": "dokoka tabemono",
    "english": "some food somewhere",
    "french": "quelque nourriture quelque part",
    "level": "N5",
    "category": "expression",
    "wordType": "phrase",
    "examples": [
      {
        "japanese": "どこか食べ物を買いましょう。",
        "hiragana": "どこかたべものをかいましょう。",
        "romaji": "Dokoka tabemono o kaimashou.",
        "english": "Let's buy some food somewhere.",
        "french": "Achetons de la nourriture quelque part."
      }
    ]
  },
  {
    "id": "dokubutsu",
    "japanese": "毒物",
    "hiragana": "どくぶつ",
    "romaji": "dokubutsu",
    "english": "poison",
    "french": "poison",
    "level": "N5",
    "category": "science",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "毒物を飲んではいけません。",
        "hiragana": "どくぶつをのんではいけません。",
        "romaji": "Dokubutsu o nonde wa ikemasen.",
        "english": "You must not drink poison.",
        "french": "Il ne faut pas boire du poison."
      }
    ]
  },
  {
    "id": "dokuritsu",
    "japanese": "独立",
    "hiragana": "どくりつ",
    "romaji": "dokuritsu",
    "english": "independence",
    "french": "indépendance",
    "level": "N5",
    "category": "concept",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "国の独立を祝います。",
        "hiragana": "くにのどくりつをいわいます。",
        "romaji": "Kuni no dokuritsu o iwaimasu.",
        "english": "We celebrate the country's independence.",
        "french": "Nous célébrons l'indépendance du pays."
      }
    ]
  },
  {
    "id": "dokusho",
    "japanese": "読書",
    "hiragana": "どくしょ",
    "romaji": "dokusho",
    "english": "reading (books)",
    "french": "lecture (de livres)",
    "level": "N5",
    "category": "hobby",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "私の趣味は読書です。",
        "hiragana": "わたしのしゅみはどくしょです。",
        "romaji": "Watashi no shumi wa dokusho desu.",
        "english": "My hobby is reading.",
        "french": "Mon passe-temps est la lecture."
      }
    ]
  },
  {
    "id": "dokushin",
    "japanese": "独身",
    "hiragana": "どくしん",
    "romaji": "dokushin",
    "english": "single, unmarried",
    "french": "célibataire",
    "level": "N5",
    "category": "status",
    "wordType": "adjective",
    "examples": [
      {
        "japanese": "彼はまだ独身です。",
        "hiragana": "かれはまだどくしんです。",
        "romaji": "Kare wa mada dokushin desu.",
        "english": "He is still single.",
        "french": "Il est encore célibataire."
      }
    ]
  },
  {
    "id": "dokutoku",
    "japanese": "独特",
    "hiragana": "どくとく",
    "romaji": "dokutoku",
    "english": "unique, peculiar",
    "french": "unique, particulier",
    "level": "N5",
    "category": "adjective",
    "wordType": "adjective",
    "examples": [
      {
        "japanese": "彼の絵は独特です。",
        "hiragana": "かれのえはどくとくです。",
        "romaji": "Kare no e wa dokutoku desu.",
        "english": "His paintings are unique.",
        "french": "Ses peintures sont uniques."
      }
    ]
  },
  {
    "id": "dokutoku_na",
    "japanese": "独特な",
    "hiragana": "どくとくな",
    "romaji": "dokutoku na",
    "english": "unique (na-adjective)",
    "french": "particulier, original",
    "level": "N5",
    "category": "adjective",
    "wordType": "adjective",
    "examples": [
      {
        "japanese": "日本料理は独特な味があります。",
        "hiragana": "にほんりょうりはどくとくなあじがあります。",
        "romaji": "Nihon ryouri wa dokutoku na aji ga arimasu.",
        "english": "Japanese food has a unique taste.",
        "french": "La cuisine japonaise a un goût particulier."
      }
    ]
  },
  {
    "id": "dore",
    "japanese": "どれ",
    "hiragana": "どれ",
    "romaji": "dore",
    "english": "which (one)",
    "french": "lequel",
    "level": "N5",
    "category": "expression",
    "wordType": "interrogative",
    "examples": [
      {
        "japanese": "どれが好きですか？",
        "hiragana": "どれがすきですか？",
        "romaji": "Dore ga suki desu ka?",
        "english": "Which one do you like?",
        "french": "Lequel aimes-tu ?"
      }
    ]
  },
  {
    "id": "doremo",
    "japanese": "どれも",
    "hiragana": "どれも",
    "romaji": "doremo",
    "english": "all (of them)",
    "french": "tous",
    "level": "N5",
    "category": "expression",
    "wordType": "adverb",
    "examples": [
      {
        "japanese": "どれも好きです。",
        "hiragana": "どれもすきです。",
        "romaji": "Dore mo suki desu.",
        "english": "I like all of them.",
        "french": "Je les aime tous."
      }
    ]
  },
  {
    "id": "doryoku",
    "japanese": "努力",
    "hiragana": "どりょく",
    "romaji": "doryoku",
    "english": "effort",
    "french": "effort",
    "level": "N5",
    "category": "concept",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "努力すれば成功します。",
        "hiragana": "どりょくすればせいこうします。",
        "romaji": "Doryoku sureba seikou shimasu.",
        "english": "If you make an effort, you will succeed.",
        "french": "Si tu fais des efforts, tu réussiras."
      }
    ]
  },
  {
    "id": "doushite",
    "japanese": "どうして",
    "hiragana": "どうして",
    "romaji": "doushite",
    "english": "why",
    "french": "pourquoi",
    "level": "N5",
    "category": "expression",
    "wordType": "interrogative",
    "examples": [
      {
        "japanese": "どうして遅れたのですか？",
        "hiragana": "どうしておくれたのですか？",
        "romaji": "Doushite okureta no desu ka?",
        "english": "Why were you late?",
        "french": "Pourquoi es-tu en retard ?"
      }
    ]
  },
  {
    "id": "douzo",
    "japanese": "どうぞ",
    "hiragana": "どうぞ",
    "romaji": "douzo",
    "english": "please, here you go",
    "french": "s'il vous plaît, je vous en prie",
    "level": "N5",
    "category": "expression",
    "wordType": "phrase",
    "examples": [
      {
        "japanese": "どうぞお入りください。",
        "hiragana": "どうぞおはいりください。",
        "romaji": "Douzo ohairi kudasai.",
        "english": "Please come in.",
        "french": "Je vous en prie, entrez."
      }
    ]
  },
  {
    "id": "doubutsu",
    "japanese": "動物",
    "hiragana": "どうぶつ",
    "romaji": "doubutsu",
    "english": "animal",
    "french": "animal",
    "level": "N5",
    "category": "nature",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "動物が好きです。",
        "hiragana": "どうぶつがすきです。",
        "romaji": "Doubutsu ga suki desu.",
        "english": "I like animals.",
        "french": "J'aime les animaux."
      }
    ]
  },
  {
    "id": "doubutsuen",
    "japanese": "動物園",
    "hiragana": "どうぶつえん",
    "romaji": "doubutsuen",
    "english": "zoo",
    "french": "zoo",
    "level": "N5",
    "category": "place",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "動物園に行きました。",
        "hiragana": "どうぶつえんにいきました。",
        "romaji": "Doubutsuen ni ikimashita.",
        "english": "I went to the zoo.",
        "french": "Je suis allé au zoo."
      }
    ]
  },
  {
    "id": "dougu",
    "japanese": "道具",
    "hiragana": "どうぐ",
    "romaji": "dougu",
    "english": "tool",
    "french": "outil",
    "level": "N5",
    "category": "object",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "新しい道具を買いました。",
        "hiragana": "あたらしいどうぐをかいました。",
        "romaji": "Atarashii dougu o kaimashita.",
        "english": "I bought new tools.",
        "french": "J'ai acheté de nouveaux outils."
      }
    ]
  },
  {
    "id": "douro",
    "japanese": "道路",
    "hiragana": "どうろ",
    "romaji": "douro",
    "english": "road",
    "french": "route",
    "level": "N5",
    "category": "transport",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "道路を渡ります。",
        "hiragana": "どうろをわたります。",
        "romaji": "Douro o watarimasu.",
        "english": "I cross the road.",
        "french": "Je traverse la route."
      }
    ]
  },
  {
    "id": "fuku",
    "japanese": "服",
    "hiragana": "ふく",
    "romaji": "fuku",
    "english": "clothes",
    "french": "vêtements",
    "level": "N5",
    "category": "clothing",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "新しい服を着ました。",
        "hiragana": "あたらしいふくをきました。",
        "romaji": "Atarashii fuku o kimashita.",
        "english": "I wore new clothes.",
        "french": "J'ai mis des vêtements neufs."
      }
    ]
  },
  {
    "id": "heya",
    "japanese": "部屋",
    "hiragana": "へや",
    "romaji": "heya",
    "english": "room",
    "french": "chambre",
    "level": "N5",
    "category": "place",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "部屋を掃除しました。",
        "hiragana": "へやをそうじしました。",
        "romaji": "Heya o souji shimashita.",
        "english": "I cleaned the room.",
        "french": "J'ai nettoyé la chambre."
      }
    ]
  },
  {
    "id": "mizu_new",
    "japanese": "水",
    "hiragana": "みず",
    "romaji": "mizu",
    "english": "water",
    "french": "eau",
    "level": "N5",
    "category": "nature",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "水を飲みます。",
        "hiragana": "みずをのみます。",
        "romaji": "Mizu o nomimasu.",
        "english": "I drink water.",
        "french": "Je bois de l'eau."
      }
    ]
  },
  {
    "id": "hana",
    "japanese": "花",
    "hiragana": "はな",
    "romaji": "hana",
    "english": "flower",
    "french": "fleur",
    "level": "N5",
    "category": "nature",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "花がきれいです。",
        "hiragana": "はながきれいです。",
        "romaji": "Hana ga kirei desu.",
        "english": "The flowers are beautiful.",
        "french": "Les fleurs sont belles."
      }
    ]
  },
  {
    "id": "toki",
    "japanese": "時",
    "hiragana": "とき",
    "romaji": "toki",
    "english": "time, moment",
    "french": "temps, moment",
    "level": "N5",
    "category": "time",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "学生の時は忙しかったです。",
        "hiragana": "がくせいのときはいそがしかったです。",
        "romaji": "Gakusei no toki wa isogashikatta desu.",
        "english": "I was busy when I was a student.",
        "french": "J'étais occupé quand j'étais étudiant."
      }
    ]
  },
  {
    "id": "tomodachi",
    "japanese": "友達",
    "hiragana": "ともだち",
    "romaji": "tomodachi",
    "english": "friend",
    "french": "ami",
    "level": "N5",
    "category": "people",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "友達と話しました。",
        "hiragana": "ともだちとはなしました。",
        "romaji": "Tomodachi to hanashimashita.",
        "english": "I talked with a friend.",
        "french": "J'ai parlé avec un ami."
      }
    ]
  },
  {
    "id": "tomodachitachi",
    "japanese": "友達たち",
    "hiragana": "ともだちたち",
    "romaji": "tomodachitachi",
    "english": "friends",
    "french": "amis",
    "level": "N5",
    "category": "people",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "友達たちと旅行しました。",
        "hiragana": "ともだちたちとりょこうしました。",
        "romaji": "Tomodachitachi to ryokou shimashita.",
        "english": "I traveled with friends.",
        "french": "J'ai voyagé avec mes amis."
      }
    ]
  },
  {
    "id": "tori",
    "japanese": "鳥",
    "hiragana": "とり",
    "romaji": "tori",
    "english": "bird",
    "french": "oiseau",
    "level": "N5",
    "category": "animal",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "鳥が空を飛んでいます。",
        "hiragana": "とりがそらをとんでいます。",
        "romaji": "Tori ga sora o tonde imasu.",
        "english": "The bird is flying in the sky.",
        "french": "L'oiseau vole dans le ciel."
      }
    ]
  },
  {
    "id": "toriniku",
    "japanese": "鶏肉",
    "hiragana": "とりにく",
    "romaji": "toriniku",
    "english": "chicken (meat)",
    "french": "poulet (viande)",
    "level": "N5",
    "category": "food",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "鶏肉を食べます。",
        "hiragana": "とりにくをたべます。",
        "romaji": "Toriniku o tabemasu.",
        "english": "I eat chicken.",
        "french": "Je mange du poulet."
      }
    ]
  },
  {
    "id": "toru",
    "japanese": "取る",
    "hiragana": "とる",
    "romaji": "toru",
    "english": "to take",
    "french": "prendre",
    "level": "N5",
    "category": "verb",
    "wordType": "verb",
    "examples": [
      {
        "japanese": "写真を取ります。",
        "hiragana": "しゃしんをとります。",
        "romaji": "Shashin o torimasu.",
        "english": "I take a photo.",
        "french": "Je prends une photo."
      }
    ]
  },
  {
    "id": "torikesu",
    "japanese": "取り消す",
    "hiragana": "とりけす",
    "romaji": "torikesu",
    "english": "to cancel",
    "french": "annuler",
    "level": "N5",
    "category": "verb",
    "wordType": "verb",
    "examples": [
      {
        "japanese": "予約を取り消しました。",
        "hiragana": "よやくをとりけしました。",
        "romaji": "Yoyaku o torikeshimashita.",
        "english": "I canceled the reservation.",
        "french": "J'ai annulé la réservation."
      }
    ]
  },
  {
    "id": "torinokosu",
    "japanese": "取り残す",
    "hiragana": "とりのこす",
    "romaji": "torinokosu",
    "english": "to leave behind",
    "french": "laisser derrière",
    "level": "N5",
    "category": "verb",
    "wordType": "verb",
    "examples": [
      {
        "japanese": "かばんを取り残しました。",
        "hiragana": "かばんをとりのこしました。",
        "romaji": "Kaban o torinokoshimashita.",
        "english": "I left my bag behind.",
        "french": "J'ai laissé mon sac derrière."
      }
    ]
  },
  {
    "id": "toru_yasumi",
    "japanese": "休みを取る",
    "hiragana": "やすみをとる",
    "romaji": "yasumi o toru",
    "english": "to take a break",
    "french": "prendre un congé",
    "level": "N5",
    "category": "expression",
    "wordType": "verb",
    "examples": [
      {
        "japanese": "夏休みを取ります。",
        "hiragana": "なつやすみをとります。",
        "romaji": "Natsu yasumi o torimasu.",
        "english": "I take summer vacation.",
        "french": "Je prends des vacances d'été."
      }
    ]
  },
  {
    "id": "toru_kopi",
    "japanese": "コピーを取る",
    "hiragana": "こぴーをとる",
    "romaji": "kopii o toru",
    "english": "to make a copy",
    "french": "faire une copie",
    "level": "N5",
    "category": "expression",
    "wordType": "verb",
    "examples": [
      {
        "japanese": "資料のコピーを取ってください。",
        "hiragana": "しりょうのこぴーをとってください。",
        "romaji": "Shiryou no kopii o totte kudasai.",
        "english": "Please make a copy of the documents.",
        "french": "Faites une copie des documents."
      }
    ]
  },
  {
    "id": "toshokan",
    "japanese": "図書館",
    "hiragana": "としょかん",
    "romaji": "toshokan",
    "english": "library",
    "french": "bibliothèque",
    "level": "N5",
    "category": "place",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "図書館で勉強します。",
        "hiragana": "としょかんでべんきょうします。",
        "romaji": "Toshokan de benkyou shimasu.",
        "english": "I study at the library.",
        "french": "J'étudie à la bibliothèque."
      }
    ]
  },
  {
    "id": "toshi",
    "japanese": "年",
    "hiragana": "とし",
    "romaji": "toshi",
    "english": "year, age",
    "french": "année, âge",
    "level": "N5",
    "category": "time",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "新しい年が始まりました。",
        "hiragana": "あたらしいとしがはじまりました。",
        "romaji": "Atarashii toshi ga hajimarimashita.",
        "english": "The new year has started.",
        "french": "La nouvelle année a commencé."
      }
    ]
  },
  {
    "id": "toriatsukai",
    "japanese": "取り扱い",
    "hiragana": "とりあつかい",
    "romaji": "toriatsukai",
    "english": "handling",
    "french": "manipulation",
    "level": "N5",
    "category": "work",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "火の取り扱いに注意してください。",
        "hiragana": "ひのとりあつかいにちゅういしてください。",
        "romaji": "Hi no toriatsukai ni chuui shite kudasai.",
        "english": "Be careful when handling fire.",
        "french": "Faites attention en manipulant le feu."
      }
    ]
  },
  {
    "id": "torihiki",
    "japanese": "取引",
    "hiragana": "とりひき",
    "romaji": "torihiki",
    "english": "transaction, deal",
    "french": "transaction, affaire",
    "level": "N5",
    "category": "economy",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "会社と取引をしました。",
        "hiragana": "かいしゃととりひきをしました。",
        "romaji": "Kaisha to torihiki o shimashita.",
        "english": "I made a deal with a company.",
        "french": "J'ai conclu une affaire avec une entreprise."
      }
    ]
  },
  {
    "id": "torikeshi",
    "japanese": "取消し",
    "hiragana": "とりけし",
    "romaji": "torikeshi",
    "english": "cancellation",
    "french": "annulation",
    "level": "N5",
    "category": "concept",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "試合は取消しになりました。",
        "hiragana": "しあいはとりけしになりました。",
        "romaji": "Shiai wa torikeshi ni narimashita.",
        "english": "The match was canceled.",
        "french": "Le match a été annulé."
      }
    ]
  },
  {
    "id": "toroku",
    "japanese": "登録",
    "hiragana": "とうろく",
    "romaji": "touroku",
    "english": "registration",
    "french": "inscription, enregistrement",
    "level": "N5",
    "category": "concept",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "学校に登録しました。",
        "hiragana": "がっこうにとうろくしました。",
        "romaji": "Gakkou ni touroku shimashita.",
        "english": "I registered at the school.",
        "french": "Je me suis inscrit à l'école."
      }
    ]
  },
  {
    "id": "toru_shashin",
    "japanese": "写真を撮る",
    "hiragana": "しゃしんをとる",
    "romaji": "shashin o toru",
    "english": "to take a photo",
    "french": "prendre une photo",
    "level": "N5",
    "category": "expression",
    "wordType": "verb",
    "examples": [
      {
        "japanese": "旅行で写真を撮りました。",
        "hiragana": "りょこうでしゃしんをとりました。",
        "romaji": "Ryokou de shashin o torimashita.",
        "english": "I took pictures during the trip.",
        "french": "J'ai pris des photos pendant le voyage."
      }
    ]
  },
  {
    "id": "toru_mondai",
    "japanese": "問題を取る",
    "hiragana": "もんだいをとる",
    "romaji": "mondai o toru",
    "english": "to take a problem/question",
    "french": "prendre une question/problème",
    "level": "N5",
    "category": "school",
    "wordType": "verb",
    "examples": [
      {
        "japanese": "テストで難しい問題を取りました。",
        "hiragana": "てすとでむずかしいもんだいをとりました。",
        "romaji": "Tesuto de muzukashii mondai o torimashita.",
        "english": "I took the difficult problem in the test.",
        "french": "J'ai pris la question difficile à l'examen."
      }
    ]
  },
  {
    "id": "toru_tokui",
    "japanese": "得意を取る",
    "hiragana": "とくいをとる",
    "romaji": "tokui o toru",
    "english": "to take advantage",
    "french": "profiter, tirer avantage",
    "level": "N5",
    "category": "expression",
    "wordType": "verb",
    "examples": [
      {
        "japanese": "彼は機会を得意に取りました。",
        "hiragana": "かれはきかいをとくいにとりました。",
        "romaji": "Kare wa kikai o tokui ni torimashita.",
        "english": "He took advantage of the opportunity.",
        "french": "Il a profité de l'occasion."
      }
    ]
  },
  {
    "id": "totte",
    "japanese": "取って",
    "hiragana": "とって",
    "romaji": "totte",
    "english": "take (imperative)",
    "french": "prends, prenez",
    "level": "N5",
    "category": "expression",
    "wordType": "verb",
    "examples": [
      {
        "japanese": "それを取ってください。",
        "hiragana": "それをとってください。",
        "romaji": "Sore o totte kudasai.",
        "english": "Please take that.",
        "french": "Prenez ça, s'il vous plaît."
      }
    ]
  },
  {
    "id": "totteoku",
    "japanese": "取っておく",
    "hiragana": "とっておく",
    "romaji": "totteoku",
    "english": "to set aside, save",
    "french": "mettre de côté, garder",
    "level": "N5",
    "category": "verb",
    "wordType": "verb",
    "examples": [
      {
        "japanese": "お金を取っておきます。",
        "hiragana": "おかねをとっておきます。",
        "romaji": "Okane o totte okimasu.",
        "english": "I will set aside money.",
        "french": "Je vais mettre de l'argent de côté."
      }
    ]
  },
  {
    "id": "totsuzen",
    "japanese": "突然",
    "hiragana": "とつぜん",
    "romaji": "totsuzen",
    "english": "suddenly",
    "french": "soudainement",
    "level": "N5",
    "category": "adverb",
    "wordType": "adverb",
    "examples": [
      {
        "japanese": "突然雨が降りました。",
        "hiragana": "とつぜんあめがふりました。",
        "romaji": "Totsuzen ame ga furimashita.",
        "english": "It suddenly rained.",
        "french": "Il a soudainement plu."
      }
    ]
  },
  {
    "id": "tottemo",
    "japanese": "とっても",
    "hiragana": "とっても",
    "romaji": "tottemo",
    "english": "very, extremely",
    "french": "très, extrêmement",
    "level": "N5",
    "category": "adverb",
    "wordType": "adverb",
    "examples": [
      {
        "japanese": "彼はとっても元気です。",
        "hiragana": "かれはとってもげんきです。",
        "romaji": "Kare wa tottemo genki desu.",
        "english": "He is very energetic.",
        "french": "Il est très en forme."
      }
    ]
  },
  {
    "id": "totteoku_koto",
    "japanese": "取っておくこと",
    "hiragana": "とっておくこと",
    "romaji": "totteoku koto",
    "english": "something kept aside",
    "french": "chose mise de côté",
    "level": "N5",
    "category": "expression",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "それは取っておくことにします。",
        "hiragana": "それはとっておくことにします。",
        "romaji": "Sore wa totteoku koto ni shimasu.",
        "english": "I will keep that aside.",
        "french": "Je vais garder ça de côté."
      }
    ]
  },
  {
    "id": "tou",
    "japanese": "十",
    "hiragana": "とう",
    "romaji": "tou",
    "english": "ten (counter)",
    "french": "dix",
    "level": "N5",
    "category": "number",
    "wordType": "counter",
    "examples": [
      {
        "japanese": "りんごを十個買いました。",
        "hiragana": "りんごをとうこかいました。",
        "romaji": "Ringo o tou ko kaimashita.",
        "english": "I bought ten apples.",
        "french": "J'ai acheté dix pommes."
      }
    ]
  },
  {
    "id": "tounai",
    "japanese": "島内",
    "hiragana": "とうない",
    "romaji": "tounai",
    "english": "inside the island",
    "french": "dans l'île",
    "level": "N5",
    "category": "location",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "島内を歩きました。",
        "hiragana": "とうないをあるきました。",
        "romaji": "Tounai o arukimashita.",
        "english": "I walked inside the island.",
        "french": "J'ai marché dans l'île."
      }
    ]
  },
  {
    "id": "tounyuu",
    "japanese": "豆乳",
    "hiragana": "とうにゅう",
    "romaji": "tounyuu",
    "english": "soy milk",
    "french": "lait de soja",
    "level": "N5",
    "category": "food",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "朝ごはんに豆乳を飲みます。",
        "hiragana": "あさごはんにとうにゅうをのみます。",
        "romaji": "Asagohan ni tounyuu o nomimasu.",
        "english": "I drink soy milk for breakfast.",
        "french": "Je bois du lait de soja au petit déjeuner."
      }
    ]
  },
  {
    "id": "touzoku",
    "japanese": "盗賊",
    "hiragana": "とうぞく",
    "romaji": "touzoku",
    "english": "thief, bandit",
    "french": "voleur, bandit",
    "level": "N5",
    "category": "people",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "盗賊が捕まりました。",
        "hiragana": "とうぞくがつかまりました。",
        "romaji": "Touzoku ga tsukamarimashita.",
        "english": "The thief was caught.",
        "french": "Le voleur a été attrapé."
      }
    ]
  },
  {
    "id": "tousan",
    "japanese": "父さん",
    "hiragana": "とうさん",
    "romaji": "tousan",
    "english": "father (casual)",
    "french": "papa",
    "level": "N5",
    "category": "family",
    "wordType": "noun",
    "examples": [
      {
        "japanese": "父さんは元気です。",
        "hiragana": "とうさんはげんきです。",
        "romaji": "Tousan wa genki desu.",
        "english": "Dad is fine.",
        "french": "Papa va bien."
      }
    ]
  },
  {
    id: "gaikoku",
    japanese: "外国",
    hiragana: "がいこく",
    romaji: "gaikoku",
    english: "foreign country",
    french: "pays étranger",
    level: "N5",
    category: "place",
    wordType: "noun",
    examples: [
      {
        japanese: "外国へ旅行します。",
        hiragana: "がいこくへりょこうします。",
        romaji: "Gaikoku e ryokou shimasu.",
        english: "I travel abroad.",
        french: "Je voyage à l'étranger."
      }
    ]
  },
  {
    id: "gaikokujin",
    japanese: "外国人",
    hiragana: "がいこくじん",
    romaji: "gaikokujin",
    english: "foreigner",
    french: "étranger",
    level: "N5",
    category: "people",
    wordType: "noun",
    examples: [
      {
        japanese: "彼は外国人です。",
        hiragana: "かれはがいこくじんです。",
        romaji: "Kare wa gaikokujin desu.",
        english: "He is a foreigner.",
        french: "Il est étranger."
      }
    ]
  },
  {
    id: "kaisha",
    japanese: "会社",
    hiragana: "かいしゃ",
    romaji: "kaisha",
    english: "company",
    french: "entreprise",
    level: "N5",
    category: "work",
    wordType: "noun",
    examples: [
      {
        japanese: "会社で働いています。",
        hiragana: "かいしゃではたらいています。",
        romaji: "Kaisha de hataraite imasu.",
        english: "I work at a company.",
        french: "Je travaille dans une entreprise."
      }
    ]
  },
  {
    id: "kaidan",
    japanese: "階段",
    hiragana: "かいだん",
    romaji: "kaidan",
    english: "stairs",
    french: "escaliers",
    level: "N5",
    category: "building",
    wordType: "noun",
    examples: [
      {
        japanese: "階段を上ります。",
        hiragana: "かいだんをのぼります。",
        romaji: "Kaidan o noborimasu.",
        english: "I go up the stairs.",
        french: "Je monte les escaliers."
      }
    ]
  },
  {
    id: "kaimono",
    japanese: "買い物",
    hiragana: "かいもの",
    romaji: "kaimono",
    english: "shopping",
    french: "courses, achats",
    level: "N5",
    category: "activity",
    wordType: "noun",
    examples: [
      {
        japanese: "母と買い物に行きます。",
        hiragana: "ははとかいものにいきます。",
        romaji: "Haha to kaimono ni ikimasu.",
        english: "I go shopping with my mother.",
        french: "Je vais faire des courses avec ma mère."
      }
    ]
  },
  {
    id: "kau",
    japanese: "買う",
    hiragana: "かう",
    romaji: "kau",
    english: "to buy",
    french: "acheter",
    level: "N5",
    category: "verb",
    wordType: "godan verb",
    examples: [
      {
        japanese: "新しい靴を買いました。",
        hiragana: "あたらしいくつをかいました。",
        romaji: "Atarashii kutsu o kaimashita.",
        english: "I bought new shoes.",
        french: "J'ai acheté de nouvelles chaussures."
      }
    ]
  },
  {
    id: "kaesu",
    japanese: "返す",
    hiragana: "かえす",
    romaji: "kaesu",
    english: "to return (something)",
    french: "rendre (quelque chose)",
    level: "N5",
    category: "verb",
    wordType: "godan verb",
    examples: [
      {
        japanese: "本を友達に返しました。",
        hiragana: "ほんをともだちにかえしました。",
        romaji: "Hon o tomodachi ni kaeshimashita.",
        english: "I returned the book to my friend.",
        french: "J'ai rendu le livre à mon ami."
      }
    ]
  },
  {
    id: "kaeru",
    japanese: "帰る",
    hiragana: "かえる",
    romaji: "kaeru",
    english: "to go back; to return (home)",
    french: "rentrer; retourner",
    level: "N5",
    category: "verb",
    wordType: "godan verb",
    examples: [
      {
        japanese: "学校から家に帰ります。",
        hiragana: "がっこうからいえにかえります。",
        romaji: "Gakkou kara ie ni kaerimasu.",
        english: "I return home from school.",
        french: "Je rentre à la maison depuis l'école."
      }
    ]
  },
  {
    id: "kakaru",
    japanese: "かかる",
    hiragana: "かかる",
    romaji: "kakaru",
    english: "to take (time, money)",
    french: "prendre (temps, argent)",
    level: "N5",
    category: "verb",
    wordType: "godan verb",
    examples: [
      {
        japanese: "駅まで30分かかります。",
        hiragana: "えきまでさんじゅっぷんかかります。",
        romaji: "Eki made sanjuppun kakarimasu.",
        english: "It takes 30 minutes to the station.",
        french: "Il faut 30 minutes pour aller à la gare."
      }
    ]
  },
  {
    id: "kagi",
    japanese: "鍵",
    hiragana: "かぎ",
    romaji: "kagi",
    english: "key",
    french: "clé",
    level: "N5",
    category: "object",
    wordType: "noun",
    examples: [
      {
        japanese: "鍵をなくしました。",
        hiragana: "かぎをなくしました。",
        romaji: "Kagi o nakushimashita.",
        english: "I lost my key.",
        french: "J'ai perdu ma clé."
      }
    ]
  },
  {
    id: "kaku",
    japanese: "書く",
    hiragana: "かく",
    romaji: "kaku",
    english: "to write",
    french: "écrire",
    level: "N5",
    category: "verb",
    wordType: "godan verb",
    examples: [
      {
        japanese: "手紙を書きます。",
        hiragana: "てがみをかきます。",
        romaji: "Tegami o kakimasu.",
        english: "I write a letter.",
        french: "J'écris une lettre."
      }
    ]
  },
  {
    id: "gakusei",
    japanese: "学生",
    hiragana: "がくせい",
    romaji: "gakusei",
    english: "student",
    french: "étudiant",
    level: "N5",
    category: "people",
    wordType: "noun",
    examples: [
      {
        japanese: "私は学生です。",
        hiragana: "わたしはがくせいです。",
        romaji: "Watashi wa gakusei desu.",
        english: "I am a student.",
        french: "Je suis étudiant."
      }
    ]
  },
  {
    id: "kakeru",
    japanese: "かける",
    hiragana: "かける",
    romaji: "kakeru",
    english: "to call (phone); to hang",
    french: "téléphoner; accrocher",
    level: "N5",
    category: "verb",
    wordType: "ichidan verb",
    examples: [
      {
        japanese: "友達に電話をかけます。",
        hiragana: "ともだちにでんわをかけます。",
        romaji: "Tomodachi ni denwa o kakemasu.",
        english: "I call my friend.",
        french: "Je téléphone à mon ami."
      }
    ]
  },
  {
    id: "kasa",
    japanese: "傘",
    hiragana: "かさ",
    romaji: "kasa",
    english: "umbrella",
    french: "parapluie",
    level: "N5",
    category: "object",
    wordType: "noun",
    examples: [
      {
        japanese: "傘を持って行きます。",
        hiragana: "かさをもっていきます。",
        romaji: "Kasa o motte ikimasu.",
        english: "I take an umbrella.",
        french: "J'emporte un parapluie."
      }
    ]
  },
  {
    id: "kasu",
    japanese: "貸す",
    hiragana: "かす",
    romaji: "kasu",
    english: "to lend",
    french: "prêter",
    level: "N5",
    category: "verb",
    wordType: "godan verb",
    examples: [
      {
        japanese: "友達にお金を貸しました。",
        hiragana: "ともだちにおかねをかしました。",
        romaji: "Tomodachi ni okane o kashimashita.",
        english: "I lent money to a friend.",
        french: "J'ai prêté de l'argent à un ami."
      }
    ]
  },
  {
    id: "kaze_wind",
    japanese: "風",
    hiragana: "かぜ",
    romaji: "kaze",
    english: "wind",
    french: "vent",
    level: "N5",
    category: "nature",
    wordType: "noun",
    examples: [
      {
        japanese: "今日は風が強いです。",
        hiragana: "きょうはかぜがつよいです。",
        romaji: "Kyou wa kaze ga tsuyoi desu.",
        english: "The wind is strong today.",
        french: "Le vent est fort aujourd'hui."
      }
    ]
  },
  {
    id: "kaze_cold",
    japanese: "風邪",
    hiragana: "かぜ",
    romaji: "kaze",
    english: "cold (illness)",
    french: "rhume",
    level: "N5",
    category: "health",
    wordType: "noun",
    examples: [
      {
        japanese: "風邪をひきました。",
        hiragana: "かぜをひきました。",
        romaji: "Kaze o hikimashita.",
        english: "I caught a cold.",
        french: "J'ai attrapé un rhume."
      }
    ]
  },
  {
    id: "kazoku",
    japanese: "家族",
    hiragana: "かぞく",
    romaji: "kazoku",
    english: "family",
    french: "famille",
    level: "N5",
    category: "family",
    wordType: "noun",
    examples: [
      {
        japanese: "家族と一緒に住んでいます。",
        hiragana: "かぞくといっしょにすんでいます。",
        romaji: "Kazoku to issho ni sunde imasu.",
        english: "I live with my family.",
        french: "Je vis avec ma famille."
      }
    ]
  },
  {
    id: "kata",
    japanese: "方",
    hiragana: "かた",
    romaji: "kata",
    english: "person (polite); way of doing",
    french: "personne (poli); manière de faire",
    level: "N5",
    category: "expression",
    wordType: "noun",
    examples: [
      {
        japanese: "日本語の勉強の仕方を教えてください。",
        hiragana: "にほんごのべんきょうのしかたをおしえてください。",
        romaji: "Nihongo no benkyou no shikata o oshiete kudasai.",
        english: "Please teach me how to study Japanese.",
        french: "Apprenez-moi comment étudier le japonais."
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
        japanese: "学校へ行きます。",
        hiragana: "がっこうへいきます。",
        romaji: "Gakkou e ikimasu.",
        english: "I go to school.",
        french: "Je vais à l'école."
      }
    ]
  },
  {
    id: "kappu",
    japanese: "カップ",
    hiragana: "かっぷ",
    romaji: "kappu",
    english: "cup",
    french: "tasse; gobelet",
    level: "N5",
    category: "object",
    wordType: "noun",
    examples: [
      {
        japanese: "カップでコーヒーを飲みます。",
        hiragana: "かっぷでこーひーをのみます。",
        romaji: "Kappu de koohii o nomimasu.",
        english: "I drink coffee in a cup.",
        french: "Je bois du café dans une tasse."
      }
    ]
  },
  {
    id: "katei",
    japanese: "家庭",
    hiragana: "かてい",
    romaji: "katei",
    english: "home; household",
    french: "foyer; ménage",
    level: "N5",
    category: "family",
    wordType: "noun",
    examples: [
      {
        japanese: "家庭を大切にします。",
        hiragana: "かていをたいせつにします。",
        romaji: "Katei o taisetsu ni shimasu.",
        english: "I cherish my home life.",
        french: "Je tiens à ma vie de famille."
      }
    ]
  },
  {
    id: "kado",
    japanese: "角",
    hiragana: "かど",
    romaji: "kado",
    english: "corner",
    french: "coin, angle",
    level: "N5",
    category: "location",
    wordType: "noun",
    examples: [
      {
        japanese: "角を右に曲がってください。",
        hiragana: "かどをみぎにまがってください。",
        romaji: "Kado o migi ni magatte kudasai.",
        english: "Turn right at the corner.",
        french: "Tournez à droite au coin."
      }
    ]
  },
  {
    id: "kaban",
    japanese: "鞄",
    hiragana: "かばん",
    romaji: "kaban",
    english: "bag",
    french: "sac",
    level: "N5",
    category: "object",
    wordType: "noun",
    examples: [
      {
        japanese: "新しい鞄を買いました。",
        hiragana: "あたらしいかばんをかいました。",
        romaji: "Atarashii kaban o kaimashita.",
        english: "I bought a new bag.",
        french: "J'ai acheté un nouveau sac."
      }
    ]
  },
  {
    id: "kabin",
    japanese: "花瓶",
    hiragana: "かびん",
    romaji: "kabin",
    english: "vase",
    french: "vase",
    level: "N5",
    category: "object",
    wordType: "noun",
    examples: [
      {
        japanese: "花瓶に花を入れました。",
        hiragana: "かびんにはなをいれました。",
        romaji: "Kabin ni hana o iremashita.",
        english: "I put flowers in the vase.",
        french: "J'ai mis des fleurs dans le vase."
      }
    ]
  },
  {
    id: "kami",
    japanese: "紙",
    hiragana: "かみ",
    romaji: "kami",
    english: "paper",
    french: "papier",
    level: "N5",
    category: "object",
    wordType: "noun",
    examples: [
      {
        japanese: "紙に名前を書いてください。",
        hiragana: "かみになまえをかいてください。",
        romaji: "Kami ni namae o kaite kudasai.",
        english: "Please write your name on the paper.",
        french: "Écrivez votre nom sur le papier."
      }
    ]
  },
  {
    id: "kamera",
    japanese: "カメラ",
    hiragana: "かめら",
    romaji: "kamera",
    english: "camera",
    french: "appareil photo",
    level: "N5",
    category: "object",
    wordType: "noun",
    examples: [
      {
        japanese: "カメラで写真を撮ります。",
        hiragana: "かめらでしゃしんをとります。",
        romaji: "Kamera de shashin o torimasu.",
        english: "I take pictures with a camera.",
        french: "Je prends des photos avec un appareil photo."
      }
    ]
  },
  {
    id: "kayoubi",
    japanese: "火曜日",
    hiragana: "かようび",
    romaji: "kayoubi",
    english: "Tuesday",
    french: "mardi",
    level: "N5",
    category: "time",
    wordType: "noun",
    examples: [
      {
        japanese: "火曜日に会いましょう。",
        hiragana: "かようびにあいましょう。",
        romaji: "Kayoubi ni aimashou.",
        english: "Let's meet on Tuesday.",
        french: "Rencontrons-nous mardi."
      }
    ]
  },
  {
    id: "karai",
    japanese: "辛い",
    hiragana: "からい",
    romaji: "karai",
    english: "spicy",
    french: "épicé",
    level: "N5",
    category: "food",
    wordType: "i-adjective",
    examples: [
      {
        japanese: "カレーは辛いです。",
        hiragana: "かれーはからいです。",
        romaji: "Karee wa karai desu.",
        english: "Curry is spicy.",
        french: "Le curry est épicé."
      }
    ]
  },
  {
    id: "karada",
    japanese: "体",
    hiragana: "からだ",
    romaji: "karada",
    english: "body",
    french: "corps",
    level: "N5",
    category: "body",
    wordType: "noun",
    examples: [
      {
        japanese: "体に気をつけてください。",
        hiragana: "からだにきをつけてください。",
        romaji: "Karada ni ki o tsukete kudasai.",
        english: "Please take care of your body.",
        french: "Prenez soin de votre corps."
      }
    ]
  },
  {
    id: "kariru",
    japanese: "借りる",
    hiragana: "かりる",
    romaji: "kariru",
    english: "to borrow",
    french: "emprunter",
    level: "N5",
    category: "verb",
    wordType: "ichidan verb",
    examples: [
      {
        japanese: "友達から本を借りました。",
        hiragana: "ともだちからほんをかりました。",
        romaji: "Tomodachi kara hon o karimashita.",
        english: "I borrowed a book from a friend.",
        french: "J'ai emprunté un livre à un ami."
      }
    ]
  },
  {
    id: "karui",
    japanese: "軽い",
    hiragana: "かるい",
    romaji: "karui",
    english: "light (not heavy)",
    french: "léger",
    level: "N5",
    category: "adjective",
    wordType: "i-adjective",
    examples: [
      {
        japanese: "このかばんは軽いです。",
        hiragana: "このかばんはかるいです。",
        romaji: "Kono kaban wa karui desu.",
        english: "This bag is light.",
        french: "Ce sac est léger."
      }
    ]
  },
  {
    id: "karee",
    japanese: "カレー",
    hiragana: "かれー",
    romaji: "karee",
    english: "curry",
    french: "curry",
    level: "N5",
    category: "food",
    wordType: "noun",
    examples: [
      {
        japanese: "カレーを作ります。",
        hiragana: "かれーをつくります。",
        romaji: "Karee o tsukurimasu.",
        english: "I make curry.",
        french: "Je prépare du curry."
      }
    ]
  },
  {
    id: "karendaa",
    japanese: "カレンダー",
    hiragana: "かれんだー",
    romaji: "karendaa",
    english: "calendar",
    french: "calendrier",
    level: "N5",
    category: "object",
    wordType: "noun",
    examples: [
      {
        japanese: "カレンダーを壁に掛けます。",
        hiragana: "かれんだーをかべにかけます。",
        romaji: "Karendaa o kabe ni kakemasu.",
        english: "I hang a calendar on the wall.",
        french: "J'accroche un calendrier au mur."
      }
    ]
  },
  {
    id: "kawa",
    japanese: "川",
    hiragana: "かわ",
    romaji: "kawa",
    english: "river",
    french: "rivière, fleuve",
    level: "N5",
    category: "nature",
    wordType: "noun",
    examples: [
      {
        japanese: "川で魚を釣ります。",
        hiragana: "かわでさかなをつります。",
        romaji: "Kawa de sakana o tsurimasu.",
        english: "I fish in the river.",
        french: "Je pêche dans la rivière."
      }
    ]
  },
  {
    id: "kawaii",
    japanese: "可愛い",
    hiragana: "かわいい",
    romaji: "kawaii",
    english: "cute",
    french: "mignon",
    level: "N5",
    category: "adjective",
    wordType: "i-adjective",
    examples: [
      {
        japanese: "その猫はとても可愛いです。",
        hiragana: "そのねこはとてもかわいいです。",
        romaji: "Sono neko wa totemo kawaii desu.",
        english: "That cat is very cute.",
        french: "Ce chat est très mignon."
      }
    ]
  },
  {
    id: "kanji",
    japanese: "漢字",
    hiragana: "かんじ",
    romaji: "kanji",
    english: "kanji (Chinese character)",
    french: "kanji (caractère chinois)",
    level: "N5",
    category: "language",
    wordType: "noun",
    examples: [
      {
        japanese: "漢字を勉強しています。",
        hiragana: "かんじをべんきょうしています。",
        romaji: "Kanji o benkyou shite imasu.",
        english: "I am studying kanji.",
        french: "J'étudie les kanjis."
      }
    ]
  },
  {
    id: "ki_tree",
    japanese: "木",
    hiragana: "き",
    romaji: "ki",
    english: "tree",
    french: "arbre",
    level: "N5",
    category: "nature",
    wordType: "noun",
    examples: [
      {
        japanese: "庭に大きな木があります。",
        hiragana: "にわにおおきなきがあります。",
        romaji: "Niwa ni ōkina ki ga arimasu.",
        english: "There is a big tree in the garden.",
        french: "Il y a un grand arbre dans le jardin."
      }
    ]
  },
  {
    id: "kiiro",
    japanese: "黄色",
    hiragana: "きいろ",
    romaji: "kiiro",
    english: "yellow",
    french: "jaune",
    level: "N5",
    category: "color",
    wordType: "noun",
    examples: [
      {
        japanese: "黄色が好きです。",
        hiragana: "きいろがすきです。",
        romaji: "Kiiro ga suki desu.",
        english: "I like yellow.",
        french: "J'aime le jaune."
      }
    ]
  },
  {
    id: "kiiroi",
    japanese: "黄色い",
    hiragana: "きいろい",
    romaji: "kiiroi",
    english: "yellow (adjective)",
    french: "jaune (adjectif)",
    level: "N5",
    category: "color",
    wordType: "i-adjective",
    examples: [
      {
        japanese: "黄色い花が咲いています。",
        hiragana: "きいろいはながさいています。",
        romaji: "Kiiroi hana ga saite imasu.",
        english: "Yellow flowers are blooming.",
        french: "Des fleurs jaunes sont en fleur."
      }
    ]
  },
  {
    id: "kieru",
    japanese: "消える",
    hiragana: "きえる",
    romaji: "kieru",
    english: "to disappear; to go out",
    french: "disparaître; s'éteindre",
    level: "N5",
    category: "verb",
    wordType: "ichidan verb",
    examples: [
      {
        japanese: "電気が消えました。",
        hiragana: "でんきがきえました。",
        romaji: "Denki ga kiemashita.",
        english: "The light went out.",
        french: "La lumière s'est éteinte."
      }
    ]
  },
  {
    id: "kiku",
    japanese: "聞く",
    hiragana: "きく",
    romaji: "kiku",
    english: "to hear; to listen; to ask",
    french: "entendre; écouter; demander",
    level: "N5",
    category: "verb",
    wordType: "godan verb",
    examples: [
      {
        japanese: "先生に質問を聞きます。",
        hiragana: "せんせいにしつもんをききます。",
        romaji: "Sensei ni shitsumon o kikimasu.",
        english: "I ask the teacher a question.",
        french: "Je pose une question au professeur."
      }
    ]
  },
  {
    id: "kita",
    japanese: "北",
    hiragana: "きた",
    romaji: "kita",
    english: "north",
    french: "nord",
    level: "N5",
    category: "direction",
    wordType: "noun",
    examples: [
      {
        japanese: "日本の北に北海道があります。",
        hiragana: "にほんのきたにほっかいどうがあります。",
        romaji: "Nihon no kita ni Hokkaidō ga arimasu.",
        english: "Hokkaido is in the north of Japan.",
        french: "Hokkaidō est au nord du Japon."
      }
    ]
  },
  {
    id: "gitaa",
    japanese: "ギター",
    hiragana: "ぎたー",
    romaji: "gitā",
    english: "guitar",
    french: "guitare",
    level: "N5",
    category: "music",
    wordType: "noun",
    examples: [
      {
        japanese: "ギターを弾きます。",
        hiragana: "ぎたーをひきます。",
        romaji: "Gitā o hikimasu.",
        english: "I play the guitar.",
        french: "Je joue de la guitare."
      }
    ]
  },
  {
    id: "kitanai",
    japanese: "汚い",
    hiragana: "きたない",
    romaji: "kitanai",
    english: "dirty",
    french: "sale",
    level: "N5",
    category: "adjective",
    wordType: "i-adjective",
    examples: [
      {
        japanese: "部屋が汚いです。",
        hiragana: "へやがきたないです。",
        romaji: "Heya ga kitanai desu.",
        english: "The room is dirty.",
        french: "La chambre est sale."
      }
    ]
  },
  {
    id: "kissaten",
    japanese: "喫茶店",
    hiragana: "きっさてん",
    romaji: "kissaten",
    english: "coffee shop",
    french: "café (salon de thé)",
    level: "N5",
    category: "place",
    wordType: "noun",
    examples: [
      {
        japanese: "喫茶店で友達と話しました。",
        hiragana: "きっさてんでともだちとはなしました。",
        romaji: "Kissaten de tomodachi to hanashimashita.",
        english: "I talked with a friend at the coffee shop.",
        french: "J'ai parlé avec un ami au café."
      }
    ]
  },
  {
    id: "kitte",
    japanese: "切手",
    hiragana: "きって",
    romaji: "kitte",
    english: "stamp",
    french: "timbre",
    level: "N5",
    category: "object",
    wordType: "noun",
    examples: [
      {
        japanese: "切手を十枚ください。",
        hiragana: "きってをじゅうまいください。",
        romaji: "Kitte o jūmai kudasai.",
        english: "Ten stamps, please.",
        french: "Dix timbres, s'il vous plaît."
      }
    ]
  },
  {
    id: "kippu",
    japanese: "切符",
    hiragana: "きっぷ",
    romaji: "kippu",
    english: "ticket",
    french: "billet",
    level: "N5",
    category: "transport",
    wordType: "noun",
    examples: [
      {
        japanese: "電車の切符を買います。",
        hiragana: "でんしゃのきっぷをかいます。",
        romaji: "Densha no kippu o kaimasu.",
        english: "I buy a train ticket.",
        french: "J'achète un billet de train."
      }
    ]
  },
  {
    id: "kinou",
    japanese: "昨日",
    hiragana: "きのう",
    romaji: "kinō",
    english: "yesterday",
    french: "hier",
    level: "N5",
    category: "time",
    wordType: "noun",
    examples: [
      {
        japanese: "昨日映画を見ました。",
        hiragana: "きのうえいがをみました。",
        romaji: "Kinō eiga o mimashita.",
        english: "I watched a movie yesterday.",
        french: "J'ai vu un film hier."
      }
    ]
  },
  {
    id: "kyuu_ku",
    japanese: "九",
    hiragana: "きゅう／く",
    romaji: "kyū / ku",
    english: "nine",
    french: "neuf",
    level: "N5",
    category: "number",
    wordType: "number",
    examples: [
      {
        japanese: "九時に起きます。",
        hiragana: "くじにおきます。",
        romaji: "Ku-ji ni okimasu.",
        english: "I wake up at nine o'clock.",
        french: "Je me lève à neuf heures."
      }
    ]
  },
  {
    id: "gyuuniku",
    japanese: "牛肉",
    hiragana: "ぎゅうにく",
    romaji: "gyūniku",
    english: "beef",
    french: "bœuf",
    level: "N5",
    category: "food",
    wordType: "noun",
    examples: [
      {
        japanese: "牛肉をよく食べます。",
        hiragana: "ぎゅうにくをよくたべます。",
        romaji: "Gyūniku o yoku tabemasu.",
        english: "I often eat beef.",
        french: "Je mange souvent du bœuf."
      }
    ]
  },
  {
    id: "gyuunyuu",
    japanese: "牛乳",
    hiragana: "ぎゅうにゅう",
    romaji: "gyūnyū",
    english: "milk",
    french: "lait",
    level: "N5",
    category: "drink",
    wordType: "noun",
    examples: [
      {
        japanese: "毎朝牛乳を飲みます。",
        hiragana: "まいあさぎゅうにゅうをのみます。",
        romaji: "Maiasa gyūnyū o nomimasu.",
        english: "I drink milk every morning.",
        french: "Je bois du lait tous les matins."
      }
    ]
  },
  {
    id: "kyou_today",
    japanese: "今日",
    hiragana: "きょう",
    romaji: "kyō",
    english: "today",
    french: "aujourd'hui",
    level: "N5",
    category: "time",
    wordType: "noun",
    examples: [
      {
        japanese: "今日は忙しいです。",
        hiragana: "きょうはいそがしいです。",
        romaji: "Kyō wa isogashii desu.",
        english: "I am busy today.",
        french: "Je suis occupé aujourd'hui."
      }
    ]
  },
  {
    id: "kyoushitsu",
    japanese: "教室",
    hiragana: "きょうしつ",
    romaji: "kyōshitsu",
    english: "classroom",
    french: "salle de classe",
    level: "N5",
    category: "school",
    wordType: "noun",
    examples: [
      {
        japanese: "教室で勉強します。",
        hiragana: "きょうしつでべんきょうします。",
        romaji: "Kyōshitsu de benkyō shimasu.",
        english: "I study in the classroom.",
        french: "J'étudie dans la salle de classe."
      }
    ]
  },
  {
    id: "kyoudai",
    japanese: "兄弟",
    hiragana: "きょうだい",
    romaji: "kyōdai",
    english: "siblings",
    french: "frères et sœurs",
    level: "N5",
    category: "family",
    wordType: "noun",
    examples: [
      {
        japanese: "兄弟が三人います。",
        hiragana: "きょうだいがさんにんいます。",
        romaji: "Kyōdai ga sannin imasu.",
        english: "I have three siblings.",
        french: "J'ai trois frères et sœurs."
      }
    ]
  },
  {
    id: "kyonen",
    japanese: "去年",
    hiragana: "きょねん",
    romaji: "kyonen",
    english: "last year",
    french: "l'année dernière",
    level: "N5",
    category: "time",
    wordType: "noun",
    examples: [
      {
        japanese: "去年日本へ行きました。",
        hiragana: "きょねんにほんへいきました。",
        romaji: "Kyonen Nihon e ikimashita.",
        english: "I went to Japan last year.",
        french: "Je suis allé au Japon l'année dernière."
      }
    ]
  },
  {
    id: "kirai",
    japanese: "嫌い",
    hiragana: "きらい",
    romaji: "kirai",
    english: "dislike; hate",
    french: "ne pas aimer; détester",
    level: "N5",
    category: "emotion",
    wordType: "na-adjective",
    examples: [
      {
        japanese: "野菜が嫌いです。",
        hiragana: "やさいがきらいです。",
        romaji: "Yasai ga kirai desu.",
        english: "I dislike vegetables.",
        french: "Je n'aime pas les légumes."
      }
    ]
  },
  {
    id: "kiru_cut",
    japanese: "切る",
    hiragana: "きる",
    romaji: "kiru",
    english: "to cut",
    french: "couper",
    level: "N5",
    category: "verb",
    wordType: "godan verb",
    examples: [
      {
        japanese: "紙を切ります。",
        hiragana: "かみをきります。",
        romaji: "Kami o kirimasu.",
        english: "I cut paper.",
        french: "Je coupe du papier."
      }
    ]
  },
  {
    id: "kiru_wear",
    japanese: "着る",
    hiragana: "きる",
    romaji: "kiru",
    english: "to wear (clothes on torso)",
    french: "porter (vêtements, haut du corps)",
    level: "N5",
    category: "verb",
    wordType: "ichidan verb",
    examples: [
      {
        japanese: "ジャケットを着ます。",
        hiragana: "じゃけっとをきます。",
        romaji: "Jaketto o kimasu.",
        english: "I wear a jacket.",
        french: "Je porte une veste."
      }
    ]
  },
  {
    id: "kirei",
    japanese: "きれい",
    hiragana: "きれい",
    romaji: "kirei",
    english: "pretty; clean",
    french: "joli; propre",
    level: "N5",
    category: "adjective",
    wordType: "na-adjective",
    examples: [
      {
        japanese: "この部屋はきれいです。",
        hiragana: "このへやはきれいです。",
        romaji: "Kono heya wa kirei desu.",
        english: "This room is clean.",
        french: "Cette pièce est propre."
      }
    ]
  },
  {
    id: "kiro",
    japanese: "キロ",
    hiragana: "きろ",
    romaji: "kiro",
    english: "kilo (kilogram)",
    french: "kilo (kilogramme)",
    level: "N5",
    category: "measurement",
    wordType: "noun",
    examples: [
      {
        japanese: "りんごを２キロ買いました。",
        hiragana: "りんごをにきろかいました。",
        romaji: "Ringo o ni kiro kaimashita.",
        english: "I bought two kilos of apples.",
        french: "J'ai acheté deux kilos de pommes."
      }
    ]
  },
  {
    id: "kiromeetoru",
    japanese: "キロメートル",
    hiragana: "きろめーとる",
    romaji: "kiromētōru",
    english: "kilometer",
    french: "kilomètre",
    level: "N5",
    category: "measurement",
    wordType: "noun",
    examples: [
      {
        japanese: "駅まで１キロメートルです。",
        hiragana: "えきまでいちきろめーとるです。",
        romaji: "Eki made ichi kiromētōru desu.",
        english: "It is one kilometer to the station.",
        french: "Il y a un kilomètre jusqu'à la gare."
      }
    ]
  },
  {
    id: "ginkou",
    japanese: "銀行",
    hiragana: "ぎんこう",
    romaji: "ginkou",
    english: "bank",
    french: "banque",
    level: "N5",
    category: "place",
    wordType: "noun",
    examples: [
      {
        japanese: "銀行でお金を下ろします。",
        hiragana: "ぎんこうでおかねをおろします。",
        romaji: "Ginkou de okane o oroshimasu.",
        english: "I withdraw money at the bank.",
        french: "Je retire de l'argent à la banque."
      }
    ]
  },
  {
    id: "kinyoubi",
    japanese: "金曜日",
    hiragana: "きんようび",
    romaji: "kinyoubi",
    english: "Friday",
    french: "vendredi",
    level: "N5",
    category: "time",
    wordType: "noun",
    examples: [
      {
        japanese: "金曜日に映画を見に行きます。",
        hiragana: "きんようびにえいがをみにいきます。",
        romaji: "Kinyoubi ni eiga o mi ni ikimasu.",
        english: "I will go watch a movie on Friday.",
        french: "J'irai voir un film vendredi."
      }
    ]
  },
  {
    id: "kusuri",
    japanese: "薬",
    hiragana: "くすり",
    romaji: "kusuri",
    english: "medicine",
    french: "médicament",
    level: "N5",
    category: "health",
    wordType: "noun",
    examples: [
      {
        japanese: "薬を飲みます。",
        hiragana: "くすりをのみます。",
        romaji: "Kusuri o nomimasu.",
        english: "I take medicine.",
        french: "Je prends un médicament."
      }
    ]
  },
  {
    id: "kudasai",
    japanese: "ください",
    hiragana: "ください",
    romaji: "kudasai",
    english: "please (give me)",
    french: "s'il vous plaît (donnez-moi)",
    level: "N5",
    category: "expression",
    wordType: "auxiliary",
    examples: [
      {
        japanese: "水をください。",
        hiragana: "みずをください。",
        romaji: "Mizu o kudasai.",
        english: "Water, please.",
        french: "De l'eau, s'il vous plaît."
      }
    ]
  },
  {
    id: "kudamono",
    japanese: "果物",
    hiragana: "くだもの",
    romaji: "kudamono",
    english: "fruit",
    french: "fruit",
    level: "N5",
    category: "food",
    wordType: "noun",
    examples: [
      {
        japanese: "果物を毎日食べます。",
        hiragana: "くだものをまいにちたべます。",
        romaji: "Kudamono o mainichi tabemasu.",
        english: "I eat fruit every day.",
        french: "Je mange des fruits tous les jours."
      }
    ]
  },
  {
    id: "kuchi",
    japanese: "口",
    hiragana: "くち",
    romaji: "kuchi",
    english: "mouth",
    french: "bouche",
    level: "N5",
    category: "body",
    wordType: "noun",
    examples: [
      {
        japanese: "口を開けてください。",
        hiragana: "くちをあけてください。",
        romaji: "Kuchi o akete kudasai.",
        english: "Please open your mouth.",
        french: "Ouvrez la bouche, s'il vous plaît."
      }
    ]
  },
  {
    id: "kutsu",
    japanese: "靴",
    hiragana: "くつ",
    romaji: "kutsu",
    english: "shoes",
    french: "chaussures",
    level: "N5",
    category: "clothing",
    wordType: "noun",
    examples: [
      {
        japanese: "新しい靴を買いました。",
        hiragana: "あたらしいくつをかいました。",
        romaji: "Atarashii kutsu o kaimashita.",
        english: "I bought new shoes.",
        french: "J'ai acheté de nouvelles chaussures."
      }
    ]
  },
  {
    id: "kutsushita",
    japanese: "靴下",
    hiragana: "くつした",
    romaji: "kutsushita",
    english: "socks",
    french: "chaussettes",
    level: "N5",
    category: "clothing",
    wordType: "noun",
    examples: [
      {
        japanese: "靴下を履きます。",
        hiragana: "くつしたをはきます。",
        romaji: "Kutsushita o hakimasu.",
        english: "I put on socks.",
        french: "Je mets des chaussettes."
      }
    ]
  },
  {
    id: "kuni",
    japanese: "国",
    hiragana: "くに",
    romaji: "kuni",
    english: "country",
    french: "pays",
    level: "N5",
    category: "place",
    wordType: "noun",
    examples: [
      {
        japanese: "日本はとても美しい国です。",
        hiragana: "にほんはとてもうつくしいくにです。",
        romaji: "Nihon wa totemo utsukushii kuni desu.",
        english: "Japan is a very beautiful country.",
        french: "Le Japon est un très beau pays."
      }
    ]
  },
  {
    id: "kumori",
    japanese: "曇り",
    hiragana: "くもり",
    romaji: "kumori",
    english: "cloudy (weather)",
    french: "nuageux",
    level: "N5",
    category: "weather",
    wordType: "noun",
    examples: [
      {
        japanese: "今日は曇りです。",
        hiragana: "きょうはくもりです。",
        romaji: "Kyou wa kumori desu.",
        english: "It is cloudy today.",
        french: "Il fait nuageux aujourd'hui."
      }
    ]
  },
  {
    id: "kumoru",
    japanese: "曇る",
    hiragana: "くもる",
    romaji: "kumoru",
    english: "to become cloudy",
    french: "se couvrir (ciel)",
    level: "N5",
    category: "weather",
    wordType: "godan verb",
    examples: [
      {
        japanese: "空が曇ってきました。",
        hiragana: "そらがくもってきました。",
        romaji: "Sora ga kumotte kimashita.",
        english: "The sky has become cloudy.",
        french: "Le ciel s'est couvert."
      }
    ]
  },
  {
    id: "kurai",
    japanese: "暗い",
    hiragana: "くらい",
    romaji: "kurai",
    english: "dark",
    french: "sombre",
    level: "N5",
    category: "adjective",
    wordType: "i-adjective",
    examples: [
      {
        japanese: "外は暗いです。",
        hiragana: "そとはくらいです。",
        romaji: "Soto wa kurai desu.",
        english: "It is dark outside.",
        french: "Il fait sombre dehors."
      }
    ]
  },
  {
    id: "kurasu",
    japanese: "クラス",
    hiragana: "くらす",
    romaji: "kurasu",
    english: "class",
    french: "classe",
    level: "N5",
    category: "school",
    wordType: "noun",
    examples: [
      {
        japanese: "クラスの友達と勉強します。",
        hiragana: "くらすのともだちとべんきょうします。",
        romaji: "Kurasu no tomodachi to benkyou shimasu.",
        english: "I study with my classmates.",
        french: "J'étudie avec mes camarades de classe."
      }
    ]
  },
  {
    id: "guramu",
    japanese: "グラム",
    hiragana: "ぐらむ",
    romaji: "guramu",
    english: "gram",
    french: "gramme",
    level: "N5",
    category: "measurement",
    wordType: "noun",
    examples: [
      {
        japanese: "100グラムのチーズをください。",
        hiragana: "ひゃくぐらむのちーずをください。",
        romaji: "Hyaku guramu no chiizu o kudasai.",
        english: "100 grams of cheese, please.",
        french: "100 grammes de fromage, s'il vous plaît."
      }
    ]
  },
  {
    id: "kuru",
    japanese: "来る",
    hiragana: "くる",
    romaji: "kuru",
    english: "to come",
    french: "venir",
    level: "N5",
    category: "verb",
    wordType: "irregular verb",
    examples: [
      {
        japanese: "友達が家に来ます。",
        hiragana: "ともだちがいえにきます。",
        romaji: "Tomodachi ga ie ni kimasu.",
        english: "A friend comes to my house.",
        french: "Un ami vient chez moi."
      }
    ]
  },
  {
    id: "kuruma",
    japanese: "車",
    hiragana: "くるま",
    romaji: "kuruma",
    english: "car",
    french: "voiture",
    level: "N5",
    category: "transport",
    wordType: "noun",
    examples: [
      {
        japanese: "車を運転します。",
        hiragana: "くるまをうんてんします。",
        romaji: "Kuruma o unten shimasu.",
        english: "I drive a car.",
        french: "Je conduis une voiture."
      }
    ]
  },
  {
    id: "kuro",
    japanese: "黒",
    hiragana: "くろ",
    romaji: "kuro",
    english: "black (noun)",
    french: "noir",
    level: "N5",
    category: "color",
    wordType: "noun",
    examples: [
      {
        japanese: "黒は好きな色です。",
        hiragana: "くろはすきないろです。",
        romaji: "Kuro wa sukina iro desu.",
        english: "Black is my favorite color.",
        french: "Le noir est ma couleur préférée."
      }
    ]
  },
  {
    id: "kuroi",
    japanese: "黒い",
    hiragana: "くろい",
    romaji: "kuroi",
    english: "black (adjective)",
    french: "noir (adjectif)",
    level: "N5",
    category: "color",
    wordType: "i-adjective",
    examples: [
      {
        japanese: "黒い靴を履いています。",
        hiragana: "くろいくつをはいています。",
        romaji: "Kuroi kutsu o haite imasu.",
        english: "I am wearing black shoes.",
        french: "Je porte des chaussures noires."
      }
    ]
  },
  {
    id: "keikan",
    japanese: "警官",
    hiragana: "けいかん",
    romaji: "keikan",
    english: "policeman",
    french: "policier",
    level: "N5",
    category: "people",
    wordType: "noun",
    examples: [
      {
        japanese: "警官に道を聞きました。",
        hiragana: "けいかんにみちをききました。",
        romaji: "Keikan ni michi o kikimashita.",
        english: "I asked the policeman for directions.",
        french: "J'ai demandé mon chemin au policier."
      }
    ]
  },
  {
    id: "kesa",
    japanese: "今朝",
    hiragana: "けさ",
    romaji: "kesa",
    english: "this morning",
    french: "ce matin",
    level: "N5",
    category: "time",
    wordType: "noun",
    examples: [
      {
        japanese: "今朝ごはんを食べましたか。",
        hiragana: "けさごはんをたべましたか。",
        romaji: "Kesa gohan o tabemashita ka?",
        english: "Did you eat breakfast this morning?",
        french: "As-tu pris ton petit-déjeuner ce matin ?"
      }
    ]
  },
  {
    id: "kesu",
    japanese: "消す",
    hiragana: "けす",
    romaji: "kesu",
    english: "to erase; to turn off",
    french: "effacer; éteindre",
    level: "N5",
    category: "verb",
    wordType: "godan verb",
    examples: [
      {
        japanese: "黒板を消してください。",
        hiragana: "こくばんをけしてください。",
        romaji: "Kokuban o keshite kudasai.",
        english: "Please erase the blackboard.",
        french: "Effacez le tableau, s'il vous plaît."
      }
    ]
  },
  {
    id: "kekkou",
    japanese: "結構",
    hiragana: "けっこう",
    romaji: "kekkou",
    english: "fine; sufficient",
    french: "bien; suffisant",
    level: "N5",
    category: "expression",
    wordType: "adverb/na-adjective",
    examples: [
      {
        japanese: "それで結構です。",
        hiragana: "それでけっこうです。",
        romaji: "Sore de kekkou desu.",
        english: "That's fine.",
        french: "C'est bien ainsi."
      }
    ]
  },
  {
    id: "kekkon",
    japanese: "結婚",
    hiragana: "けっこん",
    romaji: "kekkon",
    english: "marriage",
    french: "mariage",
    level: "N5",
    category: "family",
    wordType: "noun",
    examples: [
      {
        japanese: "二人は結婚しました。",
        hiragana: "ふたりはけっこんしました。",
        romaji: "Futari wa kekkon shimashita.",
        english: "The two got married.",
        french: "Les deux se sont mariés."
      }
    ]
  },
  {
    id: "getsuyoubi",
    japanese: "月曜日",
    hiragana: "げつようび",
    romaji: "getsuyoubi",
    english: "Monday",
    french: "lundi",
    level: "N5",
    category: "time",
    wordType: "noun",
    examples: [
      {
        japanese: "月曜日から仕事が始まります。",
        hiragana: "げつようびからしごとがはじまります。",
        romaji: "Getsuyoubi kara shigoto ga hajimarimasu.",
        english: "Work starts on Monday.",
        french: "Le travail commence lundi."
      }
    ]
  },
  {
    id: "genkan",
    japanese: "玄関",
    hiragana: "げんかん",
    romaji: "genkan",
    english: "entrance (of a house)",
    french: "entrée (d'une maison)",
    level: "N5",
    category: "house",
    wordType: "noun",
    examples: [
      {
        japanese: "靴を玄関で脱ぎます。",
        hiragana: "くつをげんかんでぬぎます。",
        romaji: "Kutsu o genkan de nugimasu.",
        english: "I take off my shoes at the entrance.",
        french: "J'enlève mes chaussures à l'entrée."
      }
    ]
  },
  {
    id: "genki",
    japanese: "元気",
    hiragana: "げんき",
    romaji: "genki",
    english: "healthy; energetic",
    french: "en bonne santé; énergique",
    level: "N5",
    category: "adjective",
    wordType: "na-adjective",
    examples: [
      {
        japanese: "お元気ですか？",
        hiragana: "おげんきですか？",
        romaji: "Ogenki desu ka?",
        english: "How are you?",
        french: "Comment allez-vous ?"
      }
    ]
  },
  {
    id: "go_number",
    japanese: "五",
    hiragana: "ご",
    romaji: "go",
    english: "five",
    french: "cinq",
    level: "N5",
    category: "number",
    wordType: "number",
    examples: [
      {
        japanese: "五人の友達がいます。",
        hiragana: "ごにんのともだちがいます。",
        romaji: "Go-nin no tomodachi ga imasu.",
        english: "I have five friends.",
        french: "J'ai cinq amis."
      }
    ]
  },
  {
    id: "kouen",
    japanese: "公園",
    hiragana: "こうえん",
    romaji: "kouen",
    english: "park",
    french: "parc",
    level: "N5",
    category: "place",
    wordType: "noun",
    examples: [
      {
        japanese: "公園で散歩します。",
        hiragana: "こうえんでさんぽします。",
        romaji: "Kouen de sanpo shimasu.",
        english: "I take a walk in the park.",
        french: "Je me promène dans le parc."
      }
    ]
  },
  {
    id: "koukou",
    japanese: "高校",
    hiragana: "こうこう",
    romaji: "koukou",
    english: "high school",
    french: "lycée",
    level: "N5",
    category: "education",
    wordType: "noun",
    examples: [
      {
        japanese: "高校に通っています。",
        hiragana: "こうこうにかよっています。",
        romaji: "Koukou ni kayotte imasu.",
        english: "I go to high school.",
        french: "Je vais au lycée."
      }
    ]
  },
  {
    id: "koucha",
    japanese: "紅茶",
    hiragana: "こうちゃ",
    romaji: "koucha",
    english: "black tea",
    french: "thé noir",
    level: "N5",
    category: "drink",
    wordType: "noun",
    examples: [
      {
        japanese: "毎朝紅茶を飲みます。",
        hiragana: "まいあさこうちゃをのみます。",
        romaji: "Maiasa koucha o nomimasu.",
        english: "I drink black tea every morning.",
        french: "Je bois du thé noir tous les matins."
      }
    ]
  },
  {
    id: "koe",
    japanese: "声",
    hiragana: "こえ",
    romaji: "koe",
    english: "voice",
    french: "voix",
    level: "N5",
    category: "body",
    wordType: "noun",
    examples: [
      {
        japanese: "彼女の声はきれいです。",
        hiragana: "かのじょのこえはきれいです。",
        romaji: "Kanojo no koe wa kirei desu.",
        english: "Her voice is beautiful.",
        french: "Sa voix est belle."
      }
    ]
  },
  {
    id: "koohii",
    japanese: "コーヒー",
    hiragana: "こーひー",
    romaji: "kōhī",
    english: "coffee",
    french: "café",
    level: "N5",
    category: "drink",
    wordType: "noun",
    examples: [
      {
        japanese: "コーヒーを一杯ください。",
        hiragana: "こーひーをいっぱいください。",
        romaji: "Koohii o ippai kudasai.",
        english: "One cup of coffee, please.",
        french: "Une tasse de café, s'il vous plaît."
      }
    ]
  },
  {
    id: "kokoro",
    japanese: "心",
    hiragana: "こころ",
    romaji: "kokoro",
    english: "heart; mind",
    french: "cœur; esprit",
    level: "N5",
    category: "body/mind",
    wordType: "noun",
    examples: [
      {
        japanese: "心が温かい人です。",
        hiragana: "こころがあたたかいひとです。",
        romaji: "Kokoro ga atatakai hito desu.",
        english: "He is a warm-hearted person.",
        french: "C'est une personne au grand cœur."
      }
    ]
  },
  {
    id: "koko",
    japanese: "ここ",
    hiragana: "ここ",
    romaji: "koko",
    english: "here",
    french: "ici",
    level: "N5",
    category: "location",
    wordType: "pronoun",
    examples: [
      {
        japanese: "ここに座ってください。",
        hiragana: "ここにすわってください。",
        romaji: "Koko ni suwatte kudasai.",
        english: "Please sit here.",
        french: "Asseyez-vous ici."
      }
    ]
  },
  {
    id: "kokonoka",
    japanese: "九日",
    hiragana: "ここのか",
    romaji: "kokonoka",
    english: "the ninth day; nine days",
    french: "le neuvième jour; neuf jours",
    level: "N5",
    category: "time",
    wordType: "noun",
    examples: [
      {
        japanese: "九日は母の誕生日です。",
        hiragana: "ここのかはははのたんじょうびです。",
        romaji: "Kokonoka wa haha no tanjoubi desu.",
        english: "The ninth is my mother's birthday.",
        french: "Le neuf est l'anniversaire de ma mère."
      }
    ]
  },
  {
    id: "kokonotsu",
    japanese: "九つ",
    hiragana: "ここのつ",
    romaji: "kokonotsu",
    english: "nine (things)",
    french: "neuf (objets)",
    level: "N5",
    category: "counter",
    wordType: "counter",
    examples: [
      {
        japanese: "りんごを九つ買いました。",
        hiragana: "りんごをここのつかいました。",
        romaji: "Ringo o kokonotsu kaimashita.",
        english: "I bought nine apples.",
        french: "J'ai acheté neuf pommes."
      }
    ]
  },
  {
    id: "gogo",
    japanese: "午後",
    hiragana: "ごご",
    romaji: "gogo",
    english: "afternoon; p.m.",
    french: "après-midi",
    level: "N5",
    category: "time",
    wordType: "noun",
    examples: [
      {
        japanese: "午後3時に会いましょう。",
        hiragana: "ごごさんじにあいましょう。",
        romaji: "Gogo san-ji ni aimashou.",
        english: "Let's meet at 3 p.m.",
        french: "Rendez-vous à 15 heures."
      }
    ]
  },
  {
    id: "kotae",
    japanese: "答え",
    hiragana: "こたえ",
    romaji: "kotae",
    english: "answer",
    french: "réponse",
    level: "N5",
    category: "school",
    wordType: "noun",
    examples: [
      {
        japanese: "質問の答えは簡単です。",
        hiragana: "しつもんのこたえはかんたんです。",
        romaji: "Shitsumon no kotae wa kantan desu.",
        english: "The answer to the question is simple.",
        french: "La réponse à la question est simple."
      }
    ]
  },
  {
    id: "kotaeru",
    japanese: "答える",
    hiragana: "こたえる",
    romaji: "kotaeru",
    english: "to answer",
    french: "répondre",
    level: "N5",
    category: "verb",
    wordType: "ichidan verb",
    examples: [
      {
        japanese: "先生の質問に答えます。",
        hiragana: "せんせいのしつもんにこたえます。",
        romaji: "Sensei no shitsumon ni kotaemasu.",
        english: "I answer the teacher's question.",
        french: "Je réponds à la question du professeur."
      }
    ]
  },
  {
    id: "kochira",
    japanese: "こちら",
    hiragana: "こちら",
    romaji: "kochira",
    english: "this way; here (polite)",
    french: "par ici; ici (poli)",
    level: "N5",
    category: "expression",
    wordType: "pronoun",
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
    id: "kocchi",
    japanese: "こっち",
    hiragana: "こっち",
    romaji: "kocchi",
    english: "this way; here (casual)",
    french: "par ici; ici (familier)",
    level: "N5",
    category: "expression",
    wordType: "pronoun",
    examples: [
      {
        japanese: "こっちに来てください。",
        hiragana: "こっちにきてください。",
        romaji: "Kocchi ni kite kudasai.",
        english: "Please come this way.",
        french: "Viens par ici, s'il te plaît."
      }
    ]
  },
  {
    id: "kotoshi",
    japanese: "今年",
    hiragana: "ことし",
    romaji: "kotoshi",
    english: "this year",
    french: "cette année",
    level: "N5",
    category: "time",
    wordType: "noun",
    examples: [
      {
        japanese: "今年日本へ行きます。",
        hiragana: "ことしにほんへいきます。",
        romaji: "Kotoshi Nihon e ikimasu.",
        english: "I will go to Japan this year.",
        french: "J'irai au Japon cette année."
      }
    ]
  },
  {
    id: "kotoba",
    japanese: "言葉",
    hiragana: "ことば",
    romaji: "kotoba",
    english: "word; language",
    french: "mot; langue",
    level: "N5",
    category: "language",
    wordType: "noun",
    examples: [
      {
        japanese: "新しい言葉を覚えます。",
        hiragana: "あたらしいことばをおぼえます。",
        romaji: "Atarashii kotoba o oboemasu.",
        english: "I memorize new words.",
        french: "J'apprends de nouveaux mots."
      }
    ]
  },
  {
    id: "kodomo",
    japanese: "子供",
    hiragana: "こども",
    romaji: "kodomo",
    english: "child",
    french: "enfant",
    level: "N5",
    category: "people",
    wordType: "noun",
    examples: [
      {
        japanese: "子供が公園で遊んでいます。",
        hiragana: "こどもがこうえんであそんでいます。",
        romaji: "Kodomo ga kouen de asonde imasu.",
        english: "Children are playing in the park.",
        french: "Les enfants jouent dans le parc."
      }
    ]
  },
  {
    id: "kono",
    japanese: "この",
    hiragana: "この",
    romaji: "kono",
    english: "this (near speaker)",
    french: "ce/cette (près du locuteur)",
    level: "N5",
    category: "expression",
    wordType: "pre-noun adjectival",
    examples: [
      {
        japanese: "この本は面白いです。",
        hiragana: "このほんはおもしろいです。",
        romaji: "Kono hon wa omoshiroi desu.",
        english: "This book is interesting.",
        french: "Ce livre est intéressant."
      }
    ]
  },
  {
    id: "gohan",
    japanese: "ご飯",
    hiragana: "ごはん",
    romaji: "gohan",
    english: "rice; meal",
    french: "riz; repas",
    level: "N5",
    category: "food",
    wordType: "noun",
    examples: [
      {
        japanese: "ご飯を食べました。",
        hiragana: "ごはんをたべました。",
        romaji: "Gohan o tabemashita.",
        english: "I ate a meal (rice).",
        french: "J'ai mangé du riz (un repas)."
      }
    ]
  },
  {
    id: "kopii",
    japanese: "コピー",
    hiragana: "こぴー",
    romaji: "kopii",
    english: "copy",
    french: "copie",
    level: "N5",
    category: "object",
    wordType: "noun/verb",
    examples: [
      {
        japanese: "この書類をコピーしてください。",
        hiragana: "このしょるいをこぴーしてください。",
        romaji: "Kono shorui o kopii shite kudasai.",
        english: "Please make a copy of this document.",
        french: "Faites une copie de ce document, s'il vous plaît."
      }
    ]
  },
  {
    id: "komaru",
    japanese: "困る",
    hiragana: "こまる",
    romaji: "komaru",
    english: "to be troubled; to have difficulty",
    french: "être en difficulté; être embarrassé",
    level: "N5",
    category: "verb",
    wordType: "godan verb",
    examples: [
      {
        japanese: "お金がなくて困っています。",
        hiragana: "おかねがなくてこまっています。",
        romaji: "Okane ga nakute komatte imasu.",
        english: "I am troubled because I have no money.",
        french: "Je suis embêté car je n'ai pas d'argent."
      }
    ]
  },
  {
    id: "gomi",
    japanese: "ごみ",
    hiragana: "ごみ",
    romaji: "gomi",
    english: "rubbish; trash",
    french: "ordures; déchets",
    level: "N5",
    category: "object",
    wordType: "noun",
    examples: [
      {
        japanese: "ごみを捨ててください。",
        hiragana: "ごみをすててください。",
        romaji: "Gomi o sutete kudasai.",
        english: "Please throw away the trash.",
        french: "Jetez les ordures, s'il vous plaît."
      }
    ]
  },
  {
    id: "kondo",
    japanese: "今度",
    hiragana: "こんど",
    romaji: "kondo",
    english: "next time; this time",
    french: "la prochaine fois; cette fois",
    level: "N5",
    category: "time",
    wordType: "noun",
    examples: [
      {
        japanese: "今度一緒に行きましょう。",
        hiragana: "こんどいっしょにいきましょう。",
        romaji: "Kondo issho ni ikimashou.",
        english: "Let's go together next time.",
        french: "Allons ensemble la prochaine fois."
      }
    ]
  },
  {
    id: "konna",
    japanese: "こんな",
    hiragana: "こんな",
    romaji: "konna",
    english: "such; this kind of",
    french: "tel; ce genre de",
    level: "N5",
    category: "expression",
    wordType: "pre-noun adjectival",
    examples: [
      {
        japanese: "こんな本は読みたくない。",
        hiragana: "こんなほんはよみたくない。",
        romaji: "Konna hon wa yomitakunai.",
        english: "I don't want to read such a book.",
        french: "Je ne veux pas lire ce genre de livre."
      }
    ]
  },
  {
    id: "konnichiwa",
    japanese: "こんにちは",
    hiragana: "こんにちは",
    romaji: "konnichiwa",
    english: "hello; good afternoon",
    french: "bonjour; bon après-midi",
    level: "N5",
    category: "greeting",
    wordType: "expression",
    examples: [
      {
        japanese: "こんにちは、お元気ですか。",
        hiragana: "こんにちは、おげんきですか。",
        romaji: "Konnichiwa, ogenki desu ka.",
        english: "Hello, how are you?",
        french: "Bonjour, comment allez-vous ?"
      }
    ]
  },
  {
    id: "konbanwa",
    japanese: "こんばんは",
    hiragana: "こんばんは",
    romaji: "konbanwa",
    english: "good evening",
    french: "bonsoir",
    level: "N5",
    category: "greeting",
    wordType: "expression",
    examples: [
      {
        japanese: "こんばんは、いい天気ですね。",
        hiragana: "こんばんは、いいてんきですね。",
        romaji: "Konbanwa, ii tenki desu ne.",
        english: "Good evening, it's nice weather, isn't it?",
        french: "Bonsoir, il fait beau, n'est-ce pas ?"
      }
    ]
  },
  {
    id: "sakana",
    japanese: "魚",
    hiragana: "さかな",
    romaji: "sakana",
    english: "fish",
    french: "poisson",
    level: "N5",
    category: "food",
    wordType: "noun",
    examples: [
      {
        japanese: "魚を食べます。",
        hiragana: "さかなをたべます。",
        romaji: "Sakana o tabemasu.",
        english: "I eat fish.",
        french: "Je mange du poisson."
      }
    ]
  },
  {
    id: "saki",
    japanese: "先",
    hiragana: "さき",
    romaji: "saki",
    english: "before; ahead",
    french: "avant; devant",
    level: "N5",
    category: "time",
    wordType: "noun",
    examples: [
      {
        japanese: "駅の先にコンビニがあります。",
        hiragana: "えきのさきにこんびにがあります。",
        romaji: "Eki no saki ni konbini ga arimasu.",
        english: "There is a convenience store ahead of the station.",
        french: "Il y a un konbini devant la gare."
      }
    ]
  },
  {
    id: "saku",
    japanese: "咲く",
    hiragana: "さく",
    romaji: "saku",
    english: "to bloom",
    french: "fleurir",
    level: "N5",
    category: "nature",
    wordType: "godan verb",
    examples: [
      {
        japanese: "桜が咲きました。",
        hiragana: "さくらがさきました。",
        romaji: "Sakura ga sakimashita.",
        english: "The cherry blossoms bloomed.",
        french: "Les cerisiers ont fleuri."
      }
    ]
  },
  {
    id: "sakuranbo",
    japanese: "さくらんぼ",
    hiragana: "さくらんぼ",
    romaji: "sakuranbo",
    english: "cherry",
    french: "cerise",
    level: "N5",
    category: "food",
    wordType: "noun",
    examples: [
      {
        japanese: "さくらんぼが好きです。",
        hiragana: "さくらんぼがすきです。",
        romaji: "Sakuranbo ga suki desu.",
        english: "I like cherries.",
        french: "J'aime les cerises."
      }
    ]
  },
  {
    id: "sasaru",
    japanese: "刺さる",
    hiragana: "ささる",
    romaji: "sasaru",
    english: "to stick; to pierce",
    french: "se planter; percer",
    level: "N5",
    category: "verb",
    wordType: "godan verb",
    examples: [
      {
        japanese: "指にとげが刺さった。",
        hiragana: "ゆびにとげがささった。",
        romaji: "Yubi ni toge ga sasatta.",
        english: "A thorn stuck in my finger.",
        french: "Une épine s'est plantée dans mon doigt."
      }
    ]
  },
  {
    id: "sasu",
    japanese: "指す",
    hiragana: "さす",
    romaji: "sasu",
    english: "to point",
    french: "pointer; indiquer",
    level: "N5",
    category: "verb",
    wordType: "godan verb",
    examples: [
      {
        japanese: "地図を指してください。",
        hiragana: "ちずをさしてください。",
        romaji: "Chizu o sashite kudasai.",
        english: "Please point at the map.",
        french: "Veuillez indiquer la carte."
      }
    ]
  },
  {
    id: "sakki",
    japanese: "さっき",
    hiragana: "さっき",
    romaji: "sakki",
    english: "a short while ago",
    french: "tout à l'heure",
    level: "N5",
    category: "time",
    wordType: "adverb",
    examples: [
      {
        japanese: "さっき駅に着きました。",
        hiragana: "さっきえきにつきました。",
        romaji: "Sakki eki ni tsukimashita.",
        english: "I arrived at the station a short while ago.",
        french: "Je suis arrivé à la gare tout à l'heure."
      }
    ]
  },
  {
    id: "zasshi",
    japanese: "雑誌",
    hiragana: "ざっし",
    romaji: "zasshi",
    english: "magazine",
    french: "magazine",
    level: "N5",
    category: "object",
    wordType: "noun",
    examples: [
      {
        japanese: "雑誌を読みます。",
        hiragana: "ざっしをよみます。",
        romaji: "Zasshi o yomimasu.",
        english: "I read a magazine.",
        french: "Je lis un magazine."
      }
    ]
  },
  {
    id: "satou",
    japanese: "砂糖",
    hiragana: "さとう",
    romaji: "satou",
    english: "sugar",
    french: "sucre",
    level: "N5",
    category: "food",
    wordType: "noun",
    examples: [
      {
        japanese: "コーヒーに砂糖を入れます。",
        hiragana: "こーひーにさとうをいれます。",
        romaji: "Koohii ni satou o iremasu.",
        english: "I put sugar in my coffee.",
        french: "Je mets du sucre dans mon café."
      }
    ]
  },
  {
    id: "samui",
    japanese: "寒い",
    hiragana: "さむい",
    romaji: "samui",
    english: "cold (weather)",
    french: "froid (temps)",
    level: "N5",
    category: "adjective",
    wordType: "i-adjective",
    examples: [
      {
        japanese: "今日は寒いです。",
        hiragana: "きょうはさむいです。",
        romaji: "Kyou wa samui desu.",
        english: "It is cold today.",
        french: "Il fait froid aujourd'hui."
      }
    ]
  },
  {
    id: "sara",
    japanese: "皿",
    hiragana: "さら",
    romaji: "sara",
    english: "plate; dish",
    french: "assiette; plat",
    level: "N5",
    category: "kitchen",
    wordType: "noun",
    examples: [
      {
        japanese: "皿を洗います。",
        hiragana: "さらをあらいます。",
        romaji: "Sara o araimasu.",
        english: "I wash the plates.",
        french: "Je lave les assiettes."
      }
    ]
  },
  {
    id: "saru",
    japanese: "猿",
    hiragana: "さる",
    romaji: "saru",
    english: "monkey",
    french: "singe",
    level: "N5",
    category: "animal",
    wordType: "noun",
    examples: [
      {
        japanese: "猿は木に登ります。",
        hiragana: "さるはきにのぼります。",
        romaji: "Saru wa ki ni noborimasu.",
        english: "Monkeys climb trees.",
        french: "Les singes grimpent aux arbres."
      }
    ]
  },
  {
    id: "san",
    japanese: "三",
    hiragana: "さん",
    romaji: "san",
    english: "three",
    french: "trois",
    level: "N5",
    category: "number",
    wordType: "number",
    examples: [
      {
        japanese: "りんごを三つ食べました。",
        hiragana: "りんごをみっつたべました。",
        romaji: "Ringo o mittsu tabemashita.",
        english: "I ate three apples.",
        french: "J'ai mangé trois pommes."
      }
    ]
  },
  {
    id: "sanpo",
    japanese: "散歩",
    hiragana: "さんぽ",
    romaji: "sanpo",
    english: "walk; stroll",
    french: "promenade",
    level: "N5",
    category: "activity",
    wordType: "noun",
    examples: [
      {
        japanese: "公園を散歩します。",
        hiragana: "こうえんをさんぽします。",
        romaji: "Kouen o sanpo shimasu.",
        english: "I take a walk in the park.",
        french: "Je me promène dans le parc."
      }
    ]
  },
  {
    id: "shio",
    japanese: "塩",
    hiragana: "しお",
    romaji: "shio",
    english: "salt",
    french: "sel",
    level: "N5",
    category: "food",
    wordType: "noun",
    examples: [
      {
        japanese: "塩を少し入れてください。",
        hiragana: "しおをすこしいれてください。",
        romaji: "Shio o sukoshi irete kudasai.",
        english: "Please add a little salt.",
        french: "Ajoutez un peu de sel, s'il vous plaît."
      }
    ]
  },
  {
    id: "shikashi",
    japanese: "しかし",
    hiragana: "しかし",
    romaji: "shikashi",
    english: "however; but",
    french: "cependant; mais",
    level: "N5",
    category: "expression",
    wordType: "conjunction",
    examples: [
      {
        japanese: "雨が降っています。しかし出かけます。",
        hiragana: "あめがふっています。しかしでかけます。",
        romaji: "Ame ga futte imasu. Shikashi dekakemasu.",
        english: "It is raining. However, I will go out.",
        french: "Il pleut. Cependant, je sors."
      }
    ]
  },
  {
    id: "shigoto",
    japanese: "仕事",
    hiragana: "しごと",
    romaji: "shigoto",
    english: "work; job",
    french: "travail; emploi",
    level: "N5",
    category: "work",
    wordType: "noun",
    examples: [
      {
        japanese: "仕事が忙しいです。",
        hiragana: "しごとがいそがしいです。",
        romaji: "Shigoto ga isogashii desu.",
        english: "Work is busy.",
        french: "Le travail est prenant."
      }
    ]
  },
  {
    id: "shitamachi",
    japanese: "下町",
    hiragana: "したまち",
    romaji: "shitamachi",
    english: "downtown; old town",
    french: "centre-ville; vieux quartier",
    level: "N5",
    category: "place",
    wordType: "noun",
    examples: [
      {
        japanese: "下町を散歩しました。",
        hiragana: "したまちをさんぽしました。",
        romaji: "Shitamachi o sanpo shimashita.",
        english: "I took a walk in the downtown area.",
        french: "J'ai fait une promenade dans le vieux quartier."
      }
    ]
  },
  {
    id: "shichi_nana",
    japanese: "七",
    hiragana: "しち／なな",
    romaji: "shichi / nana",
    english: "seven",
    french: "sept",
    level: "N5",
    category: "number",
    wordType: "number",
    examples: [
      {
        japanese: "七時に起きます。",
        hiragana: "しちじにおきます。",
        romaji: "Shichi-ji ni okimasu.",
        english: "I wake up at seven o'clock.",
        french: "Je me lève à sept heures."
      }
    ]
  },
  {
    id: "shitsumon",
    japanese: "質問",
    hiragana: "しつもん",
    romaji: "shitsumon",
    english: "question",
    french: "question",
    level: "N5",
    category: "school",
    wordType: "noun",
    examples: [
      {
        japanese: "質問があります。",
        hiragana: "しつもんがあります。",
        romaji: "Shitsumon ga arimasu.",
        english: "I have a question.",
        french: "J'ai une question."
      }
    ]
  },
  {
    id: "shinu",
    japanese: "死ぬ",
    hiragana: "しぬ",
    romaji: "shinu",
    english: "to die",
    french: "mourir",
    level: "N5",
    category: "verb",
    wordType: "godan verb",
    examples: [
      {
        japanese: "その犬は死にました。",
        hiragana: "そのいぬはしにました。",
        romaji: "Sono inu wa shinimashita.",
        english: "That dog died.",
        french: "Ce chien est mort."
      }
    ]
  },
  {
    id: "shibaraku",
    japanese: "しばらく",
    hiragana: "しばらく",
    romaji: "shibaraku",
    english: "for a while",
    french: "pendant un moment",
    level: "N5",
    category: "time",
    wordType: "adverb",
    examples: [
      {
        japanese: "しばらくここに住んでいました。",
        hiragana: "しばらくここにすんでいました。",
        romaji: "Shibaraku koko ni sunde imashita.",
        english: "I lived here for a while.",
        french: "J'ai vécu ici pendant un moment."
      }
    ]
  },
  {
    id: "shimaru",
    japanese: "閉まる",
    hiragana: "しまる",
    romaji: "shimaru",
    english: "to close (intransitive)",
    french: "se fermer",
    level: "N5",
    category: "verb",
    wordType: "godan verb",
    examples: [
      {
        japanese: "ドアが閉まります。",
        hiragana: "どあがしまります。",
        romaji: "Doa ga shimarimasu.",
        english: "The door closes.",
        french: "La porte se ferme."
      }
    ]
  },
  {
    id: "shimeru",
    japanese: "閉める",
    hiragana: "しめる",
    romaji: "shimeru",
    english: "to close (transitive)",
    french: "fermer",
    level: "N5",
    category: "verb",
    wordType: "ichidan verb",
    examples: [
      {
        japanese: "窓を閉めてください。",
        hiragana: "まどをしめてください。",
        romaji: "Mado o shimete kudasai.",
        english: "Please close the window.",
        french: "Fermez la fenêtre, s'il vous plaît."
      }
    ]
  },
  {
    id: "shakai",
    japanese: "社会",
    hiragana: "しゃかい",
    romaji: "shakai",
    english: "society",
    french: "société",
    level: "N5",
    category: "concept",
    wordType: "noun",
    examples: [
      {
        japanese: "日本の社会を勉強します。",
        hiragana: "にほんのしゃかいをべんきょうします。",
        romaji: "Nihon no shakai o benkyou shimasu.",
        english: "I study Japanese society.",
        french: "J'étudie la société japonaise."
      }
    ]
  },
  {
    id: "shashin",
    japanese: "写真",
    hiragana: "しゃしん",
    romaji: "shashin",
    english: "photograph",
    french: "photo",
    level: "N5",
    category: "object",
    wordType: "noun",
    examples: [
      {
        japanese: "写真を撮ります。",
        hiragana: "しゃしんをとります。",
        romaji: "Shashin o torimasu.",
        english: "I take a photo.",
        french: "Je prends une photo."
      }
    ]
  },
  {
    id: "shatsu",
    japanese: "シャツ",
    hiragana: "しゃつ",
    romaji: "shatsu",
    english: "shirt",
    french: "chemise",
    level: "N5",
    category: "clothing",
    wordType: "noun",
    examples: [
      {
        japanese: "白いシャツを着ます。",
        hiragana: "しろいしゃつをきます。",
        romaji: "Shiroi shatsu o kimasu.",
        english: "I wear a white shirt.",
        french: "Je porte une chemise blanche."
      }
    ]
  },
  {
    id: "shaberu",
    japanese: "しゃべる",
    hiragana: "しゃべる",
    romaji: "shaberu",
    english: "to chat; to talk",
    french: "bavarder; discuter",
    level: "N5",
    category: "verb",
    wordType: "godan verb",
    examples: [
      {
        japanese: "友達としゃべります。",
        hiragana: "ともだちとしゃべります。",
        romaji: "Tomodachi to shaberimasu.",
        english: "I chat with my friends.",
        french: "Je bavarde avec mes amis."
      }
    ]
  },
  {
    id: "shukudai",
    japanese: "宿題",
    hiragana: "しゅくだい",
    romaji: "shukudai",
    english: "homework",
    french: "devoirs",
    level: "N5",
    category: "school",
    wordType: "noun",
    examples: [
      {
        japanese: "宿題をします。",
        hiragana: "しゅくだいをします。",
        romaji: "Shukudai o shimasu.",
        english: "I do my homework.",
        french: "Je fais mes devoirs."
      }
    ]
  },
  {
    id: "shusshin",
    japanese: "出身",
    hiragana: "しゅっしん",
    romaji: "shusshin",
    english: "hometown; place of origin",
    french: "lieu d'origine",
    level: "N5",
    category: "people",
    wordType: "noun",
    examples: [
      {
        japanese: "私は東京出身です。",
        hiragana: "わたしはとうきょうしゅっしんです。",
        romaji: "Watashi wa Toukyou shusshin desu.",
        english: "I am from Tokyo.",
        french: "Je suis originaire de Tokyo."
      }
    ]
  },
  {
    id: "shougatsu",
    japanese: "正月",
    hiragana: "しょうがつ",
    romaji: "shougatsu",
    english: "New Year",
    french: "Nouvel An",
    level: "N5",
    category: "time",
    wordType: "noun",
    examples: [
      {
        japanese: "正月に家族と過ごします。",
        hiragana: "しょうがつにかぞくとすごします。",
        romaji: "Shougatsu ni kazoku to sugoshimasu.",
        english: "I spend New Year with my family.",
        french: "Je passe le Nouvel An avec ma famille."
      }
    ]
  },
  {
    id: "shouyu",
    japanese: "醤油",
    hiragana: "しょうゆ",
    romaji: "shouyu",
    english: "soy sauce",
    french: "sauce soja",
    level: "N5",
    category: "food",
    wordType: "noun",
    examples: [
      {
        japanese: "醤油を料理に使います。",
        hiragana: "しょうゆをりょうりにつかいます。",
        romaji: "Shouyu o ryouri ni tsukaimasu.",
        english: "I use soy sauce in cooking.",
        french: "J'utilise de la sauce soja en cuisine."
      }
    ]
  },
  {
    id: "shiro",
    japanese: "白",
    hiragana: "しろ",
    romaji: "shiro",
    english: "white (noun)",
    french: "blanc",
    level: "N5",
    category: "color",
    wordType: "noun",
    examples: [
      {
        japanese: "白は清潔な色です。",
        hiragana: "しろはせいけつないろです。",
        romaji: "Shiro wa seiketsu na iro desu.",
        english: "White is a clean color.",
        french: "Le blanc est une couleur pure."
      }
    ]
  },
  {
    id: "shiroi",
    japanese: "白い",
    hiragana: "しろい",
    romaji: "shiroi",
    english: "white (adjective)",
    french: "blanc (adjectif)",
    level: "N5",
    category: "color",
    wordType: "i-adjective",
    examples: [
      {
        japanese: "白い花が咲いています。",
        hiragana: "しろいはながさいています。",
        romaji: "Shiroi hana ga saite imasu.",
        english: "White flowers are blooming.",
        french: "Des fleurs blanches sont en fleur."
      }
    ]
  },
  {
    id: "shingou",
    japanese: "信号",
    hiragana: "しんごう",
    romaji: "shingou",
    english: "traffic light",
    french: "feu de circulation",
    level: "N5",
    category: "transport",
    wordType: "noun",
    examples: [
      {
        japanese: "信号を待ちます。",
        hiragana: "しんごうをまちます。",
        romaji: "Shingou o machimasu.",
        english: "I wait at the traffic light.",
        french: "J'attends au feu de circulation."
      }
    ]
  },
  {
    id: "shinbun",
    japanese: "新聞",
    hiragana: "しんぶん",
    romaji: "shinbun",
    english: "newspaper",
    french: "journal",
    level: "N5",
    category: "media",
    wordType: "noun",
    examples: [
      {
        japanese: "新聞を読みます。",
        hiragana: "しんぶんをよみます。",
        romaji: "Shinbun o yomimasu.",
        english: "I read a newspaper.",
        french: "Je lis un journal."
      }
    ]
  },
  {
    id: "suiyoubi",
    japanese: "水曜日",
    hiragana: "すいようび",
    romaji: "suiyoubi",
    english: "Wednesday",
    french: "mercredi",
    level: "N5",
    category: "time",
    wordType: "noun",
    examples: [
      {
        japanese: "水曜日に会いましょう。",
        hiragana: "すいようびにあいましょう。",
        romaji: "Suiyoubi ni aimashou.",
        english: "Let's meet on Wednesday.",
        french: "Rencontrons-nous mercredi."
      }
    ]
  },
  {
    id: "suu",
    japanese: "吸う",
    hiragana: "すう",
    romaji: "suu",
    english: "to inhale; to smoke",
    french: "inspirer; fumer",
    level: "N5",
    category: "verb",
    wordType: "godan verb",
    examples: [
      {
        japanese: "タバコを吸います。",
        hiragana: "たばこをすいます。",
        romaji: "Tabako o suimasu.",
        english: "I smoke a cigarette.",
        french: "Je fume une cigarette."
      }
    ]
  },
  {
    id: "sukaato",
    japanese: "スカート",
    hiragana: "すかーと",
    romaji: "sukaato",
    english: "skirt",
    french: "jupe",
    level: "N5",
    category: "clothing",
    wordType: "noun",
    examples: [
      {
        japanese: "赤いスカートを買いました。",
        hiragana: "あかいすかーとをかいました。",
        romaji: "Akai sukaato o kaimashita.",
        english: "I bought a red skirt.",
        french: "J'ai acheté une jupe rouge."
      }
    ]
  },
  {
    id: "suki",
    japanese: "好き",
    hiragana: "すき",
    romaji: "suki",
    english: "like; fond of",
    french: "aimer; préféré",
    level: "N5",
    category: "emotion",
    wordType: "na-adjective",
    examples: [
      {
        japanese: "私は音楽が好きです。",
        hiragana: "わたしはおんがくがすきです。",
        romaji: "Watashi wa ongaku ga suki desu.",
        english: "I like music.",
        french: "J'aime la musique."
      }
    ]
  },
  {
    id: "sugu",
    japanese: "すぐ",
    hiragana: "すぐ",
    romaji: "sugu",
    english: "immediately; right away",
    french: "tout de suite; immédiatement",
    level: "N5",
    category: "time",
    wordType: "adverb",
    examples: [
      {
        japanese: "すぐに戻ります。",
        hiragana: "すぐにもどります。",
        romaji: "Sugu ni modorimasu.",
        english: "I will be back right away.",
        french: "Je reviens tout de suite."
      }
    ]
  },
  {
    id: "sukoshi",
    japanese: "少し",
    hiragana: "すこし",
    romaji: "sukoshi",
    english: "a little; few",
    french: "un peu",
    level: "N5",
    category: "quantity",
    wordType: "adverb/noun",
    examples: [
      {
        japanese: "日本語が少しわかります。",
        hiragana: "にほんごがすこしわかります。",
        romaji: "Nihongo ga sukoshi wakarimasu.",
        english: "I understand a little Japanese.",
        french: "Je comprends un peu le japonais."
      }
    ]
  },
  {
    id: "suzushii",
    japanese: "涼しい",
    hiragana: "すずしい",
    romaji: "suzushii",
    english: "cool (weather)",
    french: "frais (temps)",
    level: "N5",
    category: "adjective",
    wordType: "i-adjective",
    examples: [
      {
        japanese: "今日は涼しいですね。",
        hiragana: "きょうはすずしいですね。",
        romaji: "Kyou wa suzushii desu ne.",
        english: "It's cool today.",
        french: "Il fait frais aujourd'hui."
      }
    ]
  },
  {
    id: "suppai",
    japanese: "酸っぱい",
    hiragana: "すっぱい",
    romaji: "suppai",
    english: "sour",
    french: "acide",
    level: "N5",
    category: "taste",
    wordType: "i-adjective",
    examples: [
      {
        japanese: "このレモンは酸っぱいです。",
        hiragana: "このれもんはすっぱいです。",
        romaji: "Kono remon wa suppai desu.",
        english: "This lemon is sour.",
        french: "Ce citron est acide."
      }
    ]
  },
  {
    id: "suteru",
    japanese: "捨てる",
    hiragana: "すてる",
    romaji: "suteru",
    english: "to throw away",
    french: "jeter",
    level: "N5",
    category: "verb",
    wordType: "ichidan verb",
    examples: [
      {
        japanese: "古い服を捨てます。",
        hiragana: "ふるいふくをすてます。",
        romaji: "Furui fuku o sutemasu.",
        english: "I throw away old clothes.",
        french: "Je jette de vieux vêtements."
      }
    ]
  },
  {
    id: "sutoobu",
    japanese: "ストーブ",
    hiragana: "すとーぶ",
    romaji: "sutoobu",
    english: "heater; stove",
    french: "chauffage; poêle",
    level: "N5",
    category: "object",
    wordType: "noun",
    examples: [
      {
        japanese: "ストーブをつけます。",
        hiragana: "すとーぶをつけます。",
        romaji: "Sutoobu o tsukemasu.",
        english: "I turn on the heater.",
        french: "J'allume le chauffage."
      }
    ]
  },
  {
    id: "subarashii",
    japanese: "素晴らしい",
    hiragana: "すばらしい",
    romaji: "subarashii",
    english: "wonderful",
    french: "formidable",
    level: "N5",
    category: "adjective",
    wordType: "i-adjective",
    examples: [
      {
        japanese: "素晴らしい景色ですね。",
        hiragana: "すばらしいけしきですね。",
        romaji: "Subarashii keshiki desu ne.",
        english: "It's a wonderful view.",
        french: "C'est une vue magnifique."
      }
    ]
  },
  {
    id: "supuun",
    japanese: "スプーン",
    hiragana: "すぷーん",
    romaji: "supuun",
    english: "spoon",
    french: "cuillère",
    level: "N5",
    category: "kitchen",
    wordType: "noun",
    examples: [
      {
        japanese: "スプーンでスープを飲みます。",
        hiragana: "すぷーんですーぷをのみます。",
        romaji: "Supuun de suupu o nomimasu.",
        english: "I eat soup with a spoon.",
        french: "Je mange de la soupe avec une cuillère."
      }
    ]
  },
  {
    id: "subete",
    japanese: "すべて",
    hiragana: "すべて",
    romaji: "subete",
    english: "all; everything",
    french: "tout",
    level: "N5",
    category: "quantity",
    wordType: "noun/adverb",
    examples: [
      {
        japanese: "すべて終わりました。",
        hiragana: "すべておわりました。",
        romaji: "Subete owarimashita.",
        english: "Everything is finished.",
        french: "Tout est terminé."
      }
    ]
  },
  {
    id: "sumu",
    japanese: "住む",
    hiragana: "すむ",
    romaji: "sumu",
    english: "to live",
    french: "habiter; vivre",
    level: "N5",
    category: "verb",
    wordType: "godan verb",
    examples: [
      {
        japanese: "東京に住んでいます。",
        hiragana: "とうきょうにすんでいます。",
        romaji: "Toukyou ni sunde imasu.",
        english: "I live in Tokyo.",
        french: "J'habite à Tokyo."
      }
    ]
  },
  {
    id: "surippa",
    japanese: "スリッパ",
    hiragana: "すりっぱ",
    romaji: "surippa",
    english: "slippers",
    french: "pantoufles",
    level: "N5",
    category: "clothing",
    wordType: "noun",
    examples: [
      {
        japanese: "家ではスリッパを履きます。",
        hiragana: "いえではすりっぱをはきます。",
        romaji: "Ie de wa surippa o hakimasu.",
        english: "I wear slippers at home.",
        french: "Je porte des pantoufles à la maison."
      }
    ]
  },
  {
    id: "suru",
    japanese: "する",
    hiragana: "する",
    romaji: "suru",
    english: "to do",
    french: "faire",
    level: "N5",
    category: "verb",
    wordType: "irregular verb",
    examples: [
      {
        japanese: "宿題をします。",
        hiragana: "しゅくだいをします。",
        romaji: "Shukudai o shimasu.",
        english: "I do homework.",
        french: "Je fais mes devoirs."
      }
    ]
  },
  {
    id: "suwaru",
    japanese: "座る",
    hiragana: "すわる",
    romaji: "suwaru",
    english: "to sit",
    french: "s'asseoir",
    level: "N5",
    category: "verb",
    wordType: "godan verb",
    examples: [
      {
        japanese: "椅子に座ってください。",
        hiragana: "いすにすわってください。",
        romaji: "Isu ni suwatte kudasai.",
        english: "Please sit on the chair.",
        french: "Asseyez-vous sur la chaise."
      }
    ]
  },
  {
    id: "seikatsu",
    japanese: "生活",
    hiragana: "せいかつ",
    romaji: "seikatsu",
    english: "life; living",
    french: "vie quotidienne",
    level: "N5",
    category: "life",
    wordType: "noun",
    examples: [
      {
        japanese: "日本で生活しています。",
        hiragana: "にほんでせいかつしています。",
        romaji: "Nihon de seikatsu shite imasu.",
        english: "I live in Japan.",
        french: "Je vis au Japon."
      }
    ]
  },
  {
    id: "segatakai",
    japanese: "背が高い",
    hiragana: "せがたかい",
    romaji: "se ga takai",
    english: "tall (stature)",
    french: "grand (taille)",
    level: "N5",
    category: "adjective",
    wordType: "expression",
    examples: [
      {
        japanese: "彼は背が高いです。",
        hiragana: "かれはせがたかいです。",
        romaji: "Kare wa se ga takai desu.",
        english: "He is tall.",
        french: "Il est grand."
      }
    ]
  },
  {
    id: "semai",
    japanese: "狭い",
    hiragana: "せまい",
    romaji: "semai",
    english: "narrow; small (space)",
    french: "étroit; petit",
    level: "N5",
    category: "adjective",
    wordType: "i-adjective",
    examples: [
      {
        japanese: "この部屋は狭いです。",
        hiragana: "このへやはせまいです。",
        romaji: "Kono heya wa semai desu.",
        english: "This room is narrow.",
        french: "Cette chambre est étroite."
      }
    ]
  },
  {
    id: "sengetsu",
    japanese: "先月",
    hiragana: "せんげつ",
    romaji: "sengetsu",
    english: "last month",
    french: "le mois dernier",
    level: "N5",
    category: "time",
    wordType: "noun",
    examples: [
      {
        japanese: "先月旅行しました。",
        hiragana: "せんげつりょこうしました。",
        romaji: "Sengetsu ryokou shimashita.",
        english: "I traveled last month.",
        french: "J'ai voyagé le mois dernier."
      }
    ]
  },
  {
    id: "senshuu",
    japanese: "先週",
    hiragana: "せんしゅう",
    romaji: "senshuu",
    english: "last week",
    french: "la semaine dernière",
    level: "N5",
    category: "time",
    wordType: "noun",
    examples: [
      {
        japanese: "先週友達に会いました。",
        hiragana: "せんしゅうともだちにあいました。",
        romaji: "Senshuu tomodachi ni aimashita.",
        english: "I met my friend last week.",
        french: "J'ai rencontré mon ami la semaine dernière."
      }
    ]
  },
  {
    id: "sensei",
    japanese: "先生",
    hiragana: "せんせい",
    romaji: "sensei",
    english: "teacher",
    french: "professeur; maître",
    level: "N5",
    category: "people",
    wordType: "noun",
    examples: [
      {
        japanese: "先生は教室にいます。",
        hiragana: "せんせいはきょうしつにいます。",
        romaji: "Sensei wa kyoushitsu ni imasu.",
        english: "The teacher is in the classroom.",
        french: "Le professeur est dans la salle de classe."
      }
    ]
  },
  {
    id: "sentaku",
    japanese: "洗濯",
    hiragana: "せんたく",
    romaji: "sentaku",
    english: "washing; laundry",
    french: "lessive",
    level: "N5",
    category: "housework",
    wordType: "noun",
    examples: [
      {
        japanese: "洗濯をします。",
        hiragana: "せんたくをします。",
        romaji: "Sentaku o shimasu.",
        english: "I do the laundry.",
        french: "Je fais la lessive."
      }
    ]
  },
  {
    id: "souji",
    japanese: "掃除",
    hiragana: "そうじ",
    romaji: "souji",
    english: "cleaning",
    french: "ménage",
    level: "N5",
    category: "housework",
    wordType: "noun/verb",
    examples: [
      {
        japanese: "部屋を掃除します。",
        hiragana: "へやをそうじします。",
        romaji: "Heya o souji shimasu.",
        english: "I clean the room.",
        french: "Je nettoie la chambre."
      }
    ]
  },
  {
    id: "soko",
    japanese: "そこ",
    hiragana: "そこ",
    romaji: "soko",
    english: "there (near listener)",
    french: "là (près de l'interlocuteur)",
    level: "N5",
    category: "location",
    wordType: "pronoun",
    examples: [
      {
        japanese: "そこに置いてください。",
        hiragana: "そこにおいてください。",
        romaji: "Soko ni oite kudasai.",
        english: "Please put it there.",
        french: "Pose-le là, s'il te plaît."
      }
    ]
  },
  {
    id: "soshite",
    japanese: "そして",
    hiragana: "そして",
    romaji: "soshite",
    english: "and then",
    french: "et puis",
    level: "N5",
    category: "connector",
    wordType: "conjunction",
    examples: [
      {
        japanese: "朝ごはんを食べて、そして学校へ行きます。",
        hiragana: "あさごはんをたべて、そしてがっこうへいきます。",
        romaji: "Asagohan o tabete, soshite gakkou e ikimasu.",
        english: "I eat breakfast, and then go to school.",
        french: "Je prends le petit-déjeuner, puis je vais à l'école."
      }
    ]
  },
  {
    id: "sochira",
    japanese: "そちら",
    hiragana: "そちら",
    romaji: "sochira",
    english: "that way; there (polite)",
    french: "par là; là-bas (poli)",
    level: "N5",
    category: "location",
    wordType: "pronoun",
    examples: [
      {
        japanese: "出口はそちらです。",
        hiragana: "でぐちはそちらです。",
        romaji: "Deguchi wa sochira desu.",
        english: "The exit is that way.",
        french: "La sortie est par là."
      }
    ]
  },
  {
    id: "socchi",
    japanese: "そっち",
    hiragana: "そっち",
    romaji: "socchi",
    english: "that way; there (casual)",
    french: "par là; là-bas (familier)",
    level: "N5",
    category: "location",
    wordType: "pronoun",
    examples: [
      {
        japanese: "そっちに行ってもいい？",
        hiragana: "そっちにいってもいい？",
        romaji: "Socchi ni itte mo ii?",
        english: "Can I go over there?",
        french: "Je peux aller par là ?"
      }
    ]
  },
  {
    id: "soba_near",
    japanese: "そば",
    hiragana: "そば",
    romaji: "soba",
    english: "near; nearby",
    french: "près; à proximité",
    level: "N5",
    category: "location",
    wordType: "noun",
    examples: [
      {
        japanese: "駅のそばに住んでいます。",
        hiragana: "えきのそばにすんでいます。",
        romaji: "Eki no soba ni sunde imasu.",
        english: "I live near the station.",
        french: "J'habite près de la gare."
      }
    ]
  },
  {
    id: "sora",
    japanese: "空",
    hiragana: "そら",
    romaji: "sora",
    english: "sky",
    french: "ciel",
    level: "N5",
    category: "nature",
    wordType: "noun",
    examples: [
      {
        japanese: "空が青いです。",
        hiragana: "そらがあおいです。",
        romaji: "Sora ga aoi desu.",
        english: "The sky is blue.",
        french: "Le ciel est bleu."
      }
    ]
  },
  {
    id: "sore",
    japanese: "それ",
    hiragana: "それ",
    romaji: "sore",
    english: "that (near listener)",
    french: "ça; cela (près de l'interlocuteur)",
    level: "N5",
    category: "demonstrative",
    wordType: "pronoun",
    examples: [
      {
        japanese: "それは何ですか。",
        hiragana: "それはなんですか。",
        romaji: "Sore wa nan desu ka?",
        english: "What is that?",
        french: "Qu'est-ce que c'est ?"
      }
    ]
  },
  {
    id: "sorekara",
    japanese: "それから",
    hiragana: "それから",
    romaji: "sorekara",
    english: "after that; and then",
    french: "ensuite; après cela",
    level: "N5",
    category: "connector",
    wordType: "conjunction",
    examples: [
      {
        japanese: "勉強して、それから寝ます。",
        hiragana: "べんきょうして、それからねます。",
        romaji: "Benkyou shite, sorekara nemasu.",
        english: "I study and then go to sleep.",
        french: "J'étudie puis je vais dormir."
      }
    ]
  },
  {
    id: "soredewa",
    japanese: "それでは",
    hiragana: "それでは",
    romaji: "soredewa",
    english: "well then; if so",
    french: "eh bien; dans ce cas",
    level: "N5",
    category: "connector",
    wordType: "conjunction",
    examples: [
      {
        japanese: "それでは、また明日。",
        hiragana: "それでは、またあした。",
        romaji: "Soredewa, mata ashita.",
        english: "Well then, see you tomorrow.",
        french: "Eh bien, à demain."
      }
    ]
  },
  {
    id: "daigaku",
    japanese: "大学",
    hiragana: "だいがく",
    romaji: "daigaku",
    english: "university",
    french: "université",
    level: "N5",
    category: "education",
    wordType: "noun",
    examples: [
      {
        japanese: "大学で日本語を勉強しています。",
        hiragana: "だいがくでにほんごをべんきょうしています。",
        romaji: "Daigaku de nihongo o benkyou shite imasu.",
        english: "I study Japanese at university.",
        french: "J'étudie le japonais à l'université."
      }
    ]
  },
  {
    id: "daijoubu",
    japanese: "大丈夫",
    hiragana: "だいじょうぶ",
    romaji: "daijoubu",
    english: "all right; okay",
    french: "ça va; d'accord",
    level: "N5",
    category: "expression",
    wordType: "na-adjective",
    examples: [
      {
        japanese: "心配しないで、大丈夫です。",
        hiragana: "しんぱいしないで、だいじょうぶです。",
        romaji: "Shinpai shinaide, daijoubu desu.",
        english: "Don't worry, it's all right.",
        french: "Ne t'inquiète pas, ça va."
      }
    ]
  },
  {
    id: "daisuki",
    japanese: "大好き",
    hiragana: "だいすき",
    romaji: "daisuki",
    english: "love; really like",
    french: "adorer; aimer beaucoup",
    level: "N5",
    category: "emotion",
    wordType: "na-adjective",
    examples: [
      {
        japanese: "犬が大好きです。",
        hiragana: "いぬがだいすきです。",
        romaji: "Inu ga daisuki desu.",
        english: "I love dogs.",
        french: "J'adore les chiens."
      }
    ]
  },
  {
    id: "taitei",
    japanese: "たいてい",
    hiragana: "たいてい",
    romaji: "taitei",
    english: "usually",
    french: "d'habitude",
    level: "N5",
    category: "frequency",
    wordType: "adverb",
    examples: [
      {
        japanese: "たいてい朝コーヒーを飲みます。",
        hiragana: "たいていあさこーひーをのみます。",
        romaji: "Taitei asa koohii o nomimasu.",
        english: "I usually drink coffee in the morning.",
        french: "Je bois généralement du café le matin."
      }
    ]
  },
  {
    id: "taihen",
    japanese: "大変",
    hiragana: "たいへん",
    romaji: "taihen",
    english: "terrible; very",
    french: "terrible; très",
    level: "N5",
    category: "adjective",
    wordType: "na-adjective/adverb",
    examples: [
      {
        japanese: "宿題が大変です。",
        hiragana: "しゅくだいがたいへんです。",
        romaji: "Shukudai ga taihen desu.",
        english: "Homework is tough.",
        french: "Les devoirs sont durs."
      }
    ]
  },
  {
    id: "takai",
    japanese: "高い",
    hiragana: "たかい",
    romaji: "takai",
    english: "tall; expensive",
    french: "grand; cher",
    level: "N5",
    category: "adjective",
    wordType: "i-adjective",
    examples: [
      {
        japanese: "この本は高いです。",
        hiragana: "このほんはたかいです。",
        romaji: "Kono hon wa takai desu.",
        english: "This book is expensive.",
        french: "Ce livre est cher."
      }
    ]
  },
  {
    id: "takusan",
    japanese: "たくさん",
    hiragana: "たくさん",
    romaji: "takusan",
    english: "many; much",
    french: "beaucoup",
    level: "N5",
    category: "quantity",
    wordType: "adverb/noun",
    examples: [
      {
        japanese: "たくさんの人が来ました。",
        hiragana: "たくさんのひとがきました。",
        romaji: "Takusan no hito ga kimashita.",
        english: "Many people came.",
        french: "Beaucoup de gens sont venus."
      }
    ]
  },
  {
    id: "takushii",
    japanese: "タクシー",
    hiragana: "たくしー",
    romaji: "takushii",
    english: "taxi",
    french: "taxi",
    level: "N5",
    category: "transport",
    wordType: "noun",
    examples: [
      {
        japanese: "タクシーで帰りました。",
        hiragana: "たくしーでかえりました。",
        romaji: "Takushii de kaerimashita.",
        english: "I went home by taxi.",
        french: "Je suis rentré en taxi."
      }
    ]
  },
  {
    id: "tatami",
    japanese: "畳",
    hiragana: "たたみ",
    romaji: "tatami",
    english: "tatami (straw mat)",
    french: "tatami (tapis de paille)",
    level: "N5",
    category: "object",
    wordType: "noun",
    examples: [
      {
        japanese: "畳の部屋に住んでいます。",
        hiragana: "たたみのへやにすんでいます。",
        romaji: "Tatami no heya ni sunde imasu.",
        english: "I live in a room with tatami.",
        french: "Je vis dans une chambre avec des tatamis."
      }
    ]
  },
  {
    id: "tatsu",
    japanese: "立つ",
    hiragana: "たつ",
    romaji: "tatsu",
    english: "to stand",
    french: "se lever; se tenir debout",
    level: "N5",
    category: "verb",
    wordType: "godan verb",
    examples: [
      {
        japanese: "椅子から立ちます。",
        hiragana: "いすからたちます。",
        romaji: "Isu kara tachimasu.",
        english: "I stand up from the chair.",
        french: "Je me lève de la chaise."
      }
    ]
  },
  {
    id: "tatemono",
    japanese: "建物",
    hiragana: "たてもの",
    romaji: "tatemono",
    english: "building",
    french: "bâtiment",
    level: "N5",
    category: "place",
    wordType: "noun",
    examples: [
      {
        japanese: "この建物は古いです。",
        hiragana: "このたてものはふるいです。",
        romaji: "Kono tatemono wa furui desu.",
        english: "This building is old.",
        french: "Ce bâtiment est ancien."
      }
    ]
  },
  {
    id: "tanoshii",
    japanese: "楽しい",
    hiragana: "たのしい",
    romaji: "tanoshii",
    english: "enjoyable; fun",
    french: "amusant; agréable",
    level: "N5",
    category: "emotion",
    wordType: "i-adjective",
    examples: [
      {
        japanese: "パーティーは楽しかったです。",
        hiragana: "ぱーてぃーはたのしかったです。",
        romaji: "Paatii wa tanoshikatta desu.",
        english: "The party was fun.",
        french: "La fête était amusante."
      }
    ]
  },
  {
    id: "tabako",
    japanese: "たばこ",
    hiragana: "たばこ",
    romaji: "tabako",
    english: "cigarette; tobacco",
    french: "cigarette; tabac",
    level: "N5",
    category: "object",
    wordType: "noun",
    examples: [
      {
        japanese: "たばこをやめたいです。",
        hiragana: "たばこをやめたいです。",
        romaji: "Tabako o yametai desu.",
        english: "I want to quit smoking.",
        french: "Je veux arrêter de fumer."
      }
    ]
  },
  {
    id: "tabemono",
    japanese: "食べ物",
    hiragana: "たべもの",
    romaji: "tabemono",
    english: "food",
    french: "nourriture",
    level: "N5",
    category: "food",
    wordType: "noun",
    examples: [
      {
        japanese: "日本の食べ物は美味しいです。",
        hiragana: "にほんのたべものはおいしいです。",
        romaji: "Nihon no tabemono wa oishii desu.",
        english: "Japanese food is delicious.",
        french: "La nourriture japonaise est délicieuse."
      }
    ]
  },
  {
    id: "tamago",
    japanese: "卵",
    hiragana: "たまご",
    romaji: "tamago",
    english: "egg",
    french: "œuf",
    level: "N5",
    category: "food",
    wordType: "noun",
    examples: [
      {
        japanese: "卵を二つください。",
        hiragana: "たまごをふたつください。",
        romaji: "Tamago o futatsu kudasai.",
        english: "Two eggs, please.",
        french: "Deux œufs, s'il vous plaît."
      }
    ]
  },
  {
    id: "dame",
    japanese: "だめ",
    hiragana: "だめ",
    romaji: "dame",
    english: "no good; not allowed",
    french: "pas bon; interdit",
    level: "N5",
    category: "expression",
    wordType: "na-adjective",
    examples: [
      {
        japanese: "ここでたばこはだめです。",
        hiragana: "ここでたばこはだめです。",
        romaji: "Koko de tabako wa dame desu.",
        english: "Smoking is not allowed here.",
        french: "Il est interdit de fumer ici."
      }
    ]
  },
  {
    id: "dare",
    japanese: "誰",
    hiragana: "だれ",
    romaji: "dare",
    english: "who",
    french: "qui",
    level: "N5",
    category: "pronoun",
    wordType: "pronoun",
    examples: [
      {
        japanese: "あの人は誰ですか。",
        hiragana: "あのひとはだれですか。",
        romaji: "Ano hito wa dare desu ka?",
        english: "Who is that person?",
        french: "Qui est cette personne ?"
      }
    ]
  },
  {
    id: "tanjoubi",
    japanese: "誕生日",
    hiragana: "たんじょうび",
    romaji: "tanjoubi",
    english: "birthday",
    french: "anniversaire",
    level: "N5",
    category: "time",
    wordType: "noun",
    examples: [
      {
        japanese: "誕生日おめでとう！",
        hiragana: "たんじょうびおめでとう！",
        romaji: "Tanjoubi omedetou!",
        english: "Happy birthday!",
        french: "Joyeux anniversaire !"
      }
    ]
  },
  {
    id: "chiisai",
    japanese: "小さい",
    hiragana: "ちいさい",
    romaji: "chiisai",
    english: "small",
    french: "petit",
    level: "N5",
    category: "adjective",
    wordType: "i-adjective",
    examples: [
      {
        japanese: "小さい犬がいます。",
        hiragana: "ちいさいいぬがいます。",
        romaji: "Chiisai inu ga imasu.",
        english: "There is a small dog.",
        french: "Il y a un petit chien."
      }
    ]
  },
  {
    id: "chikai",
    japanese: "近い",
    hiragana: "ちかい",
    romaji: "chikai",
    english: "near; close",
    french: "près; proche",
    level: "N5",
    category: "location",
    wordType: "i-adjective",
    examples: [
      {
        japanese: "駅はここから近いです。",
        hiragana: "えきはここからちかいです。",
        romaji: "Eki wa koko kara chikai desu.",
        english: "The station is near here.",
        french: "La gare est proche d'ici."
      }
    ]
  },
  {
    id: "chikaku",
    japanese: "近く",
    hiragana: "ちかく",
    romaji: "chikaku",
    english: "nearby; vicinity",
    french: "à proximité",
    level: "N5",
    category: "location",
    wordType: "adverb/noun",
    examples: [
      {
        japanese: "近くの店でパンを買いました。",
        hiragana: "ちかくのみせでぱんをかいました。",
        romaji: "Chikaku no mise de pan o kaimashita.",
        english: "I bought bread at a nearby store.",
        french: "J'ai acheté du pain dans un magasin à proximité."
      }
    ]
  },
  {
    id: "chigau",
    japanese: "違う",
    hiragana: "ちがう",
    romaji: "chigau",
    english: "to differ; to be wrong",
    french: "différer; se tromper",
    level: "N5",
    category: "verb",
    wordType: "godan verb",
    examples: [
      {
        japanese: "それは違います。",
        hiragana: "それはちがいます。",
        romaji: "Sore wa chigaimasu.",
        english: "That is wrong.",
        french: "Ce n'est pas correct."
      }
    ]
  },
  {
    id: "chichi",
    japanese: "父",
    hiragana: "ちち",
    romaji: "chichi",
    english: "father (humble)",
    french: "père (modeste)",
    level: "N5",
    category: "family",
    wordType: "noun",
    examples: [
      {
        japanese: "父は会社員です。",
        hiragana: "ちちはかいしゃいんです。",
        romaji: "Chichi wa kaishain desu.",
        english: "My father is a company employee.",
        french: "Mon père est employé de bureau."
      }
    ]
  },
  {
    id: "chairo",
    japanese: "茶色",
    hiragana: "ちゃいろ",
    romaji: "chairo",
    english: "brown (noun)",
    french: "marron (nom)",
    level: "N5",
    category: "color",
    wordType: "noun",
    examples: [
      {
        japanese: "茶色が好きです。",
        hiragana: "ちゃいろがすきです。",
        romaji: "Chairo ga suki desu.",
        english: "I like brown.",
        french: "J'aime le marron."
      }
    ]
  },
  {
    id: "chairoi",
    japanese: "茶色い",
    hiragana: "ちゃいろい",
    romaji: "chairoi",
    english: "brown (adjective)",
    french: "marron (adjectif)",
    level: "N5",
    category: "color",
    wordType: "i-adjective",
    examples: [
      {
        japanese: "茶色い靴を履いています。",
        hiragana: "ちゃいろいくつをはいています。",
        romaji: "Chairoi kutsu o haite imasu.",
        english: "I am wearing brown shoes.",
        french: "Je porte des chaussures marron."
      }
    ]
  },
  {
    id: "chawan",
    japanese: "茶碗",
    hiragana: "ちゃわん",
    romaji: "chawan",
    english: "rice bowl",
    french: "bol à riz",
    level: "N5",
    category: "kitchen",
    wordType: "noun",
    examples: [
      {
        japanese: "茶碗にご飯を入れます。",
        hiragana: "ちゃわんにごはんをいれます。",
        romaji: "Chawan ni gohan o iremasu.",
        english: "I put rice in the bowl.",
        french: "Je mets du riz dans le bol."
      }
    ]
  },
  {
    id: "chuugakkou",
    japanese: "中学校",
    hiragana: "ちゅうがっこう",
    romaji: "chuugakkou",
    english: "middle school",
    french: "collège",
    level: "N5",
    category: "education",
    wordType: "noun",
    examples: [
      {
        japanese: "弟は中学校に通っています。",
        hiragana: "おとうとはちゅうがっこうにかよっています。",
        romaji: "Otouto wa chuugakkou ni kayotte imasu.",
        english: "My younger brother goes to middle school.",
        french: "Mon petit frère va au collège."
      }
    ]
  },
  {
    id: "choudo",
    japanese: "ちょうど",
    hiragana: "ちょうど",
    romaji: "choudo",
    english: "exactly; just",
    french: "exactement; juste",
    level: "N5",
    category: "adverb",
    wordType: "adverb",
    examples: [
      {
        japanese: "ちょうど三時に会いましょう。",
        hiragana: "ちょうどさんじにあいましょう。",
        romaji: "Choudo san-ji ni aimashou.",
        english: "Let's meet exactly at three o'clock.",
        french: "Retrouvons-nous exactement à trois heures."
      }
    ]
  },
  {
    id: "chotto",
    japanese: "ちょっと",
    hiragana: "ちょっと",
    romaji: "chotto",
    english: "a little; just a moment",
    french: "un peu; un instant",
    level: "N5",
    category: "adverb",
    wordType: "adverb",
    examples: [
      {
        japanese: "ちょっと待ってください。",
        hiragana: "ちょっとまってください。",
        romaji: "Chotto matte kudasai.",
        english: "Please wait a moment.",
        french: "Attendez un instant, s'il vous plaît."
      }
    ]
  },
  {
    id: "to",
    japanese: "と",
    hiragana: "と",
    romaji: "to",
    english: "and",
    french: "et",
    german: "und",
    vietnamese: "và",
    chinese: "和",
    korean: "그리고",
    spanish: "y",
    level: "N5",
    category: "grammar",
    wordType: "particle",
    examples: [
      {
        japanese: "パンと水をください。",
        hiragana: "ぱんとみずをください。",
        romaji: "Pan to mizu o kudasai.",
        english: "Bread and water, please.",
        french: "Du pain et de l'eau, s'il vous plaît.",
        german: "Brot und Wasser, bitte.",
        vietnamese: "Xin cho bánh mì và nước.",
        chinese: "请给我面包和水。",
        korean: "빵과 물을 주세요.",
        spanish: "Pan y agua, por favor."
      }
    ]
  },
  {
    id: "doa",
    japanese: "ドア",
    hiragana: "どあ",
    romaji: "doa",
    english: "door",
    french: "porte",
    german: "Tür",
    vietnamese: "cửa",
    chinese: "门",
    korean: "문",
    spanish: "puerta",
    level: "N5",
    category: "object",
    wordType: "noun",
    examples: [
      {
        japanese: "ドアを開けてください。",
        hiragana: "どあをあけてください。",
        romaji: "Doa o akete kudasai.",
        english: "Please open the door.",
        french: "Ouvrez la porte, s'il vous plaît.",
        german: "Bitte öffne die Tür.",
        vietnamese: "Xin hãy mở cửa.",
        chinese: "请开门。",
        korean: "문을 열어주세요.",
        spanish: "Por favor, abre la puerta."
      }
    ]
  },
  {
    id: "toire",
    japanese: "トイレ",
    hiragana: "といれ",
    romaji: "toire",
    english: "toilet",
    french: "toilettes",
    german: "Toilette",
    vietnamese: "nhà vệ sinh",
    chinese: "厕所",
    korean: "화장실",
    spanish: "baño",
    level: "N5",
    category: "place",
    wordType: "noun",
    examples: [
      {
        japanese: "トイレはどこですか。",
        hiragana: "といれはどこですか。",
        romaji: "Toire wa doko desu ka?",
        english: "Where is the toilet?",
        french: "Où sont les toilettes ?",
        german: "Wo ist die Toilette?",
        vietnamese: "Nhà vệ sinh ở đâu?",
        chinese: "厕所在哪里？",
        korean: "화장실이 어디에 있습니까?",
        spanish: "¿Dónde está el baño?"
      }
    ]
  },
  {
    id: "dou",
    japanese: "どう",
    hiragana: "どう",
    romaji: "dou",
    english: "how",
    french: "comment",
    german: "wie",
    vietnamese: "như thế nào",
    chinese: "怎么",
    korean: "어떻게",
    spanish: "cómo",
    level: "N5",
    category: "expression",
    wordType: "adverb",
    examples: [
      {
        japanese: "お元気ですか。— どう？",
        hiragana: "おげんきですか。— どう？",
        romaji: "Ogenki desu ka? — Dou?",
        english: "How are you?",
        french: "Comment ça va ?",
        german: "Wie geht es dir?",
        vietnamese: "Bạn khỏe không?",
        chinese: "你好吗？",
        korean: "잘 지냈어요?",
        spanish: "¿Cómo estás?"
      }
    ]
  },
  {
    id: "doushite",
    japanese: "どうして",
    hiragana: "どうして",
    romaji: "doushite",
    english: "why",
    french: "pourquoi",
    german: "warum",
    vietnamese: "tại sao",
    chinese: "为什么",
    korean: "왜",
    spanish: "por qué",
    level: "N5",
    category: "expression",
    wordType: "adverb",
    examples: [
      {
        japanese: "どうして遅れましたか。",
        hiragana: "どうしておくれましたか。",
        romaji: "Doushite okuremashita ka?",
        english: "Why were you late?",
        french: "Pourquoi es-tu en retard ?",
        german: "Warum bist du zu spät?",
        vietnamese: "Tại sao bạn đến muộn?",
        chinese: "你为什么迟到了？",
        korean: "왜 늦었어요?",
        spanish: "¿Por qué llegaste tarde?"
      }
    ]
  },
  {
    id: "nai",
    japanese: "ない",
    hiragana: "ない",
    romaji: "nai",
    english: "there isn't; not",
    french: "il n'y a pas; ne pas",
    german: "es gibt nicht; kein",
    vietnamese: "không có",
    chinese: "没有",
    korean: "없다",
    spanish: "no hay; no",
    level: "N5",
    category: "grammar",
    wordType: "auxiliary/adjective",
    examples: [
      {
        japanese: "お金がないです。",
        hiragana: "おかねがないです。",
        romaji: "Okane ga nai desu.",
        english: "I don't have money.",
        french: "Je n'ai pas d'argent.",
        german: "Ich habe kein Geld.",
        vietnamese: "Tôi không có tiền.",
        chinese: "我没有钱。",
        korean: "돈이 없습니다.",
        spanish: "No tengo dinero."
      }
    ]
  },
  {
    id: "naka",
    japanese: "中",
    hiragana: "なか",
    romaji: "naka",
    english: "inside",
    french: "à l'intérieur",
    german: "innen",
    vietnamese: "bên trong",
    chinese: "里面",
    korean: "안",
    spanish: "dentro",
    level: "N5",
    category: "location",
    wordType: "noun",
    examples: [
      {
        japanese: "箱の中に本があります。",
        hiragana: "はこのなかにほんがあります。",
        romaji: "Hako no naka ni hon ga arimasu.",
        english: "There is a book inside the box.",
        french: "Il y a un livre dans la boîte.",
        german: "In der Kiste ist ein Buch.",
        vietnamese: "Có một cuốn sách trong hộp.",
        chinese: "箱子里有一本书。",
        korean: "상자 안에 책이 있습니다.",
        spanish: "Hay un libro dentro de la caja."
      }
    ]
  },
  {
    id: "nagai",
    japanese: "長い",
    hiragana: "ながい",
    romaji: "nagai",
    english: "long",
    french: "long",
    german: "lang",
    vietnamese: "dài",
    chinese: "长的",
    korean: "긴",
    spanish: "largo",
    level: "N5",
    category: "adjective",
    wordType: "i-adjective",
    examples: [
      {
        japanese: "彼女の髪は長いです。",
        hiragana: "かのじょのかみはながいです。",
        romaji: "Kanojo no kami wa nagai desu.",
        english: "Her hair is long.",
        french: "Ses cheveux sont longs.",
        german: "Ihr Haar ist lang.",
        vietnamese: "Tóc của cô ấy dài.",
        chinese: "她的头发很长。",
        korean: "그녀의 머리카락은 깁니다.",
        spanish: "Su cabello es largo."
      }
    ]
  },
  {
    id: "naku",
    japanese: "泣く",
    hiragana: "なく",
    romaji: "naku",
    english: "to cry",
    french: "pleurer",
    german: "weinen",
    vietnamese: "khóc",
    chinese: "哭",
    korean: "울다",
    spanish: "llorar",
    level: "N5",
    category: "verb",
    wordType: "verb",
    examples: [
      {
        japanese: "赤ちゃんが泣いています。",
        hiragana: "あかちゃんがないています。",
        romaji: "Akachan ga naite imasu.",
        english: "The baby is crying.",
        french: "Le bébé pleure.",
        german: "Das Baby weint.",
        vietnamese: "Em bé đang khóc.",
        chinese: "宝宝在哭。",
        korean: "아기가 울고 있습니다.",
        spanish: "El bebé está llorando."
      }
    ]
  },
  {
    id: "nakusu",
    japanese: "なくす",
    hiragana: "なくす",
    romaji: "nakusu",
    english: "to lose",
    french: "perdre",
    german: "verlieren",
    vietnamese: "mất",
    chinese: "丢失",
    korean: "잃다",
    spanish: "perder",
    level: "N5",
    category: "verb",
    wordType: "verb",
    examples: [
      {
        japanese: "財布をなくしました。",
        hiragana: "さいふをなくしました。",
        romaji: "Saifu o nakushimashita.",
        english: "I lost my wallet.",
        french: "J'ai perdu mon portefeuille.",
        german: "Ich habe mein Portemonnaie verloren.",
        vietnamese: "Tôi đã làm mất ví.",
        chinese: "我丢了钱包。",
        korean: "지갑을 잃어버렸습니다.",
        spanish: "Perdí mi cartera."
      }
    ]
  },
  {
    id: "naze",
    japanese: "なぜ",
    hiragana: "なぜ",
    romaji: "naze",
    english: "why",
    french: "pourquoi",
    german: "weshalb",
    vietnamese: "tại sao",
    chinese: "为什么",
    korean: "왜",
    spanish: "por qué",
    level: "N5",
    category: "expression",
    wordType: "adverb",
    examples: [
      {
        japanese: "なぜ遅れたのですか。",
        hiragana: "なぜひどくれたのですか。",
        romaji: "Naze okureta no desu ka?",
        english: "Why were you late?",
        french: "Pourquoi es-tu en retard ?",
        german: "Weshalb bist du zu spät?",
        vietnamese: "Tại sao bạn đến muộn?",
        chinese: "你为什么迟到了？",
        korean: "왜 늦었습니까?",
        spanish: "¿Por qué llegaste tarde?"
      }
    ]
  },
  {
    id: "natsu",
    japanese: "夏",
    hiragana: "なつ",
    romaji: "natsu",
    english: "summer",
    french: "été",
    german: "Sommer",
    vietnamese: "mùa hè",
    chinese: "夏天",
    korean: "여름",
    spanish: "verano",
    level: "N5",
    category: "season",
    wordType: "noun",
    examples: [
      {
        japanese: "夏は暑いです。",
        hiragana: "なつはあついです。",
        romaji: "Natsu wa atsui desu.",
        english: "Summer is hot.",
        french: "L'été est chaud.",
        german: "Der Sommer ist heiß.",
        vietnamese: "Mùa hè thì nóng.",
        chinese: "夏天很热。",
        korean: "여름은 덥습니다.",
        spanish: "El verano es caluroso."
      }
    ]
  },
  {
    id: "natsuyasumi",
    japanese: "夏休み",
    hiragana: "なつやすみ",
    romaji: "natsuyasumi",
    english: "summer vacation",
    french: "vacances d'été",
    german: "Sommerferien",
    vietnamese: "kỳ nghỉ hè",
    chinese: "暑假",
    korean: "여름방학",
    spanish: "vacaciones de verano",
    level: "N5",
    category: "time",
    wordType: "noun",
    examples: [
      {
        japanese: "夏休みに旅行しました。",
        hiragana: "なつやすみにりょこうしました。",
        romaji: "Natsuyasumi ni ryokou shimashita.",
        english: "I traveled during summer vacation.",
        french: "J'ai voyagé pendant les vacances d'été.",
        german: "Ich bin den Sommerferien verreist.",
        vietnamese: "Tôi đã đi du lịch trong kỳ nghỉ hè.",
        chinese: "我在暑假去旅行了。",
        korean: "여름방학에 여행을 갔습니다.",
        spanish: "Viajé en las vacaciones de verano."
      }
    ]
  },
  {
    id: "nado",
    japanese: "など",
    hiragana: "など",
    romaji: "nado",
    english: "and so on; etc.",
    french: "etc.; et ainsi de suite",
    german: "und so weiter",
    vietnamese: "vân vân",
    chinese: "等等",
    korean: "등등",
    spanish: "etcétera",
    level: "N5",
    category: "grammar",
    wordType: "particle",
    examples: [
      {
        japanese: "本や雑誌などを読みます。",
        hiragana: "ほんやざっしなどをよみます。",
        romaji: "Hon ya zasshi nado o yomimasu.",
        english: "I read books, magazines, and so on.",
        french: "Je lis des livres, des magazines, etc.",
        german: "Ich lese Bücher, Zeitschriften usw.",
        vietnamese: "Tôi đọc sách, tạp chí, vân vân.",
        chinese: "我读书、杂志等等。",
        korean: "책, 잡지 등을 읽습니다.",
        spanish: "Leo libros, revistas, etcétera."
      }
    ]
  },
  {
    id: "nanatsu",
    japanese: "七つ",
    hiragana: "ななつ",
    romaji: "nanatsu",
    english: "seven (things)",
    french: "sept (objets)",
    german: "sieben (Dinge)",
    vietnamese: "bảy (đồ vật)",
    chinese: "七个",
    korean: "일곱 (개)",
    spanish: "siete (cosas)",
    level: "N5",
    category: "number",
    wordType: "counter",
    examples: [
      {
        japanese: "りんごを七つ買いました。",
        hiragana: "りんごをななつかいました。",
        romaji: "Ringo o nanatsu kaimashita.",
        english: "I bought seven apples.",
        french: "J'ai acheté sept pommes.",
        german: "Ich habe sieben Äpfel gekauft.",
        vietnamese: "Tôi đã mua bảy quả táo.",
        chinese: "我买了七个苹果。",
        korean: "사과를 일곱 개 샀습니다.",
        spanish: "Compré siete manzanas."
      }
    ]
  },
  {
    id: "nani",
    japanese: "何",
    hiragana: "なに／なん",
    romaji: "nani / nan",
    english: "what",
    french: "quoi",
    german: "was",
    vietnamese: "cái gì",
    chinese: "什么",
    korean: "무엇",
    spanish: "qué",
    level: "N5",
    category: "question",
    wordType: "pronoun",
    examples: [
      {
        japanese: "これは何ですか。",
        hiragana: "これはなんですか。",
        romaji: "Kore wa nan desu ka?",
        english: "What is this?",
        french: "Qu'est-ce que c'est ?",
        german: "Was ist das?",
        vietnamese: "Đây là cái gì?",
        chinese: "这是什么？",
        korean: "이것은 무엇입니까?",
        spanish: "¿Qué es esto?"
      }
    ]
  },
  {
    id: "namae",
    japanese: "名前",
    hiragana: "なまえ",
    romaji: "namae",
    english: "name",
    french: "nom",
    german: "Name",
    vietnamese: "tên",
    chinese: "名字",
    korean: "이름",
    spanish: "nombre",
    level: "N5",
    category: "personal",
    wordType: "noun",
    examples: [
      {
        japanese: "あなたの名前は何ですか。",
        hiragana: "あなたのなまえはなんですか。",
        romaji: "Anata no namae wa nan desu ka?",
        english: "What is your name?",
        french: "Quel est ton nom ?",
        german: "Wie heißt du?",
        vietnamese: "Tên bạn là gì?",
        chinese: "你叫什么名字？",
        korean: "당신의 이름은 무엇입니까?",
        spanish: "¿Cuál es tu nombre?"
      }
    ]
  },
  {
    id: "naru",
    japanese: "なる",
    hiragana: "なる",
    romaji: "naru",
    english: "to become",
    french: "devenir",
    german: "werden",
    vietnamese: "trở thành",
    chinese: "成为",
    korean: "되다",
    spanish: "convertirse en",
    level: "N5",
    category: "verb",
    wordType: "verb",
    examples: [
      {
        japanese: "先生になりたいです。",
        hiragana: "せんせいになりたいです。",
        romaji: "Sensei ni naritai desu.",
        english: "I want to become a teacher.",
        french: "Je veux devenir professeur.",
        german: "Ich möchte Lehrer werden.",
        vietnamese: "Tôi muốn trở thành giáo viên.",
        chinese: "我想成为老师。",
        korean: "선생님이 되고 싶습니다.",
        spanish: "Quiero convertirme en profesor."
      }
    ]
  }
];

export const categories = [...new Set(vocabularyData.map(word => word.category))];
export const levels = ['N5', 'N4', 'N3', 'N2', 'N1'] as const;