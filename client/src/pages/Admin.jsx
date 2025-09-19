import React, { useState, useEffect, useRef } from 'react';
import api from '../api/axios';

const ADMIN_PASSWORD = 'admin123'; // In production, use env vars and backend auth!

function Admin() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => localStorage.getItem('adminLoggedIn') === 'true');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [view, setView] = useState('volunteers');
  const [volunteers, setVolunteers] = useState([]);
  const [donations, setDonations] = useState([]);
  const [donors, setDonors] = useState([]);
  const [loading, setLoading] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (isLoggedIn) {
      fetchData();
    }
    // eslint-disable-next-line
  }, [isLoggedIn, view]);

  const fetchData = async () => {
    setLoading(true);
    setError('');
    try {
      if (view === 'volunteers') {
        const res = await api.get('/api/volunteers');
        setVolunteers(res.data);
      } else if (view === 'donations') {
        const res = await api.get('/api/donations');
        setDonations(res.data);
      } else if (view === 'donors') {
        const res = await api.get('/api/donors');
        setDonors(res.data);
      }
    } catch (err) {
      setError('Failed to fetch data.');
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsLoggedIn(true);
      localStorage.setItem('adminLoggedIn', 'true');
      setError('');
    } else {
      setError('Incorrect password.');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('adminLoggedIn');
    setPassword('');
  };

  const printCurrentTable = () => {
    if (!sectionRef.current) return;
    const titleMap = { volunteers: 'Volunteers', donations: 'Donations', donors: 'Blood Donors' };
    const win = window.open('', '_blank');
    if (!win) return;
    const styles = `
      <style>
        body { font-family: Arial, sans-serif; padding: 24px; }
        h1 { font-size: 20px; margin-bottom: 12px; }
        table { border-collapse: collapse; width: 100%; }
        th, td { border: 1px solid #333; padding: 8px; font-size: 12px; }
        thead { background: #efefef; }
      </style>
    `;
    win.document.write(`<html><head><title>${titleMap[view]} - Admin Export</title>${styles}</head><body>`);
    win.document.write(`<h1>${titleMap[view]} Export</h1>`);
    win.document.write(sectionRef.current.innerHTML);
    win.document.write('</body></html>');
    win.document.close();
    win.focus();
    win.print();
    win.close();
  };

  if (!isLoggedIn) {
    return (
      <div className="max-w-sm mx-auto mt-16 bg-white shadow-md rounded px-8 pt-6 pb-8">
        <h2 className="text-2xl font-bold mb-4">Admin Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          {error && <div className="mb-4 text-red-600">{error}</div>}
          <button type="submit" className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 w-full">Login</button>
        </form>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto mt-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Admin Dashboard</h2>
        <div className="flex items-center gap-2">
          <button onClick={printCurrentTable} className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800">Download PDF</button>
          <button onClick={handleLogout} className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">Logout</button>
        </div>
      </div>
      <div className="mb-4 flex flex-wrap gap-2">
        <button
          className={`px-4 py-2 rounded ${view === 'volunteers' ? 'bg-blue-700 text-white' : 'bg-gray-200'}`}
          onClick={() => setView('volunteers')}
        >
          Volunteers
        </button>
        <button
          className={`px-4 py-2 rounded ${view === 'donations' ? 'bg-blue-700 text-white' : 'bg-gray-200'}`}
          onClick={() => setView('donations')}
        >
          Donations
        </button>
        <button
          className={`px-4 py-2 rounded ${view === 'donors' ? 'bg-blue-700 text-white' : 'bg-gray-200'}`}
          onClick={() => setView('donors')}
        >
          Donors
        </button>
      </div>
      {loading && <div>Loading...</div>}
      {error && <div className="text-red-600 mb-4">{error}</div>}

      {view === 'volunteers' && !loading && (
        <div className="overflow-x-auto" ref={sectionRef}>
          <h3 className="text-xl font-semibold mb-2">Volunteers</h3>
          <table className="min-w-full bg-white border">
            <thead>
              <tr>
                <th className="border px-4 py-2">Name</th>
                <th className="border px-4 py-2">Email</th>
                <th className="border px-4 py-2">Phone</th>
                <th className="border px-4 py-2">Interest Area</th>
                <th className="border px-4 py-2">Message</th>
                <th className="border px-4 py-2">Created At</th>
              </tr>
            </thead>
            <tbody>
              {volunteers.map(v => (
                <tr key={v._id}>
                  <td className="border px-4 py-2">{v.name}</td>
                  <td className="border px-4 py-2">{v.email}</td>
                  <td className="border px-4 py-2">{v.phone}</td>
                  <td className="border px-4 py-2">{v.interestArea}</td>
                  <td className="border px-4 py-2">{v.message}</td>
                  <td className="border px-4 py-2">{new Date(v.createdAt).toLocaleString()}</td>
                </tr>
              ))}
              {volunteers.length === 0 && (
                <tr><td colSpan="6" className="text-center py-4">No volunteers found.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      )}

      {view === 'donations' && !loading && (
        <div className="overflow-x-auto" ref={sectionRef}>
          <h3 className="text-xl font-semibold mb-2">Donations</h3>
          <table className="min-w-full bg-white border">
            <thead>
              <tr>
                <th className="border px-4 py-2">Name</th>
                <th className="border px-4 py-2">Email</th>
                <th className="border px-4 py-2">Amount</th>
                <th className="border px-4 py-2">Message</th>
                <th className="border px-4 py-2">Created At</th>
              </tr>
            </thead>
            <tbody>
              {donations.map(d => (
                <tr key={d._id}>
                  <td className="border px-4 py-2">{d.name}</td>
                  <td className="border px-4 py-2">{d.email}</td>
                  <td className="border px-4 py-2">₹{d.amount}</td>
                  <td className="border px-4 py-2">{d.message}</td>
                  <td className="border px-4 py-2">{new Date(d.createdAt).toLocaleString()}</td>
                </tr>
              ))}
              {donations.length === 0 && (
                <tr><td colSpan="5" className="text-center py-4">No donations found.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      )}

      {view === 'donors' && !loading && (
        <div className="overflow-x-auto" ref={sectionRef}>
          <h3 className="text-xl font-semibold mb-2">Donors</h3>
          <table className="min-w-full bg-white border">
            <thead>
              <tr>
                <th className="border px-4 py-2">Name</th>
                <th className="border px-4 py-2">Phone</th>
                <th className="border px-4 py-2">Email</th>
                <th className="border px-4 py-2">Blood Group</th>
                <th className="border px-4 py-2">City</th>
                <th className="border px-4 py-2">Availability</th>
                <th className="border px-4 py-2">Last Donated</th>
              </tr>
            </thead>
            <tbody>
              {donors.map(u => (
                <tr key={u._id}>
                  <td className="border px-4 py-2">{u.name}</td>
                  <td className="border px-4 py-2">{u.phone}</td>
                  <td className="border px-4 py-2">{u.email || '-'}</td>
                  <td className="border px-4 py-2">{u.bloodGroup}</td>
                  <td className="border px-4 py-2">{u.city}</td>
                  <td className="border px-4 py-2">{u.availability}</td>
                  <td className="border px-4 py-2">{u.lastDonatedAt ? new Date(u.lastDonatedAt).toLocaleDateString() : '-'}</td>
                </tr>
              ))}
              {donors.length === 0 && (
                <tr><td colSpan="7" className="text-center py-4">No donors found.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Admin; 