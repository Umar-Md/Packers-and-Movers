import React from 'react';
import { servicesList } from './servicesData';
import ServiceSection from './ServiceSection';

const Services = () => {
  return (
    <main className="overflow-x-hidden">
      {/* Page Header (Matches About Us style) */}
      <div className="bg-[#4d72c7] pt-20 pb-10 px-6 text-center">
        <h1 className="text-4xl md:text-7xl font-black text-white" style={{ fontFamily: 'Century Gothic, sans-serif' }}>
          Our <span className="text-[#ffffff]">Services</span>
        </h1>
        <p className="text-gray-900 mt-4 font-montserrat font-bold text-[20px]">
          Premium Logistics Solutions
        </p>
      </div>

      {/* Render all services dynamically */}
      {servicesList.map((service) => (
        <ServiceSection key={service.id} service={service} />
      ))}
      
      {/* Bottom CTA */}
      <div className="bg-gray-900 py-20 text-center">
        <h2 className="text-3xl font-black text-white mb-8">Not sure which service you need?</h2>
        <a href="tel:9848111925" className="inline-block border-2 border-white text-white px-10 py-4 rounded-full font-black hover:bg-white hover:text-black transition-all">
          Call Expert: 9848111925
        </a>
      </div>
    </main>
  );
};

export default Services;