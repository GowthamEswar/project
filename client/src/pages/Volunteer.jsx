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
      setSuccess('Thank you for registering as a volunteer!');
      setForm({ name: '', email: '', phone: '', interestArea: '', message: '' });
    } catch (err) {
      setError(err.response?.data?.error || 'Submission failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Hero with volunteer banner */}
      <section
        className="text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2069&auto=format&fit=crop')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="bg-blue-900/70">
          <div className="container mx-auto px-4 py-14 text-center">
            <h2 className="text-4xl font-extrabold mb-2">Volunteer Registration</h2>
            <p className="text-blue-100 max-w-2xl mx-auto">Join our network of changemakers. Uplift children, support health emergencies, and inspire your community.</p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 -mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Benefits */}
          <div className="md:col-span-1 space-y-4">
            <div className="bg-white rounded shadow p-5">
              <h3 className="font-semibold mb-1">Why volunteer?</h3>
              <ul className="list-disc pl-5 text-sm space-y-1 text-gray-700">
                <li>Support a child’s education journey</li>
                <li>Be a lifeline during health emergencies</li>
                <li>Lead by example in your community</li>
              </ul>
            </div>
            <div className="bg-white rounded shadow p-5">
              <h3 className="font-semibold mb-1">Tips</h3>
              <ul className="list-disc pl-5 text-sm space-y-1 text-gray-700">
                <li>Share accurate contact details</li>
                <li>Specify your interest area clearly</li>
                <li>We’ll get back within 2–3 days</li>
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8">
              {error && <div className="mb-4 text-red-600">{error}</div>}
              {success && <div className="mb-4 text-green-600">{success}</div>}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 mb-2">Name</label>
                  <input name="name" value={form.name} onChange={handleChange} className="w-full px-3 py-2 border rounded" required />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input name="email" type="email" value={form.email} onChange={handleChange} className="w-full px-3 py-2 border rounded" required />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Phone</label>
                  <input name="phone" value={form.phone} onChange={handleChange} className="w-full px-3 py-2 border rounded" required />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Interest Area</label>
                  <input name="interestArea" value={form.interestArea} onChange={handleChange} className="w-full px-3 py-2 border rounded" required />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-gray-700 mb-2">Message</label>
                  <textarea name="message" value={form.message} onChange={handleChange} className="w-full px-3 py-2 border rounded" required />
                </div>
              </div>
              <button type="submit" className="mt-4 bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800" disabled={loading}>
                {loading ? 'Submitting...' : 'Submit'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Volunteer; 