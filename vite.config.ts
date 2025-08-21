import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // Adicione esta linha:
  base: '/brunoods/', // Use o nome do seu repositório aqui!

  plugins: [react()],
})