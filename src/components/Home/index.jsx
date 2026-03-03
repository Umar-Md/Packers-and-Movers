import React from 'react';
import Carousel from './Carousel';
import InfoCards from './InfoCards';
import Process from './Process';
import Services from './Services';

const HomeContent = () => {
  return (
    <div className="relative">
      {/* Full Page Hero Section */}
      <section id="home">
        <Carousel />
      </section>

      {/* Brand Introduction Section */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <span className="text-orange-600 font-bold text-m">Welcome to P&M</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-3 mb-8">
            P&M Packers and Movers <br /> 
            <span className="text-blue-800">Narasaraopet</span>
          </h2>
          <div className="w-24 h-1.5 bg-blue-800 mx-auto mb-10 rounded-full"></div>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Relocating your home or office? We provide end-to-end solutions including 
            premium packing, safe loading, and timely transportation. Our experienced 
            team ensures a stress-free experience for every move within or outside Narasaraopet.
          </p>
        </div>
        <InfoCards />
        <Process />
        <Services />
      </section>
    </div>
  );
};

export default HomeContent;