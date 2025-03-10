import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { GlassPanel } from '../ui/glassmorphism';
import LocationCard from './LocationCard';
import { locationsData } from '@/data/locationsData';

// Add type declaration for Google Maps
declare global {
  interface Window {
    google: {
      maps: {
        Map: new (element: HTMLElement, options: any) => any;
        Marker: new (options: any) => any;
        InfoWindow: new (options: any) => any;
        LatLng: new (lat: number, lng: number) => any;
        Animation: {
          DROP: number;
        };
      };
    };
  }
}

const AboutSection: React.FC = () => {
  const [mapLoaded, setMapLoaded] = useState(false);
  const mapRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Load Google Maps API script
    const loadMapScript = () => {
      if (typeof window.google === 'undefined') {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY || 'AIzaSyDLcwxUggpPZo6H7rX3B8ccQJlTt7010bM'}`;
        script.async = true;
        script.defer = true;
        script.onload = () => initMap();
        document.head.appendChild(script);
      } else {
        initMap();
      }
    };
    
    // Initialize the map
    const initMap = () => {
      if (mapRef.current && window.google) {
        const mapOptions = {
          center: { lat: 20.5937, lng: 78.9629 }, // Center on India
          zoom: 5,
          styles: [
            {
              featureType: "all",
              elementType: "geometry",
              stylers: [{ color: "#242f3e" }]
            },
            {
              featureType: "all",
              elementType: "labels.text.stroke",
              stylers: [{ color: "#242f3e" }, { lightness: 20 }]
            },
            {
              featureType: "all",
              elementType: "labels.text.fill",
              stylers: [{ color: "#ffffff" }, { lightness: 30 }]
            }
          ]
        };
        
        const map = new window.google.maps.Map(mapRef.current, mapOptions);
        
        // Add markers for each location
        locationsData.forEach(location => {
          const marker = new window.google.maps.Marker({
            position: { lat: location.coordinates.lat, lng: location.coordinates.lng },
            map,
            title: location.name,
            animation: window.google.maps.Animation.DROP
          });
          
          const infoWindow = new window.google.maps.InfoWindow({
            content: `
              <div style="padding: 10px;">
                <h3 style="font-weight: bold;">${location.name}</h3>
                <p>${location.description}</p>
                <p>${location.address}</p>
              </div>
            `
          });
          
          marker.addListener('click', () => {
            infoWindow.open(map, marker);
          });
        });
        
        setMapLoaded(true);
      }
    };
    
    loadMapScript();
  }, []);

  const stats = [
    { value: '25+', label: 'Research Projects', color: 'text-[#3A86FF]' },
    { value: '40+', label: 'Publications', color: 'text-[#8338EC]' },
    { value: '12', label: 'Faculty Members', color: 'text-[#FF006E]' },
    { value: '30+', label: 'Industry Partners', color: 'text-[#3A86FF]' }
  ];

  return (
    <section id="about" className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-neutral-light to-neutral-light/50">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-sans font-bold mb-4">About Us</h2>
          <p className="max-w-3xl mx-auto text-neutral-dark/80">
            The Centre of Excellence for Data Science was established to foster innovative research and education in the field of data science.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div 
            className="order-2 md:order-1"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-medium mb-4">Our Mission</h3>
            <p className="text-neutral-dark/80 mb-6">
              We aim to advance the frontiers of data science through cutting-edge research, interdisciplinary collaboration, and industry partnerships. Our focus spans machine learning, artificial intelligence, data visualization, and computational statistics.
            </p>
            
            <h3 className="text-2xl font-medium mb-4">Our Vision</h3>
            <p className="text-neutral-dark/80 mb-6">
              To be a globally recognized hub for data science innovation, producing research that addresses real-world challenges and training the next generation of data scientists.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  className="glass p-4 rounded-lg text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  whileHover={{ scale: 1.05 }}
                >
                  <p className={`text-3xl font-bold ${stat.color} mb-1`}>{stat.value}</p>
                  <p className="text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="order-1 md:order-2"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <GlassPanel className="rounded-xl overflow-hidden h-96 relative">
              <div 
                ref={mapRef} 
                className="absolute inset-0"
              ></div>
              {!mapLoaded && (
                <div className="absolute inset-0 glass-dark flex items-center justify-center text-white text-opacity-70">
                  <div className="text-center">
                    <i className="fas fa-map-marked-alt text-4xl mb-4"></i>
                    <p className="text-lg">Loading Map...</p>
                    <p className="text-sm">Showing lab locations and facilities</p>
                  </div>
                </div>
              )}
            </GlassPanel>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-2xl font-medium mb-6 text-center">Our Locations</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {locationsData.map((location, index) => (
              <LocationCard key={location.id} location={location} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
