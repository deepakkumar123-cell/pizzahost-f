import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './TermsOfServicePage.css'; // Reusing the same CSS as TermsOfService

const RefundPolicyPage = () => {
  return (
    <>
      <Helmet>
        <title>Refund Policy | PizzaHost</title>
        <meta name="description" content="PizzaHost's refund policy explains our process for refunds, returns, and cancellations. Understand your rights as a customer." />
        <meta name="keywords" content="PizzaHost refund, pizza order cancellation, food delivery refund, refund policy" />
        <link rel="canonical" href="https://pizzahost.com/refund-policy" />
        <meta property="og:title" content="Refund Policy | PizzaHost" />
        <meta property="og:description" content="Learn about PizzaHost's refund and cancellation policies. Find out how and when you can request a refund for your order." />
        <meta property="og:url" content="https://pizzahost.com/refund-policy" />
        <meta property="og:type" content="website" />
      </Helmet>

      <motion.div 
        className="legal-page refund-page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="legal-hero">
          <div className="container">
            <motion.h1
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Refund Policy
            </motion.h1>
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="subtitle"
            >
              Last Updated: July 1, 2023
            </motion.p>
          </div>
        </div>

        <div className="container">
          <div className="legal-content">
            <motion.div 
              className="legal-section"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2>1. Introduction</h2>
              <p>
                At PizzaHost, customer satisfaction is our top priority. This Refund Policy outlines when and how you can 
                request refunds, cancellations, or replacements for orders placed through our website, mobile application, 
                or by phone.
              </p>
              <p>
                Please read this policy carefully. By placing an order with PizzaHost, you agree to the terms outlined 
                in this Refund Policy.
              </p>
            </motion.div>

            <motion.div 
              className="legal-section"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2>2. Order Cancellation</h2>
              <p>
                <strong>Before Preparation:</strong> If you wish to cancel your order, you may do so without any charges 
                if the order has not yet entered preparation. Orders can be canceled through our website, mobile app, or by 
                calling our customer service at +91 9560776095.
              </p>
              <p>
                <strong>During Preparation:</strong> Once your order enters the preparation phase, cancellation may not be 
                possible. However, we will assess each situation on a case-by-case basis and may provide a partial refund 
                or store credit at our discretion.
              </p>
              <p>
                <strong>After Dispatch:</strong> Orders that have already been dispatched for delivery cannot be canceled. 
                Please refer to the refund section for queries related to order issues after delivery.
              </p>
            </motion.div>

            <motion.div 
              className="legal-section"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2>3. Refund Eligibility</h2>
              <p>
                You may be eligible for a refund under the following circumstances:
              </p>
              <ul>
                <li>
                  <strong>Order Not Delivered:</strong> If your order was not delivered within a reasonable timeframe 
                  from the estimated delivery time (usually 60 minutes after the estimated time).
                </li>
                <li>
                  <strong>Incorrect Order:</strong> If you received items that are substantially different from what 
                  you ordered.
                </li>
                <li>
                  <strong>Quality Issues:</strong> If the quality of the food is significantly below our standards 
                  (undercooked, spoiled, or contaminated).
                </li>
                <li>
                  <strong>Damaged Items:</strong> If items are severely damaged during delivery.
                </li>
                <li>
                  <strong>Missing Items:</strong> If items are missing from your order.
                </li>
              </ul>
            </motion.div>

            <motion.div 
              className="legal-section"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2>4. Refund Process</h2>
              <p>
                To request a refund, please follow these steps:
              </p>
              <ol>
                <li>
                  Contact our customer service within 24 hours of receiving your order. You can reach us at:
                  <ul>
                    <li>Phone: +91 9560776095</li>
                    <li>Email: support@pizzahost.com</li>
                    <li>In-app or website: Through the "Order History" section</li>
                  </ul>
                </li>
                <li>
                  Provide your order details (order number, date, and time of order).
                </li>
                <li>
                  Explain the issue in detail and, if possible, provide photographic evidence of the problem 
                  (for quality or damage issues).
                </li>
                <li>
                  Our customer service team will review your request and may ask for additional information if needed.
                </li>
                <li>
                  Once your request is approved, we will process the refund within 5-7 business days.
                </li>
              </ol>
            </motion.div>

            <motion.div 
              className="legal-section"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2>5. Refund Options</h2>
              <p>
                When a refund is approved, you may choose from the following options:
              </p>
              <ul>
                <li>
                  <strong>Full Refund:</strong> The amount will be returned to your original payment method.
                </li>
                <li>
                  <strong>Partial Refund:</strong> If only part of your order was affected by the issue.
                </li>
                <li>
                  <strong>Store Credit:</strong> We can add store credit to your account, which includes an additional 
                  10% bonus amount.
                </li>
                <li>
                  <strong>Replacement:</strong> In some cases, we may offer to deliver a replacement item instead of a refund.
                </li>
              </ul>
            </motion.div>

            <motion.div 
              className="legal-section"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2>6. Processing Time</h2>
              <p>
                Refunds will be processed within 5-7 business days after approval. The time it takes for the refund to 
                appear in your account depends on your payment method and financial institution:
              </p>
              <ul>
                <li>Credit/Debit Cards: 2-7 business days</li>
                <li>Digital Wallets: 1-3 business days</li>
                <li>UPI Payments: 1-3 business days</li>
                <li>Store Credit: Immediately available in your account</li>
              </ul>
            </motion.div>

            <motion.div 
              className="legal-section"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2>7. Non-Refundable Items</h2>
              <p>
                Please note that the following are generally not eligible for refunds:
              </p>
              <ul>
                <li>
                  Delivery charges, unless the issue was related to the delivery service.
                </li>
                <li>
                  Customized items that were prepared according to your specific instructions.
                </li>
                <li>
                  Promotional or discounted items, except at our discretion.
                </li>
                <li>
                  Orders reported after the 24-hour window, except in extraordinary circumstances.
                </li>
              </ul>
            </motion.div>

            <motion.div 
              className="legal-section"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2>8. Special Circumstances</h2>
              <p>
                <strong>Force Majeure:</strong> In cases of events beyond our control (natural disasters, extreme weather, 
                civil unrest, etc.), normal refund policies may be adjusted. We will communicate any changes in such situations.
              </p>
              <p>
                <strong>Technical Issues:</strong> If a technical issue on our platform results in an incorrect order or 
                duplicate charge, we will provide a full refund once the issue is verified.
              </p>
            </motion.div>

            <motion.div 
              className="legal-section"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2>9. Dispute Resolution</h2>
              <p>
                If you are not satisfied with the resolution provided by our customer service team, you can request an 
                escalation of your case to our management team. Please send your request to management@pizzahost.com with 
                your order details and previous communication history.
              </p>
            </motion.div>

            <motion.div 
              className="legal-section"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2>10. Changes to Refund Policy</h2>
              <p>
                We may update our Refund Policy from time to time. Any changes will be posted on this page with an updated 
                "Last Updated" date. We encourage you to review this policy periodically for any changes.
              </p>
            </motion.div>

            <motion.div 
              className="legal-section"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2>11. Contact Us</h2>
              <p>
                If you have any questions about our Refund Policy, please <Link to="/contact">contact us</Link>:
              </p>
              <ul>
                <li>By email: support@pizzahost.com</li>
                <li>By phone: +91 9560776095</li>
                <li>By mail: Shop G-15, Inderlok Complex, Krishna Nagar, Near NB Colony, Pallavpuram, Meerut</li>
              </ul>
            </motion.div>

            <motion.div 
              className="legal-links"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <p>See also:</p>
              <Link to="/terms-of-service" className="btn-link">Terms of Service</Link>
              <Link to="/privacy-policy" className="btn-link">Privacy Policy</Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default RefundPolicyPage; 