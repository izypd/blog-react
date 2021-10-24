import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
// import styleImport from 'vite-plugin-style-import';
import WindiCSS from 'vite-plugin-windicss';
import viteCompression from 'vite-plugin-compression';
import prismjsPlugin from 'vite-plugin-prismjs';

// https://vitejs.dev/config/
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
    // styleImport({
    //   libs: [
    //     {
    //       libraryName: 'antd',
    //       esModule: true,
    //       resolveStyle: (name) => {
    //         return `antd/es/${name}/style/index`;
    //       },
    //     },
    //   ],
    // }),
    WindiCSS(),
    viteCompression({
      ext: '.br',
      algorithm: 'brotliCompress',
    }),
    prismjsPlugin({
      languages: [
        'javascript',
        'css',
        'markup',
        'typescript',
        'python',
        'bash',
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
  ],
  resolve: {
    alias: [
      { find: /^~/, replacement: path.resolve(__dirname, './') },
      { find: '@', replacement: path.resolve(__dirname, 'src') },
    ],
  },
});
