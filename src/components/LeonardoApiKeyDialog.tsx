import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, Palette } from "lucide-react";
import { toast } from "sonner";
import { LeonardoService } from "@/services/leonardoService";

export const LeonardoApiKeyDialog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [apiKey, setApiKey] = useState("");
  const [showKey, setShowKey] = useState(false);
  const [hasApiKey, setHasApiKey] = useState(false);

  useEffect(() => {
    const storedKey = LeonardoService.getStoredApiKey();
    if (storedKey) {
      setApiKey(storedKey);
      setHasApiKey(true);
    }
  }, []);

  const handleSave = () => {
    if (!apiKey.trim()) {
      toast.error("Please enter a valid API key");
      return;
    }

    LeonardoService.saveApiKey(apiKey.trim());
    setHasApiKey(true);
    setIsOpen(false);
    toast.success("Leonardo API key saved successfully!");
  };

  const handleClear = () => {
    LeonardoService.clearApiKey();
    setApiKey("");
    setHasApiKey(false);
    toast.success("Leonardo API key cleared");
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="gap-2">
          <Palette className="h-4 w-4" />
          {hasApiKey ? "Image AI ✓" : "Setup Image AI"}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Leonardo AI Configuration</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="apiKey">Leonardo API Key</Label>
            <div className="relative">
              <Input
                id="apiKey"
                type={showKey ? "text" : "password"}
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder="Enter your Leonardo API key"
                className="pr-10"
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                onClick={() => setShowKey(!showKey)}
              >
                {showKey ? (
                  <EyeOff className="h-4 w-4 text-gray-400" />
                ) : (
                  <Eye className="h-4 w-4 text-gray-400" />
                )}
              </Button>
            </div>
          </div>
          
          <div className="text-sm text-muted-foreground space-y-2">
            <p>
              To get your Leonardo API key:
            </p>
            <ol className="list-decimal list-inside space-y-1 ml-2">
              <li>Go to <a href="https://app.leonardo.ai" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Leonardo.ai</a></li>
              <li>Sign up or log in to your account</li>
              <li>Navigate to API Access in your account settings</li>
              <li>Subscribe to an API plan</li>
              <li>Copy your API key</li>
            </ol>
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
        </div>
      </DialogContent>
    </Dialog>
  );
};