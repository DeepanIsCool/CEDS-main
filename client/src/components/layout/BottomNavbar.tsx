import React from 'react';
import { motion } from 'framer-motion';
import { GlassPanel } from '../ui/glassmorphism';

const BottomNavbar: React.FC = () => {
  const socialLinks = [
    { icon: 'fab fa-twitter', url: '#', label: 'Twitter' },
    { icon: 'fab fa-linkedin', url: '#', label: 'LinkedIn' },
    { icon: 'fab fa-github', url: '#', label: 'Github' },
    { icon: 'fab fa-youtube', url: '#', label: 'YouTube' }
  ];

  return (
    <GlassPanel 
      variant="dark" 
      as={motion.footer}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="py-4 px-4 md:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <motion.div 
            className="flex items-center justify-center md:justify-start gap-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <i className="fas fa-map-marker-alt text-[#FF006E]"></i>
            <p className="text-sm">Knowledge Park, New Delhi - 110001</p>
          </motion.div>
          
          <motion.div 
            className="flex items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <i className="fas fa-envelope text-[#FF006E]"></i>
            <p className="text-sm">contact@datasciencelab.edu</p>
          </motion.div>
          
          <motion.div 
            className="flex items-center justify-center md:justify-end gap-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <i className="fas fa-phone text-[#FF006E]"></i>
            <p className="text-sm">+91-11-2345-6789</p>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-6 flex justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          {socialLinks.map((link, index) => (
            <motion.a 
              key={index}
              href={link.url} 
              className="text-white hover:text-[#FF006E] transition-colors"
              aria-label={link.label}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <i className={link.icon}></i>
            </motion.a>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-6 text-center text-xs text-white/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <p>© {new Date().getFullYear()} Centre of Excellence for Data Science. All Rights Reserved.</p>
        </motion.div>
      </div>
    </GlassPanel>
  );
};

export default BottomNavbar;
