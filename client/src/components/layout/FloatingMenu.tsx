import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'wouter';
import { Menu, X, Home, Briefcase, Users, Calendar, Info, Moon, Sun } from 'lucide-react';
import { GlassPanel } from '../ui/glassmorphism';
import { useTheme } from '@/lib/ThemeProvider';

const FloatingMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
  const { theme, toggleTheme } = useTheme();
  
  const toggleMenu = () => setIsOpen(!isOpen);
  
  const menuItems = [
    { name: 'Home', path: '/', icon: <Home size={20} /> },
    { name: 'Projects', path: '/projects', icon: <Briefcase size={20} /> },
    { name: 'Mentors', path: '/mentors', icon: <Users size={20} /> },
    { name: 'Events', path: '/events', icon: <Calendar size={20} /> },
    { name: 'About', path: '/about', icon: <Info size={20} /> },
  ];
  
  return (
    <>
      {/* Floating menu button */}
      <motion.div
        className="fixed right-4 bottom-4 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      >
        <GlassPanel 
          className="rounded-full p-0 overflow-visible"
          border={false}
          onClick={toggleMenu}
        >
          <motion.button
            className="w-14 h-14 flex items-center justify-center relative focus:outline-none"
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isOpen ? 'close' : 'menu'}
                initial={{ rotate: -180, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 180, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.div>
            </AnimatePresence>
          </motion.button>
        </GlassPanel>
      </motion.div>

      {/* Fixed floating theme toggle button removed and integrated into menu */}
      
      {/* Navigation items */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 bg-background/50 backdrop-blur-sm z-40" onClick={toggleMenu}>
            <motion.div
              className="absolute bottom-20 right-4 flex flex-col-reverse items-end space-y-reverse space-y-2"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Theme toggle */}
              {menuItems.slice(0, 4).map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 20, opacity: 0 }}
                  transition={{ duration: 0.2, delay: 0.05 * (menuItems.length - index) }}
                >
                  <Link href={item.path}>
                    <a 
                      className={`flex items-center space-x-2 py-2 px-4 rounded-full ${
                        location === item.path ? 'text-primary bg-primary/10' : ''
                      }`}
                      onClick={toggleMenu}
                    >
                      <GlassPanel 
                        className={`rounded-full p-0 ${location === item.path ? 'bg-primary/20' : ''}`}
                      >
                        <div className="w-10 h-10 flex items-center justify-center">
                          {item.icon}
                        </div>
                      </GlassPanel>
                      <span className="font-medium">{item.name}</span>
                    </a>
                  </Link>
                </motion.div>
              ))}
              
              {/* Theme toggle button */}
              <motion.div
                key="theme-toggle"
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 20, opacity: 0 }}
                transition={{ duration: 0.2, delay: 0.05 * 1 }}
              >
                <div 
                  className="flex items-center space-x-2 py-2 px-4 rounded-full cursor-pointer hover:bg-primary/10"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleTheme();
                  }}
                >
                  <GlassPanel 
                    className="rounded-full p-0 bg-primary/20"
                  >
                    <div className="w-10 h-10 flex items-center justify-center">
                      {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                    </div>
                  </GlassPanel>
                  <span className="font-medium">{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
                </div>
              </motion.div>
              
              {/* About menu item */}
              {menuItems.slice(4).map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 20, opacity: 0 }}
                  transition={{ duration: 0.2, delay: 0.05 * 0 }}
                >
                  <Link href={item.path}>
                    <a 
                      className={`flex items-center space-x-2 py-2 px-4 rounded-full ${
                        location === item.path ? 'text-primary bg-primary/10' : ''
                      }`}
                      onClick={toggleMenu}
                    >
                      <GlassPanel 
                        className={`rounded-full p-0 ${location === item.path ? 'bg-primary/20' : ''}`}
                      >
                        <div className="w-10 h-10 flex items-center justify-center">
                          {item.icon}
                        </div>
                      </GlassPanel>
                      <span className="font-medium">{item.name}</span>
                    </a>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingMenu;