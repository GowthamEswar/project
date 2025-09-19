import React from 'react';

function About() {
  return (
    <div>
      {/* Hero */}
      <section
        className="text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?q=80&w=2070&auto=format&fit=crop')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="bg-blue-900/70">
          <div className="container mx-auto px-4 py-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-3">About Sri Yaali Foundation India</h2>
            <p className="text-blue-100 max-w-3xl text-lg">We act with heart, stand with people, and build a stronger community through unity — focusing on education, emergency health, and youth empowerment.</p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 -mt-10">
        {/* Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white shadow-lg rounded p-6">
            <h3 className="text-xl font-semibold mb-2">Education Support</h3>
            <p className="text-gray-700">Providing basic educational needs so children can learn with confidence.</p>
          </div>
          <div className="bg-white shadow-lg rounded p-6">
            <h3 className="text-xl font-semibold mb-2">Emergency Health</h3>
            <p className="text-gray-700">Mobilizing youth volunteers for urgent blood donations and critical needs.</p>
          </div>
          <div className="bg-white shadow-lg rounded p-6">
            <h3 className="text-xl font-semibold mb-2">Youth Empowerment</h3>
            <p className="text-gray-700">Guiding youth into volunteerism to build compassionate leaders.</p>
          </div>
        </div>

        {/* Story */}
        <section className="max-w-4xl mx-auto mb-10 bg-gray-50 border rounded p-6 text-lg leading-relaxed">
          <p className="mb-4">
            Sri Yaali Foundation India is a young yet passionate non-profit organization founded with the belief that compassion can transform communities. Since our registration on 2nd January 2023, we have dedicated ourselves to creating meaningful change through small but powerful acts of kindness.
          </p>
          <p>
            We bring together selfless volunteers, identify areas where support is most needed, and act with empathy and responsibility. Though our journey has just begun, every step we take is a promise towards building a brighter, more caring India.
          </p>
        </section>

        {/* Journey */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white rounded shadow p-6">
            <h4 className="text-xl font-semibold mb-2">Stationery Kit Distribution</h4>
            <p className="text-gray-700">On school reopening day, we distributed stationery kits to young learners, sending a powerful message of encouragement.</p>
          </div>
          <div className="bg-white rounded shadow p-6">
            <h4 className="text-xl font-semibold mb-2">Emergency Blood Donation</h4>
            <p className="text-gray-700">Our network of student volunteers responds to urgent calls, becoming lifelines for families in distress.</p>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center mb-12">
          <a href="/volunteer" className="inline-block bg-blue-700 text-white px-6 py-3 rounded hover:bg-blue-800">Join as a Volunteer</a>
        </div>
      </div>
    </div>
  );
}

export default About; 