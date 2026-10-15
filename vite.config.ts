import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // Caminhos relativos: o site funciona publicado em qualquer pasta
  // (Vercel, Netlify, GitHub Pages) ou aberto localmente após o build.
  base: './',
  plugins: [react()],
})
