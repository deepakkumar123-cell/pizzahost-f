import { motion } from 'framer-motion';
import './PizzaQualities.css';

const PizzaQualities = () => {
  const qualities = [
    {
      id: 1,
      title: 'Authentic Recipes',
      description: 'Our pizzas are made following traditional Italian recipes passed down through generations.',
      icon: '🍕',
    },
    {
      id: 2,
      title: 'Fresh Ingredients',
      description: 'We source only the highest quality, locally grown ingredients for all our pizzas.',
      icon: '🌿',
    },
    {
      id: 3,
      title: 'Electric Oven',
      description: 'Each pizza is baked to perfection in our modern electric oven for consistent quality.',
      icon: '⚡',
    },
  ];

  return (
    <section className="qualities-section">
      <div className="container">
        <motion.h2 
          className="section-title text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          Why Choose Our Pizzas
        </motion.h2>
        
        <div className="qualities-grid">
          {qualities.map((quality, index) => (
            <motion.div 
              className="quality-card"
              key={quality.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="quality-icon">{quality.icon}</div>
              <h3>{quality.title}</h3>
              <p>{quality.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PizzaQualities; 