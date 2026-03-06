import React from "react";

const MissionVision = () => (
  <section className="py-20 bg-gray-50 px-6">
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">

      {/* Vision */}
      <div className="bg-gray-800 p-10 rounded-3xl text-white shadow-xl">
        
        <div className="flex items-center gap-4 mb-6">
          {/* SVG Icon */}
          <div className="w-12 h-12 bg-[#b0008e] rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5s8.268 2.943 9.542 7c-1.274 4.057-5.065 7-9.542 7s-8.268-2.943-9.542-7z"/>
            </svg>
          </div>

          <h4 className="text-2xl font-black" style={{ fontFamily: "Century Gothic, sans-serif" }}>
            Our Vision
          </h4>
        </div>

        <p className="text-black font-montserrat italic text-[20px]">
          “To become the most trusted and tech-enabled packers and movers in Andhra Pradesh by 2030.”
        </p>
      </div>

      {/* Mission */}
      <div className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
        
        <div className="flex items-center gap-4 mb-6">
          {/* SVG Icon */}
          <div className="w-12 h-12 bg-[#b0008e]/10 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#b0008e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2"/>
              <circle cx="12" cy="12" r="10" stroke="currentColor"/>
            </svg>
          </div>

          <h4 className="text-2xl font-black text-gray-900" style={{ fontFamily: "Century Gothic, sans-serif" }}>
            Our Mission
          </h4>
        </div>

        <p className="text-black font-montserrat italic text-[20px]">
          “Deliver safe, affordable and stress-free relocation services to every household and business we serve.”
        </p>
      </div>

    </div>
  </section>
);

export default MissionVision;