import React from 'react';

function Home() {
  return (
    <div>
      {/* Hero Section with NGO banner */}
      <section
        className="text-white relative overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=2070&auto=format&fit=crop')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-blue-900/70"></div>
        <div className="relative container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3">Sri Yaali Foundation India</h1>
          <p className="text-xl italic mb-1">“ஊருக்கு உழைத்திடல் யோகம்”</p>
          <p className="text-base text-blue-100">Registered on 2nd January 2023</p>
          <div className="max-w-2xl mx-auto mt-6 rounded-xl p-6 bg-blue-800/30 border border-white/10">
            <p className="text-blue-50">
              Compassion can transform communities. We support education for children, emergency health needs,
              and youth empowerment through service.
            </p>
            <div className="mt-6 space-x-3">
              <a href="/donate" className="inline-block bg-white text-blue-800 font-semibold px-6 py-3 rounded shadow hover:bg-gray-100">Donate Now</a>
              <a href="/volunteer" className="inline-block bg-blue-600 border border-white text-white px-6 py-3 rounded hover:bg-blue-500">Become a Volunteer</a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div className="bg-white shadow rounded p-6">
          <div className="text-3xl font-extrabold text-blue-800">160K+</div>
          <div className="text-gray-600">Children supported (goal)</div>
        </div>
        <div className="bg-white shadow rounded p-6">
          <div className="text-3xl font-extrabold text-blue-800">1000+</div>
          <div className="text-gray-600">Blood donors mobilized</div>
        </div>
        <div className="bg-white shadow rounded p-6">
          <div className="text-3xl font-extrabold text-blue-800">2023</div>
          <div className="text-gray-600">Year of registration</div>
        </div>
      </section>

      {/* Mission Cards */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our Mission Pillars</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded shadow p-6 hover:shadow-lg transition">
              <img src="https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=2070&auto=format&fit=crop" alt="Education support" className="w-full h-40 object-cover rounded mb-4" />
              <h3 className="text-xl font-semibold mb-2">Education Support</h3>
              <p className="text-gray-700">Providing basic educational needs so children can learn with confidence.</p>
            </div>
            <div className="bg-white rounded shadow p-6 hover:shadow-lg transition relative">
              <span className="absolute top-3 right-3 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded">Emergency</span>
              <img src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=2070&auto=format&fit=crop" alt="Emergency health support - hospital" className="w-full h-56 object-cover rounded mb-4" />
              <h3 className="text-xl font-semibold mb-2">Emergency Health Support</h3>
              <p className="text-gray-700">Mobilizing youth volunteers for urgent blood donations and critical needs.</p>
            </div>
            <div className="bg-white rounded shadow p-6 hover:shadow-lg transition">
              <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop" alt="Youth empowerment" className="w-full h-40 object-cover rounded mb-4" />
              <h3 className="text-xl font-semibold mb-2">Youth Empowerment</h3>
              <p className="text-gray-700">Guiding youth into volunteerism to build compassionate leaders.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Tiers */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Support a Child's Education</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { amount: 3000, label: '3 Months' },
            { amount: 6000, label: '6 Months' },
            { amount: 12000, label: '9 Months' },
            { amount: 24000, label: '12 Months' }
          ].map(tier => (
            <div key={tier.amount} className="bg-white shadow rounded p-6 text-center hover:shadow-lg transition">
              <div className="text-2xl font-bold text-blue-800">₹{tier.amount}</div>
              <div className="text-gray-600 mb-4">Education for {tier.label}</div>
              <a href="/donate" className="inline-block bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800">Donate</a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home; 