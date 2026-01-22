import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiMenu, FiX } from 'react-icons/fi';
import { useScrollSpy } from '../hooks/useScrollSpy';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Navigation items
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' }
  ];

  const activeSection = useScrollSpy(navItems.map(item => item.id));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#223546]/95 backdrop-blur-md shadow-lg border-b border-[#2c4158]/50' 
          : 'bg-[#223546]/90 backdrop-blur-sm'
      }`}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo/Brand */}
            <div className="flex-shrink-0">
              <Link
                to="home"
                smooth={true}
                duration={500}
                className="text-xl font-semibold text-white cursor-pointer hover:text-[#38bdf8] transition-colors"
              >
                PAVITHRA 
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center">
              <ul className="flex space-x-1">
                {navItems.map((item) => (
                  <li key={item.id} className="nav-item">
                    <Link
                      to={item.id}
                      spy={true}
                      smooth={true}
                      duration={500}
                      offset={-80}
                      className={`nav-link px-4 py-2.5 rounded-md text-sm font-medium cursor-pointer transition-all duration-200 ${
                        activeSection === item.id
                          ? 'text-[#38bdf8] bg-[#38bdf8]/10'
                          : 'text-[#cbd5e1] hover:text-white hover:bg-[#2c4158]/50'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-[#cbd5e1] hover:text-white hover:bg-[#2c4158]/50 transition-colors"
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu - White background with Gunmetal blue text */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden bg-white border-t border-gray-200 shadow-2xl"
            >
              <div className="px-4 pt-4 pb-6 space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.id}
                    to={item.id}
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-4 py-3.5 rounded-lg text-lg font-medium cursor-pointer transition-all duration-300 ${
                      activeSection === item.id
                        ? 'text-[#223546] font-bold bg-blue-50 border-l-4 border-[#223546]'  // Gunmetal blue text with blue tint background
                        : 'text-gray-700 hover:text-[#223546] hover:bg-gray-50 hover:border-l-4 hover:border-gray-300'  // Gray text, Gunmetal blue on hover
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;