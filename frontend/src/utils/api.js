import axios from 'axios';

// API base URL configuration
const API_URL = 'https://pizzahost-b.vercel.app/api';

console.log('API URL configured as:', API_URL);

// Create axios instance with debugging
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
    'Origin': 'https://www.pizza-host.in'
  },
  withCredentials: true,
  timeout: 10000 // 10 second timeout
});

// Add request interceptor for debugging
api.interceptors.request.use(
  config => {
    // Ensure headers are set for every request
    config.headers['Content-Type'] = 'application/json';
    config.headers['Accept'] = 'application/json';
    config.headers['X-Requested-With'] = 'XMLHttpRequest';
    config.headers['Origin'] = 'https://www.pizza-host.in';
    
    console.log('API Request:', config.method.toUpperCase(), config.url, config.data);
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

// Menu API calls
export const getMenuItems = async () => {
  try {
    const response = await api.get('/menu');
    // Enhanced debugging for response structure
    console.log('Menu items response structure:', {
      hasData: !!response.data,
      dataIsArray: Array.isArray(response.data),
      hasNestedData: response.data && !!response.data.data,
      nestedDataIsArray: response.data && Array.isArray(response.data.data)
    });
    return response;
  } catch (error) {
    console.error('Error fetching menu items:', error);
    throw error;
  }
};

export const getMenuItem = async (id) => {
  try {
    const response = await api.get(`/menu/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching menu item ${id}:`, error);
    throw error;
  }
};

// Order API calls
export const createOrder = async (orderData) => {
  try {
    console.log('Creating order with data:', JSON.stringify(orderData, null, 2));
    const response = await api.post('/orders', orderData);
    console.log('Order created successfully:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error creating order:', error);
    console.error('Error details:', error.response?.data);
    if (error.response?.status === 400) {
      console.error('Bad request error - check the order data format');
    }
    throw error;
  }
};

export const getOrders = async () => {
  try {
    const response = await api.get('/orders');
    return response.data;
  } catch (error) {
    console.error('Error fetching orders:', error);
    throw error;
  }
};

export const getOrder = async (id) => {
  try {
    const response = await api.get(`/orders/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching order ${id}:`, error);
    throw error;
  }
};

export const updateOrderStatus = async (id, statusData) => {
  try {
    const response = await api.put(`/orders/${id}`, statusData);
    return response.data;
  } catch (error) {
    console.error(`Error updating order ${id}:`, error);
    throw error;
  }
};

// Test email functionality
export const testEmail = async (email) => {
  try {
    console.log('Sending test email to:', email);
    const response = await api.post('/orders/test-email', { email });
    console.log('Test email response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error testing email:', error);
    throw error;
  }
}; 