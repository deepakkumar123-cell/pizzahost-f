// Comprehensive API proxy for PizzaHost
// This handles both order and menu operations

import axios from 'axios';

// The actual backend API URL
const BACKEND_API = 'https://pizzahost-b.vercel.app/api';

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization'
  );

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Get the path from the request URL
  const { url } = req;
  const path = url.replace(/^\/api\/order-menu/, '');
  
  try {
    console.log(`Proxying ${req.method} request to ${BACKEND_API}${path}`);
    
    // Create the config for the axios request
    const config = {
      method: req.method,
      url: `${BACKEND_API}${path}`,
      headers: {
        'Content-Type': 'application/json',
      },
    };
    
    // Add request body for POST, PUT, PATCH
    if (['POST', 'PUT', 'PATCH'].includes(req.method)) {
      config.data = req.body;
    }
    
    // Make the request to the backend
    const response = await axios(config);
    
    // Return the response
    res.status(response.status).json(response.data);
  } catch (error) {
    console.error('API Proxy Error:', error.message);
    
    // Send appropriate error response
    const status = error.response?.status || 500;
    const errorData = error.response?.data || { error: 'Internal Server Error' };
    
    res.status(status).json({
      ...errorData,
      proxyError: error.message
    });
  }
} 