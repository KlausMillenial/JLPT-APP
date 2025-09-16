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
    return new Promise((resolve, reject) => {
      try {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        
        if (!ctx) {
          throw new Error('Canvas 2D context not available');
        }
        
        const width = params.width || 512;
        const height = params.height || 512;
        
        canvas.width = width;
        canvas.height = height;
        
        // Generate a deterministic color based on the prompt
        const hash = this.hashString(params.positivePrompt);
        const hue = hash % 360;
        
        // Create attractive gradient background
        const gradient = ctx.createLinearGradient(0, 0, width, height);
        gradient.addColorStop(0, `hsl(${hue}, 60%, 90%)`);
        gradient.addColorStop(0.5, `hsl(${(hue + 30) % 360}, 70%, 85%)`);
        gradient.addColorStop(1, `hsl(${(hue + 60) % 360}, 60%, 80%)`);
        
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
        
        // Add decorative elements
        this.addVisualElements(ctx, width, height, hue, params.positivePrompt);
        
        // Add main text
        const mainText = this.extractMainConcept(params.positivePrompt);
        this.addMainText(ctx, mainText, width, height);
        
        // Convert to data URL (more reliable than blob)
        try {
          const imageURL = canvas.toDataURL('image/png', 0.8);
          
          if (!imageURL || imageURL === 'data:,') {
            throw new Error('Failed to generate canvas data URL');
          }
          
          resolve({
            imageURL,
            positivePrompt: params.positivePrompt,
            seed: hash,
            id: Math.random().toString(36).substr(2, 9),
          });
        } catch (error) {
          console.error('Canvas toDataURL failed:', error);
          reject(new Error('Failed to convert canvas to image'));
        }
      } catch (error) {
        console.error('Image generation failed:', error);
        reject(error);
      }
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
  
  private static extractMainConcept(prompt: string): string {
    // Create realistic visual representations based on the prompt content
    if (prompt.includes('father') || prompt.includes('business attire')) return '👔';
    if (prompt.includes('mother') || prompt.includes('caring')) return '🤱';
    if (prompt.includes('green tea') || prompt.includes('ceramic cup')) return '🍵';
    if (prompt.includes('rice') || prompt.includes('bowl')) return '🍚';
    if (prompt.includes('bento') || prompt.includes('lunch')) return '🍱';
    if (prompt.includes('bathroom') || prompt.includes('toilet')) return '🚿';
    if (prompt.includes('house') || prompt.includes('home')) return '🏠';
    if (prompt.includes('school') || prompt.includes('building')) return '🏫';
    if (prompt.includes('train') || prompt.includes('station')) return '🚂';
    if (prompt.includes('calendar') || prompt.includes('time')) return '📅';
    if (prompt.includes('book') || prompt.includes('reading')) return '📖';
    if (prompt.includes('car') || prompt.includes('vehicle')) return '🚗';
    if (prompt.includes('clock') || prompt.includes('time display')) return '🕐';
    if (prompt.includes('writing') || prompt.includes('calligraphy')) return '✍️';
    if (prompt.includes('eating') || prompt.includes('chopsticks')) return '🥢';
    if (prompt.includes('drinking') || prompt.includes('tea cup')) return '☕';
    if (prompt.includes('eye') || prompt.includes('seeing')) return '👁️';
    if (prompt.includes('ear') || prompt.includes('listening')) return '👂';
    if (prompt.includes('speaking') || prompt.includes('mouth')) return '💬';
    if (prompt.includes('stomach') || prompt.includes('abdomen')) return '🫃';
    if (prompt.includes('hand') || prompt.includes('hands')) return '✋';
    if (prompt.includes('foot') || prompt.includes('feet')) return '🦶';
    if (prompt.includes('head') || prompt.includes('profile')) return '👤';
    
    // Default based on first meaningful word
    const words = prompt.split(' ').filter(word => 
      !['professional', 'photograph', 'of', 'a', 'the', 'high', 'quality', 'detailed'].includes(word.toLowerCase())
    );
    
    const firstWord = words[0]?.toLowerCase() || '';
    if (firstWord.includes('portrait')) return '👤';
    if (firstWord.includes('traditional')) return '🏮';
    if (firstWord.includes('modern')) return '🌟';
    
    return '📷'; // Photography/visual concept
  }

  private static addVisualElements(ctx: CanvasRenderingContext2D, width: number, height: number, hue: number, prompt: string) {
    ctx.globalAlpha = 0.15;
    
    // Add subtle geometric patterns
    const centerX = width / 2;
    const centerY = height / 2;
    
    // Draw concentric circles
    for (let i = 1; i <= 3; i++) {
      ctx.strokeStyle = `hsl(${(hue + i * 30) % 360}, 50%, 50%)`;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 80 + i * 40, 0, Math.PI * 2);
      ctx.stroke();
    }
    
    // Add corner decorations
    const corners = [
      [0, 0], [width, 0], [0, height], [width, height]
    ];
    
    corners.forEach(([x, y], index) => {
      ctx.fillStyle = `hsl(${(hue + index * 90) % 360}, 40%, 70%)`;
      ctx.beginPath();
      ctx.arc(x, y, 40, 0, Math.PI * 2);
      ctx.fill();
    });
    
    ctx.globalAlpha = 1;
  }
  
  private static addMainText(ctx: CanvasRenderingContext2D, text: string, width: number, height: number) {
    const centerX = width / 2;
    const centerY = height / 2;
    
    // Add emoji/icon
    ctx.font = 'bold 80px system-ui, -apple-system, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
    ctx.fillText(text, centerX, centerY - 20);
    
    // Add subtle label
    ctx.font = 'bold 16px system-ui, -apple-system, sans-serif';
    ctx.fillStyle = 'rgba(0, 0, 0, 0.6)';
    ctx.fillText('Visual Learning Aid', centerX, centerY + 60);
  }
}