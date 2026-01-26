import React from 'react';
import Hero from '../../components/foundation/Hero';
import CoreValues from '../../components/foundation/CoreValues';
import Legacy from '../../components/foundation/Legacy';
import Leadership from '../../components/foundation/Leadership';

export const metadata = {
    title: 'About Us | MercyBeacon International Foundation',
    description: 'Learn about MercyBeacon International Foundation’s mission to light lives through healthcare, education, and dignity.',
};

export default function AboutPage() {
    return (
        <main className="min-h-screen pt-16">
            <Hero />
            <Legacy />
            <CoreValues />
            <Leadership />
        </main>
    );
}
