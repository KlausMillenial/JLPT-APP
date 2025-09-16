import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { TranslationManager } from './TranslationManager';
import { Globe } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '@/components/ui/dialog';

export const TranslationButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
          <Globe className="w-4 h-4 mr-2" />
          Translate
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <TranslationManager />
      </DialogContent>
    </Dialog>
  );
};