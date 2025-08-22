// src/components/Navbar.tsx
import ThemeToggle from './ThemeToggle';
import { useScrollDirection } from '../hooks/useScrollDirection';

export default function Navbar() {
  const scrollDirection = useScrollDirection();

  return (
    <nav className={`w-full font-sans bg-light-bg/80 dark:bg-dark-bg/80 backdrop-blur-sm p-4 flex justify-between items-center fixed top-0 left-0 z-40 border-b border-light-text/10 dark:border-dark-text/10 transition-transform duration-300 ${
        scrollDirection === 'down' ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="text-2xl font-serif font-bold text-light-text dark:text-dark-text">
        <a href="#" data-cursor-stick>Bruno Silva</a>
      </div>

      <div className="flex items-center gap-4">
        <ul className="hidden md:flex space-x-8 text-light-text dark:text-dark-text">
          {/* AQUI ESTÁ A CORREÇÃO:
            - Removido: cursor-pointer
            - Adicionado: data-cursor-stick
          */}
          <li className="font-medium hover:text-accent transition-colors duration-300" data-cursor-stick>
            {/* O atributo foi removido do <a> */}
            <a href="#projetos">Projetos</a>
          </li>
          <li className="font-medium hover:text-accent transition-colors duration-300" data-cursor-stick>
            <a href="#sobre">Sobre Mim</a>
          </li>
          <li className="font-medium hover:text-accent transition-colors duration-300" data-cursor-stick>
            <a href="#contato">Contato</a>
          </li>
        </ul>
        <ThemeToggle />
      </div>
    </nav>
  );
}