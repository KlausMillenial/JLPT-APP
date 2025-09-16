import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { AlertCircle, Key, Globe, Loader2 } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { TranslationService } from '@/services/translationService';
import { toast } from 'sonner';

interface TranslationApiKeyDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onTranslationStart?: () => void;
}

export const TranslationApiKeyDialog = ({ isOpen, onClose, onTranslationStart }: TranslationApiKeyDialogProps) => {
  const [apiKey, setApiKey] = useState('');
  const [isValidating, setIsValidating] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (isOpen) {
      const existingKey = TranslationService.getApiKey();
      if (existingKey) {
        setApiKey(existingKey);
      }
    }
  }, [isOpen]);

  const validateAndSaveKey = async () => {
    if (!apiKey.trim()) {
      setError('Please enter an API key');
      return;
    }

    if (!apiKey.startsWith('sk-')) {
      setError('OpenAI API key should start with "sk-"');
      return;
    }

    setIsValidating(true);
    setError('');

    try {
      // Test the API key with a simple translation
      const translationService = new TranslationService(apiKey);
      await translationService.translateText({
        text: 'hello',
        targetLanguages: ['german']
      });

      TranslationService.setApiKey(apiKey);
      toast.success('OpenAI API key saved successfully!');
      onClose();
      
      // Optionally start translation process
      if (onTranslationStart) {
        onTranslationStart();
      }
    } catch (error) {
      console.error('API key validation failed:', error);
      
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      
      if (errorMessage.includes('quota exceeded')) {
        setError('Your OpenAI API quota has been exceeded. Please check your billing and usage limits.');
      } else if (errorMessage.includes('Invalid OpenAI API key')) {
        setError('Invalid API key. Please check your OpenAI API key is correct.');
      } else if (errorMessage.includes('401')) {
        setError('Invalid API key. Please check your OpenAI API key is correct.');
      } else {
        setError(`API Error: ${errorMessage}`);
      }
    } finally {
      setIsValidating(false);
    }
  };

  const removeKey = () => {
    TranslationService.removeApiKey();
    setApiKey('');
    toast.success('API key removed');
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Globe className="w-5 h-5" />
            Translation API Setup
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              To translate vocabulary entries into multiple languages, we'll use OpenAI's API. 
              Your API key will be stored locally in your browser.
            </AlertDescription>
          </Alert>

          <div className="space-y-2">
            <Label htmlFor="api-key">OpenAI API Key</Label>
            <div className="relative">
              <Key className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                id="api-key"
                type="password"
                placeholder="sk-..."
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                className="pl-10"
              />
            </div>
            {error && (
              <p className="text-sm text-destructive">{error}</p>
            )}
          </div>

          <div className="text-xs text-muted-foreground space-y-1">
            <p>• Get your API key from <a href="https://platform.openai.com/api-keys" target="_blank" rel="noopener noreferrer" className="text-primary underline">OpenAI Platform</a></p>
            <p>• Your key is stored locally and never sent to our servers</p>
            <p>• Translation costs approximately $0.001 per vocabulary entry</p>
          </div>

          <div className="flex gap-2 pt-4">
            <Button 
              onClick={validateAndSaveKey} 
              disabled={isValidating}
              className="flex-1"
            >
              {isValidating ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Validating...
                </>
              ) : (
                <>
                  <Key className="w-4 h-4 mr-2" />
                  Save & Validate
                </>
              )}
            </Button>
            
            {TranslationService.getApiKey() && (
              <Button variant="outline" onClick={removeKey}>
                Remove Key
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};