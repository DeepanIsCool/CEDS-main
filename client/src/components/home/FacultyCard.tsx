import React from 'react';
import { motion } from 'framer-motion';
import { FacultyMember } from '@/data/facultyData';
import { GlassPanel } from '../ui/glassmorphism';

interface FacultyCardProps {
  faculty: FacultyMember;
  index: number;
}

const FacultyCard: React.FC<FacultyCardProps> = ({ faculty, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      whileHover={{ scale: 1.05 }}
    >
      <GlassPanel className="rounded-xl p-4 transition-all duration-300 group">
        <div className="w-full h-48 mb-4 overflow-hidden rounded-lg relative">
          <motion.img 
            src={faculty.image} 
            alt={faculty.name} 
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          />
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex gap-2">
              {faculty.links.website && (
                <motion.a 
                  href={faculty.links.website} 
                  className="text-white text-sm hover:text-[#3A86FF]"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <i className="fas fa-globe"></i>
                </motion.a>
              )}
              {faculty.links.linkedin && (
                <motion.a 
                  href={faculty.links.linkedin} 
                  className="text-white text-sm hover:text-[#3A86FF]"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <i className="fab fa-linkedin"></i>
                </motion.a>
              )}
              {faculty.links.github && (
                <motion.a 
                  href={faculty.links.github} 
                  className="text-white text-sm hover:text-[#3A86FF]"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <i className="fab fa-github"></i>
                </motion.a>
              )}
            </div>
          </motion.div>
        </div>
        <h4 className="text-lg font-medium">{faculty.name}</h4>
        <p className="text-sm text-neutral-dark/70">{faculty.specialty}</p>
      </GlassPanel>
    </motion.div>
  );
};

export default FacultyCard;
