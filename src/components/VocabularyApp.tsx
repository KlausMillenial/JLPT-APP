import { useState, useMemo, useCallback, useEffect } from 'react';
import { VocabularyCard } from './VocabularyCard';
import { VocabularyFilters } from './VocabularyFilters';
import { ApiKeyDialog } from './ApiKeyDialog';
import { RunwareApiKeyDialog } from './RunwareApiKeyDialog';
import { TranslationButton } from './TranslationButton';
import { QuizApp } from './QuizApp';
import { vocabularyData } from '@/data/vocabulary';
import { TranslationService } from '@/services/translationService';
import { BookOpen, Users, Star, Brain, Loader2, List } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';
import { removeDuplicatesFromVocabulary, logVocabularyStats } from '@/utils/removeDuplicates';
import { logAllWords, getWordsByCategory, getWordsByLevel } from '@/utils/listAllWords';

type LanguageOption = 'english' | 'french' | 'german' | 'vietnamese' | 'chinese' | 'korean' | 'spanish';

export const VocabularyApp = () => {
  const [currentView, setCurrentView] = useState('vocabulary');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [language, setLanguage] = useState<LanguageOption>('english');
  const [isTranslating, setIsTranslating] = useState(false);
  const [translatedVocabulary, setTranslatedVocabulary] = useState(() => {
    // Use deduplicated vocabulary data
    const uniqueData = removeDuplicatesFromVocabulary();
    console.log('Loaded deduplicated vocabulary with', uniqueData.length, 'entries');
    logVocabularyStats();
    return uniqueData;
  });

  // Function to log all words to console
  const handleShowAllWords = () => {
    const words = logAllWords();
    const categories = getWordsByCategory();
    const levels = getWordsByLevel();
    
    console.log('\n=== WORDS BY CATEGORY ===');
    Object.entries(categories).forEach(([category, words]) => {
      console.log(`\n${category.toUpperCase()} (${words.length} words):`);
      words.forEach(word => {
        console.log(`  - ${word.japanese} (${word.english})`);
      });
    });

    console.log('\n=== WORDS BY LEVEL ===');
    Object.entries(levels).forEach(([level, words]) => {
      console.log(`\n${level} (${words.length} words):`);
      words.forEach(word => {
        console.log(`  - ${word.japanese} (${word.english})`);
      });
    });

    toast.success(`Complete vocabulary list (${words.length} words) logged to console!`);
  };

  const autoTranslateForLanguage = useCallback(async (targetLanguage: LanguageOption) => {
    if (targetLanguage === 'english' || targetLanguage === 'french') return;
    
    const apiKey = TranslationService.getApiKey();
    if (!apiKey) {
      toast.info('Set up OpenAI API key to get automatic translations');
      return;
    }

    const wordsNeedingTranslation = translatedVocabulary.filter(word => !word[targetLanguage]);
    
    if (wordsNeedingTranslation.length === 0) return;

    setIsTranslating(true);
    toast.info(`Auto-translating ${wordsNeedingTranslation.length} words to ${targetLanguage}...`);

    const translationService = new TranslationService(apiKey);
    const updatedWords = [...translatedVocabulary];

    try {
      for (const word of wordsNeedingTranslation.slice(0, 5)) { // Limit to 5 words for quick response
        try {
          const translatedWord = await translationService.translateVocabularyEntry(word);
          const wordIndex = updatedWords.findIndex(w => w.id === word.id);
          if (wordIndex !== -1) {
            updatedWords[wordIndex] = translatedWord;
          }
        } catch (error) {
          console.error(`Failed to translate ${word.id}:`, error);
        }
        
        // Small delay to avoid rate limiting
        await new Promise(resolve => setTimeout(resolve, 500));
      }

      setTranslatedVocabulary(updatedWords);
      toast.success('Auto-translation complete!');
    } catch (error) {
      console.error('Translation error:', error);
      toast.error('Translation failed');
    } finally {
      setIsTranslating(false);
    }
  }, [translatedVocabulary]);

  const handleLanguageChange = useCallback((newLanguage: LanguageOption) => {
    setLanguage(newLanguage);
    autoTranslateForLanguage(newLanguage);
  }, [autoTranslateForLanguage]);

  const filteredWords = useMemo(() => {
    return translatedVocabulary.filter(word => {
      const translation = word[language] || word.english; // Fallback to English if translation not available
      
      const matchesSearch = 
        word.japanese.toLowerCase().includes(searchTerm.toLowerCase()) ||
        word.hiragana.toLowerCase().includes(searchTerm.toLowerCase()) ||
        word.romaji.toLowerCase().includes(searchTerm.toLowerCase()) ||
        word.english.toLowerCase().includes(searchTerm.toLowerCase()) ||
        word.french.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (translation && translation.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesLevel = selectedLevel === 'all' || word.level === selectedLevel;
      const matchesCategory = selectedCategory === 'all' || word.category === selectedCategory;
      
      return matchesSearch && matchesLevel && matchesCategory;
    });
  }, [searchTerm, selectedLevel, selectedCategory, language, translatedVocabulary]);

  const stats = {
    total: translatedVocabulary.length,
    filtered: filteredWords.length,
    categories: new Set(translatedVocabulary.map(w => w.category)).size
  };

  if (currentView === 'quiz') {
    return <QuizApp selectedLanguage={language} vocabularyData={translatedVocabulary} />;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="gradient-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          {/* API Key Setup in top right */}
          <div className="flex justify-end gap-2 mb-4">
            <TranslationButton />
            <RunwareApiKeyDialog />
            <ApiKeyDialog />
          </div>
          
          <div className="text-center space-y-4">
            <div className="flex justify-center items-center gap-3 mb-4">
              <BookOpen className="w-10 h-10" />
              <h1 className="text-4xl md:text-5xl font-bold">
                JLPT Vocabulary
              </h1>
            </div>
            
            {/* Navigation Tabs */}
            <div className="flex justify-center gap-4 mb-6">
              <Button
                variant="outline"
                onClick={() => setCurrentView('vocabulary')}
                className={cn(
                  "bg-white/10 border-white/20 text-white hover:bg-white/20",
                  currentView === 'vocabulary' ? "bg-white/20" : ""
                )}
              >
                <BookOpen className="w-4 h-4 mr-2" />
                Study Cards
              </Button>
              <Button
                variant="outline"
                onClick={() => setCurrentView('quiz')}
                className={cn(
                  "bg-white/10 border-white/20 text-white hover:bg-white/20",
                  currentView === 'quiz' ? "bg-white/20" : ""
                )}
              >
                <Brain className="w-4 h-4 mr-2" />
                Take Quiz
              </Button>
              <Button
                variant="outline"
                onClick={handleShowAllWords}
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                title="View complete word list in console"
              >
                <List className="w-4 h-4 mr-2" />
                View All Words
              </Button>
            </div>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              {language === 'english' 
                ? 'Master Japanese vocabulary for JLPT exams with interactive flashcards and voice pronunciation'
                : 'Maîtrisez le vocabulaire japonais pour les examens JLPT avec des cartes interactives et prononciation vocale'
              }
            </p>
            
            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
                <BookOpen className="w-5 h-5" />
                <span className="font-semibold">{stats.total}</span>
                <span className="opacity-75">
                  {language === 'english' ? 'words' : 'mots'}
                </span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
                <Users className="w-5 h-5" />
                <span className="font-semibold">{stats.categories}</span>
                <span className="opacity-75">
                  {language === 'english' ? 'categories' : 'catégories'}
                </span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
                <Star className="w-5 h-5" />
                <span className="opacity-75">N5 - N1</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <VocabularyFilters
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          selectedLevel={selectedLevel}
          onLevelChange={setSelectedLevel}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          language={language}
          onLanguageChange={handleLanguageChange}
        />

        {/* Results Count */}
        <div className="mb-8 text-center space-y-2">
          <Badge variant="secondary" className="text-lg px-4 py-2">
            {language === 'english' 
              ? `${stats.filtered} word${stats.filtered !== 1 ? 's' : ''} found`
              : `${stats.filtered} mot${stats.filtered !== 1 ? 's' : ''} trouvé${stats.filtered !== 1 ? 's' : ''}`
            }
          </Badge>
          {isTranslating && (
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Loader2 className="w-4 h-4 animate-spin" />
              Auto-translating vocabulary...
            </div>
          )}
        </div>

        {/* Vocabulary Cards Grid */}
        {filteredWords.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredWords.map((word) => (
              <VocabularyCard 
                key={word.id} 
                word={word} 
                language={language}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="space-y-4">
              <div className="text-6xl opacity-30">🔍</div>
              <h3 className="text-2xl font-semibold text-muted-foreground">
                {language === 'english' ? 'No words found' : 'Aucun mot trouvé'}
              </h3>
              <p className="text-muted-foreground">
                {language === 'english' 
                  ? 'Try adjusting your search filters'
                  : 'Essayez d\'ajuster vos filtres de recherche'
                }
              </p>
            </div>
          </div>
        )}
      </main>

      <footer className="bg-secondary/50 py-8 mt-16">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>
            {language === 'english' 
              ? 'Click cards to reveal translations • Click 🔊 buttons for pronunciation • Generate images for visual learning • Setup API keys in settings'
              : 'Cliquez sur les cartes pour les traductions • Cliquez sur 🔊 pour la prononciation • Générez des images pour l\'apprentissage visuel • Configurez vos clés API'
            }
          </p>
        </div>
      </footer>
    </div>
  );
};