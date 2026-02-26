import { motion } from 'framer-motion';

const ScaleIn = ({
  children,
  delay = 0,
  duration = 0.5,
  initialScale = 0.8,
  className = '',
  ...props
}) => {
  const variants = {
    hidden: {
      opacity: 0,
      scale: initialScale,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={variants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default ScaleIn;
