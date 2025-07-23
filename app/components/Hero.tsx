"use client";
import React, { useState } from "react";

const Hero: React.FC = () => {
  const [showDemo, setShowDemo] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', company: '', phone: '', job: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.name && form.email && form.company) {
      setSubmitted(true);
      setShowSuccess(true);
      setTimeout(() => {
        setShowDemo(false);
        setSubmitted(false);
        setForm({ name: '', email: '', company: '', phone: '', job: '', message: '' });
      }, 800);
      setTimeout(() => setShowSuccess(false), 5000);
    }
  };

  return (
    <section className="w-full min-h-[580px] pt-20 pb-24 flex items-center justify-center bg-white  text-center md:text-left px-0 animate-fade-in relative overflow-hidden">
      {/* Success Message */}
      {showSuccess && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-[100] bg-green-50 border border-green-200 text-green-700 px-6 py-3 rounded-full shadow-lg flex items-center gap-2 animate-fade-in" style={{ minWidth: 260 }}>
          <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#22c55e" opacity="0.15"/><path d="M7 13l3 3 7-7" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          Thank you! We’ve received your request and will contact you soon.
        </div>
      )}
      {/* Animated Background Shapes - minimal, AssureMe colors */}
      <div className="absolute -left-32 -top-20 w-80 h-80 bg-blue-100 rounded-full opacity-80 z-0 animate-shape-move-left" style={{ filter: 'blur(2px)' }} />
      <div className="absolute right-[-120px] top-[-80px] w-96 h-96 bg-blue-300 rounded-full opacity-70 z-0 animate-shape-move-right" style={{ filter: 'blur(2px)' }} />
      <div className="absolute -right-40 -bottom-24 w-96 h-72 bg-blue-500 rounded-[40%] opacity-60 z-0 animate-shape-move-left" style={{ filter: 'blur(2px)' }} />
      {/* Main Content - Responsive and Centered */}
      <div className="relative z-10 w-full max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-center px-4 sm:px-8 lg:px-16 gap-2 md:gap-2">
        {/* Left: Big Headline, Each Word on Its Own Line */}
        <div className="flex-1 flex items-center justify-center md:justify-end mb-8 md:mb-0 w-full max-w-2xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight w-full" style={{ fontFamily: 'var(--font-geist-sans)' }}>
            <span className="text-black">Empower</span>
            <span className="text-blue-600"> Trust.</span>
            <span className="text-black block">Grow Your</span>
            <span className="text-blue-600"> Brand.</span>
          </h1>
        </div>
        {/* Right: Badge, Supporting Text, CTA, Tag */}
        <div className="flex-1 flex flex-col items-center md:items-start justify-center gap-5 w-full max-w-xl">
          <span className="inline-block px-4 py-1 rounded-full border border-blue-100 text-blue-600 text-xs font-medium bg-blue-50 animate-fade-in-delay">
            Trusted by modern brands
          </span>
          <p className="max-w-md text-base text-gray-600 animate-fade-in-delay mx-auto md:mx-0" style={{ fontFamily: "var(--font-geist-sans)" }}>
            Instantly showcase real customer feedback and digital trust badges. Build credibility and boost conversions—no coding required.
          </p>
          <div className="flex flex-row gap-3 w-full sm:w-auto justify-center md:justify-start">
            <button className="px-8 py-0 rounded bg-blue-600 text-white font-medium text-lg shadow hover:bg-blue-700 transition-colors duration-150 animate-fade-in-delay w-auto cta-font" 
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              Get Started
            </button>
            <button
              className="py-0 rounded border border-blue-600 text-blue-600 font-medium text-lg bg-white hover:bg-blue-50 transition-colors duration-150 animate-fade-in-delay min-w-[160px] cta-font"
              onClick={() => setShowDemo(true)}
              type="button"
            >
              Book a Demo
            </button>
          </div>
          <span className="inline-flex items-center gap-2 mt-2 px-4 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-medium border border-blue-200 shadow-md animate-fade-in-delay">
            <span>✔</span> No technical skill needed
          </span>
        </div>
      </div>
      {/* Book a Demo Modal */}
      {showDemo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm animate-fade-in">
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-sm flex flex-col gap-4 relative animate-fade-in-up"
            style={{ minWidth: 320 }}
          >
            <button
              type="button"
              className="absolute top-3 right-3 text-2xl text-gray-400 hover:text-blue-600 focus:outline-none"
              aria-label="Close"
              onClick={() => setShowDemo(false)}
            >
              &times;
            </button>
            <h3 className="text-xl font-bold text-blue-600 mb-2 text-center" style={{ fontFamily: 'Inter, Arial, sans-serif' }}>
              Book a Demo
            </h3>
            <input
              type="text"
              name="name"
              required
              placeholder="Full Name"
              className="border border-gray-200 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={form.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Business Email"
              className="border border-gray-200 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={form.email}
              onChange={handleChange}
            />
            <input
              type="text"
              name="company"
              required
              placeholder="Company Name"
              className="border border-gray-200 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={form.company}
              onChange={handleChange}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number (optional)"
              className="border border-gray-200 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={form.phone}
              onChange={handleChange}
            />
            <input
              type="text"
              name="job"
              placeholder="Job Title (optional)"
              className="border border-gray-200 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={form.job}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Message (optional)"
              rows={2}
              className="border border-gray-200 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
              value={form.message}
              onChange={handleChange}
            />
            <button
              type="submit"
              className="mt-2 px-4 py-2 rounded bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition-colors duration-150 cta-font"
              disabled={submitted}
            >
              {submitted ? "Sending..." : "Send Request"}
            </button>
          </form>
        </div>
      )}
      {/* Keyframes for shape and modal animation */}
      <style jsx global>{`
        @keyframes shape-move-left {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(-30px); }
        }
        @keyframes shape-move-right {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(30px); }
        }
        .animate-shape-move-left {
          animation: shape-move-left 6s ease-in-out infinite alternate;
        }
        .animate-shape-move-right {
          animation: shape-move-right 6s ease-in-out infinite alternate;
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: none; }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.7s cubic-bezier(0.4,0,0.2,1);
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 0.4s cubic-bezier(0.4,0,0.2,1);
        }
        @keyframes fade-out-up {
          from { opacity: 1; transform: translateY(0); }
          to { opacity: 0; transform: translateY(-40px); }
        }
        .animate-fade-out-up {
          animation: fade-out-up 0.8s cubic-bezier(0.4,0,0.2,1) forwards;
        }
      `}</style>
    </section>
  );
};

export default Hero; 