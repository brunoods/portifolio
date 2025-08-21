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
    title: 'Landing Page para App',
    description: 'Página de marketing moderna e responsiva para promover o lançamento de um aplicativo mobile.',
    techs: ['Vite', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: 'https://lazernet.vercel.app/',
    repoUrl: '#',
  },

];