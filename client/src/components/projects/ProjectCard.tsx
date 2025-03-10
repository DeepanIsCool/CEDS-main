import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '@/data/projectsData';
import { GlassPanel } from '../ui/glassmorphism';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const getCategoryColor = (category: string) => {
    switch(category) {
      case 'Grant-in-Aid': return 'glass-dark';
      case 'Collaborative': return 'glass-dark';
      case 'Ongoing': return 'glass-dark';
      default: return 'glass-dark';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      whileHover={{ y: -8, scale: 1.02 }}
    >
      <GlassPanel className="rounded-xl overflow-hidden transition-all duration-300 group hover:shadow-[0_10px_20px_rgba(0,0,0,0.15)]">
        <div className="w-full h-48 relative overflow-hidden">
          <div className="absolute top-3 left-3 z-10">
            <span className={`${getCategoryColor(project.category)} px-3 py-1 rounded-full text-xs text-white`}>
              {project.category}
            </span>
          </div>
          <motion.img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          />
        </div>
        <div className="p-5">
          <h3 className="text-xl font-medium mb-2">{project.title}</h3>
          <p className="text-sm text-neutral-dark/70 mb-3">
            {project.description}
          </p>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-xs font-medium">Mentors:</p>
              <p className="text-xs text-neutral-dark/70">{project.mentors.join(', ')}</p>
            </div>
            <p className="text-xs glass px-2 py-1 rounded-md">
              {project.icon && <i className={`${project.icon} mr-1`}></i>}
              {project.fundingAmount || project.partner}
            </p>
          </div>
        </div>
      </GlassPanel>
    </motion.div>
  );
};

export default ProjectCard;
