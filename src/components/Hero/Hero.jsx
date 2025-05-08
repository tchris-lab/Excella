import { motion } from 'framer-motion';
import './Hero.css';
import Loader from '../HeroStyledLoader/HeroStyle';

const Hero = () => {
  const scrollToServices = () => {
    // Using setTimeout to ensure the DOM is fully loaded
    setTimeout(() => {
      const servicesSection = document.getElementById('services');
      if (servicesSection) {
        window.scrollTo({
          top: servicesSection.offsetTop,
          behavior: 'smooth'
        });
      } else {
        console.error('Services section not found');
        // Fallback: try to find the section by class name
        const servicesByClass = document.querySelector('.services');
        if (servicesByClass) {
          window.scrollTo({
            top: servicesByClass.offsetTop,
            behavior: 'smooth'
          });
        }
      }
    }, 100); // Small delay to ensure DOM is ready
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
          <p>Your Premier Partner in Excellence, Delivering Unmatched Cleaning, Contracting, and Trading Services Across Qatar and Beyond.</p>
       <Loader />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;