import { toast } from "sonner";

const API_BASE_URL = "https://api-inference.huggingface.co/models";
const MODEL = "stabilityai/stable-diffusion-xl-base-1.0"; // Free model
const API_KEY_STORAGE_KEY = 'huggingface_api_key';

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

export class HuggingFaceService {
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
    return HuggingFaceService.getStoredApiKey();
  }

  async generateImage(params: GenerateImageParams): Promise<GeneratedImage> {
    if (!this.apiKey) {
      throw new Error('Hugging Face API key not provided');
    }

    try {
      console.log("Generating image with Hugging Face:", params.positivePrompt);
      
      const response = await fetch(`${API_BASE_URL}/${MODEL}`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          inputs: params.positivePrompt,
          parameters: {
            width: params.width || 512,
            height: params.height || 512,
            num_inference_steps: 20,
            guidance_scale: 7.5,
          }
        }),
      });

      if (!response.ok) {
        if (response.status === 503) {
          throw new Error('Model is loading. Please try again in a few moments.');
        }
        const error = await response.text();
        throw new Error(`Hugging Face API error: ${response.status} - ${error}`);
      }

      // Check if response is JSON (error) or binary (image)
      const contentType = response.headers.get('content-type');
      if (contentType?.includes('application/json')) {
        const errorData = await response.json();
        if (errorData.error) {
          throw new Error(errorData.error);
        }
      }

      // Convert blob to data URL
      const blob = await response.blob();
      const imageURL = URL.createObjectURL(blob);

      console.log("Image generated successfully");
      
      return {
        imageURL,
        positivePrompt: params.positivePrompt,
        seed: Math.floor(Math.random() * 1000000),
        id: Math.random().toString(36).substr(2, 9),
      };
    } catch (error) {
      console.error("Hugging Face generation error:", error);
      toast.error(error instanceof Error ? error.message : "Failed to generate image");
      throw error;
    }
  }
}