import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  server: {
    port: 3030,
    // open: true,
    proxy: {
      '/api': {
        target: '',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\api/, '')
      }
    }
  }
});