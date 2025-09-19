import React from 'react';

function Contact() {
  return (
    <div>
      {/* Hero with contact-themed banner */}
      <section
        className="text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1525182008055-f88b95ff7980?q=80&w=2069&auto=format&fit=crop')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="bg-blue-900/70">
          <div className="container mx-auto px-4 py-14 text-center">
            <h2 className="text-4xl font-extrabold mb-2">Contact Sri Yaali Foundation India</h2>
            <p className="text-blue-100">We’d love to hear from you. Reach out anytime.</p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 -mt-10">
        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white shadow rounded p-6 text-center">
            <div className="text-sm uppercase text-gray-500">Email</div>
            <a href="mailto:sriyaalifoundationindia@gmail.com" className="text-lg text-blue-700 hover:underline">sriyaalifoundationindia@gmail.com</a>
          </div>
          <div className="bg-white shadow rounded p-6 text-center">
            <div className="text-sm uppercase text-gray-500">Phone</div>
            <a href="tel:+917845203014" className="text-lg text-blue-700 hover:underline">+91 7845203014</a>
          </div>
          <div className="bg-white shadow rounded p-6 text-center">
            <div className="text-sm uppercase text-gray-500">Address</div>
            <div className="text-lg">108, KK Street, TN Palayam, Coimbatore - 641047</div>
          </div>
        </div>

        {/* Simple form CTA */}
        <div className="max-w-2xl mx-auto mt-8 bg-white shadow rounded p-6">
          <h3 className="text-xl font-semibold mb-3">Send us a message</h3>
          <form onSubmit={(e) => e.preventDefault()} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input placeholder="Your Name" className="px-3 py-2 border rounded" />
            <input placeholder="Your Email" className="px-3 py-2 border rounded" />
            <input placeholder="Phone" className="px-3 py-2 border rounded md:col-span-2" />
            <textarea placeholder="Message" className="px-3 py-2 border rounded md:col-span-2" rows="4" />
            <button className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 md:col-span-2">Submit</button>
          </form>
        </div>

        <div className="text-center mt-8 mb-10">
          <a href="/volunteer" className="inline-block bg-blue-700 text-white px-6 py-3 rounded hover:bg-blue-800">Become a Volunteer</a>
        </div>
      </div>
    </div>
  );
}

export default Contact; 