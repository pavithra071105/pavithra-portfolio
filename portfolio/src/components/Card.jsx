import { motion } from 'framer-motion';
import { forwardRef } from 'react';

const Card = forwardRef(({
  children,
  className = '',
  hoverable = true,
  ...props
}, ref) => {
  return (
    <motion.div
      ref={ref}
      whileHover={hoverable ? { y: -5, transition: { duration: 0.2 } } : {}}
      className={`
        bg-white dark:bg-gray-800 
        rounded-xl 
        shadow-lg hover:shadow-xl 
        transition-all duration-300 
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.div>
  );
});

Card.displayName = 'Card';

export default Card;