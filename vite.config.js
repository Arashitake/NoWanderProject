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
        target: 'http://119.23.214.198:8080',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
      '/other': {
        target: 'http://119.23.214.198:8080',
        changeOrigin: true
      }
    }
  }
});
