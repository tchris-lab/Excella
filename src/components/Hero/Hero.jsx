import { motion } from 'framer-motion';
import './Hero.css';
import Loader from '../HeroStyledLoader/HeroStyle';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToServices = () => {
    setTimeout(() => {
      const servicesSection = document.getElementById('services');
      if (servicesSection) {
        window.scrollTo({
          top: servicesSection.offsetTop,
          behavior: 'smooth'
        });
      } else {
        console.error('Services section not found');
        const servicesByClass = document.querySelector('.services');
        if (servicesByClass) {
          window.scrollTo({
            top: servicesByClass.offsetTop,
            behavior: 'smooth'
          });
        }
      }
    }, 100);
  };

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Welcome to Excella Hospitality</h1>
          {isMobile ? (
            <p>Your Premier Partner in Excellence. We deliver Unmatched Cleaning, Contracting, and Trading Services across Qatar and Beyond, with a focus on reliability, quality, and customer satisfaction. Discover the Excella difference today!</p>
          ) : (
            <p>Your Premier Partner in Excellence, Delivering Unmatched Cleaning, Contracting, and Trading Services Across Qatar and Beyond.</p>
          )}
          <Loader />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;