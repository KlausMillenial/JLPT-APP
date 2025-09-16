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

export class PlaceholderImageService {
  static generateImage(params: GenerateImageParams): Promise<GeneratedImage> {
    return new Promise((resolve) => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d')!;
      
      const width = params.width || 512;
      const height = params.height || 512;
      
      canvas.width = width;
      canvas.height = height;
      
      // Generate a random color based on the prompt
      const hash = this.hashString(params.positivePrompt);
      const hue = hash % 360;
      
      // Create gradient background
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, `hsl(${hue}, 70%, 85%)`);
      gradient.addColorStop(1, `hsl(${(hue + 30) % 360}, 70%, 75%)`);
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
      
      // Add some geometric shapes for visual interest
      this.addShapes(ctx, width, height, hue);
      
      // Add text overlay
      const words = params.positivePrompt.split(' ').slice(0, 3); // First 3 words
      this.addText(ctx, words.join('\n'), width, height);
      
      // Convert to blob URL
      canvas.toBlob((blob) => {
        if (blob) {
          const imageURL = URL.createObjectURL(blob);
          resolve({
            imageURL,
            positivePrompt: params.positivePrompt,
            seed: hash,
            id: Math.random().toString(36).substr(2, 9),
          });
        }
      }, 'image/png');
    });
  }
  
  private static hashString(str: string): number {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32bit integer
    }
    return Math.abs(hash);
  }
  
  private static addShapes(ctx: CanvasRenderingContext2D, width: number, height: number, hue: number) {
    ctx.globalAlpha = 0.3;
    
    // Add some circles
    for (let i = 0; i < 3; i++) {
      ctx.fillStyle = `hsl(${(hue + i * 40) % 360}, 60%, 60%)`;
      const x = (width / 4) * (i + 1);
      const y = height / 2 + (i % 2 === 0 ? -50 : 50);
      const radius = 30 + i * 10;
      
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();
    }
    
    ctx.globalAlpha = 1;
  }
  
  private static addText(ctx: CanvasRenderingContext2D, text: string, width: number, height: number) {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
    ctx.font = 'bold 24px system-ui, -apple-system, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    const lines = text.split('\n');
    const lineHeight = 30;
    const startY = height / 2 - (lines.length - 1) * lineHeight / 2;
    
    lines.forEach((line, index) => {
      ctx.fillText(line, width / 2, startY + index * lineHeight);
    });
  }
}