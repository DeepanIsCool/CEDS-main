import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GlassPanel } from '../ui/glassmorphism';
import ProjectCard from './ProjectCard';
import { projectsData, ProjectCategory } from '@/data/projectsData';

const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  
  const filteredProjects = selectedCategory === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.category === selectedCategory);

  const categories = ['All', 'Grant-in-Aid', 'Collaborative', 'Ongoing'];

  return (
    <section id="projects" className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-neutral-light to-neutral-light/50">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-sans font-bold mb-4">Research Projects</h2>
          <p className="max-w-3xl mx-auto text-neutral-dark/80">
            Explore our cutting-edge research initiatives that are advancing the field of data science and creating real-world impact.
          </p>
        </motion.div>
        
        {/* Project Filtering */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {categories.map((category, index) => (
            <motion.button 
              key={category}
              className={`glass px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category ? 'bg-[#3A86FF] text-white' : 'hover:bg-[#3A86FF]/20'
              }`}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.3 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
