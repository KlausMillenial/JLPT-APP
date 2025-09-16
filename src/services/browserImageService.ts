import { toast } from "sonner";

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

class BrowserImageService {
  private static instance: BrowserImageService;
  private isLoading = false;

  static getInstance(): BrowserImageService {
    if (!BrowserImageService.instance) {
      BrowserImageService.instance = new BrowserImageService();
    }
    return BrowserImageService.instance;
  }

  async generateImage(params: GenerateImageParams): Promise<GeneratedImage> {
    try {
      console.log("Generating AI image for prompt:", params.positivePrompt);
      toast.info("Generating AI image...");

      // Use Hugging Face Inference API through fetch for text-to-image
      const response = await fetch("https://api-inference.huggingface.co/models/runwayml/stable-diffusion-v1-5", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
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
          throw new Error("Model is loading, please try again in a moment");
        }
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Convert response to blob and then to data URL
      const blob = await response.blob();
      
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = () => {
          const imageURL = reader.result as string;
          resolve({
            imageURL,
            positivePrompt: params.positivePrompt,
            seed: Math.floor(Math.random() * 1000000),
            id: Math.random().toString(36).substr(2, 9),
          });
        };
        reader.readAsDataURL(blob);
      });

    } catch (error) {
      console.error("AI image generation failed:", error);
      toast.error("AI image generation failed, using visual aid instead");
      throw error;
    }
  }

  // Check if the service is ready (always ready for API calls)
  isReady(): boolean {
    return true;
  }

  // Get loading status
  isLoadingModel(): boolean {
    return this.isLoading;
  }
}

export default BrowserImageService;