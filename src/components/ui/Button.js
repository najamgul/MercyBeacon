import React from 'react';
import Link from 'next/link';

const Button = ({
    children,
    href,
    variant = 'primary',
    className = '',
    ...props
}) => {
    const baseStyles = "inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";

    const variants = {
        primary: "bg-[#2c798e] text-white hover:bg-[#255f71] shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 focus:ring-[#2c798e]",
        secondary: "bg-white text-[#2c798e] border-2 border-[#2c798e] hover:bg-[#e6f3f6] focus:ring-[#2c798e]",
        white: "bg-white text-[#2c798e] hover:bg-gray-100 shadow-md focus:ring-white",
        outline: "bg-transparent border-2 border-white text-white hover:bg-white/10 focus:ring-white",
        ghost: "bg-transparent text-[#2c798e] hover:bg-[#e6f3f6] hover:text-[#255f71] px-4",
    };

    const styles = `${baseStyles} ${variants[variant] || variants.primary} ${className}`;

    if (href) {
        return (
            <Link href={href} className={styles} {...props}>
                {children}
            </Link>
        );
    }

    return (
        <button className={styles} {...props}>
            {children}
        </button>
    );
};

export default Button;
