import React from 'react';

const SectionHeader = ({ eyebrow, title, description, className = '', align = 'center', light = false }) => {
    const alignClass = {
        left: 'text-left',
        center: 'text-center',
        right: 'text-right',
    };

    const textColor = light ? 'text-white' : 'text-gray-900';
    const descColor = light ? 'text-gray-300' : 'text-gray-600';

    return (
        <div className={`mb-12 ${alignClass[align]} ${className}`}>
            {eyebrow && (
                <p className="text-sm font-bold text-[#2c798e] uppercase tracking-wide mb-3">
                    {eyebrow}
                </p>
            )}
            <h2 className={`text-3xl md:text-4xl font-bold ${textColor} mb-4 leading-tight`}>
                {title}
            </h2>
            {description && (
                <p className={`text-lg md:text-xl ${descColor} max-w-3xl mx-auto leading-relaxed`}>
                    {description}
                </p>
            )}
        </div>
    );
};

export default SectionHeader;
