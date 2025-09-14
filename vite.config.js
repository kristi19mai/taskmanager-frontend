// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import copy from 'rollup-plugin-copy';

export default defineConfig({
  plugins: [
    react(),
    copy({
      targets: [
        { src: 'static.json', dest: 'dist/' } // Copies static.json to the dist folder
      ]
    })
  ],
  build: {
    outDir: 'dist', // Ensure output directory is dist
    emptyOutDir: true, // Clean dist directory before building
  },
});