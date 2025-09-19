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
      setSuccess('Thank you for registering as a blood donor!');
      setForm({ name: '', email: '', phone: '', bloodGroup: '', city: '', availability: 'available', lastDonatedAt: '' });
    } catch (err) {
      setError(err.response?.data?.error || 'Submission failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const groups = ['A+','A-','B+','B-','O+','O-','AB+','AB-'];

  return (
    <div>
      {/* Simple gradient hero (no image) */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-2">Blood Donor Registration</h2>
          <p className="text-blue-100 max-w-2xl mx-auto">Be the reason someone smiles today. Join our emergency blood support network and save lives.</p>
        </div>
      </section>

      <div className="container mx-auto px-4 -mt-10">
        {/* Form card only */}
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-xl px-8 pt-6 pb-8">
            {error && <div className="mb-4 text-red-600">{error}</div>}
            {success && <div className="mb-4 text-green-600">{success}</div>}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 mb-1">Name</label>
                <input name="name" value={form.name} onChange={handleChange} className="w-full px-3 py-2 border rounded" required />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Phone</label>
                <input name="phone" value={form.phone} onChange={handleChange} className="w-full px-3 py-2 border rounded" required />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Email</label>
                <input name="email" type="email" value={form.email} onChange={handleChange} className="w-full px-3 py-2 border rounded" />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Blood Group</label>
                <select name="bloodGroup" value={form.bloodGroup} onChange={handleChange} className="w-full px-3 py-2 border rounded" required>
                  <option value="">Select</option>
                  {groups.map(g => <option key={g} value={g}>{g}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-gray-700 mb-1">City</label>
                <input name="city" value={form.city} onChange={handleChange} className="w-full px-3 py-2 border rounded" required />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Availability</label>
                <select name="availability" value={form.availability} onChange={handleChange} className="w-full px-3 py-2 border rounded">
                  <option value="available">Available</option>
                  <option value="temporarily-unavailable">Temporarily Unavailable</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-gray-700 mb-1">Last Donated (optional)</label>
                <input name="lastDonatedAt" type="date" value={form.lastDonatedAt} onChange={handleChange} className="w-full px-3 py-2 border rounded" />
              </div>
            </div>

            <button type="submit" className="mt-5 bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800" disabled={loading}>
              {loading ? 'Submitting...' : 'Register'}
            </button>
          </form>
        </div>

        {/* Optional helper strip (no images) */}
        <div className="mt-10 bg-gray-50 border rounded p-5 text-center text-sm text-gray-700">
          Healthy donors can donate every 3 months. Sleep well, hydrate, and carry a valid ID.
        </div>
      </div>
    </div>
  );
}

export default Donor;
