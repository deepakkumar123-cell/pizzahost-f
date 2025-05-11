import axios from 'axios';

// API base URL configuration with multiple fallback options
const API_URL_OPTIONS = {
  // Option 1: Direct backend API (likely to have CORS issues)
  direct: 'https://pizzahost-b.vercel.app/api',
  // Option 2: Use frontend domain as proxy (preferred)
  proxy: '/api', 
  // Option 3: Last resort external CORS proxy (if needed)
  corsProxy: 'https://cors-anywhere.herokuapp.com/https://pizzahost-b.vercel.app/api'
};

// Always start with the proxy URL to avoid CORS issues
const currentApiUrl = API_URL_OPTIONS.proxy;

console.log('API URL set to:', currentApiUrl);

// Create axios instance with debugging
const api = axios.create({
  baseURL: currentApiUrl,
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 20000, // 20 second timeout
  withCredentials: false // Don't send cookies cross-domain
});

// Add request interceptor for debugging
api.interceptors.request.use(
  config => {
    console.log('API Request:', config.method.toUpperCase(), config.url, config.data);
    // For OPTIONS requests, make sure they have the right headers
    if (config.method.toUpperCase() === 'OPTIONS') {
      config.headers['Access-Control-Request-Method'] = 'POST, GET, OPTIONS, PUT, DELETE';
      config.headers['Access-Control-Request-Headers'] = 'Content-Type, Authorization';
    }
    return config;
  },
  error => {
    console.error('API Request Error:', error);
    return Promise.reject(error);
  }
);

// Add response interceptor for debugging
api.interceptors.response.use(
  response => {
    console.log('API Response:', response.status, response.data);
    return response;
  },
  error => {
    console.error('API Response Error:', error.response?.status, error.response?.data || error.message);
    return Promise.reject(error);
  }
);

// Generic error handler wrapper
const handleApiRequest = async (requestFn) => {
  try {
    return await requestFn();
  } catch (error) {
    // Log error details
    console.error('API request failed:', error.message, error);
    
    // Add additional context to the error
    if (!error.isHandled) {
      error.isHandled = true;
      error.friendlyMessage = 'Failed to communicate with the server. Please try again later.';
    }
    
    throw error;
  }
};

// Menu API calls
export const getMenuItems = async () => {
  return handleApiRequest(async () => {
    const response = await api.get('/menu');
    console.log('Menu items response structure:', {
      hasData: !!response.data,
      dataIsArray: Array.isArray(response.data),
      hasNestedData: response.data && !!response.data.data,
      nestedDataIsArray: response.data && Array.isArray(response.data.data)
    });
    return response;
  });
};

export const getMenuItem = async (id) => {
  return handleApiRequest(async () => {
    const response = await api.get(`/menu/${id}`);
    return response.data;
  });
};

// Order API calls
export const createOrder = async (orderData) => {
  return handleApiRequest(async () => {
    console.log('Creating order with data:', JSON.stringify(orderData, null, 2));
    
    try {
      // First try with our standard API instance
      const response = await api.post('/orders', orderData);
      console.log('Order created successfully:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error creating order with standard API:', error.message);
      
      // If that fails, try a direct fetch call as a last resort
      console.log('Attempting alternative fetch approach...');
      const fetchResponse = await fetch('/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData)
      });
      
      if (!fetchResponse.ok) {
        throw new Error(`Fetch failed with status: ${fetchResponse.status}`);
      }
      
      const data = await fetchResponse.json();
      console.log('Order created successfully with fetch:', data);
      return data;
    }
  });
};

export const getOrders = async () => {
  return handleApiRequest(async () => {
    const response = await api.get('/orders');
    return response.data;
  });
};

export const getOrder = async (id) => {
  return handleApiRequest(async () => {
    const response = await api.get(`/orders/${id}`);
    return response.data;
  });
};

export const updateOrderStatus = async (id, statusData) => {
  return handleApiRequest(async () => {
    const response = await api.put(`/orders/${id}`, statusData);
    return response.data;
  });
};

// Test email functionality
export const testEmail = async (email) => {
  return handleApiRequest(async () => {
    console.log('Sending test email to:', email);
    const response = await api.post('/orders/test-email', { email });
    console.log('Test email response:', response.data);
    return response.data;
  });
}; 