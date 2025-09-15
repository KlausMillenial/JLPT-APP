import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Settings, Eye, EyeOff } from 'lucide-react';
import { toast } from 'sonner';

export const RunwareApiKeyDialog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [apiKey, setApiKey] = useState('');
  const [showKey, setShowKey] = useState(false);
  const [hasApiKey, setHasApiKey] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('runware-api-key');
    if (stored) {
      setApiKey(stored);
      setHasApiKey(true);
    }
  }, []);

  const handleSave = () => {
    if (!apiKey.trim()) {
      toast.error('Please enter your Runware API key');
      return;
    }

    localStorage.setItem('runware-api-key', apiKey.trim());
    setHasApiKey(true);
    setIsOpen(false);
    toast.success('Runware API key saved successfully!');
  };

  const handleClear = () => {
    localStorage.removeItem('runware-api-key');
    setApiKey('');
    setHasApiKey(false);
    toast.success('API key cleared');
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button 
          variant="ghost" 
          size="sm" 
          className="text-white hover:bg-white/20"
        >
          <Settings className="w-4 h-4 mr-2" />
          {hasApiKey ? 'Image AI ✓' : 'Setup Image AI'}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Settings className="w-5 h-5" />
            Runware API Configuration
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="runware-key">Runware API Key</Label>
            <div className="relative">
              <Input
                id="runware-key"
                type={showKey ? 'text' : 'password'}
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder="Enter your Runware API key"
                className="pr-10"
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                onClick={() => setShowKey(!showKey)}
              >
                {showKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </Button>
            </div>
          </div>
          
          <div className="text-sm text-muted-foreground space-y-2">
            <p>
              Get your API key from{' '}
              <a 
                href="https://runware.ai/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                runware.ai
              </a>
            </p>
            <p>
              This enables AI-generated images for vocabulary words to help with visual learning.
            </p>
          </div>

          <div className="flex gap-2 pt-4">
            <Button onClick={handleSave} className="flex-1">
              Save API Key
            </Button>
            {hasApiKey && (
              <Button variant="outline" onClick={handleClear}>
                Clear
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};