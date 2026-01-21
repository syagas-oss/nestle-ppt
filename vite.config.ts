
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Configuración crítica para GitHub Pages con el nombre del repo
  base: '/ppt-nestle/', 
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false
  }
});
