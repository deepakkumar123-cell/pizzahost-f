import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { getExtrasBySize } from '../utils/menuUtils';
import './PizzaCard.css';

const PizzaCard = ({ pizza }) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('medium');
  const [isAdded, setIsAdded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [cheeseBurst, setCheeseBurst] = useState(false);
  const [extraToppings, setExtraToppings] = useState(false);

  // Check if the item has size options
  const hasSizeOptions = pizza.sizeOptions || pizza.category === 'pizza';
  
  // Get extras for selected size
  const extras = hasSizeOptions ? getExtrasBySize(selectedSize) : null;

  // Calculate price based on selected size and extras
  const getPrice = () => {
    let basePrice = 0;
    
    if (!hasSizeOptions) {
      basePrice = pizza.price;
    } else if (pizza.sizeOptions) {
      switch (selectedSize) {
        case 'small':
          basePrice = pizza.sizeOptions.small?.price || pizza.price * 0.8;
          break;
        case 'large':
          basePrice = pizza.sizeOptions.large?.price || pizza.price * 1.2;
          break;
        default:
          basePrice = pizza.price;
      }
    } else {
      basePrice = pizza.price;
    }
    
    if (pizza.allowCheeseBurst && cheeseBurst && extras?.cheeseBurst) {
      basePrice += extras.cheeseBurst.price;
    }
    
    if (pizza.allowExtraToppings && extraToppings && extras?.extraToppings) {
      basePrice += extras.extraToppings.price;
    }
    
    return basePrice;
  };

  const handleAddToCart = () => {
    const cartItem = {
      id: pizza._id,
      name: pizza.name,
      price: getPrice(),
      size: hasSizeOptions ? selectedSize : null,
      image: pizza.image,
      quantity: quantity,
      extras: {
        cheeseBurst: pizza.allowCheeseBurst && cheeseBurst,
        extraToppings: pizza.allowExtraToppings && extraToppings
      }
    };
    
    addToCart(cartItem);
    setIsAdded(true);
    
    // Reset the added state after animation completes
    setTimeout(() => {
      setIsAdded(false);
      setQuantity(1);
      setCheeseBurst(false);
      setExtraToppings(false);
    }, 1500);
  };

  // Animation variants
  const toppingsVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const toppingVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <motion.div 
      className="pizza-card glass"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      whileHover={{ 
        y: -15, 
        boxShadow: '0 20px 25px rgba(0, 0, 0, 0.15)',
        transition: { duration: 0.3 }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="pizza-image-container">
        <motion.div 
          className="pizza-image"
          whileHover={{ scale: 1.05, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img src={pizza.image} alt={pizza.name} />
          {pizza.isVegetarian && (
            <motion.div 
              className="veg-badge"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
            >
              Veg
            </motion.div>
          )}
        </motion.div>
      </div>
      
      <motion.div 
        className="pizza-details"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <motion.h3 
          className="pizza-name"
        >
          {pizza.name}
        </motion.h3>
        <p className="pizza-description">{pizza.description}</p>
        
        {pizza.toppings && pizza.toppings.length > 0 && (
          <motion.div 
            className="pizza-toppings"
            variants={toppingsVariants}
            initial="hidden"
            animate="visible"
          >
            {pizza.toppings.map((topping, index) => (
              <motion.span 
                key={index} 
                className="topping-tag"
                variants={toppingVariants}
                whileHover={{ 
                  scale: 1.1, 
                  backgroundColor: 'var(--primary-color)',
                  color: 'white'
                }}
              >
                {topping}
              </motion.span>
            ))}
          </motion.div>
        )}
        
        {hasSizeOptions && (
          <div className="size-selector">
            <div className="size-options">
              <motion.label 
                className={`size-option ${selectedSize === 'small' ? 'selected' : ''}`}
                whileHover={{ y: -4, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <input
                  type="radio"
                  name={`size-${pizza._id}`}
                  value="small"
                  checked={selectedSize === 'small'}
                  onChange={() => setSelectedSize('small')}
                />
                <span className="size-label">Small</span>
              </motion.label>
              <motion.label 
                className={`size-option ${selectedSize === 'medium' ? 'selected' : ''}`}
                whileHover={{ y: -4, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <input
                  type="radio"
                  name={`size-${pizza._id}`}
                  value="medium"
                  checked={selectedSize === 'medium'}
                  onChange={() => setSelectedSize('medium')}
                />
                <span className="size-label">Medium</span>
              </motion.label>
              <motion.label 
                className={`size-option ${selectedSize === 'large' ? 'selected' : ''}`}
                whileHover={{ y: -4, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <input
                  type="radio"
                  name={`size-${pizza._id}`}
                  value="large"
                  checked={selectedSize === 'large'}
                  onChange={() => setSelectedSize('large')}
                />
                <span className="size-label">Large</span>
              </motion.label>
            </div>
          </div>
        )}
        
        <div className="pizza-footer">
          <motion.div 
            className="pizza-price"
            whileHover={{ scale: 1.1 }}
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            ₹{getPrice().toFixed(2)}
          </motion.div>
          
          <motion.div 
            className="quantity-controls"
            animate={{ y: isHovered ? -4 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.button 
              onClick={() => quantity > 1 && setQuantity(quantity - 1)}
              className="quantity-btn"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              disabled={quantity <= 1}
            >
              <span className="icon">−</span>
            </motion.button>
            
            <AnimatePresence mode="wait">
              <motion.span 
                key={quantity}
                className="quantity"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                {quantity}
              </motion.span>
            </AnimatePresence>
            
            <motion.button 
              onClick={() => setQuantity(quantity + 1)}
              className="quantity-btn"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <span className="icon">+</span>
            </motion.button>
          </motion.div>
          
          <motion.button 
            className={`add-to-cart-btn btn ${isAdded ? 'added' : ''}`}
            onClick={handleAddToCart}
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            animate={{ y: isHovered ? -2 : 0 }}
            transition={{ type: "spring", stiffness: 200 }}
            disabled={isAdded}
          >
            {isAdded ? (
              <span className="added-text">Added ✓</span>
            ) : (
              <span>Add to Cart</span>
            )}
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PizzaCard; 