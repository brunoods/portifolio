// src/components/About.tsx
import Marquee from "react-fast-marquee";
import { useTheme } from '../context/ThemeContext'; // 1. Importe o useTheme

const skills = [
  'HTML5', 'CSS3', 'JavaScript (ES6+)', 'TypeScript', 
  'React', 'Vite', 'Tailwind CSS', 'Node.js',
  'Git', 'GitHub', 'UI/UX Design'
];

export default function About() {
  const { theme } = useTheme(); // 2. Acesse o tema atual

  return (
    <section id="sobre" className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-center mb-12">
        <div className="md:col-span-1 flex justify-center">
          <img 
            src="https://media.licdn.com/dms/image/v2/D4E03AQFJdlhBaOZfUA/profile-displayphoto-shrink_800_800/B4EZS8Pl62HUAg-/0/1738324992491?e=1758758400&v=beta&t=VRl2Z6wqfeOB1opdMmGH0p83aZYv9EIhNFdQQm2xYSQ"
            alt="Foto de perfil de Bruno Silva"
            className="rounded-lg w-full max-w-sm object-cover shadow-lg"
          />
        </div>
        <div className="md:col-span-2">
          <h2 className="text-5xl font-serif font-bold mb-6 text-light-text dark:text-dark-text">Sobre Mim</h2>
          <p className="font-sans text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
            Olá! Sou Bruno Silva, um apaixonado por tecnologia e design que encontrou no desenvolvimento frontend a maneira perfeita de unir criatividade e lógica. Com uma sólida experiência em criar interfaces bonitas, intuitivas e responsivas, meu objetivo é sempre entregar a melhor experiência possível para o usuário final.
          </p>
        </div>
      </div>
      <div className="mt-16">
        <Marquee 
          gradient={true}
          // 3. Corrija a cor do degradê para usar o tema do contexto
          gradientColor={theme === 'dark' ? '#0A0A0A' : '#f5f5f5'}
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