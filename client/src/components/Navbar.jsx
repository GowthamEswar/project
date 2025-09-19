import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [open, setOpen] = React.useState(false);
  return (
    <nav className="bg-gradient-to-r from-blue-800 to-blue-600 sticky top-0 z-50 shadow">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center text-white">
        <Link to="/" className="flex items-center gap-2 font-extrabold text-xl tracking-wide hover:opacity-90 transition">
          <img src="/images/logo.jpeg" alt="Sri Yaali Foundation India" className="h-8 w-8 object-contain bg-white rounded-full" />
          <span>Sri Yaali Foundation India</span>
        </Link>
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/volunteer" className="hover:underline">Volunteer</Link>
          <Link to="/donor" className="hover:underline">Blood Donor</Link>
          <Link to="/donate" className="hover:underline">Donate</Link>
          <Link to="/faq" className="hover:underline">FAQ</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
        </div>
        <div className="md:hidden flex items-center gap-2">
          <a href="/donate" className="bg-white text-blue-700 font-semibold px-3 py-1 rounded shadow hover:bg-gray-100">Donate</a>
          <button aria-label="Open Menu" className="p-2 rounded hover:bg-white/10" onClick={() => setOpen(true)}>
            <span className="block w-5 h-0.5 bg-white mb-1"></span>
            <span className="block w-5 h-0.5 bg-white mb-1"></span>
            <span className="block w-5 h-0.5 bg-white"></span>
          </button>
        </div>
      </div>
      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/50" onClick={() => setOpen(false)}></div>
          <div className="absolute top-0 right-0 h-full w-72 bg-white text-blue-900 shadow-xl p-5 animate-[slideIn_.25s_ease-out]">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2">
                <img src="/images/logo.jpeg" alt="Logo" className="h-8 w-8 object-contain bg-blue-100 rounded-full" />
                <span className="font-extrabold">Sri Yaali Foundation India</span>
              </div>
              <button aria-label="Close Menu" className="text-blue-800" onClick={() => setOpen(false)}>✕</button>
            </div>
            <nav className="flex flex-col gap-3">
              <Link to="/" onClick={() => setOpen(false)} className="hover:underline">Home</Link>
              <Link to="/about" onClick={() => setOpen(false)} className="hover:underline">About</Link>
              <Link to="/volunteer" onClick={() => setOpen(false)} className="hover:underline">Volunteer</Link>
              <Link to="/donor" onClick={() => setOpen(false)} className="hover:underline">Blood Donor</Link>
              <Link to="/donate" onClick={() => setOpen(false)} className="hover:underline">Donate</Link>
              <Link to="/faq" onClick={() => setOpen(false)} className="hover:underline">FAQ</Link>
              <Link to="/contact" onClick={() => setOpen(false)} className="hover:underline">Contact</Link>
            </nav>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar; 