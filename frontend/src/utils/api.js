import axios from 'axios';

// API base URL configuration with fallback options
const API_URL_OPTIONS = {
  primary: 'https://pizzahost-b.vercel.app/api',
  fallback: '/api' // Relative URL for proxying through frontend hosting
};

// Start with primary API URL
let currentApiUrl = API_URL_OPTIONS.primary;
let hasFailedOnce = false;

console.log('API URL initially configured as:', currentApiUrl);

// Create axios instance with debugging
const api = axios.create({
  baseURL: currentApiUrl,
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 15000, // 15 second timeout
  withCredentials: false // Don't send cookies cross-domain
});

// Function to update the base URL
const updateBaseUrl = (newUrl) => {
  console.log(`Switching API URL to: ${newUrl}`);
  currentApiUrl = newUrl;
  api.defaults.baseURL = newUrl;
};

// Add request interceptor for debugging
api.interceptors.request.use(
  config => {
    console.log('API Request:', config.method.toUpperCase(), config.url, config.data);
    return config;
  },
  error => {
    console.error('API Request Error:', error);
    return Promise.reject(error);
  }
);

// Add response interceptor for debugging and fallback handling
api.interceptors.response.use(
  response => {
    console.log('API Response:', response.status, response.data);
    return response;
  },
  error => {
    console.error('API Response Error:', error.response?.status, error.response?.data || error.message);
    
    // Check if this is a CORS or network error and we haven't tried the fallback yet
    if ((error.code === 'ERR_NETWORK' || error.message === 'Network Error') && 
        !hasFailedOnce && 
        currentApiUrl === API_URL_OPTIONS.primary) {
      
      console.log('Detected network/CORS error. Switching to fallback API URL');
      hasFailedOnce = true;
      updateBaseUrl(API_URL_OPTIONS.fallback);
      
      // Retry the request with the new base URL
      const retryConfig = error.config;
      retryConfig.baseURL = currentApiUrl;
      return axios(retryConfig);
    }
    
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
    // Enhanced debugging for response structure
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
    const response = await api.post('/orders', orderData);
    console.log('Order created successfully:', response.data);
    return response.data;
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