import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const { cartItems } = useCart();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when navigating
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Calculate total cart items
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <motion.nav 
      className={`navbar glass ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
    >
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="logo-container"
          >
            <span className="logo-icon">🍕</span>
            <h1>PizzaHost</h1>
          </motion.div>
        </Link>
        
        <div className="desktop-nav">
          <motion.div 
            className="navbar-links"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <NavLink to="/" isActive={location.pathname === '/'}>Home</NavLink>
            <NavLink to="/menu" isActive={location.pathname === '/menu'}>Menu</NavLink>
            <NavLink to="/about" isActive={location.pathname === '/about'}>About</NavLink>
            <NavLink to="/contact" isActive={location.pathname === '/contact'}>Contact</NavLink>
            <NavLink to="/cart" isActive={location.pathname === '/cart'}>
              Cart 
              <AnimatePresence>
                {cartItemCount > 0 && (
                  <motion.span 
                    className="cart-badge"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    key="cart-badge"
                  >
                    {cartItemCount}
                  </motion.span>
                )}
              </AnimatePresence>
            </NavLink>
          </motion.div>
        </div>
        
        <div className="mobile-controls">
          <Link to="/cart" className="mobile-cart-icon">
            <motion.div
              whileTap={{ scale: 0.9 }}
              className="cart-icon-container"
            >
              🛒
              <AnimatePresence>
                {cartItemCount > 0 && (
                  <motion.span 
                    className="cart-badge"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    key="mobile-cart-badge"
                  >
                    {cartItemCount}
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.div>
          </Link>
          
          <motion.div 
            className="hamburger-menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            <div className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <NavLink to="/" isActive={location.pathname === '/'}>Home</NavLink>
            <NavLink to="/menu" isActive={location.pathname === '/menu'}>Menu</NavLink>
            <NavLink to="/about" isActive={location.pathname === '/about'}>About</NavLink>
            <NavLink to="/contact" isActive={location.pathname === '/contact'}>Contact</NavLink>
            <NavLink to="/cart" isActive={location.pathname === '/cart'}>
              Cart 
              {cartItemCount > 0 && <span className="cart-badge mobile">{cartItemCount}</span>}
            </NavLink>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

// NavLink component with animation
const NavLink = ({ to, children, isActive }) => {
  // Function to ensure scroll to top when link is clicked
  const handleClick = () => {
    // Force immediate scroll to top
    window.scrollTo(0, 0);
  };

  return (
    <Link to={to} className={isActive ? 'active' : ''} onClick={handleClick}>
      <motion.div
        whileHover={{ y: -2 }}
        whileTap={{ y: 0 }}
        className="nav-link-container"
      >
        {children}
        {isActive && (
          <motion.div 
            className="active-indicator"
            layoutId="activeIndicator"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        )}
      </motion.div>
    </Link>
  );
};

export default Navbar; 