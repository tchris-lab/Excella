import { motion } from 'framer-motion';
import { FaBroom, FaUsers, FaHandshake } from 'react-icons/fa';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: <FaBroom />,
      title: 'Cleaning Services',
      description: 'Professional cleaning solutions for homes and offices. Our trained staff ensures spotless environments with attention to detail.',
      link: '/services/cleaning'
    },
    {
      icon: <FaUsers />,
      title: 'Contracting & Manpower',
      description: 'Skilled workforce supply including cleaners, security, and maintenance staff. Flexible staffing solutions for hospitality and facility management.',
      link: '/services/contracting'
    },
    {
      icon: <FaHandshake />,
      title: 'Trading Services',
      description: 'Reliable trading solutions for businesses. We provide quality products and services to meet your specific requirements.',
      link: '#'
    }
  ];

  return (
    <section id="services" className="services">
      <div className="services-container">
        <motion.div 
          className="services-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Our Services</h2>
          <div className="underline"></div>
        </motion.div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className="service-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 * index }}
              whileHover={{ y: -10 }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <motion.a 
                href={service.link} 
                className="learn-more"
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                Learn More &rarr;
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;