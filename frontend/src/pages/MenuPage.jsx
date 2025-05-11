import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PizzaCard from '../components/PizzaCard';
import { getMenuItems } from '../utils/api';
import { menuItems, menuCategories } from '../assets/menuData';
import './MenuPage.css';

const MenuPage = () => {
  // State management
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  // References
  const categoriesRef = useRef(null);
  const menuContainerRef = useRef(null);
  const containerRef = useRef(null);

  // Load menu items when component mounts
  useEffect(() => {
    // Use the local menuData.js file directly
    setTimeout(() => {
      setItems(menuItems);
      setLoading(false);
    }, 300); // Simulate loading for UX

    // Comment out the API fetch code
    /* 
    const fetchMenuItems = async () => {
      try {
        setLoading(true);
        
        // In development, use our menu data
        if (import.meta.env.DEV) {
          setTimeout(() => {
            setItems(menuItems);
            setLoading(false);
          }, 300); // Fast response
          return;
        }
        
        // In production, fetch from API
        const response = await getMenuItems();
        // Extract the menu items from the response data structure
        if (response.data && Array.isArray(response.data.data)) {
          setItems(response.data.data);
        } else if (response.data && Array.isArray(response.data)) {
          setItems(response.data);
        } else {
          console.error('Unexpected API response format:', response.data);
          setError('Unexpected data format received from server');
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching menu items:', error);
        setError('Failed to load menu items. Please try again later.');
        setLoading(false);
      }
    };

    fetchMenuItems();
    */
  }, []);

  // Horizontal scrolling to active category button
  useEffect(() => {
    if (categoriesRef.current) {
      const container = categoriesRef.current;
      const activeButton = container.querySelector('.filter-btn.active');
      
      if (activeButton) {
        // Calculate scroll position to center the active button
        const containerRect = container.getBoundingClientRect();
        const buttonRect = activeButton.getBoundingClientRect();
        
        const scrollLeft = 
          buttonRect.left - containerRect.left - (containerRect.width / 2) + (buttonRect.width / 2);
        
        // Smoothly scroll to center the active button
        container.scrollTo({
          left: Math.max(0, scrollLeft),
          behavior: 'smooth'
        });
      }
    }
  }, [activeCategory]);

  // Filter menu items based on category and search
  const filteredItems = items.filter(item => {
    // Match category (case insensitive)
    const matchesCategory = 
      activeCategory === 'all' || 
      item.category.toLowerCase() === activeCategory.toLowerCase();
    
    // Match search query in name, description or toppings
    const matchesSearch = 
      !searchQuery || 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (item.toppings && item.toppings.some(topping => 
        topping.toLowerCase().includes(searchQuery.toLowerCase())
      ));
    
    return matchesCategory && matchesSearch;
  });

  // Group items by subcategory for pizza category
  const groupedItems = (() => {
    // Only group by subcategory for pizza category and when not searching
    if (activeCategory.toLowerCase() === 'pizza' && !searchQuery) {
      return filteredItems.reduce((acc, item) => {
        if (item.subcategory) {
          if (!acc[item.subcategory]) {
            acc[item.subcategory] = [];
          }
          acc[item.subcategory].push(item);
        } else {
          if (!acc['other']) {
            acc['other'] = [];
          }
          acc['other'].push(item);
        }
        return acc;
      }, {});
    }
    
    // For other categories or when searching, don't group
    return { 'all': filteredItems };
  })();

  // Format subcategory names for display
  const formatCategoryName = (name) => {
    return name
      .split('_')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  // Handle category change
  const handleCategoryChange = (category) => {
    // Change to the selected category
    setActiveCategory(category);
    
    // Try to scroll menu into view after a short delay
    // to allow for state update and DOM rendering
    setTimeout(() => {
      if (menuContainerRef.current) {
        const offsetTop = menuContainerRef.current.offsetTop;
        const offset = 100; // Enough to allow for the sticky header
        
        window.scrollTo({
          top: offsetTop - offset,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <motion.div 
      className="menu-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      ref={containerRef}
    >
      <div className="menu-header">
        <div className="container">
          <motion.h1
            className="page-title"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, type: "spring", stiffness: 100 }}
          >
            Our Menu
          </motion.h1>
          
          <motion.p
            className="page-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            Explore our delicious range of pizzas, burgers, shakes and more
          </motion.p>
        </div>
      </div>

      <div className="container page-container">
        <div className="menu-controls">
          {/* Search Bar */}
          <motion.div 
            className="search-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, type: "spring" }}
          >
            <span className="search-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </span>
            <input
              type="text"
              placeholder="Search menu items, ingredients..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
              aria-label="Search menu"
            />
            <AnimatePresence>
              {searchQuery && (
                <motion.button 
                  className="clear-search"
                  onClick={() => setSearchQuery('')}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  aria-label="Clear search"
                  type="button"
                >
                  <svg 
                    width="14" 
                    height="14" 
                    viewBox="0 0 14 14" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      d="M13 1L1 13M1 1L13 13" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round"
                    />
                  </svg>
                </motion.button>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Category Filters */}
          <motion.div
            className="category-filters"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            ref={categoriesRef}
          >
            <div className="category-filters-inner">
              {/* Add 'all' to categories */}
              {['all', ...menuCategories].map((category, index) => (
                <motion.button
                  key={category}
                  className={`filter-btn ${activeCategory.toLowerCase() === category.toLowerCase() ? 'active' : ''}`}
                  onClick={() => handleCategoryChange(category)}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.3, 
                    delay: 0.1 + index * 0.05,
                    type: "spring",
                    stiffness: 200
                  }}
                >
                  {category === 'all' ? 'All Items' : formatCategoryName(category)}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Menu Items Container */}
        <div className="menu-items-wrapper" ref={menuContainerRef}>
          {loading ? (
            <motion.div 
              className="loading-container"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="spinner"></div>
              <p>Loading menu items...</p>
            </motion.div>
          ) : error ? (
            <motion.div 
              className="error-container"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h3 className="error-title">Oops!</h3>
              <p className="error-message">{error}</p>
              <button 
                className="btn" 
                onClick={() => window.location.reload()}
              >
                Try Again
              </button>
            </motion.div>
          ) : (
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeCategory}-${searchQuery}-container`}
                className="menu-items-container"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {filteredItems.length > 0 ? (
                  Object.entries(groupedItems).map(([subcategory, items]) => (
                    <motion.div 
                      key={subcategory} 
                      className="subcategory-section"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, type: "spring" }}
                    >
                      {subcategory !== 'all' && (
                        <motion.h2 
                          className="subcategory-title"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, type: "spring" }}
                        >
                          {formatCategoryName(subcategory)}
                        </motion.h2>
                      )}
                      <motion.div
                        className="menu-grid"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                      >
                        {items.map((item, index) => (
                          <PizzaCard key={`${item._id}-${index}`} pizza={item} />
                        ))}
                      </motion.div>
                    </motion.div>
                  ))
                ) : (
                  <motion.div 
                    className="no-items-message"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, type: "spring" }}
                  >
                    <motion.img 
                      src="/src/assets/no-results.svg" 
                      alt="No results found" 
                      className="no-results-icon"
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.4 }}
                    />
                    <motion.h3
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.4 }}
                    >
                      No items found
                    </motion.h3>
                    <motion.p
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4, duration: 0.4 }}
                    >
                      Try adjusting your search or filter criteria
                    </motion.p>
                    <motion.button 
                      className="btn btn-sm" 
                      onClick={() => {
                        setActiveCategory('all');
                        setSearchQuery('');
                      }}
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.5, duration: 0.4 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Show All Items
                    </motion.button>
                  </motion.div>
                )}
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default MenuPage; 