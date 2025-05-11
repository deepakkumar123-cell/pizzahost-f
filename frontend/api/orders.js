// Serverless API route for order creation
// This file will be deployed as /api/orders on Vercel

import axios from 'axios';

export default async function handler(req, res) {
  // Set CORS headers to allow requests from pizza-host.in
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', 'https://www.pizza-host.in');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization'
  );

  // Handle OPTIONS requests (preflight)
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // For POST requests only
  if (req.method === 'POST') {
    try {
      console.log('Proxying order to backend API:', req.body);
      
      // Forward the request to the actual backend API
      const response = await axios.post(
        'https://pizzahost-b.vercel.app/api/orders', 
        req.body,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      
      console.log('Order creation successful:', response.data);
      
      // Return the response from the backend
      res.status(200).json(response.data);
    } catch (error) {
      console.error('Error proxying order request:', error.message);
      res.status(500).json({ 
        error: 'Failed to create order',
        details: error.message,
        stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
      });
    }
  } else {
    // Method Not Allowed
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
} 