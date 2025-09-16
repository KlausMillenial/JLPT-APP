interface TranslationRequest {
  text: string;
  targetLanguages: string[];
  sourceLanguage?: string;
}

interface TranslationResponse {
  [language: string]: string;
}

export class TranslationService {
  private apiKey: string;
  private baseUrl = 'https://api.openai.com/v1/chat/completions';

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  async translateText(request: TranslationRequest): Promise<TranslationResponse> {
    if (!this.apiKey) {
      throw new Error('OpenAI API key is required for translation');
    }

    const { text, targetLanguages, sourceLanguage = 'english' } = request;
    
    const prompt = `Translate the following ${sourceLanguage} text into the specified languages. Return ONLY a JSON object with language codes as keys and translations as values. Be accurate and consider context for language learning.

Text to translate: "${text}"

Target languages:
- german: German
- vietnamese: Vietnamese  
- chinese: Simplified Chinese
- korean: Korean
- spanish: Spanish

Return format:
{
  "german": "translation here",
  "vietnamese": "translation here", 
  "chinese": "translation here",
  "korean": "translation here",
  "spanish": "translation here"
}`;

    try {
      const response = await fetch(this.baseUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`,
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'user',
              content: prompt
            }
          ],
          temperature: 0.1,
          max_tokens: 500
        })
      });

      if (!response.ok) {
        throw new Error(`Translation API error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      const translatedText = data.choices[0]?.message?.content?.trim();
      
      if (!translatedText) {
        throw new Error('No translation received from API');
      }

      // Parse the JSON response
      try {
        const translations = JSON.parse(translatedText);
        return translations;
      } catch (parseError) {
        console.error('Failed to parse translation response:', translatedText);
        throw new Error('Invalid translation response format');
      }
    } catch (error) {
      console.error('Translation error:', error);
      throw error;
    }
  }

  async translateVocabularyEntry(word: any): Promise<any> {
    try {
      // Translate main word
      const wordTranslations = await this.translateText({
        text: word.english,
        targetLanguages: ['german', 'vietnamese', 'chinese', 'korean', 'spanish']
      });

      // Translate example sentence
      let exampleTranslations: TranslationResponse = {};
      if (word.examples && word.examples[0]) {
        exampleTranslations = await this.translateText({
          text: word.examples[0].english,
          targetLanguages: ['german', 'vietnamese', 'chinese', 'korean', 'spanish']
        });
      }

      return {
        ...word,
        german: wordTranslations.german,
        vietnamese: wordTranslations.vietnamese,
        chinese: wordTranslations.chinese,
        korean: wordTranslations.korean,
        spanish: wordTranslations.spanish,
        examples: word.examples ? [{
          ...word.examples[0],
          german: exampleTranslations.german || '',
          vietnamese: exampleTranslations.vietnamese || '',
          chinese: exampleTranslations.chinese || '',
          korean: exampleTranslations.korean || '',
          spanish: exampleTranslations.spanish || '',
        }] : []
      };
    } catch (error) {
      console.error(`Failed to translate entry ${word.id}:`, error);
      return word; // Return original if translation fails
    }
  }

  static getApiKey(): string | null {
    return localStorage.getItem('openai-api-key');
  }

  static setApiKey(apiKey: string): void {
    localStorage.setItem('openai-api-key', apiKey);
  }

  static removeApiKey(): void {
    localStorage.removeItem('openai-api-key');
  }
}