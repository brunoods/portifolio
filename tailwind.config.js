/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'serif': ['Playfair Display', 'serif'],
      },
      colors: {
        'light-bg': '#f5f5f5',
        'light-text': '#0A0A0A',
        'dark-bg': '#0A0A0A',
        'dark-text': '#f5f5f5',
        'accent': '#0062FF',
        // Cores para o gradiente
        'gradient-start': '#0062FF',
        'gradient-mid': '#6a0dad',
        'gradient-end': '#e0218a',
      },
      animation: {
        'gradient-bg': 'gradient-bg 15s ease infinite',
        // Animação de brilho para os cartões
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        'gradient-bg': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        // Keyframes para a animação de brilho
        'shimmer': {
          'from': { backgroundPosition: '200% 0' },
          'to': { backgroundPosition: '-200% 0' },
        },
      },
    },
  },
  plugins: [
     require('@tailwindcss/line-clamp'),
     // Plugin para o efeito de gradiente no texto
     function ({ addUtilities }) {
        addUtilities({
          '.text-gradient': {
            '@apply bg-gradient-to-r from-gradient-start via-gradient-mid to-gradient-end bg-clip-text text-transparent': {},
          },
        })
      },
  ],
}