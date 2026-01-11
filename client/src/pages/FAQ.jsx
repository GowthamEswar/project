import React, { useState } from 'react';

const faqs = [
  {
    category: 'About Us',
    icon: '🏛️',
    questions: [
      {
        q: 'What is Sri Yaali Foundation India?',
        a: 'Sri Yaali Foundation India is a registered non-profit organization (since 2nd January 2023) committed to serving society through education support for children, emergency blood donation for patients, and youth-driven community service.'
      },
      {
        q: 'What activities has the foundation done so far?',
        a: 'We have distributed stationery kits to government school children on their first day and coordinated emergency blood donations with college students to support patients in critical need across Coimbatore.'
      },
      {
        q: 'Where is the foundation located?',
        a: 'Our office is located at 108, KK Street, TN Palayam, Coimbatore - 641047, Tamil Nadu, India.'
      }
    ]
  },
  {
    category: 'Volunteering',
    icon: '🤝',
    questions: [
      {
        q: 'How can I become a volunteer?',
        a: 'Fill out the Volunteer Registration Form on our website. Once registered, we will contact you for upcoming events and activities.'
      },
      {
        q: 'Do I need prior experience to volunteer?',
        a: 'Not at all. Anyone with a kind heart and willingness to serve can join us. We provide guidance and connect you to opportunities where you can make a difference.'
      },
      {
        q: 'What volunteer opportunities are available?',
        a: 'We have opportunities in education support, blood donation coordination, event management, social media outreach, fundraising, and photography/videography.'
      }
    ]
  },
  {
    category: 'Donations',
    icon: '💝',
    questions: [
      {
        q: 'How can I donate to the foundation?',
        a: 'You can donate via direct bank transfer. Visit our Donate page for complete bank details. After transferring, send us a WhatsApp message with your transaction details for confirmation.'
      },
      {
        q: 'Is my donation tax-deductible?',
        a: 'As a registered non-profit organization, we can provide donation receipts. Please contact us for specific tax-related queries as regulations may vary.'
      },
      {
        q: 'How is my donation used?',
        a: '100% of your donation goes directly to our programs - education support (stationery kits, learning materials), emergency health support, and community service initiatives.'
      }
    ]
  },
  {
    category: 'Blood Donation',
    icon: '🩸',
    questions: [
      {
        q: 'How do I register as a blood donor?',
        a: 'Visit our Blood Donor page and fill out the registration form with your details including blood group, city, and availability. We\'ll add you to our emergency support network.'
      },
      {
        q: 'What are the eligibility requirements for blood donation?',
        a: 'You must be 18-65 years old, weigh at least 50kg, and be in good health. You should wait at least 3 months between donations.'
      },
      {
        q: 'How does the emergency blood donation network work?',
        a: 'When there\'s an urgent blood requirement, we contact registered donors matching the required blood group in the area. Donors can then coordinate directly to help save lives.'
      }
    ]
  },
  {
    category: 'Getting Involved',
    icon: '🌟',
    questions: [
      {
        q: 'Why should I join Sri Yaali Foundation India?',
        a: 'By joining, you empower children, help save lives during emergencies, inspire others to contribute, and become part of a community that believes in "Small Acts, Big Impact."'
      },
      {
        q: 'Can organizations or colleges partner with you?',
        a: 'Absolutely! We welcome partnerships with educational institutions, corporates, and other organizations. Contact us to discuss collaboration opportunities.'
      }
    ]
  }
];

function FAQ() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [openQuestion, setOpenQuestion] = useState(0);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? -1 : index);
  };

  return (
    <div className="overflow-hidden -mt-20">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-teal-900 to-emerald-900" />
          
          {/* Decorative Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl" />
          </div>

          {/* Pattern */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 pt-32 pb-16 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2.5 mb-8">
            <span className="text-teal-400">❓</span>
            <span className="text-white/90 text-sm font-medium">Get Answers</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-emerald-300">Questions</span>
          </h1>

          <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            Find answers about our mission, activities, and how to get involved with Sri Yaali Foundation India.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Category Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-28">
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Categories</h3>
                  <nav className="space-y-2">
                    {faqs.map((category, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setActiveCategory(index);
                          setOpenQuestion(0);
                        }}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all ${
                          activeCategory === index
                            ? 'bg-gradient-to-r from-teal-500 to-emerald-500 text-white shadow-lg shadow-teal-500/30'
                            : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        <span className="text-xl">{category.icon}</span>
                        <span className="font-medium">{category.category}</span>
                      </button>
                    ))}
                  </nav>

                  {/* Quick Help Card */}
                  <div className="mt-8 bg-gradient-to-br from-teal-50 to-emerald-50 rounded-2xl p-6 border border-teal-100">
                    <h4 className="font-bold text-gray-900 mb-2">Still have questions?</h4>
                    <p className="text-gray-600 text-sm mb-4">Can't find what you're looking for? Reach out to us directly.</p>
                    <a 
                      href="/contact" 
                      className="inline-flex items-center gap-2 text-teal-600 font-semibold text-sm hover:text-teal-700 transition-colors"
                    >
                      Contact Us
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* FAQ Accordion */}
              <div className="lg:col-span-3">
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-3xl">{faqs[activeCategory].icon}</span>
                    <h2 className="text-2xl font-bold text-gray-900">{faqs[activeCategory].category}</h2>
                  </div>
                  <div className="h-1 w-20 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full" />
                </div>

                <div className="space-y-4">
                  {faqs[activeCategory].questions.map((item, index) => (
                    <div
                      key={index}
                      className={`bg-white rounded-2xl border-2 transition-all duration-300 overflow-hidden ${
                        openQuestion === index 
                          ? 'border-teal-500 shadow-lg shadow-teal-500/10' 
                          : 'border-gray-100 hover:border-gray-200'
                      }`}
                    >
                      <button
                        onClick={() => toggleQuestion(index)}
                        className="w-full flex items-center justify-between p-6 text-left"
                      >
                        <span className="font-semibold text-gray-900 pr-4">{item.q}</span>
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                          openQuestion === index 
                            ? 'bg-teal-500 text-white rotate-180' 
                            : 'bg-gray-100 text-gray-600'
                        }`}>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </button>
                      <div className={`transition-all duration-300 ${openQuestion === index ? 'max-h-96' : 'max-h-0'}`}>
                        <div className="px-6 pb-6">
                          <div className="h-px bg-gray-100 mb-4" />
                          <p className="text-gray-600 leading-relaxed">{item.a}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Volunteer CTA */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 text-center">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-teal-500 to-emerald-500 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-lg">
                  🤝
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Ready to Help?</h3>
                <p className="text-gray-400 mb-6">Join our volunteer network and make a real difference in your community.</p>
                <a 
                  href="/volunteer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-bold px-6 py-3 rounded-full hover:shadow-lg hover:shadow-teal-500/30 transition-all"
                >
                  Become a Volunteer
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>

              {/* Donate CTA */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 text-center">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-lg">
                  💝
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Support Our Cause</h3>
                <p className="text-gray-400 mb-6">Your donation helps children learn and families in medical emergencies.</p>
                <a 
                  href="/donate"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold px-6 py-3 rounded-full hover:shadow-lg hover:shadow-amber-500/30 transition-all"
                >
                  Donate Now
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Strip */}
      <section className="py-12 bg-gradient-to-r from-teal-500 to-emerald-500">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-1">Need more help?</h3>
              <p className="text-teal-100">Get in touch with us directly</p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a 
                href="mailto:sriyaalifoundationindia@gmail.com"
                className="inline-flex items-center gap-2 bg-white text-teal-600 font-semibold px-5 py-3 rounded-full hover:bg-gray-100 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email Us
              </a>
              <a 
                href="https://wa.me/917845203014"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 border border-white/30 text-white font-semibold px-5 py-3 rounded-full hover:bg-white hover:text-teal-600 transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
              </a>
              <a 
                href="tel:+917845203014"
                className="inline-flex items-center gap-2 bg-white/10 border border-white/30 text-white font-semibold px-5 py-3 rounded-full hover:bg-white hover:text-teal-600 transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FAQ;