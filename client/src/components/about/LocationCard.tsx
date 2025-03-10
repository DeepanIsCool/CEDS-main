import React from 'react';
import { motion } from 'framer-motion';
import { Location } from '@/data/locationsData';
import { GlassPanel } from '../ui/glassmorphism';

interface LocationCardProps {
  location: Location;
  index: number;
}

const LocationCard: React.FC<LocationCardProps> = ({ location, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      whileHover={{ y: -5 }}
    >
      <GlassPanel className="p-5 rounded-xl hover:shadow-lg transition-all duration-300">
        <motion.div 
          className={`mb-4 ${location.iconColor} text-center`}
          whileHover={{ scale: 1.2, rotate: 5 }}
        >
          <i className={`${location.icon} text-3xl`}></i>
        </motion.div>
        <h4 className="text-xl font-medium mb-2 text-center">{location.name}</h4>
        <p className="text-sm text-neutral-dark/70 text-center mb-4">
          {location.address}
        </p>
        <div className="text-xs text-neutral-dark/70 flex justify-center gap-4">
          <span><i className="fas fa-phone mr-1"></i> {location.contact.phone}</span>
          <span><i className="fas fa-envelope mr-1"></i> {location.contact.email}</span>
        </div>
      </GlassPanel>
    </motion.div>
  );
};

export default LocationCard;
