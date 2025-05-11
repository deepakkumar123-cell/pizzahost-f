import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { getOrders, updateOrderStatus } from '../utils/api';
import { samplePizzas } from '../assets/placeholder';
import EmailTester from '../components/EmailTester';
import './AdminPage.css';

const AdminPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filterStatus, setFilterStatus] = useState('all');
  
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        setLoading(true);

        // In development, use sample data
        if (import.meta.env.DEV) {
          // Create sample orders
          const sampleOrders = [
            {
              _id: 'order1',
              items: [
                {
                  pizza: {
                    _id: samplePizzas[0]._id,
                    name: samplePizzas[0].name,
                    price: samplePizzas[0].price,
                    image: samplePizzas[0].image,
                  },
                  quantity: 2,
                  price: samplePizzas[0].price,
                },
                {
                  pizza: {
                    _id: samplePizzas[1]._id,
                    name: samplePizzas[1].name,
                    price: samplePizzas[1].price,
                    image: samplePizzas[1].image,
                  },
                  quantity: 1,
                  price: samplePizzas[1].price,
                },
              ],
              totalAmount: samplePizzas[0].price * 2 + samplePizzas[1].price,
              deliveryAddress: {
                street: '123 Main St',
                city: 'New York',
                state: 'NY',
                zipCode: '10001',
                phone: '123-456-7890',
              },
              paymentMethod: 'COD',
              paymentStatus: 'Pending',
              orderStatus: 'Placed',
              specialInstructions: 'Please ring the doorbell.',
              createdAt: new Date(Date.now() - 3600000).toISOString(),
            },
            {
              _id: 'order2',
              items: [
                {
                  pizza: {
                    _id: samplePizzas[2]._id,
                    name: samplePizzas[2].name,
                    price: samplePizzas[2].price,
                    image: samplePizzas[2].image,
                  },
                  quantity: 1,
                  price: samplePizzas[2].price,
                },
              ],
              totalAmount: samplePizzas[2].price,
              deliveryAddress: {
                street: '456 Elm St',
                city: 'Chicago',
                state: 'IL',
                zipCode: '60007',
                phone: '987-654-3210',
              },
              paymentMethod: 'UPI',
              paymentStatus: 'Completed',
              orderStatus: 'Processing',
              specialInstructions: '',
              createdAt: new Date(Date.now() - 7200000).toISOString(),
            },
          ];
          
          // Simulate API delay
          setTimeout(() => {
            setOrders(sampleOrders);
            setLoading(false);
          }, 500);
          return;
        }
        
        // In production, fetch from API
        const response = await getOrders();
        setOrders(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching orders:', error);
        setError('Failed to load orders. Please try again later.');
        setLoading(false);
      }
    };
    
    fetchOrders();
  }, []);
  
  const handleStatusChange = async (orderId, orderStatus, paymentStatus) => {
    try {
      // In development, just update state
      if (import.meta.env.DEV) {
        setOrders(orders.map(order => 
          order._id === orderId 
            ? { ...order, orderStatus, paymentStatus } 
            : order
        ));
        return;
      }
      
      // In production, send to API
      await updateOrderStatus(orderId, { orderStatus, paymentStatus });
      
      // Update order in state
      setOrders(orders.map(order => 
        order._id === orderId 
          ? { ...order, orderStatus, paymentStatus } 
          : order
      ));
    } catch (error) {
      console.error('Error updating order status:', error);
      alert('Failed to update order status');
    }
  };
  
  // Filter orders based on status
  const filteredOrders = filterStatus === 'all'
    ? orders
    : orders.filter(order => order.orderStatus.toLowerCase() === filterStatus);
  
  return (
    <div className="admin-page">
      <div className="container">
        <motion.h1 
          className="page-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Admin Dashboard
        </motion.h1>
        
        <motion.div
          className="admin-actions glass"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2>Order Management</h2>
          
          <div className="filter-controls">
            <label>Filter by Status:</label>
            <select 
              value={filterStatus} 
              onChange={(e) => setFilterStatus(e.target.value)}
              className="status-filter"
            >
              <option value="all">All Orders</option>
              <option value="placed">Placed</option>
              <option value="processing">Processing</option>
              <option value="in transit">In Transit</option>
              <option value="delivered">Delivered</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>
        </motion.div>
        
        <motion.div
          className="email-tester-container glass"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2>Email Service</h2>
          <EmailTester />
        </motion.div>
        
        {loading ? (
          <div className="spinner"></div>
        ) : error ? (
          <div className="error-message">{error}</div>
        ) : filteredOrders.length === 0 ? (
          <div className="no-orders-message glass">
            <h3>No orders found</h3>
            <p>There are no orders matching the selected filter.</p>
          </div>
        ) : (
          <motion.div 
            className="orders-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {filteredOrders.map(order => (
              <div key={order._id} className="order-card glass">
                <div className="order-header">
                  <div>
                    <h3>Order #{order._id.substring(order._id.length - 6)}</h3>
                    <p className="order-date">
                      {new Date(order.createdAt).toLocaleString()}
                    </p>
                  </div>
                  <div className={`order-status status ${order.orderStatus.toLowerCase().replace(' ', '-')}`}>
                    {order.orderStatus}
                  </div>
                </div>
                
                <div className="order-details">
                  <div className="order-section">
                    <h4>Items</h4>
                    {order.items.map((item, index) => (
                      <div key={index} className="order-item">
                        <div className="item-name">
                          {item.pizza.name} x {item.quantity}
                        </div>
                        <div className="item-price">₹{(item.price * item.quantity).toFixed(2)}</div>
                      </div>
                    ))}
                    <div className="order-total">
                      <span>Total:</span>
                      <span>₹{order.totalAmount.toFixed(2)}</span>
                    </div>
                  </div>
                  
                  <div className="order-section">
                    <h4>Customer Details</h4>
                    <div className="customer-address">
                      <p>{order.deliveryAddress.street}</p>
                      <p>{order.deliveryAddress.city}, {order.deliveryAddress.state} {order.deliveryAddress.zipCode}</p>
                      <p>Phone: {order.deliveryAddress.phone}</p>
                    </div>
                    
                    {order.specialInstructions && (
                      <div className="special-instructions">
                        <h5>Special Instructions:</h5>
                        <p>{order.specialInstructions}</p>
                      </div>
                    )}
                  </div>
                  
                  <div className="order-section">
                    <h4>Payment Information</h4>
                    <div className="payment-info">
                      <div className="payment-row">
                        <span>Method:</span>
                        <span>{order.paymentMethod}</span>
                      </div>
                      <div className="payment-row">
                        <span>Status:</span>
                        <span className={`status ${order.paymentStatus.toLowerCase()}`}>
                          {order.paymentStatus}
                        </span>
                      </div>
                    </div>
                    
                    {order.paymentMethod === 'COD' && order.paymentStatus !== 'Completed' && (
                      <button 
                        className="btn-small"
                        onClick={() => handleStatusChange(order._id, order.orderStatus, 'Completed')}
                      >
                        Mark as Paid
                      </button>
                    )}
                  </div>
                </div>
                
                <div className="order-actions">
                  <h4>Update Order Status</h4>
                  <div className="status-buttons">
                    <button 
                      className={`status-btn ${order.orderStatus === 'Processing' ? 'active' : ''}`}
                      onClick={() => handleStatusChange(order._id, 'Processing', order.paymentStatus)}
                      disabled={['Delivered', 'Cancelled'].includes(order.orderStatus)}
                    >
                      Processing
                    </button>
                    <button 
                      className={`status-btn ${order.orderStatus === 'In Transit' ? 'active' : ''}`}
                      onClick={() => handleStatusChange(order._id, 'In Transit', order.paymentStatus)}
                      disabled={['Delivered', 'Cancelled'].includes(order.orderStatus)}
                    >
                      In Transit
                    </button>
                    <button 
                      className={`status-btn ${order.orderStatus === 'Delivered' ? 'active' : ''}`}
                      onClick={() => handleStatusChange(order._id, 'Delivered', order.paymentStatus)}
                      disabled={['Delivered', 'Cancelled'].includes(order.orderStatus)}
                    >
                      Delivered
                    </button>
                    <button 
                      className={`status-btn cancel ${order.orderStatus === 'Cancelled' ? 'active' : ''}`}
                      onClick={() => handleStatusChange(order._id, 'Cancelled', order.paymentStatus)}
                      disabled={['Delivered', 'Cancelled'].includes(order.orderStatus)}
                    >
                      Cancel Order
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default AdminPage; 