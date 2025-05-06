import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';
import CartItem from '../components/CartItem';
import './CartPage.css';

const CartPage = () => {
  const { cartItems, totalAmount, clearCart } = useCart();
  const navigate = useNavigate();
  
  const handleCheckout = () => {
    if (cartItems.length > 0) {
      navigate('/checkout');
    }
  };
  
  // Calculate delivery fee based on total amount
  const deliveryFee = totalAmount >= 300 ? 0 : 40;
  const finalAmount = totalAmount + deliveryFee;
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };
  
  return (
    <motion.div 
      className="cart-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <motion.div
          className="cart-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="page-title text-gradient">Your Cart</h1>
          <div className="cart-breadcrumb">
            <span>Home</span>
            <span className="separator">›</span>
            <span className="current">Cart</span>
          </div>
        </motion.div>
        
        {cartItems.length === 0 ? (
          <motion.div 
            className="empty-cart glass"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="empty-cart-icon">🍕</div>
            <h2>Your cart is empty</h2>
            <p>You haven't added any items to your cart yet.</p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/menu" className="btn">
                Browse Menu
              </Link>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div 
            className="cart-content"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="cart-items" variants={itemVariants}>
              <div className="cart-items-header">
                <span>Product</span>
                <span>Price</span>
                <span>Quantity</span>
                <span>Total</span>
                <span>Action</span>
              </div>
              <AnimatePresence>
                {cartItems.map(item => (
                  <CartItem key={item.id} item={item} />
                ))}
              </AnimatePresence>
            </motion.div>
            
            <motion.div 
              className="cart-summary glass"
              variants={itemVariants}
            >
              <h2>Order Summary</h2>
              
              <div className="summary-row">
                <span>Items ({cartItems.reduce((acc, item) => acc + item.quantity, 0)}):</span>
                <span>₹{totalAmount.toFixed(2)}</span>
              </div>
              
              <div className="summary-row">
                <span>Delivery Fee:</span>
                <span>{totalAmount >= 300 ? 'Free' : '₹40.00'}</span>
              </div>
              
              <div className="summary-row total">
                <span>Total:</span>
                <span>₹{finalAmount.toFixed(2)}</span>
              </div>
              
              {totalAmount > 0 && totalAmount < 300 && (
                <motion.div 
                  className="delivery-notification"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <div className="notification-icon">🚚</div>
                  <p>Add ₹{(300 - totalAmount).toFixed(2)} more to get <span className="highlight">FREE delivery!</span></p>
                </motion.div>
              )}
              
              {totalAmount >= 300 && (
                <motion.div 
                  className="delivery-notification success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <div className="notification-icon">✨</div>
                  <p>Congratulations! You've qualified for <span className="highlight">FREE delivery!</span></p>
                </motion.div>
              )}
              
              <div className="promo-code">
                <label htmlFor="promo">Promo Code</label>
                <div className="promo-input-group">
                  <input type="text" id="promo" placeholder="Enter promo code" />
                  <button className="btn-secondary btn-small">Apply</button>
                </div>
              </div>
              
              <div className="cart-actions">
                <motion.button 
                  className="btn"
                  onClick={handleCheckout}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Proceed to Checkout
                </motion.button>
              </div>
              
              <div className="back-to-shopping">
                <Link to="/menu">
                  <motion.div 
                    className="back-link"
                    whileHover={{ x: -5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    ← Continue Shopping
                  </motion.div>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default CartPage; 