import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { RunwareApiKeyDialog } from './RunwareApiKeyDialog';
import { HuggingFaceApiKeyDialog } from './HuggingFaceApiKeyDialog';
import { RunwareImageService } from '@/services/runwareImageService';
import { HuggingFaceService } from '@/services/huggingFaceService';
import { Zap, Brain, Palette, CheckCircle, Settings } from 'lucide-react';

interface ImageProviderSelectorProps {
  onProviderChange: (provider: 'runware' | 'huggingface' | 'placeholder') => void;
  currentProvider: string;
}

export const ImageProviderSelector = ({ onProviderChange, currentProvider }: ImageProviderSelectorProps) => {
  const runwareHasKey = !!RunwareImageService.getApiKey();
  const huggingfaceHasKey = !!HuggingFaceService.getStoredApiKey();

  const providers = [
    {
      id: 'runware' as const,
      name: 'Runware AI',
      description: 'Ultra-fast, high-quality AI images',
      features: ['⚡ Fastest generation', '🎨 Professional quality', '💰 Pay-per-use'],
      hasKey: runwareHasKey,
      setupComponent: <RunwareApiKeyDialog />,
      recommended: true,
    },
    {
      id: 'huggingface' as const,
      name: 'Hugging Face',
      description: 'Open-source AI image generation',
      features: ['🤗 Open source', '🔄 Multiple models', '🆓 Free tier available'],
      hasKey: huggingfaceHasKey,
      setupComponent: <HuggingFaceApiKeyDialog />,
      recommended: false,
    },
    {
      id: 'placeholder' as const,
      name: 'Visual Learning Aids',
      description: 'Simple visual representations',
      features: ['🎯 Always works', '📚 Educational focus', '⚡ Instant generation'],
      hasKey: true,
      setupComponent: null,
      recommended: false,
    },
  ];

  return (
    <div className="space-y-4">
      <div className="text-center space-y-2">
        <h3 className="text-lg font-semibold flex items-center justify-center gap-2">
          <Palette className="w-5 h-5" />
          Choose Your Image Generator
        </h3>
        <p className="text-sm text-muted-foreground">
          Select how you want to generate images for vocabulary learning
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {providers.map((provider) => (
          <Card 
            key={provider.id}
            className={`p-4 cursor-pointer transition-all hover:shadow-md ${
              currentProvider === provider.id 
                ? 'ring-2 ring-primary border-primary' 
                : 'hover:border-primary/50'
            }`}
            onClick={() => onProviderChange(provider.id)}
          >
            <div className="space-y-3">
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h4 className="font-medium">{provider.name}</h4>
                    {provider.recommended && (
                      <Badge variant="secondary" className="text-xs">
                        Recommended
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {provider.description}
                  </p>
                </div>
                {currentProvider === provider.id && (
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                )}
              </div>

              <div className="space-y-2">
                {provider.features.map((feature, index) => (
                  <div key={index} className="text-xs text-muted-foreground">
                    {feature}
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between pt-2 border-t">
                <div className="flex items-center gap-2">
                  {provider.hasKey ? (
                    <Badge variant="outline" className="text-xs bg-green-50 text-green-700 border-green-200">
                      ✓ Ready
                    </Badge>
                  ) : provider.setupComponent ? (
                    <Badge variant="outline" className="text-xs">
                      Setup needed
                    </Badge>
                  ) : null}
                </div>
                
                {provider.setupComponent && (
                  <div onClick={(e) => e.stopPropagation()}>
                    {provider.setupComponent}
                  </div>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <Button
          variant="outline"
          size="sm"
          onClick={() => onProviderChange(currentProvider as any)}
          className="text-xs"
        >
          <Settings className="w-3 h-3 mr-1" />
          Apply Selection
        </Button>
      </div>
    </div>
  );
};