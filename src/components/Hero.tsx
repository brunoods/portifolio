// src/components/Hero.tsx
import { motion } from 'framer-motion';
import Button from './Button';
import { useTheme } from '../context/ThemeContext'; // 1. IMPORTAR o hook

export default function Hero() {
  const { theme } = useTheme(); // 2. USAR o hook para obter o tema atual

  return (
    // 3. APLICAR as classes de fundo de forma condicional
    <section 
      id="hero" 
      className={`min-h-screen flex flex-col justify-center items-center text-center p-4 ${
        theme === 'dark' 
          ? 'bg-black bg-hero-pattern' 
          : 'bg-white bg-hero-pattern-light'
      }`}
    >
      <div className="max-w-3xl">
        <motion.h1 
          className="text-6xl md:text-8xl font-serif font-bold mb-4 text-gradient"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Bruno Silva
        </motion.h1>

        <motion.p 
          className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
        >
          Web Designer & Desenvolvedor Frontend transformando ideias em experiências digitais interativas e modernas.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
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