/**
 * This file contains the menu data extracted from the menu image
 */

// No imports needed here, we'll use direct image URLs

export const menuCategories = [
  'pizza',
  'burgers',
  'sides',
  'sandwiches',
  'family_combo',
  'extras'
];

// Default placeholder image URL to use for all items
const placeholderImageUrl = 'https://via.placeholder.com/300x300?text=Pizza+Image';

export const menuItems = [
  // VEG PIZZA - SIMPLY VEG
  {
    _id: 'sv1',
    name: 'Simply Veg Cheese Pizza',
    description: 'Single Cheese Topping',
    price: 230, // Medium price
    sizeOptions: {
      small: { price: 115, available: true },
      medium: { price: 230, available: true },
      large: { price: 350, available: true }
    },
    image: 'https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg',
    category: 'pizza',
    subcategory: 'simply_veg',
    isVegetarian: true,
    isAvailable: true,
    toppings: ['Cheese'],
    allowCheeseBurst: true,
    allowExtraToppings: true
  },
  {
    _id: 'sv2',
    name: 'Cheese & Corn',
    description: 'Corn Topping Pizza',
    price: 230, // Medium price
    sizeOptions: {
      small: { price: 115, available: true },
      medium: { price: 230, available: true },
      large: { price: 350, available: true }
    },
    image: 'https://bakesquare.in/wp-content/uploads/2023/04/5qgpBjIyHm4XLzDk1OHleamgDNKt6nbSm-nv73i4k7eDDyq5mh5DV0awva1cF6ptuA5lVCB96VnjN93xLE06qfEebGwnPHwKwpNh.jpg',
    category: 'pizza',
    subcategory: 'simply_veg',
    isVegetarian: true,
    isAvailable: true,
    toppings: ['Cheese', 'Corn'],
    allowCheeseBurst: true,
    allowExtraToppings: true
  },
  {
    _id: 'sv3',
    name: 'Cheese & Onion',
    description: 'Onion Topping Pizza',
    price: 230, // Medium price
    sizeOptions: {
      small: { price: 115, available: true },
      medium: { price: 230, available: true },
      large: { price: 350, available: true }
    },
    image: 'https://img-global.cpcdn.com/recipes/cd6fec5ae0b70986/1200x630cq70/photo.jpg',
    category: 'pizza',
    subcategory: 'simply_veg',
    isVegetarian: true,
    isAvailable: true,
    toppings: ['Cheese', 'Onion'],
    allowCheeseBurst: true,
    allowExtraToppings: true
  },

  // VEG DELIGHT
  {
    _id: 'vd1',
    name: 'Double Cheese Pizza',
    description: 'Loaded With Extra Cheese',
    price: 270, // Medium price
    sizeOptions: {
      small: { price: 150, available: true },
      medium: { price: 270, available: true },
      large: { price: 400, available: true }
    },
    image: 'https://cdn.dotpe.in/longtail/store-items/8719830/D1D8WAHx.webp',
    category: 'pizza',
    subcategory: 'veg_delight',
    isVegetarian: true,
    isAvailable: true,
    toppings: ['Extra Cheese'],
    allowCheeseBurst: true,
    allowExtraToppings: true
  },
  {
    _id: 'vd2',
    name: 'Garden Fresh',
    description: 'Onion, Capsicum Loaded With Extra Cheese',
    price: 270, // Medium price
    sizeOptions: {
      small: { price: 150, available: true },
      medium: { price: 270, available: true },
      large: { price: 400, available: true }
    },
    image: 'https://cdn.dotpe.in/longtail/store-items/6385438/CpQiwPiv.jpeg',
    category: 'pizza',
    subcategory: 'veg_delight',
    isVegetarian: true,
    isAvailable: true,
    toppings: ['Onion', 'Capsicum', 'Extra Cheese'],
    allowCheeseBurst: true,
    allowExtraToppings: true
  },
  {
    _id: 'vd3',
    name: 'Cheese & Paneer',
    description: 'Paneer Topping Pizza',
    price: 270, // Medium price
    sizeOptions: {
      small: { price: 150, available: true },
      medium: { price: 270, available: true },
      large: { price: 400, available: true }
    },
    image: 'https://cdn.dotpe.in/longtail/store-items/6385438/zsDEQSGb.jpeg',
    category: 'pizza',
    subcategory: 'veg_delight',
    isVegetarian: true,
    isAvailable: true,
    toppings: ['Cheese', 'Paneer'],
    allowCheeseBurst: true,
    allowExtraToppings: true
  },
  
  // VEG TREAT
  {
    _id: 'vt1',
    name: 'Farmfresh',
    description: 'Onion, Capsicum, Tomato With Grilled Mushroom',
    price: 320, // Medium price
    sizeOptions: {
      small: { price: 175, available: true },
      medium: { price: 320, available: true },
      large: { price: 460, available: true }
    },
    image: 'https://pizzzaking.com/wp-content/uploads/2023/03/5461622466_bf1e733345_b.jpg',
    category: 'pizza',
    subcategory: 'veg_treat',
    isVegetarian: true,
    isAvailable: true,
    toppings: ['Onion', 'Capsicum', 'Tomato', 'Grilled Mushroom'],
    allowCheeseBurst: true,
    allowExtraToppings: true
  },
  {
    _id: 'vt2',
    name: 'Spicy Tango Pizza',
    description: 'Golden corn, jalapeno & red pepper',
    price: 320, // Medium price
    sizeOptions: {
      small: { price: 175, available: true },
      medium: { price: 320, available: true },
      large: { price: 460, available: true }
    },
    image: 'https://dukaan.b-cdn.net/700x700/webp/130623/b9d74a8c-e283-46a1-bdc0-ff78a6d5205c.png',
    category: 'pizza',
    subcategory: 'veg_treat',
    isVegetarian: true,
    isAvailable: true,
    toppings: ['Golden Corn', 'Jalapeno', 'Red Pepper'],
    allowCheeseBurst: true,
    allowExtraToppings: true
  },
  {
    _id: 'vt3',
    name: 'Wonder Pizza',
    description: 'Onion, Capsicum, Tomato with mexican Chilli, jalapeno',
    price: 320, // Medium price
    sizeOptions: {
      small: { price: 175, available: true },
      medium: { price: 320, available: true },
      large: { price: 460, available: true }
    },
    image: 'https://odwfoods.com/website/upload/1708413741double-loaded-veg-pizza.jpg',
    category: 'pizza',
    subcategory: 'veg_treat',
    isVegetarian: true,
    isAvailable: true,
    toppings: ['Onion', 'Capsicum', 'Tomato', 'Mexican Chilli', 'Jalapeno'],
    allowCheeseBurst: true,
    allowExtraToppings: true
  },
  
  // VEG SPECIAL
  {
    _id: 'vs1',
    name: 'Spicy Paneer',
    description: 'Capsicum, Spicy Paneer & Red Pepper',
    price: 340, // Medium price
    sizeOptions: {
      small: { price: 195, available: true },
      medium: { price: 340, available: true },
      large: { price: 495, available: true }
    },
    image: 'https://j6e2i8c9.delivery.rocketcdn.me/wp-content/uploads/2020/10/Paneer-tikka-pizza-recipe-4.jpg.webp',
    category: 'pizza',
    subcategory: 'veg_special',
    isVegetarian: true,
    isAvailable: true,
    toppings: ['Capsicum', 'Spicy Paneer', 'Red Pepper'],
    allowCheeseBurst: true,
    allowExtraToppings: true
  },
  {
    _id: 'vs2',
    name: 'Three Peppers',
    description: 'Olive, Red Pepper & Grilled Mushroom',
    price: 340, // Medium price
    sizeOptions: {
      small: { price: 195, available: true },
      medium: { price: 340, available: true },
      large: { price: 495, available: true }
    },
    image: 'https://deifratelli.com/wp-content/uploads/2021/08/Three-Pepper-Pizza-1-1000x665.jpg',
    category: 'pizza',
    subcategory: 'veg_special',
    isVegetarian: true,
    isAvailable: true,
    toppings: ['Olive', 'Red Pepper', 'Grilled Mushroom'],
    allowCheeseBurst: true,
    allowExtraToppings: true
  },
  {
    _id: 'vs3',
    name: 'Delicious Pizza',
    description: 'Onion, Capsicum, Golden Corn, Mushroom & Paneer',
    price: 340, // Medium price
    sizeOptions: {
      small: { price: 195, available: true },
      medium: { price: 340, available: true },
      large: { price: 495, available: true }
    },
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3_Gk2LdzG0RPzjg4sXi27WIYSCbUaupm_ng&s',
    category: 'pizza',
    subcategory: 'veg_special',
    isVegetarian: true,
    isAvailable: true,
    toppings: ['Onion', 'Capsicum', 'Golden Corn', 'Mushroom', 'Paneer'],
    allowCheeseBurst: true,
    allowExtraToppings: true
  },
  {
    _id: 'vs4',
    name: 'Veggie Lovers',
    description: 'Capsicum, Black Olives & Tomato',
    price: 340, // Medium price
    sizeOptions: {
      small: { price: 195, available: true },
      medium: { price: 340, available: true },
      large: { price: 495, available: true }
    },
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCwpOfINj2LTDtu7dpL600xQQX3xI43ChVPA&s',
    category: 'pizza',
    subcategory: 'veg_special',
    isVegetarian: true,
    isAvailable: true,
    toppings: ['Capsicum', 'Black Olives', 'Tomato'],
    allowCheeseBurst: true,
    allowExtraToppings: true
  },
  {
    _id: 'vs5',
    name: 'Achari Pizza',
    description: 'Double Golden Corn, Capsicum & Paneer',
    price: 340, // Medium price
    sizeOptions: {
      small: { price: 195, available: true },
      medium: { price: 340, available: true },
      large: { price: 495, available: true }
    },
    image: 'https://alibaik.in/wp-content/uploads/2023/12/13.jpg',
    category: 'pizza',
    subcategory: 'veg_special',
    isVegetarian: true,
    isAvailable: true,
    toppings: ['Double Golden Corn', 'Capsicum', 'Paneer'],
    allowCheeseBurst: true,
    allowExtraToppings: true
  },
  
  // VEG FEAST PIZZA
  {
    _id: 'vf1',
    name: 'Pizza Host',
    description: 'Onion, Capsicum, Paneer, Jalapeno, Golden Corn, Olive & Mushroom',
    price: 380, // Medium price
    sizeOptions: {
      small: { price: 230, available: true },
      medium: { price: 380, available: true },
      large: { price: 570, available: true }
    },
    image: '',
    category: 'pizza',
    subcategory: 'veg_feast',
    isVegetarian: true,
    isAvailable: true,
    toppings: ['Onion', 'Capsicum', 'Paneer', 'Jalapeno', 'Golden Corn', 'Olive', 'Mushroom'],
    allowCheeseBurst: true,
    allowExtraToppings: true
  },
  {
    _id: 'vf2',
    name: 'Cloud One Pizza',
    description: 'Onion, Capsicum, Tomato, Jalapeno, Paneer, Golden Mushroom',
    price: 380, // Medium price
    sizeOptions: {
      small: { price: 230, available: true },
      medium: { price: 380, available: true },
      large: { price: 570, available: true }
    },
    image: '',
    category: 'pizza',
    subcategory: 'veg_feast',
    isVegetarian: true,
    isAvailable: true,
    toppings: ['Onion', 'Capsicum', 'Tomato', 'Jalapeno', 'Paneer', 'Golden Mushroom'],
    allowCheeseBurst: true,
    allowExtraToppings: true
  },
  {
    _id: 'vf3',
    name: 'Chef\'s Veg Special',
    description: 'Red Paprika, Capsicum, Mushroom, Jalapeno, Paneer, Golden Corn & Mint Sauce',
    price: 380, // Medium price
    sizeOptions: {
      small: { price: 230, available: true },
      medium: { price: 380, available: true },
      large: { price: 570, available: true }
    },
    image: '',
    category: 'pizza',
    subcategory: 'veg_feast',
    isVegetarian: true,
    isAvailable: true,
    toppings: ['Red Paprika', 'Capsicum', 'Mushroom', 'Jalapeno', 'Paneer', 'Golden Corn', 'Mint Sauce'],
    allowCheeseBurst: true,
    allowExtraToppings: true
  },
  {
    _id: 'vf4',
    name: 'Paneer Makhani Pizza',
    description: 'Corn, Jalapeno, Double Paneer, Capsicum & Olive',
    price: 380, // Medium price
    sizeOptions: {
      small: { price: 230, available: true },
      medium: { price: 380, available: true },
      large: { price: 570, available: true }
    },
    image: '',
    category: 'pizza',
    subcategory: 'veg_feast',
    isVegetarian: true,
    isAvailable: true,
    toppings: ['Corn', 'Jalapeno', 'Double Paneer', 'Capsicum', 'Olive'],
    allowCheeseBurst: true,
    allowExtraToppings: true
  },
  
  // SINGLE TOPPING PIZZA
  {
    _id: 'st1',
    name: 'Onion Pizza',
    description: 'Pizza with onion topping',
    price: 150, // Medium price
    sizeOptions: {
      small: { price: 69, available: true },
      medium: { price: 150, available: true },
      large: { price: 300, available: true }
    },
    image: 'https://littlekitchen.in/wp-content/uploads/2024/05/onion-pizza.jpg',
    category: 'pizza',
    subcategory: 'single_topping',
    isVegetarian: true,
    isAvailable: true,
    toppings: ['Onion'],
    allowCheeseBurst: true,
    allowExtraToppings: true
  },
  {
    _id: 'st2',
    name: 'Tomato Pizza',
    description: 'Pizza with tomato topping',
    price: 150, // Medium price
    sizeOptions: {
      small: { price: 69, available: true },
      medium: { price: 150, available: true },
      large: { price: 300, available: true }
    },
    image: 'https://cdn.uengage.io/uploads/5/image-784528-1715678904.png',
    category: 'pizza',
    subcategory: 'single_topping',
    isVegetarian: true,
    isAvailable: true,
    toppings: ['Tomato'],
    allowCheeseBurst: true,
    allowExtraToppings: true
  },
  {
    _id: 'st3',
    name: 'Capsicum Pizza',
    description: 'Pizza with capsicum topping',
    price: 160, // Medium price
    sizeOptions: {
      small: { price: 75, available: true },
      medium: { price: 160, available: true },
      large: { price: 320, available: true }
    },
    image: 'https://cdn.dotpe.in/longtail/store-items/6385438/eHYCZpuj.jpeg',
    category: 'pizza',
    subcategory: 'single_topping',
    isVegetarian: true,
    isAvailable: true,
    toppings: ['Capsicum'],
    allowCheeseBurst: true,
    allowExtraToppings: true
  },
  {
    _id: 'st4',
    name: 'Pizza',
    description: 'Simple pizza',
    price: 165, // Medium price
    sizeOptions: {
      small: { price: 75, available: true },
      medium: { price: 165, available: true },
      large: { price: 320, available: true }
    },
    image: 'https://cdn.uengage.io/uploads/5/image-894677-1715678908.png',
    category: 'pizza',
    subcategory: 'single_topping',
    isVegetarian: true,
    isAvailable: true,
    toppings: [],
    allowCheeseBurst: true,
    allowExtraToppings: true
  },
  
  // DOUBLE TOPPING PIZZA
  {
    _id: 'dt1',
    name: 'Onion & Capsicum',
    description: 'Pizza with onion and capsicum toppings',
    price: 180, // Medium price
    sizeOptions: {
      small: { price: 95, available: true },
      medium: { price: 180, available: true },
      large: { price: 340, available: true }
    },
    image: 'https://www.awesomecuisine.com/wp-content/uploads/2014/01/capsicum-pizza.jpg',
    category: 'pizza',
    subcategory: 'double_topping',
    isVegetarian: true,
    isAvailable: true,
    toppings: ['Onion', 'Capsicum'],
    allowCheeseBurst: true,
    allowExtraToppings: true
  },
  {
    _id: 'dt2',
    name: 'Tomato & Corn',
    description: 'Pizza with tomato and corn toppings',
    price: 180, // Medium price
    sizeOptions: {
      small: { price: 95, available: true },
      medium: { price: 180, available: true },
      large: { price: 340, available: true }
    },
    image: 'https://img-global.cpcdn.com/recipes/816ec134300547ff/680x482cq70/onion-tomato-corn-pizza-recipe-main-photo.jpg',
    category: 'pizza',
    subcategory: 'double_topping',
    isVegetarian: true,
    isAvailable: true,
    toppings: ['Tomato', 'Corn'],
    allowCheeseBurst: true,
    allowExtraToppings: true
  },
  {
    _id: 'dt3',
    name: 'Onion & Paneer',
    description: 'Pizza with onion and paneer toppings',
    price: 190, // Medium price
    sizeOptions: {
      small: { price: 105, available: true },
      medium: { price: 190, available: true },
      large: { price: 350, available: true }
    },
    image: 'https://teasteamcafe.com/wp-content/uploads/2024/01/unnamed-1.jpg',
    category: 'pizza',
    subcategory: 'double_topping',
    isVegetarian: true,
    isAvailable: true,
    toppings: ['Onion', 'Paneer'],
    allowCheeseBurst: true,
    allowExtraToppings: true
  },
  {
    _id: 'dt4',
    name: 'Jalapeno & Onion',
    description: 'Pizza with jalapeno and onion toppings',
    price: 180, // Medium price
    sizeOptions: {
      small: { price: 105, available: true },
      medium: { price: 180, available: true },
      large: { price: 340, available: true }
    },
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0hk6hizUKGUtzGT4KA4edYapxgf4gPWndvw&s',
    category: 'pizza',
    subcategory: 'double_topping',
    isVegetarian: true,
    isAvailable: true,
    toppings: ['Jalapeno', 'Onion'],
    allowCheeseBurst: true,
    allowExtraToppings: true
  },
  
  // EXTRAS
  {
    _id: 'e2',
    name: 'Cheese Burst',
    description: 'Add gooey cheese inside the crust',
    price: 90, // Medium price
    sizeOptions: {
      small: { price: 60, available: true },
      medium: { price: 90, available: true },
      large: { price: 120, available: true }
    },
    image: 'https://images.unsplash.com/photo-1604917869287-3ae73c77e227?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    category: 'extras',
    subcategory: 'cheese_burst',
    isVegetarian: true,
    isAvailable: true,
    toppings: ['Cheese'],
  },
  {
    _id: 'e3',
    name: 'Extra Toppings',
    description: 'Add extra vegetable toppings to your pizza',
    price: 40, // Medium price
    sizeOptions: {
      small: { price: 30, available: true },
      medium: { price: 40, available: true },
      large: { price: 50, available: true }
    },
    image: 'https://images.unsplash.com/photo-1604917869287-3ae73c77e227?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    category: 'extras',
    subcategory: 'extra_toppings',
    isVegetarian: true,
    isAvailable: true,
    toppings: ['Mixed Vegetables'],
  },
  {
    _id: 'e4',
    name: 'Ketchup',
    description: 'Add ketchup sachet',
    price: 2,
    image: 'https://images.unsplash.com/photo-1583691626878-a53896058e53?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    category: 'extras',
    subcategory: 'sauces',
    isVegetarian: true,
    isAvailable: true,
    toppings: [],
  },
  
  // BURGERS
  {
    _id: 'b1',
    name: 'Potato Crispy Burger',
    description: '',
    price: 39,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPXvq0dlmbIKj6vZzWg5WVPBddnYbpEo39zg&s',
    category: 'burgers',
    isVegetarian: true,
    isAvailable: true
  },
  {
    _id: 'b2',
    name: 'Cheese Burger',
    description: '',
    price: 55,
    image: 'https://cdn.uengage.io/uploads/6670/image-557382-1677054193.jpeg',
    category: 'burgers',
    isVegetarian: true,
    isAvailable: true,
    addons: [{name: "Cheese Slice", price: 20}]
  },
  {
    _id: 'b3',
    name: 'Veg Delight Burger',
    description: '',
    price: 67,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv9iLOZBIV2VbFQaPBn6KDJ-y6t8RttCftxg&s',
    category: 'burgers',
    isVegetarian: true,
    isAvailable: true,
    addons: [{name: "Cheese Slice", price: 20}]
  },
  {
    _id: 'b4',
    name: 'Smoky Tandoori Burger',
    description: '',
    price: 77,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk0j9fSya25dHaJ5z59eL11601hU8lwvzkfw&s',
    category: 'burgers',
    isVegetarian: true,
    isAvailable: true,
    addons: [{name: "Cheese Slice", price: 20}]
  },
  {
    _id: 'b5',
    name: 'Achari Paneer Burger',
    description: '',
    price: 87,
    image: 'https://img-global.cpcdn.com/recipes/ec1d4c11a9fea61f/680x482cq70/%E0%A4%85%E0%A4%9A%E0%A4%B0-%E0%A4%AA%E0%A4%A8%E0%A4%B0-%E0%A4%AC%E0%A4%B0%E0%A4%97%E0%A4%B0achari-paneer-burger-recipe-in-hindi-%E0%A4%B0%E0%A4%B8%E0%A4%AA-%E0%A4%AE%E0%A4%96%E0%A4%AF-%E0%A4%A4%E0%A4%B8%E0%A4%B5%E0%A4%B0.jpg',
    category: 'burgers',
    isVegetarian: true,
    isAvailable: true,
    addons: [{name: "Cheese Slice", price: 20}]
  },
  {
    _id: 'b6',
    name: 'Pizza Host Double Decker Burger',
    description: '',
    price: 107,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPNpp96-Hhb9Xv3aEVr2ZzLtyLFP07kTOtwQ&s',
    category: 'burgers',
    isVegetarian: true,
    isAvailable: true,
    addons: [{name: "Cheese Slice", price: 20}]
  },
  {
    _id: 'b7',
    name: 'Add With Cheese Slice',
    description: 'Add extra cheese slice to any burger',
    price: 20,
    image: 'https://images.unsplash.com/photo-1564425243328-5c2a6c156ab4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    category: 'extras',
    subcategory: 'burger_addons',
    isVegetarian: true,
    isAvailable: true,
    toppings: ['Cheese'],
  },
  
  // FAMILY COMBO
  {
    _id: 'fc1',
    name: 'SET OF 4 - Single Topping Pizza',
    description: 'Onion, Tomato, Capsicum, Corn',
    price: 270,
    image: '',
    category: 'family_combo',
    subcategory: 'set_of_4',
    isVegetarian: true,
    isAvailable: true,
    items: ['Onion Pizza', 'Tomato Pizza', 'Capsicum Pizza', 'Corn Pizza']
  },
  {
    _id: 'fc2',
    name: 'SET OF 4 - Double Topping Pizza',
    description: 'Onion & Capsicum, Tomato & Corn, Onion & Paneer, Jalapeno & Onion',
    price: 360,
    image: '',
    category: 'family_combo',
    subcategory: 'set_of_4',
    isVegetarian: true,
    isAvailable: true,
    items: ['Onion & Capsicum Pizza', 'Tomato & Corn Pizza', 'Onion & Paneer Pizza', 'Jalapeno & Onion Pizza']
  },
  {
    _id: 'fc3',
    name: 'COMBO-1',
    description: 'Double Topping Pizza with Extra Cheese + Burger + French Fries',
    price: 190,
    image: '',
    category: 'family_combo',
    subcategory: 'combo',
    isVegetarian: true,
    isAvailable: true,
    items: ['Double Topping Pizza with Extra Cheese', 'Burger', 'French Fries']
  },
  {
    _id: 'fc4',
    name: 'COMBO-2',
    description: 'Double Topping Pizza with Extra Cheese + Cheese Burger + Garlic Bread + French Fries',
    price: 300,
    image: '',
    category: 'family_combo',
    subcategory: 'combo',
    isVegetarian: true,
    isAvailable: true,
    items: ['Double Topping Pizza with Extra Cheese', 'Cheese Burger', 'Garlic Bread', 'French Fries']
  },
  {
    _id: 'fc5',
    name: 'VEG SPECIAL-1',
    description: 'Medium Pizza + Garlic Bread + Onion Rings + French Fries + Cheese Dip',
    price: 380,
    image: '',
    category: 'family_combo',
    subcategory: 'special',
    isVegetarian: true,
    isAvailable: true,
    items: ['Medium Pizza', 'Garlic Bread', 'Onion Rings', 'French Fries', 'Cheese Dip']
  },
  {
    _id: 'fc6',
    name: 'VEG SPECIAL-2',
    description: 'Medium Pizza + 2 Garlic Bread + 1 Pasta + Veg Pariche + 1 Cheese Dip',
    price: 500,
    image: '',
    category: 'family_combo',
    subcategory: 'special',
    isVegetarian: true,
    isAvailable: true,
    items: ['Medium Pizza', 'Garlic Bread (2)', 'Pasta', 'Veg Pariche', 'Cheese Dip']
  },
  {
    _id: 'fc7',
    name: 'CHOOSE ANY CATEGORY',
    description: 'Medium Pizza + Garlic Bread + Cheesy Dip + Pasta + Burger + Coke (500ml)',
    price: 680,
    image: '',
    category: 'family_combo',
    subcategory: 'special',
    isVegetarian: true,
    isAvailable: true,
    items: ['Medium Pizza', 'Garlic Bread', 'Cheesy Dip', 'Pasta', 'Burger', 'Coke (500ml)']
  },
  
  // SIDES
  {
    _id: 's1',
    name: 'Hot Parcel',
    description: 'Hot vegetable parcel',
    price: 39,
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    category: 'sides',
    isVegetarian: true,
    isAvailable: true,
    toppings: [],
  },
  {
    _id: 's2',
    name: 'French Fries',
    description: 'Crispy golden French fries',
    price: 99,
    image: 'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    category: 'sides',
    isVegetarian: true,
    isAvailable: true,
    toppings: [],
  },
  {
    _id: 's3',
    name: 'Garlic Bread With Cheese Dip',
    description: 'Fresh garlic bread served with cheese dip',
    price: 110,
    image: 'https://images.unsplash.com/photo-1573140401455-cff10d5500d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    category: 'sides',
    isVegetarian: true,
    isAvailable: true,
    toppings: [],
  },
  {
    _id: 's4',
    name: 'Stuffed Garlic Bread',
    description: 'Garlic bread filled with cheese and herbs',
    price: 120,
    image: 'https://images.unsplash.com/photo-1600628421055-4d30de868b8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    category: 'sides',
    isVegetarian: true,
    isAvailable: true,
    toppings: [],
  },
  {
    _id: 's5',
    name: 'Veg. Red Pasta',
    description: 'Pasta in tomato-based sauce',
    price: 120,
    image: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    category: 'sides',
    isVegetarian: true,
    isAvailable: true,
    toppings: [],
  },
  
  // SHAKES
  {
    _id: 'sh1',
    name: 'Oreo Shake',
    description: 'Creamy milkshake with Oreo cookies',
    price: 99,
    image: 'https://images.unsplash.com/photo-1541658016709-82535e94bc69?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    category: 'shakes',
    isVegetarian: true,
    isAvailable: true,
    toppings: [],
  },
  {
    _id: 'sh2',
    name: 'Strawberry Shake',
    description: 'Sweet strawberry milkshake',
    price: 99,
    image: 'https://images.unsplash.com/photo-1586917049302-bbc31aef1d8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    category: 'shakes',
    isVegetarian: true,
    isAvailable: true,
    toppings: [],
  },
  {
    _id: 'sh3',
    name: 'Chocolate Shake',
    description: 'Rich chocolate milkshake',
    price: 99,
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    category: 'shakes',
    isVegetarian: true,
    isAvailable: true,
    toppings: [],
  },
  {
    _id: 'sh4',
    name: 'Butter Scotch Shake',
    description: 'Creamy butterscotch flavored milkshake',
    price: 110,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    category: 'shakes',
    isVegetarian: true,
    isAvailable: true,
    toppings: [],
  },
  {
    _id: 'sh5',
    name: 'Pineapple Shake',
    description: 'Refreshing pineapple milkshake',
    price: 99,
    image: 'https://images.unsplash.com/photo-1553177595-4de2bb0f5eda?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    category: 'shakes',
    isVegetarian: true,
    isAvailable: true,
    toppings: [],
  },
  
  // MOCKTAILS
  {
    _id: 'm1',
    name: 'Mojito',
    description: 'Refreshing mint and lime mocktail',
    price: 60,
    image: 'https://images.unsplash.com/photo-1566733971017-f6d042146cc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    category: 'mocktails',
    isVegetarian: true,
    isAvailable: true,
    toppings: [],
  },
  {
    _id: 'm2',
    name: 'Strawberry',
    description: 'Sweet strawberry mocktail',
    price: 70,
    image: 'https://images.unsplash.com/photo-1606943932434-2f21e1c54ef2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    category: 'mocktails',
    isVegetarian: true,
    isAvailable: true,
    toppings: [],
  },
  {
    _id: 'm3',
    name: 'Pineapple',
    description: 'Tropical pineapple mocktail',
    price: 70,
    image: 'https://images.unsplash.com/photo-1550098141-33cc3831da73?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    category: 'mocktails',
    isVegetarian: true,
    isAvailable: true,
    toppings: [],
  },
  {
    _id: 'm4',
    name: 'Green Apple',
    description: 'Tangy green apple mocktail',
    price: 60,
    image: 'https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    category: 'mocktails',
    isVegetarian: true,
    isAvailable: true,
    toppings: [],
  },
  
  // SANDWICHES
  {
    _id: 'sw1',
    name: 'Veg.grill Sandwich',
    description: '',
    price: 75,
    image: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2022/03/veg-grilled-sandwich-recipe-500x500.jpg',
    category: 'sandwiches',
    isVegetarian: true,
    isAvailable: true
  },
  {
    _id: 'sw2',
    name: 'Green Veg Sandwich',
    description: '',
    price: 105,
    image: 'https://ministryofcurry.com/wp-content/uploads/2020/06/chutney-sandwich-8.jpg',
    category: 'sandwiches',
    isVegetarian: true,
    isAvailable: true
  },
  {
    _id: 'sw3',
    name: 'Cheese Sandwich',
    description: '',
    price: 110,
    image: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2024/05/veg-cheese-sandwich-recipe.jpg',
    category: 'sandwiches',
    isVegetarian: true,
    isAvailable: true
  },
  {
    _id: 'sw4',
    name: 'Veggy Sandwich',
    description: '',
    price: 120,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvuiP77_T3mBTH_6AXJrAQsjtDU3Gl2-f1qg&s',
    category: 'sandwiches',
    isVegetarian: true,
    isAvailable: true
  },
  {
    _id: 'sw5',
    name: 'Achari Sandwich',
    description: '',
    price: 120,
    image: 'https://static.wixstatic.com/media/4aff5c_2fea2315cd224eb4853ed537893a56b1~mv2.png/v1/fill/w_980,h_552,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/4aff5c_2fea2315cd224eb4853ed537893a56b1~mv2.png',
    category: 'sandwiches',
    isVegetarian: true,
    isAvailable: true
  },
  {
    _id: 'sw6',
    name: 'Tikki Sandwich',
    description: '',
    price: 130,
    image: 'https://i.pinimg.com/564x/31/fc/b8/31fcb8276dcce15e94273ea139e07a3c.jpg',
    category: 'sandwiches',
    isVegetarian: true,
    isAvailable: true
  },
  {
    _id: 'sw7',
    name: 'Makhni Sandwich',
    description: '',
    price: 130,
    image: 'https://paprikapie.com/wp-content/uploads/2024/09/6f4973436f34cb994a27fd9508eef8c3.jpg',
    category: 'sandwiches',
    isVegetarian: true,
    isAvailable: true
  },
  
  // SIDE ORDER
  {
    _id: 'so1',
    name: 'Hot Parcel',
    description: '',
    price: 39,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz_5OmJe0N2VWUAQq2oDYQ2g6LqPUegey03g&s',
    category: 'sides',
    isVegetarian: true,
    isAvailable: true
  },
  {
    _id: 'so2',
    name: 'French Fries',
    description: '',
    price: 99,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8ae8p5fO5SDVCFj-xEWTJaECdaCkzSx0jsA&s',
    category: 'sides',
    isVegetarian: true,
    isAvailable: true
  },
  {
    _id: 'so3',
    name: 'Garlic Bread With Cheese Dip',
    description: '',
    price: 110,
    image: 'https://www.chefkunalkapur.com/wp-content/uploads/2021/06/Garlic-Bread-4-1300x731.jpg?v=1623507039',
    category: 'sides',
    isVegetarian: true,
    isAvailable: true
  },
  {
    _id: 'so4',
    name: 'Stuffed Garlic Bread',
    description: '',
    price: 120,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFAG53qZSvTyYjJXLaY2lpGP66LMBenVFZ7Q&s',
    category: 'sides',
    isVegetarian: true,
    isAvailable: true
  },
  {
    _id: 'so5',
    name: 'Veg. Red Pasta',
    description: '',
    price: 120,
    image: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2023/05/red-sauce-pasta-recipe.jpg',
    category: 'sides',
    isVegetarian: true,
    isAvailable: true
  },
  {
    _id: 'so6',
    name: 'Veg. White Pasta',
    description: '',
    price: 120,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQopypTxjoKdA1yHPcTSnh5Dj2xLPg8pVdgpw&s',
    category: 'sides',
    isVegetarian: true,
    isAvailable: true
  },
  {
    _id: 'so7',
    name: 'Mix Sauce Pasta',
    description: '',
    price: 150,
    image: 'https://simplegraytshirt.com/wp-content/uploads/2024/05/pink-sauce-pasta-featured-image.jpg',
    category: 'sides',
    isVegetarian: true,
    isAvailable: true
  },
  {
    _id: 'so8',
    name: 'Veg Calzone Packet',
    description: '',
    price: 120,
    image: 'https://wereview.in/wp-content/uploads/2014/11/photo-2-11-e1415438272444.jpg',
    category: 'sides',
    isVegetarian: true,
    isAvailable: true
  },
  {
    _id: 'so9',
    name: 'Choclava Cake',
    description: '',
    price: 99,
    image: 'https://preppykitchen.com/wp-content/uploads/2022/03/Chocolate-Lava-Cake-Recipe.jpg',
    category: 'sides',
    isVegetarian: true,
    isAvailable: true
  },
  {
    _id: 'so10',
    name: 'Cheese Dip',
    description: '',
    price: 30,
    image: 'https://www.cookingclassy.com/wp-content/uploads/2018/01/3-ingredient-cheese-dip-3.jpg',
    category: 'sides',
    isVegetarian: true,
    isAvailable: true
  },
  {
    _id: 'so11',
    name: 'Jalapeno Dip',
    description: '',
    price: 30,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqrL3PmQVOXgJYsWyqP36R1fRqrvS7UC3FTA&s',
    category: 'sides',
    isVegetarian: true,
    isAvailable: true
  },
  
  // EXTRA OPTIONS
  {
    _id: 'ex2',
    name: 'Extra Cheese - Medium',
    description: 'Add extra cheese to your medium pizza',
    price: 50,
    category: 'extras',
    subcategory: 'extra_cheese',
    isVegetarian: true,
    isAvailable: true,
    isAddon: true,
    forSize: 'medium'
  },
  {
    _id: 'ex3',
    name: 'Extra Cheese - Large',
    description: 'Add extra cheese to your large pizza',
    price: 70,
    category: 'extras',
    subcategory: 'extra_cheese',
    isVegetarian: true,
    isAvailable: true,
    isAddon: true,
    forSize: 'large'
  },
  {
    _id: 'ex4',
    name: 'Cheese Burst - Small',
    description: 'Make your small pizza with cheese burst crust',
    price: 60,
    category: 'extras',
    subcategory: 'cheese_burst',
    isVegetarian: true,
    isAvailable: true,
    isAddon: true,
    forSize: 'small'
  },
  {
    _id: 'ex5',
    name: 'Cheese Burst - Medium',
    description: 'Make your medium pizza with cheese burst crust',
    price: 90,
    category: 'extras',
    subcategory: 'cheese_burst',
    isVegetarian: true,
    isAvailable: true,
    isAddon: true,
    forSize: 'medium'
  },
  {
    _id: 'ex6',
    name: 'Cheese Burst - Large',
    description: 'Make your large pizza with cheese burst crust',
    price: 120,
    category: 'extras',
    subcategory: 'cheese_burst',
    isVegetarian: true,
    isAvailable: true,
    isAddon: true,
    forSize: 'large'
  },
  {
    _id: 'ex7',
    name: 'Extra Toppings - Small',
    description: 'Add extra toppings to your small pizza',
    price: 30,
    category: 'extras',
    subcategory: 'extra_toppings',
    isVegetarian: true,
    isAvailable: true,
    isAddon: true,
    forSize: 'small'
  },
  {
    _id: 'ex8',
    name: 'Extra Toppings - Medium',
    description: 'Add extra toppings to your medium pizza',
    price: 40,
    category: 'extras',
    subcategory: 'extra_toppings',
    isVegetarian: true,
    isAvailable: true,
    isAddon: true,
    forSize: 'medium'
  },
  {
    _id: 'ex9',
    name: 'Extra Toppings - Large',
    description: 'Add extra toppings to your large pizza',
    price: 50,
    category: 'extras',
    subcategory: 'extra_toppings',
    isVegetarian: true,
    isAvailable: true,
    isAddon: true,
    forSize: 'large'
  },
  {
    _id: 'ex10',
    name: 'Ketchup',
    description: 'Add ketchup to your order',
    price: 2,
    category: 'extras',
    subcategory: 'condiments',
    isVegetarian: true,
    isAvailable: true,
    isAddon: true
  }
]; 