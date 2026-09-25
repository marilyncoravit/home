import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages serves this at /home/; Netlify serves it at the domain root.
  base: process.env.NETLIFY ? '/' : '/home/',
  plugins: [react(), tailwindcss()],
})
