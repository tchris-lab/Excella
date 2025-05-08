import { motion } from 'framer-motion';
import { FaTools, FaHardHat, FaUsers, FaShippingFast, FaUserTie, FaClock, FaCheckCircle, FaDollarSign, FaHeadset } from 'react-icons/fa';
import { MdBusiness, MdSchool, MdStore, MdApartment, MdLocationCity } from 'react-icons/md';
import { Navbar, Footer, BackToTop } from '../../components';
import { useRef } from 'react';
import './ContractingService.css';

const ContractingService = () => {
  const contactSectionRef = useRef(null);
  
  const scrollToContact = () => {
    contactSectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  
  const facilityServices = [
    'Electrical Maintenance',
    'Plumbing Services',
    'Janitorial Oversight'
  ];

  const constructionServices = [
    'Light Construction',
    'Site Supervision',
    'Cleanup Services'
  ];

  const workforceServices = [
    'Temporary Staffing',
    'Long-term Contracts',
    'Logistics & Procurement Assistance',
    'On-site Operational Support'
  ];

  const sellingPoints = [
    {
      icon: <FaUserTie />,
      title: 'Experienced Workforce',
      description: 'We hire only skilled professionals with the right certifications.'
    },
    {
      icon: <FaClock />,
      title: 'Flexible Contracts',
      description: 'Whether short-term or long-term, we tailor solutions to your business.'
    },
    {
      icon: <FaCheckCircle />,
      title: 'Timely Delivery',
      description: 'We work with efficiency and deliver results on schedule.'
    },
    {
      icon: <FaDollarSign />,
      title: 'Cost-Efficient Solutions',
      description: 'Get the best value without compromising quality.'
    },
    {
      icon: <FaHeadset />,
      title: 'Complete Support',
      description: 'We handle recruitment, training, and deployment—so you don\'t have to.'
    }
  ];

  const industries = [
    {
      icon: <MdBusiness />,
      title: 'Corporate Offices'
    },
    {
      icon: <MdApartment />,
      title: 'Real Estate & Facility Management'
    },
    {
      icon: <MdStore />,
      title: 'Retail & Warehousing'
    },
    {
      icon: <MdSchool />,
      title: 'Educational Institutions'
    },
    {
      icon: <MdLocationCity />,
      title: 'Hospitality & Event Venues'
    },
    {
      icon: <FaUserTie />,
      title: 'Government Contracts'
    }
  ];

  const testimonials = [
    {
      name: 'Operations Manager',
      role: 'Corporate Client',
      content: 'Excella\'s contracting team took over our facility maintenance and improved performance drastically in just a few weeks.'
    },
    {
      name: 'MD',
      role: 'Property Management Firm',
      content: 'Their workforce outsourcing solution saved us time, stress, and unnecessary overhead.'
    },
    {
      name: 'Facility Director',
      role: 'Educational Institution',
      content: 'We\'ve been working with Excella for our contracting needs for over two years. Their reliability and professionalism have made them an invaluable partner.'
    }
  ];

  return (
    <>
      <Navbar />
      <BackToTop />
      
      {/* Hero Section */}
      <section className="contracting-hero">
        <div className="contracting-hero-container">
          <motion.div 
            className="contracting-hero-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Reliable Contracting Solutions Tailored to Your Needs</h1>
            <p>From facility maintenance to workforce outsourcing, Excella Hospitality delivers professional, efficient, and affordable contracting services for businesses of all sizes.</p>
            <motion.button 
              className="cta-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}
            >
              Contact Us
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="contracting-services">
        <div className="contracting-services-container">
          <motion.div 
            className="contracting-services-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>What We Offer</h2>
            <div className="underline"></div>
            <p className="services-description">At Excella, we understand that managing operational tasks can be overwhelming. That's why we offer comprehensive contracting services to help organizations focus on what matters most—while we handle the rest.</p>
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
              <div className="category-icon"><FaTools /></div>
              <h3>Facility Maintenance</h3>
              <ul className="service-list">
                {facilityServices.map((service, index) => (
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
              <div className="category-icon"><FaHardHat /></div>
              <h3>Construction Support Services</h3>
              <ul className="service-list">
                {constructionServices.map((service, index) => (
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
              <div className="category-icon"><FaUsers /></div>
              <h3>Workforce Outsourcing</h3>
              <ul className="service-list">
                {workforceServices.map((service, index) => (
                  <li key={index}>{service}</li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="contracting-why-choose-us">
        <div className="contracting-why-choose-us-container">
          <motion.div 
            className="contracting-why-choose-us-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Why Choose Excella for Contracting?</h2>
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

      {/* Industries Section */}
      <section className="industries">
        <div className="industries-container">
          <motion.div 
            className="industries-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Industries We Serve</h2>
            <div className="underline"></div>
          </motion.div>
          
          <div className="industries-grid">
            {industries.map((industry, index) => (
              <motion.div 
                key={index} 
                className="industry-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ y: -10 }}
              >
                <div className="industry-icon">{industry.icon}</div>
                <h3>{industry.title}</h3>
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

      {/* Services Section */}
      <section className="contracting-services">
        <div className="contracting-services-container">
          <motion.div 
            className="contracting-services-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>What We Offer</h2>
            <div className="underline"></div>
            <p className="services-description">At Excella, we understand that managing operational tasks can be overwhelming. That's why we offer comprehensive contracting services to help organizations focus on what matters most—while we handle the rest.</p>
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
              <div className="category-icon"><FaTools /></div>
              <h3>Facility Maintenance</h3>
              <ul className="service-list">
                {facilityServices.map((service, index) => (
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
              <div className="category-icon"><FaHardHat /></div>
              <h3>Construction Support Services</h3>
              <ul className="service-list">
                {constructionServices.map((service, index) => (
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
              <div className="category-icon"><FaUsers /></div>
              <h3>Workforce Outsourcing</h3>
              <ul className="service-list">
                {workforceServices.map((service, index) => (
                  <li key={index}>{service}</li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="contracting-why-choose-us">
        <div className="contracting-why-choose-us-container">
          <motion.div 
            className="contracting-why-choose-us-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Why Choose Excella for Contracting?</h2>
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

      {/* Industries Section */}
      <section className="industries">
        <div className="industries-container">
          <motion.div 
            className="industries-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Industries We Serve</h2>
            <div className="underline"></div>
          </motion.div>
          
          <div className="industries-grid">
            {industries.map((industry, index) => (
              <motion.div 
                key={index} 
                className="industry-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ y: -10 }}
              >
                <div className="industry-icon">{industry.icon}</div>
                <h3>{industry.title}</h3>
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
            <h2>Need Reliable Contracting Support?</h2>
            <div className="underline"></div>
            <p>We're ready to discuss your unique needs and provide a tailored solution. Let's get started today.</p>
          </motion.div>
         </div> 
          
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
                  <option value="facility">Facility Maintenance</option>
                  <option value="construction">Construction Support</option>
                  <option value="workforce">Workforce Outsourcing</option>
                  <option value="logistics">Logistics & Procurement</option>
                  <option value="operational">Operational Support</option>
                </select>
              </div>
              <div className="form-group">
                <textarea placeholder="Tell us about your contracting needs" rows="4" required></textarea>
              </div>
              <motion.button 
                type="submit" 
                className="submit-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Request a Quote
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
                <p><strong>Email:</strong> contracting@excellahospitality.com</p>
                <p><strong>Hours:</strong> Monday-Friday, 8am-6pm</p>
              </div>
              <div className="cta-container">
                <motion.a 
                  href="tel:+9741234567" 
                  className="call-now-button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Us
                </motion.a>
              </div>
            </motion.div>
          
          {/* <div className="contact-content">
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
                  <option value="facility">Facility Maintenance</option>
                  <option value="construction">Construction Support</option>
                  <option value="workforce">Workforce Outsourcing</option>
                  <option value="logistics">Logistics & Procurement</option>
                  <option value="operational">Operational Support</option>
                </select>
              </div>
              <div className="form-group">
                <textarea placeholder="Tell us about your contracting needs" rows="4" required></textarea>
              </div>
              <motion.button 
                type="submit" 
                className="submit-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Request a Quote
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
                <p><strong>Email:</strong> contracting@excellahospitality.com</p>
                <p><strong>Hours:</strong> Monday-Friday, 8am-6pm</p>
              </div>
              <div className="cta-container">
                <motion.a 
                  href="tel:+9741234567" 
                  className="call-now-button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Us
                </motion.a>
              </div>
            </motion.div>
          </div> */}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ContractingService;