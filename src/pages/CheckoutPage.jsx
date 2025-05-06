import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { createOrder, getMenuItems } from '../utils/api';
import { qrCodeImage } from '../assets/placeholder';
import './CheckoutPage.css';

const CheckoutPage = () => {
  const { cartItems, totalAmount, clearCart, saveDeliveryAddress, getDeliveryAddress } = useCart();
  const navigate = useNavigate();
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState('COD');
  const [showPaymentQR, setShowPaymentQR] = useState(false);
  
  // Get saved delivery address or initialize empty form
  const savedAddress = getDeliveryAddress() || {};
  
  const [formData, setFormData] = useState({
    street: savedAddress.street || '',
    city: savedAddress.city || '',
    state: savedAddress.state || '',
    zipCode: savedAddress.zipCode || '',
    phone: savedAddress.phone || '',
    confirmPhone: savedAddress.phone || '',
    email: savedAddress.email || '',
    confirmEmail: savedAddress.email || '',
    specialInstructions: ''
  });
  
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  
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
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // For phone fields, only allow digits and limit to 10 characters
    if (name === 'phone' || name === 'confirmPhone') {
      const digitsOnly = value.replace(/\D/g, '');
      const truncated = digitsOnly.slice(0, 10);
      setFormData({ ...formData, [name]: truncated });
      
      // Clear phone error when typing in phone fields
      setPhoneError('');
    } else {
      setFormData({ ...formData, [name]: value });
    }
    
    // Clear email error when typing in email fields
    if (name === 'email' || name === 'confirmEmail') {
      setEmailError('');
    }
  };
  
  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };
  
  const handlePaymentCompleted = async () => {
    try {
      setLoading(true);
      console.log('UPI payment completed, submitting order...');
      
      // Prepare order items with all relevant details from cart items
      const orderItems = cartItems.map(item => ({
        pizza: item.id, // Use the actual item ID from the cart
        pizzaName: item.name, // Include the name for better identification
        size: item.size || 'medium',
        quantity: item.quantity,
        price: item.price
      }));
      
      // Calculate final amount with delivery fee
      const deliveryFee = totalAmount >= 300 ? 0 : 40;
      const finalAmount = totalAmount + deliveryFee;
      
      // For UPI payments, update the payment status to 'Completed'
      const orderData = {
        items: orderItems,
        deliveryAddress: {
          street: formData.street,
          city: formData.city,
          state: formData.state,
          zipCode: formData.zipCode,
          phone: formData.phone,
          email: formData.email
        },
        paymentMethod: 'UPI',
        paymentStatus: 'Completed', // Explicitly mark as completed
        specialInstructions: formData.specialInstructions,
        deliveryFee: deliveryFee,
        subtotal: totalAmount,
        totalAmount: finalAmount
      };
      
      console.log('UPI order data prepared:', JSON.stringify(orderData, null, 2));
      console.log('UPI order items details:', JSON.stringify(orderItems, null, 2));
      console.log('UPI total amount being sent:', finalAmount);
      
      // Only use mock response when specifically in development mode AND mock mode is enabled
      if (import.meta.env.DEV && import.meta.env.VITE_USE_MOCK_API === 'true') {
        console.log('Development mode with mock API: Creating mock UPI order');
        // Simulate API delay
        setTimeout(() => {
          const mockOrder = {
            _id: 'order-' + Date.now(),
            ...orderData,
            totalAmount: finalAmount,
            createdAt: new Date().toISOString(),
            orderStatus: 'Placed',
            paymentStatus: 'Completed'
          };
          
          console.log('Mock UPI order created:', mockOrder);
          clearCart();
          navigate('/order-confirmation', { state: { order: mockOrder } });
        }, 1000);
        return;
      }
      
      // In production or non-mock development, send to real API
      console.log('Sending UPI order to API...');
      const response = await createOrder(orderData);
      console.log('UPI order API response:', response);
      clearCart();
      // Pass the full response object to the order confirmation page
      navigate('/order-confirmation', { state: { order: response } });
    } catch (error) {
      console.error('Error completing payment:', error);
      let errorMessage = 'Failed to process your payment. Please try again.';
      
      if (error.response?.data?.error) {
        errorMessage = `Payment failed: ${error.response.data.error}`;
      }
      
      setError(errorMessage);
      setLoading(false);
    }
  };
  
  const handleDownloadQR = () => {
    // Create an anchor element
    const link = document.createElement('a');
    
    // Set the href to the QR code image URL
    link.href = qrCodeImage;
    
    // Set a download filename
    link.download = `PizzaHost_Payment_QR_${Date.now().toString().slice(-8)}.png`;
    
    // Append to the document
    document.body.appendChild(link);
    
    // Trigger the download
    link.click();
    
    // Clean up
    document.body.removeChild(link);
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (cartItems.length === 0) {
      setError('Your cart is empty');
      return;
    }
    
    // Validate email fields
    if (formData.email !== formData.confirmEmail) {
      setEmailError('Emails do not match');
      return;
    }
    
    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setEmailError('Please enter a valid email address');
      return;
    }
    
    // Phone number validation
    if (formData.phone.length !== 10) {
      setPhoneError('Phone number must be 10 digits');
      return;
    }
    
    // Validate phone fields
    if (formData.phone !== formData.confirmPhone) {
      setPhoneError('Phone numbers do not match');
      return;
    }
    
    // Save delivery address
    saveDeliveryAddress({
      street: formData.street,
      city: formData.city,
      state: formData.state,
      zipCode: formData.zipCode,
      phone: formData.phone,
      email: formData.email
    });
    
    if (paymentMethod === 'UPI') {
      setShowPaymentQR(true);
      
      // Automatically scroll to show the QR code after a short delay
      // This delay ensures the component has time to render before scrolling
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
        
        // Additional scroll for mobile to make sure QR code is fully visible
        const qrElement = document.querySelector('.payment-qr-container');
        if (qrElement) {
          qrElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      await placeOrder();
    }
  };
  
  const placeOrder = async () => {
    try {
      setLoading(true);
      setError(null);
      
      console.log('Starting order placement...');
      
      // Prepare order items with all relevant details from cart items
      const orderItems = cartItems.map(item => ({
        pizza: item.id, // Use the actual item ID from the cart
        pizzaName: item.name, // Include the name for better identification
        size: item.size || 'medium',
        quantity: item.quantity,
        price: item.price
      }));
      
      // Calculate final amount with delivery fee
      const deliveryFee = totalAmount >= 300 ? 0 : 40;
      const finalAmount = totalAmount + deliveryFee;
      
      const orderData = {
        items: orderItems,
        deliveryAddress: {
          street: formData.street,
          city: formData.city,
          state: formData.state,
          zipCode: formData.zipCode,
          phone: formData.phone,
          email: formData.email
        },
        paymentMethod,
        specialInstructions: formData.specialInstructions,
        deliveryFee: deliveryFee,
        subtotal: totalAmount,
        totalAmount: finalAmount
      };
      
      console.log('Order data prepared:', JSON.stringify(orderData, null, 2));
      console.log('Order items details:', JSON.stringify(orderItems, null, 2));
      console.log('Total amount being sent:', finalAmount);
      
      // Only use mock response when specifically in development mode AND mock mode is enabled
      if (import.meta.env.DEV && import.meta.env.VITE_USE_MOCK_API === 'true') {
        console.log('Development mode with mock API: Creating mock order');
        // Simulate API delay
        setTimeout(() => {
          const mockOrder = {
            _id: 'order-' + Date.now(),
            ...orderData,
            totalAmount: finalAmount,
            createdAt: new Date().toISOString(),
            orderStatus: 'Placed',
            paymentStatus: paymentMethod === 'COD' ? 'Pending' : 'Completed'
          };
          
          console.log('Mock order created:', mockOrder);
          clearCart();
          navigate('/order-confirmation', { state: { order: mockOrder } });
        }, 1000);
        return;
      }
      
      // In production or non-mock development, send to real API
      console.log('Sending order to API');
      const response = await createOrder(orderData);
      console.log('Order API response:', response);
      clearCart();
      // Pass the order data to the order confirmation page
      navigate('/order-confirmation', { state: { order: response.data || response } });
      setLoading(false);
    } catch (error) {
      console.error('Error placing order:', error);
      let errorMessage = 'Failed to place your order. Please try again.';
      
      if (error.response?.data?.error) {
        errorMessage = `Order failed: ${error.response.data.error}`;
      }
      
      setError(errorMessage);
      setLoading(false);
    }
  };
  
  return (
    <motion.div 
      className="checkout-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <motion.div
          className="checkout-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="page-title text-gradient">Checkout</h1>
          <div className="checkout-breadcrumb">
            <Link to="/">Home</Link>
            <span className="separator">›</span>
            <Link to="/cart">Cart</Link>
            <span className="separator">›</span>
            <span className="current">Checkout</span>
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
            <p>Please add some items to your cart before checkout.</p>
            <motion.button 
              className="btn" 
              onClick={() => navigate('/menu')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Browse Menu
            </motion.button>
          </motion.div>
        ) : showPaymentQR ? (
          <motion.div 
            className="payment-qr-container glass"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-gradient">Complete Payment</h2>
            <p>Scan the QR code with your UPI app to complete your payment.</p>
            
            <div className="qr-code">
              <img src={qrCodeImage} alt="Payment QR Code" />
              <div className="qr-code-border"></div>
            </div>
            
            <div className="payment-info">
              <div className="payment-amount">
                <span>Amount:</span>
                <span>₹{(totalAmount >= 300 ? totalAmount : totalAmount + 40).toFixed(2)}</span>
              </div>
              <div className="payment-id">
                <span>Payment ID:</span>
                <span>PIZZA{Date.now().toString().slice(-8)}</span>
              </div>
            </div>
            
            <div className="qr-actions">
              <motion.button 
                className="btn-outline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownloadQR}
              >
                Download QR Code
              </motion.button>
              <motion.button 
                className="btn"
                onClick={handlePaymentCompleted}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={loading}
              >
                {loading ? <div className="spinner-small"></div> : 'Payment Completed'}
              </motion.button>
            </div>
          </motion.div>
        ) : (
          <motion.div 
            className="checkout-content"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.form 
              className="checkout-form glass"
              onSubmit={handleSubmit}
              variants={itemVariants}
            >
              <h2 className="checkout-section-title">Delivery Information</h2>
              
              {error && <div className="error-message">{error}</div>}
              
              <div className="form-group">
                <label htmlFor="street">Street Address</label>
                <input
                  type="text"
                  id="street"
                  name="street"
                  value={formData.street}
                  onChange={handleChange}
                  required
                  placeholder="Enter your street address"
                />
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="city">City</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    placeholder="City"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="state">State</label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    required
                    placeholder="State"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="zipCode">ZIP Code</label>
                  <input
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                    required
                    placeholder="ZIP Code"
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">Phone Number (10 digits)</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Enter your 10-digit phone number"
                  maxLength="10"
                  pattern="[0-9]{10}"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="confirmPhone">Confirm Phone Number</label>
                <input
                  type="tel"
                  id="confirmPhone"
                  name="confirmPhone"
                  value={formData.confirmPhone}
                  onChange={handleChange}
                  required
                  placeholder="Confirm your phone number"
                  maxLength="10"
                  pattern="[0-9]{10}"
                />
                {phoneError && <div className="error-message">{phoneError}</div>}
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email address"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="confirmEmail">Confirm Email Address</label>
                <input
                  type="email"
                  id="confirmEmail"
                  name="confirmEmail"
                  value={formData.confirmEmail}
                  onChange={handleChange}
                  required
                  placeholder="Confirm your email address"
                />
                {emailError && <div className="error-message">{emailError}</div>}
              </div>
              
              <div className="form-group">
                <label htmlFor="specialInstructions">Special Instructions (Optional)</label>
                <textarea
                  id="specialInstructions"
                  name="specialInstructions"
                  value={formData.specialInstructions}
                  onChange={handleChange}
                  placeholder="Any special instructions for delivery or food preparation"
                  rows="3"
                ></textarea>
              </div>
              
              <h3 className="payment-title">Payment Method</h3>
              
              <div className="payment-methods">
                <div 
                  className={`payment-method ${paymentMethod === 'COD' ? 'active' : ''}`}
                  onClick={() => handlePaymentMethodChange('COD')}
                >
                  <div className="payment-method-radio">
                    <div className={`radio-inner ${paymentMethod === 'COD' ? 'selected' : ''}`}></div>
                  </div>
                  <div className="payment-method-details">
                    <div className="payment-method-icon">💵</div>
                    <div>
                      <h4>Cash on Delivery</h4>
                      <p>Pay with cash when your order arrives</p>
                    </div>
                  </div>
                </div>
                
                <div 
                  className={`payment-method ${paymentMethod === 'UPI' ? 'active' : ''}`}
                  onClick={() => handlePaymentMethodChange('UPI')}
                >
                  <div className="payment-method-radio">
                    <div className={`radio-inner ${paymentMethod === 'UPI' ? 'selected' : ''}`}></div>
                  </div>
                  <div className="payment-method-details">
                    <div className="payment-method-icon">📱</div>
                    <div>
                      <h4>UPI Payment</h4>
                      <p>Pay using UPI payment method</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <motion.button 
                type="submit" 
                className="btn place-order-btn"
                disabled={loading}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                {loading ? (
                  <div className="spinner-small"></div>
                ) : (
                  'Place Order'
                )}
              </motion.button>
              
              <div className="back-to-cart">
                <Link to="/cart">
                  <motion.div 
                    className="back-link"
                    whileHover={{ x: -5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    ← Back to Cart
                  </motion.div>
                </Link>
              </div>
            </motion.form>
            
            <motion.div 
              className="order-summary glass"
              variants={itemVariants}
            >
              <h2 className="checkout-section-title">Order Summary</h2>
              
              <div className="summary-items">
                {cartItems.map(item => (
                  <div key={item.id} className="summary-item">
                    <div className="summary-item-info">
                      <div className="summary-item-image">
                        <img src={item.image} alt={item.name} />
                      </div>
                      <div className="summary-item-details">
                        <h4>{item.name}</h4>
                        <div className="summary-item-meta">
                          <span>₹{item.price.toFixed(2)}</span>
                          <span>×</span>
                          <span>{item.quantity}</span>
                        </div>
                      </div>
                    </div>
                    <div className="summary-item-price">
                      ₹{(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="summary-divider"></div>
              
              <div className="summary-row">
                <span>Subtotal:</span>
                <span>₹{totalAmount.toFixed(2)}</span>
              </div>
              
              <div className="summary-row">
                <span>Delivery Fee:</span>
                <span>{totalAmount >= 300 ? 'Free' : '₹40.00'}</span>
              </div>
              
              <div className="summary-row total">
                <span>Total:</span>
                <span>₹{(totalAmount >= 300 ? totalAmount : totalAmount + 40).toFixed(2)}</span>
              </div>
              
              <div className="delivery-estimate">
                <div className="delivery-icon">🚚</div>
                <div>
                  <h4>Estimated Delivery Time</h4>
                  <p>30-45 minutes</p>
                </div>
              </div>
              
              <div className="order-support">
                <p>Need help with your order?</p>
                <a href="tel:+123456789" className="support-link">
                  <span>📞</span> Call Support
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default CheckoutPage; 