import React from 'react';
import circle from "../../assets/circle.webp";
import { useNavigate } from 'react-router-dom';
const About = () => {
  const navigate = useNavigate();
  const cardData = [
    {
      title: "Best Prices",
      desc: "We provide services at the best and most affordable price starting from ₹3,500 without compromising on quality.",
      subText: "Starts ₹3,500",
      color: "#b0008e", 
      glow: "#fdf2f8", 
    },
    {
      title: "Free Quote",
      desc: "Get a free, no-obligation quote from our moving experts. Reach us at 98481 11925.",
      subText: "98481 11925",
      color: "#c2410c", 
      glow: "#fff7ed", 
    },
    {
      title: "24/7 Support",
      desc: "Our support team is available around the clock to ensure a smooth and timely delivery experience.",
      subText: "Support Active",
      color: "#0369a1", 
      glow: "#f0f9ff", 
    }
  ];

  return (
    <div className="pt-0 font-montserrat bg-white text-black">
      {/* 1. Header Section */}
      <section className="bg-[#b0008e] py-16 px-6 text-center text-white">
        <h1 className="text-4xl font-bold mb-4">About Vedha Packers</h1>
        <p className="max-w-2xl mx-auto text-pink-100 font-medium">
          Safe, affordable, and professional relocation across India.
        </p>
      </section>

      {/* 2. Who We Are & Mission */}
      <section className="max-w-7xl mx-auto py-20 px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold">Who We Are</h2>
          <p className="text-black leading-relaxed text-lg">
            Vedha Packers and Movers is a trusted name in the logistics industry. Based in Guntur we have grown from a local shifting service to a nationwide relocation partner. We pride ourselves on transparency, safety, and speed.
          </p>
          <div className="p-8 bg-gray-50 rounded-[30px] border-l-8 border-[#b0008e]">
            <h3 className="font-bold text-xl mb-2 tracking-tight">Our Mission</h3>
            <p className="text-black text-[18px]">To provide stress-free, damage-free, and affordable moving solutions through innovation, safety protocols, and a customer-first approach.</p>
          </div>
        </div>
        
        {/* Fixed Class: h-112.5 replaces h-[450px] */}
        <div className="relative h-112.5 overflow-hidden rounded-[40px] shadow-xl">
          <img 
            src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000" 
            alt="Professional Office" 
            className="w-full h-full object-cover" 
          />
        </div>
      </section>

      {/* 3. Why Choose Us Section (Counters) */}
      <section className="py-20 px-6 bg-gray-50 text-center">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold tracking-tight mb-16">Why Choose Us</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-black text-[#b0008e] mb-2">10+</div>
              <p className="text-xs font-bold text-black">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black text-[#b0008e] mb-2">5000+</div>
              <p className="text-xs font-bold text-black">Happy Customers</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black text-[#b0008e] mb-2">24/7</div>
              <p className="text-xs font-bold text-black">Support</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black text-[#b0008e] mb-2">🛡️</div>
              <p className="text-xs font-bold text-black">Insurance Coverage</p>
            </div>
          </div>
        </div>
      </section>
      {/* 4. InfoCards Section */}
<section className="bg-white py-24 px-6 overflow-hidden">
  <div className="max-w-7xl mx-auto text-center">
    <div className="flex flex-wrap justify-center gap-12 md:gap-16 mb-16">
      {cardData.map((card, i) => (
        <div 
          key={i} 
          className="relative group shrink-0" 
          style={{ '--card-color': card.color, '--glow-color': card.glow }}
        >
          {/* Animated Glow Backgrounds */}
          <span className="absolute -top-4 -left-4 w-16 h-16 rounded-full opacity-60 animate-[spin_6s_linear_infinite] bg-linear-to-b from-transparent to-(--card-color) blur-xl"></span>
          <span className="absolute top-[60%] -left-8 w-20 h-20 rounded-full opacity-40 animate-[spin_5s_linear_infinite] bg-linear-to-b from-transparent to-(--card-color) blur-xl"></span>
          <span className="absolute top-[10%] left-[60%] w-24 h-24 rounded-full opacity-50 animate-[spin_8s_linear_infinite] bg-linear-to-b from-transparent to-(--card-color) blur-xl"></span>

          {/* Card Container */}
          <div className="relative z-10 w-72 h-64 bg-white/70 backdrop-blur-md border border-(--card-color)/30 rounded-[10px] p-8 flex flex-col justify-between transition-all duration-500 group-hover:scale-105 group-hover:shadow-(--card-color)/20 group-hover:border-(--card-color) overflow-hidden">
            
            <div className="absolute inset-0 bg-(--card-color) translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700 ease-out -z-10 opacity-10"></div>
            
            <div className="absolute -top-3 -right-3 bg-white rounded-full p-1 shadow-md border border-gray-100">
              <svg className="w-8 h-8" fill={card.color} viewBox="0 0 512 512">
                <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path>
              </svg>
            </div>

            <div className="space-y-4 text-left">
              <strong className="block text-2xl font-black text-(--card-color) tracking-widest transition-colors duration-300 group-hover:text-gray-900">
                {card.title}
              </strong>
              <p className="text-[14px] leading-relaxed text-gray-600 font-medium group-hover:text-gray-800 transition-colors">
                {card.desc}
              </p>
              <hr className="border-t-[1.5px] border-(--card-color)/20 group-hover:border-(--card-color)/40" />
              <p className="text-2xl font-black text-gray-800 tracking-tight">{card.subText}</p>
            </div>

            {/* Replaced Button with simple status text */}
            <div className="text-left py-2">
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Single Centralized Button */}
    <div className="mt-8">
      <button
        onClick={() => navigate('/quote')}
        className="inline-flex items-center justify-center gap-3 px-12 py-5 rounded-full bg-[#4d72c7] text-white font-bold text-lg shadow-2xl shadow-[#4d72c7]/30 hover:bg-[#4d72f5] hover:scale-105 transition-all duration-300 active:scale-95">
        Get Your Free Quote Today
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </button>
      <p className="mt-4 text-gray-500 text-sm font-medium">Join 5000+ satisfied families across India</p>
    </div>
  </div>
</section>
      {/* 5. All India Network */}
      <section className="bg-[#000000] py-16 px-6 text-white text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-4xl font-bold">All India Network</h2>
          <div className="w-34 h-1 bg-orange-400 mx-auto rounded-full"></div>
          <p className="text-white text-[20px] leading-relaxed font-medium">
            From our primary hub in Guntur, we provide seamless 
            intercity and interstate shifting services to any destination across India.
          </p>
        </div>
      </section>

      {/* 6. Professional Team & Support Section */}
      {/* 6. Professional Team & Support Section */}
<section className="py-24 px-6 bg-white">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

    {/* Professional Team */}
    <div className="relative p-12 bg-gray-100 rounded-[25px] border border-gray-100 flex items-start gap-6 overflow-hidden">

      {/* Background Circle */}
      <img
        src={circle}
        alt="bg"
        className="absolute -top-10 left-120 -bottom-16 w-46 opacity-60 pointer-events-none"
      />

      <div className="w-14 h-14 bg-[#b0008e] rounded-2xl flex items-center justify-center text-white shrink-0 z-10">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a7.5 7.5 0 0115 0" />
        </svg>
      </div>

      <div className="z-10">
        <h3 className="text-3xl font-bold mb-2">Professional Team</h3>
        <p className="text-gray-600 leading-relaxed font-medium text-[18px]">
          Our staff are trained relocation experts. From handling fragile glassware
          to dismantling heavy furniture, our team follows strict safety protocols.
        </p>
      </div>

    </div>

    {/* 24/7 Support */}
    <div className="relative p-12 bg-gray-100 rounded-[25px] border border-gray-100 flex items-start gap-6 overflow-hidden">

      {/* Background Circle */}
      <img
        src={circle}
        alt="bg"
        className="absolute -right-10 -bottom-10 w-46 opacity-50 pointer-events-none"
      />

      <div className="w-14 h-14 bg-[#b0008e] rounded-2xl flex items-center justify-center text-white shrink-0 z-10">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75l9.75 5.25 9.75-5.25M3 8.25v7.5a2.25 2.25 0 002.25 2.25h13.5A2.25 2.25 0 0021 15.75v-7.5" />
        </svg>
      </div>

      <div className="z-10">
        <h3 className="text-3xl font-bold mb-2">24/7 Support</h3>
        <p className="text-gray-600 leading-relaxed font-medium text-[18px]">
          Our dedicated support line is active 24/7 to provide updates and resolve
          any queries you have during transit.
        </p>
      </div>

    </div>

  </div>
</section>
    </div>
  );
};

export default About;