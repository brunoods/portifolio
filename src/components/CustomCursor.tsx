// src/components/CustomCursor.tsx
import { useState, useEffect } from 'react';
import { motion, type Variants } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
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

  const cursorVariants: Variants = {
    default: {
      height: 32,
      width: 32,
      x: position.x - 16,
      y: position.y - 16,
      backgroundColor: 'rgba(0, 0, 0, 0)', // CORREÇÃO
      borderWidth: '2px',
      borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 98, 255, 0.5)',
      transition: { type: 'spring', stiffness: 500, damping: 30 },
    },
    interactive: {
      height: 60,
      width: 60,
      x: position.x - 30,
      y: position.y - 30,
      backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 98, 255, 0.1)',
      borderWidth: '0px',
      borderColor: 'rgba(0, 0, 0, 0)', // CORREÇÃO
      transition: { type: 'spring', stiffness: 400, damping: 20 },
    },
  };

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] hidden md:block"
      variants={cursorVariants}
      animate={isHoveringInteractive ? 'interactive' : 'default'}
    />
  );
}