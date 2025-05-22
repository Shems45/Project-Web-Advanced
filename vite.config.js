// vite.config.js
import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  root: '.',                  
  publicDir: 'Screenshots',    
  base: './',                 

  server: {
    host: true,               
    port: 5173,
    strictPort: false,
    open: false,
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    }
  },

  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: false,
  }
})
