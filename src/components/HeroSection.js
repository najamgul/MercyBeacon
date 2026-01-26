'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import Container from './ui/Container';
import Button from './ui/Button';

// Dynamic import to avoid SSR issues
const LottiePlayer = dynamic(() => import('lottie-react'), { ssr: false });

// Lottie animation
import impactAnimation from '../../public/lottie/donate.json';

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen bg-white overflow-hidden pt-20 flex items-center">
      <Container className="py-20 lg:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div className="inline-block mb-6">
              <span className="bg-[#e6f3f6] text-[#1f3249] px-4 py-2 rounded-full text-sm font-bold tracking-wide">
                🌟 MercyBeacon International Foundation
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900 leading-[1.1]">
              Lighting lives through
              <span className="block text-[#2c798e] mt-2">
                healthcare, education, and dignity
              </span>
            </h1>

            <p className="text-gray-600 text-lg md:text-xl mb-10 max-w-3xl mx-auto lg:mx-0 leading-relaxed">
              MercyBeacon International Foundation is an organization dedicated to transforming lives through quality education, cutting-edge healthcare, and impactful community outreach initiatives. Built on the values of compassion, equity, and service, MercyBeacon works to create sustainable change.
            </p>

            {/* Primary CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start max-w-lg mx-auto lg:mx-0">
              <Button href="#donate" variant="primary" className="px-8 py-4 text-lg w-full sm:w-auto">
                Donate Now
              </Button>
              <Button href="#programs" variant="secondary" className="px-8 py-4 text-lg w-full sm:w-auto">
                Sponsor Education
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-16 border-t border-gray-100 pt-8 max-w-lg mx-auto lg:mx-0">
              <div>
                <div className="text-3xl lg:text-4xl font-bold text-[#2c798e]">5K+</div>
                <div className="text-gray-600 text-sm font-medium mt-1">Students supported</div>
              </div>
              <div className="border-l border-gray-100 pl-6">
                <div className="text-3xl lg:text-4xl font-bold text-[#2c798e]">8K+</div>
                <div className="text-gray-600 text-sm font-medium mt-1">Families reached</div>
              </div>
              <div className="border-l border-gray-100 pl-6">
                <div className="text-3xl lg:text-4xl font-bold text-[#2c798e]">1.2K+</div>
                <div className="text-gray-600 text-sm font-medium mt-1">Medical cases</div>
              </div>
            </div>
          </div>

          {/* Animation */}
          <div className="hidden lg:flex justify-center items-center relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-[#e6f3f6] via-white to-transparent rounded-full opacity-70 blur-3xl -z-10"></div>
            <div className="relative w-full max-w-md aspect-square">
              <LottiePlayer
                animationData={impactAnimation}
                loop
                autoplay
                className="w-full h-full drop-shadow-xl"
              />
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
