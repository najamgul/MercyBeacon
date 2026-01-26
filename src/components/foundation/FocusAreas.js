import React from 'react';
import { FaGraduationCap, FaHeartbeat, FaHandHoldingHeart, FaChevronRight } from 'react-icons/fa';
import Section from '../ui/Section';
import Container from '../ui/Container';
import SectionHeader from '../ui/SectionHeader';
import Card from '../ui/Card';
import Button from '../ui/Button';

const FocusAreas = () => {
    const areas = [
        {
            title: "Quality Education",
            icon: FaGraduationCap,
            color: "text-blue-600 bg-blue-50 border-blue-100",
            items: [
                "Scholarships and student support programs",
                "School supply drives and learning material distribution",
                "Teacher development and learning enhancement initiatives",
                "Digital learning support and literacy improvement programs",
                "Career guidance and skill development for youth"
            ]
        },
        {
            title: "Cutting-Edge Healthcare",
            icon: FaHeartbeat,
            color: "text-teal-600 bg-teal-50 border-teal-100",
            items: [
                "Preventive health awareness and disease screening camps",
                "Early detection and timely referral initiatives",
                "Health education programs and wellness outreach",
                "Support for diagnostics and access to essential care",
                "Partnerships with hospitals, clinics, and medical experts",
                "Advanced research programs"
            ]
        },
        {
            title: "Community Outreach & Humanitarian Support",
            icon: FaHandHoldingHeart,
            color: "text-orange-600 bg-orange-50 border-orange-100",
            items: [
                "Community service programs for vulnerable families",
                "Emergency support and relief initiatives",
                "Women empowerment and child welfare programs",
                "Hygiene, nutrition, and well-being programs",
                "Support for senior citizens and underserved populations"
            ]
        }
    ];

    return (
        <Section bg="white">
            <Container>
                <SectionHeader
                    eyebrow="Our Work"
                    title="Key Focus Areas"
                />

                <div className="grid md:grid-cols-3 gap-8">
                    {areas.map((area, index) => (
                        <Card
                            key={index}
                            className="bg-white border rounded-2xl flex flex-col h-full group"
                            hover={true}
                            border={true}
                        >
                            <div className={`w-16 h-16 rounded-2xl ${area.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                <area.icon className="text-3xl" />
                            </div>

                            <h3 className="text-2xl font-bold text-gray-900 mb-6">{area.title}</h3>

                            <ul className="space-y-3 flex-1">
                                {area.items.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-700">
                                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#2c798e] flex-shrink-0" />
                                        <span className="text-sm leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-8 pt-6 border-t border-gray-100">
                                <Button
                                    href="#learn-more"
                                    variant="ghost"
                                    className="!p-0 !justify-start group-hover:gap-2"
                                >
                                    Learn more <FaChevronRight className="text-xs ml-1" />
                                </Button>
                            </div>
                        </Card>
                    ))}
                </div>
            </Container>
        </Section>
    );
};

export default FocusAreas;
