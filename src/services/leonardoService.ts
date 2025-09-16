import { toast } from "sonner";

const API_BASE_URL = "https://cloud.leonardo.ai/api/rest/v1";
const API_KEY_STORAGE_KEY = 'leonardo_api_key';

export interface GenerateImageParams {
  positivePrompt: string;
  model?: string;
  width?: number;
  height?: number;
  numberResults?: number;
  guidance_scale?: number;
  num_inference_steps?: number;
  presetStyle?: string;
  alchemy?: boolean;
}

export interface GeneratedImage {
  imageURL: string;
  positivePrompt: string;
  seed: number;
  id: string;
}

export class LeonardoService {
  private apiKey: string | null = null;

  constructor(apiKey?: string) {
    this.apiKey = apiKey || this.getStoredApiKey();
  }

  static getStoredApiKey(): string | null {
    return localStorage.getItem(API_KEY_STORAGE_KEY);
  }

  static saveApiKey(apiKey: string): void {
    localStorage.setItem(API_KEY_STORAGE_KEY, apiKey);
  }

  static clearApiKey(): void {
    localStorage.removeItem(API_KEY_STORAGE_KEY);
  }

  private getStoredApiKey(): string | null {
    return LeonardoService.getStoredApiKey();
  }

  private async makeRequest(endpoint: string, method: 'GET' | 'POST' = 'GET', body?: any) {
    if (!this.apiKey) {
      throw new Error('Leonardo API key not provided');
    }

    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method,
      headers: {
        'Authorization': `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      ...(body && { body: JSON.stringify(body) }),
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`Leonardo API error: ${response.status} - ${error}`);
    }

    return response.json();
  }

  async generateImage(params: GenerateImageParams): Promise<GeneratedImage> {
    try {
      // Step 1: Create generation
      const generatePayload = {
        prompt: params.positivePrompt,
        modelId: params.model || "b24e16ff-06e3-43eb-8d33-4416c2d75876", // Leonardo Phoenix
        width: params.width || 512,
        height: params.height || 512,
        num_images: params.numberResults || 1,
        guidance_scale: params.guidance_scale || 7,
        num_inference_steps: params.num_inference_steps || 15,
        presetStyle: params.presetStyle || "DYNAMIC",
        alchemy: params.alchemy !== false, // Default to true
        public: false,
      };

      console.log("Creating Leonardo generation:", generatePayload);
      const createResponse = await this.makeRequest('/generations', 'POST', generatePayload);
      
      if (!createResponse.sdGenerationJob?.generationId) {
        throw new Error('Failed to create generation');
      }

      const generationId = createResponse.sdGenerationJob.generationId;
      console.log("Generation created with ID:", generationId);

      // Step 2: Poll for completion
      return this.waitForGeneration(generationId, params.positivePrompt);
    } catch (error) {
      console.error("Leonardo generation error:", error);
      toast.error(error instanceof Error ? error.message : "Failed to generate image");
      throw error;
    }
  }

  private async waitForGeneration(generationId: string, prompt: string): Promise<GeneratedImage> {
    const maxAttempts = 30; // 30 attempts with 2 second intervals = 60 seconds max
    const pollInterval = 2000; // 2 seconds

    for (let attempt = 0; attempt < maxAttempts; attempt++) {
      try {
        console.log(`Polling generation ${generationId}, attempt ${attempt + 1}`);
        const response = await this.makeRequest(`/generations/${generationId}`);
        
        if (response.generations_by_pk) {
          const generation = response.generations_by_pk;
          
          if (generation.status === 'COMPLETE' && generation.generated_images?.length > 0) {
            const image = generation.generated_images[0];
            console.log("Generation completed:", image);
            
            return {
              imageURL: image.url,
              positivePrompt: prompt,
              seed: image.seed || 0,
              id: image.id,
            };
          } else if (generation.status === 'FAILED') {
            throw new Error('Image generation failed');
          }
          // Status is still PENDING, continue polling
        }

        // Wait before next poll
        await new Promise(resolve => setTimeout(resolve, pollInterval));
      } catch (error) {
        console.error(`Polling attempt ${attempt + 1} failed:`, error);
        if (attempt === maxAttempts - 1) {
          throw error;
        }
        await new Promise(resolve => setTimeout(resolve, pollInterval));
      }
    }

    throw new Error('Generation timeout - please try again');
  }
}