import React from 'react';
import { FaQuoteLeft, FaBookReader, FaHeartbeat, FaHandsHelping, FaGlobe } from 'react-icons/fa';
import Section from '../ui/Section';
import Container from '../ui/Container';
import SectionHeader from '../ui/SectionHeader';
import Card from '../ui/Card';

const Hero = () => {
    return (
        <>
            {/* Hero Header */}
            <Section bg="navy" className="!py-20 relative overflow-hidden">
                <Container className="text-center relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">About MercyBeacon</h1>
                    <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300">
                        Lighting lives through healthcare, education, and dignity.
                    </p>
                </Container>
            </Section>

            <Section>
                <Container className="space-y-20">
                    {/* Background Story */}
                    <div className="max-w-4xl mx-auto">
                        <SectionHeader
                            eyebrow="Who We Are"
                            title="Background"
                            description="The story of our mission, origin, and commitment to service."
                            className="!mb-8"
                        />
                        <div className="w-24 h-1 bg-[#2c798e] mx-auto rounded-full mb-12"></div>

                        <div className="space-y-8 text-lg text-gray-700 leading-relaxed text-left">
                            <p>
                                MercyBeacon International Foundation is a mission-driven, nonprofit organization established to create meaningful and lasting change in communities by focusing on three critical pillars: quality education, cutting-edge healthcare, and community outreach initiatives. The foundation was created with the belief that sustainable development begins when people are empowered with knowledge, protected through timely medical support, and uplifted through compassionate, community-cantered services.
                            </p>

                            <div className="bg-[#e6f3f6] border-l-4 border-[#2c798e] p-8 rounded-r-xl my-8">
                                <p className="italic text-[#1f3249] font-medium text-lg">
                                    The name <span className="text-[#2c798e] font-bold">“MercyBeacon”</span> represents the foundation’s guiding philosophy—mercy as the heart of service and a beacon as a symbol of hope, direction, and transformation.
                                </p>
                            </div>

                            <p>
                                The Foundation aims to serve as a trusted support system for individuals and families who face barriers to education, healthcare access, and social inclusion. With a strong commitment to equity and human dignity, the foundation designs initiatives that are inclusive, impactful, and scalable across diverse regions.
                            </p>

                            <div className="space-y-8 mt-12">
                                {/* Education */}
                                <div className="flex flex-col md:flex-row gap-6 items-start">
                                    <div className="mt-1 p-4 bg-blue-50 text-blue-600 rounded-xl shrink-0 shadow-sm">
                                        <FaBookReader size={28} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-[#1f3249] mb-3">Education as a Foundation</h3>
                                        <p>
                                            Education is the foundation of opportunity and long-term independence. MercyBeacon works to strengthen learning outcomes by supporting access to quality schooling, teacher and student development programs, and educational resources for underserved populations. The foundation prioritizes initiatives that reduce dropouts, improve literacy and learning skills, and enable young people to pursue higher education and career readiness. By addressing systemic gaps in educational access, MercyBeacon seeks to ensure that every individual has the tools to succeed.
                                        </p>
                                    </div>
                                </div>

                                {/* Healthcare */}
                                <div className="flex flex-col md:flex-row gap-6 items-start">
                                    <div className="mt-1 p-4 bg-teal-50 text-teal-600 rounded-xl shrink-0 shadow-sm">
                                        <FaHeartbeat size={28} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-[#1f3249] mb-3">A Healthier Community</h3>
                                        <p>
                                            MercyBeacon recognizes that a healthier community is a stronger community. The foundation actively supports programs designed to enhance healthcare outcomes through preventive care, awareness campaigns, health service support, and advanced scientific research with a focus on modern, evidence-based approaches. MercyBeacon is committed to promoting early screening, timely diagnosis, and access to world-class healthcare services, especially for communities that experience limited medical infrastructure or affordability challenges. Through partnerships with healthcare professionals and institutions, the foundation aims to expand access to innovative healthcare solutions that improve patient care and long-term wellness.
                                        </p>
                                    </div>
                                </div>

                                {/* Outreach */}
                                <div className="flex flex-col md:flex-row gap-6 items-start">
                                    <div className="mt-1 p-4 bg-orange-50 text-orange-600 rounded-xl shrink-0 shadow-sm">
                                        <FaHandsHelping size={28} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-[#1f3249] mb-3">Serving Where Needs Are Greatest</h3>
                                        <p>
                                            At its core, MercyBeacon exists to serve people where the needs are greatest. The foundation conducts ongoing community outreach initiatives such as health camps, awareness drives, support for vulnerable families, and emergency response efforts when required. MercyBeacon’s outreach programs are designed not only to provide immediate relief but also to build lasting resilience by connecting individuals with resources, opportunities, and support networks.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <Card className="bg-gray-50 border-gray-200 mt-12 !p-8">
                                <h3 className="text-xl font-semibold text-[#1f3249] mb-4 flex items-center gap-3">
                                    <FaGlobe className="text-[#2c798e] text-2xl" /> Community-First Mindset
                                </h3>
                                <p>
                                    MercyBeacon operates with a community-first mindset, ensuring that every initiative is shaped by real needs and measurable outcomes. The foundation aims to create sustainable change by supporting long-term capacity-building—strengthening local systems, enabling partnerships, and investing in programs that continue delivering benefits over time. Through its integrated approach to education, healthcare, and outreach, MercyBeacon International Foundation stands as a symbol of hope and progress, committed to building healthier lives, brighter futures, and stronger communities across the globe.
                                </p>
                            </Card>
                        </div>
                    </div>

                    {/* Mission & Vision */}
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-[#1f3249] text-white p-10 rounded-3xl shadow-xl transform hover:-translate-y-1 transition duration-300">
                            <h3 className="text-2xl font-bold mb-6 border-b border-gray-600 pb-4">Our Mission</h3>
                            <p className="text-lg opacity-90 leading-relaxed font-light">
                                To improve lives by advancing quality education, delivering accessible and innovative healthcare solutions, and strengthening communities through impactful outreach initiatives that promote equity, well-being, and long-term social progress.
                            </p>
                        </div>
                        <div className="bg-[#2c798e] text-white p-10 rounded-3xl shadow-xl transform hover:-translate-y-1 transition duration-300">
                            <h3 className="text-2xl font-bold mb-6 border-b border-white/20 pb-4">Our Vision</h3>
                            <p className="text-lg opacity-90 leading-relaxed font-light">
                                A world where every individual has access to quality education, cutting-edge healthcare, and compassionate community support to live a healthier, dignified, and empowered life.
                            </p>
                        </div>
                    </div>

                    {/* Founder's Message */}
                    <div className="bg-gray-50 border-2 border-gray-100 rounded-3xl p-8 md:p-16 relative overflow-hidden">
                        <FaQuoteLeft className="text-[#c7e2e8] text-6xl md:text-8xl absolute top-8 left-8 opacity-40" />

                        <div className="relative z-10 max-w-4xl mx-auto">
                            <SectionHeader
                                title="Founder’s Message"
                                className="!mb-10"
                            />
                            <div className="w-16 h-1 bg-[#2c798e] mx-auto rounded-full mb-10"></div>

                            <div className="space-y-6 text-lg text-gray-700 leading-relaxed font-light">
                                <p>
                                    We believe that true progress begins when people are empowered with education, protected through quality healthcare, and supported through compassionate outreach. Our foundation was created to serve as a guiding light for communities that face challenges due to limited access to resources, opportunities, and services.
                                </p>
                                <p>
                                    The name MercyBeacon reflects our purpose – mercy in action and hope in direction. We are committed to driving long-term impact by supporting quality education for every learner, promoting innovative and accessible healthcare solutions, and strengthening communities through outreach initiatives that uplift lives with dignity and respect. This journey is not possible without collective effort. We welcome supporters, partners, and volunteers who share the vision of creating a world where every individual has the chance to live healthier, learn better, and move forward with confidence.
                                </p>
                                <p className="font-medium text-[#1f3249] text-xl">
                                    Together, we can build stronger communities and a brighter future for all.
                                </p>
                            </div>

                            <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col items-center">
                                <cite className="not-italic font-bold text-[#2c798e] text-2xl">
                                    &mdash; Founder
                                </cite>
                                <span className="text-gray-500 font-medium mt-1 uppercase tracking-wide text-sm">MercyBeacon International Foundation</span>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>
        </>
    );
};

export default Hero;
