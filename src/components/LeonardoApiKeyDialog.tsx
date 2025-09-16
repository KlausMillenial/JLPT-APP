import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { LeonardoImageService } from '@/services/leonardoImageService';
import { Settings, Key, ExternalLink } from 'lucide-react';
import { toast } from 'sonner';

export const LeonardoApiKeyDialog = () => {
  const [apiKey, setApiKey] = useState(LeonardoImageService.getApiKey() || '');
  const [isOpen, setIsOpen] = useState(false);

  const handleSave = () => {
    if (!apiKey.trim()) {
      toast.error('Please enter a valid API key');
      return;
    }
    
    LeonardoImageService.setApiKey(apiKey.trim());
    toast.success('Leonardo AI API key saved successfully!');
    setIsOpen(false);
  };

  const handleClear = () => {
    LeonardoImageService.clearApiKey();
    setApiKey('');
    toast.success('API key cleared');
  };

  const hasApiKey = LeonardoImageService.getApiKey();

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button 
          variant="outline" 
          size="sm"
          className={hasApiKey ? "bg-green-50 border-green-200 text-green-700 hover:bg-green-100" : ""}
        >
          <Key className="w-4 h-4 mr-2" />
          {hasApiKey ? 'Leonardo AI ✓' : 'Setup Leonardo AI'}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Settings className="w-5 h-5" />
            Leonardo AI Configuration
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">
              Leonardo AI provides high-quality AI image generation. Get your API key to generate beautiful images for vocabulary learning.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <span>Get your API key at:</span>
              <Button 
                variant="link" 
                size="sm" 
                className="h-auto p-0 text-blue-600 hover:text-blue-800"
                onClick={() => window.open('https://app.leonardo.ai/', '_blank')}
              >
                app.leonardo.ai <ExternalLink className="w-3 h-3 ml-1" />
              </Button>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="leonardo-api-key">API Key</Label>
            <Input
              id="leonardo-api-key"
              type="password"
              placeholder="Enter your Leonardo AI API key..."
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              className="font-mono text-sm"
            />
          </div>
          
          <div className="flex gap-2">
            <Button onClick={handleSave} className="flex-1">
              Save API Key
            </Button>
            {hasApiKey && (
              <Button onClick={handleClear} variant="outline">
                Clear
              </Button>
            )}
          </div>
          
          <div className="text-xs text-muted-foreground bg-muted/50 p-3 rounded-lg">
            <strong>Privacy:</strong> Your API key is stored locally in your browser and never sent to our servers.
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};