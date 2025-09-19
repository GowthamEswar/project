import React, { useState } from 'react';

function Donate() {
  const [copiedField, setCopiedField] = useState('');

  const copyToClipboard = async (text, field) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(''), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const bankDetails = {
    accountName: "Sri Yaali Foundation India",
    accountNumber: "510909010243601",
    ifscCode: "CIUB0000410",
    bankName: "City Union Bank"
  };

  const donationTiers = [
    { amount: 500, label: "Stationery Kit", description: "Support one child's learning materials" },
    { amount: 1000, label: "Emergency Support", description: "Help with urgent medical needs" },
    { amount: 3000, label: "3 Months Support", description: "Quarterly educational assistance" },
    { amount: 6000, label: "6 Months Support", description: "Half-yearly community support" },
    { amount: 12000, label: "Annual Support", description: "Year-round impact and growth" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-5xl font-bold mb-4">Support Our Mission</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            "ஊருக்கு உழைத்திடல் யோகம்" - Together, let's build a brighter future for our community
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Bank Details Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Bank Transfer Details</h2>
              <p className="text-gray-600">Transfer your donation directly to our bank account</p>
            </div>

            <div className="space-y-6">
              {/* Account Name */}
              <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-500">
                <div className="flex justify-between items-center">
                  <div>
                    <label className="text-sm font-medium text-gray-600">Account Name</label>
                    <p className="text-xl font-bold text-gray-800 mt-1">{bankDetails.accountName}</p>
                  </div>
                  <button
                    onClick={() => copyToClipboard(bankDetails.accountName, 'accountName')}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    {copiedField === 'accountName' ? 'Copied!' : 'Copy'}
                  </button>
                </div>
              </div>

              {/* Account Number */}
              <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-500">
                <div className="flex justify-between items-center">
                  <div>
                    <label className="text-sm font-medium text-gray-600">Account Number</label>
                    <p className="text-2xl font-bold text-gray-800 mt-1 font-mono">{bankDetails.accountNumber}</p>
                  </div>
                  <button
                    onClick={() => copyToClipboard(bankDetails.accountNumber, 'accountNumber')}
                    className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                  >
                    {copiedField === 'accountNumber' ? 'Copied!' : 'Copy'}
                  </button>
                </div>
              </div>

              {/* IFSC Code */}
              <div className="bg-purple-50 rounded-xl p-6 border-l-4 border-purple-500">
                <div className="flex justify-between items-center">
                  <div>
                    <label className="text-sm font-medium text-gray-600">IFSC Code</label>
                    <p className="text-2xl font-bold text-gray-800 mt-1 font-mono">{bankDetails.ifscCode}</p>
                  </div>
                  <button
                    onClick={() => copyToClipboard(bankDetails.ifscCode, 'ifscCode')}
                    className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
                  >
                    {copiedField === 'ifscCode' ? 'Copied!' : 'Copy'}
                  </button>
                </div>
              </div>

              {/* Bank Name */}
              <div className="bg-orange-50 rounded-xl p-6 border-l-4 border-orange-500">
                <div className="flex justify-between items-center">
                  <div>
                    <label className="text-sm font-medium text-gray-600">Bank Name</label>
                    <p className="text-xl font-bold text-gray-800 mt-1">{bankDetails.bankName}</p>
                  </div>
                  <button
                    onClick={() => copyToClipboard(bankDetails.bankName, 'bankName')}
                    className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors"
                  >
                    {copiedField === 'bankName' ? 'Copied!' : 'Copy'}
                  </button>
                </div>
              </div>
            </div>

            {/* Instructions */}
            <div className="mt-8 bg-gray-100 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Transfer Instructions:</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                <li>Use the bank details above for your transfer</li>
                <li>Keep the transaction receipt for your records</li>
                <li>Send us a WhatsApp message at +91 7845203014 with your transaction details</li>
                <li>We'll send you a confirmation and receipt within 24 hours</li>
              </ol>
            </div>
          </div>

          {/* Donation Tiers & Impact */}
          <div className="space-y-8">
            {/* Suggested Amounts */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Suggested Donation Amounts</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {donationTiers.map((tier, index) => (
                  <div key={index} className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200 hover:shadow-lg transition-shadow">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-800 mb-2">₹{tier.amount.toLocaleString()}</div>
                      <div className="text-lg font-semibold text-gray-800 mb-2">{tier.label}</div>
                      <div className="text-sm text-gray-600">{tier.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Impact Section */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Your Impact</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">📚</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Education Support</h3>
                    <p className="text-gray-600 text-sm">Stationery kits, learning materials for children</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🩸</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Emergency Health</h3>
                    <p className="text-gray-600 text-sm">Blood donation network, medical emergency support</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Community Service</h3>
                    <p className="text-gray-600 text-sm">Youth empowerment, volunteer initiatives</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl shadow-xl p-8 text-white text-center">
              <h3 className="text-xl font-bold mb-4">Need Help?</h3>
              <p className="mb-4">Contact us for any donation-related queries</p>
              <div className="space-y-2">
                <p>📧 sriyaalifoundationindia@gmail.com</p>
                <p>📱 +91 7845203014</p>
                <p>📍 108, KK Street, TN Palayam, Coimbatore-641047</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Donate; 