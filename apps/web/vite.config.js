import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3002, // Porta diferente da landing page (3000) e API (3001)
  },
  resolve: {
    alias: {
      '@': '/src', // Permite importar usando @ como alias para /src
    }
  }
}); 