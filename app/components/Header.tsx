"use client";

import React, { useState, useEffect } from "react";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "#privacy-policy" },
  { label: "Terms & Conditions", href: "#terms" },
  { label: "Cookies", href: "#cookies" },
];

const Header: React.FC = () => {
  const [showLegal, setShowLegal] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 100);
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    setShowLegal(false);
    setMobileOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-white shadow-xl transition-all duration-700 ${animate ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"} border-b border-gray-100 font-body`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="font-bold text-2xl tracking-tight text-blue-600 logo-font">
          AssureMe
        </div>
        {/* Hamburger (Mobile Only) */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
          aria-label="Open menu"
          onClick={() => setMobileOpen(v => !v)}
        >
          <span className={`block w-6 h-0.5 bg-black mb-1 transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-black mb-1 transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
        {/* Nav Links (Desktop) */}
        <ul className="flex-1 md:flex hidden justify-center gap-8 items-center">
          {navLinks.map(link => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={e => handleScroll(e, link.href)}
                className="relative px-2 py-1 text-base text-black font-medium transition-colors duration-200 before:content-[''] before:absolute before:left-0 before:right-0 before:bottom-0 before:h-0.5 before:bg-blue-600 before:scale-x-0 hover:before:scale-x-100 focus:before:scale-x-100 before:transition-transform before:duration-200 before:ease-in-out before:origin-left hover:text-blue-600 focus:text-blue-600"
                style={{ fontFamily: "var(--font-geist-sans)" }}
              >
                {link.label}
              </a>
            </li>
          ))}
          {/* Legal Dropdown */}
          <li className="relative">
            <button
              onClick={() => setShowLegal(v => !v)}
              className="relative px-2 py-1 text-base text-black font-medium transition-colors duration-200 before:content-[''] before:absolute before:left-0 before:right-0 before:bottom-0 before:h-0.5 before:bg-blue-600 before:scale-x-0 hover:before:scale-x-100 focus:before:scale-x-100 before:transition-transform before:duration-200 before:ease-in-out before:origin-left hover:text-blue-600 focus:text-blue-600 focus:outline-none"
              style={{ fontFamily: "var(--font-geist-sans)" }}
            >
              Legal ▼
            </button>
            {showLegal && (
              <ul className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg animate-fade-in z-10">
                {legalLinks.map(link => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={e => handleScroll(e, link.href)}
                      className="block px-4 py-2 text-black hover:text-blue-600 hover:bg-blue-50 transition-colors duration-150"
                      style={{ fontFamily: "var(--font-geist-sans)" }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>
        {/* Auth Buttons */}
        <div className="flex gap-3 items-center">
          <button
            className="px-4 py-1 rounded border border-blue-600 text-blue-600 font-medium hover:bg-blue-50 active:bg-blue-100 transition-colors duration-150 cta-font"
            style={{ fontFamily: "var(--font-geist-mono), monospace" }}
          >
            Login
          </button>
        </div>
      </nav>
      {/* Mobile Nav Slide Down */}
      <div className={`md:hidden fixed top-0 left-0 w-full bg-white shadow-xl border-b border-gray-100 z-40 transition-all duration-500 overflow-hidden ${mobileOpen ? 'max-h-[400px] py-8 opacity-100' : 'max-h-0 py-0 opacity-0'} flex flex-col items-center`} style={{ transitionProperty: 'max-height, opacity, padding' }}>
        {/* Close (X) Button */}
        <button
          className="absolute top-4 right-6 text-3xl text-gray-700 hover:text-blue-600 focus:outline-none"
          aria-label="Close menu"
          onClick={() => setMobileOpen(false)}
        >
          &times;
        </button>
        <ul className="flex flex-col gap-6 w-full items-center mt-6">
          {navLinks.map(link => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={e => handleScroll(e, link.href)}
                className="relative px-2 py-1 text-lg text-black font-semibold transition-colors duration-200 before:content-[''] before:absolute before:left-0 before:right-0 before:bottom-0 before:h-0.5 before:bg-blue-600 before:scale-x-0 hover:before:scale-x-100 focus:before:scale-x-100 before:transition-transform before:duration-200 before:ease-in-out before:origin-left hover:text-blue-600 focus:text-blue-600"
                style={{ fontFamily: 'Inter, Arial, sans-serif' }}
              >
                {link.label}
              </a>
            </li>
          ))}
          {/* Legal Dropdown (Mobile) */}
          <li className="w-full flex flex-col items-center">
            <button
              onClick={() => setShowLegal(v => !v)}
              className="relative px-2 py-1 text-lg text-black font-semibold transition-colors duration-200 before:content-[''] before:absolute before:left-0 before:right-0 before:bottom-0 before:h-0.5 before:bg-blue-600 before:scale-x-0 hover:before:scale-x-100 focus:before:scale-x-100 before:transition-transform before:duration-200 before:ease-in-out before:origin-left hover:text-blue-600 focus:text-blue-600 focus:outline-none"
              style={{ fontFamily: 'Inter, Arial, sans-serif' }}
            >
              Legal ▼
            </button>
            {showLegal && (
              <ul className="w-40 mt-2 bg-white border border-gray-200 rounded shadow-lg animate-fade-in z-10">
                {legalLinks.map(link => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={e => handleScroll(e, link.href)}
                      className="block px-4 py-2 text-black hover:text-blue-600 hover:bg-blue-50 transition-colors duration-150"
                      style={{ fontFamily: 'Inter, Arial, sans-serif' }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header; 