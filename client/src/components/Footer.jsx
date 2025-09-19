import React from 'react';

function Footer() {
  return (
    <footer className="bg-blue-900 text-blue-100 mt-12">
      <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <img src="/images/logo.jpeg" alt="Sri Yaali Foundation India" className="h-10 w-10 object-contain bg-white rounded-full" />
            <h4 className="text-xl font-bold">Sri Yaali Foundation India</h4>
          </div>
          <p className="text-sm">“ஊருக்கு உழைத்திடல் யோகம்”</p>
          <p className="text-sm mt-2">Registered on 2nd January 2023</p>
        </div>
        <div>
          <h5 className="font-semibold mb-2">Quick Links</h5>
          <ul className="space-y-1 text-sm">
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="/volunteer" className="hover:underline">Volunteer</a></li>
            <li><a href="/donate" className="hover:underline">Donate</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold mb-2">Contact</h5>
          <ul className="space-y-1 text-sm">
            <li>Email: <a href="mailto:sriyaalifoundationindia@gmail.com" className="hover:underline">sriyaalifoundationindia@gmail.com</a></li>
            <li>Phone: <a href="tel:+917845203014" className="hover:underline">+91 7845203014</a></li>
            <li>Address: 108, KK Street, TN Palayam, Coimbatore - 641047</li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold mb-2">Connect</h5>
          <div className="flex items-center gap-3">
            <a href="https://www.instagram.com/sri_yaali_foundation_india?igsh=MXB5enR3MDN6bnY4MQ==" target="_blank" rel="noreferrer" aria-label="Instagram" className="inline-flex items-center gap-2 bg-white text-blue-900 px-3 py-2 rounded hover:bg-blue-50">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm0 2h10c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3zm9 1a1 1 0 100 2 1 1 0 000-2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z"/></svg>
              <span className="text-sm font-semibold">Instagram</span>
            </a>
            <a href="https://wa.me/917845203014" target="_blank" rel="noreferrer" aria-label="WhatsApp" className="inline-flex items-center gap-2 bg-green-500 text-white px-3 py-2 rounded hover:bg-green-600">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M20.52 3.48A11.77 11.77 0 0012 0C5.37 0 0 5.37 0 12c0 2.1.55 4.08 1.5 5.8L0 24l6.38-1.67A11.93 11.93 0 0012 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22a9.9 9.9 0 01-5.06-1.39l-.36-.21-3.78.99 1.01-3.68-.24-.38A9.91 9.91 0 012 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.26-7.35c-.29-.15-1.69-.84-1.95-.94-.26-.1-.45-.15-.64.15-.19.29-.74.94-.91 1.14-.17.19-.34.22-.63.07-.29-.15-1.22-.45-2.33-1.44-.86-.76-1.44-1.7-1.61-1.98-.17-.29-.02-.45.13-.6.13-.13.29-.34.43-.51.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.64-1.54-.88-2.11-.23-.56-.47-.49-.64-.5h-.55c-.19 0-.51.07-.78.36-.26.29-1 1-1 2.44s1.02 2.83 1.16 3.02c.15.19 2 3.05 4.86 4.28.68.29 1.21.46 1.62.6.68.22 1.3.19 1.79.12.55-.08 1.69-.69 1.93-1.36.24-.67.24-1.24.17-1.36-.06-.12-.27-.19-.56-.34z"/></svg>
              <span className="text-sm font-semibold">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-blue-200 py-4 border-t border-blue-800">
        © {new Date().getFullYear()} Sri Yaali Foundation India. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
