import React from 'react';
import { clsx } from 'clsx';

export const Button = ({ children, onClick, variant = 'primary', size = 'md', className, ...props }) => {
  const baseStyles = "inline-flex items-center justify-center font-semibold transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-[#FF385C] text-white hover:bg-[#D9324E] shadow-sm",
    outline: "border border-gray-300 bg-white text-text-primary hover:border-black",
    ghost: "bg-transparent text-text-primary hover:bg-gray-100",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm rounded-lg",
    md: "px-6 py-3 text-base rounded-xl",
    lg: "px-8 py-4 text-lg rounded-2xl",
  };

  return (
    <button
      onClick={onClick}
      className={clsx(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
};
