import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

const SectionWrapper = ({ children, id, className = '' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section
      id={id}
      ref={ref}
      className={`min-h-screen py-20 px-6 ${className}`}
    >
      {prefersReducedMotion ? (
        <div className="container mx-auto max-w-6xl">
          {children}
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="container mx-auto max-w-6xl"
        >
          {children}
        </motion.div>
      )}
    </section>
  );
};

export default SectionWrapper;