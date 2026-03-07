import React from 'react';
import Carousel from './Carousel';
import InfoCards from './InfoCards';
import Process from './Process';
import Services from './Services';
import Pricing from './Pricing';
import Hero from './Hero';
import About from './About';
import Testimonials from './Testimonials';
const HomeContent = () => {
  return (
    <div className="relative">
      {/* Full Page Hero Section */}
      <section id="home">
        <Hero />
        <Carousel />
        <Pricing />
        <About />
      </section>

      {/* Brand Introduction Section */}
      <section className="py-24 bg-white pb-0">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-8">
            Vedha Packers and Movers <br /> 
          </h2>
          <div className="w-64 h-1.5 bg-blue-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-black leading-relaxed max-w-3xl mx-auto">
            Relocating your home or office? We provide end-to-end solutions including 
            premium packing, safe loading, and timely transportation. Our experienced 
            team ensures a stress-free experience for every move within or outside Narasaraopet.
          </p>
        </div>
        {/* <InfoCards /> */}
        <Process />
        <Services />
        <Testimonials />
      </section>
    </div>
  );
};

export default HomeContent;