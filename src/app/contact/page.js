import React from 'react';
import ContactSection from '../../components/ContactSection';

export const metadata = {
    title: 'Contact Us | MercyBeacon International Foundation',
    description: 'Get in touch with MercyBeacon to request support, volunteer, or partner with us.',
};

export default function ContactPage() {
    return (
        <main className="min-h-screen pt-16">
            <div className="bg-[#1f3249] text-white py-20 px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
                <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300">
                    We are here to help. Reach out to us for support, partnerships, or general inquiries.
                </p>
            </div>
            <ContactSection />
        </main>
    );
}
