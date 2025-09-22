

import { useState, useMemo, useCallback, useEffect } from 'react';
import { VocabularyCard } from './VocabularyCard';
import { VocabularyFilters } from './VocabularyFilters';
import { ApiKeyDialog } from './ApiKeyDialog';
import { QuizApp } from './QuizApp';
import { SwipeQuiz } from './SwipeQuiz';
import { StoryGenerator } from './StoryGenerator';
import WritingCard from './WritingCard';
import { vocabularyData } from '@/data/vocabulary';
import { TranslationService } from '@/services/translationService';
import { BookOpen, Users, Star, Brain, Loader2, List, Move } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';
import { removeDuplicatesFromVocabulary, logVocabularyStats } from '@/utils/removeDuplicates';
import { logAllWords, getWordsByCategory, getWordsByLevel } from '@/utils/listAllWords';
import { useDebounce } from '@/hooks/useDebounce';

type LanguageOption = 'english' | 'french' | 'german' | 'vietnamese' | 'chinese' | 'korean' | 'spanish';

export const VocabularyApp = () => {
  const [showWriting, setShowWriting] = useState(false);
const [selectedWord, setSelectedWord] = useState<VocabularyWord | null>(null);
  const [currentView, setCurrentView] = useState('vocabulary');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [language, setLanguage] = useState<LanguageOption>('english');
  const [isTranslating, setIsTranslating] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12);
  const [showJapaneseFirst, setShowJapaneseFirst] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  // Debounce search input for better performance
  const debouncedSearchTerm = useDebounce(searchTerm, 300);
  const [translatedVocabulary, setTranslatedVocabulary] = useState(() => {
    return removeDuplicatesFromVocabulary();
  });

  // Log stats only once on component mount
  useEffect(() => {
    const uniqueData = translatedVocabulary;
    console.log('Loaded deduplicated vocabulary with', uniqueData.length, 'entries');
    if (process.env.NODE_ENV === 'development') {
      logVocabularyStats();
    }
    // Set loading to false after data is ready
    setTimeout(() => setIsLoading(false), 100);
  }, []);

  // Function to log all words to console
  const handleShowAllWords = () => {
    const words = logAllWords();
    const categories = getWordsByCategory();
    const levels = getWordsByLevel();
    
    // Also show the complete list of just Japanese words
    const justJapaneseWords = translatedVocabulary.map(word => word.japanese);
    console.log('\n=== COMPLETE LIST OF ALL JAPANESE WORDS ===');
    console.log(`Total: ${justJapaneseWords.length} words`);
    console.log('\nAll words:');
    console.log(justJapaneseWords.join('、'));
    
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

    // Show count discrepancy
    if (justJapaneseWords.length !== 598) {
      console.log(`\n⚠️  COUNT DISCREPANCY:`);
      console.log(`   Expected: 598 words`);
      console.log(`   Actual: ${justJapaneseWords.length} words`);
      console.log(`   Difference: ${598 - justJapaneseWords.length} words`);
    }

    toast.success(`Complete vocabulary list (${justJapaneseWords.length} words) logged to console!`);
  };

  const filteredWords = useMemo(() => {
    if (!debouncedSearchTerm && selectedLevel === 'all' && selectedCategory === 'all') {
      // No filters applied, return all words
      setCurrentPage(1);
      return translatedVocabulary;
    }

    const searchLower = debouncedSearchTerm.toLowerCase();
    const allFiltered = translatedVocabulary.filter(word => {
      // Early exit for level and category filters (fastest checks first)
      if (selectedLevel !== 'all' && word.level !== selectedLevel) return false;
      if (selectedCategory !== 'all' && word.category !== selectedCategory) return false;
      
      // Skip expensive search if no search term
      if (!searchLower) return true;
      
      // Optimized search - check most likely matches first
      if (word.japanese.includes(searchLower) || 
          word.english.toLowerCase().includes(searchLower) ||
          word.romaji.toLowerCase().includes(searchLower)) {
        return true;
      }
      
      // Check other fields only if needed
      const translation = word[language] || word.english;
      return word.hiragana.includes(searchLower) ||
             word.french.toLowerCase().includes(searchLower) ||
             (translation && translation.toLowerCase().includes(searchLower));
    });
    
    // Reset to first page when filters change
    setCurrentPage(1);
    
    return allFiltered;
  }, [debouncedSearchTerm, selectedLevel, selectedCategory, language, translatedVocabulary]);

  const autoTranslateForLanguage = useCallback(async (targetLanguage: LanguageOption) => {
    if (targetLanguage === 'english' || targetLanguage === 'french') return;
    
    const apiKey = TranslationService.getApiKey();
    if (!apiKey) {
      toast.info('Set up OpenAI API key to get automatic translations');
      return;
    }

    // Get currently visible words that need translation
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentPageWords = filteredWords.slice(startIndex, endIndex);
    const wordsNeedingTranslation = currentPageWords.filter(word => !word[targetLanguage]);
    
    if (wordsNeedingTranslation.length === 0) return;

    setIsTranslating(true);
    toast.info(`Auto-translating ${wordsNeedingTranslation.length} words on this page to ${targetLanguage}...`);

    const translationService = new TranslationService(apiKey);
    const updatedWords = [...translatedVocabulary];

    try {
      for (const word of wordsNeedingTranslation) { // Translate all visible words
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
  }, [translatedVocabulary, filteredWords, currentPage, itemsPerPage]);


  const handleLanguageChange = useCallback((newLanguage: LanguageOption) => {
    setLanguage(newLanguage);
    autoTranslateForLanguage(newLanguage);
  }, [autoTranslateForLanguage]);

  // Paginated words for display
  const paginatedWords = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredWords.slice(startIndex, endIndex);
  }, [filteredWords, currentPage, itemsPerPage]);

  const totalPages = Math.ceil(filteredWords.length / itemsPerPage);

  const stats = {
    total: translatedVocabulary.length,
    filtered: filteredWords.length,
    categories: new Set(translatedVocabulary.map(w => w.category)).size
  };

 if (currentView === 'quiz') {
  return (
    <QuizApp 
      selectedLanguage={language} 
      vocabularyData={translatedVocabulary} 
      onGoBack={() => setCurrentView('vocabulary')} 
    />
  );
}

if (currentView === 'swipe-quiz') {
  return (
    <SwipeQuiz 
      selectedLanguage={language} 
      vocabularyData={translatedVocabulary} 
      onGoBack={() => setCurrentView('vocabulary')} 
    />
  );
}

if (currentView === 'story') {
  return (
    <StoryGenerator
      level={selectedLevel}
      vocabulary={translatedVocabulary.filter(
        (w) => selectedLevel === 'all' || w.level === selectedLevel
      )}
    />
  );
}


  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="gradient-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          {/* API Key Setup in top right */}
          <div className="flex justify-end gap-2 mb-4">
            <ApiKeyDialog />
          </div>
          
          <div className="text-center space-y-4">
            <div className="flex justify-center items-center gap-3 mb-4">
              <BookOpen className="w-8 h-8 md:w-10 md:h-10" />
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">
                JLPT Vocabulary
              </h1>
            </div>
            
  {/* Navigation Tabs */}
<div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-6 px-2">
  <Button
    variant="outline"
    onClick={() => setCurrentView('swipe-quiz')}
    className={cn(
      "bg-white/10 border-white/20 text-white hover:bg-white/20 text-xs md:text-sm",
      currentView === 'swipe-quiz' ? "bg-white/20" : ""
    )}
  >
    <Move className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
    Swipe
  </Button>

  <Button
    variant="outline"
    onClick={() => setCurrentView('quiz')}
    className={cn(
      "bg-white/10 border-white/20 text-white hover:bg-white/20 text-xs md:text-sm",
      currentView === 'quiz' ? "bg-white/20" : ""
    )}
  >
    <Brain className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
    Quiz
  </Button>

    <Button
    variant="outline"
    onClick={() => setCurrentView('story')}
    className={cn(
      "bg-white/10 border-white/20 text-white hover:bg-white/20 text-xs md:text-sm",
      currentView === 'story' ? "bg-white/20" : ""
    )}
  >
    📖 Story
  </Button>


  {/* 🔹 NEW TOGGLE BUTTON */}
  <Button
    variant="outline"
    onClick={() => setShowJapaneseFirst(prev => !prev)}
    className="bg-white/10 border-white/20 text-white hover:bg-white/20 text-xs md:text-sm"
  >
    {showJapaneseFirst ? "Show Target First" : "Show Japanese First"}
  </Button>

  <Button
    variant="outline"
    onClick={handleShowAllWords}
    className="bg-white/10 border-white/20 text-white hover:bg-white/20 text-xs md:text-sm"
    title="View complete word list in console"
  >
    <List className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
    <span className="hidden md:inline">View All </span>Words
  </Button>
</div>

            <p className="text-sm md:text-xl opacity-90 max-w-2xl mx-auto px-4">
              {language === 'english' 
                ? 'Master Japanese vocabulary for JLPT exams with interactive flashcards and voice pronunciation'
                : 'Maîtrisez le vocabulaire japonais pour les examens JLPT avec des cartes interactives et prononciation vocale'
              }
            </p>
            
            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-2 md:gap-4 mt-6 md:mt-8 px-4">
              <div className="flex items-center gap-1 md:gap-2 bg-white/10 rounded-lg px-2 md:px-4 py-2 text-sm">
                <BookOpen className="w-4 h-4 md:w-5 md:h-5" />
                <span className="font-semibold">{stats.total}</span>
                <span className="opacity-75">
                  {language === 'english' ? 'words' : 'mots'}
                </span>
              </div>
              <div className="flex items-center gap-1 md:gap-2 bg-white/10 rounded-lg px-2 md:px-4 py-2 text-sm">
                <Users className="w-4 h-4 md:w-5 md:h-5" />
                <span className="font-semibold">{stats.categories}</span>
                <span className="opacity-75 hidden sm:inline">
                  {language === 'english' ? 'categories' : 'catégories'}
                </span>
              </div>
              <div className="flex items-center gap-1 md:gap-2 bg-white/10 rounded-lg px-2 md:px-4 py-2 text-sm">
                <Star className="w-4 h-4 md:w-5 md:h-5" />
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

        {stats.filtered > 0 ? (
          <>
            {/* Vocabulary Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
              {paginatedWords.map((word) =>
                showWriting && selectedWord?.id === word.id ? (
                  <WritingCard
                    key={word.id}
                    word={word}
                    onGoBack={() => setShowWriting(false)}
                  />
                ) : (
                  <VocabularyCard
                    key={word.id}
                    word={word}
                    language={language}
                    showJapaneseFirst={showJapaneseFirst}
                    onPractice={() => {
                      setSelectedWord(word);
                      setShowWriting(true);
                    }}
                  />
                )
              )}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 mt-8 md:mt-12 px-4">
                <Button
                  variant="outline"
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="w-full sm:w-auto"
                >
                  Previous
                </Button>
                
                <div className="flex items-center gap-2 order-first sm:order-none">
                  <span className="text-sm text-muted-foreground">
                    Page {currentPage} of {totalPages}
                  </span>
                </div>
                
                <Button
                  variant="outline"
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="w-full sm:w-auto"
                >
                  Next
                </Button>
              </div>
            )}
          </>
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
              ? 'Click cards to reveal translations • Click 🔊 buttons for pronunciation'
              : 'Cliquez sur les cartes pour les traductions • Cliquez sur 🔊 pour la prononciation'
            }
          </p>
        </div>
      </footer>
    </div>
  );
};