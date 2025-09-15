import { useState, useMemo } from 'react';
import { VocabularyCard } from './VocabularyCard';
import { VocabularyFilters } from './VocabularyFilters';
import { ApiKeyDialog } from './ApiKeyDialog';
import { RunwareApiKeyDialog } from './RunwareApiKeyDialog';
import { QuizApp } from './QuizApp';
import { vocabularyData } from '@/data/vocabulary';
import { BookOpen, Users, Star, Brain } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export const VocabularyApp = () => {
  const [currentView, setCurrentView] = useState('vocabulary');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [language, setLanguage] = useState<'english' | 'french'>('english');

  const filteredWords = useMemo(() => {
    return vocabularyData.filter(word => {
      const matchesSearch = 
        word.japanese.toLowerCase().includes(searchTerm.toLowerCase()) ||
        word.hiragana.toLowerCase().includes(searchTerm.toLowerCase()) ||
        word.romaji.toLowerCase().includes(searchTerm.toLowerCase()) ||
        word.english.toLowerCase().includes(searchTerm.toLowerCase()) ||
        word.french.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesLevel = selectedLevel === 'all' || word.level === selectedLevel;
      const matchesCategory = selectedCategory === 'all' || word.category === selectedCategory;
      
      return matchesSearch && matchesLevel && matchesCategory;
    });
  }, [searchTerm, selectedLevel, selectedCategory]);

  const stats = {
    total: vocabularyData.length,
    filtered: filteredWords.length,
    categories: new Set(vocabularyData.map(w => w.category)).size
  };

  if (currentView === 'quiz') {
    return <QuizApp />;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="gradient-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          {/* API Key Setup in top right */}
          <div className="flex justify-end gap-2 mb-4">
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
          onLanguageChange={setLanguage}
        />

        {/* Results Count */}
        <div className="mb-8 text-center">
          <Badge variant="secondary" className="text-lg px-4 py-2">
            {language === 'english' 
              ? `${stats.filtered} word${stats.filtered !== 1 ? 's' : ''} found`
              : `${stats.filtered} mot${stats.filtered !== 1 ? 's' : ''} trouvé${stats.filtered !== 1 ? 's' : ''}`
            }
          </Badge>
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