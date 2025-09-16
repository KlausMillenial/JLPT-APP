import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Languages } from 'lucide-react';
import { categories, levels } from '@/data/vocabulary';

type LanguageOption = 'english' | 'french' | 'german' | 'vietnamese' | 'chinese' | 'korean' | 'spanish';

interface VocabularyFiltersProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  selectedLevel: string;
  onLevelChange: (value: string) => void;
  selectedCategory: string;
  onCategoryChange: (value: string) => void;
  language: LanguageOption;
  onLanguageChange: (language: LanguageOption) => void;
}

const languageLabels: Record<LanguageOption, string> = {
  english: 'English',
  french: 'Français',
  german: 'Deutsch',
  vietnamese: 'Tiếng Việt',
  chinese: '中文',
  korean: '한국어',
  spanish: 'Español'
};

const searchPlaceholders: Record<LanguageOption, string> = {
  english: 'Search vocabulary...',
  french: 'Rechercher du vocabulaire...',
  german: 'Wortschatz suchen...',
  vietnamese: 'Tìm kiếm từ vựng...',
  chinese: '搜索词汇...',
  korean: '어휘 검색...',
  spanish: 'Buscar vocabulario...'
};

const allLevelsLabels: Record<LanguageOption, string> = {
  english: 'All levels',
  french: 'Tous niveaux',
  german: 'Alle Stufen',
  vietnamese: 'Tất cả cấp độ',
  chinese: '所有级别',
  korean: '모든 레벨',
  spanish: 'Todos los niveles'
};

const allCategoriesLabels: Record<LanguageOption, string> = {
  english: 'All categories',
  french: 'Toutes catégories',
  german: 'Alle Kategorien',
  vietnamese: 'Tất cả danh mục',
  chinese: '所有类别',
  korean: '모든 카테고리',
  spanish: 'Todas las categorías'
};

export const VocabularyFilters = ({
  searchTerm,
  onSearchChange,
  selectedLevel,
  onLevelChange,
  selectedCategory,
  onCategoryChange,
  language,
  onLanguageChange
}: VocabularyFiltersProps) => {
  return (
    <div className="space-y-4 mb-8">
      {/* Language Selector */}
      <div className="flex justify-center">
        <Select value={language} onValueChange={(value: LanguageOption) => onLanguageChange(value)}>
          <SelectTrigger className="w-48 bg-background border-border">
            <div className="flex items-center">
              <Languages className="w-4 h-4 mr-2" />
              <SelectValue />
            </div>
          </SelectTrigger>
          <SelectContent className="bg-background border-border z-50">
            {Object.entries(languageLabels).map(([key, label]) => (
              <SelectItem key={key} value={key} className="hover:bg-accent">
                {label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Search and Filters */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            placeholder={searchPlaceholders[language]}
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Level Filter */}
        <Select value={selectedLevel} onValueChange={onLevelChange}>
          <SelectTrigger className="bg-background border-border">
            <SelectValue placeholder={allLevelsLabels[language]} />
          </SelectTrigger>
          <SelectContent className="bg-background border-border z-50">
            <SelectItem value="all" className="hover:bg-accent">
              {allLevelsLabels[language]}
            </SelectItem>
            {levels.map((level) => (
              <SelectItem key={level} value={level} className="hover:bg-accent">
                {level}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Category Filter */}
        <Select value={selectedCategory} onValueChange={onCategoryChange}>
          <SelectTrigger className="bg-background border-border">
            <SelectValue placeholder={allCategoriesLabels[language]} />
          </SelectTrigger>
          <SelectContent className="bg-background border-border z-50">
            <SelectItem value="all" className="hover:bg-accent">
              {allCategoriesLabels[language]}
            </SelectItem>
            {categories.map((category) => (
              <SelectItem key={category} value={category} className="hover:bg-accent">
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};