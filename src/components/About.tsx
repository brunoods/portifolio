// src/components/About.tsx
import Marquee from "react-fast-marquee";
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion'; // 1. Importar o motion

// 2. Definir as variantes da animação
const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  },
};

const skills = [
  'HTML5', 'CSS3', 'JavaScript (ES6+)', 'TypeScript', 
  'React', 'Vite', 'Tailwind CSS', 'Node.js',
  'Git', 'GitHub', 'UI/UX Design'
];

export default function About() {
  const { theme } = useTheme();
  const darkGradientColor = 'rgba(10, 10, 10, 0)';
  const lightGradientColor = 'rgba(245, 245, 245, 0)';

  return (
    <section id="sobre" className="py-20 px-4 md:px-8 overflow-hidden"> {/* Adicionado overflow-hidden */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-center mb-12">
        {/* 3. Animar a imagem */}
        <motion.div 
          className="md:col-span-1 flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <img 
            src="https://media.licdn.com/dms/image/v2/D4E03AQFJdlhBaOZfUA/profile-displayphoto-shrink_800_800/B4EZS8Pl62HUAg-/0/1738324992491?e=1758758400&v=beta&t=VRl2Z6wqfeOB1opdMmGH0p83aZYv9EIhNFdQQm2xYSQ"
            alt="Foto de perfil de Bruno Silva"
            className="rounded-3xl w-full max-w-sm object-cover shadow-lg"
          />
        </motion.div>
        <div className="md:col-span-2">
          {/* 4. Animar o título */}
          <motion.h2 
            className="text-5xl font-serif font-bold mb-6 text-light-text dark:text-dark-text"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={variants}
          >
            Sobre Mim
          </motion.h2>
          {/* 5. Animar o parágrafo */}
          <motion.p 
            className="font-sans text-gray-700 dark:text-gray-300 mb-4 leading-relaxed"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={{ ...variants, visible: { ...variants.visible, transition: { ...variants.visible.transition, delay: 0.2 }}}}
          >
            Olá! Sou Bruno Silva, um apaixonado por tecnologia e design que encontrou no desenvolvimento frontend a maneira perfeita de unir criatividade e lógica. Com uma sólida experiência em criar interfaces bonitas, intuitivas e responsivas, meu objetivo é sempre entregar a melhor experiência possível para o usuário final.
          </motion.p>
        </div>
      </div>
      <div className="mt-16">
        <Marquee 
          gradient={true}
          gradientColor={theme === 'dark' ? darkGradientColor : lightGradientColor}
          gradientWidth={100}
          speed={50} 
          pauseOnHover={true}
        >
          {skills.map(skill => (
            <div key={skill} className="font-sans text-xl font-semibold text-gray-600 dark:text-gray-400 mx-4">
              {skill}
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}