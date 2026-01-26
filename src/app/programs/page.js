import React from 'react';
import FlagshipPrograms from '../../components/foundation/FlagshipPrograms';
import FocusAreas from '../../components/foundation/FocusAreas';

export const metadata = {
    title: 'Our Programs | MercyBeacon International Foundation',
    description: 'Explore our flagship programs and key focus areas designed to empower communities through education, healthcare, and outreach.',
};

export default function ProgramsPage() {
    return (
        <main className="min-h-screen pt-16">
            <div className="bg-[#1f3249] text-white py-20 px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Programs</h1>
                <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300">
                    Targeted initiatives designed to deliver meaningful impact where it matters most.
                </p>
            </div>
            <FocusAreas />
            <FlagshipPrograms />
        </main>
    );
}
