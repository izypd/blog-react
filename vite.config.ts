import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
import WindiCSS from 'vite-plugin-windicss';
import prismjsPlugin from 'vite-plugin-prismjs';
import viteCompression from 'vite-plugin-compression';

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  plugins: [
    react(),
    WindiCSS(),
    prismjsPlugin({
      languages: [
        'javascript',
        'css',
        'markup',
        'typescript',
        'python',
        'bash',
        'json',
      ],
      plugins: [
        'toolbar',
        'show-language',
        'copy-to-clipboard',
        'match-braces',
        'line-numbers',
      ],
      theme: 'solarizedlight',
      css: true,
    }),
    viteCompression(),
  ],
  resolve: {
    alias: [
      { find: /^~/, replacement: path.resolve(__dirname, './') },
      { find: '@', replacement: path.resolve(__dirname, 'src') },
    ],
  },
  build: {
    target: 'esnext',
  },
});
