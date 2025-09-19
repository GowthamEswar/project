import React from 'react';

const KNOWLEDGE = [
  {
    q: 'What is Sri Yaali Foundation India?',
    a: 'Sri Yaali Foundation India is a registered non-profit (since 2nd January 2023) focused on education support for children, emergency health (blood donation), and youth empowerment through volunteerism.'
  },
  {
    q: 'How can I volunteer?',
    a: 'Go to the Volunteer page and submit the registration form. We will contact you for upcoming activities.'
  },
  {
    q: 'How to donate?',
    a: 'Open the Donate page, choose a tier (e.g., ₹3000/₹6000/₹12000/₹24000), fill the form, and submit.'
  },
  {
    q: 'Blood donor registration',
    a: 'Visit the Blood Donor page, fill your name, phone, blood group and city. You will be added to our emergency support network.'
  },
  {
    q: 'How to contact?',
    a: 'Use the Contact page: Email sriyaalifoundationindia@gmail.com, Phone +91 7845203014, Address 108, KK Street, TN Palayam, Coimbatore - 641047.'
  },
  {
    q: 'Motto',
    a: 'Our motto: “ஊருக்கு உழைத்திடல் யோகம்”. Small acts of kindness, big impact.'
  }
];

function getAnswer(input) {
  const text = input.toLowerCase();
  // keyword heuristics
  if (/volunteer|join|help/.test(text)) return KNOWLEDGE[1].a;
  if (/donat(e|ion)|support|fund/.test(text)) return KNOWLEDGE[2].a;
  if (/blood|donor|group/.test(text)) return KNOWLEDGE[3].a;
  if (/contact|email|phone|address/.test(text)) return KNOWLEDGE[4].a;
  if (/motto|slogan/.test(text)) return KNOWLEDGE[5].a;
  if (/about|what is|who/.test(text)) return KNOWLEDGE[0].a;
  // fallback: show best matched QA by substring
  const hit = KNOWLEDGE.find(k => k.q.toLowerCase().includes(text) || k.a.toLowerCase().includes(text));
  return hit ? hit.a : "I couldn’t find that. You can ask about volunteering, donations, blood donors, contact, or our motto.";
}

export default function AskYaali() {
  const [open, setOpen] = React.useState(false);
  const [input, setInput] = React.useState('');
  const [messages, setMessages] = React.useState([
    { from: 'bot', text: 'Hi! I am Ask Yaali. How can I help you today?' }
  ]);

  const ask = (question) => {
    const q = question || input;
    if (!q.trim()) return;
    const a = getAnswer(q.trim());
    setMessages((m) => [...m, { from: 'user', text: q.trim() }, { from: 'bot', text: a }]);
    setInput('');
  };

  return (
    <div>
      {/* Toggle button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-5 right-5 z-50 bg-blue-700 text-white px-4 py-3 rounded-full shadow hover:bg-blue-800"
        aria-label="Open Ask Yaali"
      >
        Ask Yaali
      </button>

      {open && (
        <div className="fixed bottom-20 right-5 z-50 w-80 bg-white rounded-lg shadow-xl border">
          <div className="flex items-center justify-between px-4 py-3 bg-blue-700 text-white rounded-t-lg">
            <div className="font-semibold">Ask Yaali</div>
            <button onClick={() => setOpen(false)} aria-label="Close" className="hover:opacity-80">✕</button>
          </div>
          <div className="p-3 h-80 overflow-y-auto space-y-2 text-sm">
            {messages.map((m, i) => (
              <div key={i} className={m.from === 'bot' ? 'text-gray-800' : 'text-right'}>
                <div className={m.from === 'bot' ? 'inline-block bg-gray-100 px-3 py-2 rounded' : 'inline-block bg-blue-600 text-white px-3 py-2 rounded'}>
                  {m.text}
                </div>
              </div>
            ))}
            <div className="pt-2">
              <div className="text-xs text-gray-500 mb-2">Try: volunteer, donate, blood donor, contact, motto</div>
              <div className="flex flex-wrap gap-2">
                {KNOWLEDGE.slice(0, 4).map((k, idx) => (
                  <button key={idx} onClick={() => ask(k.q)} className="text-xs bg-blue-50 text-blue-800 px-2 py-1 rounded border border-blue-200 hover:bg-blue-100">{k.q}</button>
                ))}
              </div>
            </div>
          </div>
          <div className="p-3 border-t flex gap-2">
            <input
              className="flex-1 border rounded px-3 py-2 text-sm"
              placeholder="Ask about volunteering, donate, blood donor..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter') ask(); }}
            />
            <button onClick={() => ask()} className="bg-blue-700 text-white px-3 py-2 rounded hover:bg-blue-800 text-sm">Send</button>
          </div>
        </div>
      )}
    </div>
  );
}
