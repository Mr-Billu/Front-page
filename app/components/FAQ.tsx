"use client";

import React, { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What is AssureMe and how does it work?",
    answer:
      "AssureMe is a platform that helps you build trust with your customers by showcasing verified reviews, credentials, and your business profile. Simply sign up, verify your business, and share your AssureMe link with customers.",
  },
  {
    question: "Do I need technical skills to use AssureMe?",
    answer:
      "No technical skills are required! AssureMe is designed to be simple and user-friendly. You can set up your profile and start sharing your trust signals in minutes.",
  },
  {
    question: "Can I customize my AssureMe profile?",
    answer:
      "Yes, you can personalize your profile with your logo, brand colors, and business details. Premium users get even more customization options.",
  },
  {
    question: "How do I collect reviews from my customers?",
    answer:
      "You can send your customers a unique review link via WhatsApp, Instagram, or email. They can leave text, photo, or video reviews without needing to create an account.",
  },
  {
    question: "Is my data safe on AssureMe?",
    answer:
      "Absolutely. We use industry-leading security protocols to keep your data safe and private.",
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <>
      <section className="w-full py-20 bg-white relative" id="faq">
        {/* Top left badge heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, type: "spring" }}
          viewport={{ once: true, amount: 0.7 }}
          className="absolute left-6 top-6 z-10"
        >
          <span className="px-6 py-2 rounded-full bg-blue-600 text-white text-sm font-bold shadow-lg tracking-widest uppercase"
            style={{ letterSpacing: '0.15em', boxShadow: '0 4px 24px 0 rgba(37,99,235,0.15)' }}>
            FAQ
          </span>
        </motion.div>
        <div className="max-w-3xl mx-auto px-4 text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, type: "spring" }}
            viewport={{ once: true, amount: 0.7 }}
            className="text-3xl sm:text-4xl font-extrabold mb-2 text-blue-600"
            style={{ fontFamily: "var(--font-geist-sans)" }}
          >
            Frequently Asked <span className="text-black">Questions</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, type: "spring" }}
            viewport={{ once: true, amount: 0.7 }}
            className="text-gray-600 text-lg max-w-2xl mx-auto"
          >
            Everything you need to know about using AssureMe for your business.
          </motion.p>
        </div>
        <div className="max-w-2xl mx-auto space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={faq.question}
              className="bg-gray-50 border border-blue-100 rounded-xl shadow-sm p-0 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none focus:ring-2 focus:ring-blue-200 group"
                onClick={() => handleToggle(idx)}
                aria-expanded={openIndex === idx}
                aria-controls={`faq-answer-${idx}`}
                style={{ fontFamily: "var(--font-geist-sans)" }}
              >
                <span className="text-base sm:text-lg font-semibold text-blue-700 group-hover:text-blue-900 transition-colors">
                  {faq.question}
                </span>
                <span className="ml-4 text-blue-500 text-xl transition-transform duration-300" style={{ transform: openIndex === idx ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                  ▼
                </span>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === idx && (
                  <motion.div
                    id={`faq-answer-${idx}`}
                    initial={{ height: 0, opacity: 0, y: -12 }}
                    animate={{ height: "auto", opacity: 1, y: 0 }}
                    exit={{ height: 0, opacity: 0, y: -12 }}
                    transition={{ duration: 0.55, type: "spring", stiffness: 60, damping: 18 }}
                    className="px-6 pb-5 text-gray-700 text-base"
                    style={{ fontFamily: "var(--font-geist-sans)" }}
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
          <div className="flex flex-col items-end mt-8">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, type: 'spring' }}
              viewport={{ once: true, amount: 0.7 }}
              className="text-gray-600 text-sm mb-1"
            >
              Didn't find your answer?
            </motion.span>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25, type: 'spring' }}
              viewport={{ once: true, amount: 0.7 }}
              className="px-5 py-2 rounded-full bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition-colors"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Contact Us
            </motion.button>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, type: 'spring' }}
              viewport={{ once: true, amount: 0.7 }}
              className="text-gray-400 text-xs mt-1"
            >
              If you need help
            </motion.span>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ; 