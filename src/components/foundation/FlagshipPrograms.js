import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import Section from '../ui/Section';
import Container from '../ui/Container';
import SectionHeader from '../ui/SectionHeader';
import Card from '../ui/Card';
import Button from '../ui/Button';

const FlagshipPrograms = () => {
    const programs = [
        {
            title: "BeaconEd Initiative",
            category: "Education",
            description: "Education access, scholarships, and school support to keep students in classrooms.",
        },
        {
            title: "MercyHealth Outreach",
            category: "Healthcare",
            description: "Health camps, awareness drives, and preventive care for underserved communities.",
        },
        {
            title: "Community Hope Network",
            category: "Community",
            description: "Relief support, family aid, and social upliftment for vulnerable households.",
        },
        {
            title: "Bright Futures Program",
            category: "Youth Empowerment",
            description: "Skill-building, mentorship, and youth empowerment to guide future leaders.",
        },
        {
            title: "Care & Dignity Drive",
            category: "Welfare",
            description: "Women wellness, child support, and senior care ensuring dignity for all.",
        },
        {
            title: "Research Initiative",
            category: "Innovation",
            description: "Cutting-edge AI/ML based research and clinical trials in collaboration with international partners.",
        },
    ];

    return (
        <Section bg="gray">
            <Container>
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div className="max-w-2xl">
                        <SectionHeader
                            title="Flagship Programs"
                            description="Targeted initiatives designed to deliver maximum impact in our core focus areas."
                            align="left"
                            className="!mb-0"
                        />
                    </div>
                    <Button href="/programs" variant="primary" className="whitespace-nowrap">
                        View All Programs
                    </Button>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {programs.map((program, index) => (
                        <Card
                            key={index}
                            className="bg-white overflow-hidden flex flex-col h-full !p-0 border-gray-200 group relative"
                            hover={true}
                            border={true}
                        >
                            <div className="h-1.5 bg-[#2c798e] w-full absolute top-0 left-0" />
                            <div className="p-8 flex flex-col h-full">
                                <span className="inline-block w-fit px-3 py-1 bg-[#e6f3f6] text-[#2c798e] text-xs font-bold uppercase tracking-wider rounded-full mb-4">
                                    {program.category}
                                </span>
                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#2c798e] transition-colors">
                                    {program.title}
                                </h3>
                                <p className="text-gray-600 mb-6 leading-relaxed flex-1">
                                    {program.description}
                                </p>
                                <Button href="#" variant="ghost" className="!p-0 !justify-start group-hover:gap-2">
                                    Learn More <FaArrowRight className="text-xs ml-1" />
                                </Button>
                            </div>
                        </Card>
                    ))}
                </div>
            </Container>
        </Section>
    );
};

export default FlagshipPrograms;
