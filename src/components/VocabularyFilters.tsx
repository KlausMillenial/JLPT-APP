import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Languages } from 'lucide-react';
import { categories, levels } from '@/data/vocabulary';

interface VocabularyFiltersProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  selectedLevel: string;
  onLevelChange: (value: string) => void;
  selectedCategory: string;
  onCategoryChange: (value: string) => void;
  language: 'english' | 'french';
  onLanguageChange: (language: 'english' | 'french') => void;
}

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
      {/* Language Toggle */}
      <div className="flex justify-center">
        <div className="flex bg-secondary rounded-lg p-1">
          <Button
            variant={language === 'english' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => onLanguageChange('english')}
            className="transition-smooth"
          >
            <Languages className="w-4 h-4 mr-2" />
            English
          </Button>
          <Button
            variant={language === 'french' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => onLanguageChange('french')}
            className="transition-smooth"
          >
            <Languages className="w-4 h-4 mr-2" />
            Français
          </Button>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            placeholder={language === 'english' ? 'Search vocabulary...' : 'Rechercher du vocabulaire...'}
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Level Filter */}
        <Select value={selectedLevel} onValueChange={onLevelChange}>
          <SelectTrigger>
            <SelectValue placeholder={language === 'english' ? 'All levels' : 'Tous niveaux'} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">
              {language === 'english' ? 'All levels' : 'Tous niveaux'}
            </SelectItem>
            {levels.map((level) => (
              <SelectItem key={level} value={level}>
                {level}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Category Filter */}
        <Select value={selectedCategory} onValueChange={onCategoryChange}>
          <SelectTrigger>
            <SelectValue placeholder={language === 'english' ? 'All categories' : 'Toutes catégories'} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">
              {language === 'english' ? 'All categories' : 'Toutes catégories'}
            </SelectItem>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};