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
    try {
      if (!apiKey.trim()) {
        toast({
          title: "Error",
          description: "Please enter an API key.",
          variant: "destructive"
        });
        return;
      }

      if (!apiKey.startsWith('sk_')) {
        toast({
          title: "Invalid API Key Format",
          description: "ElevenLabs API keys start with 'sk_'. OpenAI keys (sk-proj-) won't work here.",
          variant: "destructive"
        });
        return;
      }

      setElevenLabsApiKey(apiKey);
      setIsOpen(false);
      toast({
        title: "API Key Saved",
        description: "ElevenLabs API key has been saved successfully. You can now use voice pronunciation.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to save API key",
        variant: "destructive"
      });
    }
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
          <br /><br />
          <strong>Important:</strong> You need an ElevenLabs API key (starts with "sk_"), not an OpenAI key.
          <br />
          Get your API key from: <a href="https://elevenlabs.io/app/settings/api-keys" target="_blank" className="text-primary hover:underline">ElevenLabs Dashboard</a>
        </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="apiKey">API Key</Label>
            <Input
              id="apiKey"
              type="password"
              placeholder="sk_..."
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
            />
            <div className="text-xs text-muted-foreground">
              ElevenLabs API keys start with "sk_" (not "sk-proj-" which is OpenAI)
            </div>
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