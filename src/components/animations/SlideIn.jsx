import { motion } from 'framer-motion';

const SlideIn = ({
  children,
  direction = 'left',
  delay = 0,
  duration = 0.5,
  distance = 50,
  className = '',
  stagger = false,
  staggerDelay = 0.1,
  ...props
}) => {
  const directions = {
    left: { x: -distance },
    right: { x: distance },
    up: { y: -distance },
    down: { y: distance },
  };

  const variants = {
    hidden: {
      opacity: 0,
      ...directions[direction],
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const containerVariants = stagger
    ? {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: delay,
          },
        },
      }
    : variants;

  const Component = stagger ? motion.div : motion.div;

  return (
    <Component
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={stagger ? containerVariants : variants}
      className={className}
      {...props}
    >
      {stagger
        ? children
        : children}
    </Component>
  );
};

export default SlideIn;
