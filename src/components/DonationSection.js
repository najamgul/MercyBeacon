'use client';

import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { FaHeart, FaCheckCircle, FaLock } from 'react-icons/fa';
import { addDonation } from '../services/firebaseService';
import Section from './ui/Section';
import Container from './ui/Container';
import SectionHeader from './ui/SectionHeader';

const DonationSection = () => {
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState('');
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [showQR, setShowQR] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const amounts = [10, 25, 50, 100, 250, 500];

  const handleDonateClick = async () => {
    const amount = selectedAmount || parseFloat(customAmount);

    setErrorMessage('');

    if (!amount || amount <= 0) {
      setErrorMessage('Please select or enter a valid donation amount');
      return;
    }

    if (!donorName || !donorEmail) {
      setErrorMessage('Please enter your name and email');
      return;
    }

    if (!process.env.NEXT_PUBLIC_CHARITY_WALLET_ADDRESS && !process.env.NEXT_PUBLIC_CHARITY_UPI_ID) {
      setErrorMessage('Payment configuration is not set up. Please contact the administrator.');
      return;
    }

    setIsSubmitting(true);

    const result = await addDonation({
      amount,
      donorName,
      donorEmail,
      currency: 'USD',
      paymentMethod: 'QR Code',
    });

    setIsSubmitting(false);

    if (result.success) {
      setShowQR(true);
      setErrorMessage('');
    } else {
      setErrorMessage('Error processing donation. Please try again.');
    }
  };

  const paymentInfo = process.env.NEXT_PUBLIC_CHARITY_WALLET_ADDRESS ||
    process.env.NEXT_PUBLIC_CHARITY_UPI_ID ||
    'Please configure payment information';

  return (
    <Section id="donate" bg="white">
      <Container>
        <SectionHeader
          title="Make a Difference Today"
          description="Your generosity transforms lives. Choose an amount or enter a custom donation to support our mission."
        />

        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 md:p-12 shadow-sm">
            {!showQR ? (
              <>
                <div className="mb-10">
                  <label className="block text-gray-900 text-sm font-bold mb-4 uppercase tracking-wide">
                    Select Amount (USD)
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                    {amounts.map((amount) => (
                      <button
                        key={amount}
                        onClick={() => {
                          setSelectedAmount(amount);
                          setCustomAmount('');
                        }}
                        className={`py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 transform active:scale-95 ${selectedAmount === amount
                            ? 'bg-[#2c798e] text-white shadow-lg shadow-[#2c798e]/20 ring-2 ring-[#2c798e] ring-offset-2'
                            : 'bg-white text-gray-700 border border-gray-200 hover:border-[#2c798e] hover:text-[#2c798e]'
                          }`}
                      >
                        ${amount}
                      </button>
                    ))}
                  </div>

                  <div className="mb-8">
                    <label className="block text-gray-900 text-sm font-bold mb-3 uppercase tracking-wide">
                      Or Enter Custom Amount
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl font-bold">
                        $
                      </span>
                      <input
                        type="number"
                        value={customAmount}
                        onChange={(e) => {
                          setCustomAmount(e.target.value);
                          setSelectedAmount(null);
                        }}
                        placeholder="Enter amount"
                        className="w-full pl-10 pr-4 py-4 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2c798e] focus:border-transparent transition-all shadow-sm font-semibold text-lg"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <label className="block text-gray-900 text-sm font-bold mb-3 uppercase tracking-wide">
                        Your Name
                      </label>
                      <input
                        type="text"
                        value={donorName}
                        onChange={(e) => setDonorName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full px-4 py-4 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2c798e] focus:border-transparent transition-all shadow-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-900 text-sm font-bold mb-3 uppercase tracking-wide">
                        Your Email
                      </label>
                      <input
                        type="email"
                        value={donorEmail}
                        onChange={(e) => setDonorEmail(e.target.value)}
                        placeholder="john@example.com"
                        className="w-full px-4 py-4 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2c798e] focus:border-transparent transition-all shadow-sm"
                      />
                    </div>
                  </div>

                  {errorMessage && (
                    <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-8 rounded-r-lg">
                      <div className="flex">
                        <div className="ml-3">
                          <p className="text-sm text-red-700">{errorMessage}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  <button
                    onClick={handleDonateClick}
                    disabled={isSubmitting}
                    className="w-full bg-[#2c798e] hover:bg-[#255f71] text-white py-4 rounded-xl font-bold text-lg transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3 shadow-[0_4px_14px_0_rgba(44,121,142,0.39)] hover:shadow-[0_6px_20px_rgba(44,121,142,0.23)] hover:-translate-y-1 active:translate-y-0"
                  >
                    {isSubmitting ? (
                      'Processing...'
                    ) : (
                      <>
                        <FaHeart /> Proceed to Donate
                      </>
                    )}
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="text-center py-8">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FaCheckCircle className="text-green-500 text-4xl" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    Thank You!
                  </h3>
                  <p className="text-gray-600 mb-8 max-w-md mx-auto text-lg">
                    Scan the QR code below to complete your secure donation of <span className="font-bold text-gray-900">${selectedAmount || customAmount}</span>
                  </p>

                  <div className="bg-white p-6 rounded-2xl inline-block mb-8 border border-gray-200 shadow-lg">
                    <QRCodeSVG
                      value={paymentInfo}
                      size={240}
                      level="H"
                      includeMargin={true}
                    />
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-5 mb-8 max-w-md mx-auto shadow-sm text-left">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                      Wallet / UPI Address
                    </p>
                    <div className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
                      <code className="text-[#1f3249] font-mono text-sm break-all font-medium">
                        {paymentInfo}
                      </code>
                    </div>
                  </div>

                  <p className="text-gray-500 text-sm mb-8">
                    A confirmation email will be sent to <span className="font-medium text-gray-900">{donorEmail}</span>
                  </p>

                  <button
                    onClick={() => {
                      setShowQR(false);
                      setSelectedAmount(null);
                      setCustomAmount('');
                      setDonorName('');
                      setDonorEmail('');
                      setErrorMessage('');
                    }}
                    className="text-[#2c798e] hover:text-[#255f71] font-bold transition-colors border-b-2 border-transparent hover:border-[#2c798e]"
                  >
                    ← Make Another Donation
                  </button>
                </div>
              </>
            )}
          </div>

          <div className="mt-8 flex items-center justify-center gap-2 text-gray-400 text-sm font-medium">
            <FaLock /> <span>Secure payment processing • 100% of your donation goes to charity</span>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default DonationSection;
