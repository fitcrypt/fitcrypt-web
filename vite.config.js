import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: 'index.html',
      output: {
        // Manual chunk splitting for better caching
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-motion': ['framer-motion'],
          'vendor-ui': ['lucide-react', 'react-icons', 'swiper'],
        },
      },
    },
    // Minify with esbuild (faster, bundled with Vite)
    minify: 'esbuild',
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Generate source maps for debugging (can disable in production)
    sourcemap: false,
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'framer-motion'],
  },
});