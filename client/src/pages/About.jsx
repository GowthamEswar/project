import React, { useState } from 'react';

function About() {
  const [activeTimeline, setActiveTimeline] = useState(0);

  const milestones = [
    {
      year: '2023',
      month: 'January',
      title: 'Foundation Registered',
      description: 'Sri Yaali Foundation India officially registered as a non-profit organization.',
      icon: '🎉'
    },
    {
      year: '2023',
      month: 'June',
      title: 'First Stationery Drive',
      description: 'Distributed stationery kits to 200+ government school children on their first day.',
      icon: '📚'
    },
    {
      year: '2023',
      month: 'October',
      title: 'Blood Donation Network',
      description: 'Established emergency blood donation network with college student volunteers.',
      icon: '🩸'
    },
    {
      year: '2024',
      month: 'Ongoing',
      title: 'Growing Impact',
      description: 'Expanding our reach across Coimbatore with more volunteers joining every month.',
      icon: '🚀'
    }
  ];

  const values = [
    {
      icon: '💝',
      title: 'Compassion',
      description: 'Every action we take is driven by genuine care for those we serve.',
      color: 'from-rose-500 to-pink-500'
    },
    {
      icon: '🤝',
      title: 'Unity',
      description: 'We believe in the power of community coming together for change.',
      color: 'from-teal-500 to-emerald-500'
    },
    {
      icon: '⭐',
      title: 'Integrity',
      description: 'Transparency and honesty guide every decision we make.',
      color: 'from-amber-500 to-orange-500'
    },
    {
      icon: '🌱',
      title: 'Growth',
      description: 'We nurture potential in every child and volunteer we work with.',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const team = [
    {
      role: 'Founder & President',
      description: 'Leading the vision and strategic direction of the foundation.',
      icon: '👤'
    },
    {
      role: 'Volunteer Coordinators',
      description: 'Managing and supporting our network of dedicated volunteers.',
      icon: '👥'
    },
    {
      role: 'Community Partners',
      description: 'Schools, colleges, and hospitals who collaborate with us.',
      icon: '🏛️'
    }
  ];

  return (
    <div className="overflow-hidden -mt-20">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?q=80&w=2070&auto=format&fit=crop')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-gray-900/90 to-teal-900/80" />
          
          {/* Decorative Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl" />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 pt-32 pb-20 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2.5 mb-8">
            <span className="text-teal-400">✦</span>
            <span className="text-white/90 text-sm font-medium">Our Story</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-emerald-300">Us</span>
          </h1>

          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            We act with heart, stand with people, and build a stronger community through unity — 
            focusing on education, emergency health, and youth empowerment.
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-1.5">
            <div className="w-1.5 h-3 bg-teal-400 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
                <span className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
                Who We Are
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                Our Mission
              </h2>
            </div>

            <div className="relative">
              {/* Quote decoration */}
              <div className="absolute -top-8 -left-4 text-8xl text-teal-100 font-serif">"</div>
              
              <div className="relative bg-gradient-to-br from-gray-50 to-teal-50/30 rounded-3xl p-8 md:p-12 border border-gray-100">
                <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-6">
                  Sri Yaali Foundation India is a young yet passionate non-profit organization founded with 
                  the belief that <span className="text-teal-600 font-semibold">compassion can transform communities</span>.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Since our registration on <span className="font-semibold">2nd January 2023</span>, we have dedicated 
                  ourselves to creating meaningful change through small but powerful acts of kindness.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We bring together selfless volunteers, identify areas where support is most needed, and act 
                  with empathy and responsibility. Though our journey has just begun, every step we take is a 
                  promise towards building a brighter, more caring India.
                </p>

                {/* Tamil Motto */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <p className="text-2xl text-amber-600 font-medium italic text-center">
                    "ஊருக்கு உழைத்திடல் யோகம்"
                  </p>
                  <p className="text-gray-500 text-center mt-2">
                    "Working for the community is a blessing"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Pillars */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
              <span className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
              What We Do
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Our Focus Areas
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              Three pillars that guide our work towards a better tomorrow
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Education */}
            <div className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-amber-500 to-orange-500" />
              <div className="p-8">
                <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                  📚
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Education Support</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Providing basic educational needs so children can learn with confidence. We distribute 
                  stationery kits, books, and learning materials to government school students.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-gray-600">
                    <span className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center text-amber-600">✓</span>
                    Stationery kit distribution
                  </li>
                  <li className="flex items-center gap-3 text-gray-600">
                    <span className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center text-amber-600">✓</span>
                    School supplies support
                  </li>
                  <li className="flex items-center gap-3 text-gray-600">
                    <span className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center text-amber-600">✓</span>
                    First-day encouragement programs
                  </li>
                </ul>
              </div>
            </div>

            {/* Health */}
            <div className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-rose-500 to-red-500" />
              <div className="p-8">
                <div className="w-16 h-16 bg-rose-100 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                  🏥
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Emergency Health</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Mobilizing youth volunteers for urgent blood donations and critical health needs. 
                  Our network responds quickly to save lives.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-gray-600">
                    <span className="w-6 h-6 bg-rose-100 rounded-full flex items-center justify-center text-rose-600">✓</span>
                    Emergency blood donation
                  </li>
                  <li className="flex items-center gap-3 text-gray-600">
                    <span className="w-6 h-6 bg-rose-100 rounded-full flex items-center justify-center text-rose-600">✓</span>
                    Donor network coordination
                  </li>
                  <li className="flex items-center gap-3 text-gray-600">
                    <span className="w-6 h-6 bg-rose-100 rounded-full flex items-center justify-center text-rose-600">✓</span>
                    Hospital support services
                  </li>
                </ul>
              </div>
            </div>

            {/* Youth */}
            <div className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-teal-500 to-emerald-500" />
              <div className="p-8">
                <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                  🌟
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Youth Empowerment</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Guiding youth into volunteerism to build compassionate leaders. We believe in 
                  nurturing the next generation of changemakers.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-gray-600">
                    <span className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center text-teal-600">✓</span>
                    Volunteer training programs
                  </li>
                  <li className="flex items-center gap-3 text-gray-600">
                    <span className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center text-teal-600">✓</span>
                    Leadership development
                  </li>
                  <li className="flex items-center gap-3 text-gray-600">
                    <span className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center text-teal-600">✓</span>
                    Community service initiatives
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/20 text-teal-300 text-sm font-semibold px-4 py-2 rounded-full mb-4">
              <span className="w-1.5 h-1.5 bg-teal-400 rounded-full" />
              Our Core Beliefs
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Values We Live By
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              These principles guide every decision and action we take
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div 
                key={index}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 text-center hover:bg-white/10 transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className={`w-16 h-16 mx-auto bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline / Journey */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
              <span className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
              Our Journey
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Milestones
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              Key moments in our journey of making a difference
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-teal-500 via-emerald-500 to-teal-500" />

              {milestones.map((milestone, index) => (
                <div 
                  key={index}
                  className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Content */}
                  <div className={`ml-20 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div 
                      className={`bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow cursor-pointer ${activeTimeline === index ? 'ring-2 ring-teal-500' : ''}`}
                      onClick={() => setActiveTimeline(index)}
                    >
                      <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                        <span className="text-sm font-semibold text-teal-600">{milestone.month}</span>
                        <span className="text-sm text-gray-400">{milestone.year}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-10 h-10 bg-white border-4 border-teal-500 rounded-full flex items-center justify-center text-lg shadow-lg">
                    {milestone.icon}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
              <span className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
              Behind The Mission
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Our Team
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              Dedicated individuals working together for change
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <div 
                key={index}
                className="bg-white rounded-3xl p-8 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-teal-100 to-emerald-100 rounded-2xl flex items-center justify-center text-4xl mb-6">
                  {member.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.role}</h3>
                <p className="text-gray-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-teal-500 to-emerald-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Join Our Mission
            </h2>
            <p className="text-xl text-teal-100 mb-10">
              Be part of the change. Together, we can create a lasting impact in our communities.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="/volunteer" 
                className="inline-flex items-center gap-3 bg-white text-teal-600 font-bold px-8 py-4 rounded-full hover:bg-gray-100 transition-all transform hover:-translate-y-1 shadow-xl"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
                Become a Volunteer
              </a>
              <a 
                href="/donate" 
                className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold px-8 py-4 rounded-full hover:bg-white hover:text-teal-600 transition-all transform hover:-translate-y-1"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                Support Our Cause
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;