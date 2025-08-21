// src/components/ProjectCard.tsx
import { useState } from 'react';
import { Tilt } from 'react-tilt';
import { FaSearchPlus } from 'react-icons/fa';
import type { Project } from '../data/projects';
import ProjectModal from './ProjectModal';
import TechIcon from './TechIcon';

const tiltOptions = {
  max: 25,
  scale: 1.05,
  speed: 1000,
  glare: true,
  "max-glare": 0.5,
};

export default function ProjectCard(project: Project) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function closeModal() {
    setIsModalOpen(false);
  }

  function openModal() {
    setIsModalOpen(true);
  }

  return (
    <>
      <Tilt options={tiltOptions}>
        <div className="bg-light-bg dark:bg-dark-bg rounded-lg overflow-hidden h-full flex flex-col group">
          
          <div className="relative overflow-hidden">
            <img src={project.imageUrl} alt={`Pré-visualização do projeto ${project.title}`} className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110" />
            <div 
              onClick={openModal}
              className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
            >
              <FaSearchPlus className="text-white text-4xl" />
            </div>
          </div>
          
          <div className="p-6 flex flex-col flex-grow">
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <h3 className="text-3xl font-serif font-bold mb-2 text-light-text dark:text-dark-text hover:text-blue-500 transition-colors duration-300">
                {project.title}
              </h3>
            </a>
            
            <p className="font-sans text-gray-700 dark:text-gray-300  line-clamp-2 flex-grow">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-x-4 gap-y-2 pt-3">
              {project.techs.map((tech) => (
                <TechIcon key={tech} tech={tech} />
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