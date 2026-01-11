import React, { useState, useEffect } from 'react';

function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const [pillarsVisible, setPillarsVisible] = useState(false);
  const [donationVisible, setDonationVisible] = useState(false);

  useEffect(() => {
    // Trigger hero animations on mount
    setIsVisible(true);

    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px'
    };

    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setStatsVisible(true);
        }
      });
    }, observerOptions);

    const pillarsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setPillarsVisible(true);
        }
      });
    }, observerOptions);

    const donationObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setDonationVisible(true);
        }
      });
    }, observerOptions);

    const statsSection = document.getElementById('stats-section');
    const pillarsSection = document.getElementById('pillars-section');
    const donationSection = document.getElementById('donation-section');

    if (statsSection) statsObserver.observe(statsSection);
    if (pillarsSection) pillarsObserver.observe(pillarsSection);
    if (donationSection) donationObserver.observe(donationSection);

    return () => {
      statsObserver.disconnect();
      pillarsObserver.disconnect();
      donationObserver.disconnect();
    };
  }, []);

  const stats = [
    { icon: '🎓', value: '160K+', label: 'Children supported (goal)', color: 'from-teal-500 to-emerald-500' },
    { icon: '🩸', value: '1000+', label: 'Blood donors mobilized', color: 'from-rose-500 to-red-500' },
    { icon: '📅', value: '2023', label: 'Year of registration', color: 'from-blue-500 to-indigo-500' }
  ];

  const pillars = [
    {
      icon: '📚',
      title: 'Education Support',
      description: 'Providing basic educational needs so children can learn with confidence.',
      image: 'https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=2070&auto=format&fit=crop',
      color: 'from-amber-500 to-orange-500',
      delay: '0ms'
    },
    {
      icon: '🏥',
      title: 'Emergency Health Support',
      description: 'Mobilizing youth volunteers for urgent blood donations and critical needs.',
      image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=2070&auto=format&fit=crop',
      color: 'from-rose-500 to-red-500',
      badge: 'Emergency',
      delay: '150ms'
    },
    {
      icon: '🌟',
      title: 'Youth Empowerment',
      description: 'Guiding youth into volunteerism to build compassionate leaders.',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop',
      color: 'from-teal-500 to-emerald-500',
      delay: '300ms'
    }
  ];

  const donationTiers = [
    { amount: 3000, label: '3 Months', features: ['Stationery & Books', 'Learning Materials', 'School Support'] },
    { amount: 6000, label: '6 Months', features: ['Stationery & Books', 'Learning Materials', 'School Support'] },
    { amount: 12000, label: '9 Months', features: ['Stationery & Books', 'Learning Materials', 'School Support'], popular: true },
    { amount: 24000, label: '12 Months', features: ['Stationery & Books', 'Learning Materials', 'School Support'] }
  ];

  return (
    <div className="overflow-hidden -mt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
          
          {/* Animated Gradient Orbs */}
          <div className="absolute inset-0 overflow-hidden">
            <div 
              className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-teal-500/30 rounded-full blur-[100px]"
              style={{ animation: 'pulse 4s ease-in-out infinite' }} 
            />
            <div 
              className="absolute top-1/2 -right-20 w-[400px] h-[400px] bg-emerald-500/20 rounded-full blur-[100px]"
              style={{ animation: 'pulse 6s ease-in-out infinite 1s' }} 
            />
            <div 
              className="absolute -bottom-20 left-1/3 w-[600px] h-[600px] bg-teal-600/20 rounded-full blur-[120px]"
              style={{ animation: 'pulse 5s ease-in-out infinite 2s' }} 
            />
          </div>

          {/* Floating Particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white/30 rounded-full"
                style={{
                  left: `${10 + (i * 6)}%`,
                  top: `${20 + (i * 5) % 60}%`,
                  animation: `float ${3 + (i % 3)}s ease-in-out infinite ${i * 0.3}s`
                }}
              />
            ))}
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 pt-32 pb-20 text-center">
          {/* Badge */}
          <div 
            className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/20 to-orange-500/20 backdrop-blur-md border border-amber-500/30 rounded-full px-5 py-2.5 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" style={{ animation: 'ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite' }}></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              <span className="text-amber-200 text-sm font-medium">Registered on 2nd January 2023</span>
            </div>
          </div>

          {/* Main Title */}
          <h1 
            className={`text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tight transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          >
            Sri Yaali Foundation
            <span 
              className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-emerald-300 to-teal-300"
              style={{ 
                backgroundSize: '200% 200%',
                animation: 'gradientShift 3s ease infinite'
              }}
            >
              India
            </span>
          </h1>

          {/* Tamil Motto */}
          <p 
            className={`text-2xl md:text-3xl text-amber-300 font-medium italic mb-6 transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          >
            "ஊருக்கு உழைத்திடல் யோகம்"
          </p>

          {/* Description */}
          <p 
            className={`text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          >
            Compassion can transform communities. We support education for children, emergency health needs, and youth empowerment through service.
          </p>

          {/* CTA Buttons */}
          <div 
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          >
            <a 
              href="/donate" 
              className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-bold px-8 py-4 rounded-full overflow-hidden shadow-lg shadow-teal-500/30 hover:shadow-xl hover:shadow-teal-500/40 transition-all duration-300 transform hover:-translate-y-1"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative">Donate Now</span>
              <svg className="relative w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a 
              href="/volunteer" 
              className="group inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold px-8 py-4 rounded-full hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1"
            >
              <span>Become a Volunteer</span>
              <span className="group-hover:rotate-90 transition-transform duration-300">+</span>
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats-section" className="py-20 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className={`text-center transform transition-all duration-700 ${statsVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div 
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl text-3xl mb-4 shadow-lg transform hover:scale-110 hover:rotate-3 transition-all duration-300`}
                  style={{ animation: statsVisible ? `bounce 1s ease ${index * 0.2}s` : 'none' }}
                >
                  {stat.icon}
                </div>
                <div className={`text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r ${stat.color} mb-2`}>
                  {stat.value}
                </div>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Pillars */}
      <section id="pillars-section" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className={`text-center mb-16 transform transition-all duration-700 ${pillarsVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
              <span className="w-1.5 h-1.5 bg-teal-500 rounded-full" style={{ animation: 'pulse 2s ease-in-out infinite' }} />
              What We Do
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Our Mission Pillars</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Three pillars that guide our work towards a better tomorrow</p>
          </div>

          {/* Pillar Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pillars.map((pillar, index) => (
              <div 
                key={index}
                className={`group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${pillarsVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: pillar.delay }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={pillar.image} 
                    alt={pillar.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  
                  {/* Badge */}
                  {pillar.badge && (
                    <div 
                      className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full"
                      style={{ animation: 'pulse 2s ease-in-out infinite' }}
                    >
                      {pillar.badge}
                    </div>
                  )}
                  
                  {/* Icon */}
                  <div className={`absolute -bottom-6 left-6 w-14 h-14 bg-gradient-to-br ${pillar.color} rounded-2xl flex items-center justify-center text-2xl shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    {pillar.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 pt-10">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{pillar.description}</p>
                  <a 
                    href="/about" 
                    className="inline-flex items-center gap-2 text-teal-600 font-semibold group/link"
                  >
                    Learn more
                    <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Tiers */}
      <section id="donation-section" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"
            style={{ animation: 'pulse 4s ease-in-out infinite' }}
          />
          <div 
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"
            style={{ animation: 'pulse 5s ease-in-out infinite 1s' }}
          />
        </div>

        <div className="container mx-auto px-4 relative">
          {/* Section Header */}
          <div className={`text-center mb-16 transform transition-all duration-700 ${donationVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-flex items-center gap-2 bg-teal-500/20 text-teal-300 text-sm font-semibold px-4 py-2 rounded-full mb-4">
              <span className="text-lg">💝</span>
              Make a Difference
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Support a Child's Education</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Your contribution creates lasting impact in young lives</p>
          </div>

          {/* Tier Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {donationTiers.map((tier, index) => (
              <div 
                key={index}
                className={`relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 transition-all duration-500 transform hover:-translate-y-2 hover:bg-white/10 ${donationVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} ${tier.popular ? 'ring-2 ring-teal-500' : ''}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Popular Badge */}
                {tier.popular && (
                  <div 
                    className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-teal-500 to-emerald-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg"
                    style={{ animation: 'pulse 2s ease-in-out infinite' }}
                  >
                    Most Popular
                  </div>
                )}

                <div className="text-center mb-6">
                  <div className="text-4xl font-black text-white mb-1">₹{tier.amount.toLocaleString()}</div>
                  <p className="text-gray-400">Education for {tier.label}</p>
                </div>

                <ul className="space-y-3 mb-6">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-300 text-sm">
                      <svg className="w-5 h-5 text-teal-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a 
                  href="/donate"
                  className={`block text-center py-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 ${
                    tier.popular 
                      ? 'bg-gradient-to-r from-teal-500 to-emerald-500 text-white hover:shadow-lg hover:shadow-teal-500/30' 
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  Donate Now 💝
                </a>
              </div>
            ))}
          </div>

          {/* Trust Badge */}
          <div className={`text-center mt-12 transform transition-all duration-700 delay-500 ${donationVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-flex items-center gap-2 bg-teal-500/20 text-teal-300 px-6 py-3 rounded-full">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="text-sm font-medium">100% of donations go directly to children's education</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-500 to-emerald-500 relative overflow-hidden">
        {/* Animated Background Circles */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute top-10 left-10 w-20 h-20 border-4 border-white/20 rounded-full"
            style={{ animation: 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite' }}
          />
          <div 
            className="absolute bottom-10 right-10 w-32 h-32 border-4 border-white/20 rounded-full"
            style={{ animation: 'ping 4s cubic-bezier(0, 0, 0.2, 1) infinite 1s' }}
          />
          <div 
            className="absolute top-1/2 left-1/3 w-16 h-16 border-4 border-white/20 rounded-full"
            style={{ animation: 'ping 3.5s cubic-bezier(0, 0, 0.2, 1) infinite 0.5s' }}
          />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Ready to Make a <span className="text-gray-900">Difference</span>?
            </h2>
            <p className="text-teal-100 text-lg mb-10 max-w-2xl mx-auto">
              Join our community of volunteers and donors who are transforming lives across India.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="/volunteer"
                className="group inline-flex items-center gap-2 bg-gray-900 text-white font-bold px-8 py-4 rounded-full hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
              >
                <span className="text-xl group-hover:scale-110 transition-transform">🤝</span>
                <span>Join as Volunteer</span>
              </a>
              <a 
                href="/donor"
                className="group inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold px-8 py-4 rounded-full hover:bg-white hover:text-teal-600 transition-all duration-300 transform hover:-translate-y-1"
              >
                <span className="text-xl group-hover:scale-110 transition-transform">🩸</span>
                <span>Register as Blood Donor</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Global Styles for Animations */}
      <style>{`
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px); 
            opacity: 0.3; 
          }
          50% { 
            transform: translateY(-30px); 
            opacity: 0.6; 
          }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.05); }
        }
        @keyframes ping {
          0% { transform: scale(1); opacity: 1; }
          75%, 100% { transform: scale(2); opacity: 0; }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  );
}

export default Home;