import React, { createContext, useState, useEffect, useContext } from 'react';

// Definindo o tipo para o nosso contexto
type ThemeContextType = {
  theme: string;
  setTheme: (theme: string) => void;
};

// Criando o contexto com um valor padrão
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Criando nosso provedor de tema
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    const root = window.document.documentElement;
    
    // Remove a classe antiga e adiciona a nova
    const oldTheme = theme === 'dark' ? 'light' : 'dark';
    root.classList.remove(oldTheme);
    root.classList.add(theme);
    
    // Salva a preferência do usuário no localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Criando um 'hook' personalizado para facilitar o uso do nosso contexto
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}