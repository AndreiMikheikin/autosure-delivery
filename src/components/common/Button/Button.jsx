import React from 'react';
import './Button.scss';

export const Button = ({
  variant = 'primary',
  size = 'medium',
  className = '',
  children,
  ...props
}) => {
  return (
    <button
      className={`aam_button aam_button--${variant} aam_button--${size} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;