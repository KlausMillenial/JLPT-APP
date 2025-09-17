import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.8cec7b3e34624e39b8a1847a9a334567',
  appName: 'jlpt-lingo-bistro',
  webDir: 'dist',
  server: {
    url: 'https://8cec7b3e-3462-4e39-b8a1-847a9a334567.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  bundledWebRuntime: false
};

export default config;