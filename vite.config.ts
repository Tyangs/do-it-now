import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

const getDirPath = (dir: string) => path.resolve(__dirname, dir);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
  },
  resolve: {
    alias: {
      '@': getDirPath('src'),
    },
  },
});
