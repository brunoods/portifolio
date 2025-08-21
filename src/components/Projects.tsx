// src/components/Projects.tsx

import ProjectCard from './ProjectCard';
import { projectsData } from '../data/projects'; // 1. Importe os dados do novo arquivo

export default function Projects() {
  return (
    <section id="projetos" className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-serif font-bold text-center mb-12 text-light-text dark:text-dark-text">Meus Projetos</h2>
        
        {/* 2. O resto do código continua o mesmo, mas agora ele usa os dados importados */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map(project => (
            <ProjectCard
              key={project.title}
              imageUrl={project.imageUrl}
              title={project.title}
              description={project.description}
              techs={project.techs}
              liveUrl={project.liveUrl}
              repoUrl={project.repoUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}