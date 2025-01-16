import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import autoprefixer from "autoprefixer";
import tailwindcss from "tailwindcss";

export default defineConfig({
  root: './webview', // 프로젝트 루트 디렉토리
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
  plugins: [react()],
  build: {
    outDir: path.resolve(__dirname, 'out/webview'), // 빌드 결과물 위치
    rollupOptions: {
      input: path.resolve(__dirname, 'src/webview/index.html')
    }
  },
  server: {
    port: 4000, // 개발 서버 포트
    open: true // 브라우저 자동 열림
  }
});
