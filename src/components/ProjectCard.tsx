// src/components/ProjectCard.tsx
import { useState } from 'react';
import { Tilt } from 'react-tilt';
import type { Project } from '../data/projects';
import ProjectModal from './ProjectModal';
import { useTheme } from '../context/ThemeContext';

const tiltOptions = {
  max: 15,
  scale: 1.02,
  speed: 400,
  glare: true,
  "max-glare": 0.5,
};

export default function ProjectCard(project: Project) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { theme } = useTheme();

  function closeModal() {
    setIsModalOpen(false);
  }

  function openModal() {
    setIsModalOpen(true);
  }

  // Definimos os dois estilos de brilho
  const shimmerDark = "absolute inset-0 bg-[linear-gradient(110deg,#0A0A0A,45%,#1e293b,55%,#0A0A0A)] bg-[length:200%_100%] animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500";
  const shimmerLight = "absolute inset-0 bg-[linear-gradient(110deg,#f5f5f5,45%,#e5e7eb,55%,#f5f5f5)] bg-[length:200%_100%] animate-shimmer opacity-0 group-hover:opacity-50 transition-opacity duration-500";

  return (
    <>
      <Tilt options={tiltOptions}>
        <div 
          onClick={openModal} 
          className="bg-light-bg dark:bg-zinc-900 rounded-lg overflow-hidden h-full flex flex-col group relative shadow-lg dark:shadow-accent/10 cursor-pointer"
        >
          {/* AQUI ESTÁ A LÓGICA CORRIGIDA E MAIS LIMPA */}
          <div className={theme === 'dark' ? shimmerDark : shimmerLight} />

          <div className="relative overflow-hidden">
            <img src={project.imageUrl} alt={`Pré-visualização do projeto ${project.title}`} className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-lg font-bold">Ver Detalhes</span>
            </div>
          </div>
          
          <div className="p-6 flex flex-col flex-grow z-10">
            <h3 className="text-3xl font-serif font-bold mb-2 text-light-text dark:text-dark-text group-hover:text-gradient transition-colors duration-300">
              {project.title}
            </h3>
            
            <p className="font-sans text-gray-700 dark:text-gray-300 line-clamp-3 flex-grow">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2 pt-4">
              {project.techs.map((tech) => (
                <span key={tech} className="font-sans text-xs font-semibold text-accent bg-accent/10 px-2 py-1 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Tilt>

      <ProjectModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        project={project} 
      />
    </>
  );
}