import React from 'react';
import { motion } from 'framer-motion';
import MentorCard from './MentorCard';
import { mentorsData } from '@/data/mentorsData';

const MentorsSection: React.FC = () => {
  return (
    <section id="mentors" className="py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-sans font-bold mb-4">Our Mentors</h2>
          <p className="max-w-3xl mx-auto text-neutral-dark/80">
            Meet our exceptional faculty members who are leading breakthrough research and guiding the next generation of data scientists.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {mentorsData.map((mentor, index) => (
            <MentorCard key={mentor.id} mentor={mentor} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MentorsSection;
