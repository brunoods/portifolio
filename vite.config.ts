// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // O valor DEVE ser '/portifolio/', com as barras no início e no fim.
  base: '/portifolio/',

  plugins: [react()],
})