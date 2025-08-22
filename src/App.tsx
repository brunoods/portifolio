// src/App.tsx
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useTheme } from './context/ThemeContext';

function App() {
  const { theme } = useTheme();

  const backgroundClass = theme === 'dark'
    ? 'animated-gradient-dark'
    : 'animated-gradient-light';

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className={`relative font-sans text-light-text dark:text-dark-text ${backgroundClass}`}>
      {/* Efeito Aurora */}
      <motion.div
        className="pointer-events-none fixed -inset-px z-30 opacity-40 dark:opacity-60 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 98, 255, 0.15), transparent 80%)`,
        }}
      />
      
      <Navbar />
      <main>
        <Hero />
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <Projects />
        </motion.div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <About />
        </motion.div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <Contact />
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}

export default App;