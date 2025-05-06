import { useState } from 'react';
import { testEmail } from '../utils/api';
import './EmailTester.css';

const EmailTester = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    setError(null);

    try {
      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setError('Please enter a valid email address');
        setLoading(false);
        return;
      }

      const response = await testEmail(email);
      setResult(response);
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to test email service');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="email-tester glass">
      <h2>Email Service Tester</h2>
      <p>Test the email service by sending a test email to the specified address.</p>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="testEmail">Email Address</label>
          <input
            type="email"
            id="testEmail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email address to test"
            required
          />
        </div>

        <button type="submit" className="btn" disabled={loading}>
          {loading ? <div className="spinner-small"></div> : 'Send Test Email'}
        </button>
      </form>

      {error && (
        <div className="error-message">
          <p>{error}</p>
        </div>
      )}

      {result && (
        <div className="success-message">
          <h3>Test Email Sent Successfully!</h3>
          <p>A test email has been sent to {email}.</p>
          <p>Please check your inbox (and spam folder) to confirm receipt.</p>
        </div>
      )}
    </div>
  );
};

export default EmailTester; 