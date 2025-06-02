import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080', // Backend server
        changeOrigin: true,
        secure: false, // Bỏ qua SSL nếu cần
        rewrite: (path) => path.replace(/^\/api/, '') // (Tùy chọn) nếu muốn bỏ '/api' khỏi đường dẫn
      }
    }
  }
});
