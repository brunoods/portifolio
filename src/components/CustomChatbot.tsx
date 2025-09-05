// src/components/CustomChatbot.tsx
import { useEffect } from 'react';

// Declaração para o TypeScript reconhecer o objeto do seu chatbot na 'window'
declare global {
  interface Window {
    seuChatbot?: {
      init: (config: { apiKey: string, [key: string]: any }) => void;
    };
  }
}

export default function CustomChatbot() {
  // Lê as variáveis de ambiente unificadas
  const apiUrl = import.meta.env.VITE_GEMCONNECT_API_URL;
  const apiKey = import.meta.env.VITE_GEMCONNECT_API_KEY;

  useEffect(() => {
    // Garante que as variáveis foram definidas antes de continuar
    if (!apiUrl || !apiKey) {
      console.error('GEMCONNECT_API_URL ou GEMCONNECT_API_KEY não foram definidas no arquivo .env');
      return;
    }

    // Assumimos que o script do seu chatbot está em '/chatbot.js' na sua API.
    // Se for um caminho diferente, ajuste aqui.
    const scriptUrl = `${apiUrl}/chatbot.js`; 

    const script = document.createElement('script');
    script.src = scriptUrl;
    script.async = true;

    // Após o script carregar, inicializa o chatbot com a API key
    script.onload = () => {
      if (window.seuChatbot && typeof window.seuChatbot.init === 'function') {
        window.seuChatbot.init({
          apiKey: apiKey,
          // Adicione aqui outras configurações específicas do seu chatbot se necessário
        });
      } else {
        console.error('Função de inicialização do chatbot (window.seuChatbot.init) não encontrada.');
      }
    };

    document.body.appendChild(script);

    // Função de limpeza
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, [apiUrl, apiKey]);

  return null;
}