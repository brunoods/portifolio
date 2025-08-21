// src/components/Hero.tsx
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import Button from './Button';

export default function Hero() {
  const name = "Bruno Silva";
  const letters = Array.from(name);

  const sentenceAnimation: Variants = {
    hidden: { 
      opacity: 0 
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
        staggerChildren: 0.04,
      },
    },
  };

  const letterAnimation: Variants = {
    hidden: { 
      opacity: 0,
      y: -20,
    },
    visible: { 
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center p-4">
      <div className="max-w-3xl">
        <motion.h1 
          className="text-6xl md:text-8xl font-serif font-bold mb-4 flex flex-wrap justify-center"
          variants={sentenceAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              variants={letterAnimation}
              // AQUI ESTÁ A CORREÇÃO DEFINITIVA
              className="text-light-text dark:text-dark-text hover:text-blue-500 dark:hover:text-blue-500 transition-all duration-300 ease-in-out hover:scale-125 hover:-translate-y-2"
            >
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          ))}
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