import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import EventCard from './EventCard';
import { eventsData } from '@/data/eventsData';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const EventsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const settings = {
    centerMode: true,
    centerPadding: '20%',
    slidesToShow: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: false,
    swipeToSlide: true,
    beforeChange: (_: number, next: number) => setActiveIndex(next),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: '10%',
        }
      },
      {
        breakpoint: 480,
        settings: {
          centerPadding: '5%',
        }
      }
    ]
  };

  return (
    <section id="events" className="py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-sans font-bold mb-4">Events</h2>
          <p className="max-w-3xl mx-auto text-neutral-dark/80">
            Join us for workshops, conferences, and seminars that bring together researchers, students, and industry professionals.
          </p>
        </motion.div>
        
        {/* Events Carousel */}
        <div className="relative py-10 overflow-hidden">
          <Slider {...settings}>
            {eventsData.map((event, index) => (
              <div key={event.id} className="px-2">
                <EventCard 
                  event={event} 
                  index={index} 
                  isActive={activeIndex === index}
                />
              </div>
            ))}
          </Slider>

          {/* Left and Right Gradient Overlays */}
          <div className="absolute left-0 top-0 h-full w-1/6 bg-gradient-to-r from-background to-transparent z-0"></div>
          <div className="absolute right-0 top-0 h-full w-1/6 bg-gradient-to-l from-background to-transparent z-0"></div>
        </div>

        {/* Event Indicators */}
        <div className="flex justify-center mt-2 gap-2">
          {eventsData.map((_, index) => (
            <div 
              key={index} 
              className={`h-2 rounded-full transition-all ${
                activeIndex === index 
                  ? 'w-6 bg-primary' 
                  : 'w-2 bg-primary/30'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
