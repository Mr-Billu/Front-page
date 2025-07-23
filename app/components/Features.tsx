"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const features = [
  {
    icon: "💬",
    title: "Verified Reviews",
    desc: "Showcase real customer feedback with photos and stories to build instant credibility.",
  },
  {
    icon: "🛡️",
    title: "Seller Verification",
    desc: "Get verified as a trusted seller and stand out from the crowd.",
  },
  {
    icon: "🏅",
    title: "Trust Badges",
    desc: "Display trust badges and signals to boost buyer confidence.",
  },
  {
    icon: "🚚",
    title: "Delivery Proofs",
    desc: "Share delivery confirmations and tracking to reassure your customers.",
  },
  {
    icon: "⚡",
    title: "Fast Support",
    desc: "Offer quick, friendly support to resolve issues and delight buyers.",
  },
  {
    icon: "🔒",
    title: "Secure Payments",
    desc: "Protect every transaction with industry-leading payment security.",
  },
];

// Animation: staggered delay for each card
const getCardVariant = (index: number) => {
  return {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 18,
        delay: 0.5 * index,
      },
    },
  };
};

const Features: React.FC = () => {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);
  const [mounted, setMounted] = useState(false);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const gridInView = useInView(gridRef, { once: true, margin: "-100px" });

  useEffect(() => {
    setMounted(true);
  }, []);

  const animateSection = mounted && isInView;
  const animateGrid = mounted && gridInView;

  return (
    <section id="features" className="w-full py-20 bg-gray-50 relative overflow-hidden" ref={sectionRef}>
      {/* Abstract Background Shape */}
      <div className="absolute -left-32 top-1/2 w-96 h-96 bg-blue-100 rounded-full opacity-30 -z-10" style={{ filter: 'blur(2px)', transform: 'translateY(-50%)' }} />
      {/* Top left badge heading */}
      <div className="absolute left-6 top-6 z-10">
        <motion.span
          initial={{ opacity: 0, y: -20 }}
          animate={animateSection ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, type: "spring" }}
          className="px-6 py-2 rounded-full bg-blue-600 text-white text-sm font-bold shadow-lg tracking-widest uppercase"
          style={{ letterSpacing: '0.15em', boxShadow: '0 4px 24px 0 rgba(37,99,235,0.15)' }}
        >
          FEATURES
        </motion.span>
      </div>
      <div className="max-w-4xl mx-auto px-4 text-center mb-12">
        <div className="mb-10 flex items-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold" style={{ fontFamily: 'Inter, Arial, sans-serif' }}>
            <span className="text-blue-600">Powerful</span> <span className="text-black">Features for Building Trust & Growth</span>
          </h2>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={animateSection ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.35, type: "spring" }}
          className="text-lg text-gray-600 max-w-2xl mx-auto"
        >
          Everything you need to build trust, boost sales, and create a seamless experience for your customers—no technical skills required.
        </motion.p>
      </div>
      <div
        ref={gridRef}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-10 max-w-6xl mx-auto px-2"
      >
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            className={
              "bg-white border border-blue-100 rounded-3xl shadow-md hover:shadow-xl transition-shadow duration-300 p-8 flex flex-col items-center text-center group relative overflow-hidden min-h-[260px] min-w-[220px] max-w-[280px] " +
              "hover:-translate-y-2 transform transition-transform duration-300"
            }
            initial="hidden"
            animate={animateGrid ? "visible" : "hidden"}
            variants={getCardVariant(i)}
            whileHover={{ scale: 1.03, boxShadow: "0 8px 32px 0 rgba(37,99,235,0.18)" }}
          >
            <div className="w-16 h-16 flex items-center justify-center rounded-full mb-4 text-3xl bg-blue-50 text-blue-600 group-hover:scale-110 transition-transform duration-300 shadow-sm border border-blue-200">
              {f.icon}
            </div>
            <h3 className="text-lg font-bold mb-2 text-blue-600 whitespace-nowrap overflow-hidden text-ellipsis" style={{ fontFamily: "var(--font-geist-sans)" }}>{f.title}</h3>
            <p className="text-gray-700 text-sm leading-snug max-w-full mx-auto">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features; 