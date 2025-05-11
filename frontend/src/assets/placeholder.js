/**
 * This module provides placeholder images for the pizza website.
 * These URLs point to public domain or creative commons images for development purposes.
 * In a production environment, these would be replaced with actual images.
 */

// Using direct URLs instead of local imports
// import pizzaHeroPNG from './images/pizza-hero.png';
// import tomatoPNG from './images/tomato.png';
// import basilPNG from './images/basil.png';
// import cheesePNG from './images/cheese.png';
// import pepperPNG from './images/pepper.png';

const pizzaHeroPNG = 'https://via.placeholder.com/300x300?text=Pizza+Hero';
const tomatoPNG = 'https://via.placeholder.com/300x300?text=Tomato';
const basilPNG = 'https://via.placeholder.com/300x300?text=Basil';
const cheesePNG = 'https://via.placeholder.com/300x300?text=Cheese';
const pepperPNG = 'https://via.placeholder.com/300x300?text=Pepper';

export const placeholderImages = {
  // Pizza hero images
  heroPizza: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80',
  pizzaHero: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80',
  
  // Pattern backgrounds
  pizzaPattern: '/src/assets/pattern.png',
  patternDots: '/src/assets/dots.png',
  
  // Pizza types
  margherita: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
  pepperoni: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
  veggieSupreme: 'https://images.unsplash.com/photo-1604917869287-3ae73c77e227?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
  
  // Categories
  classic: 'https://images.unsplash.com/photo-1595708684082-a173bb3a06c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
  gourmet: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
  veggie: 'https://images.unsplash.com/photo-1552539618-7eec9b753d85?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
  spicy: 'https://images.unsplash.com/photo-1620374645310-f9d97e733268?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
  
  // Floating elements
  heroPizzaTransparent: pizzaHeroPNG,
  tomato: tomatoPNG,
  basil: basilPNG,
  cheese: cheesePNG,
  pepper: pepperPNG,
  
  // App mockups
  mobileApp: '/src/assets/images/mobile-app.png',
  appStore: '/src/assets/images/app-store.png',
  googlePlay: '/src/assets/images/google-play.png',
  
  // Avatars
  avatar1: '/src/assets/images/avatar1.png',
  avatar2: '/src/assets/images/avatar2.png',
  avatar3: '/src/assets/images/avatar3.png',
  
  // Logo
  logo: '/src/assets/images/logo.png'
};

/**
 * Helper function to generate CSS for background images
 * @param {string} url - Image URL
 * @returns {Object} CSS properties for background
 */
export const backgroundImage = (url) => ({
  backgroundImage: `url(${url})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
});

/**
 * Returns a placeholder URL for a pizza image
 * @param {number} id - Pizza ID to get a consistent image
 * @returns {string} Image URL
 */
export const getPizzaImage = (id) => {
  const pizzaImages = [
    'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    'https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    'https://images.unsplash.com/photo-1604917869287-3ae73c77e227?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    'https://images.unsplash.com/photo-1595708684082-a173bb3a06c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    'https://images.unsplash.com/photo-1552539618-7eec9b753d85?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    'https://images.unsplash.com/photo-1620374645310-f9d97e733268?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
  ];
  
  return pizzaImages[id % pizzaImages.length];
};

/**
 * Returns a placeholder URL for an avatar
 * @param {number} id - User ID to get a consistent avatar
 * @returns {string} Avatar URL
 */
export const getAvatarImage = (id) => {
  const avatars = [
    'https://i.imgur.com/8BFP9zM.png',
    'https://i.imgur.com/gCPMvPc.png',
    'https://i.imgur.com/A8JgOJy.png',
    'https://i.imgur.com/6YB5JuF.png',
    'https://i.imgur.com/n3MuqL3.png',
    'https://i.imgur.com/GNLJShP.png'
  ];
  
  return avatars[id % avatars.length];
};

// Placeholder image exports
// These are placeholder image variables to be replaced with actual images later

// Default placeholder image URL
const placeholderImageUrl = 'https://via.placeholder.com/300x300?text=Pizza+Image';

// Export all the pizza image variables
export const cheesePizza = placeholderImageUrl;
export const cheeseOnionPizza = placeholderImageUrl;
export const doubleCheesePizza = placeholderImageUrl;
export const cheesePaneerPizza = placeholderImageUrl;
export const farmfreshPizza = placeholderImageUrl;
export const spicyTangoPizza = placeholderImageUrl;
export const wonderPizza = placeholderImageUrl;
export const threePepperPizza = placeholderImageUrl;
export const threePepperPizza2 = placeholderImageUrl;
export const onionPizza = placeholderImageUrl;
export const onionCapsicumPizza = placeholderImageUrl;

// Placeholder images for backgrounds
export const backgroundImages = {
  hero: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  pattern: 'https://images.unsplash.com/photo-1566843972142-a7fcb70de1a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
};

export const qrCodeImage = 'https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=Demo%20Payment%20QR%20Code';

export const samplePizzas = [
  {
    _id: '1',
    name: 'Cheese Pizza',
    description: 'Classic pizza with tomato sauce and mozzarella cheese.',
    price: 12.99,
    image: cheesePizza,
    category: 'pizza',
    isVegetarian: true,
    isAvailable: true,
    toppings: ['Tomato Sauce', 'Mozzarella'],
  },
  {
    _id: '2',
    name: 'Cheese & Onion',
    description: 'Delicious pizza topped with mozzarella cheese and caramelized onions.',
    price: 14.99,
    image: cheeseOnionPizza,
    category: 'pizza',
    isVegetarian: true,
    isAvailable: true,
    toppings: ['Tomato Sauce', 'Mozzarella', 'Caramelized Onions'],
  },
  {
    _id: '3',
    name: 'Double Cheese Pizza',
    description: 'Extra cheesy pizza with two types of premium cheese.',
    price: 15.99,
    image: doubleCheesePizza,
    category: 'pizza',
    isVegetarian: true,
    isAvailable: true,
    toppings: ['Tomato Sauce', 'Mozzarella', 'Cheddar', 'Parmesan'],
  },
  {
    _id: '4',
    name: 'Cheese & Paneer',
    description: 'Unique pizza with mozzarella cheese and chunks of fresh paneer.',
    price: 16.99,
    image: cheesePaneerPizza,
    category: 'pizza',
    isVegetarian: true,
    isAvailable: true,
    toppings: ['Tomato Sauce', 'Mozzarella', 'Paneer', 'Bell Peppers'],
  },
  {
    _id: '5',
    name: 'Farmfresh',
    description: 'Fresh farm vegetables with mozzarella cheese on a thin crust.',
    price: 15.99,
    image: farmfreshPizza,
    category: 'pizza',
    isVegetarian: true,
    isAvailable: true,
    toppings: ['Tomato Sauce', 'Mozzarella', 'Bell Peppers', 'Mushrooms', 'Onions', 'Olives'],
  },
  {
    _id: '6',
    name: 'Spicy Tango Pizza',
    description: 'Spicy pizza with jalapenos, hot sauce, and mozzarella cheese.',
    price: 16.99,
    image: spicyTangoPizza,
    category: 'pizza',
    isVegetarian: true,
    isAvailable: true,
    toppings: ['Tomato Sauce', 'Mozzarella', 'Jalapenos', 'Hot Sauce'],
  },
  {
    _id: '7',
    name: 'Wonder Pizza',
    description: 'A wonderful combination of premium vegetables and cheese.',
    price: 17.99,
    image: wonderPizza,
    category: 'pizza',
    isVegetarian: true,
    isAvailable: true,
    toppings: ['Tomato Sauce', 'Mozzarella', 'Bell Peppers', 'Mushrooms', 'Corn', 'Olives'],
  },
  {
    _id: '8',
    name: 'Spicy Paneer',
    description: 'Spicy pizza with marinated paneer chunks and spices.',
    price: 18.99,
    image: threePepperPizza,
    category: 'pizza',
    isVegetarian: true,
    isAvailable: true,
    toppings: ['Tomato Sauce', 'Mozzarella', 'Spicy Paneer', 'Onions', 'Bell Peppers'],
  },
  {
    _id: '9',
    name: 'Three Peppers Pizza',
    description: 'Flavorful pizza with three varieties of bell peppers.',
    price: 16.49,
    image: threePepperPizza2,
    category: 'pizza',
    isVegetarian: true,
    isAvailable: true,
    toppings: ['Tomato Sauce', 'Mozzarella', 'Red Bell Pepper', 'Green Bell Pepper', 'Yellow Bell Pepper'],
  },
  {
    _id: '10',
    name: 'Onion Pizza',
    description: 'Simple and delicious pizza topped with caramelized onions.',
    price: 13.99,
    image: onionPizza,
    category: 'pizza',
    isVegetarian: true,
    isAvailable: true,
    toppings: ['Tomato Sauce', 'Mozzarella', 'Caramelized Onions'],
  },
  {
    _id: '11',
    name: 'Tomato Pizza',
    description: 'Traditional pizza with fresh tomato slices and herbs.',
    price: 14.49,
    image: 'https://cdn.uengage.io/uploads/5/image-784528-1715678904.png',
    category: 'pizza',
    isVegetarian: true,
    isAvailable: true,
    toppings: ['Tomato Sauce', 'Mozzarella', 'Fresh Tomato Slices', 'Basil'],
  },
  {
    _id: '12',
    name: 'Onion & Capsicum',
    description: 'Flavorful pizza with onions and bell peppers.',
    price: 15.49,
    image: onionCapsicumPizza,
    category: 'pizza',
    isVegetarian: true,
    isAvailable: true,
    toppings: ['Tomato Sauce', 'Mozzarella', 'Onions', 'Capsicum'],
  },
  {
    _id: '13',
    name: 'Garlic Bread',
    description: 'Freshly baked bread with garlic butter and herbs.',
    price: 5.99,
    image: 'https://www.indianveggiedelight.com/wp-content/uploads/2017/03/dominos_stuffed_garlic_bread_final.jpg',
    category: 'sides',
    isVegetarian: true,
    isAvailable: true,
    toppings: [],
  },
  {
    _id: '14',
    name: 'Cola',
    description: 'Refreshing cola drink to complement your meal.',
    price: 2.49,
    image: 'https://etimg.etb2bimg.com/thumb/msid-115716587,width-1200,height-900,resizemode-4/.jpg',
    category: 'drinks',
    isVegetarian: true,
    isAvailable: true,
    toppings: [],
  },
]; 