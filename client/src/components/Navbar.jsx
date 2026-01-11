import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/volunteer', label: 'Volunteer' },
    { path: '/donor', label: 'Blood Donor' },
    { path: '/donate', label: 'Donate' },
    { path: '/faq', label: 'FAQ' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-black/5' 
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className={`absolute inset-0 bg-gradient-to-br from-teal-400 to-emerald-500 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity ${scrolled ? '' : 'opacity-30'}`} />
                <img 
                  src="/images/logo.jpeg" 
                  alt="Sri Yaali Foundation India" 
                  className="relative h-11 w-11 object-contain rounded-xl shadow-lg"
                />
              </div>
              <div className="hidden sm:block">
                <span className={`font-bold text-lg tracking-tight transition-colors ${
                  scrolled ? 'text-gray-900' : 'text-white'
                }`}>
                  Sri Yaali Foundation
                </span>
                <span className={`block text-xs font-medium transition-colors ${
                  scrolled ? 'text-teal-600' : 'text-teal-300'
                }`}>
                  India
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive(link.path)
                      ? scrolled 
                        ? 'text-teal-600 bg-teal-50' 
                        : 'text-white bg-white/20'
                      : scrolled
                        ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                        : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                  {isActive(link.path) && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-teal-500 rounded-full" />
                  )}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                to="/donate"
                className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-semibold px-6 py-2.5 rounded-full shadow-lg shadow-teal-500/25 hover:shadow-xl hover:shadow-teal-500/30 transition-all duration-300 hover:-translate-y-0.5"
              >
                <span>Donate</span>
                <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-3">
              <Link
                to="/donate"
                className="bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-semibold px-4 py-2 rounded-full text-sm shadow-lg"
              >
                Donate
              </Link>
              <button
                aria-label="Open Menu"
                className={`p-2 rounded-xl transition-colors ${
                  scrolled ? 'hover:bg-gray-100' : 'hover:bg-white/10'
                }`}
                onClick={() => setOpen(true)}
              >
                <svg className={`w-6 h-6 ${scrolled ? 'text-gray-900' : 'text-white'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {open && (
        <div className="lg:hidden fixed inset-0 z-50">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          
          {/* Drawer */}
          <div className="absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl animate-[slideIn_0.3s_ease-out]">
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <img 
                  src="/images/logo.jpeg" 
                  alt="Logo" 
                  className="h-10 w-10 object-contain rounded-xl"
                />
                <div>
                  <span className="font-bold text-gray-900 block">Sri Yaali Foundation</span>
                  <span className="text-xs text-teal-600 font-medium">India</span>
                </div>
              </div>
              <button
                aria-label="Close Menu"
                className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
                onClick={() => setOpen(false)}
              >
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="p-5 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${
                    isActive(link.path)
                      ? 'bg-teal-50 text-teal-600'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Bottom CTA */}
            <div className="absolute bottom-0 left-0 right-0 p-5 border-t border-gray-100 bg-gray-50">
              <Link
                to="/donate"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-semibold py-3 rounded-xl shadow-lg"
              >
                <span>Donate Now</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Spacer for fixed navbar */}
      <div className="h-20" />

      <style>{`
        @keyframes slideIn {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </>
  );
}

export default Navbar;