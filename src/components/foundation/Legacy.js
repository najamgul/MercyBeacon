import React from 'react';
import { FaShieldAlt } from 'react-icons/fa';
import Section from '../ui/Section';
import Container from '../ui/Container';

const Legacy = () => {
    return (
        <Section bg="white" className="border-t border-gray-100">
            <Container>
                <div className="bg-[#e6f3f6] border-2 border-[#c7e2e8] rounded-2xl p-8 md:p-12 shadow-sm flex flex-col md:flex-row gap-8 items-start">
                    <div className="bg-white p-5 rounded-full shadow-md shrink-0 text-[#2c798e]">
                        <FaShieldAlt className="text-3xl" />
                    </div>
                    <div>
                        <h3 className="text-[#1f3249] text-2xl md:text-3xl font-bold mb-4">
                            Our Legacy (1988–Present)
                        </h3>
                        <p className="text-gray-700 text-lg leading-relaxed">
                            Roots trace back to <span className="font-semibold text-[#1f3249]">SHER Trust (1988)</span>, serving families with education support, relief, and wellbeing initiatives in Srinagar and beyond. MercyBeacon builds on this credibility with expanded programs and safeguards, continuing a decades-long tradition of service.
                        </p>
                    </div>
                </div>
            </Container>
        </Section>
    );
};

export default Legacy;
