import React, { useEffect, useState } from 'react';

function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { value: '160K+', label: 'Children supported (goal)', icon: '🎓', color: 'from-amber-500 to-orange-500' },
    { value: '1000+', label: 'Blood donors mobilized', icon: '🩸', color: 'from-rose-500 to-red-500' },
    { value: '2023', label: 'Year of registration', icon: '📅', color: 'from-teal-500 to-emerald-500' }
  ];

  const missions = [
    {
      title: 'Education Support',
      description: 'Providing basic educational needs so children can learn with confidence.',
      image: 'https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=2070&auto=format&fit=crop',
      icon: '📚',
      gradient: 'from-amber-500 to-orange-600'
    },
    {
      title: 'Emergency Health Support',
      description: 'Mobilizing youth volunteers for urgent blood donations and critical needs.',
      image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=2070&auto=format&fit=crop',
      icon: '🏥',
      gradient: 'from-rose-500 to-red-600',
      badge: 'Emergency'
    },
    {
      title: 'Youth Empowerment',
      description: 'Guiding youth into volunteerism to build compassionate leaders.',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop',
      icon: '🌟',
      gradient: 'from-teal-500 to-emerald-600'
    }
  ];

  const donationTiers = [
    { amount: 3000, label: '3 Months', popular: false },
    { amount: 6000, label: '6 Months', popular: false },
    { amount: 12000, label: '9 Months', popular: true },
    { amount: 24000, label: '12 Months', popular: false }
  ];

  return (
    <div className="overflow-hidden -mt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=2070&auto=format&fit=crop')",
            }}
          />
          {/* Modern Gradient Overlay - Teal/Emerald Theme */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-gray-900/90 to-teal-900/80" />
          
          {/* Animated Gradient Orbs */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-teal-500/10 to-amber-500/10 rounded-full blur-3xl" />
          </div>

          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        {/* Content */}
        <div className={`relative z-10 container mx-auto px-4 pt-32 pb-20 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2.5 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-400"></span>
            </span>
            <span className="text-white/90 text-sm font-medium">Registered on 2nd January 2023</span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tight leading-none">
            Sri Yaali Foundation
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-emerald-300 to-teal-300 animate-gradient">
              India
            </span>
          </h1>

          {/* Tamil Motto */}
          <p className="text-2xl md:text-3xl text-amber-300/90 font-medium mb-8 italic">
            "ஊருக்கு உழைத்திடல் யோகம்"
          </p>

          {/* Description */}
          <div className="max-w-2xl mx-auto mb-10">
            <p className="text-lg md:text-xl text-white/70 leading-relaxed">
              Compassion can transform communities. We support education for children, 
              emergency health needs, and youth empowerment through service.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="/donate" 
              className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-teal-400 to-emerald-400 text-gray-900 font-bold px-8 py-4 rounded-full shadow-2xl shadow-teal-500/25 hover:shadow-teal-500/40 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
            >
              <span className="text-lg">Donate Now</span>
              <div className="w-8 h-8 bg-white/30 rounded-full flex items-center justify-center group-hover:bg-white/50 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </a>
            <a 
              href="/volunteer" 
              className="group inline-flex items-center gap-3 bg-white/5 backdrop-blur-sm border-2 border-white/20 text-white font-semibold px-8 py-4 rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:-translate-y-1"
            >
              <span className="text-lg">Become a Volunteer</span>
              <svg className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
            <div className="flex flex-col items-center gap-2 text-white/40">
              <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
              <div className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-1.5">
                <div className="w-1.5 h-3 bg-teal-400 rounded-full animate-bounce" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-24 bg-white">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
        
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="group relative bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 lg:p-10 border border-gray-100 hover:border-gray-200 hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-500 overflow-hidden"
              >
                {/* Hover Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <div className="relative text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 group-hover:bg-gray-50 rounded-2xl mb-6 text-3xl transition-colors">
                    {stat.icon}
                  </div>
                  <div className={`text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r ${stat.color} mb-3`}>
                    {stat.value}
                  </div>
                  <div className="text-gray-500 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        {/* Decorative */}
        <div className="absolute top-0 -left-40 w-80 h-80 bg-teal-100 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 -right-40 w-80 h-80 bg-amber-100 rounded-full blur-3xl opacity-50" />
        
        <div className="container mx-auto px-4 relative">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
              <span className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
              What We Do
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Our Mission Pillars
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              Three pillars that guide our work towards a better tomorrow
            </p>
          </div>

          {/* Mission Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {missions.map((mission, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
              >
                {/* Image */}
                <div className="relative h-60 overflow-hidden">
                  <img 
                    src={mission.image} 
                    alt={mission.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${mission.gradient} opacity-70 mix-blend-multiply`} />
                  
                  {/* Badge */}
                  {mission.badge && (
                    <div className="absolute top-4 right-4">
                      <span className="inline-flex items-center gap-1.5 bg-white text-red-600 text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                        <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
                        {mission.badge}
                      </span>
                    </div>
                  )}
                  
                  {/* Icon */}
                  <div className="absolute bottom-4 left-4 w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-2xl shadow-xl transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    {mission.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">
                    {mission.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed mb-4">
                    {mission.description}
                  </p>
                  <a 
                    href="/about" 
                    className="inline-flex items-center gap-2 text-teal-600 font-semibold hover:gap-3 transition-all"
                  >
                    Learn more
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section className="py-24 relative overflow-hidden bg-gray-900">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/20 text-teal-300 text-sm font-semibold px-4 py-2 rounded-full mb-4">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
              Make a Difference
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Support a Child's Education
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Your contribution creates lasting impact in young lives
            </p>
          </div>

          {/* Donation Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {donationTiers.map((tier, index) => (
              <div
                key={index}
                className={`relative group rounded-3xl p-8 text-center transition-all duration-500 transform hover:-translate-y-2 ${
                  tier.popular 
                    ? 'bg-gradient-to-br from-teal-500 to-emerald-500 shadow-2xl shadow-teal-500/30' 
                    : 'bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10'
                }`}
              >
                {/* Popular Badge */}
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 bg-amber-400 text-gray-900 text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Amount */}
                <div className="mb-4 pt-2">
                  <span className={`text-4xl font-black ${tier.popular ? 'text-white' : 'text-white'}`}>
                    ₹{tier.amount.toLocaleString()}
                  </span>
                </div>

                {/* Label */}
                <p className={`mb-6 font-medium ${tier.popular ? 'text-teal-100' : 'text-gray-400'}`}>
                  Education for {tier.label}
                </p>

                {/* Features */}
                <ul className={`text-sm space-y-3 mb-8 ${tier.popular ? 'text-teal-100' : 'text-gray-400'}`}>
                  <li className="flex items-center justify-center gap-2">
                    <svg className={`w-4 h-4 ${tier.popular ? 'text-white' : 'text-teal-400'}`} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Stationery & Books
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <svg className={`w-4 h-4 ${tier.popular ? 'text-white' : 'text-teal-400'}`} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Learning Materials
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <svg className={`w-4 h-4 ${tier.popular ? 'text-white' : 'text-teal-400'}`} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    School Support
                  </li>
                </ul>

                {/* Button */}
                <a 
                  href="/donate" 
                  className={`inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-bold transition-all duration-300 ${
                    tier.popular
                      ? 'bg-white text-teal-600 hover:bg-gray-100 shadow-lg'
                      : 'bg-gradient-to-r from-teal-500 to-emerald-500 text-white hover:shadow-lg hover:shadow-teal-500/30'
                  }`}
                >
                  Donate Now
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </a>
              </div>
            ))}
          </div>

          {/* Trust Badge */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3">
              <svg className="w-5 h-5 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-300 text-sm">100% of donations go directly to children's education</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-teal-50/30 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-teal-100 to-emerald-100 rounded-full blur-3xl opacity-50" />
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Ready to Make a <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-emerald-500">Difference</span>?
            </h2>
            <p className="text-gray-500 text-lg mb-10 max-w-2xl mx-auto">
              Join our community of volunteers and donors who are transforming lives across India.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="/volunteer" 
                className="inline-flex items-center gap-3 bg-gray-900 text-white font-bold px-8 py-4 rounded-full hover:bg-gray-800 transition-all transform hover:-translate-y-1 shadow-xl hover:shadow-2xl"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Join as Volunteer
              </a>
              <a 
                href="/donor" 
                className="inline-flex items-center gap-3 bg-gradient-to-r from-rose-500 to-red-500 text-white font-bold px-8 py-4 rounded-full hover:shadow-xl hover:shadow-rose-500/30 transition-all transform hover:-translate-y-1"
              >
                <span className="text-xl">🩸</span>
                Register as Blood Donor
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Styles */}
      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
}

export default Home;