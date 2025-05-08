import { motion } from 'framer-motion';
import { FaHandshake, FaChartLine, FaUsers, FaUserTie } from 'react-icons/fa';
import './About.css';

const About = () => {
  const valueItems = [
    {
      icon: <FaHandshake />,
      title: 'Integrity & Trust',
      description: 'We build lasting relationships based on honesty and reliability.'
    },
    {
      icon: <FaChartLine />,
      title: 'Industry Experience',
      description: 'Years of expertise in delivering exceptional service solutions.'
    },
    {
      icon: <FaUsers />,
      title: 'Skilled Workforce',
      description: 'Our team consists of trained professionals committed to excellence.'
    },
    {
      icon: <FaUserTie />,
      title: 'Client-Focused Approach',
      description: 'We tailor our services to meet your specific needs and expectations.'
    }
  ];

  return (
    <section id="about" className="about">
      <div className="about-container">
        <motion.div 
          className="about-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>About Excella Hospitality</h2>
          <div className="underline"></div>
        </motion.div>
        
        <motion.p 
          className="about-description"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Excella Hospitality is a service-driven company offering reliable Cleaning, Contracting, and Trading solutions to businesses and homes. We pride ourselves on professionalism, flexibility, and customer satisfaction.
        </motion.p>
        
        <div className="values-grid">
          {valueItems.map((item, index) => (
            <motion.div 
              key={index} 
              className="value-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              whileHover={{ y: -10, boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)' }}
            >
              <div className="value-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;