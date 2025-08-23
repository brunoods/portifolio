// src/components/About.tsx
import Marquee from "react-fast-marquee";
import { useTheme } from '../context/ThemeContext';
import { motion, type Variants } from 'framer-motion';

const textVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number = 0) => ({ 
    opacity: 1, 
    y: 0,
    transition: {
      delay,
      duration: 0.6,
      ease: "easeOut"
    }
  }),
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
    <section id="sobre" className="py-20 px-4 md:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-center mb-12">
        <motion.div 
          className="md:col-span-1 flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          {/* AQUI ESTÁ A ALTERAÇÃO: de max-w-sm para max-w-xs */}
          <img 
            src="https://media.licdn.com/dms/image/v2/D4E03AQFJdlhBaOZfUA/profile-displayphoto-shrink_800_800/B4EZS8Pl62HUAg-/0/1738324992491?e=1758758400&v=beta&t=VRl2Z6wqfeOB1opdMmGH0p83aZYv9EIhNFdQQm2xYSQ"
            alt="Foto de perfil de Bruno Silva"
            className="rounded-lg w-full max-w-xs object-cover shadow-lg"
          />
        </motion.div>
        <div className="md:col-span-2">
          <motion.h2 
            className="text-5xl font-serif font-bold mb-6 text-light-text dark:text-dark-text"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={textVariants}
            custom={0}
          >
            Sobre Mim
          </motion.h2>
          <motion.p 
            className="font-sans text-gray-700 dark:text-gray-300 mb-4 leading-relaxed"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={textVariants}
            custom={0.2}
          >
            Sou estudante de Análise e Desenvolvimento de Sistemas na Uninove, com foco em expandir meus conhecimentos na área. Minha paixão pela tecnologia me motiva a explorar novas soluções e aprimorar minhas habilidades para enfrentar desafios do mundo real.
          </motion.p>
          <motion.p 
            className="font-sans text-gray-700 dark:text-gray-300 mb-4 leading-relaxed"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={textVariants}
            custom={0.4}
          >
            Estou sempre em busca de aprendizado contínuo e me dedicando ao aperfeiçoamento das minhas habilidades, visando ampliar minhas oportunidades profissionais e me preparar para desafios globais. Acredito que dedicação e inovação são fundamentais para construir uma carreira de sucesso.
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