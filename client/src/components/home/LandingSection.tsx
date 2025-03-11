import { facultyData } from '@/data/facultyData';
import { useMousePositionElement } from '@/hooks/useMousePosition';
import { motion } from 'framer-motion';
import React, { useRef } from 'react';
import { Link } from 'wouter';
import { GlassPanel, GlowButton } from '../ui/glassmorphism';
import FacultyCard from './FacultyCard';
// import { Cloudinary } from 'cloudinary-core'; // Import Cloudinary

// Define the glow animation variant
const glowingCardVariant = {
  initial: { 
    boxShadow: '0 0 0 rgba(58, 134, 255, 0.3)' 
  },
  animate: { 
    boxShadow: ['0 0 5px rgba(58, 134, 255, 0.3)', '0 0 20px rgba(58, 134, 255, 0.5)', '0 0 5px rgba(58, 134, 255, 0.3)'],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse" as const
    }
  },
  hover: {
    boxShadow: '0 0 25px rgba(131, 56, 236, 0.6)',
    scale: 1.05,
    transition: { duration: 0.3 }
  }
};

// Define a more intense glow for the hero image
const heroGlowVariant = {
  initial: { 
    boxShadow: '0 0 0 rgba(58, 134, 255, 0.3)' 
  },
  animate: { 
    boxShadow: ['0 0 10px rgba(58, 134, 255, 0.4)', '0 0 30px rgba(131, 56, 236, 0.6)', '0 0 10px rgba(58, 134, 255, 0.4)'],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "reverse" as const
    }
  }
};

const LandingSection: React.FC = () => {
  const bgRef = useRef<HTMLDivElement>(null);
  useMousePositionElement(bgRef);

  return (
    <section id="home" className="pt-16 pb-24 px-4 md:px-8 lg:px-16" ref={bgRef}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <motion.div 
            className="lg:col-span-5 flex flex-col justify-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-sans font-bold leading-tight mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              Pioneering the Future of <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#3A86FF] to-[#8338EC]">Institute Of Engineering and Management, Kolkata</span>
            </motion.h2>
            
            <motion.p 
              className="text-lg mb-8 text-neutral-dark/80"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              Our centre is committed to advancing the frontiers of data science & machine learning through innovative research, education, and real-world applications that solve complex problems.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
            >
              <Link href="/projects">
                <GlowButton className="glass px-6 py-3 rounded-lg text-[#3A86FF] font-medium transition-all hover:shadow-lg">
                  <i className="fas fa-project-diagram mr-2"></i> Explore Projects
                </GlowButton>
              </Link>
              <Link href="/mentors">
                <GlowButton className="glass-dark text-white px-6 py-3 rounded-lg font-medium transition-all hover:shadow-lg">
                  <i className="fas fa-users mr-2"></i> Meet Our Team
                </GlowButton>
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="lg:col-span-7 flex justify-center items-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative w-full max-w-2xl">
              <motion.div 
                className="absolute -top-8 -left-8 w-32 h-32 bg-[#3A86FF]/10 rounded-full blur-xl"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
              <motion.div 
                className="absolute -bottom-8 -right-8 w-40 h-40 bg-[#8338EC]/10 rounded-full blur-xl"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 3
                }}
              />
              
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="animate-float"
              >
                <GlassPanel 
                  className="w-full h-auto rounded-xl shadow-xl relative z-10 overflow-hidden"
                  as={motion.div}
                  initial="initial"
                  animate="animate"
                  variants={heroGlowVariant}
                >
                  <motion.img 
                    src="https://interestingengineering.com/_next/image?url=https%3A%2F%2Fimages.interestingengineering.com%2F2023%2F12%2F17%2Fimage%2Fjpeg%2FvuPe0eeWZY8i7TszVtG2RMMRLw14TK95viZVkOkX.jpg&w=1200&q=75" 
                    alt="Data visualization" 
                    className="w-full h-auto object-cover"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.3 }}
                  />
                </GlassPanel>
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        {/* Leadership Team */}
        <div className="mt-20">
          <motion.h3 
            className="text-2xl font-sans font-semibold mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
          <h2 className="text-3xl md:text-6xl font-sans font-bold mb-4">Leadership Team</h2>
          </motion.h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {facultyData.map((faculty, index) => (
              <motion.div
                key={faculty.id}
                initial="initial"
                animate="animate"
                whileHover="hover"
                variants={glowingCardVariant}
                className="rounded-lg overflow-hidden"
              >
                <FacultyCard faculty={faculty} index={index} />
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Our Objective */}
        <div className="mt-20">
          <motion.h3 
            className="text-2xl font-sans font-semibold mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
          <h2 className="text-3xl md:text-6xl font-sans font-bold mb-4">Our Objective</h2>
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div 
              className="glass p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
              initial="initial"
              animate="animate"
              whileHover="hover"
              variants={glowingCardVariant}
            >
              <h4 className="text-3xl font-bold mb-4 text-gradient bg-gradient-to-r from-[#3A86FF] to-[#8338EC]">Creating Ecosystem</h4>
              <ul className="text-left list-disc list-inside">
                <li>Training innovators in cutting edge technologies</li>
                <li>Groom research oriented mindset</li>
                <li>Explore emerging tools and technologies of data science</li>
                <li>Curate high quality data</li>
                <li>Creating a research lab with HPC and Cloud support</li>
                <li>Creating breakthrough research through top class publication & patents</li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="glass p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
              initial="initial"
              animate="animate"
              whileHover="hover"
              variants={glowingCardVariant}
            >
              <h4 className="text-3xl font-bold mb-4 text-gradient bg-gradient-to-r from-[#3A86FF] to-[#8338EC]">Fostering Collaboration</h4>
              <ul className="text-left list-disc list-inside">
                <li>Foster collaboration among data scientists, data engineers, business analysts, and other stakeholders</li>
                <li>Acquire project grants from funding agencies</li>
                <li>Become a forerunner in enabling interdisciplinary projects</li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="glass p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
              initial="initial"
              animate="animate"
              whileHover="hover"
              variants={glowingCardVariant}
            >
              <h4 className="text-3xl font-bold mb-4 text-gradient bg-gradient-to-r from-[#3A86FF] to-[#8338EC]">Enabling Entrepreneurship</h4>
              <ul className="text-left list-disc list-inside">
                <li>Promote entrepreneurial activities</li>
                <li>Assist innovators in creating roadmaps for their goals</li>
                <li>Collaborate with government and private industrial entities and incubation centres</li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="glass p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
              initial="initial"
              animate="animate"
              whileHover="hover"
              variants={glowingCardVariant}
            >
              <h4 className="text-3xl font-bold mb-4 text-gradient bg-gradient-to-r from-[#3A86FF] to-[#8338EC]">Solution <br></br> Enabler</h4>
              <ul className=" text-left list-disc list-inside">
                <li>Bring innovators and enterprises together to co-create end-to-end business solutions</li>
                <li>Connect with organizations looking for technology adoption</li>
                <li>Publish periodic newsletters to showcase latest innovations and products</li>
                <li>Promote building end-to-end solutions with global impact</li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Our Expertise */}
        <div className="mt-20">
          <motion.h3 
            className="text-2xl font-sans font-semibold mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
          <h2 className="text-3xl md:text-6xl font-sans font-bold mb-4">Our Expertise</h2>
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <motion.div 
              className="glass p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
              initial="initial"
              animate="animate"
              whileHover="hover"
              variants={glowingCardVariant}
            >
              <svg className="w-12 h-12 mb-4 text-[#3A86FF]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2a10 10 0 100 20 10 10 0 000-20z" />
              </svg>
              <h4 className="text-3xl font-bold mb-4 text-gradient bg-gradient-to-r from-[#3A86FF] to-[#8338EC]">Computer Vision</h4>
              <p>Our specialists in the field of Neural Networks and Deep Learning can bring forth advances in modern applications of image processing.</p>
            </motion.div>
            
            <motion.div 
              className="glass p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
              initial="initial"
              animate="animate"
              whileHover="hover"
              variants={glowingCardVariant}
            >
              <svg className="w-12 h-12 mb-4 text-[#3A86FF]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2a10 10 0 100 20 10 10 0 000-20z" />
              </svg>
              <h4 className="text-3xl font-bold mb-4 text-gradient bg-gradient-to-r from-[#3A86FF] to-[#8338EC]">Healthcare Informatics</h4>
              <p>Experts in domains like medical imaging and bioinformatics push the boundaries of modern medicine and precision medicine.</p>
            </motion.div>
            
            <motion.div 
              className="glass p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
              initial="initial"
              animate="animate"
              whileHover="hover"
              variants={glowingCardVariant}
            >
              <svg className="w-12 h-12 mb-4 text-[#3A86FF]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2a10 10 0 100 20 10 10 0 000-20z" />
              </svg>
              <h4 className="text-3xl font-bold mb-4 text-gradient bg-gradient-to-r from-[#3A86FF] to-[#8338EC]">NLP & Data Mining</h4>
              <p>We have a team of linguists, ontologists and NLP specialists to push boundaries in natural language understanding and generation.</p>
            </motion.div>
            
            <motion.div 
              className="glass p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
              initial="initial"
              animate="animate"
              whileHover="hover"
              variants={glowingCardVariant}
            >
              <svg className="w-12 h-12 mb-4 text-[#3A86FF]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2a10 10 0 100 20 10 10 0 000-20z" />
              </svg>
              <h4 className="text-3xl font-bold mb-4 text-gradient bg-gradient-to-r from-[#3A86FF] to-[#8338EC]">Financial Analytics</h4>
              <p>Veterans in the field of stock market analysis guide us to create end-to-end systems for financial analytics and algorithmic trading.</p>
            </motion.div>
            
            <motion.div 
              className="glass p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
              initial="initial"
              animate="animate"
              whileHover="hover"
              variants={glowingCardVariant}
            >
              <svg className="w-12 h-12 mb-4 text-[#3A86FF]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2a10 10 0 100 20 10 10 0 000-20z" />
              </svg>
              <h4 className="text-3xl font-bold mb-4 text-gradient bg-gradient-to-r from-[#3A86FF] to-[#8338EC]">Brain Computer Interfacing</h4>
              <p>Our signal processing experts work with EEG-based systems for analysis and control applications for cyber-physical systems.</p>
            </motion.div>
          </div>
        </div>

        {/* Infrastructure Support */}
        <div className="mt-20">
          <motion.h3 
            className="text-2xl font-sans font-semibold mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
          <h2 className="text-3xl md:text-6xl font-sans font-bold mb-4">Infrastructure Support</h2>
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div 
              className="glass p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
              initial="initial"
              animate="animate"
              whileHover="hover"
              variants={glowingCardVariant}
            >
              <h4 className="text-3xl font-bold mb-4 text-gradient bg-gradient-to-r from-[#3A86FF] to-[#8338EC]">Hardware Support</h4>
              <p>High performance computation with Core i9 Processors, 32GB RAM, NVIDIA QUADRO GPUs with secured network access over SSH. Other than that we also provide hardware support for AR/VR, IOT and BCI Applications</p>
              <div className="flex flex-wrap gap-4 mt-4">
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c5/Intel_Core_i9_2020_logo.svg" alt="Intel Core i9" className="w-12 h-12" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c5/Intel_Core_i9_2020_logo.svg" alt="NVIDIA Quadro" className="w-12 h-12" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c5/Intel_Core_i9_2020_logo.svg" alt="Raspberry Pi" className="w-12 h-12" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c5/Intel_Core_i9_2020_logo.svg" alt="OpenBCI" className="w-12 h-12" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c5/Intel_Core_i9_2020_logo.svg" alt="Oculus" className="w-12 h-12" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c5/Intel_Core_i9_2020_logo.svg" alt="Arduino" className="w-12 h-12" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c5/Intel_Core_i9_2020_logo.svg" alt="Emotiv" className="w-12 h-12" />
              </div>
            </motion.div>
            
            <motion.div 
              className="glass p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
              initial="initial"
              animate="animate"
              whileHover="hover"
              variants={glowingCardVariant}
            >
              <h4 className="text-3xl font-bold mb-4 text-gradient bg-gradient-to-r from-[#3A86FF] to-[#8338EC]">Software Support</h4>
              <p>Latest MATLAB support with complete toolkits as well full Anaconda distributions for Machine Learning and TensorFlow & PyTorch for Neural Networks and Deep Learning Applications</p>
              <div className="flex flex-wrap gap-4 mt-4">
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c5/Intel_Core_i9_2020_logo.svg" alt="MATLAB" className="w-12 h-12" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c5/Intel_Core_i9_2020_logo.svg" alt="TensorFlow" className="w-12 h-12" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c5/Intel_Core_i9_2020_logo.svg" alt="PyTorch" className="w-12 h-12" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c5/Intel_Core_i9_2020_logo.svg" alt="Anaconda" className="w-12 h-12" />
              </div>
            </motion.div>
            
            <motion.div 
              className="glass p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
              initial="initial"
              animate="animate"
              whileHover="hover"
              variants={glowingCardVariant}
            >
              <h4 className="text-3xl font-bold mb-4 text-gradient bg-gradient-to-r from-[#3A86FF] to-[#8338EC]">Cloud Support</h4>
              <p>Cloud computing support with Google Colab Pro Notebooks and Oracle Cloud Infrastructure for scalable and efficient data processing and storage solutions.</p>
              <div className="flex flex-wrap gap-4 mt-4">
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c5/Intel_Core_i9_2020_logo.svg" alt="MATLAB" className="w-12 h-12" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c5/Intel_Core_i9_2020_logo.svg" alt="TensorFlow" className="w-12 h-12" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c5/Intel_Core_i9_2020_logo.svg" alt="PyTorch" className="w-12 h-12" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c5/Intel_Core_i9_2020_logo.svg" alt="Anaconda" className="w-12 h-12" />
              </div>
            </motion.div>
            
            <motion.div 
              className="glass p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
              initial="initial"
              animate="animate"
              whileHover="hover"
              variants={glowingCardVariant}
            >
              <h4 className="text-3xl font-bold mb-4 text-gradient bg-gradient-to-r from-[#3A86FF] to-[#8338EC]">Knowledge Support</h4>
              <p>Professional body memberships along with MOOCS platform access for continuous learning and skill development in the latest technologies and methodologies.</p>
              <div className="flex flex-wrap gap-4 mt-4">
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c5/Intel_Core_i9_2020_logo.svg" alt="MATLAB" className="w-12 h-12" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c5/Intel_Core_i9_2020_logo.svg" alt="TensorFlow" className="w-12 h-12" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c5/Intel_Core_i9_2020_logo.svg" alt="PyTorch" className="w-12 h-12" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c5/Intel_Core_i9_2020_logo.svg" alt="Anaconda" className="w-12 h-12" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingSection;
