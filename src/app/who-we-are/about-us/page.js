import React from 'react';

export const metadata = {
    title: 'About Us | Who We Are | MercyBeacon',
    description: 'Learn about MercyBeacon International Foundation.',
};

export default function AboutUsPage() {
    return (
        <main className="min-h-screen pt-16 bg-white">
            <div className="bg-[#1f3249] text-white py-20 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 relative z-10">About Us</h1>
                <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 relative z-10">
                    Combining compassion, equity, and service to transform lives.
                </p>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-lg text-gray-700 leading-relaxed">
                <p className="mb-6">
                    MercyBeacon International Foundation is an organization dedicated to transforming lives through quality education, cutting-edge healthcare, and impactful community outreach initiatives. Built on the values of compassion, equity, and service, MercyBeacon works to create sustainable change by expanding access to learning opportunities, strengthening healthcare delivery, and supporting underserved communities with timely resources and support systems.
                </p>
                <p>
                    Through partnerships, innovative programs, and community-first solutions, MercyBeacon International Foundation continues to serve as a beacon of hope - helping individuals and families build healthier, brighter, and more empowered futures.
                </p>
            </div>
        </main>
    );
}
