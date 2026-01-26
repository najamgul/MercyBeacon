import React from 'react';

const Section = ({ children, id = '', className = '', bg = 'white' }) => {
    const bgColors = {
        white: 'bg-white',
        gray: 'bg-gray-50',
        navy: 'bg-[#1f3249]',
        teal: 'bg-[#e6f3f6]',
    };

    return (
        <section
            id={id}
            className={`py-16 md:py-20 border-b border-gray-100 last:border-0 ${bgColors[bg] || bg} ${className}`}
        >
            {children}
        </section>
    );
};

export default Section;
