'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  FaBars,
  FaTimes,
  FaChevronDown,
  FaHistory,
  FaInfoCircle,
  FaBullseye,
  FaUserTie,
  FaArrowRight
} from 'react-icons/fa';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);


  const navItems = [
    { name: 'Home', href: '/#hero' },
    {
      name: 'Who We Are',
      type: 'dropdown',
      items: [
        { name: 'About Us', href: '/who-we-are/about-us', icon: FaInfoCircle, desc: "Our essence & values" },
        { name: 'Background', href: '/who-we-are/background', icon: FaHistory, desc: "Our history & origin" },
        { name: 'Vision & Mission', href: '/who-we-are/vision-mission', icon: FaBullseye, desc: "Our guiding stars" },
        { name: 'Founder\'s Message', href: '/who-we-are/founders-message', icon: FaUserTie, desc: "Leadership voice" },
      ]
    },
    { name: 'Programs', href: '/programs' },
    { name: 'News & Stories', href: '/#news' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="relative h-12 sm:h-14 w-auto transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/Logo.png"
                alt="MercyBeacon International Foundation logo"
                height={64}
                width={220}
                priority
                className="h-full w-auto object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              item.type === 'dropdown' ? (
                <div key={item.name} className="relative group" ref={dropdownRef}>
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    onMouseEnter={() => setDropdownOpen(true)}
                    className={`flex items-center gap-1.5 text-sm font-semibold transition-all duration-300 px-3 py-2 rounded-full
                      ${dropdownOpen ? 'text-[#2c798e] bg-[#e6f3f6]' : 'text-gray-700 hover:text-[#2c798e] hover:bg-gray-50'}`}
                  >
                    {item.name}
                    <FaChevronDown className={`text-[10px] transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Desktop Dropdown Menu */}
                  {/* Added padding wrapper to handle hover gap */}
                  <div
                    className={`absolute top-full left-0 pt-4 w-72 transform transition-all duration-200 origin-top-left
                      ${dropdownOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-2 invisible pointer-events-none'}`}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden ring-1 ring-black/5">
                      <div className="p-2 space-y-1">
                        {item.items.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            onClick={() => setDropdownOpen(false)}
                            className="group flex items-start gap-4 p-3 rounded-xl hover:bg-gray-50 transition-all duration-200"
                          >
                            <div className="mt-1 w-8 h-8 rounded-lg bg-[#e6f3f6] text-[#2c798e] flex items-center justify-center group-hover:bg-[#2c798e] group-hover:text-white transition-colors duration-200">
                              <subItem.icon className="text-sm" />
                            </div>
                            <div>
                              <span className="block text-sm font-bold text-gray-900 group-hover:text-[#2c798e] transition-colors">
                                {subItem.name}
                              </span>
                              <span className="block text-xs text-gray-500 mt-0.5 font-medium group-hover:text-gray-600">
                                {subItem.desc}
                              </span>
                            </div>
                          </Link>
                        ))}
                      </div>
                      <div className="bg-gray-50 p-3 text-center border-t border-gray-100">
                        <Link href="/about" className="text-xs font-bold text-[#2c798e] hover:underline flex items-center justify-center gap-1">
                          View All <FaArrowRight className="text-[10px]" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative text-sm font-semibold text-gray-700 px-3 py-2 rounded-full transition-all duration-300 hover:text-[#2c798e] hover:bg-gray-50"
                >
                  {item.name}
                </Link>
              )
            ))}

            {/* Donate Button */}
            <Link
              href="#donate"
              className="bg-[#2c798e] text-white
                         px-6 py-2.5 text-sm rounded-full font-bold
                         transition-all duration-300 shadow-[0_4px_14px_0_rgba(44,121,142,0.39)]
                         hover:bg-[#255f71] hover:shadow-[0_6px_20px_rgba(44,121,142,0.23)] hover:-translate-y-0.5
                         active:scale-95 active:translate-y-0"
            >
              Donate Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="lg:hidden text-gray-700 p-2.5 rounded-xl transition-colors
                       hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#2c798e]/20"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white border-t border-gray-100
            ${isOpen ? 'max-h-[80vh] opacity-100 shadow-inner' : 'max-h-0 opacity-0'}
          `}
        >
          <div className="py-6 px-2 space-y-2">
            {navItems.map((item) => (
              item.type === 'dropdown' ? (
                <div key={item.name} className="space-y-2 mb-4 bg-gray-50 rounded-2xl p-4 border border-gray-100">
                  <div className="text-sm font-bold text-gray-900 flex items-center gap-2 mb-2">
                    {item.name} <FaChevronDown className="text-xs text-gray-400" />
                  </div>
                  <div className="grid gap-2 pl-2 border-l-2 border-[#2c798e]/20">
                    {item.items.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="flex items-center gap-3 p-2 rounded-lg text-sm text-gray-600 font-medium
                                        transition-all duration-200 hover:bg-white hover:text-[#2c798e] hover:shadow-sm"
                        onClick={() => setIsOpen(false)}
                      >
                        <subItem.icon className="text-[#2c798e] text-sm opacity-70" />
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-base text-gray-700 font-semibold rounded-xl
                             transition-all duration-200
                             hover:text-[#2c798e] hover:bg-[#e6f3f6]"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              )
            ))}

            <div className="pt-4 mt-2 border-t border-gray-100 px-2">
              <Link
                href="#donate"
                className="block w-full bg-[#2c798e] text-white
                          px-6 py-3.5 text-base rounded-xl font-bold text-center
                          transition-all duration-300 shadow-lg
                          hover:bg-[#255f71] active:scale-95"
                onClick={() => setIsOpen(false)}
              >
                Donate Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
