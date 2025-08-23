// src/components/Projects.tsx
import ProjectCard from './ProjectCard';
import { projectsData } from '../data/projects';
// AQUI ESTÁ A CORREÇÃO:
import { motion, type Variants } from 'framer-motion';

const titleVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  },
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
};

export default function Projects() {
  return (
    <section id="projetos" className="py-20 px-4 md:px-8 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <motion.h2 
          className="text-5xl font-serif font-bold text-center mb-12 text-light-text dark:text-dark-text"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={titleVariants}
        >
          Meus Projetos
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {projectsData.map(project => (
            <motion.div key={project.title} variants={cardVariants}>
              <ProjectCard
                imageUrl={project.imageUrl}
                title={project.title}
                description={project.description}
                techs={project.techs}
                liveUrl={project.liveUrl}
                repoUrl={project.repoUrl}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}