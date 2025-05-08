import { motion } from 'framer-motion';
import { FaClock, FaUserTie, FaMoneyBillWave, FaFileContract, FaCheckCircle } from 'react-icons/fa';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <FaClock />,
      title: '24/7 Availability',
      description: 'Our services are available round the clock to meet your needs at any time.'
    },
    {
      icon: <FaUserTie />,
      title: 'Professional Teams',
      description: 'Our staff is highly trained, experienced, and committed to delivering excellence.'
    },
    {
      icon: <FaMoneyBillWave />,
      title: 'Affordable Rates',
      description: 'We offer competitive pricing without compromising on quality or service.'
    },
    {
      icon: <FaFileContract />,
      title: 'Flexible Contracts',
      description: 'Customizable service agreements to suit your specific requirements.'
    },
    {
      icon: <FaCheckCircle />,
      title: 'Proven Track Record',
      description: 'Years of successful service delivery and satisfied clients across Qatar.'
    }
  ];

  return (
    <section id="why-choose-us" className="why-choose-us">
      <div className="why-choose-us-container">
        <motion.div 
          className="why-choose-us-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Why Choose Us?</h2>
          <div className="underline"></div>
        </motion.div>
        
        <div className="reasons-grid">
          {reasons.map((reason, index) => (
            <motion.div 
              key={index} 
              className="reason-card"
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="reason-icon">{reason.icon}</div>
              <div className="reason-content">
                <h3>{reason.title}</h3>
                <p>{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;