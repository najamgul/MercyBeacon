import React from 'react';

export const metadata = {
    title: 'Vision & Mission | Who We Are | MercyBeacon',
    description: 'Our vision and mission for a better world.',
};

export default function VisionMissionPage() {
    return (
        <main className="min-h-screen pt-16 bg-white">
            <div className="bg-[#1f3249] text-white py-20 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 relative z-10">Vision & Mission</h1>
                <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 relative z-10">
                    Our guiding north stars.
                </p>
            </div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-[#2c798e] text-white p-10 rounded-2xl shadow-lg flex flex-col justify-center">
                        <h2 className="text-3xl font-bold mb-6 border-b border-white/20 pb-4">Vision</h2>
                        <p className="text-xl leading-relaxed font-light">
                            A world where every individual has access to quality education, cutting-edge healthcare, and compassionate community support to live a healthier, dignified, and empowered life.
                        </p>
                    </div>

                    <div className="bg-gray-50 border-2 border-gray-200 p-10 rounded-2xl shadow-lg flex flex-col justify-center">
                        <h2 className="text-3xl font-bold text-[#1f3249] mb-6 border-b border-gray-200 pb-4">Mission</h2>
                        <p className="text-xl text-gray-700 leading-relaxed">
                            To improve lives by advancing quality education, delivering accessible and innovative healthcare solutions, and strengthening communities through impactful outreach initiatives that promote equity, well-being, and long-term social progress.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
