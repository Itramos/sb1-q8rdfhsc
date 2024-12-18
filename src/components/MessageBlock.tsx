import React from 'react';

interface MessageBlockProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'highlight';
}

export const MessageBlock: React.FC<MessageBlockProps> = ({ 
  children, 
  className = '',
  variant = 'primary'
}) => {
  const variantStyles = {
    primary: 'text-gray-700 font-medium',
    secondary: 'text-gray-600',
    highlight: 'text-pink-500 font-semibold'
  };

  return (
    <p className={`
      text-lg
      leading-relaxed
      transition-all
      duration-300
      hover:scale-105
      ${variantStyles[variant]}
      ${className}
    `}>
      {children}
    </p>
  );
};