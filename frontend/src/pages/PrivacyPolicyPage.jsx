import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './TermsOfServicePage.css'; // Reusing the same CSS as TermsOfService

const PrivacyPolicyPage = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | PizzaHost</title>
        <meta name="description" content="PizzaHost's privacy policy explains how we collect, use, and protect your personal information when you use our services or visit our website." />
        <meta name="keywords" content="PizzaHost privacy, pizza delivery privacy, data protection, privacy policy" />
        <link rel="canonical" href="https://pizzahost.com/privacy-policy" />
        <meta property="og:title" content="Privacy Policy | PizzaHost" />
        <meta property="og:description" content="Learn how PizzaHost collects, uses, and protects your personal information. Read our complete privacy policy." />
        <meta property="og:url" content="https://pizzahost.com/privacy-policy" />
        <meta property="og:type" content="website" />
      </Helmet>

      <motion.div 
        className="legal-page privacy-page"
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
              Privacy Policy
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
                At PizzaHost, we respect your privacy and are committed to protecting your personal data. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                when you visit our website, use our mobile application, or engage with our services.
              </p>
              <p>
                Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, 
                please do not access the site or use our services.
              </p>
            </motion.div>

            <motion.div 
              className="legal-section"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2>2. Information We Collect</h2>
              <p>
                We may collect several types of information from and about users of our website and services, including:
              </p>
              <ul>
                <li>
                  <strong>Personal Information:</strong> Name, postal address, email address, telephone number, 
                  payment details, and other identifiers that allow us to identify and contact you.
                </li>
                <li>
                  <strong>Order Information:</strong> Details about the products you order, frequency of orders, 
                  delivery preferences, and special instructions.
                </li>
                <li>
                  <strong>Usage Data:</strong> Information about how you use our website, mobile application, 
                  and services, including browsing patterns, page views, and interaction with features.
                </li>
                <li>
                  <strong>Device Information:</strong> Information about the device you use to access our services, 
                  including hardware model, operating system, and browser type.
                </li>
                <li>
                  <strong>Location Data:</strong> With your consent, we may collect and process information about your 
                  actual location to provide accurate delivery services.
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
              <h2>3. How We Use Your Information</h2>
              <p>
                We use the information we collect about you for various purposes, including:
              </p>
              <ul>
                <li>Processing and fulfilling your orders</li>
                <li>Managing your account and providing customer support</li>
                <li>Sending order confirmations, updates, and delivery notifications</li>
                <li>Improving our website, products, and services</li>
                <li>Personalizing your experience and delivering content relevant to your interests</li>
                <li>Sending promotional offers, marketing communications, and newsletters (if you have opted in)</li>
                <li>Responding to your comments, questions, and requests</li>
                <li>Preventing fraud and ensuring security of our platform</li>
                <li>Complying with legal obligations</li>
              </ul>
            </motion.div>

            <motion.div 
              className="legal-section"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2>4. Disclosure of Your Information</h2>
              <p>
                We may share your personal information with:
              </p>
              <ul>
                <li>
                  <strong>Service Providers:</strong> Third-party vendors who provide services on our behalf, 
                  such as payment processing, data analysis, email delivery, hosting services, and customer service.
                </li>
                <li>
                  <strong>Delivery Partners:</strong> To facilitate delivery of your orders.
                </li>
                <li>
                  <strong>Business Partners:</strong> With your consent, we may share your information with trusted 
                  business partners for marketing purposes.
                </li>
                <li>
                  <strong>Legal Requirements:</strong> We may disclose your information if required to do so by law 
                  or in response to valid requests by public authorities.
                </li>
                <li>
                  <strong>Business Transfers:</strong> If we're involved in a merger, acquisition, or sale of all or a 
                  portion of our assets, your information may be transferred as part of that transaction.
                </li>
              </ul>
              <p>
                We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties 
                unless we provide users with advance notice.
              </p>
            </motion.div>

            <motion.div 
              className="legal-section"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2>5. Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information from unauthorized 
                access, alteration, disclosure, or destruction. However, no method of transmission over the Internet 
                or method of electronic storage is 100% secure. Therefore, while we strive to use commercially acceptable 
                means to protect your personal information, we cannot guarantee its absolute security.
              </p>
            </motion.div>

            <motion.div 
              className="legal-section"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2>6. Cookies and Tracking Technologies</h2>
              <p>
                We use cookies and similar tracking technologies to track activity on our website and hold certain 
                information. Cookies are files with a small amount of data which may include an anonymous unique identifier. 
                You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
              </p>
              <p>
                We use cookies for:
              </p>
              <ul>
                <li>Keeping track of items in your cart</li>
                <li>Remembering your preferences and settings</li>
                <li>Understanding how you use our website</li>
                <li>Improving our services based on your behavior</li>
                <li>Authentication and security purposes</li>
              </ul>
            </motion.div>

            <motion.div 
              className="legal-section"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2>7. Your Rights</h2>
              <p>
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul>
                <li>The right to access personal information we hold about you</li>
                <li>The right to request correction of inaccurate data</li>
                <li>The right to request deletion of your data</li>
                <li>The right to restrict or object to processing of your data</li>
                <li>The right to data portability</li>
                <li>The right to withdraw consent where processing is based on consent</li>
              </ul>
              <p>
                To exercise these rights, please contact us using the details provided in the "Contact Us" section.
              </p>
            </motion.div>

            <motion.div 
              className="legal-section"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2>8. Children's Privacy</h2>
              <p>
                Our services are not intended for children under 13 years of age. We do not knowingly collect personal 
                information from children under 13. If you are a parent or guardian and you are aware that your child 
                has provided us with personal information, please contact us so that we can take necessary actions.
              </p>
            </motion.div>

            <motion.div 
              className="legal-section"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2>9. Changes to Our Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the 
                new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this 
                Privacy Policy periodically for any changes.
              </p>
              <p>
                Changes to this Privacy Policy are effective when they are posted on this page.
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
                If you have any questions about this Privacy Policy, please <Link to="/contact">contact us</Link>:
              </p>
              <ul>
                <li>By email: privacy@pizzahost.com</li>
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
              <Link to="/refund-policy" className="btn-link">Refund Policy</Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default PrivacyPolicyPage; 