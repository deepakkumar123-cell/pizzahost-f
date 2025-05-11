import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './TermsOfServicePage.css';

const TermsOfServicePage = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service | PizzaHost</title>
        <meta name="description" content="Terms and conditions for using PizzaHost's services. Please read our terms of service before ordering or using our website." />
        <meta name="keywords" content="PizzaHost terms, pizza delivery terms, terms and conditions, service agreement" />
        <link rel="canonical" href="https://pizzahost.com/terms-of-service" />
        <meta property="og:title" content="Terms of Service | PizzaHost" />
        <meta property="og:description" content="Read PizzaHost's terms of service and conditions for using our website and ordering services." />
        <meta property="og:url" content="https://pizzahost.com/terms-of-service" />
        <meta property="og:type" content="website" />
      </Helmet>

      <motion.div 
        className="legal-page terms-page"
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
              Terms of Service
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
                Welcome to PizzaHost. These Terms of Service govern your use of our website, services, 
                mobile applications, and all content and functionality accessible through our platform
                (collectively, the "Service").
              </p>
              <p>
                By accessing or using the Service, you agree to be bound by these Terms. If you do not 
                agree to these Terms, please do not use our Service.
              </p>
            </motion.div>

            <motion.div 
              className="legal-section"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2>2. Use of Service</h2>
              <p>
                You may use our Service only for lawful purposes and in accordance with these Terms.
                You agree not to use our Service:
              </p>
              <ul>
                <li>In any way that violates any applicable laws or regulations.</li>
                <li>To engage in any conduct that restricts or inhibits anyone's use or enjoyment of the Service.</li>
                <li>To impersonate or attempt to impersonate PizzaHost or a PizzaHost employee, another user, or any other person or entity.</li>
                <li>To engage in any other conduct that could damage, disable, overburden, or impair the Service or interfere with any other party's use of the Service.</li>
              </ul>
            </motion.div>

            <motion.div 
              className="legal-section"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2>3. Accounts</h2>
              <p>
                When you create an account with us, you must provide information that is accurate, complete, and current at all times. 
                Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account.
              </p>
              <p>
                You are responsible for safeguarding the password that you use to access the Service and for any activities 
                or actions under your password. You agree not to disclose your password to any third party. You must notify us 
                immediately upon becoming aware of any breach of security or unauthorized use of your account.
              </p>
            </motion.div>

            <motion.div 
              className="legal-section"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2>4. Ordering and Delivery</h2>
              <p>
                All orders placed through our Service are subject to acceptance and availability. We reserve the right to
                refuse or cancel any order for any reason at any time.
              </p>
              <p>
                Delivery times are estimates and are not guaranteed. Factors such as weather, traffic, and high order volumes 
                may affect delivery times. We will make reasonable efforts to notify you of any significant delays.
              </p>
              <p>
                You are responsible for providing accurate delivery information. PizzaHost is not responsible for orders 
                delayed or delivered to incorrect addresses due to customer error.
              </p>
            </motion.div>

            <motion.div 
              className="legal-section"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2>5. Pricing and Payment</h2>
              <p>
                All prices listed on our Service are in INR (Indian Rupees) and are subject to change without notice. 
                We make every effort to ensure that our prices are accurate, but errors may occur.
              </p>
              <p>
                If we discover an error in the price of items you have ordered, we will inform you as soon as possible
                and give you the option of reconfirming your order at the correct price or canceling it.
              </p>
              <p>
                Payment must be made at the time of ordering. We accept various payment methods as indicated on the checkout page.
              </p>
            </motion.div>

            <motion.div 
              className="legal-section"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2>6. Intellectual Property</h2>
              <p>
                The Service and its original content, features, and functionality are and will remain the exclusive property 
                of PizzaHost and its licensors. The Service is protected by copyright, trademark, and other laws.
              </p>
              <p>
                Our trademarks and trade dress may not be used in connection with any product or service without the prior 
                written consent of PizzaHost.
              </p>
            </motion.div>

            <motion.div 
              className="legal-section"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2>7. User Content</h2>
              <p>
                Our Service may allow you to post, link, store, share and otherwise make available certain information, 
                text, graphics, videos, or other material ("User Content"). You are responsible for the User Content that
                you post on or through the Service, including its legality, reliability, and appropriateness.
              </p>
              <p>
                By posting User Content on or through the Service, you grant us the right to use, modify, publicly perform,
                publicly display, reproduce, and distribute such content on and through the Service.
              </p>
            </motion.div>

            <motion.div 
              className="legal-section"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2>8. Limitation of Liability</h2>
              <p>
                In no event shall PizzaHost, nor its directors, employees, partners, agents, suppliers, or affiliates, 
                be liable for any indirect, incidental, special, consequential or punitive damages, including without 
                limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
              </p>
              <ul>
                <li>Your access to or use of or inability to access or use the Service;</li>
                <li>Any conduct or content of any third party on the Service;</li>
                <li>Any content obtained from the Service; and</li>
                <li>Unauthorized access, use or alteration of your transmissions or content.</li>
              </ul>
            </motion.div>

            <motion.div 
              className="legal-section"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2>9. Changes to Terms</h2>
              <p>
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision
                is material, we will try to provide at least 30 days' notice prior to any new terms taking effect.
              </p>
              <p>
                By continuing to access or use our Service after those revisions become effective, you agree to be bound 
                by the revised terms. If you do not agree to the new terms, please stop using the Service.
              </p>
            </motion.div>

            <motion.div 
              className="legal-section"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2>10. Contact Us</h2>
              <p>
                If you have any questions about these Terms, please <Link to="/contact">contact us</Link>.
              </p>
            </motion.div>

            <motion.div 
              className="legal-links"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <p>See also:</p>
              <Link to="/privacy-policy" className="btn-link">Privacy Policy</Link>
              <Link to="/refund-policy" className="btn-link">Refund Policy</Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default TermsOfServicePage; 