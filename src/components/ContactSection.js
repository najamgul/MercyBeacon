'use client';

import React, { useState } from 'react';
import { FaPaperPlane, FaCheckCircle, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { addContact } from '../services/firebaseService';
import Section from './ui/Section';
import Container from './ui/Container';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    needType: 'Education',
    location: '',
    details: '',
    supportLink: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage('');

    const result = await addContact(formData);

    setIsSubmitting(false);

    if (result.success) {
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        needType: 'Education',
        location: '',
        details: '',
        supportLink: '',
      });
      setTimeout(() => setSubmitStatus(null), 5000);
    } else {
      setSubmitStatus('error');
      setErrorMessage('Error sending message. Please try again or contact us directly.');
      setTimeout(() => {
        setSubmitStatus(null);
        setErrorMessage('');
      }, 5000);
    }
  };

  return (
    <Section id="contact" bg="gray">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Request Support or Partner With Us
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Share your need so we can route it to the right MercyBeacon program—education, medical, or food/essential support. We also welcome partners and volunteers.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="bg-[#e6f3f6] p-4 rounded-xl shrink-0">
                  <FaEnvelope className="text-[#2c798e] text-2xl" />
                </div>
                <div>
                  <h3 className="text-gray-900 font-bold text-lg mb-1">Email Us</h3>
                  <a href="mailto:info@mercybeacon.org" className="text-gray-600 hover:text-[#2c798e] transition-colors">info@mercybeacon.org</a>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="bg-[#e6f3f6] p-4 rounded-xl shrink-0">
                  <FaMapMarkerAlt className="text-[#2c798e] text-2xl" />
                </div>
                <div>
                  <h3 className="text-gray-900 font-bold text-lg mb-1">Visit Us</h3>
                  <p className="text-gray-600 leading-relaxed mb-2">Adjacent General Bus Stand, Parimpora, Srinagar, Jammu &amp; Kashmir 190017.</p>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">OR</p>
                  <p className="text-gray-600 leading-relaxed">First Floor, B31, Block B, Sector 2, Noida - 201301</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="bg-[#e6f3f6] p-4 rounded-xl shrink-0">
                  <FaPhone className="text-[#2c798e] text-2xl" />
                </div>
                <div>
                  <h3 className="text-gray-900 font-bold text-lg mb-1">Call Us</h3>
                  <div className="flex flex-col gap-1">
                    <a href="tel:+919796000751" className="text-gray-600 hover:text-[#2c798e] transition-colors font-medium">+91 9796000751</a>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest my-0.5">OR</p>
                    <a href="tel:+917428037611" className="text-gray-600 hover:text-[#2c798e] transition-colors font-medium">+91 7428037611</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div id="support" className="bg-white border border-gray-100 rounded-3xl p-8 lg:p-10 shadow-xl shadow-gray-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-900 text-sm font-bold mb-2 uppercase tracking-wide">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2c798e] focus:border-transparent transition-all shadow-sm"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-900 text-sm font-bold mb-2 uppercase tracking-wide">
                  Your Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2c798e] focus:border-transparent transition-all shadow-sm"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="needType" className="block text-gray-900 text-sm font-bold mb-2 uppercase tracking-wide">
                  Need Type <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select
                    id="needType"
                    name="needType"
                    value={formData.needType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#2c798e] focus:border-transparent transition-all shadow-sm appearance-none"
                  >
                    <option>Education</option>
                    <option>Medical</option>
                    <option>Food &amp; Essentials</option>
                    <option>Partnership / Volunteering</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="location" className="block text-gray-900 text-sm font-bold mb-2 uppercase tracking-wide">
                  Location <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2c798e] focus:border-transparent transition-all shadow-sm"
                  placeholder="City / district"
                />
              </div>

              <div>
                <label htmlFor="details" className="block text-gray-900 text-sm font-bold mb-2 uppercase tracking-wide">
                  Support Details <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="details"
                  name="details"
                  value={formData.details}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2c798e] focus:border-transparent transition-all shadow-sm resize-none"
                  placeholder="Describe the situation and the kind of support required..."
                />
              </div>

              <div>
                <label htmlFor="supportLink" className="block text-gray-900 text-sm font-bold mb-2 uppercase tracking-wide">
                  Supporting Documents
                </label>
                <input
                  type="text"
                  id="supportLink"
                  name="supportLink"
                  value={formData.supportLink}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2c798e] focus:border-transparent transition-all shadow-sm"
                  placeholder="Link to drive or file (optional)"
                />
              </div>

              {submitStatus === 'success' && (
                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg flex items-center gap-3 text-green-700">
                  <FaCheckCircle className="text-xl shrink-0" />
                  <span className="font-medium">Thank you! Your message has been sent successfully.</span>
                </div>
              )}

              {submitStatus === 'error' && errorMessage && (
                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg text-red-700 font-medium">
                  {errorMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#2c798e] hover:bg-[#255f71] text-white py-4 rounded-xl font-bold text-lg transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3 shadow-[0_4px_14px_0_rgba(44,121,142,0.39)] hover:shadow-[0_6px_20px_rgba(44,121,142,0.23)] hover:-translate-y-1 active:translate-y-0"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <FaPaperPlane /> Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default ContactSection;
