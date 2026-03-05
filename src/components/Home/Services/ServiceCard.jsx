import React from 'react';

const ServiceCard = ({ title, image, desc }) => (
  <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(176,0,142,0.2)] group flex flex-col">
    
    {/* Image Container */}
    <div className="h-56 overflow-hidden relative">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
        <span className="text-white font-bold">VPM Reliable Service</span>
      </div>
    </div>

    {/* Content */}
    <div className="p-6 text-center flex flex-col grow">
      <h3 className="text-[22px] font-bold text-gray-900 mb-3 group-hover:text-[#b0008e] transition-colors">
        {title}
      </h3>

      <p className="text-gray-500 text-m leading-relaxed mb-6 grow">
        {desc}
      </p>

      <button className="w-full py-3 border-2 border-[#b0008e] text-[#b0008e] rounded-xl font-bold text-sm hover:bg-[#b0008e] hover:text-white transition-all">
        View Details
      </button>
    </div>

  </div>
);

export default ServiceCard;