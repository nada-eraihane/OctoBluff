import React from 'react';

const Input = ({ label, type = 'text', className = '', ...props }) => {
    return (
        <div className={`flex flex-col space-y-2 ${className}`}>
            {label && (
                <label className="text-sm font-poppins font-semibold text-cyan-primary tracking-wider uppercase">
                    {label}
                </label>
            )}
            <input
                type={type}
                className="
          w-full bg-bg-dark/50 border-2 border-purple-primary rounded-lg px-4 py-3
          text-white placeholder-text-gray/50 font-inter
          focus:outline-none focus:border-cyan-primary focus:shadow-[0_0_15px_#8B4FFF]
          transition-all duration-300
          disabled:opacity-50 disabled:cursor-not-allowed
        "
                {...props}
            />
        </div>
    );
};

export default Input;
