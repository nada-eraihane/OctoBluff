import React from 'react';

const variants = {
    primary: 'bg-purple-primary hover:opacity-90 text-white shadow-[0_0_10px_rgba(139,79,255,0.5)] hover:shadow-[0_0_20px_rgba(139,79,255,0.8)]',
    accent: 'bg-transparent border-2 border-cyan-primary text-cyan-primary hover:bg-cyan-primary/10 shadow-[0_0_5px_#00D9FF] hover:shadow-[0_0_15px_#00D9FF] animate-pulse-cyan',
    danger: 'bg-pink-primary hover:bg-red-600 text-white shadow-[0_0_10px_rgba(255,0,110,0.5)]',
};

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
    return (
        <button
            className={`
        px-6 py-3 rounded-lg font-poppins font-bold tracking-wider transition-all duration-300
        active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed
        ${variants[variant]}
        ${className}
      `}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
