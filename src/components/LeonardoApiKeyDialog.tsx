import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { LeonardoImageService } from '@/services/leonardoImageService';
import { toast } from 'sonner';
import { Key, Check, ExternalLink } from 'lucide-react';

export const LeonardoApiKeyDialog = () => {
  const [apiKey, setApiKey] = useState('');
  const [open, setOpen] = useState(false);
  const [hasKey, setHasKey] = useState(false);

  useEffect(() => {
    const existingKey = LeonardoImageService.getApiKey();
    setHasKey(!!existingKey);
    if (existingKey) {
      setApiKey(existingKey);
    }
  }, [open]);

  const handleSave = () => {
    if (!apiKey.trim()) {
      toast.error('Please enter a valid API key');
      return;
    }
    
    LeonardoImageService.setApiKey(apiKey.trim());
    setHasKey(true);
    setOpen(false);
    toast.success('Leonardo AI API key saved successfully');
  };

  const handleClear = () => {
    LeonardoImageService.clearApiKey();
    setApiKey('');
    setHasKey(false);
    toast.info('Leonardo AI API key cleared');
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
          <Key className="w-4 h-4 mr-2" />
          Leonardo AI
          {hasKey && <Check className="w-4 h-4 ml-2" />}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Leonardo AI API Key</DialogTitle>
          <DialogDescription>
            Enter your Leonardo AI API key to generate high-quality images for vocabulary learning.
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Get your API key from</span>
            <a 
              href="https://app.leonardo.ai/settings/api" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-primary hover:underline"
            >
              Leonardo AI Settings
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="apiKey">API Key</Label>
            <Input
              id="apiKey"
              type="password"
              placeholder="Enter your Leonardo AI API key"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
            />
          </div>
          
          <div className="flex gap-2">
            <Button onClick={handleSave} className="flex-1">
              Save Key
            </Button>
            {hasKey && (
              <Button onClick={handleClear} variant="outline">
                Clear
              </Button>
            )}
          </div>
          
          <div className="text-xs text-muted-foreground">
            Your API key is stored locally in your browser for security.
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};