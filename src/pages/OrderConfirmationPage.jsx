import { useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './OrderConfirmationPage.css';

const OrderConfirmationPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  // Updated to handle both direct order object and response with data property
  const orderData = location.state?.order?.data || location.state?.order;
  
  // If no order data (e.g., direct access to URL), redirect to home
  useEffect(() => {
    if (!orderData) {
      navigate('/');
    }
  }, [orderData, navigate]);
  
  if (!orderData) {
    return null;
  }

  // Confetti animation variants
  const confettiVariants = {
    initial: { opacity: 0, y: -10 },
    animate: (i) => ({
      opacity: [0, 1, 0],
      y: [0, 100],
      x: i % 2 === 0 ? [0, 20, -20, 0] : [0, -20, 20, 0],
      transition: {
        duration: 3,
        ease: "easeInOut",
        times: [0, 0.5, 1],
        repeat: Infinity,
        repeatDelay: Math.random() * 2,
        delay: Math.random() * 2
      }
    })
  };
  
  return (
    <motion.div 
      className="order-confirmation-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background confetti animation */}
      <div className="confetti-container">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="confetti"
            style={{
              position: 'absolute',
              top: `${Math.random() * 20}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              backgroundColor: `hsl(${Math.random() * 360}, 100%, 70%)`,
              borderRadius: Math.random() > 0.5 ? '50%' : '0',
              zIndex: 0
            }}
            custom={i}
            variants={confettiVariants}
            initial="initial"
            animate="animate"
          />
        ))}
      </div>
      
      <div className="container">
        <motion.div 
          className="confirmation-card glass"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="success-animation">
            <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
              <circle className="checkmark-circle" cx="26" cy="26" r="25" fill="none" />
              <path className="checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
            </svg>
          </div>
          
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Thank You!
          </motion.h1>
          
          <motion.p 
            className="confirmation-message"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            Your order has been placed successfully.
          </motion.p>
          
          <motion.div 
            className="order-details"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            <h2>Order Details</h2>
            <div className="detail-row">
              <span>Order ID:</span>
              <span>{orderData._id}</span>
            </div>
            <div className="detail-row">
              <span>Subtotal:</span>
              <span>₹{orderData.subtotal?.toFixed(2) || (orderData.totalAmount - (orderData.deliveryFee || 0)).toFixed(2)}</span>
            </div>
            <div className="detail-row">
              <span>Delivery Fee:</span>
              <span>{orderData.deliveryFee === 0 ? 'Free' : `₹${orderData.deliveryFee?.toFixed(2) || '40.00'}`}</span>
            </div>
            <div className="detail-row">
              <span>Total Amount:</span>
              <span>₹{orderData.totalAmount.toFixed(2)}</span>
            </div>
            <div className="detail-row">
              <span>Payment Method:</span>
              <span>{orderData.paymentMethod}</span>
            </div>
            <div className="detail-row">
              <span>Payment Status:</span>
              <span className={`status ${orderData.paymentStatus.toLowerCase()}`}>
                {orderData.paymentStatus}
              </span>
            </div>
            <div className="detail-row">
              <span>Order Status:</span>
              <span className={`status ${orderData.orderStatus.toLowerCase()}`}>
                {orderData.orderStatus}
              </span>
            </div>
          </motion.div>
          
          <motion.p 
            className="delivery-message"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.5 }}
          >
            Your delicious pizza is being prepared and will be delivered to:
          </motion.p>
          
          <motion.div 
            className="delivery-address"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.5 }}
          >
            <p>{orderData.deliveryAddress.street}</p>
            <p>{orderData.deliveryAddress.city}, {orderData.deliveryAddress.state} {orderData.deliveryAddress.zipCode}</p>
            <p>Phone: {orderData.deliveryAddress.phone}</p>
            {orderData.deliveryAddress.email && <p>Email: {orderData.deliveryAddress.email}</p>}
          </motion.div>
          
          {orderData.deliveryAddress.email && (
            <motion.p 
              className="email-confirmation-message"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.5 }}
            >
              A confirmation email has been sent to {orderData.deliveryAddress.email}.
              Please check your inbox.
            </motion.p>
          )}
          
          <motion.div 
            className="confirmation-actions"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
          >
            <motion.div
              className="action-button-container"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/" className="btn">
                Return to Home
              </Link>
            </motion.div>
            <motion.div
              className="action-button-container"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/menu" className="btn-outline">
                Order Again
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default OrderConfirmationPage; 