// src/components/CustomCursor.tsx
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Verifica se o cursor está sobre um elemento interativo
      const target = e.target as HTMLElement;
      if (target.closest('[data-cursor-stick]')) {
        setIsHoveringInteractive(true);
      } else {
        setIsHoveringInteractive(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const cursorVariants = {
    default: {
      height: 32,
      width: 32,
      borderWidth: '2px',
      backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0)' : 'rgba(0, 0, 0, 0)',
      borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 98, 255, 0.5)',
      transition: { type: 'spring', stiffness: 500, damping: 30 },
    },
    interactive: {
      height: 60,
      width: 60,
      borderWidth: '2px',
      backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 98, 255, 0.1)',
      borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0)' : 'rgba(0, 98, 255, 0)',
      transition: { type: 'spring', stiffness: 500, damping: 30 },
    },
  };

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-50"
      style={{
        translateX: position.x - 16, // O offset é metade do tamanho (32/2)
        translateY: position.y - 16,
      }}
      variants={cursorVariants}
      animate={isHoveringInteractive ? 'interactive' : 'default'}
    />
  );
}