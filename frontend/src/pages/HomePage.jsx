import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';
import { placeholderImages } from '../assets/placeholder';
import PizzaQualities from '../components/PizzaQualities';
import './HomePage.css';

const HomePage = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  
  // State to store random pizzas
  const [randomPizzas, setRandomPizzas] = useState([]);
  
  // Effect to randomly select pizzas from the menu
  useEffect(() => {
    const allPizzas = [
      {
        id: 1,
        name: 'Margherita Deluxe',
        image: placeholderImages.margherita,
        price: 249,
        ingredients: ['Fresh Mozzarella', 'Basil', 'Cherry Tomatoes', 'Olive Oil']
      },
      {
        id: 2,
        name: 'Pepperoni Supreme',
        image: placeholderImages.pepperoni,
        price: 299,
        ingredients: ['Pepperoni', 'Mozzarella', 'Tomato Sauce', 'Oregano']
      },
      {
        id: 3,
        name: 'Veggie Paradise',
        image: placeholderImages.veggieSupreme,
        price: 279,
        ingredients: ['Bell Peppers', 'Mushrooms', 'Olives', 'Onions', 'Cherry Tomatoes']
      },
      {
        id: 4,
        name: 'Paneer Tikka',
        image: placeholderImages.classic,
        price: 329,
        ingredients: ['Paneer Tikka', 'Onion', 'Capsicum', 'Spicy Sauce']
      },
      {
        id: 5,
        name: 'Chicken Delight',
        image: placeholderImages.gourmet,
        price: 349,
        ingredients: ['Chicken', 'Onions', 'Bell Peppers', 'Sweet Corn']
      },
      {
        id: 6,
        name: 'Spicy Indian',
        image: placeholderImages.spicy,
        price: 299,
        ingredients: ['Jalapeños', 'Spicy Sauce', 'Onions', 'Green Chillies']
      }
    ];
    
    // Shuffle the array and pick first 3
    const shuffled = [...allPizzas].sort(() => 0.5 - Math.random());
    setRandomPizzas(shuffled.slice(0, 3));
  }, []);
  
  return (
    <div className="home-page" ref={ref}>
      <motion.div 
        className="hero-section"
        style={{ 
          scale: heroScale,
          opacity: heroOpacity,
          y: heroY,
          backgroundImage: `url(${placeholderImages.heroPizza})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="hero-overlay"></div>
        <div className="container hero-container">
          <motion.div 
            className="hero-content glass"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div 
              className="hero-badge"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              #1 Pizza in Meerut
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="hero-title"
            >
              Welcome to 
              <span className="highlight">PizzaHost</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="hero-text"
            >
              Experience the perfect blend of crispy crust, fresh ingredients,
              and mouthwatering flavors. Made with love, delivered to your doorstep in Meerut.
            </motion.p>
            
            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              <Link to="/menu" className="btn btn-main btn-lg pulse-strong glow-effect">
                Order Now
              </Link>
              <Link to="/menu" className="btn btn-outline btn-lg hover-scale">
                View Menu
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="hero-image-container"
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
          >
            <div 
              className="hero-image"
              style={{ backgroundImage: `url(${placeholderImages.heroPizzaTransparent})` }}
            ></div>
            <div className="floating-elements">
              <div 
                className="floating-element tomato"
                style={{ backgroundImage: `url(${placeholderImages.tomato})` }}
              ></div>
              <div 
                className="floating-element basil-1"
                style={{ backgroundImage: `url(${placeholderImages.basil})` }}
              ></div>
              <div 
                className="floating-element basil-2"
                style={{ backgroundImage: `url(${placeholderImages.basil})` }}
              ></div>
              <div 
                className="floating-element cheese"
                style={{ backgroundImage: `url(${placeholderImages.cheese})` }}
              ></div>
              <div 
                className="floating-element pepper"
                style={{ backgroundImage: `url(${placeholderImages.pepper})` }}
              ></div>
            </div>
          </motion.div>
        </div>
      </motion.div>
      
      <div className="wave-divider">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="var(--surface-color)" fillOpacity="1" d="M0,96L30,112C60,128,120,160,180,170.7C240,181,300,171,360,144C420,117,480,75,540,80C600,85,660,139,720,165.3C780,192,840,192,900,170.7C960,149,1020,107,1080,96C1140,85,1200,107,1260,122.7C1320,139,1380,149,1410,154.7L1440,160L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
        </svg>
      </div>
      
      <PizzaQualities />
      
      <section className="featured-section">
        <div className="container">
          <div className="section-header">
            <motion.h2 
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              Featured Pizzas
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link to="/menu" className="view-more">
                View All <span>→</span>
              </Link>
            </motion.div>
          </div>
          
          <div className="featured-grid">
            {randomPizzas.map((pizza, index) => (
              <FeaturedPizzaCard 
                key={pizza.id}
                {...pizza}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      
      <section className="testimonials-section">
        <div className="container">
          <motion.h2 
            className="section-title text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            What Our Customers Say
          </motion.h2>
          
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={index}
                {...testimonial}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Order Your Favorite Pizza?</h2>
            <p>Hungry? We're just a few clicks away. Order now and enjoy our delicious pizzas in Meerut!</p>
            <Link to="/menu" className="btn btn-main">Order Now</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

// Featured Pizza Card Component
const FeaturedPizzaCard = ({ id, name, image, price, ingredients, index }) => {
  return (
    <motion.div 
      className="pizza-card glass"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ 
        y: -15,
        boxShadow: "var(--box-shadow-lg)"
      }}
    >
      <div 
        className="pizza-image" 
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="pizza-badge">₹{price}</div>
      </div>
      <div className="pizza-content">
        <h3>{name}</h3>
        <p>{ingredients.join(', ')}</p>
        <Link to={`/menu?pizza=${id}`} className="btn btn-sm">
          Order Now
        </Link>
      </div>
    </motion.div>
  );
};

// Testimonial Card Component
const TestimonialCard = ({ name, avatar, rating, comment, index }) => {
  return (
    <motion.div 
      className="testimonial-card glass"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <div className="testimonial-header">
        <div className="testimonial-avatar">
          <img src={avatar} alt={name} />
        </div>
        <div className="testimonial-info">
          <h4>{name}</h4>
          <div className="testimonial-rating">
            {[...Array(5)].map((_, i) => (
              <span key={i} className={i < rating ? 'star filled' : 'star'}>★</span>
            ))}
          </div>
        </div>
      </div>
      <p className="testimonial-comment">{comment}</p>
    </motion.div>
  );
};

// Sample Data - Indian testimonials with Indian English
const testimonials = [
  {
    name: 'Rahul Sharma',
    avatar: 'https://randomuser.me/api/portraits/men/44.jpg',
    rating: 5,
    comment: "Simply the best pizza in entire Meerut! PizzaHost's paneer tikka pizza is mindblowing. Delivery was also very fast, within 30 minutes only!"
  },
  {
    name: 'Priya Patel',
    avatar: 'https://randomuser.me/api/portraits/women/33.jpg',
    rating: 5,
    comment: "My family is ordering from PizzaHost every weekend. Kids are loving the cheese burst pizza. Very good quality and taste, must try!"
  },
  {
    name: 'Amit Kumar',
    avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
    rating: 4,
    comment: "Veg options are awesome! I am regular customer since last 6 months. Sometimes delivery takes time but taste makes up for it. 100% recommended."
  }
];

export default HomePage; 