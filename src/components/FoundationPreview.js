import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import Section from './ui/Section';
import Container from './ui/Container';
import Button from './ui/Button';

const FoundationPreview = () => {
    return (
        <Section bg="navy" className="relative overflow-hidden">
            {/* Background Pattern (Optional) */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#2c798e] opacity-10 rounded-full -ml-24 -mb-24 pointer-events-none"></div>

            <Container className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
                <div className="max-w-2xl text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Discover MercyBeacon Foundation</h2>
                    <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                        Learn about our vision, core values, and the flagship programs driving change in healthcare, education, and community support.
                    </p>
                    <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-8 text-sm md:text-base">
                        <div className="flex items-center gap-2">
                            <span className="w-2.5 h-2.5 bg-[#2c798e] rounded-full"></span>
                            <span className="text-gray-200">Compassion in Service</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-2.5 h-2.5 bg-[#2c798e] rounded-full"></span>
                            <span className="text-gray-200">Equity & Inclusion</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-2.5 h-2.5 bg-[#2c798e] rounded-full"></span>
                            <span className="text-gray-200">World-class Research</span>
                        </div>
                    </div>
                </div>

                <Button
                    href="/about"
                    variant="primary"
                    className="whitespace-nowrap px-8 py-4 text-lg w-full md:w-auto"
                >
                    Are You Ready? Explore More <FaArrowRight className="ml-2" />
                </Button>
            </Container>
        </Section>
    );
};

export default FoundationPreview;
