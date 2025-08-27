import React from 'react';
import type { ButtonProps } from '../types/button';

const Button: React.FC<ButtonProps> = ({ 
  variant, 
  children, 
  onClick, 
  className = '',
  type = 'button'
}) => {
  const baseClasses = 'w-full py-3 px-6 rounded-lg font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantClasses = {
    primary: 'bg-purple-600 text-white hover:bg-purple-700 focus:ring-purple-500',
    secondary: 'bg-purple-100 text-gray-700 hover:bg-purple-200 focus:ring-purple-300'
  };

  return (
    <button
      type={type}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
