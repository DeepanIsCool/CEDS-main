import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import TopBar from '@/components/layout/TopBar';
import BottomNavbar from '@/components/layout/BottomNavbar';
import FloatingMenu from '@/components/layout/FloatingMenu';
import LandingSection from '@/components/home/LandingSection';
import ProjectsSection from '@/components/projects/ProjectsSection';
import EventsSection from '@/components/events/EventsSection';
import AboutSection from '@/components/about/AboutSection';
import { useMousePositionElement } from '@/hooks/useMousePosition';

const Home: React.FC = () => {
  const mainRef = useRef<HTMLDivElement>(null);
  useMousePositionElement(mainRef);
  
  useEffect(() => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(this: HTMLAnchorElement, e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (!targetId) return;
        
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          window.scrollTo({
            top: (targetElement as HTMLElement).offsetTop - 80, // Offset for header
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

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
      
      <main className="flex-grow">
        <LandingSection />
        {/* <ProjectsSection /> */}
        {/* <EventsSection /> */}
        {/* <AboutSection /> */}
      </main>
      
      <BottomNavbar />
      <FloatingMenu />
    </motion.div>
  );
};

export default Home;
