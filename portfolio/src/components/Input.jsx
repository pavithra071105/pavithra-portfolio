import { motion } from 'framer-motion';
import { forwardRef, useState } from 'react';

const Input = forwardRef(({
  label,
  error,
  success,
  className = '',
  ...props
}, ref) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
          {label}
        </label>
      )}
      
      <motion.input
        ref={ref}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        animate={isFocused ? { scale: 1.01 } : { scale: 1 }}
        transition={{ duration: 0.2 }}
        className={`
          w-full px-4 py-3 
          rounded-lg border 
          bg-white dark:bg-gray-800
          text-gray-900 dark:text-white
          placeholder-gray-500 dark:placeholder-gray-400
          focus:outline-none focus:ring-2
          transition-all duration-200
          ${error 
            ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' 
            : success 
            ? 'border-green-500 focus:border-green-500 focus:ring-green-500/20' 
            : 'border-gray-300 dark:border-gray-700 focus:border-primary focus:ring-primary/20'
          }
          ${className}
        `}
        {...props}
      />
      
      {(error || success) && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`mt-2 text-sm ${error ? 'text-red-600' : 'text-green-600'}`}
        >
          {error || success}
        </motion.p>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;