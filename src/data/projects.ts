// src/data/projects.ts

// 1. IMPORTAMOS AS IMAGENS LOCAIS COMO MÓDULOS
import lazernet from '../assets/img/lazernet.png';

// Definimos o "molde" de como um objeto de projeto deve ser
export interface Project {
  imageUrl: string; // O tipo continua sendo string, pois a importação nos retorna uma string de URL
  title: string;
  description: string;
  techs: string[];
  liveUrl: string;
  repoUrl: string;
}

// Este é o ÚNICO lugar que você precisará editar no futuro para atualizar seus projetos!
export const projectsData: Project[] = [
  {
    imageUrl: lazernet,
    // O título foi ajustado para ser mais descritivo
    title: 'Site Institucional - Lazernet',
    
    // A descrição agora reflete o site completo que construímos
    description: 'Página institucional moderna e responsiva para um provedor de internet fibra óptica. O projeto destaca os planos, a área de cobertura interativa e os benefícios da empresa através de um design dinâmico com animações.',
    
    // A tecnologia foi corrigida de 'Vite' para 'Next.js'
    techs: ['React', 'Typescript', 'Node.js', 'Tailwind CSS', 'Framer Motion'],
    
    liveUrl: 'https://lazernet.vercel.app/',
    repoUrl: 'https://github.com/brunoods/site-lazernet', // Adicionei o link do repo, se desejar pode deixar '#'
  },

];