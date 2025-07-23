"use client";

import React, { useRef, useState, useEffect } from "react";
import Head from "next/head";

const testimonials = [
  {
    name: "Ava Smith",
    brand: "Acme Corp",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    review: "AssureMe made our onboarding seamless. The support team feels like an extension of our own. We’ve never felt more secure and empowered.",
    instagram: "https://instagram.com/acmecorp"
  },
  {
    name: "Liam Chen",
    brand: "Bluewave",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    review: "The UI is so intuitive, it feels like magic. Our productivity has doubled, and our clients love the transparency AssureMe brings.",
    instagram: "https://instagram.com/bluewave"
  },
  {
    name: "Priya Patel",
    brand: "NextGen Solutions",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    review: "We switched to AssureMe and never looked back. The glassmorphic design is stunning, and the features are exactly what we need.",
    instagram: "https://instagram.com/nextgensolutions"
  },
  {
    name: "Carlos Rivera",
    brand: "Vercel",
    avatar: "https://randomuser.me/api/portraits/men/85.jpg",
    review: "AssureMe’s minimal UI and powerful tools have made our operations seamless. The Instagram CTA is a nice touch!",
    instagram: "https://instagram.com/vercel"
  },
  {
    name: "Emily Turner",
    brand: "BrightPath",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    review: "The onboarding was effortless and the support is always there. We feel truly valued as customers.",
    instagram: "https://instagram.com/brightpath"
  },
  {
    name: "Noah Kim",
    brand: "Cloudify",
    avatar: "https://randomuser.me/api/portraits/men/41.jpg",
    review: "AssureMe’s features are exactly what we needed. The UI is clean and the experience is smooth.",
    instagram: "https://instagram.com/cloudify"
  }
];

// SVG grid background with many lines
const GridBg = () => (
  <svg className="absolute inset-0 w-full h-full z-0" width="100%" height="100%" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Vertical lines */}
    {[...Array(24)].map((_, i) => (
      <line key={"v"+i} x1={60*i} y1="0" x2={60*i} y2="800" stroke="#e5e7eb" strokeWidth="1" opacity="0.25" />
    ))}
    {/* Horizontal lines */}
    {[...Array(16)].map((_, i) => (
      <line key={"h"+i} x1="0" y1={50*i} x2="1440" y2={50*i} stroke="#e5e7eb" strokeWidth="1" opacity="0.25" />
    ))}
  </svg>
);

// Small UI elements (dots, icons, lines)
const UIElements = () => (
  <>
    {/* Dots */}
    <div className="absolute top-10 left-10 w-2 h-2 rounded-full bg-blue-300 opacity-60 z-10" />
    <div className="absolute bottom-16 right-16 w-3 h-3 rounded-full bg-purple-300 opacity-50 z-10" />
    {/* Line */}
    <div className="absolute top-1/2 left-8 w-12 h-0.5 bg-blue-200 opacity-40 z-10 rotate-12" />
    {/* Icon (star) */}
    <svg className="absolute bottom-10 left-1/3 w-5 h-5 text-yellow-300 opacity-40 z-10" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.176 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" /></svg>
  </>
);

// Small blob SVG
const SmallBlob = ({ className }) => (
  <svg className={className} width="40" height="40" viewBox="0 0 40 40" fill="none"><ellipse cx="20" cy="20" rx="20" ry="12" fill="#a5b4fc" fillOpacity="0.25" /></svg>
);

// Sparkle/star microinteraction
const Sparkle = ({ className }) => (
  <svg className={className} width="20" height="20" viewBox="0 0 20 20" fill="none">
    <g opacity="0.7">
      <path d="M10 2 L11.5 8.5 L18 10 L11.5 11.5 L10 18 L8.5 11.5 L2 10 L8.5 8.5 Z" fill="#a5b4fc" />
    </g>
  </svg>
);

function ParallaxCard({ children, highlight = false }) {
  const ref = useRef(null);
  const [style, setStyle] = useState({});
  const [sheen, setSheen] = useState(false);
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e) => {
    const card = ref.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 8;
    const rotateY = ((x - centerX) / centerX) * -8;
    setStyle({
      transform: `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.04)`,
      transition: 'transform 0.15s cubic-bezier(.25,.8,.25,1)'
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: 'perspective(700px) rotateX(0deg) rotateY(0deg) scale(1)',
      transition: 'transform 0.35s cubic-bezier(.25,.8,.25,1)'
    });
    setSheen(false);
    setHovered(false);
  };

  const handleMouseEnter = () => {
    setSheen(true);
    setHovered(true);
    setTimeout(() => setSheen(false), 700);
  };

  return (
    <div
      ref={ref}
      style={style}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      className="will-change-transform relative"
    >
      {/* Solid blue border on hover, no gradient */}
      <div className={`absolute inset-0 rounded-2xl pointer-events-none z-10 transition-all duration-500 ${hovered ? 'border-4 border-blue-400' : 'border-2 border-transparent'}`} />
      {/* Sheen */}
      <div className="absolute inset-0 pointer-events-none z-20">
        {sheen && (
          <div className="absolute top-0 left-[-75%] w-[150%] h-full bg-white/30 blur-lg opacity-60 animate-[sheen_0.7s_ease-in-out] rounded-2xl" style={{}} />
        )}
      </div>
      {/* Sparkles/stars/lines on hover */}
      {hovered && (
        <>
          <Sparkle className="absolute top-3 left-6 animate-pulse-fast z-30" />
          <Sparkle className="absolute bottom-4 right-8 animate-pulse-medium z-30" />
          <div className="absolute top-1/2 left-1/2 w-8 h-0.5 bg-blue-300 opacity-40 z-30 rotate-12 animate-pulse-slow" />
        </>
      )}
      {children}
    </div>
  );
}

const InstagramButton = ({ href }) => {
  const [ripple, setRipple] = useState(false);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-3 inline-flex items-center gap-2 px-7 py-2 rounded-full border-2 border-red-500 text-red-600 font-bold font-[Montserrat,sans-serif] text-base bg-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-300 relative overflow-hidden group hover:bg-red-500 hover:text-white hover:shadow-md"
      style={{ boxShadow: '0 2px 12px 0 rgba(0,0,0,0.08)' }}
      onClick={e => {
        setRipple(true);
        setTimeout(() => setRipple(false), 500);
      }}
    >
      {/* Ripple effect */}
      {ripple && (
        <span className="absolute left-1/2 top-1/2 w-0 h-0 bg-red-400/30 rounded-full z-10 animate-ripple" style={{ transform: 'translate(-50%, -50%)' }} />
      )}
      <span className="relative z-10 flex items-center gap-2">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <rect x="2" y="2" width="20" height="20" rx="6" stroke="currentColor" />
          <circle cx="12" cy="12" r="5" stroke="currentColor" />
          <circle cx="17" cy="7" r="1.2" fill="currentColor" />
        </svg>
        Instagram
      </span>
      <style jsx>{`
        .animate-ripple {
          animation: ripple 0.5s cubic-bezier(0.4,0,0.2,1);
        }
        @keyframes ripple {
          0% { width: 0; height: 0; opacity: 0.7; }
          100% { width: 200px; height: 200px; opacity: 0; }
        }
      `}</style>
    </a>
  );
};

// Animated floating geometric shapes and glowing dots
const AnimatedBackground = () => (
  <>
    {/* Floating Hexagon */}
    <svg className="absolute top-10 left-1/4 w-16 h-16 opacity-40 animate-float-slow z-0" viewBox="0 0 100 100" fill="none">
      <polygon points="50,10 90,30 90,70 50,90 10,70 10,30" fill="#a5b4fc" fillOpacity="0.25" />
    </svg>
    {/* Floating Triangle */}
    <svg className="absolute bottom-20 right-1/4 w-14 h-14 opacity-30 animate-float-fast z-0" viewBox="0 0 100 100" fill="none">
      <polygon points="50,10 90,90 10,90" fill="#f0abfc" fillOpacity="0.22" />
    </svg>
    {/* Floating Circle */}
    <svg className="absolute top-1/2 left-10 w-12 h-12 opacity-30 animate-float-medium z-0" viewBox="0 0 100 100" fill="none">
      <circle cx="50" cy="50" r="40" fill="#38bdf8" fillOpacity="0.18" />
    </svg>
    {/* Glowing Dots */}
    <div className="absolute top-24 right-20 w-3 h-3 rounded-full bg-blue-400 opacity-60 animate-pulse-slow z-0" />
    <div className="absolute bottom-32 left-32 w-2 h-2 rounded-full bg-purple-400 opacity-50 animate-pulse-fast z-0" />
    <div className="absolute top-1/3 right-1/3 w-2.5 h-2.5 rounded-full bg-pink-400 opacity-40 animate-pulse-medium z-0" />
  </>
);

const WavyDivider = ({ position = "top" }) => (
  <svg
    className={`absolute left-0 w-full h-16 ${position === "top" ? "-top-2" : "-bottom-2"} z-10 pointer-events-none`}
    viewBox="0 0 1440 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
  >
    <path
      d="M0 40 Q 360 80 720 40 T 1440 40 V80 H0 Z"
      fill="url(#wavy-gradient)"
      opacity="0.7"
    />
    <defs>
      <linearGradient id="wavy-gradient" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
        <stop stopColor="#a5b4fc" />
        <stop offset="1" stopColor="#f0abfc" />
      </linearGradient>
    </defs>
  </svg>
);

const Testimonials = () => {
  const [carouselIdx, setCarouselIdx] = useState(0);
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;

  // Carousel auto-advance (optional)
  useEffect(() => {
    if (!isMobile) return;
    const interval = setInterval(() => {
      setCarouselIdx((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isMobile]);

  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700;900&display=swap" rel="stylesheet" />
        <style>{`
          @keyframes sheen {
            0% { left: -75%; }
            100% { left: 100%; }
          }
          @keyframes float-slow { 0% { transform: translateY(0); } 50% { transform: translateY(-18px); } 100% { transform: translateY(0); } }
          @keyframes float-medium { 0% { transform: translateY(0); } 50% { transform: translateY(-10px); } 100% { transform: translateY(0); } }
          @keyframes float-fast { 0% { transform: translateY(0); } 50% { transform: translateY(-30px); } 100% { transform: translateY(0); } }
          .animate-float-slow { animation: float-slow 7s ease-in-out infinite; }
          .animate-float-medium { animation: float-medium 4.5s ease-in-out infinite; }
          .animate-float-fast { animation: float-fast 2.8s ease-in-out infinite; }
          @keyframes pulse-slow { 0%, 100% { opacity: 0.6; } 50% { opacity: 1; } }
          @keyframes pulse-medium { 0%, 100% { opacity: 0.4; } 50% { opacity: 0.8; } }
          @keyframes pulse-fast { 0%, 100% { opacity: 0.5; } 50% { opacity: 1; } }
          .animate-pulse-slow { animation: pulse-slow 3.5s ease-in-out infinite; }
          .animate-pulse-medium { animation: pulse-medium 2.2s ease-in-out infinite; }
          .animate-pulse-fast { animation: pulse-fast 1.3s ease-in-out infinite; }
        `}</style>
      </Head>
      <section className="relative py-16 px-2 sm:py-24 sm:px-6 flex flex-col items-center justify-center min-h-[90vh] overflow-hidden bg-white font-[Montserrat,sans-serif]">
        <WavyDivider position="top" />
        <GridBg />
        <AnimatedBackground />
        <UIElements />
        <h2 className="relative z-10 text-4xl sm:text-6xl font-black mb-14 text-center tracking-tight uppercase font-[Montserrat,sans-serif] text-blue-700">
          <span className="border-b-4 border-blue-400 pb-1">Our</span> <span>Customers</span>
        </h2>
        {/* Carousel for mobile */}
        <div className="relative z-10 w-full max-w-xs mx-auto block sm:hidden">
          <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${carouselIdx * 100}%)` }}>
            {testimonials.map((t, i) => (
              <div key={i} className="min-w-full flex-shrink-0">
                <ParallaxCard>
                  {/* Large quote icon in card bg */}
                  <svg className="absolute top-4 left-4 w-10 h-10 opacity-10 z-0" viewBox="0 0 32 32" fill="none"><path d="M12 12C12 8.68629 14.6863 6 18 6C21.3137 6 24 8.68629 24 12C24 15.3137 21.3137 18 18 18C16.3431 18 15 19.3431 15 21V22" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" /></svg>
                  {/* Small blob in card */}
                  <SmallBlob className="absolute -top-4 -right-4 z-0" />
                  {/* Avatar with animated ring on hover */}
                  <div className="relative mr-5 z-10">
                    <span className={`absolute inset-0 rounded-full border-2 border-blue-400 transition-all duration-500 group-hover:border-purple-400 group-hover:shadow-[0_0_16px_4px_rgba(168,85,247,0.15)]`} />
                    <img src={t.avatar} alt={t.name} className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-md relative z-10" />
                  </div>
                  <div className="flex-1 z-10">
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-blue-700 mb-1 tracking-tight font-[Montserrat,sans-serif] uppercase">
                      {t.name}
                    </h3>
                    <span className="text-lg sm:text-xl font-bold tracking-widest uppercase block text-purple-500 mb-2 font-[Montserrat,sans-serif]">
                      {t.brand}
                    </span>
                    <p className="text-gray-500 text-sm leading-snug font-medium line-clamp-3 font-[Montserrat,sans-serif] italic">
                      {t.review}
                    </p>
                    <InstagramButton href={t.instagram} />
                  </div>
                </ParallaxCard>
              </div>
            ))}
          </div>
          {/* Carousel navigation dots */}
          <div className="flex justify-center mt-4 gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`w-3 h-3 rounded-full border-2 border-blue-400 transition-all duration-300 ${carouselIdx === i ? 'bg-blue-400' : 'bg-white'}`}
                onClick={() => setCarouselIdx(i)}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
        {/* Grid with highlight card for desktop */}
        <div className="relative z-10 hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-7xl">
          {testimonials.map((t, i) => (
            <ParallaxCard key={i} highlight={i === 0}>
              <div
                className={`group relative bg-white/20 backdrop-blur-lg border border-blue-400 rounded-2xl shadow-md p-8 flex flex-row items-center transition-all duration-300 min-h-[160px] max-w-[440px] h-[300px] mx-auto hover:backdrop-blur-2xl hover:shadow-lg` + (i === 0 ? ' lg:scale-105 lg:shadow-xl lg:border-2 lg:border-blue-400 lg:z-20' : '')}
                style={{ boxShadow: '0 2px 12px 0 rgba(0,0,0,0.08)' }}
              >
                {/* Large quote icon in card bg */}
                <svg className="absolute top-4 left-4 w-10 h-10 opacity-10 z-0" viewBox="0 0 32 32" fill="none"><path d="M12 12C12 8.68629 14.6863 6 18 6C21.3137 6 24 8.68629 24 12C24 15.3137 21.3137 18 18 18C16.3431 18 15 19.3431 15 21V22" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" /></svg>
                {/* Small blob in card */}
                <SmallBlob className="absolute -top-4 -right-4 z-0" />
                {/* Avatar with animated ring on hover */}
                <div className="relative mr-5 z-10">
                  <span className={`absolute inset-0 rounded-full border-2 border-blue-400 transition-all duration-500 group-hover:border-purple-400 group-hover:shadow-[0_0_16px_4px_rgba(168,85,247,0.15)]`} />
                  <img src={t.avatar} alt={t.name} className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-md relative z-10" />
                </div>
                <div className="flex-1 z-10">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-blue-700 mb-1 tracking-tight font-[Montserrat,sans-serif] uppercase">
                    {t.name}
                  </h3>
                  <span className="text-lg sm:text-xl font-bold tracking-widest uppercase block text-purple-500 mb-2 font-[Montserrat,sans-serif]">
                    {t.brand}
                  </span>
                  <p className="text-gray-500 text-sm leading-snug font-medium line-clamp-3 font-[Montserrat,sans-serif] italic">
                    {t.review}
                  </p>
                  <InstagramButton href={t.instagram} />
                </div>
              </div>
            </ParallaxCard>
          ))}
        </div>
        {/* Section blobs */}
        <SmallBlob className="absolute left-24 top-1/3 z-10" />
        <SmallBlob className="absolute right-32 bottom-24 z-10" />
        <WavyDivider position="bottom" />
      </section>
    </>
  );
};

export default Testimonials; 