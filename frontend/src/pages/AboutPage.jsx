import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About Us | PizzaHost - Authentic Pizza in Meerut</title>
        <meta name="description" content="Learn about PizzaHost's journey, our passion for authentic Italian pizza, and our commitment to quality ingredients and exceptional service in Meerut." />
        <meta name="keywords" content="PizzaHost, about pizza restaurant, Meerut pizza, authentic Italian pizza, pizza history" />
        <link rel="canonical" href="https://pizzahost.com/about" />
        <meta property="og:title" content="About PizzaHost - Our Story & Mission" />
        <meta property="og:description" content="Discover the story behind PizzaHost, our commitment to authentic flavors, quality ingredients, and exceptional customer service." />
        <meta property="og:url" content="https://pizzahost.com/about" />
        <meta property="og:type" content="website" />
      </Helmet>

      <motion.div 
        className="about-page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="about-hero">
          <div className="container">
            <motion.h1
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              About Us
            </motion.h1>
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="subtitle"
            >
              Our story, mission and passion for great pizza
            </motion.p>
          </div>
        </div>

        <section className="about-section">
          <div className="container">
            <div className="about-grid">
              <motion.div 
                className="about-content"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2>Our Story</h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  Founded in 2010, PizzaHost began as a small family-owned pizzeria in Meerut with a simple mission: 
                  to serve authentic, delicious pizza using only the freshest ingredients. Over the years, we've grown 
                  but our commitment to quality and taste remains unchanged.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  Our founder, Rohit Sharma, brought his passion for Italian cuisine back to India after spending years 
                  perfecting the art of pizza-making in Naples, Italy - the birthplace of pizza. His vision was to create 
                  a place where people could experience authentic pizza flavors while enjoying the warmth of Indian hospitality.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                >
                  Today, PizzaHost stands as one of Meerut's favorite pizza destinations, loved for our authentic recipes, 
                  friendly service, and commitment to the community.
                </motion.p>
              </motion.div>
              
              <motion.div 
                className="about-image"
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                whileHover={{ scale: 1.03 }}
              >
                <img 
                  src="/images/restaurant-interior.jpg" 
                  alt="PizzaHost restaurant interior" 
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://via.placeholder.com/500x400?text=Restaurant+Interior";
                  }}
                />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="values-section">
          <div className="container">
            <motion.h2
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Our Values
            </motion.h2>
            
            <div className="values-grid">
              <motion.div 
                className="value-card"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
                  rotate: [0, 1, -1, 1, 0]
                }}
              >
                <div className="value-icon">🌿</div>
                <h3>Quality Ingredients</h3>
                <p>We source the freshest, highest-quality ingredients from local suppliers whenever possible.</p>
              </motion.div>
              
              <motion.div 
                className="value-card"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
                  rotate: [0, 1, -1, 1, 0]
                }}
              >
                <div className="value-icon">👨‍🍳</div>
                <h3>Authentic Recipes</h3>
                <p>Our recipes honor traditional Italian pizza-making while adding our unique creative touches.</p>
              </motion.div>
              
              <motion.div 
                className="value-card"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
                  rotate: [0, 1, -1, 1, 0]
                }}
              >
                <div className="value-icon">🤝</div>
                <h3>Community</h3>
                <p>We're proud to be part of the Meerut community and strive to give back whenever we can.</p>
              </motion.div>
              
              <motion.div 
                className="value-card"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
                  rotate: [0, 1, -1, 1, 0]
                }}
              >
                <div className="value-icon">♻️</div>
                <h3>Sustainability</h3>
                <p>We're committed to reducing our environmental impact through sustainable practices and eco-friendly packaging.</p>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="location-section">
          <div className="container">
            <motion.h2
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Visit Us
            </motion.h2>
            
            <div className="location-grid">
              <motion.div 
                className="location-details"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h3>PizzaHost Meerut</h3>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <strong>Address:</strong> Shop G-15, Inderlok Complex, Krishna Nagar, Near NB Colony, Pallavpuram, Meerut
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  <strong>Hours:</strong>
                </motion.p>
                <motion.ul
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <li>Monday - Thursday: 11:00 AM - 10:00 PM</li>
                  <li>Friday - Sunday: 11:00 AM - 11:00 PM</li>
                </motion.ul>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  <strong>Phone:</strong> <a href="tel:+919560776095">+91 9560776095</a>
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                >
                  <strong>Email:</strong> <a href="mailto:info@pizzahost.com">info@pizzahost.com</a>
                </motion.p>
                <motion.div
                  className="location-cta"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                >
                  <motion.a 
                    href="https://wa.me/919560776095" 
                    className="whatsapp-button whatsapp-pulse"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 8px 20px rgba(37, 211, 102, 0.5)",
                      transition: { 
                        duration: 0.3,
                        yoyo: Infinity,
                        ease: "easeInOut" 
                      }
                    }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ scale: 1 }}
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
                    Contact on WhatsApp
                  </motion.a>
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
                    animate={{
                      boxShadow: ["0 4px 12px rgba(66, 133, 244, 0.3)", "0 8px 20px rgba(66, 133, 244, 0.5)", "0 4px 12px rgba(66, 133, 244, 0.3)"],
                      transition: {
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse",
                        delay: 1 // Offset from WhatsApp button
                      }
                    }}
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
                    Get Directions
                  </motion.a>
                </motion.div>
              </motion.div>
              
              <motion.div 
                className="location-map"
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
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
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container">
            <motion.div 
              className="cta-content"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2>Ready to taste the best pizza in Meerut?</h2>
              <p>Order online for delivery or come visit us in-store to experience our warm hospitality!</p>
              <div className="cta-buttons">
                <motion.a 
                  href="/menu" 
                  className="btn btn-primary btn-white"
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0 10px 25px rgba(255,255,255,0.3)" 
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Order Now
                </motion.a>
                <motion.a 
                  href="/contact" 
                  className="btn btn-secondary"
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0 10px 25px rgba(0,0,0,0.1)" 
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Us
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </motion.div>
    </>
  );
};

export default AboutPage; 