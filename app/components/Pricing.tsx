"use client";
import React from "react";

const plans = [
  {
    name: "Free Trial",
    price: "$0",
    period: "for 14 days",
    features: [
      "All core features",
      "Unlimited reviews",
      "Basic support",
    ],
    cta: "Start Free Trial",
    highlight: false,
  },
  {
    name: "Basic",
    price: "$19",
    period: "/month",
    features: [
      "Everything in Free",
      "Advanced analytics",
      "Priority support",
    ],
    cta: "Get Basic",
    highlight: false,
  },
  {
    name: "Pro",
    price: "$39",
    period: "/month",
    features: [
      "All Basic features",
      "Custom branding",
      "Dedicated manager",
    ],
    cta: "Get Pro",
    highlight: true,
  },
];

const Pricing: React.FC = () => (
  <section className="w-full py-20 bg-gray-50 relative" id="pricing">
    {/* Top left badge heading */}
    <div className="absolute left-6 top-6 z-10 flex flex-col items-start">
      <span className="inline-block px-6 py-2 rounded-full bg-blue-600 text-white text-xs font-extrabold tracking-widest shadow-md uppercase" style={{ fontFamily: 'Inter, Arial, sans-serif', letterSpacing: '0.15em' }}>
        PRICING
      </span>
      <span className="text-gray-500 text-sm mt-2 ml-1" style={{ fontFamily: 'Inter, Arial, sans-serif' }}>
        Simple, transparent pricing. Try us free for 14 days.
      </span>
    </div>
    <div className="max-w-5xl mx-auto px-4">
      {/* Encouragement Heading */}
      <div className="text-center mb-8">
        <h3
          className="text-3xl sm:text-4xl font-extrabold text-black leading-tight"
          style={{ fontFamily: 'var(--font-geist-sans)',  }}
        >
          Unlock your business potential <br /> with the{" "}
          <span className=" text-blue-600">Pro</span> plan.
        </h3>
      </div>
      {/* Removed h2 and moved subtext above */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {plans.map((plan, idx) => (
          <div
            key={plan.name}
            className={`flex flex-col items-center bg-white rounded-2xl shadow-md p-8 sm:p-6 xs:p-4 border transition-transform duration-200 ${plan.highlight ? "border-blue-500 scale-105 shadow-lg" : "border-gray-100"} animate-fade-in-up`}
            style={{ animationDelay: `${0.1 + idx * 0.1}s`, animationFillMode: 'both' }}
          >
            <div className="text-lg font-semibold mb-2 text-blue-600">{plan.name}</div>
            <div className="text-3xl font-bold mb-1">{plan.price}</div>
            <div className="text-xs text-gray-400 mb-4">{plan.period}</div>
            <ul className="mb-6 space-y-2 text-sm text-gray-600">
              {plan.features.map(f => (
                <li key={f} className="flex items-center gap-2">
                  <span className="text-blue-500">✔</span> {f}
                </li>
              ))}
            </ul>
            <button
              className={`w-full px-4 py-2 rounded font-semibold transition-all duration-200 cta-font ${plan.highlight ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-blue-50 text-blue-700 hover:bg-blue-100"} hover:scale-105 hover:shadow-lg active:scale-100 focus:outline-none`}
              style={{ fontSize: '1rem' }}
            >
              {plan.cta}
            </button>
          </div>
        ))}
      </div>
    </div>
    <style jsx global>{`
@keyframes fade-in-up {
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: none; }
}
.animate-fade-in-up {
  animation: fade-in-up 0.7s cubic-bezier(0.4,0,0.2,1);
}
`}</style>
  </section>
);

export default Pricing; 