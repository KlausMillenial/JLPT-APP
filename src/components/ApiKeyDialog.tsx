import { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Settings, Key } from 'lucide-react';
import { setElevenLabsApiKey, getElevenLabsApiKey } from '@/lib/config';
import { useToast } from '@/hooks/use-toast';

export const ApiKeyDialog = () => {
  const [apiKey, setApiKey] = useState(getElevenLabsApiKey());
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const handleSave = () => {
    setElevenLabsApiKey(apiKey);
    setIsOpen(false);
    toast({
      title: "API Key Saved",
      description: "ElevenLabs API key has been saved successfully. You can now use voice pronunciation.",
    });
  };

  const currentKey = getElevenLabsApiKey();

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <Settings className="w-4 h-4" />
          {currentKey ? 'Voice Settings' : 'Setup Voice'}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Key className="w-5 h-5" />
            ElevenLabs API Configuration
          </DialogTitle>
          <DialogDescription>
            Enter your ElevenLabs API key to enable voice pronunciation for Japanese words and examples.
            You can get your API key from your ElevenLabs dashboard.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="apiKey">API Key</Label>
            <Input
              id="apiKey"
              type="password"
              placeholder="Enter your ElevenLabs API key"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
            />
          </div>
          {currentKey && (
            <div className="text-sm text-muted-foreground">
              ✅ API key is currently configured
            </div>
          )}
        </div>
        <div className="flex justify-between">
          <Button variant="outline" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button onClick={handleSave} disabled={!apiKey.trim()}>
            Save API Key
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};