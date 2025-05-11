import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './ThemeColorPicker.css';

const ThemeColorPicker = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [primaryColor, setPrimaryColor] = useState('#ff5252');
  
  const colorOptions = [
    { name: 'Red', value: '#ff5252' },
    { name: 'Blue', value: '#2196f3' },
    { name: 'Green', value: '#4caf50' },
    { name: 'Purple', value: '#9c27b0' },
    { name: 'Orange', value: '#ff9800' }
  ];
  
  useEffect(() => {
    const savedColor = localStorage.getItem('primaryColor');
    if (savedColor) {
      setPrimaryColor(savedColor);
      document.documentElement.style.setProperty('--primary-color', savedColor);
      
      // Set RGB values for the primary color
      const r = parseInt(savedColor.substring(1, 3), 16);
      const g = parseInt(savedColor.substring(3, 5), 16);
      const b = parseInt(savedColor.substring(5, 7), 16);
      document.documentElement.style.setProperty('--primary-color-rgb', `${r}, ${g}, ${b}`);
      
      // Calculate darker shade (70% of original brightness)
      const darkColor = adjustBrightness(savedColor, -30);
      document.documentElement.style.setProperty('--primary-dark', darkColor);
    }
  }, []);
  
  const adjustBrightness = (hex, percent) => {
    // Convert hex to RGB
    let r = parseInt(hex.substring(1, 3), 16);
    let g = parseInt(hex.substring(3, 5), 16);
    let b = parseInt(hex.substring(5, 7), 16);
    
    // Adjust brightness
    r = Math.max(0, Math.min(255, r + (r * percent / 100)));
    g = Math.max(0, Math.min(255, g + (g * percent / 100)));
    b = Math.max(0, Math.min(255, b + (b * percent / 100)));
    
    // Convert back to hex
    return '#' + ((1 << 24) + (Math.round(r) << 16) + (Math.round(g) << 8) + Math.round(b)).toString(16).slice(1);
  };
  
  const changeColor = (color) => {
    setPrimaryColor(color);
    document.documentElement.style.setProperty('--primary-color', color);
    
    // Set RGB values for the primary color
    const r = parseInt(color.substring(1, 3), 16);
    const g = parseInt(color.substring(3, 5), 16);
    const b = parseInt(color.substring(5, 7), 16);
    document.documentElement.style.setProperty('--primary-color-rgb', `${r}, ${g}, ${b}`);
    
    // Calculate darker shade
    const darkColor = adjustBrightness(color, -30);
    document.documentElement.style.setProperty('--primary-dark', darkColor);
    
    localStorage.setItem('primaryColor', color);
  };
  
  return (
    <div className="theme-picker">
      <motion.button 
        className="theme-toggle-btn"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Toggle theme picker"
      >
        🎨
      </motion.button>
      
      <motion.div 
        className="color-options"
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ 
          opacity: isOpen ? 1 : 0, 
          scale: isOpen ? 1 : 0.8,
          y: isOpen ? 0 : 20,
          pointerEvents: isOpen ? 'auto' : 'none'
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="color-options-header">
          <h3>Theme Colors</h3>
          <button 
            className="close-btn"
            onClick={() => setIsOpen(false)}
            aria-label="Close theme picker"
          >
            ✕
          </button>
        </div>
        <div className="color-swatches">
          {colorOptions.map((color) => (
            <motion.button
              key={color.value}
              className={`color-swatch ${primaryColor === color.value ? 'active' : ''}`}
              style={{ backgroundColor: color.value }}
              onClick={() => changeColor(color.value)}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              aria-label={`Select ${color.name} theme`}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ThemeColorPicker; 