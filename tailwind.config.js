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
        'light-bg': '#f5f5f5', // Off-white para o fundo claro
        'light-text': '#0A0A0A', // Quase preto para texto claro
        'dark-bg': '#0A0A0A',   // Quase preto para fundo escuro
        'dark-text': '#f5f5f5',  // Off-white para texto escuro
        'accent': '#0062FF',     // Ocre/Dourado escuro para destaque
      },
    },
  },
  plugins: [
     require('@tailwindcss/line-clamp'),
  ],
}