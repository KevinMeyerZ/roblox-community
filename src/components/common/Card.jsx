import { forwardRef } from 'react';
import './Card.css';

const Card = forwardRef(({
  children,
  variant = 'default',
  hover = false,
  clickable = false,
  className = '',
  ...props
}, ref) => {
  const baseStyles = 'card';
  const variantStyles = `card-${variant}`;
  const hoverStyles = hover ? 'card-hover' : '';
  const clickableStyles = clickable ? 'card-clickable' : '';

  return (
    <div
      ref={ref}
      className={`${baseStyles} ${variantStyles} ${hoverStyles} ${clickableStyles} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
});

Card.displayName = 'Card';

export default Card;
