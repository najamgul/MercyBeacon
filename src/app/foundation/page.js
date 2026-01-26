import React from 'react';
import Hero from '../../components/foundation/Hero';
import CoreValues from '../../components/foundation/CoreValues';
import FocusAreas from '../../components/foundation/FocusAreas';
import FlagshipPrograms from '../../components/foundation/FlagshipPrograms';
import Legacy from '../../components/foundation/Legacy';
import Leadership from '../../components/foundation/Leadership';

export const metadata = {
    title: 'About MercyBeacon International Foundation | Vision & Mission',
    description: 'Learn about MercyBeacon International Foundation’s mission to light lives through healthcare, education, and dignity. Explore our core values, focus areas, and flagship programs.',
};

export default function FoundationPage() {
    return (
        <main className="min-h-screen pt-16">
            <Hero />
            <Legacy />
            <CoreValues />
            <FocusAreas />
            <FlagshipPrograms />
            <Leadership />
        </main>
    );
}
