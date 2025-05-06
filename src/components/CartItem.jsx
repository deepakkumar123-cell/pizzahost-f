import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import './CartItem.css';

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <motion.div 
      className="cart-item glass"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.3 }}
    >
      <div className="cart-item-image">
        <img src={item.image} alt={item.name} />
      </div>
      
      <div className="cart-item-details">
        <h3>{item.name}</h3>
        <div className="cart-item-price">₹{item.price ? item.price.toFixed(2) : '0.00'}</div>
        {item.size && (
          <div className="cart-item-size">
            Size: <span className="size-badge">{item.size}</span>
          </div>
        )}
      </div>
      
      <div className="cart-item-actions">
        <div className="quantity-controls">
          <button 
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
            className="quantity-btn"
          >
            -
          </button>
          <span className="quantity">{item.quantity}</span>
          <button 
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
            className="quantity-btn"
          >
            +
          </button>
        </div>
        
        <div className="cart-item-subtotal">
          ₹{(item.price * item.quantity).toFixed(2)}
        </div>
        
        <motion.button 
          className="remove-btn"
          onClick={() => removeFromCart(item.id)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          ✕
        </motion.button>
      </div>
    </motion.div>
  );
};

export default CartItem; 