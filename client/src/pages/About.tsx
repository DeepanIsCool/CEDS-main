import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import TopBar from '@/components/layout/TopBar';
import BottomNavbar from '@/components/layout/BottomNavbar';
import FloatingMenu from '@/components/layout/FloatingMenu';
import AboutSection from '@/components/about/AboutSection';
import { useMousePositionElement } from '@/hooks/useMousePosition';

const About: React.FC = () => {
  const mainRef = useRef<HTMLDivElement>(null);
  useMousePositionElement(mainRef);

  return (
    <motion.div 
      className="interactive-bg min-h-screen flex flex-col bg-neutral-light text-neutral-dark font-body"
      ref={mainRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <TopBar />
      
      <main className="flex-grow pt-10">
        <AboutSection />
      </main>
      
      <BottomNavbar />
      <FloatingMenu />
    </motion.div>
  );
};

export default About;
