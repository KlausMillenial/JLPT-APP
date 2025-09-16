import { toast } from "sonner";

const API_ENDPOINT = "https://api.runware.ai/v1";

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

export class RunwareImageService {
  private static apiKey: string | null = null;

  static setApiKey(key: string) {
    this.apiKey = key;
    localStorage.setItem('runware_api_key', key);
  }

  static getApiKey(): string | null {
    if (!this.apiKey) {
      this.apiKey = localStorage.getItem('runware_api_key');
    }
    return this.apiKey;
  }

  static clearApiKey() {
    this.apiKey = null;
    localStorage.removeItem('runware_api_key');
  }

  static async generateImage(params: GenerateImageParams): Promise<GeneratedImage> {
    const apiKey = this.getApiKey();
    if (!apiKey) {
      throw new Error('Runware API key not provided');
    }

    try {
      const taskUUID = crypto.randomUUID();
      
      const requestBody = [
        {
          taskType: "authentication",
          apiKey: apiKey
        },
        {
          taskType: "imageInference",
          taskUUID: taskUUID,
          positivePrompt: params.positivePrompt,
          width: params.width || 512,
          height: params.height || 512,
          model: "runware:100@1",
          numberResults: 1,
          outputFormat: "WEBP",
          CFGScale: 7,
          steps: 4
        }
      ];

      console.log("Generating image with Runware:", params.positivePrompt);

      const response = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Runware API error:", errorText);
        throw new Error(`Runware API error: ${response.status}`);
      }

      const result = await response.json();
      console.log("Runware API response:", result);

      if (result.error) {
        throw new Error(result.error);
      }

      // Find the image inference result
      const imageResult = result.data?.find((item: any) => item.taskType === "imageInference");
      
      if (!imageResult || !imageResult.imageURL) {
        throw new Error('No image generated');
      }

      return {
        imageURL: imageResult.imageURL,
        positivePrompt: params.positivePrompt,
        seed: imageResult.seed || Math.floor(Math.random() * 1000000),
        id: imageResult.taskUUID || Math.random().toString(36).substr(2, 9),
      };
    } catch (error) {
      console.error("Runware generation error:", error);
      throw error;
    }
  }
}