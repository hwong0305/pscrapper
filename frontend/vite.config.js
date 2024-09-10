import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/v': {
        target: 'https://scontent-sjc3-1.cdninstagram.com',
        changeOrigin: true,
        secure: true,
      },
      '/o1': {
        target: 'https://scontent-sjc3-1.cdninstagram.com',
        changeOrigin: true,
        secure: true,
      },
    },
  },
});
