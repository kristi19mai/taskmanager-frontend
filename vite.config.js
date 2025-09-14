import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import copy from 'rollup-plugin-copy'; // You might need to install this: npm install --save-dev rollup-plugin-copy

export default defineConfig({
  plugins: [
    react(),
    copy({
      targets: [
        { src: 'static.json', dest: 'dist' }
      ],
      hook: 'writeBundle', // Copies after the bundle is written
    }),
  ],
  build: {
    outDir: 'dist', // Ensure this matches your staticDir
  },
});