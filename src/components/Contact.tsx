// src/components/Contact.tsx
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  // Lê as mesmas variáveis de ambiente
  const apiUrl = import.meta.env.VITE_GEMCONNECT_API_URL;
  const apiKey = import.meta.env.VITE_GEMCONNECT_API_KEY;

  // Define o endpoint para o qual o formulário será enviado.
  // Ajuste '/form-endpoint' se o caminho no seu servidor for diferente.
  const formActionUrl = apiUrl ? `${apiUrl}/forms/submit` : '';

  return (
    <section id="contato" className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        
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
              <a href="https://github.com/brunoods" target="_blank" rel="noopener noreferrer" data-cursor-stick>
                <FaGithub size={32} className="text-gray-400 hover:text-accent transition-all duration-300 hover:scale-110" />
              </a>
              <a href="https://www.linkedin.com/in/brunoods/" target="_blank" rel="noopener noreferrer" data-cursor-stick>
                <FaLinkedin size={32} className="text-gray-400 hover:text-accent transition-all duration-300 hover:scale-110" />
              </a>
            </div>
          </div>
        </div>

        <div className="font-sans">
          <form action={formActionUrl} method="POST">
            
            {/* Campo oculto para enviar sua API Key de forma segura */}
            <input type="hidden" name="apiKey" value={apiKey} />
            
            {/* Outros campos ocultos que seu sistema possa precisar */}
            <input type="hidden" name="subject" value="Nova mensagem do Portfólio" />
            <input type="hidden" name="from_name" value="Meu Portfólio" />

            <div className="relative z-0 mb-8">
              <input type="text" name="name" id="name" className="peer block w-full appearance-none border-0 border-b-2 border-light-text/20 bg-transparent py-2.5 px-0 text-base text-light-text dark:text-dark-text focus:border-accent focus:outline-none focus:ring-0" placeholder=" " required data-cursor-stick />
              <label htmlFor="name" className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-base text-gray-500 dark:text-gray-400 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-accent">
                Seu Nome
              </label>
            </div>

            <div className="relative z-0 mb-8">
              <input type="email" name="email" id="email" className="peer block w-full appearance-none border-0 border-b-2 border-light-text/20 bg-transparent py-2.5 px-0 text-base text-light-text dark:text-dark-text focus:border-accent focus:outline-none focus:ring-0" placeholder=" " required data-cursor-stick />
              <label htmlFor="email" className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-base text-gray-500 dark:text-gray-400 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-accent">
                Seu E-mail
              </label>
            </div>

            <div className="relative z-0 mb-8">
              <textarea name="message" id="message" rows={4} className="peer block w-full appearance-none border-0 border-b-2 border-light-text/20 bg-transparent py-2.5 px-0 text-base text-light-text dark:text-dark-text focus:border-accent focus:outline-none focus:ring-0" placeholder=" " required data-cursor-stick></textarea>
              <label htmlFor="message" className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-base text-gray-500 dark:text-gray-400 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-accent">
                Sua Mensagem
              </label>
            </div>

            <div className="text-left">
              <button
                type="submit" 
                className="inline-block font-sans font-bold py-3 px-12 rounded-lg transition-all duration-300 bg-gradient-to-r from-gradient-start via-gradient-mid to-gradient-end text-white hover:shadow-lg hover:shadow-accent/40 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                data-cursor-stick
              >
                Enviar Mensagem
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}