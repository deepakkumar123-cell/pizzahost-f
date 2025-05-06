/**
 * Utility functions for menu operations
 */

import { menuItems } from '../assets/menuData';

/**
 * Get all menu items
 * @returns {Array} All menu items
 */
export const getAllMenuItems = () => {
  return menuItems;
};

/**
 * Get menu items by category
 * @param {string} category - Category to filter by
 * @returns {Array} Filtered menu items
 */
export const getMenuItemsByCategory = (category) => {
  return menuItems.filter(item => item.category === category);
};

/**
 * Get menu items by subcategory
 * @param {string} subcategory - Subcategory to filter by
 * @returns {Array} Filtered menu items
 */
export const getMenuItemsBySubcategory = (subcategory) => {
  return menuItems.filter(item => item.subcategory === subcategory);
};

/**
 * Get menu item by ID
 * @param {string} id - Item ID to look for
 * @returns {Object|null} Menu item or null if not found
 */
export const getMenuItemById = (id) => {
  return menuItems.find(item => item._id === id) || null;
};

/**
 * Get all available extras for pizzas
 * @returns {Object} Object with extras categorized by type
 */
export const getPizzaExtras = () => {
  const cheeseBurst = menuItems.filter(item => 
    item.category === 'extras' && item.subcategory === 'cheese_burst'
  );
  
  const extraToppings = menuItems.filter(item => 
    item.category === 'extras' && item.subcategory === 'extra_toppings'
  );
  
  return {
    cheeseBurst,
    extraToppings
  };
};

/**
 * Get extras for a specific pizza size
 * @param {string} size - Pizza size ('small', 'medium', 'large')
 * @returns {Object} Object with extras for the specified size
 */
export const getExtrasBySize = (size) => {
  const cheeseBurst = menuItems.find(item => 
    item.category === 'extras' && 
    item.subcategory === 'cheese_burst' && 
    item.forSize === size
  );
  
  const extraToppings = menuItems.find(item => 
    item.category === 'extras' && 
    item.subcategory === 'extra_toppings' && 
    item.forSize === size
  );
  
  return {
    cheeseBurst,
    extraToppings
  };
};

/**
 * Get all available combo offers
 * @returns {Array} Array of combo offers
 */
export const getComboOffers = () => {
  return menuItems.filter(item => item.category === 'family_combo');
};

/**
 * Search menu items by name, description, or toppings
 * @param {string} query - Search query
 * @returns {Array} Matching menu items
 */
export const searchMenuItems = (query) => {
  const searchTerms = query.toLowerCase().trim().split(/\s+/);
  
  return menuItems.filter(item => {
    // Check if any search term matches in name, description, or toppings
    return searchTerms.some(term => {
      const nameMatch = item.name.toLowerCase().includes(term);
      const descMatch = item.description && item.description.toLowerCase().includes(term);
      const toppingsMatch = item.toppings && Array.isArray(item.toppings) && 
        item.toppings.some(topping => topping.toLowerCase().includes(term));
      
      return nameMatch || descMatch || toppingsMatch;
    });
  });
};

/**
 * Format a menu item price for display
 * @param {number} price - Price to format
 * @returns {string} Formatted price
 */
export const formatPrice = (price) => {
  return `₹${price}`;
};

export default {
  getAllMenuItems,
  getMenuItemsByCategory,
  getMenuItemsBySubcategory,
  getMenuItemById,
  getPizzaExtras,
  getExtrasBySize,
  getComboOffers,
  searchMenuItems,
  formatPrice
}; 