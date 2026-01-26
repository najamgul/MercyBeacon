import React from 'react';
import { FaBookReader, FaHeartbeat, FaHandsHelping, FaGlobe } from 'react-icons/fa';

export const metadata = {
    title: 'Background | Who We Are | MercyBeacon',
    description: 'The story and background of MercyBeacon International Foundation.',
};

export default function BackgroundPage() {
    return (
        <main className="min-h-screen pt-16 bg-white">
            <div className="bg-[#1f3249] text-white py-20 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 relative z-10">Our Background</h1>
                <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 relative z-10">
                    The story of our mission, origin, and commitment to service.
                </p>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-lg text-gray-700 leading-relaxed">
                <p className="mb-6">
                    MercyBeacon International Foundation is a mission-driven, nonprofit organization established to create meaningful and lasting change in communities by focusing on three critical pillars: quality education, cutting-edge healthcare, and community outreach initiatives. The foundation was created with the belief that sustainable development begins when people are empowered with knowledge, protected through timely medical support, and uplifted through compassionate, community-cantered services.
                </p>

                <div className="bg-[#e6f3f6] border-l-4 border-[#2c798e] p-6 rounded-r-xl my-8">
                    <p className="italic text-[#1f3249] font-medium">
                        The name <span className="text-[#2c798e] font-bold">“MercyBeacon”</span> represents the foundation’s guiding philosophy—mercy as the heart of service and a beacon as a symbol of hope, direction, and transformation.
                    </p>
                </div>

                <p className="mb-6">
                    The Foundation aims to serve as a trusted support system for individuals and families who face barriers to education, healthcare access, and social inclusion. With a strong commitment to equity and human dignity, the foundation designs initiatives that are inclusive, impactful, and scalable across diverse regions.
                </p>

                <div className="space-y-8 mt-12">
                    {/* Education */}
                    <div className="flex flex-col md:flex-row gap-4 items-start">
                        <div className="mt-1 p-3 bg-blue-50 text-blue-600 rounded-lg shrink-0">
                            <FaBookReader size={24} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-[#1f3249] mb-2">Education as a Foundation</h3>
                            <p>
                                Education is the foundation of opportunity and long-term independence. MercyBeacon works to strengthen learning outcomes by supporting access to quality schooling, teacher and student development programs, and educational resources for underserved populations. The foundation prioritizes initiatives that reduce dropouts, improve literacy and learning skills, and enable young people to pursue higher education and career readiness. By addressing systemic gaps in educational access, MercyBeacon seeks to ensure that every individual has the tools to succeed.
                            </p>
                        </div>
                    </div>

                    {/* Healthcare */}
                    <div className="flex flex-col md:flex-row gap-4 items-start">
                        <div className="mt-1 p-3 bg-teal-50 text-teal-600 rounded-lg shrink-0">
                            <FaHeartbeat size={24} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-[#1f3249] mb-2">A Healthier Community</h3>
                            <p>
                                MercyBeacon recognizes that a healthier community is a stronger community. The foundation actively supports programs designed to enhance healthcare outcomes through preventive care, awareness campaigns, health service support and advanced scientific research with a focus on modern, evidence-based approaches. MercyBeacon is committed to promoting early screening, timely diagnosis, and access to world class healthcare services, especially for communities that experience limited medical infrastructure or affordability challenges. Through partnerships with healthcare professionals and institutions, the foundation aims to expand access to innovative healthcare solutions that improve patient care and long-term wellness.
                            </p>
                        </div>
                    </div>

                    {/* Outreach */}
                    <div className="flex flex-col md:flex-row gap-4 items-start">
                        <div className="mt-1 p-3 bg-orange-50 text-orange-600 rounded-lg shrink-0">
                            <FaHandsHelping size={24} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-[#1f3249] mb-2">Serving Where Needs Are Greatest</h3>
                            <p>
                                At its core, MercyBeacon exists to serve people where the needs are greatest. The foundation conducts ongoing community outreach initiatives such as health camps, awareness drives, support for vulnerable families, and emergency response efforts when required. MercyBeacon’s outreach programs are designed not only to provide immediate relief but also to build lasting resilience by connecting individuals with resources, opportunities, and support networks.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 mt-12">
                    <h3 className="text-xl font-semibold text-[#1f3249] mb-4 flex items-center gap-2">
                        <FaGlobe className="text-[#2c798e]" /> Community-First Mindset
                    </h3>
                    <p>
                        MercyBeacon operates with a community-first mindset, ensuring that every initiative is shaped by real needs and measurable outcomes. The foundation aims to create sustainable change by supporting long-term capacity-building - strengthening local systems, enabling partnerships, and investing in programs that continue delivering benefits over time. Through its integrated approach to education, healthcare, and outreach, MercyBeacon International Foundation stands as a symbol of hope and progress, committed to building healthier lives, brighter futures, and stronger communities across the globe.
                    </p>
                </div>
            </div>
        </main>
    );
}
