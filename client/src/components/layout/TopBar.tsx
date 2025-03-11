import React from 'react';
import { motion } from 'framer-motion';
import { GlassPanel } from '../ui/glassmorphism';
import { useScrollPosition } from '@/hooks/useScrollPosition';

const TopBar: React.FC = () => {
  const { scrollY } = useScrollPosition();
  
  return (
    <GlassPanel
      as={motion.header}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 py-3 px-4 md:px-8 flex justify-between items-center"
      opacity={scrollY > 50 ? 0.85 : 0.15}
      style={{
        boxShadow: `0 4px 20px -1px rgba(66, 133, 244, ${scrollY > 50 ? 0.4 : 0.2}), 
                    0 2px 8px -1px rgba(131, 56, 236, ${scrollY > 50 ? 0.3 : 0.15})`,
      }}
    >
      <motion.img 
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" 
        alt="College Logo" 
        className="h-8 md:h-10" 
        whileHover={{ rotate: 360 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
      
      <motion.h1 
        className="text-center text-lg md:text-xl font-sans font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#3A86FF] to-[#8338EC]"
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        Centre of Excellence for Data Science
      </motion.h1>
      
      <motion.img 
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" 
        alt="Lab Logo" 
        className="h-8 md:h-10" 
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
      />
    </GlassPanel>
  );
};
export default TopBar;
