// src/components/ProjectCard.tsx
import { Tilt } from 'react-tilt';

interface ProjectCardProps {
  imageUrl: string;
  title: string;
  description: string;
  techs: string[];
  liveUrl: string;
  repoUrl: string;
}

const tiltOptions = {
  max: 25,
  scale: 1.05,
  speed: 1000,
  glare: true,
  "max-glare": 0.5,
};

export default function ProjectCard({ imageUrl, title, description, techs, liveUrl, repoUrl }: ProjectCardProps) {
  return (
    <Tilt options={tiltOptions}>
      <div className="bg-light-bg dark:bg-dark-bg rounded-lg overflow-hidden h-full">
        <img src={imageUrl} alt={`Pré-visualização do projeto ${title}`} className="w-full h-56 object-cover" />
        <div className="p-6 flex flex-col">
          <h3 className="text-3xl font-serif font-bold mb-2 text-light-text dark:text-dark-text">{title}</h3>
          <p className="font-sans text-gray-700 dark:text-gray-300 mb-4 flex-grow">{description}</p>
          <div className="flex flex-wrap gap-x-4 gap-y-2 mb-4">
            {techs.map((tech) => (
              <span key={tech} className="font-sans text-sm font-semibold text-accent">
                {tech}
              </span>
            ))}
          </div>
          <div className="flex justify-start gap-6 mt-auto pt-4">
            <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="font-sans font-bold text-light-text dark:text-dark-text hover:text-accent transition-colors">
              Ver Ao Vivo
            </a>
            <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="font-sans font-bold text-light-text dark:text-dark-text hover:text-accent transition-colors">
              Código Fonte
            </a>
          </div>
        </div>
      </div>
    </Tilt>
  );
}