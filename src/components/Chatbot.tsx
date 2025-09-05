// src/components/Chatbot.tsx
import { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { PaperAirplaneIcon, XMarkIcon, ChatBubbleOvalLeftEllipsisIcon } from '@heroicons/react/24/solid';

// Define o formato de cada mensagem
interface Message {
  text: string;
  sender: 'user' | 'bot';
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { sender: 'bot', text: "Olá! Como posso ajudar hoje?" }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // URLs da sua API a partir das variáveis de ambiente
  const apiUrl = import.meta.env.VITE_GEMCONNECT_API_URL;
  const apiKey = import.meta.env.VITE_GEMCONNECT_API_KEY;

  const chatEndRef = useRef<HTMLDivElement>(null);

  // Efeito para rolar para a última mensagem
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = { text: inputValue, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      // Verifique se a sua API espera o endpoint '/chat' ou outro.
      const response = await fetch(`${apiUrl}/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          apiKey: apiKey,
          message: inputValue,
        }),
      });

      if (!response.ok) {
        throw new Error('A resposta da rede não foi bem-sucedida.');
      }

      const data = await response.json();
      
      // Assumindo que a sua API devolve um objeto com a propriedade 'reply'
      const botMessage: Message = { text: data.reply, sender: 'bot' };
      setMessages(prev => [...prev, botMessage]);

    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
      const errorMessage: Message = { text: "Desculpe, ocorreu um erro. Tente novamente.", sender: 'bot' };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <>
      {/* Botão flutuante para abrir o chat */}
      <div className="fixed bottom-6 right-6 z-50">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-gradient-to-r from-gradient-start via-gradient-mid to-gradient-end text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          data-cursor-stick
        >
          <AnimatePresence>
            {isOpen ? (
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                <XMarkIcon className="w-8 h-8" />
              </motion.div>
            ) : (
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                <ChatBubbleOvalLeftEllipsisIcon className="w-8 h-8" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Janela do Chat */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 w-80 h-[28rem] bg-light-bg dark:bg-zinc-900 rounded-lg shadow-2xl flex flex-col font-sans z-50 overflow-hidden"
          >
            {/* Cabeçalho */}
            <header className="bg-light-bg/80 dark:bg-dark-bg/80 p-4 border-b border-light-text/10 dark:border-dark-text/10">
              <h3 className="font-bold text-light-text dark:text-dark-text">Assistente Virtual</h3>
            </header>

            {/* Corpo das Mensagens */}
            <div className="flex-1 p-4 overflow-y-auto">
              {messages.map((msg, index) => (
                <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} mb-3`}>
                  <div className={`max-w-xs px-4 py-2 rounded-2xl ${msg.sender === 'user' ? 'bg-accent text-white rounded-br-none' : 'bg-gray-200 dark:bg-zinc-700 text-light-text dark:text-dark-text rounded-bl-none'}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start mb-3">
                  <div className="max-w-xs px-4 py-2 rounded-2xl bg-gray-200 dark:bg-zinc-700 text-light-text dark:text-dark-text rounded-bl-none">
                    <div className="flex items-center space-x-1">
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-pulse [animation-delay:-0.3s]"></span>
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-pulse [animation-delay:-0.15s]"></span>
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></span>
                    </div>
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Input de texto */}
            <footer className="p-2 border-t border-light-text/10 dark:border-dark-text/10">
              <form onSubmit={handleSendMessage} className="flex items-center gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Digite sua mensagem..."
                  className="w-full bg-transparent focus:outline-none text-light-text dark:text-dark-text px-2"
                  disabled={isLoading}
                />
                <button type="submit" className="p-2 text-accent disabled:opacity-50" disabled={isLoading || !inputValue.trim()} data-cursor-stick>
                  <PaperAirplaneIcon className="w-6 h-6" />
                </button>
              </form>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}