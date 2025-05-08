import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  // Handle hash navigation when the component mounts or location changes
  useEffect(() => {
    // Check if there's a hash in the URL
    if (location.hash) {
      // Remove the # character
      const id = location.hash.substring(1);
      const element = document.getElementById(id);
      
      if (element) {
        // Wait a bit for the page to fully load before scrolling
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <motion.div 
          className=""
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img src="/src/assets/Group4.png" alt="Excella Logo" className="logo-image" />
        </motion.div>

        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        <motion.ul 
          className={isOpen ? 'nav-menu active' : 'nav-menu'}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <li className="nav-item">
            <a href="/#home" className="nav-link" onClick={(e) => {
              e.preventDefault();
              setIsOpen(false);
              // If we're already on the home page, scroll to the section
              if (location.pathname === '/') {
                const element = document.getElementById('home');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              } else {
                // Navigate to home page with the hash
                window.location.href = '/#home';
              }
            }}>Home</a>
          </li>
          <li className="nav-item">
            <a href="/#about" className="nav-link" onClick={(e) => {
              e.preventDefault();
              setIsOpen(false);
              if (location.pathname === '/') {
                const element = document.getElementById('about');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              } else {
                window.location.href = '/#about';
              }
            }}>About</a>
          </li>
          <li className="nav-item">
            <a href="/#services" className="nav-link" onClick={(e) => {
              e.preventDefault();
              setIsOpen(false);
              if (location.pathname === '/') {
                const element = document.getElementById('services');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              } else {
                window.location.href = '/#services';
              }
            }}>Services</a>
          </li>
          <li className="nav-item">
            <a href="/#why-choose-us" className="nav-link" onClick={(e) => {
              e.preventDefault();
              setIsOpen(false);
              if (location.pathname === '/') {
                const element = document.getElementById('why-choose-us');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              } else {
                window.location.href = '/#why-choose-us';
              }
            }}>Why Choose Us</a>
          </li>
          <li className="nav-item">
            <a href="/#footer" className="nav-link contact-btn" onClick={(e) => {
              e.preventDefault();
              setIsOpen(false);
              if (location.pathname === '/') {
                const element = document.getElementById('footer');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              } else {
                window.location.href = '/#footer';
              }
            }}>Contact Us</a>
          </li>
        </motion.ul>
      </div>
    </nav>
  );
};

export default Navbar;