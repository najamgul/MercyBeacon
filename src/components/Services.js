import React from 'react';
import {
    FaUtensils,
    FaHeartbeat,
    FaBook,
    FaHandsHelping,
    FaArrowRight,
} from 'react-icons/fa';
import Section from './ui/Section';
import Container from './ui/Container';
import SectionHeader from './ui/SectionHeader';
import Card from './ui/Card';
import Button from './ui/Button';

const CONFIG = {
    title: 'Focus Areas',
    subtitle:
        'MercyBeacon International Foundation prioritizes education continuity, healthcare access, dignity for families, and community protection.',
    services: [
        {
            icon: <FaBook className="text-3xl" />,
            title: 'Education Support',
            description:
                'Keep students enrolled through fee support, learning continuity, and back-to-school essentials so poverty never blocks a child’s education.',
            buttonText: 'Sponsor Education',
            href: '#programs',
        },
        {
            icon: <FaHeartbeat className="text-3xl" />,
            title: 'Healthcare & Relief',
            description:
                'Help families cover medicines, diagnostics, and urgent medical needs while providing food and essential kits during hardship.',
            buttonText: 'Request Medical Support',
            href: '#support',
        },
        {
            icon: <FaHandsHelping className="text-3xl" />,
            title: 'Women & Family Support',
            description:
                'Protect dignity for vulnerable households through need-based assistance, girls’ education continuity, and dignified family support.',
            buttonText: 'Support Families',
            href: '#get-involved',
        },
        {
            icon: <FaUtensils className="text-3xl" />,
            title: 'Community Protection',
            description:
                'Advance prevention campaigns and public health advocacy, including awareness on food safety and social harm prevention.',
            buttonText: 'Join Community Protection',
            href: '#community-protection',
        },
    ],
};

const Services = () => {
    return (
        <Section id="focus-areas" bg="gray">
            <Container>
                <SectionHeader
                    title={CONFIG.title}
                    description={CONFIG.subtitle}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {CONFIG.services.map((service, index) => (
                        <Card
                            key={index}
                            className="flex flex-col h-full border-gray-200"
                            hover={true}
                            border={true}
                        >
                            <div className="text-[#2c798e] w-14 h-14 bg-[#e6f3f6] rounded-xl flex items-center justify-center mb-6">
                                {service.icon}
                            </div>

                            <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                {service.title}
                            </h3>

                            <p className="text-gray-600 mb-6 leading-relaxed text-sm flex-1">
                                {service.description}
                            </p>

                            <Button
                                href={service.href}
                                variant="secondary"
                                className="!text-sm !py-2 !px-4 self-start"
                            >
                                {service.buttonText} <FaArrowRight className="ml-2 text-xs" />
                            </Button>
                        </Card>
                    ))}
                </div>
            </Container>
        </Section>
    );
};

export default Services;
