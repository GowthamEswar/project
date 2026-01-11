import React, { useState } from 'react';

function Donate() {
  const [copiedField, setCopiedField] = useState('');
  const [selectedTier, setSelectedTier] = useState(null);

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
    { 
      amount: 500, 
      label: 'Stationery Kit',
      description: 'Provide basic school supplies for one child',
      icon: '✏️',
      features: ['Notebooks', 'Pens & Pencils', 'Basic supplies'],
      color: 'from-teal-500 to-emerald-500'
    },
    { 
      amount: 1000, 
      label: 'Emergency Support',
      description: 'Help with urgent medical needs',
      icon: '🏥',
      features: ['Medical supplies', 'Emergency aid', 'Quick response'],
      color: 'from-rose-500 to-red-500'
    },
    { 
      amount: 3000, 
      label: '3 Months Support',
      description: 'Quarterly educational assistance',
      icon: '📚',
      features: ['Full stationery kit', 'Learning materials', '3 months coverage'],
      color: 'from-amber-500 to-orange-500',
      popular: false
    },
    { 
      amount: 6000, 
      label: '6 Months Support',
      description: 'Half-yearly community support',
      icon: '🎓',
      features: ['Complete supplies', 'Extra resources', '6 months coverage'],
      color: 'from-purple-500 to-indigo-500'
    },
    { 
      amount: 12000, 
      label: 'Annual Support',
      description: 'Year-round impact and growth',
      icon: '🌟',
      features: ['Full year supplies', 'Special programs', 'Maximum impact'],
      color: 'from-teal-500 to-emerald-500',
      popular: true
    }
  ];

  const impactStats = [
    { value: '500+', label: 'Children Supported', icon: '👦' },
    { value: '₹2L+', label: 'Funds Raised', icon: '💰' },
    { value: '100%', label: 'Goes to Cause', icon: '✅' }
  ];

  const impactAreas = [
    {
      icon: '📚',
      title: 'Education Support',
      description: 'Stationery kits and learning materials for children',
      color: 'bg-amber-100 text-amber-600'
    },
    {
      icon: '🩸',
      title: 'Emergency Health',
      description: 'Blood donation network and medical emergency support',
      color: 'bg-rose-100 text-rose-600'
    },
    {
      icon: '🤝',
      title: 'Community Service',
      description: 'Youth empowerment and volunteer initiatives',
      color: 'bg-teal-100 text-teal-600'
    }
  ];

  return (
    <div className="overflow-hidden -mt-20">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-teal-900 to-emerald-900" />
          
          {/* Decorative Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-teal-500/10 to-amber-500/10 rounded-full blur-3xl" />
          </div>

          {/* Pattern */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 pt-32 pb-16 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2.5 mb-8">
            <span className="text-teal-400">❤️</span>
            <span className="text-white/90 text-sm font-medium">Support Our Mission</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
            Make a <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-emerald-300">Donation</span>
          </h1>

          <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed mb-8">
            "ஊருக்கு உழைத்திடல் யோகம்" — Together, let's build a brighter future for our community.
          </p>

          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-6 mt-12">
            {impactStats.map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-6 py-4 text-center">
                <div className="text-2xl mb-1">{stat.icon}</div>
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-white/60 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Tiers Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
              <span className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
              Choose Your Impact
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Suggested Donation Amounts
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Every contribution makes a difference. Choose an amount that works for you.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
            {donationTiers.map((tier, index) => (
              <div
                key={index}
                onClick={() => setSelectedTier(index)}
                className={`relative group cursor-pointer bg-white rounded-3xl p-6 border-2 transition-all duration-300 transform hover:-translate-y-2 ${
                  selectedTier === index 
                    ? 'border-teal-500 shadow-xl shadow-teal-500/20' 
                    : 'border-gray-100 hover:border-gray-200 hover:shadow-xl'
                }`}
              >
                {/* Popular Badge */}
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 bg-gradient-to-r from-teal-500 to-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      Popular
                    </span>
                  </div>
                )}

                {/* Icon */}
                <div className={`w-14 h-14 bg-gradient-to-br ${tier.color} rounded-2xl flex items-center justify-center text-2xl mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                  {tier.icon}
                </div>

                {/* Amount */}
                <div className="text-3xl font-black text-gray-900 mb-1">
                  ₹{tier.amount.toLocaleString()}
                </div>

                {/* Label */}
                <div className="font-semibold text-gray-800 mb-2">{tier.label}</div>
                
                {/* Description */}
                <p className="text-gray-500 text-sm mb-4">{tier.description}</p>

                {/* Features */}
                <ul className="space-y-2">
                  {tier.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-2 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-teal-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Selection Indicator */}
                {selectedTier === index && (
                  <div className="absolute top-4 right-4 w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bank Transfer Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
                <span className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
                Bank Transfer
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                Transfer Directly
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                Make a direct bank transfer using the details below. Click to copy any field.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
              {/* Bank Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Account Name */}
                <div 
                  className="p-6 border-b md:border-r border-gray-100 hover:bg-teal-50/50 transition-colors cursor-pointer group"
                  onClick={() => copyToClipboard(bankDetails.accountName, 'accountName')}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-sm font-medium text-gray-500 mb-1">Account Name</div>
                      <div className="text-lg font-bold text-gray-900">{bankDetails.accountName}</div>
                    </div>
                    <button className={`p-2 rounded-lg transition-all ${copiedField === 'accountName' ? 'bg-teal-500 text-white' : 'bg-gray-100 text-gray-600 group-hover:bg-teal-100 group-hover:text-teal-600'}`}>
                      {copiedField === 'accountName' ? (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>

                {/* Account Number */}
                <div 
                  className="p-6 border-b border-gray-100 hover:bg-teal-50/50 transition-colors cursor-pointer group"
                  onClick={() => copyToClipboard(bankDetails.accountNumber, 'accountNumber')}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-sm font-medium text-gray-500 mb-1">Account Number</div>
                      <div className="text-lg font-bold text-gray-900 font-mono tracking-wider">{bankDetails.accountNumber}</div>
                    </div>
                    <button className={`p-2 rounded-lg transition-all ${copiedField === 'accountNumber' ? 'bg-teal-500 text-white' : 'bg-gray-100 text-gray-600 group-hover:bg-teal-100 group-hover:text-teal-600'}`}>
                      {copiedField === 'accountNumber' ? (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>

                {/* IFSC Code */}
                <div 
                  className="p-6 border-b md:border-b-0 md:border-r border-gray-100 hover:bg-teal-50/50 transition-colors cursor-pointer group"
                  onClick={() => copyToClipboard(bankDetails.ifscCode, 'ifscCode')}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-sm font-medium text-gray-500 mb-1">IFSC Code</div>
                      <div className="text-lg font-bold text-gray-900 font-mono tracking-wider">{bankDetails.ifscCode}</div>
                    </div>
                    <button className={`p-2 rounded-lg transition-all ${copiedField === 'ifscCode' ? 'bg-teal-500 text-white' : 'bg-gray-100 text-gray-600 group-hover:bg-teal-100 group-hover:text-teal-600'}`}>
                      {copiedField === 'ifscCode' ? (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>

                {/* Bank Name */}
                <div 
                  className="p-6 hover:bg-teal-50/50 transition-colors cursor-pointer group"
                  onClick={() => copyToClipboard(bankDetails.bankName, 'bankName')}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-sm font-medium text-gray-500 mb-1">Bank Name</div>
                      <div className="text-lg font-bold text-gray-900">{bankDetails.bankName}</div>
                    </div>
                    <button className={`p-2 rounded-lg transition-all ${copiedField === 'bankName' ? 'bg-teal-500 text-white' : 'bg-gray-100 text-gray-600 group-hover:bg-teal-100 group-hover:text-teal-600'}`}>
                      {copiedField === 'bankName' ? (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Instructions */}
              <div className="bg-gray-50 p-6 border-t border-gray-100">
                <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center text-teal-600">📝</span>
                  After Transfer
                </h4>
                <ol className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-teal-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                    <span className="text-gray-600">Keep the transaction receipt for your records</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-teal-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                    <span className="text-gray-600">Send us a WhatsApp message at <a href="https://wa.me/917845203014" className="text-teal-600 font-semibold hover:underline">+91 7845203014</a> with your transaction details</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-teal-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                    <span className="text-gray-600">We'll send you a confirmation and receipt within 24 hours</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/20 text-teal-300 text-sm font-semibold px-4 py-2 rounded-full mb-4">
              <span className="w-1.5 h-1.5 bg-teal-400 rounded-full" />
              Your Impact
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              Where Your Money Goes
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              100% of your donation directly supports our programs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {impactAreas.map((area, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all">
                <div className={`w-14 h-14 mx-auto ${area.color} rounded-2xl flex items-center justify-center text-2xl mb-4`}>
                  {area.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{area.title}</h3>
                <p className="text-gray-400 text-sm">{area.description}</p>
              </div>
            ))}
          </div>

          {/* Trust Badge */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3">
              <svg className="w-5 h-5 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-300 text-sm">Registered non-profit since January 2023</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">
                  Have Questions?
                </h3>
                <p className="text-gray-600 mb-6">
                  We're here to help with any donation-related queries. Reach out to us anytime.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center">
                      <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <a href="mailto:sriyaalifoundationindia@gmail.com" className="text-gray-700 hover:text-teal-600 transition-colors">
                      sriyaalifoundationindia@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center">
                      <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <a href="tel:+917845203014" className="text-gray-700 hover:text-teal-600 transition-colors">
                      +91 7845203014
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center">
                      <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <span className="text-gray-700">108, KK Street, TN Palayam, Coimbatore-641047</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <a 
                  href="https://wa.me/917845203014"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-green-500 text-white font-bold px-6 py-4 rounded-xl hover:bg-green-600 transition-all shadow-lg hover:shadow-xl"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Chat on WhatsApp
                </a>
                <a 
                  href="/contact"
                  className="inline-flex items-center justify-center gap-3 bg-gray-900 text-white font-bold px-6 py-4 rounded-xl hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Donate;