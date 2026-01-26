import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import Leadership from '../../../components/foundation/Leadership';

export const metadata = {
    title: 'Founder\'s Message | Who We Are | MercyBeacon',
    description: 'A message from our founder.',
};

export default function FoundersMessagePage() {
    return (
        <main className="min-h-screen pt-16 bg-white">
            <div className="bg-[#1f3249] text-white py-20 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 relative z-10">Founder&apos;s Message</h1>
                <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 relative z-10">
                    A word from the leadership.
                </p>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="bg-gray-50 border-2 border-gray-100 rounded-2xl p-8 md:p-16 relative">
                    <FaQuoteLeft className="text-[#c7e2e8] text-6xl absolute top-8 left-8 opacity-40" />

                    <div className="relative z-10 space-y-8 text-lg md:text-xl text-gray-700 leading-relaxed font-light font-serif">
                        <p>
                            We believe that true progress begins when people are empowered with education, protected through quality healthcare, and supported through compassionate outreach. Our foundation was created to serve as a guiding light for communities that face challenges due to limited access to resources, opportunities, and services.
                        </p>
                        <p>
                            The name MercyBeacon reflects our purpose - mercy in action and hope in direction. We are committed to driving long-term impact by supporting quality education for every learner, promoting innovative and accessible healthcare solutions, and strengthening communities through outreach initiatives that uplift lives with dignity and respect. This journey is not possible without collective effort. We welcome supporters, partners, and volunteers who share the vision of creating a world where every individual has the chance to live healthier, learn better, and move forward with confidence.
                        </p>
                        <p className="font-medium text-[#1f3249] not-italic sans-serif">
                            Together, we can build stronger communities and a brighter future for all.
                        </p>
                    </div>

                    <div className="relative z-10 mt-12 pt-8 border-t border-gray-200 flex flex-col items-center">
                        <cite className="not-italic font-bold text-[#2c798e] text-2xl">
                            &mdash; Founder
                        </cite>
                        <span className="text-gray-500 font-medium mt-1">MercyBeacon International Foundation</span>
                    </div>
                </div>

                <Leadership />
            </div>
        </main>
    );
}
