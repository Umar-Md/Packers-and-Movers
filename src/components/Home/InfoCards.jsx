import React from 'react';

const InfoCards = () => {
  const cardData = [
    {
      title: "Best Prices",
      desc: "We provide services at the best and most affordable price starting from ₹3,500 without compromising on quality.",
      subText: "Starts ₹3,500",
      color: "#b0008e", // Vedha Magenta
      glow: "#fdf2f8", 
    },
    {
      title: "Free Quote",
      desc: "Get a free, no-obligation quote from our moving experts. Reach us at 98481 11925.",
      subText: "98481 11925",
      color: "#c2410c", // Muted Deep Orange
      glow: "#fff7ed", 
    },
    {
      title: "24/7 Support",
      desc: "Our support team is available around the clock to ensure a smooth and timely delivery experience.",
      subText: "Support Active",
      color: "#0369a1", // Muted Deep Blue
      glow: "#f0f9ff", 
    }
  ];

  return (
    <section className="bg-white py-24 px-6 overflow-hidden font-montserrat">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center font-bold text-4xl md:text-5xl text-gray-900 mb-20 tracking-tighter italic">
          Why Choose <span className="text-[#b0008e] not-italic">Vedha</span>?
        </h2>

        <div className="flex flex-wrap justify-center gap-12 md:gap-16">
          {cardData.map((card, i) => (
            <div 
              key={i} 
              className="relative group shrink-0" 
              style={{ '--card-color': card.color, '--glow-color': card.glow }}
            >
              
              {/* Floating Orbs */}
              <span className="absolute -top-4 -left-4 w-16 h-16 rounded-full opacity-60 animate-[spin_6s_linear_infinite] bg-linear-to-b from-transparent to-(--card-color) blur-xl" style={{ animationDelay: '0.1s' }}></span>
              <span className="absolute top-[60%] -left-8 w-20 h-20 rounded-full opacity-40 animate-[spin_5s_linear_infinite] bg-linear-to-b from-transparent to-(--card-color) blur-xl" style={{ animationDelay: '0.2s' }}></span>
              <span className="absolute top-[10%] left-[60%] w-24 h-24 rounded-full opacity-50 animate-[spin_8s_linear_infinite] bg-linear-to-b from-transparent to-(--card-color) blur-xl" style={{ animationDelay: '0.3s' }}></span>

              {/* Card Body */}
              <div className="relative z-10 w-72 h-96 bg-white/70 backdrop-blur-md border border-(--card-color)/30 rounded-[10px] p-8 flex flex-col justify-between transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-(--card-color)/20 group-hover:border-(--card-color) overflow-hidden">
                
                {/* THE HOVER FILL EFFECT 
                  Moves from bottom-left (-100% X, 100% Y) to center (0,0)
                */}
                <div className="absolute inset-0 bg-(--card-color) translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700 ease-out -z-10 opacity-10"></div>
                <div className="absolute inset-0 bg-(--card-color) translate-x-[-105%] translate-y-[105%] group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500 ease-in-out -z-10 opacity-5"></div>

                {/* Floating Check Icon */}
                <div className="absolute -top-3 -right-3 bg-white rounded-full p-1 shadow-md group-hover:scale-110 transition-transform duration-500 border border-gray-100">
                  <svg className="w-8 h-8" fill={card.color} viewBox="0 0 512 512">
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path>
                  </svg>
                </div>

                <div className="space-y-4">
                  <strong className="block text-sm font-black text-(--card-color) tracking-widest transition-colors duration-300 group-hover:text-gray-900">
                    {card.title}
                  </strong>
                  <p className="text-[14px] leading-relaxed text-gray-600 font-medium group-hover:text-gray-800 transition-colors">
                    {card.desc}
                  </p>
                  <hr className="border-t-[1.5px] border-(--card-color)/20 group-hover:border-(--card-color)/40" />
                  <p className="text-2xl font-black text-gray-800 tracking-tight">{card.subText}</p>
                </div>

                {/* Button */}
                <button className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-full border-2 border-(--card-color) text-(--card-color) font-bold text-xs transition-all duration-300 hover:bg-(--card-color) hover:text-white group/btn bg-white">
                  Enquire Now
                  <svg className="w-0 h-4 fill-current scale-0 transition-all duration-300 group-hover/btn:w-4 group-hover/btn:scale-100" viewBox="0 0 512 512">
                    <path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"></path>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoCards;