import React from 'react';
import Section from '../ui/Section';
import Container from '../ui/Container';
import SectionHeader from '../ui/SectionHeader';
import Card from '../ui/Card';

const Leadership = () => {
    const leaders = [
        {
            name: "Mufti Syed Ahmad Bukhari (Srinagar)",
            role: "Patron / Guidance",
            note: "Referenced publicly in connection with SHERT leadership and patronage.",
        },
        {
            name: "Hidayat Bukhari",
            role: "Community Relief & Advocacy",
            note: "Referenced for SHERT field work and public-facing writing.",
        },
    ];

    return (
        <Section bg="white">
            <Container>
                <SectionHeader
                    title="Leadership"
                    description="Guided by experienced leaders committed to community service and integrity."
                />

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {leaders.map((leader) => (
                        <Card
                            key={leader.name}
                            className="bg-white border text-center group"
                            hover={true}
                            border={true}
                        >
                            <div className="w-20 h-20 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-gray-400 group-hover:bg-[#e6f3f6] group-hover:text-[#2c798e] transition-colors">
                                {leader.name.charAt(0)}
                            </div>
                            <h3 className="text-[#1f3249] font-bold text-xl mb-1">{leader.name}</h3>
                            <p className="text-[#2c798e] font-semibold text-sm mb-4 uppercase tracking-wide">{leader.role}</p>
                            <p className="text-gray-600 italic">
                                &quot;{leader.note}&quot;
                            </p>
                        </Card>
                    ))}
                </div>
                <p className="text-gray-500 text-sm mt-8 text-center bg-gray-50 py-2 rounded-lg max-w-md mx-auto">
                    * Additional bios and photos to be updated upon confirmation.
                </p>
            </Container>
        </Section>
    );
};

export default Leadership;
