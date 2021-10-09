import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
// import styleImport from 'vite-plugin-style-import';
import WindiCSS from 'vite-plugin-windicss';
import viteCompression from 'vite-plugin-compression';

// https://vitejs.dev/config/
export default defineConfig({
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
  ],
  resolve: {
    alias: [
      { find: /^~/, replacement: path.resolve(__dirname, './') },
      { find: '@', replacement: path.resolve(__dirname, 'src') },
    ],
  },
});
