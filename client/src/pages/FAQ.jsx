import React, { useState } from 'react';

const faqs = [
  {
    q: 'What is Sri Yaali Foundation India?',
    a: 'Sri Yaali Foundation India is a registered non-profit organization (since 2nd January 2023) committed to serving society through education support for children, emergency blood donation for patients, and youth-driven community service.'
  },
  {
    q: 'What activities has the foundation done so far?',
    a: 'We have distributed stationery kits to government school children on their first day and coordinated emergency blood donations with college students to support patients in critical need across Coimbatore.'
  },
  {
    q: 'How can I become a volunteer?',
    a: 'Fill out the Volunteer Registration Form on our website. Once registered, we will contact you for upcoming events and activities.'
  },
  {
    q: 'Do I need prior experience to volunteer?',
    a: 'Not at all. Anyone with a kind heart and willingness to serve can join us. We provide guidance and connect you to opportunities where you can make a difference.'
  },
  {
    q: 'Why should I join Sri Yaali Foundation India?',
    a: 'By joining, you empower children, help save lives during emergencies, inspire others to contribute, and become part of a community that believes in “Small Acts, Big Impact.”'
  }
];

function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4 py-14 text-center">
          <h2 className="text-4xl font-extrabold mb-2">Frequently Asked Questions</h2>
          <p className="text-blue-100">Find answers about our mission, activities, and how to get involved.</p>
        </div>
      </section>

      <div className="container mx-auto px-4 -mt-8 mb-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Intro / Highlight Card */}
        <div className="bg-white shadow rounded p-6 lg:sticky lg:top-24 h-max">
          <h3 className="text-xl font-semibold mb-2">Need quick help?</h3>
          <p className="text-gray-700 mb-4">If your question isn’t covered below, reach us directly.</p>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• Email: <a href="mailto:sriyaalifoundationindia@gmail.com" className="text-blue-700 hover:underline">sriyaalifoundationindia@gmail.com</a></li>
            <li>• Phone: <a href="tel:+917845203014" className="text-blue-700 hover:underline">+91 7845203014</a></li>
            <li>• Volunteer: <a href="/volunteer" className="text-blue-700 hover:underline">Join here</a></li>
          </ul>
          <a href="/donate" className="mt-4 inline-block bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800">Donate</a>
        </div>

        {/* Accordion */}
        <div className="lg:col-span-2">
          <div className="bg-white shadow rounded divide-y">
            {faqs.map((item, idx) => (
              <div key={idx} className="group">
                <button
                  className="w-full text-left px-5 py-4 flex justify-between items-center hover:bg-gray-50 transition"
                  onClick={() => setOpen(open === idx ? -1 : idx)}
                >
                  <span className="font-semibold pr-4">{item.q}</span>
                  <span className={`ml-4 inline-flex h-6 w-6 items-center justify-center rounded-full border text-sm transition ${open === idx ? 'rotate-45 border-blue-700 text-blue-700' : 'border-gray-400 text-gray-600'}`}>+</span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${open === idx ? 'max-h-64' : 'max-h-0'}`}
                >
                  <div className="px-5 pb-5 text-gray-700 leading-relaxed">{item.a}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <a href="/volunteer" className="inline-block bg-blue-700 text-white px-6 py-3 rounded hover:bg-blue-800">Become a Volunteer</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
