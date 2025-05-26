import { motion } from 'framer-motion';
import { FaHome, FaBuilding, FaIndustry, FaUserTie, FaLeaf, FaClock, FaCheckCircle } from 'react-icons/fa';
import { Navbar, Footer, BackToTop } from '../../components';
import './CleaningService.css';
import { useRef } from 'react';

const CleaningService = () => {
  const contactSectionRef = useRef(null);
  const residentialServices = [
    'Housekeeping',
    'Deep Cleaning',
    'Carpet & Upholstery Cleaning'
  ];

  const commercialServices = [
    'Office Cleaning',
    'Retail & Shopping Mall Cleaning',
    'Hospitality Cleaning (Hotels, Restaurants)'
  ];

  const industrialServices = [
    'Post-Construction Cleaning',
    'Warehouse & Factory Cleaning',
    'Medical & Laboratory Cleaning'
  ];

  const sellingPoints = [
    {
      icon: <FaUserTie />,
      title: 'Trained & Professional Staff',
      description: 'Our cleaning professionals are thoroughly trained and vetted to ensure the highest quality service.'
    },
    {
      icon: <FaLeaf />,
      title: 'Eco-Friendly Cleaning Products',
      description: 'We use environmentally friendly cleaning solutions that are safe for your family, pets, and the planet.'
    },
    {
      icon: <FaClock />,
      title: 'Flexible Scheduling & Affordable Rates',
      description: 'We work around your schedule and offer competitive pricing without compromising on quality.'
    },
    {
      icon: <FaCheckCircle />,
      title: '100% Satisfaction Guarantee',
      description: 'We stand behind our work with a complete satisfaction guarantee on all our cleaning services.'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Homeowner',
      content: 'Excella Hospitality has been cleaning my home for over a year now, and I couldn\'t be happier with their service. The team is always professional, thorough, and friendly.'
    },
    {
      name: 'Ahmed Al-Mansour',
      role: 'Office Manager',
      content: 'We hired Excella for our office cleaning needs, and they have exceeded our expectations. Our workspace is always spotless, and their staff is reliable and efficient.'
    },
    {
      name: 'Maria Rodriguez',
      role: 'Hotel Manager',
      content: 'As a hotel manager, cleanliness is my top priority. Excella Hospitality has consistently delivered exceptional cleaning services that our guests notice and appreciate.'
    }
  ];
  const scrollToContact = () => {
    contactSectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Navbar />
      <BackToTop />
      
      {/* Hero Section */}
      <section className="cleaning-hero">
        <div className="cleaning-hero-container">
          <motion.div 
            className="cleaning-hero-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Premium Cleaning Services for Homes & Businesses</h1>
            <p>Reliable & Professional Cleaning – We Keep Your Space Spotless!</p>
            <motion.button 
              className="cta-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}
            >
              Book Our Service
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="cleaning-services">
        <div className="cleaning-services-container">
          <motion.div 
            className="cleaning-services-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Our Cleaning Services</h2>
            <div className="underline"></div>
            <p className="services-description">We offer a comprehensive range of cleaning services tailored to meet your specific needs.</p>
          </motion.div>
          
          <div className="services-categories">
            <motion.div 
              className="service-category"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -10 }}
            >
              <div className="category-icon"><FaHome /></div>
              <h3>Residential Cleaning</h3>
              <ul className="service-list">
                {residentialServices.map((service, index) => (
                  <li key={index}>{service}</li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              className="service-category"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -10 }}
            >
              <div className="category-icon"><FaBuilding /></div>
              <h3>Commercial Cleaning</h3>
              <ul className="service-list">
                {commercialServices.map((service, index) => (
                  <li key={index}>{service}</li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              className="service-category"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ y: -10 }}
            >
              <div className="category-icon"><FaIndustry /></div>
              <h3>Industrial & Specialized Cleaning</h3>
              <ul className="service-list">
                {industrialServices.map((service, index) => (
                  <li key={index}>{service}</li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="cleaning-why-choose-us">
        <div className="cleaning-why-choose-us-container">
          <motion.div 
            className="cleaning-why-choose-us-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Why Choose Excella?</h2>
            <div className="underline"></div>
          </motion.div>
          
          <div className="selling-points-grid">
            {sellingPoints.map((point, index) => (
              <motion.div 
                key={index} 
                className="selling-point"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ scale: 1.03 }}
              >
                <div className="point-icon">{point.icon}</div>
                <div className="point-content">
                  <h3>{point.title}</h3>
                  <p>{point.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="testimonials-container">
          <motion.div 
            className="testimonials-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>What Our Clients Say</h2>
            <div className="underline"></div>
          </motion.div>
          
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index} 
                className="testimonial-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 * index }}
                whileHover={{ y: -10 }}
              >
                <p className="testimonial-content">"{testimonial.content}"</p>
                <div className="testimonial-author">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section" ref={contactSectionRef}>
        <div className="contact-container">
          <motion.div 
            className="contact-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Schedule Your Cleaning</h2>
            <div className="underline"></div>
            <p>Fill out the form below and we'll get back to you as soon as possible.</p>
          </motion.div>
          
          <div className="contact-content">
            <motion.form 
              className="contact-form"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <input type="tel" placeholder="Your Phone" required />
              </div>
              <div className="form-group">
                <select required>
                  <option value="" disabled selected>Select Service Type</option>
                  <option value="residential">Residential Cleaning</option>
                  <option value="commercial">Commercial Cleaning</option>
                  <option value="industrial">Industrial Cleaning</option>
                </select>
              </div>
              <div className="form-group">
                <textarea placeholder="Tell us about your cleaning needs" rows="4" required></textarea>
              </div>
              <motion.button 
                type="submit" 
                className="submit-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Submit Request
              </motion.button>
            </motion.form>
            
            <motion.div 
              className="contact-info"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3>Contact Us Directly</h3>
              <p>Have questions or need immediate assistance? Contact us directly:</p>
              <div className="contact-details">
                <p><strong>Phone:</strong> +974 1234 5678</p>
                <p><strong>Email:</strong> cleaning@excellahospitality.com</p>
                <p><strong>Hours:</strong> 24/7 Service Available</p>
              </div>
              <div className="cta-container">
                <motion.a 
                  href="tel:+9741234567" 
                  className="call-now-button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Call Us Now
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default CleaningService;