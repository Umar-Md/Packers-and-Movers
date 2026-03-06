import React from 'react';

const ProcessStep = ({ number, title, desc, icon }) => (
  <div className="relative flex flex-col items-center group">
    {/* Step Number Circle with the Pink Shadow you liked */}
    <div className="w-20 h-20 bg-white border-2 border-pink-500 rounded-full flex items-center justify-center text-3xl shadow-[0_0_15px_rgba(236,72,153,0.4)] transition-transform duration-300 group-hover:scale-110 z-10">
      {icon}
    </div>
    
    {/* Content */}
    <div className="mt-6 text-center">
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-m text-black max-w-50 leading-relaxed">
        {desc}
      </p>
    </div>

    {/* Step Number Badge */}
    <span className="absolute -top-2 -right-2 bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shadow-lg">
      {number}
    </span>
  </div>
);

export default ProcessStep;