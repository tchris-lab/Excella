import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { useRef, useEffect } from 'react';
import './Footer.css';

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;

    const handleMouseMove = (e) => {
      const rect = footer.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Apply the custom property to the footer element
      footer.style.setProperty('--x', `${x}px`);
      footer.style.setProperty('--y', `${y}px`);
      
      // Add active class when mouse is over the footer
      footer.classList.add('footer-light-active');
    };

    const handleMouseLeave = () => {
      // Remove active class when mouse leaves the footer
      footer.classList.remove('footer-light-active');
    };

    footer.addEventListener('mousemove', handleMouseMove);
    footer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      footer.removeEventListener('mousemove', handleMouseMove);
      footer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <footer id="footer" className="footer" ref={footerRef}>
      <div className="footer-container">
        <motion.div 
          className="footer-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3>Excella Hospitality</h3>
          <p>Delivering excellence in cleaning, contracting, and trading services across Qatar.</p>
          <div className="social-icons">
            <a href="#" aria-label="Facebook"><FaFacebook /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
          </div>
        </motion.div>

        <motion.div 
          className="footer-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3>Contact Us</h3>
          <ul className="contact-info">
            <li><FaPhone /> +974 1234 5678</li>
            <li><FaEnvelope /> excellahospitality4tc@gmail.com</li>
            <li><FaMapMarkerAlt /> 24 Rawdat Al khali street Doha qater</li>
          </ul>
        </motion.div>

        <motion.div 
          className="footer-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#why-choose-us">Why Choose Us</a></li>
           
          </ul>
        </motion.div>
      </div>
      <div className="footer-bottom">
        <p style={{ fontWeight: 'bold', fontSize: '1.2rem' , color: 'white' }}>registration number: 17-245343</p>
        <p>&copy; {new Date().getFullYear()} Excella Hospitality. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;