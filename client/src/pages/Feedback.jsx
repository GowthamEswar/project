import React, { useState } from 'react';
import api from '../api/axios';

function Feedback() {
  const [form, setForm] = useState({ name: '', email: '', role: 'visitor', message: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
    setSuccess('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.message) { setError('Name and message are required.'); return; }
    setLoading(true);
    try {
      await api.post('/api/feedback', form);
      setSuccess('Thanks for your feedback!');
      setForm({ name: '', email: '', role: 'visitor', message: '' });
    } catch (err) {
      setError(err.response?.data?.error || 'Submission failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4 py-14 text-center">
          <h2 className="text-4xl font-extrabold mb-2">Feedback & Suggestions</h2>
          <p className="text-blue-100">Help us improve our initiatives with your inputs.</p>
        </div>
      </section>

      <div className="container mx-auto px-4 -mt-10 max-w-2xl">
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8">
          {error && <div className="mb-4 text-red-600">{error}</div>}
          {success && <div className="mb-4 text-green-600">{success}</div>}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-1">Name</label>
              <input name="name" value={form.name} onChange={handleChange} className="w-full px-3 py-2 border rounded" required />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Email</label>
              <input name="email" type="email" value={form.email} onChange={handleChange} className="w-full px-3 py-2 border rounded" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-gray-700 mb-1">I am a</label>
              <select name="role" value={form.role} onChange={handleChange} className="w-full px-3 py-2 border rounded">
                <option value="student">Student</option>
                <option value="volunteer">Volunteer</option>
                <option value="donor">Donor</option>
                <option value="visitor">Visitor</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-gray-700 mb-1">Message</label>
              <textarea name="message" rows="5" value={form.message} onChange={handleChange} className="w-full px-3 py-2 border rounded" required />
            </div>
          </div>
          <button type="submit" className="mt-4 bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800" disabled={loading}>
            {loading ? 'Submitting...' : 'Send Feedback'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Feedback;
