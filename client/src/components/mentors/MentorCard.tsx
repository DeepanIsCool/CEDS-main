import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mentor } from '@/data/mentorsData';
import { GlassPanel } from '../ui/glassmorphism';

interface MentorCardProps {
  mentor: Mentor;
  index: number;
}

const MentorCard: React.FC<MentorCardProps> = ({ mentor, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      whileHover={{ scale: isExpanded ? 1 : 1.03 }}
    >
      <GlassPanel 
        className="rounded-xl overflow-hidden transition-all duration-300 relative"
      >
        <motion.div
          initial={false}
          animate={{ height: isExpanded ? 'auto' : '450px' }} // Increased height
          className="relative overflow-hidden"
        >
          <div className="relative">
            <div className="h-48 overflow-hidden">
              <motion.img 
                src={mentor.image} 
                alt={mentor.name} 
                className="w-full h-full object-cover"
                whileHover={{ scale: isExpanded ? 1 : 1.05 }}
                transition={{ duration: 0.5 }}
              />
            </div>
            
            <div className="p-5">
              <h3 className="text-xl font-medium mb-1">{mentor.name}</h3>
              <p className="text-sm font-medium text-[#3A86FF] mb-3">{mentor.position} · {mentor.specialty}</p>
              
              <p className="text-sm text-neutral-dark/80 mb-4">
                {isExpanded ? mentor.bio : `${mentor.bio.substring(0, 120)}...`}
              </p>
              
              <div className="flex gap-3 mb-4">
                {mentor.links.email && (
                  <motion.a 
                    href={`mailto:${mentor.links.email}`} 
                    className="text-neutral-dark/70 hover:text-[#3A86FF]"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <i className="fas fa-envelope"></i>
                  </motion.a>
                )}
                {mentor.links.website && (
                  <motion.a 
                    href={mentor.links.website} 
                    className="text-neutral-dark/70 hover:text-[#3A86FF]"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <i className="fas fa-globe"></i>
                  </motion.a>
                )}
                {mentor.links.linkedin && (
                  <motion.a 
                    href={mentor.links.linkedin} 
                    className="text-neutral-dark/70 hover:text-[#3A86FF]"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <i className="fab fa-linkedin"></i>
                  </motion.a>
                )}
                {mentor.links.github && (
                  <motion.a 
                    href={mentor.links.github} 
                    className="text-neutral-dark/70 hover:text-[#3A86FF]"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <i className="fab fa-github"></i>
                  </motion.a>
                )}
                {mentor.links.twitter && (
                  <motion.a 
                    href={mentor.links.twitter} 
                    className="text-neutral-dark/70 hover:text-[#3A86FF]"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <i className="fab fa-twitter"></i>
                  </motion.a>
                )}
              </div>
              
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="mb-4">
                      <h4 className="text-md font-medium mb-2">Key Achievements</h4>
                      <ul className="text-sm text-neutral-dark/80 space-y-1 pl-4">
                        {mentor.achievements.map((achievement, i) => (
                          <li key={i} className="list-disc list-outside">
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-md font-medium mb-2">Selected Publications</h4>
                      <ul className="text-sm text-neutral-dark/80 space-y-3">
                        {mentor.publications.map((pub, i) => (
                          <li key={i} className="border-l-2 border-[#3A86FF]/50 pl-3">
                            <p className="font-medium">{pub.title} ({pub.year})</p>
                            {pub.journal && <p className="text-xs italic">{pub.journal}</p>}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
        
        <motion.button
          className="absolute bottom-4 right-4 glass-dark rounded-full w-8 h-8 flex items-center justify-center text-white"
          onClick={() => setIsExpanded(!isExpanded)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <i className={`fas fa-chevron-${isExpanded ? 'up' : 'down'}`}></i>
        </motion.button>
      </GlassPanel>
    </motion.div>
  );
};

export default MentorCard;
