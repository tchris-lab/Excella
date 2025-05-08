import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';
import './BackToTop.css';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [sections, setSections] = useState([]);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const clickTimeoutRef = useRef(null);
  const clickCountRef = useRef(0);

  // Find all sections on the page
  useEffect(() => {
    const allSections = Array.from(document.querySelectorAll('section'));
    setSections(allSections);
  }, []);

  // Track scroll position and determine current section
  useEffect(() => {
    const handleScroll = () => {
      // Show button when user scrolls down 300px from the top
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Determine which section is currently in view
      if (sections.length > 0) {
        const scrollPosition = window.scrollY + window.innerHeight / 2;
        
        for (let i = 0; i < sections.length; i++) {
          const section = sections[i];
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setCurrentSectionIndex(i);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const handleClick = () => {
    clickCountRef.current += 1;
    
    // Use setTimeout to detect single vs double click
    if (clickTimeoutRef.current === null) {
      clickTimeoutRef.current = setTimeout(() => {
        // Single click - go to previous section
        if (clickCountRef.current === 1) {
          const prevSectionIndex = Math.max(0, currentSectionIndex - 1);
          scrollToSection(prevSectionIndex);
        }
        
        // Reset click count and timeout
        clickCountRef.current = 0;
        clickTimeoutRef.current = null;
      }, 300); // 300ms threshold for double-click detection
    } else {
      // Double click detected - go to hero section
      if (clickCountRef.current === 2) {
        clearTimeout(clickTimeoutRef.current);
        scrollToSection(0); // Scroll to first section (hero)
        
        // Reset click count and timeout
        clickCountRef.current = 0;
        clickTimeoutRef.current = null;
      }
    }
  };

  const scrollToSection = (index) => {
    if (sections[index]) {
      window.scrollTo({
        top: sections[index].offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.button
      className={`back-to-top ${isVisible ? 'visible' : ''}`}
      onClick={handleClick}
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        scale: isVisible ? 1 : 0,
        opacity: isVisible ? 1 : 0
      }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Back to top"
    >
      <FaArrowUp />
    </motion.button>
  );
};

export default BackToTop;