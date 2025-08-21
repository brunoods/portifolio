// src/components/Contact.tsx
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Importando os ícones
import Button from './Button'; // 1. Importe o nosso componente Button

export default function Contact() {
  return (
    <section id="contato" className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        
        {/* Coluna da Esquerda: Informações */}
        <div className="font-sans">
          <h2 className="text-5xl font-serif font-bold mb-6 text-light-text dark:text-dark-text">
            Vamos Conversar.
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
            Estou sempre aberto a novas oportunidades e colaborações. Se você tem um projeto em mente, uma pergunta, ou simplesmente quer se conectar, sinta-se à vontade para me contatar.
          </p>
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-light-text dark:text-dark-text">
              Outras formas de me encontrar:
            </h3>
            <div className="flex items-center gap-6">
              <a href="https://github.com/brunoods" target="_blank" rel="noopener noreferrer" className="text-light-text dark:text-dark-text hover:text-accent transition-colors">
                <FaGithub size={32} />
              </a>
              <a href="https://www.linkedin.com/in/brunoods/" target="_blank" rel="noopener noreferrer" className="text-light-text dark:text-dark-text hover:text-accent transition-colors">
                <FaLinkedin size={32} />
              </a>
            </div>
          </div>
        </div>

        {/* Coluna da Direita: Formulário */}
        <div className="font-sans">
          <form 
            action="https://formspree.io/f/SUA_ID_UNICA_AQUI" 
            method="POST"
          >
            {/* Campo Nome com Label Flutuante */}
            <div className="relative z-0 mb-8">
              <input type="text" name="name" id="name" className="peer block w-full appearance-none border-0 border-b-2 border-light-text/20 bg-transparent py-2.5 px-0 text-base text-light-text dark:text-dark-text focus:border-accent focus:outline-none focus:ring-0" placeholder=" " required />
              <label htmlFor="name" className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-base text-gray-500 dark:text-gray-400 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-accent">
                Seu Nome
              </label>
            </div>

            {/* Campo E-mail com Label Flutuante */}
            <div className="relative z-0 mb-8">
              <input type="email" name="email" id="email" className="peer block w-full appearance-none border-0 border-b-2 border-light-text/20 bg-transparent py-2.5 px-0 text-base text-light-text dark:text-dark-text focus:border-accent focus:outline-none focus:ring-0" placeholder=" " required />
              <label htmlFor="email" className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-base text-gray-500 dark:text-gray-400 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-accent">
                Seu E-mail
              </label>
            </div>

            {/* Campo Mensagem com Label Flutuante */}
            <div className="relative z-0 mb-8">
              <textarea name="message" id="message" rows={4} className="peer block w-full appearance-none border-0 border-b-2 border-light-text/20 bg-transparent py-2.5 px-0 text-base text-light-text dark:text-dark-text focus:border-accent focus:outline-none focus:ring-0" placeholder=" " required></textarea>
              <label htmlFor="message" className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-base text-gray-500 dark:text-gray-400 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-accent">
                Sua Mensagem
              </label>
            </div>

            <div className="text-left">
              {/* 2. Substituímos o botão antigo pelo nosso componente */}
              <Button as="button" type="submit">
                Enviar Mensagem
              </Button>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
}