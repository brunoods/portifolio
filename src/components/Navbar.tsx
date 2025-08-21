// src/components/Navbar.tsx
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  return (
    <nav className="w-full font-sans bg-light-bg/80 dark:bg-dark-bg/80 backdrop-blur-sm p-4 flex justify-between items-center fixed top-0 left-0 z-10 border-b border-light-text/10 dark:border-dark-text/10">
      <div className="text-2xl font-serif font-bold text-light-text dark:text-dark-text">
        <a href="#">Bruno Silva</a>
      </div>

      <div className="flex items-center gap-4">
        <ul className="hidden md:flex space-x-8 text-light-text dark:text-dark-text">
          <li className="font-medium hover:text-accent cursor-pointer transition-colors duration-300">
            <a href="#projetos">Projetos</a>
          </li>
          <li className="font-medium hover:text-accent cursor-pointer transition-colors duration-300">
            <a href="#sobre">Sobre Mim</a>
          </li>
          <li className="font-medium hover:text-accent cursor-pointer transition-colors duration-300">
            <a href="#contato">Contato</a>
          </li>
        </ul>
        <ThemeToggle />
      </div>
    </nav>
  );
}