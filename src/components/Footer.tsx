// src/components/Footer.tsx

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="font-sans bg-light-bg dark:bg-dark-bg border-t border-light-text/10 dark:border-dark-text/10 py-6 px-4 md:px-8">
      <div className="max-w-6xl mx-auto text-center flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-light-text/70 dark:text-dark-text/70">
          &copy; {currentYear} Bruno Silva. Todos os direitos reservados.
        </p>
        <div className="flex justify-center gap-6">
          <a 
            href="https://github.com/brunoods" 
            className="font-medium text-light-text/70 dark:text-dark-text/70 hover:text-accent transition-colors duration-300"
            data-cursor-stick
          >
            GitHub
          </a>
          <a 
            href="https://www.linkedin.com/in/brunoods/" 
            className="font-medium text-light-text/70 dark:text-dark-text/70 hover:text-accent transition-colors duration-300"
            data-cursor-stick
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}