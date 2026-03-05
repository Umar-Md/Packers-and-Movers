import React from 'react';
import ProcessStep from './ProcessStep';

const Process = () => {
  const steps = [
    { number: "01", title: "Book Survey", desc: "We visit your location to assess the goods and provide an exact quote.", icon: "📋" },
    { number: "02", title: "Safe Packing", desc: "Our experts use multi-layer packing materials to ensure zero damage.", icon: "📦" },
    { number: "03", title: "Fast Transit", desc: "Safe loading and transportation using our GPS-tracked fleet.", icon: "🚛" },
    { number: "04", title: "Unpacking", desc: "We help you unload and set up your items at your new destination.", icon: "🏠" },
  ];

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-gray-900 mt-2">How It Works</h2>
          <span className="text-pink-600 font-bold text-xl">Simplifying your move</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
          {/* Connecting Line for Desktop */}
          <div className="hidden md:block absolute top-10 left-0 w-full h-0.5 bg-pink-100 z-0"></div>
          
          {steps.map((step, i) => (
            <ProcessStep key={i} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;