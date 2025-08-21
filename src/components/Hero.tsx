// src/components/Hero.tsx
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import Button from './Button';
import { useTheme } from '../context/ThemeContext'; // 1. Importe o useTheme

export default function Hero() {
  const { theme } = useTheme(); // 2. Acesse o tema atual ('light' ou 'dark')
  const name = "Bruno Silva";
  const letters = Array.from(name);

  // 3. Expanda as variantes para incluir cores para cada tema
  const letterAnimation: Variants = {
    // Estado para o tema claro
    light: {
      color: "#1c1c1c", // Cor light-text
    },
    // Estado para o tema escuro
    dark: {
      color: "#f5f5f5", // Cor dark-text
    },
    hover: {
      scale: 1.2,
      y: -8,
      color: "#0062FF", // Cor accent
      transition: { duration: 0.5, type: "spring", stiffness: 600, damping: 10 }
    }
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center p-4">
      <div className="max-w-3xl">
        <motion.h1 
          className="text-6xl md:text-8xl font-serif font-bold mb-4 flex flex-wrap justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, staggerChildren: 0.05 }}
          viewport={{ once: true }}
        >
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              variants={letterAnimation}
              // 4. Diga à animação para usar o estado correspondente ao tema atual
              animate={theme} 
              whileHover="hover"
            >
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p 
          className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          Web Designer & Desenvolvedor Frontend transformando ideias em experiências digitais interativas e modernas.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          viewport={{ once: true }}
        >
          <Button as="a" href="#projetos">
            Conheça Meus Projetos
          </Button>
        </motion.div>
      </div>
    </section>
  );
}