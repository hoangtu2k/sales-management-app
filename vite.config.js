import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Trỏ @ đến thư mục src
      '@styles': path.resolve(__dirname, './src/styles'), // Trỏ @styles đến thư mục styles
      '@components': path.resolve(__dirname, './src/components'), // Trỏ @components đến thư mục components
      '@services': path.resolve(__dirname, './src/services'), // Trỏ @services đến thư mục services
      '@utils': path.resolve(__dirname, './src/utils'), // Trỏ @utils đến thư mục utils
      '@assets': path.resolve(__dirname, './src/assets'), // Trỏ @assets đến thư mục assets
      '@routes': path.resolve(__dirname, './src/routes'),
      '@pages': path.resolve(__dirname, './src/pages'), // Trỏ @pages đến thư mục pages
      '@layouts': path.resolve(__dirname, './src/layouts'), // Trỏ @layouts đến thư mục layouts
      '@contexts': path.resolve(__dirname, './src/contexts'),
    },
  },
});