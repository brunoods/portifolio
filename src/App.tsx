// src/App.tsx
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useTheme } from './context/ThemeContext';
import TechMemoryGame from './components/TechMemoryGame';
import CustomCursor from './components/CustomCursor';
import Chatbot from './components/Chatbot';

function App() {
  const { theme } = useTheme();

  const backgroundClass = theme === 'dark'
    ? 'animated-gradient-dark'
    : 'animated-gradient-light';

  return (
    <div className={`relative font-sans text-light-text dark:text-dark-text ${backgroundClass}`}>
      <CustomCursor />
      <Chatbot />
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
          <TechMemoryGame />
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