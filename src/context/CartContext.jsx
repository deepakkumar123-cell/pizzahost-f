import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  // Load cart items from localStorage on initial load
  useEffect(() => {
    const storedCart = localStorage.getItem('pizzaCart');
    if (storedCart) {
      try {
        const parsedCart = JSON.parse(storedCart);
        setCartItems(parsedCart);
      } catch (error) {
        console.error('Error parsing cart from localStorage:', error);
        localStorage.removeItem('pizzaCart');
      }
    }
  }, []);

  // Update localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem('pizzaCart', JSON.stringify(cartItems));
    
    // Calculate total amount
    const total = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setTotalAmount(total);
  }, [cartItems]);

  // Add item to cart
  const addToCart = (item) => {
    setCartItems((prevItems) => {
      // Find existing item with the same ID and size
      const existingItemIndex = prevItems.findIndex(
        (cartItem) => cartItem.id === item.id && cartItem.size === item.size
      );

      if (existingItemIndex !== -1) {
        // Item already exists with the same size, update quantity
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + item.quantity,
        };
        return updatedItems;
      } else {
        // Item doesn't exist with this size, add it
        return [...prevItems, { ...item, quantity: item.quantity || 1 }];
      }
    });
  };

  // Remove item from cart
  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  // Update item quantity
  const updateQuantity = (itemId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(itemId);
      return;
    }

    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity } : item
      )
    );
  };

  // Clear cart
  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem('pizzaCart');
  };

  // Save delivery address to localStorage
  const saveDeliveryAddress = (address) => {
    localStorage.setItem('deliveryAddress', JSON.stringify(address));
  };

  // Get delivery address from localStorage
  const getDeliveryAddress = () => {
    const address = localStorage.getItem('deliveryAddress');
    return address ? JSON.parse(address) : null;
  };

  const value = {
    cartItems,
    totalAmount,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    saveDeliveryAddress,
    getDeliveryAddress,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}; 