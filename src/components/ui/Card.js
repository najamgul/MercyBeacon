import React from 'react';

const Card = ({ children, className = '', hover = true, border = true }) => {
    return (
        <div
            className={`
        bg-white rounded-2xl p-6 md:p-8 
        ${border ? 'border border-gray-100' : ''}
        ${hover ? 'transition-all duration-300 hover:shadow-lg hover:-translate-y-1' : ''}
        shadow-sm
        ${className}
      `}
        >
            {children}
        </div>
    );
};

export default Card;
