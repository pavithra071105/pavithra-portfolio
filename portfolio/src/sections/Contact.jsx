import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiCheck, FiLoader, FiMail, FiMapPin, FiPhone, FiGithub, FiLinkedin } from 'react-icons/fi';
import { fadeUp, staggerContainer } from '../animations/variants';
import SectionWrapper from '../components/SectionWrapper';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate API call - Replace with actual form submission service
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset after 3 seconds
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <FiMail />,
      title: 'Email',
      value: 'your.email@example.com', // Replace with your email
      href: 'mailto:your.email@example.com'
    },
    {
      icon: <FiPhone />,
      title: 'Phone',
      value: '+91 9876543210', // Replace with your phone number
      href: 'tel:+919876543210'
    },
    {
      icon: <FiMapPin />,
      title: 'Location',
      value: 'Coimbatore, Tamil Nadu',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: <FiGithub />,
      label: 'GitHub',
      href: 'https://github.com/yourusername', // Replace with your GitHub
      color: 'hover:bg-gray-800 dark:hover:bg-white hover:text-white dark:hover:text-gray-800'
    },
    {
      icon: <FiLinkedin />,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/yourusername', // Replace with your LinkedIn
      color: 'hover:bg-blue-600 hover:text-white'
    }
  ];

  return (
    <SectionWrapper id="contact" className="bg-gray-50 dark:bg-gray-900/50">
      <div className="text-center mb-12">
        <motion.h2
          variants={fadeUp}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Let's <span className="text-primary">Connect</span>
        </motion.h2>
        <motion.p
          variants={fadeUp}
          className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
        >
          Interested in collaborating or have questions about my work? Feel free to reach out!
        </motion.p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Contact Information */}
        <motion.div
          variants={staggerContainer}
          className="lg:col-span-1 space-y-8"
        >
          <motion.div variants={fadeUp} className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
              Contact Information
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Web Developer specializing in React.js, UI/UX Design, and scalable web applications.
            </p>
            
            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.title}
                  variants={fadeUp}
                  custom={index}
                  href={item.href}
                  className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl hover:shadow-lg transition-shadow group"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-gray-700 dark:text-gray-300">
                      {item.title}
                    </div>
                    <div className="text-gray-600 dark:text-gray-400 group-hover:text-primary transition-colors">
                      {item.value}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <motion.div variants={fadeUp} className="pt-4">
              <h4 className="text-lg font-medium mb-4 text-gray-700 dark:text-gray-300">
                Find me online
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-400 ${social.color} transition-all duration-300`}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          variants={staggerContainer}
          className="lg:col-span-2"
        >
          <motion.div variants={fadeUp} className="bg-white dark:bg-gray-800 rounded-2xl p-6 lg:p-8 shadow-xl">
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
              Send me a message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Email Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Your Name *
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Your Email *
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              {/* Message Input */}
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                  Your Message *
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.01 }}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                  placeholder="Hello! I'm interested in discussing a potential project..."
                />
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                disabled={status === 'loading'}
                className="relative w-full px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-medium shadow-lg hover:shadow-xl overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                {status === 'loading' && (
                  <motion.div
                    initial={{ x: '-100%' }}
                    animate={{ x: '100%' }}
                    transition={{ repeat: Infinity, duration: 1 }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  />
                )}

                <div className="flex items-center justify-center gap-2">
                  {status === 'loading' ? (
                    <>
                      <FiLoader className="animate-spin" />
                      Sending Message...
                    </>
                  ) : status === 'success' ? (
                    <>
                      <FiCheck />
                      Message Sent Successfully!
                    </>
                  ) : (
                    <>
                      <FiSend />
                      Send Message
                    </>
                  )}
                </div>
              </motion.button>

              {/* Status Message */}
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-lg"
                >
                  <p className="text-green-700 dark:text-green-400 text-center">
                    ✅ Thank you! I'll get back to you within 24-48 hours.
                  </p>
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-lg"
                >
                  <p className="text-red-700 dark:text-red-400 text-center">
                    ❌ Something went wrong. Please try again or contact me directly via email.
                  </p>
                </motion.div>
              )}
            </form>

            <motion.p
              variants={fadeUp}
              className="mt-6 text-sm text-gray-500 dark:text-gray-400 text-center"
            >
              I typically respond to all inquiries within 24 hours. Looking forward to connecting!
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
