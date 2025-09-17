import { toast } from "sonner";

const API_ENDPOINT = "https://cloud.leonardo.ai/api/rest/v1/generations";

export interface GenerateImageParams {
  positivePrompt: string;
  width?: number;
  height?: number;
}

export interface GeneratedImage {
  imageURL: string;
  positivePrompt: string;
  seed: number;
  id: string;
}

export class LeonardoImageService {
  private static apiKey: string | null = null;
  private static requestQueue: Array<() => Promise<void>> = [];
  private static isProcessing = false;
  private static lastRequestTime = 0;
  private static readonly MIN_DELAY = 2000; // 2 seconds between requests

  private static async processQueue() {
    if (this.isProcessing || this.requestQueue.length === 0) return;
    
    this.isProcessing = true;
    
    while (this.requestQueue.length > 0) {
      const request = this.requestQueue.shift();
      if (request) {
        const timeSinceLastRequest = Date.now() - this.lastRequestTime;
        if (timeSinceLastRequest < this.MIN_DELAY) {
          await new Promise(resolve => setTimeout(resolve, this.MIN_DELAY - timeSinceLastRequest));
        }
        
        await request();
        this.lastRequestTime = Date.now();
      }
    }
    
    this.isProcessing = false;
  }

  static setApiKey(key: string) {
    this.apiKey = key;
    localStorage.setItem('leonardo_api_key', key);
  }

  static getApiKey(): string | null {
    if (!this.apiKey) {
      this.apiKey = localStorage.getItem('leonardo_api_key');
    }
    return this.apiKey;
  }

  static clearApiKey() {
    this.apiKey = null;
    localStorage.removeItem('leonardo_api_key');
  }

  static async generateImage(params: GenerateImageParams): Promise<GeneratedImage> {
    const apiKey = this.getApiKey();
    if (!apiKey) {
      throw new Error('Leonardo AI API key not provided');
    }

    return new Promise((resolve, reject) => {
      const request = async () => {
        try {
          console.log("Generating image with Leonardo AI:", params.positivePrompt);

          const requestBody = {
            alchemy: true,
            height: params.height || 768,
            width: params.width || 1024,
            modelId: "b24e16ff-06e3-43eb-8d33-4416c2d75876", // Leonardo Creative model
            num_images: 1,
            presetStyle: "DYNAMIC",
            prompt: params.positivePrompt,
            guidance_scale: 7
          };

          const response = await fetch(API_ENDPOINT, {
            method: 'POST',
            headers: {
              'accept': 'application/json',
              'content-type': 'application/json',
              'authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify(requestBody),
          });

          if (!response.ok) {
            const errorText = await response.text();
            console.error("Leonardo AI API error:", errorText);
            
            if (response.status === 429) {
              throw new Error('Rate limit reached. Please try again in a moment.');
            }
            
            throw new Error(`Leonardo AI API error: ${response.status}`);
          }

          const result = await response.json();
          console.log("Leonardo AI API response:", result);

          if (!result.sdGenerationJob) {
            throw new Error('No generation job created');
          }

          // Leonardo AI returns a generation job ID, we need to poll for completion
          const generationId = result.sdGenerationJob.generationId;
          
          // Poll for completion (simplified version - in production you'd want better polling)
          await new Promise(resolve => setTimeout(resolve, 10000)); // Wait 10 seconds
          
          const completedResult = await this.getGenerationResult(generationId);
          
          if (!completedResult || !completedResult.url) {
            throw new Error('Image generation failed or timed out');
          }

          resolve({
            imageURL: completedResult.url,
            positivePrompt: params.positivePrompt,
            seed: completedResult.seed || Math.floor(Math.random() * 1000000),
            id: completedResult.id || Math.random().toString(36).substr(2, 9),
          });
        } catch (error) {
          console.error("Leonardo AI generation error:", error);
          reject(error);
        }
      };

      this.requestQueue.push(request);
      this.processQueue();
    });
  }

  private static async getGenerationResult(generationId: string): Promise<any> {
    const apiKey = this.getApiKey();
    if (!apiKey) {
      throw new Error('Leonardo AI API key not provided');
    }

    try {
      const response = await fetch(`https://cloud.leonardo.ai/api/rest/v1/generations/${generationId}`, {
        headers: {
          'accept': 'application/json',
          'authorization': `Bearer ${apiKey}`
        }
      });

      if (!response.ok) {
        throw new Error(`Failed to get generation result: ${response.status}`);
      }

      const result = await response.json();
      
      if (result.generations_by_pk?.generated_images?.[0]) {
        const image = result.generations_by_pk.generated_images[0];
        return {
          url: image.url,
          seed: image.seed,
          id: image.id
        };
      }

      return null;
    } catch (error) {
      console.error("Error getting Leonardo AI generation result:", error);
      return null;
    }
  }
}