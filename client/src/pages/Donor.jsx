import React, { useState } from 'react';
import api from '../api/axios';

function Donor() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    bloodGroup: '',
    city: '',
    availability: 'available',
    lastDonatedAt: ''
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
    if (!form.name || !form.phone || !form.bloodGroup || !form.city) {
      setError('Name, phone, blood group, and city are required.');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    try {
      const payload = { ...form };
      if (!payload.lastDonatedAt) delete payload.lastDonatedAt;
      await api.post('/api/donors', payload);
      setSuccess('Thank you for registering as a blood donor! You are now part of our emergency support network.');
      setForm({ name: '', email: '', phone: '', bloodGroup: '', city: '', availability: 'available', lastDonatedAt: '' });
    } catch (err) {
      setError(err.response?.data?.error || 'Submission failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'];

  const stats = [
    { value: '1000+', label: 'Registered Donors', icon: '👥' },
    { value: '500+', label: 'Lives Saved', icon: '❤️' },
    { value: '24/7', label: 'Emergency Support', icon: '🚨' }
  ];

  const bloodGroupInfo = [
    { group: 'O-', type: 'Universal Donor', description: 'Can donate to all blood types', color: 'from-red-500 to-rose-600' },
    { group: 'AB+', type: 'Universal Recipient', description: 'Can receive from all blood types', color: 'from-purple-500 to-indigo-600' },
    { group: 'O+', type: 'Most Common', description: 'Most common blood type in India', color: 'from-teal-500 to-emerald-600' },
    { group: 'AB-', type: 'Rarest', description: 'Rarest blood type, highly needed', color: 'from-amber-500 to-orange-600' }
  ];

  const guidelines = [
    { icon: '💧', title: 'Stay Hydrated', description: 'Drink plenty of water before and after donation' },
    { icon: '🍎', title: 'Eat Well', description: 'Have a healthy meal before donating' },
    { icon: '😴', title: 'Rest Well', description: 'Get a good night\'s sleep before donation' },
    { icon: '🪪', title: 'Carry ID', description: 'Bring a valid government ID proof' },
    { icon: '⏰', title: 'Wait Period', description: 'Wait 3 months between donations' },
    { icon: '🏥', title: 'Be Healthy', description: 'Ensure you\'re feeling well on donation day' }
  ];

  return (
    <div className="overflow-hidden -mt-20">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-rose-900 via-red-900 to-rose-800" />
          
          {/* Animated Blood Cells */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-red-500/20 rounded-full blur-2xl animate-pulse" />
            <div className="absolute top-1/2 right-1/4 w-40 h-40 bg-rose-500/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '0.5s' }} />
            <div className="absolute bottom-1/4 left-1/3 w-36 h-36 bg-red-400/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
          </div>

          {/* Pattern Overlay */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 pt-32 pb-16 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2.5 mb-8">
            <span className="text-2xl">🩸</span>
            <span className="text-white/90 text-sm font-medium">Save Lives</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
            Blood Donor <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-300 to-red-300">Registration</span>
          </h1>

          <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed mb-8">
            Be the reason someone smiles today. Join our emergency blood support network 
            and help save lives in critical moments.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-6 mt-12">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-6 py-4 text-center">
                <div className="text-2xl mb-1">{stat.icon}</div>
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-white/60 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blood Group Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-rose-50 text-rose-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
              <span className="w-1.5 h-1.5 bg-rose-500 rounded-full" />
              Blood Types
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              Know Your Blood Group
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {bloodGroupInfo.map((info, index) => (
              <div key={index} className="group relative bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 text-center overflow-hidden">
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${info.color}`} />
                <div className={`text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r ${info.color} mb-2`}>
                  {info.group}
                </div>
                <div className="font-semibold text-gray-900 text-sm mb-1">{info.type}</div>
                <div className="text-gray-500 text-xs">{info.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Side - Form */}
              <div>
                <div className="inline-flex items-center gap-2 bg-rose-50 text-rose-700 text-sm font-semibold px-4 py-2 rounded-full mb-6">
                  <span className="w-1.5 h-1.5 bg-rose-500 rounded-full" />
                  Register Now
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                  Join Our Network
                </h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below to become a registered blood donor. 
                  We'll contact you when there's an emergency need matching your blood group.
                </p>

                <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
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
                            ? 'border-rose-500 bg-rose-50/50' 
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>

                    {/* Phone & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
                              ? 'border-rose-500 bg-rose-50/50' 
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                          placeholder="+91 98765 43210"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Email
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
                              ? 'border-rose-500 bg-rose-50/50' 
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    {/* Blood Group & City */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Blood Group <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="bloodGroup"
                          value={form.bloodGroup}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('bloodGroup')}
                          onBlur={() => setFocusedField('')}
                          className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 outline-none appearance-none bg-white ${
                            focusedField === 'bloodGroup' 
                              ? 'border-rose-500 bg-rose-50/50' 
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                          required
                        >
                          <option value="">Select blood group</option>
                          {bloodGroups.map((group) => (
                            <option key={group} value={group}>{group}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          City <span className="text-red-500">*</span>
                        </label>
                        <input
                          name="city"
                          value={form.city}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('city')}
                          onBlur={() => setFocusedField('')}
                          className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 outline-none ${
                            focusedField === 'city' 
                              ? 'border-rose-500 bg-rose-50/50' 
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                          placeholder="e.g., Coimbatore"
                          required
                        />
                      </div>
                    </div>

                    {/* Availability & Last Donated */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Availability
                        </label>
                        <select
                          name="availability"
                          value={form.availability}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('availability')}
                          onBlur={() => setFocusedField('')}
                          className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 outline-none appearance-none bg-white ${
                            focusedField === 'availability' 
                              ? 'border-rose-500 bg-rose-50/50' 
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <option value="available">Available</option>
                          <option value="temporarily-unavailable">Temporarily Unavailable</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Last Donated
                        </label>
                        <input
                          name="lastDonatedAt"
                          type="date"
                          value={form.lastDonatedAt}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('lastDonatedAt')}
                          onBlur={() => setFocusedField('')}
                          className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 outline-none ${
                            focusedField === 'lastDonatedAt' 
                              ? 'border-rose-500 bg-rose-50/50' 
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-gradient-to-r from-rose-500 to-red-500 text-white font-bold py-4 rounded-xl hover:shadow-lg hover:shadow-rose-500/30 transition-all duration-300 transform hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {loading ? (
                        <>
                          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          <span>Registering...</span>
                        </>
                      ) : (
                        <>
                          <span>🩸</span>
                          <span>Register as Donor</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>

              {/* Right Side - Guidelines */}
              <div>
                <div className="sticky top-32">
                  <div className="bg-gradient-to-br from-rose-50 to-red-50 rounded-3xl p-8 border border-rose-100">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                      <span className="w-10 h-10 bg-rose-500 rounded-xl flex items-center justify-center text-white text-lg">📋</span>
                      Donation Guidelines
                    </h3>
                    
                    <div className="space-y-4">
                      {guidelines.map((item, index) => (
                        <div key={index} className="flex items-start gap-4 bg-white rounded-xl p-4">
                          <div className="w-10 h-10 bg-rose-100 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                            {item.icon}
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">{item.title}</h4>
                            <p className="text-gray-600 text-sm">{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Eligibility Note */}
                    <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-xl">
                      <div className="flex items-start gap-3">
                        <span className="text-xl">⚠️</span>
                        <div>
                          <h4 className="font-semibold text-amber-800">Eligibility</h4>
                          <p className="text-amber-700 text-sm">
                            You must be 18-65 years old, weigh at least 50kg, and be in good health to donate blood.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-500/30 text-red-300 text-sm font-semibold px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              Emergency
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              Need Blood Urgently?
            </h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Contact us immediately for emergency blood requirements. Our volunteer network is ready to help 24/7.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="tel:+917845203014"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-rose-500 to-red-500 text-white font-bold px-8 py-4 rounded-full hover:shadow-xl hover:shadow-rose-500/30 transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call: +91 7845203014
              </a>
              <a 
                href="https://wa.me/917845203014"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 bg-green-500 text-white font-bold px-8 py-4 rounded-full hover:bg-green-600 transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 bg-gradient-to-br from-rose-50 to-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-6xl mb-6">❤️</div>
            <blockquote className="text-2xl md:text-3xl font-medium text-gray-800 italic mb-6">
              "The blood you donate gives someone another chance at life."
            </blockquote>
            <p className="text-gray-500 font-medium">— One donation can save up to 3 lives</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Donor;