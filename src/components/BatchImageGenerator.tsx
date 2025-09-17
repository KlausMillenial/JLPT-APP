import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { LeonardoImageService } from '@/services/leonardoImageService';
import { getPriorityWords, batchGenerateImages, generateImageDataFile } from '@/utils/batchImageGeneration';
import { Download, Wand2, CheckCircle, AlertCircle } from 'lucide-react';
import { toast } from 'sonner';

export const BatchImageGenerator = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentWord, setCurrentWord] = useState('');
  const [completed, setCompleted] = useState(0);
  const [total, setTotal] = useState(0);
  const [results, setResults] = useState<{ word: any; imageUrl: string | null }[]>([]);
  const [isComplete, setIsComplete] = useState(false);

  const priorityWords = getPriorityWords();
  const hasApiKey = !!LeonardoImageService.getApiKey();

  const startGeneration = async () => {
    if (!hasApiKey) {
      toast.error('Please set up your Leonardo AI API key first');
      return;
    }

    setIsGenerating(true);
    setIsComplete(false);
    setResults([]);
    
    try {
      const generationResults = await batchGenerateImages(
        priorityWords,
        (completed, total, currentWord) => {
          setCompleted(completed);
          setTotal(total);
          setCurrentWord(currentWord);
          setProgress((completed / total) * 100);
        }
      );
      
      setResults(generationResults);
      setIsComplete(true);
      
      const successCount = generationResults.filter(r => r.imageUrl).length;
      toast.success(`Generation complete! ${successCount}/${generationResults.length} images generated successfully.`);
      
    } catch (error) {
      console.error('Batch generation error:', error);
      toast.error('Batch generation failed');
    } finally {
      setIsGenerating(false);
    }
  };

  const downloadResults = () => {
    const dataFile = generateImageDataFile(results);
    const blob = new Blob([dataFile], { type: 'text/javascript' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = 'pregenerated-images.js';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast.success('Image data file downloaded! Copy the URLs into your vocabulary.ts file.');
  };

  const estimatedTime = Math.ceil((priorityWords.length * 35) / 60); // ~35 seconds per image

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <Card className="p-6">
        <div className="space-y-4">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold flex items-center justify-center gap-2">
              <Wand2 className="w-6 h-6" />
              Batch Image Generation
            </h2>
            <p className="text-muted-foreground">
              Pre-generate images for the top {priorityWords.length} most important vocabulary words
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="text-center space-y-1">
              <div className="text-2xl font-bold text-primary">{priorityWords.length}</div>
              <div className="text-sm text-muted-foreground">Priority Words</div>
            </div>
            <div className="text-center space-y-1">
              <div className="text-2xl font-bold text-primary">~{estimatedTime} min</div>
              <div className="text-sm text-muted-foreground">Estimated Time</div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Badge variant={hasApiKey ? "default" : "destructive"} className="text-xs">
                {hasApiKey ? "✓ Leonardo AI Ready" : "✗ API Key Required"}
              </Badge>
              <div className="text-sm text-muted-foreground">
                Cost: ~{(priorityWords.length * 0.10).toFixed(2)} tokens
              </div>
            </div>

            {!isGenerating && !isComplete && (
              <Button 
                onClick={startGeneration}
                disabled={!hasApiKey}
                className="w-full py-6 text-lg"
              >
                <Wand2 className="w-5 h-5 mr-2" />
                Start Batch Generation
              </Button>
            )}

            {isGenerating && (
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span>Generating images...</span>
                  <span>{completed}/{total}</span>
                </div>
                <Progress value={progress} className="h-3" />
                <div className="text-center text-sm text-muted-foreground">
                  Current: <strong>{currentWord}</strong>
                </div>
              </div>
            )}

            {isComplete && (
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-2 text-green-600">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-medium">Generation Complete!</span>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-xl font-bold text-green-600">
                      {results.filter(r => r.imageUrl).length}
                    </div>
                    <div className="text-sm text-muted-foreground">Successful</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-red-600">
                      {results.filter(r => !r.imageUrl).length}
                    </div>
                    <div className="text-sm text-muted-foreground">Failed</div>
                  </div>
                </div>

                <Button onClick={downloadResults} className="w-full">
                  <Download className="w-4 h-4 mr-2" />
                  Download Image URLs
                </Button>
              </div>
            )}
          </div>

          <div className="text-xs text-muted-foreground space-y-1">
            <p><strong>Priority Order:</strong> N5 → N4 → N3 → N2 → N1 levels</p>
            <p><strong>Categories:</strong> Family, Food, Body Parts, Places, Time, People, etc.</p>
            <p><strong>Rate Limited:</strong> 3 second delays between requests</p>
          </div>
        </div>
      </Card>

      {isComplete && results.length > 0 && (
        <Card className="p-4">
          <h3 className="font-medium mb-3">Preview Generated Images</h3>
          <div className="grid grid-cols-4 gap-2 max-h-64 overflow-y-auto">
            {results.slice(0, 20).map((result, index) => (
              <div key={index} className="text-center space-y-1">
                {result.imageUrl ? (
                  <img 
                    src={result.imageUrl} 
                    alt={result.word.japanese}
                    className="w-full h-16 object-cover rounded border"
                  />
                ) : (
                  <div className="w-full h-16 bg-gray-100 rounded border flex items-center justify-center">
                    <AlertCircle className="w-4 h-4 text-red-500" />
                  </div>
                )}
                <div className="text-xs font-medium">{result.word.japanese}</div>
              </div>
            ))}
          </div>
          {results.length > 20 && (
            <p className="text-xs text-muted-foreground mt-2 text-center">
              Showing first 20 of {results.length} results
            </p>
          )}
        </Card>
      )}
    </div>
  );
};