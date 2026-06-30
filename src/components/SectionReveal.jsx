import { motion } from 'framer-motion';

/**
 * Enhanced scroll reveal component powered by Framer Motion.
 */
export default function SectionReveal({ children, className = '', delay = 0, y = 30, duration = 0.6 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
