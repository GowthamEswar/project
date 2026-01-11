import React, { useState } from 'react';
import api from '../api/axios';

function Volunteer() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    interestArea: '',
    message: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const [focusedField, setFocusedField] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
    setSuccess('');
  };

  const validate = () => {
    if (!form.name || !form.email || !form.phone || !form.interestArea || !form.message) {
      setError('All fields are required.');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    try {
      await api.post('/api/volunteers', form);
      setSuccess('Thank you for registering as a volunteer! We will contact you soon.');
      setForm({ name: '', email: '', phone: '', interestArea: '', message: '' });
    } catch (err) {
      setError(err.response?.data?.error || 'Submission failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const benefits = [
    {
      icon: '🎯',
      title: 'Make Real Impact',
      description: 'See the direct results of your efforts in children\'s smiles and saved lives.'
    },
    {
      icon: '🤝',
      title: 'Build Connections',
      description: 'Join a community of like-minded individuals passionate about change.'
    },
    {
      icon: '📜',
      title: 'Get Certified',
      description: 'Receive volunteer certificates recognizing your valuable contributions.'
    },
    {
      icon: '🌱',
      title: 'Grow Personally',
      description: 'Develop leadership, communication, and organizational skills.'
    }
  ];

  const opportunities = [
    {
      title: 'Education Support',
      description: 'Help distribute stationery, teach students, or organize school programs.',
      icon: '📚',
      color: 'from-amber-500 to-orange-500',
      bgColor: 'bg-amber-50',
      textColor: 'text-amber-600'
    },
    {
      title: 'Blood Donation Network',
      description: 'Join our emergency response team and help save lives during critical times.',
      icon: '🩸',
      color: 'from-rose-500 to-red-500',
      bgColor: 'bg-rose-50',
      textColor: 'text-rose-600'
    },
    {
      title: 'Event Coordination',
      description: 'Help plan and execute community events, drives, and awareness campaigns.',
      icon: '📅',
      color: 'from-teal-500 to-emerald-500',
      bgColor: 'bg-teal-50',
      textColor: 'text-teal-600'
    },
    {
      title: 'Social Media & Outreach',
      description: 'Spread our message, create content, and engage with our community online.',
      icon: '📱',
      color: 'from-purple-500 to-indigo-500',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600'
    }
  ];

  const interestAreas = [
    'Education Support',
    'Blood Donation Network',
    'Event Coordination',
    'Social Media & Outreach',
    'Fundraising',
    'Photography & Videography',
    'Other'
  ];

  return (
    <div className="overflow-hidden -mt-20">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop')",
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
        <div className="relative z-10 container mx-auto px-4 pt-32 pb-16 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2.5 mb-8">
            <span className="text-teal-400">🤝</span>
            <span className="text-white/90 text-sm font-medium">Join Our Team</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
            Become a <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-emerald-300">Volunteer</span>
          </h1>

          <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            Join our network of changemakers. Uplift children, support health emergencies, 
            and inspire your community with your service.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
              <span className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
              Why Volunteer?
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              Benefits of Joining Us
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100 hover:border-teal-200 hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="w-14 h-14 mx-auto bg-teal-100 group-hover:bg-teal-200 rounded-2xl flex items-center justify-center text-2xl mb-4 transition-colors">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Opportunities Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
              <span className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
              Ways to Help
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Volunteer Opportunities
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Choose an area that matches your skills and interests
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {opportunities.map((opp, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 flex gap-4"
              >
                <div className={`w-14 h-14 ${opp.bgColor} rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform`}>
                  {opp.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{opp.title}</h3>
                  <p className="text-gray-600 text-sm">{opp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form Section */}
      <section className="py-20 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              {/* Left Side - Info */}
              <div className="lg:col-span-2 text-white">
                <div className="sticky top-32">
                  <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/20 text-teal-300 text-sm font-semibold px-4 py-2 rounded-full mb-6">
                    <span className="w-1.5 h-1.5 bg-teal-400 rounded-full" />
                    Register Now
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black mb-6">
                    Start Your Journey
                  </h2>
                  <p className="text-gray-400 mb-8">
                    Fill out the form and take the first step towards making a difference. 
                    We'll get in touch within 2-3 days.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-teal-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold">No Experience Needed</h4>
                        <p className="text-gray-400 text-sm">Anyone with a kind heart can join us</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-teal-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold">Flexible Timing</h4>
                        <p className="text-gray-400 text-sm">Contribute based on your availability</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-teal-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold">Join a Community</h4>
                        <p className="text-gray-400 text-sm">Connect with passionate volunteers</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Form */}
              <div className="lg:col-span-3">
                <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 shadow-2xl">
                  {/* Success Message */}
                  {success && (
                    <div className="mb-6 p-4 bg-teal-50 border border-teal-200 rounded-2xl flex items-start gap-3">
                      <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-teal-800">Registration Successful!</h4>
                        <p className="text-teal-600 text-sm">{success}</p>
                      </div>
                    </div>
                  )}

                  {/* Error Message */}
                  {error && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-2xl flex items-start gap-3">
                      <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-red-800">Error</h4>
                        <p className="text-red-600 text-sm">{error}</p>
                      </div>
                    </div>
                  )}

                  <div className="space-y-5">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField('')}
                        className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 outline-none ${
                          focusedField === 'name' 
                            ? 'border-teal-500 bg-teal-50/50' 
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>

                    {/* Email & Phone */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          name="email"
                          type="email"
                          value={form.email}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('email')}
                          onBlur={() => setFocusedField('')}
                          className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 outline-none ${
                            focusedField === 'email' 
                              ? 'border-teal-500 bg-teal-50/50' 
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Phone <span className="text-red-500">*</span>
                        </label>
                        <input
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('phone')}
                          onBlur={() => setFocusedField('')}
                          className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 outline-none ${
                            focusedField === 'phone' 
                              ? 'border-teal-500 bg-teal-50/50' 
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                          placeholder="+91 98765 43210"
                          required
                        />
                      </div>
                    </div>

                    {/* Interest Area */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Area of Interest <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="interestArea"
                        value={form.interestArea}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('interestArea')}
                        onBlur={() => setFocusedField('')}
                        className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 outline-none appearance-none bg-white ${
                          focusedField === 'interestArea' 
                            ? 'border-teal-500 bg-teal-50/50' 
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                        required
                      >
                        <option value="">Select your interest area</option>
                        {interestAreas.map((area, index) => (
                          <option key={index} value={area}>{area}</option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Tell us about yourself <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField('')}
                        rows="4"
                        className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 outline-none resize-none ${
                          focusedField === 'message' 
                            ? 'border-teal-500 bg-teal-50/50' 
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                        placeholder="Share your motivation for volunteering, any relevant experience, or skills you'd like to contribute..."
                        required
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-bold py-4 rounded-xl hover:shadow-lg hover:shadow-teal-500/30 transition-all duration-300 transform hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {loading ? (
                        <>
                          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          <span>Submitting...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Application</span>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial / Quote Section */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-6xl mb-6">💬</div>
            <blockquote className="text-2xl md:text-3xl font-medium text-gray-800 italic mb-6">
              "The best way to find yourself is to lose yourself in the service of others."
            </blockquote>
            <p className="text-gray-500 font-medium">— Mahatma Gandhi</p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-2">Have Questions?</h3>
              <p className="text-gray-400">We're here to help you get started on your volunteer journey.</p>
            </div>
            <div className="flex items-center gap-4">
              <a 
                href="https://wa.me/917845203014" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 text-white font-semibold px-6 py-3 rounded-full hover:bg-green-600 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
              </a>
              <a 
                href="/contact" 
                className="inline-flex items-center gap-2 bg-white/10 text-white font-semibold px-6 py-3 rounded-full hover:bg-white/20 transition-colors border border-white/20"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Volunteer;