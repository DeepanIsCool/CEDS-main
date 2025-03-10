import React from 'react';
import { motion } from 'framer-motion';
import { Event as BaseEvent } from '@/data/eventsData';
import { GlassPanel } from '../ui/glassmorphism';
import { Clock, MapPin } from 'lucide-react';

// Extend the base Event type with the additional properties needed
interface Event extends BaseEvent {
  image?: string;
  additionalDetails?: string;
}

interface EventCardProps {
  event: Event;
  index: number;
  isActive?: boolean;
}

const EventCard: React.FC<EventCardProps> = ({ event, index, isActive = false }) => {
  // Using a default image if none is provided in the event data
  const eventImage = event.image || "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1000&q=80";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="h-full transition-all duration-300"
    >
      <GlassPanel 
        className={`rounded-xl overflow-hidden transition-all duration-500 ${
          isActive 
            ? 'shadow-[0_10px_30px_rgba(0,0,0,0.2)]' 
            : 'hover:shadow-[0_10px_20px_rgba(0,0,0,0.15)]'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Image section */}
          <div className="w-full h-48 relative overflow-hidden">
            <motion.img
              src={eventImage}
              alt={event.title}
              className="w-full h-full object-cover"
              whileHover={{ scale: isActive ? 1.05 : 1 }}
              transition={{ duration: 0.5 }}
            />
            <div className="absolute top-3 right-3 z-10">
              <span className="glass px-2 py-1 rounded-full text-xs font-medium">
                {event.status}
              </span>
            </div>
          </div>
          
          {/* Content section */}
          <div className="p-5 flex-grow">
            <div className="flex items-start gap-4">
              <motion.div 
                className="flex-shrink-0 text-center bg-primary p-3 rounded-lg text-white"
                whileHover={{ scale: 1.05 }}
              >
                <p className="text-sm font-medium">{event.date.month}</p>
                <p className="text-2xl font-bold">{event.date.day}</p>
                <p className="text-xs">{event.date.year}</p>
              </motion.div>
              
              <div className="flex-grow">
                <h3 className="text-xl font-medium mb-2">{event.title}</h3>
                <p className={`text-sm text-muted-foreground mb-4 ${isActive ? '' : 'line-clamp-3'}`}>
                  {event.description}
                </p>
                <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center"><Clock size={14} className="mr-1" /> {event.time}</span>
                  <span className="flex items-center"><MapPin size={14} className="mr-1" /> {event.location}</span>
                </div>
              </div>
            </div>
            
            {/* Additional details that show only on active card */}
            {isActive && event.additionalDetails && (
              <div className="mt-4 pt-4 border-t border-neutral-200 dark:border-neutral-700">
                <p className="text-sm text-muted-foreground">
                  {event.additionalDetails}
                </p>
              </div>
            )}
          </div>
        </div>
      </GlassPanel>
    </motion.div>
  );
};

export default EventCard;
