import React from 'react';
import ServiceCard from './ServiceCard';


const Services = () => {
  const serviceList = [
    {
      title: "House Shifting",
      desc: "Complete household relocation with premium packing for furniture, electronics, and fragile items.",
      image: "https://images.unsplash.com/photo-1600518464441-9154a4dea21b?q=80&w=800"
    },
    {
      title: "Office Relocation",
      desc: "Systematic shifting of office IT assets, workstations, and files with minimal business downtime.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800"
    },
    {
      title: "Car Transportation",
      desc: "Specialized car carriers to move your vehicle safely across any distance without a single scratch.",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800"
    },
    {
      title: "Loading & Unloading",
      desc: "Trained labor for heavy lifting using modern equipment to ensure maximum safety for your goods.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800"
    }
  ];

  return (
    <section className="py-24 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-black mt-2">Professional Moving Services</h2>
          <span className="text-[#b0008e] font-bold  text-xl">What We Offer</span>
          <div className="w-20 h-1.5 bg-[#b0008e] mx-auto mt-4 rounded-full shadow-[0_0_10px_#b0008e]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceList.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;