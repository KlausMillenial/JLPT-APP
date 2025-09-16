import { useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TranslationApiKeyDialog } from './TranslationApiKeyDialog';
import { TranslationService } from '@/services/translationService';
import { vocabularyData } from '@/data/vocabulary';
import { Globe, Download, AlertCircle, CheckCircle2, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

interface TranslationStats {
  total: number;
  translated: number;
  failed: number;
  inProgress: boolean;
}

export const TranslationManager = () => {
  const [showApiDialog, setShowApiDialog] = useState(false);
  const [translationStats, setTranslationStats] = useState<TranslationStats>({
    total: 0,
    translated: 0,
    failed: 0,
    inProgress: false
  });
  const [translatedData, setTranslatedData] = useState<any[]>([]);

  const hasApiKey = useCallback(() => {
    return !!TranslationService.getApiKey();
  }, []);

  const countMissingTranslations = useCallback(() => {
    let missing = 0;
    vocabularyData.forEach(word => {
      if (!word.german || !word.vietnamese || !word.chinese || !word.korean || !word.spanish) {
        missing++;
      }
    });
    return missing;
  }, []);

  const startTranslation = useCallback(async () => {
    const apiKey = TranslationService.getApiKey();
    if (!apiKey) {
      setShowApiDialog(true);
      return;
    }

    const translationService = new TranslationService(apiKey);
    const wordsToTranslate = vocabularyData.filter(word => 
      !word.german || !word.vietnamese || !word.chinese || !word.korean || !word.spanish
    );

    if (wordsToTranslate.length === 0) {
      toast.success('All vocabulary entries are already translated!');
      return;
    }

    setTranslationStats({
      total: wordsToTranslate.length,
      translated: 0,
      failed: 0,
      inProgress: true
    });

    const translatedEntries: any[] = [];
    let translated = 0;
    let failed = 0;

    toast.info(`Starting translation of ${wordsToTranslate.length} entries...`);

    for (const word of wordsToTranslate) {
      try {
        console.log(`Translating: ${word.japanese} (${word.english})`);
        const translatedWord = await translationService.translateVocabularyEntry(word);
        translatedEntries.push(translatedWord);
        translated++;
        
        setTranslationStats(prev => ({
          ...prev,
          translated: translated
        }));

        // Add delay to avoid rate limiting
        await new Promise(resolve => setTimeout(resolve, 1000));
      } catch (error) {
        console.error(`Failed to translate ${word.id}:`, error);
        failed++;
        translatedEntries.push(word); // Keep original if translation fails
        
        setTranslationStats(prev => ({
          ...prev,
          failed: failed
        }));
      }
    }

    // Merge with existing data
    const allData = vocabularyData.map(originalWord => {
      const translatedWord = translatedEntries.find(t => t.id === originalWord.id);
      return translatedWord || originalWord;
    });

    setTranslatedData(allData);
    setTranslationStats(prev => ({
      ...prev,
      inProgress: false
    }));

    toast.success(`Translation complete! ${translated} successful, ${failed} failed.`);
  }, []);

  const downloadTranslatedData = useCallback(() => {
    if (translatedData.length === 0) {
      toast.error('No translated data available to download');
      return;
    }

    // Create the full vocabulary file content
    const interfaceDefinition = `export interface VocabularyWord {
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

export const vocabularyData: VocabularyWord[] = `;

    const dataString = JSON.stringify(translatedData, null, 2);
    const exportString = `${interfaceDefinition}${dataString};

export const categories = [...new Set(vocabularyData.map(word => word.category))];
export const levels = ['N5', 'N4', 'N3', 'N2', 'N1'] as const;`;

    const blob = new Blob([exportString], { type: 'text/typescript' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'vocabulary-translated.ts';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    toast.success('Translated vocabulary file downloaded!');
  }, [translatedData]);

  const missingCount = countMissingTranslations();
  const progress = translationStats.total > 0 ? 
    ((translationStats.translated + translationStats.failed) / translationStats.total) * 100 : 0;

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Globe className="w-5 h-5" />
          Multi-Language Translation
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Status Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">{vocabularyData.length}</div>
            <div className="text-sm text-muted-foreground">Total Words</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-500">{missingCount}</div>
            <div className="text-sm text-muted-foreground">Need Translation</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-500">{vocabularyData.length - missingCount}</div>
            <div className="text-sm text-muted-foreground">Translated</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">5</div>
            <div className="text-sm text-muted-foreground">Languages</div>
          </div>
        </div>

        {/* Language Support */}
        <div>
          <h3 className="text-sm font-medium mb-3">Supported Languages</h3>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">🇩🇪 German</Badge>
            <Badge variant="secondary">🇻🇳 Vietnamese</Badge>
            <Badge variant="secondary">🇨🇳 Chinese</Badge>
            <Badge variant="secondary">🇰🇷 Korean</Badge>
            <Badge variant="secondary">🇪🇸 Spanish</Badge>
          </div>
        </div>

        {/* Translation Progress */}
        {translationStats.inProgress && (
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Translation Progress</span>
              <span>{translationStats.translated + translationStats.failed}/{translationStats.total}</span>
            </div>
            <Progress value={progress} className="h-2" />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-green-500" />
                {translationStats.translated} successful
              </span>
              {translationStats.failed > 0 && (
                <span className="flex items-center gap-1">
                  <AlertCircle className="w-3 h-3 text-red-500" />
                  {translationStats.failed} failed
                </span>
              )}
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="flex gap-3">
          <Button 
            onClick={startTranslation}
            disabled={translationStats.inProgress}
            className="flex-1"
          >
            {translationStats.inProgress ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Translating...
              </>
            ) : (
              <>
                <Globe className="w-4 h-4 mr-2" />
                {hasApiKey() ? 'Start Translation' : 'Setup & Translate'}
              </>
            )}
          </Button>

          {translatedData.length > 0 && (
            <Button variant="outline" onClick={downloadTranslatedData}>
              <Download className="w-4 h-4 mr-2" />
              Download
            </Button>
          )}
        </div>

        {!hasApiKey() && (
          <div className="text-sm text-muted-foreground bg-muted p-3 rounded-lg">
            <AlertCircle className="w-4 h-4 inline mr-2" />
            OpenAI API key required for translation. Click "Setup & Translate" to configure.
          </div>
        )}
      </CardContent>

      <TranslationApiKeyDialog
        isOpen={showApiDialog}
        onClose={() => setShowApiDialog(false)}
        onTranslationStart={startTranslation}
      />
    </Card>
  );
};