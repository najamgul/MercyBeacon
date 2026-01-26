import React from 'react';
import {
    FaHandHoldingHeart,
    FaBalanceScale,
    FaCheckCircle,
    FaStar,
    FaUsers,
    FaHandshake,
    FaLeaf,
    FaMicroscope
} from 'react-icons/fa';
import Section from '../ui/Section';
import Container from '../ui/Container';
import SectionHeader from '../ui/SectionHeader';
import Card from '../ui/Card';

const CoreValues = () => {
    const values = [
        {
            title: "Compassion in Service",
            description: "Serving humanity with kindness, respect, and empathy.",
            icon: FaHandHoldingHeart,
            color: "bg-red-50 text-red-600 border-red-100"
        },
        {
            title: "Equity & Inclusion",
            description: "Ensuring fair access to education, healthcare, and support for all.",
            icon: FaBalanceScale,
            color: "bg-blue-50 text-blue-600 border-blue-100"
        },
        {
            title: "Integrity & Transparency",
            description: "Upholding trust through ethical and accountable actions.",
            icon: FaCheckCircle,
            color: "bg-green-50 text-green-600 border-green-100"
        },
        {
            title: "Excellence & Innovation",
            description: "Promoting high-quality, modern, and effective solutions.",
            icon: FaStar,
            color: "bg-yellow-50 text-yellow-600 border-yellow-100"
        },
        {
            title: "Community Empowerment",
            description: "Strengthening individuals and communities for long-term growth.",
            icon: FaUsers,
            color: "bg-purple-50 text-purple-600 border-purple-100"
        },
        {
            title: "Collaboration & Partnership",
            description: "Working with stakeholders to expand reach and impact.",
            icon: FaHandshake,
            color: "bg-indigo-50 text-indigo-600 border-indigo-100"
        },
        {
            title: "Sustainable Impact",
            description: "Creating solutions that deliver lasting outcomes, not temporary relief.",
            icon: FaLeaf,
            color: "bg-teal-50 text-teal-600 border-teal-100"
        },
        {
            title: "World class research",
            description: "Creating impactful medical research and advanced clinical trials in collaboration with our international collaborators.",
            icon: FaMicroscope,
            color: "bg-cyan-50 text-cyan-600 border-cyan-100"
        }
    ];

    return (
        <Section bg="gray">
            <Container>
                <SectionHeader
                    title="Core Values"
                    description="The principles that guide every action we take and every decision we make."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {values.map((value, index) => (
                        <Card
                            key={index}
                            className="bg-white border-gray-100 h-full flex flex-col"
                            hover={true}
                            border={true}
                        >
                            <div className={`w-14 h-14 rounded-xl ${value.color} flex items-center justify-center mb-6 border`}>
                                <value.icon className="text-2xl" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-3">{value.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed flex-1">
                                {value.description}
                            </p>
                        </Card>
                    ))}
                </div>
            </Container>
        </Section>
    );
};

export default CoreValues;
