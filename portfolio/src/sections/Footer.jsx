import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiHeart } from 'react-icons/fi';
import { fadeUp } from '../animations/variants';

const Footer = () => {
  const socialLinks = [
    { icon: FiGithub, href: '#', label: 'GitHub' },
    { icon: FiLinkedin, href: '#', label: 'LinkedIn' },
    { icon: FiTwitter, href: '#', label: 'Twitter' }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      variants={fadeUp}
      className="py-8 px-6 border-t border-gray-200 dark:border-gray-800"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <div className="text-gray-600 dark:text-gray-400 text-center md:text-left">
            © {currentYear} Portfolio. All rights reserved.
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.9 }}
                href={social.href}
                aria-label={social.label}
                className="p-2 text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>

          {/* Made with love */}
          <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
            Made with
            <FiHeart className="text-red-500 animate-pulse" />
            by Me
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;