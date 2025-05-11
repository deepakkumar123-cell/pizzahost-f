// Simple test API route

export default function handler(req, res) {
  res.status(200).json({ 
    status: 'success',
    message: 'API proxy is working correctly', 
    timestamp: new Date().toISOString() 
  });
} 