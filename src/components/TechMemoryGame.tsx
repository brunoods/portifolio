// src/components/TechMemoryGame.tsx
import { useState, useEffect } from 'react';
import { SiReact, SiVite, SiNodedotjs, SiTypescript, SiTailwindcss, SiNextdotjs, SiFramer, SiGit } from 'react-icons/si';
import { FaRedo } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import type { IconType } from 'react-icons';

type CardType = {
  id: number;
  icon: IconType; // Usar o tipo IconType
  name: string;
  isFlipped: boolean;
  isMatched: boolean;
};
// ... (resto do ficheiro igual, não precisa de mais alterações)

const icons = [
  { icon: SiReact, name: 'React' },
  { icon: SiVite, name: 'Vite' },
  { icon: SiNodedotjs, name: 'Node.js' },
  { icon: SiTypescript, name: 'TypeScript' },
  { icon: SiTailwindcss, name: 'Tailwind CSS' },
  { icon: SiNextdotjs, name: 'Next.js' },
  { icon: SiFramer, name: 'Framer' },
  { icon: SiGit, name: 'Git' },
];

const generateShuffledCards = (): CardType[] => {
  const duplicatedIcons = [...icons, ...icons];
  return duplicatedIcons
    .map((item, index) => ({
      id: index,
      icon: item.icon,
      name: item.name,
      isFlipped: false,
      isMatched: false,
    }))
    .sort(() => Math.random() - 0.5);
};

export default function TechMemoryGame() {
  const [cards, setCards] = useState<CardType[]>(generateShuffledCards());
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [isGameWon, setIsGameWon] = useState(false);

  useEffect(() => {
    if (flippedCards.length === 2) {
      const [firstCardIndex, secondCardIndex] = flippedCards;
      const firstCard = cards[firstCardIndex];
      const secondCard = cards[secondCardIndex];

      if (firstCard.name === secondCard.name) {
        setTimeout(() => {
          setCards(prevCards =>
            prevCards.map(card =>
              card.name === firstCard.name ? { ...card, isMatched: true } : card
            )
          );
          setFlippedCards([]);
        }, 800);
      } else {
        setTimeout(() => {
          setCards(prevCards =>
            prevCards.map((card, index) =>
              index === firstCardIndex || index === secondCardIndex
                ? { ...card, isFlipped: false }
                : card
            )
          );
          setFlippedCards([]);
        }, 1200);
      }
    }
  }, [flippedCards, cards]);

  useEffect(() => {
    const allMatched = cards.every(card => card.isMatched);
    if (allMatched && cards.length > 0) {
      setIsGameWon(true);
    }
  }, [cards]);
  
  const handleCardClick = (index: number) => {
    if (flippedCards.length === 2 || cards[index].isFlipped) {
      return;
    }

    setMoves(prev => prev + 1);
    setFlippedCards(prev => [...prev, index]);
    setCards(prevCards =>
      prevCards.map((card, i) =>
        i === index ? { ...card, isFlipped: true } : card
      )
    );
  };
  
  const resetGame = () => {
    setCards(generateShuffledCards());
    setFlippedCards([]);
    setMoves(0);
    setIsGameWon(false);
  };

  return (
    <section id="game" className="py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 
          className="text-5xl font-serif font-bold mb-4 text-light-text dark:text-dark-text"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Teste a sua Memória
        </motion.h2>
        <motion.p 
          className="text-lg text-gray-700 dark:text-gray-300 mb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Encontre os pares de ícones de tecnologia no menor número de jogadas possível.
        </motion.p>
      </div>
      
      <div className="relative max-w-sm md:max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center md:gap-8">
            
          <div className="order-2 md:order-1 mt-8 md:mt-0 md:w-32 text-center">
            <div className="bg-light-bg/50 dark:bg-zinc-900/50 p-4 rounded-lg">
              <span className="text-sm text-gray-500 dark:text-gray-400">JOGADAS</span>
              <p className="text-4xl font-bold text-light-text dark:text-dark-text">{Math.floor(moves / 2)}</p>
            </div>
          </div>

          <div className="order-1 md:order-2 grid grid-cols-4 gap-2 sm:gap-4 p-4 rounded-lg bg-light-bg/50 dark:bg-zinc-900/50 w-full max-w-md">
            {cards.map((card, index) => (
              <div 
                key={card.id} 
                className="perspective-1000 cursor-none"
                onClick={() => handleCardClick(index)} 
                data-cursor-stick
              >
                <motion.div
                  className={`relative w-full h-full aspect-square transition-transform duration-700 preserve-3d ${card.isFlipped || card.isMatched ? 'rotate-y-180' : ''}`}
                >
                  <div className="absolute w-full h-full backface-hidden flex items-center justify-center rounded-lg bg-gray-300 dark:bg-zinc-700 hover:scale-105 transition-transform">
                    <span className="text-2xl sm:text-3xl font-bold text-gray-500 dark:text-gray-400">?</span>
                  </div>
                  <div className={`absolute w-full h-full backface-hidden flex items-center justify-center rounded-lg rotate-y-180 ${card.isMatched ? 'bg-green-500/30' : 'bg-accent/20'}`}>
                    <card.icon size={window.innerWidth < 768 ? 24 : 32} className="text-light-text dark:text-dark-text" />
                  </div>
                </motion.div>
              </div>
            ))}
          </div>

          <div className="order-3 md:order-3 mt-8 md:mt-0 md:w-32 text-center">
            <button 
              onClick={resetGame} 
              className="bg-light-bg/50 dark:bg-zinc-900/50 p-4 rounded-lg group transition-colors hover:bg-accent/20 cursor-none"
              aria-label="Reiniciar Jogo"
              data-cursor-stick
            >
              <FaRedo size={32} className="text-gray-500 dark:text-gray-400 transition-colors group-hover:text-accent" />
              <span className="mt-2 text-sm font-bold text-gray-500 dark:text-gray-400 transition-colors group-hover:text-accent">REINICIAR</span>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isGameWon && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute inset-0 bg-light-bg/90 dark:bg-dark-bg/90 flex flex-col items-center justify-center rounded-lg z-20"
            >
              <h3 className="text-4xl font-serif font-bold text-gradient mb-4">Parabéns!</h3>
              <p className="text-lg text-light-text dark:text-dark-text mb-6">Você encontrou todos os pares em {Math.floor(moves / 2)} jogadas.</p>
              <button 
                onClick={resetGame} 
                className="font-sans font-bold py-3 px-8 rounded-lg bg-gradient-to-r from-gradient-start via-gradient-mid to-gradient-end text-white cursor-none"
                data-cursor-stick
              >
                Jogar Novamente
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}