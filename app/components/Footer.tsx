"use client";
import React, { useEffect, useRef, useState } from "react";

const Footer: React.FC = () => {
  const footerRef = useRef<HTMLDivElement>(null);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setShowTop(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (footerRef.current) observer.observe(footerRef.current);
    return () => { if (footerRef.current) observer.unobserve(footerRef.current); };
  }, []);

  return (
    <footer ref={footerRef} className="w-full bg-gray-50 border-t border-gray-200 pt-12 pb-6 px-4 mt-24 relative animate-fade-in-up-footer">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10 relative">
        {/* Brand, tagline, and socials */}
        <div className="flex-1 min-w-[220px] mb-8 md:mb-0 flex flex-col items-start">
          <div className="font-extrabold text-2xl text-blue-600 mb-2" style={{ fontFamily: 'var(--font-geist-sans)' }}>AssureMe</div>
          <p className="text-gray-600 text-sm mb-4 max-w-xs">Empowering sellers to build trust and grow with real reviews, transparency, and modern tools for every business.</p>
          {/* Social Icons Horizontal Under Logo, Left Aligned */}
          <div className="flex flex-row gap-3 mt-2 animate-fade-in-up">
            <a href="#" className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white border border-gray-200 text-blue-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors duration-200 transform hover:scale-110" aria-label="Instagram">
              <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><rect width="18" height="18" x="1" y="1" rx="5" stroke="currentColor" strokeWidth="1.5"/><circle cx="10" cy="10" r="4" stroke="currentColor" strokeWidth="1.5"/><circle cx="15.2" cy="4.8" r="1" fill="currentColor"/></svg>
            </a>
            <a href="#" className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white border border-gray-200 text-blue-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors duration-200 transform hover:scale-110" aria-label="Twitter">
              <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M17.5 6.5c-.4.2-.8.3-1.2.4.4-.3.7-.7.8-1.2-.4.2-.9.4-1.3.5-.4-.4-1-.7-1.6-.7-1.2 0-2.1 1-2.1 2.1 0 .2 0 .4.1.6-1.7-.1-3.2-.9-4.2-2.1-.2.3-.3.7-.3 1.1 0 .7.4 1.3 1 1.7-.3 0-.6-.1-.8-.2v.1c0 1 .7 1.8 1.6 2-.2.1-.4.1-.6.1-.1 0-.2 0-.3-.1.2.7.9 1.2 1.7 1.2-0.6.5-1.3.8-2.1.8-.1 0-.2 0-.3-.1.7.5 1.5.8 2.4.8 2.9 0 4.5-2.4 4.5-4.5v-.2c.3-.2.6-.5.8-.8z" fill="currentColor"/></svg>
            </a>
            <a href="#" className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white border border-gray-200 text-blue-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors duration-200 transform hover:scale-110" aria-label="Briefcase">
              <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><rect x="3" y="6" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M7 6V5a3 3 0 0 1 6 0v1" stroke="currentColor" strokeWidth="1.5"/></svg>
            </a>
          </div>
        </div>
        {/* Footer Links More Left, Less Gap, With Descriptions and Dividers */}
        <div className="flex-1 w-full flex flex-col sm:flex-row justify-start items-start pl-2">
          <div className="flex flex-row gap-10 flex-1 justify-start items-stretch">
            <div className="pr-6 border-r border-gray-200 last:border-none">
              <div className="font-semibold text-gray-800 mb-2" style={{ fontFamily: 'Inter, Arial, sans-serif' }}><span className="text-blue-600">Product</span></div>
              <div className="text-xs text-gray-500 mb-2">Explore our features</div>
              <ul className="space-y-1 text-sm">
                <li><a href="#features" className="hover:text-blue-600 transition-colors">Features</a></li>
                <li><a href="#faq" className="hover:text-blue-600 transition-colors">FAQ</a></li>
                <li><a href="#testimonials" className="hover:text-blue-600 transition-colors">Testimonials</a></li>
                <li><a href="#reviews" className="hover:text-blue-600 transition-colors">Reviews</a></li>
              </ul>
            </div>
            <div className="px-6 border-r border-gray-200 last:border-none">
              <div className="font-semibold text-gray-800 mb-2" style={{ fontFamily: 'Inter, Arial, sans-serif' }}><span className="text-blue-600">Company</span></div>
              <div className="text-xs text-gray-500 mb-2">Learn about us</div>
              <ul className="space-y-1 text-sm">
                <li><a href="#about-us" className="hover:text-blue-600 transition-colors">About</a></li>
                <li><a href="#careers" className="hover:text-blue-600 transition-colors">Careers</a></li>
                <li><a href="#blog" className="hover:text-blue-600 transition-colors">Blog</a></li>
                <li><a href="#faq" className="hover:text-blue-600 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div className="pl-6">
              <div className="font-semibold text-gray-800 mb-2" style={{ fontFamily: 'Inter, Arial, sans-serif' }}><span className="text-blue-600">Legal</span></div>
              <div className="text-xs text-gray-500 mb-2">Our policies</div>
              <ul className="space-y-1 text-sm">
                <li><a href="#terms" className="hover:text-blue-600 transition-colors">Terms</a></li>
                <li><a href="#privacy-policy" className="hover:text-blue-600 transition-colors">Privacy</a></li>
                <li><a href="#cookies" className="hover:text-blue-600 transition-colors">Cookies</a></li>
              </ul>
            </div>
          </div>
        </div>
        {/* Contact Form Far Right */}
        <div className="flex flex-col items-end min-w-[240px] gap-4 animate-fade-in-right">
          <form className="flex flex-col gap-2 bg-white rounded-lg shadow-sm px-4 py-3 w-full max-w-xs" onSubmit={e => {e.preventDefault();}}>
            <div className="text-sm font-semibold text-gray-800 mb-1">Need help?</div>
            <input type="email" required placeholder="Your email" className="border border-gray-200 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400" />
            <textarea required placeholder="Your message" rows={2} className="border border-gray-200 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none" />
            <button type="submit" className="bg-blue-600 text-white rounded px-3 py-1 text-sm font-semibold hover:bg-blue-700 transition">Send</button>
          </form>
          <div className="text-xs text-gray-500 mt-1 mb-2">We’re here to help!</div>
        </div>
      </div>
      {/* Back to Top Button, only visible when footer in view */}
      <button
        onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
        className={`fixed bottom-8 right-8 z-50 bg-white border border-gray-300 shadow-md rounded-full w-10 h-10 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors duration-200 animate-fade-in-up ${showTop ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} transition-opacity duration-500`}
        aria-label="Back to top"
        style={{transition: 'opacity 0.5s'}}
      >
        <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M10 15V5M10 5l-5 5M10 5l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>
      <div className="border-t border-gray-200 mt-10 pt-6 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} AssureMe. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer; 