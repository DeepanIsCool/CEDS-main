import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'wouter';
import { GlassPanel } from '../ui/glassmorphism';
import { ThemeToggle } from '../ui/theme-toggle';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  // Navigation items
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Mentors', path: '/mentors' },
    { name: 'Events', path: '/events' },
    { name: 'About', path: '/about' }
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 px-4 md:px-8 transition-all duration-300 ${
          scrolled ? 'py-2' : 'py-4'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <GlassPanel className={`rounded-xl py-2 px-4 flex justify-between items-center ${
          scrolled ? 'shadow-lg' : ''
        }`}>
          <Link href="/">
            <a className="text-xl font-bold text-primary flex items-center gap-2">
              <div className="w-10 h-10 bg-primary text-white rounded-lg flex items-center justify-center font-bold">
                DS
              </div>
              <span className="hidden md:block">Centre of Excellence<br/>for Data Science</span>
            </a>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-4">
              {navItems.map((item) => (
                <Link key={item.path} href={item.path}>
                  <a className={`text-sm font-medium px-2 py-1 rounded-md transition-colors ${
                    location === item.path 
                      ? 'text-primary bg-primary/10' 
                      : 'hover:text-primary'
                  }`}>
                    {item.name}
                  </a>
                </Link>
              ))}
            </div>

            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button 
              onClick={toggleMobileMenu}
              className="p-2 rounded-lg text-foreground focus:outline-none"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </GlassPanel>
      </motion.nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[60px] left-0 right-0 z-40 bg-background/80 backdrop-blur-lg"
          >
            <div className="flex flex-col px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <Link key={item.path} href={item.path}>
                  <a 
                    className={`text-base font-medium p-2 rounded-md transition-colors ${
                      location === item.path 
                        ? 'text-primary bg-primary/10' 
                        : 'hover:text-primary'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;