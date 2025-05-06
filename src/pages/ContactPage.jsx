import { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import './ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setFormStatus({
      submitted: true,
      error: false,
      message: 'Thank you for your message! We will get back to you shortly.'
    });
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    
    // In a real application, you would send the form data to your backend
    // Example:
    // fetch('/api/contact', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(formData),
    // })
    // .then(response => response.json())
    // .then(data => {
    //   setFormStatus({
    //     submitted: true,
    //     error: false,
    //     message: 'Thank you for your message! We will get back to you shortly.'
    //   });
    // })
    // .catch((error) => {
    //   setFormStatus({
    //     submitted: true,
    //     error: true,
    //     message: 'There was an error submitting your message. Please try again later.'
    //   });
    // });
  };
  
  return (
    <>
      <Helmet>
        <title>Contact Us | PizzaHost - Order Pizza in Meerut</title>
        <meta name="description" content="Get in touch with PizzaHost. Contact us for questions, feedback, or order inquiries. Visit our store in Meerut or reach us by phone or email." />
        <meta name="keywords" content="PizzaHost contact, pizza delivery Meerut, contact pizza restaurant, pizza order contact" />
        <link rel="canonical" href="https://pizzahost.com/contact" />
        <meta property="og:title" content="Contact PizzaHost - Get in Touch" />
        <meta property="og:description" content="Have questions or feedback? Contact PizzaHost via phone, email, or visit our store in Meerut. We'd love to hear from you!" />
        <meta property="og:url" content="https://pizzahost.com/contact" />
        <meta property="og:type" content="website" />
      </Helmet>

      <motion.div 
        className="contact-page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="contact-hero">
          <div className="container">
            <motion.h1
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Contact Us
            </motion.h1>
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="subtitle"
            >
              We'd love to hear from you
            </motion.p>
          </div>
        </div>

        <section className="contact-section">
          <div className="container">
            <div className="contact-grid-full">
              <motion.div 
                className="contact-info"
                initial={{ y: -30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2>Get in Touch</h2>
                <p className="info-text">
                  Have questions about our menu, delivery areas, or want to provide feedback? 
                  We're here to help! Reach out to us through any of the following methods.
                </p>
                
                <div className="contact-method">
                  <div className="method-icon">📍</div>
                  <div className="method-details">
                    <h3>Visit Us</h3>
                    <p>Shop G-15, Inderlok Complex, Krishna Nagar, Near NB Colony, Pallavpuram, Meerut</p>
                    <p className="hours">
                      <strong>Hours:</strong> Mon-Thu: 11AM-10PM, Fri-Sun: 11AM-11PM
                    </p>
                  </div>
                </div>
                
                <div className="contact-method">
                  <div className="method-icon">📞</div>
                  <div className="method-details">
                    <h3>Call Us</h3>
                    <p>
                      <a href="tel:+919560776095">+91 9560776095</a>
                    </p>
                    <p className="hours">
                      <strong>Available:</strong> 10AM - 11PM, 7 days a week
                    </p>
                  </div>
                </div>
                
                <motion.div 
                  className="contact-method whatsapp-highlight"
                  whileHover={{ scale: 1.03 }}
                  initial={{ scale: 1 }}
                  animate={{ 
                    scale: [1, 1.03, 1],
                    transition: { 
                      repeat: 2,
                      duration: 1.5
                    }
                  }}
                >
                  <div className="method-icon">
                    <motion.div
                      animate={{ 
                        rotate: [0, 10, -10, 10, 0],
                      }}
                      transition={{ 
                        duration: 1.5, 
                        repeat: Infinity,
                        repeatDelay: 3
                      }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                      </svg>
                    </motion.div>
                  </div>
                  <div className="method-details">
                    <h3>WhatsApp Us - Preferred!</h3>
                    <p>
                      <a href="https://wa.me/919560776095" target="_blank" rel="noopener noreferrer" className="whatsapp-link">
                        +91 9560776095
                      </a>
                    </p>
                    <p>
                      Message us on WhatsApp for the quickest response! Send your orders, queries, or feedback.
                    </p>
                    <motion.button 
                      className="whatsapp-button whatsapp-pulse"
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: "0 8px 20px rgba(37, 211, 102, 0.5)"
                      }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => window.open("https://wa.me/919560776095", "_blank")}
                      animate={{
                        boxShadow: ["0 4px 12px rgba(37, 211, 102, 0.3)", "0 8px 20px rgba(37, 211, 102, 0.5)", "0 4px 12px rgba(37, 211, 102, 0.3)"],
                        transition: {
                          duration: 2,
                          repeat: Infinity,
                          repeatType: "reverse"
                        }
                      }}
                    >
                      <motion.div 
                        className="button-icon"
                        animate={{ 
                          rotate: [0, 10, -10, 10, 0],
                        }}
                        transition={{ 
                          duration: 1.5, 
                          repeat: Infinity,
                          repeatDelay: 3
                        }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                        </svg>
                      </motion.div>
                      Message on WhatsApp
                    </motion.button>
                  </div>
                </motion.div>
                
                <div className="contact-method">
                  <div className="method-icon">✉️</div>
                  <div className="method-details">
                    <h3>Email Us</h3>
                    <p>
                      <a href="mailto:info@pizzahost.com">info@pizzahost.com</a>
                    </p>
                    <p>
                      <a href="mailto:support@pizzahost.com">support@pizzahost.com</a> (for order issues)
                    </p>
                  </div>
                </div>
                
                <div className="contact-method">
                  <div className="method-icon">📱</div>
                  <div className="method-details">
                    <h3>Connect With Us</h3>
                    <div className="social-icons">
                      <motion.a 
                        href="#" 
                        className="social-icon" 
                        aria-label="Facebook"
                        whileHover={{ scale: 1.2, color: "#4267B2" }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                        </svg>
                      </motion.a>
                      <motion.a 
                        href="#" 
                        className="social-icon" 
                        aria-label="Instagram"
                        whileHover={{ scale: 1.2, color: "#E1306C" }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </motion.a>
                      <motion.a 
                        href="#" 
                        className="social-icon" 
                        aria-label="Twitter"
                        whileHover={{ scale: 1.2, color: "#1DA1F2" }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                        </svg>
                      </motion.a>
                      <motion.a 
                        href="https://wa.me/919560776095" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-icon" 
                        aria-label="WhatsApp"
                        whileHover={{ scale: 1.2, color: "#25D366" }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                        </svg>
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="map-section">
          <div className="container">
            <motion.h2
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Our Location
            </motion.h2>
            
            <motion.div 
              className="map-container"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000!2d77.70632125276563!3d29.03716096856749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDAyJzEzLjgiTiA3N8KwNDInMjIuOCJF!5e0!3m2!1sen!2sin!4v1717348001144!5m2!1sen!2sin"
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="PizzaHost Meerut Location - Shop G-15, Inderlok Complex"
              ></iframe>
            </motion.div>
            <motion.div
              className="map-directions-button"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <motion.a 
                href="https://maps.google.com/?q=29.03716096856749,77.70632125276563" 
                className="directions-button"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 8px 20px rgba(66, 133, 244, 0.5)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div 
                  className="button-icon"
                  animate={{ 
                    y: [0, -5, 0],
                  }}
                  transition={{ 
                    duration: 1, 
                    repeat: Infinity,
                    repeatDelay: 2.5
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2c3.196 0 6 2.618 6 5.602 0 3.093-2.493 7.132-6 12.661-3.507-5.529-6-9.568-6-12.661 0-2.984 2.804-5.602 6-5.602m0-2c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/>
                  </svg>
                </motion.div>
                Get Directions to Shop G-15
              </motion.a>
            </motion.div>
          </div>
        </section>

        <section className="faq-section">
          <div className="container">
            <motion.h2
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Frequently Asked Questions
            </motion.h2>
            
            <div className="faq-grid">
              <motion.div 
                className="faq-item"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
              >
                <h3>What are your delivery hours?</h3>
                <p>We deliver from 11:00 AM to 10:00 PM on weekdays and from 11:00 AM to 11:00 PM on weekends.</p>
              </motion.div>
              
              <motion.div 
                className="faq-item"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
              >
                <h3>Do you offer catering for events?</h3>
                <p>Yes, we offer catering services for parties, corporate events, and other special occasions. Please contact us at least 48 hours in advance for catering orders.</p>
              </motion.div>
              
              <motion.div 
                className="faq-item"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
              >
                <h3>What areas do you deliver to?</h3>
                <p>We currently deliver to all areas within Meerut city. A delivery fee may apply depending on your location.</p>
              </motion.div>
              
              <motion.div 
                className="faq-item"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
              >
                <h3>How can I track my order?</h3>
                <p>Once your order is confirmed, you will receive an email with a tracking link. You can also call our customer service at +91 9560776095 for updates.</p>
              </motion.div>
            </div>
          </div>
        </section>
      </motion.div>
    </>
  );
};

export default ContactPage; 