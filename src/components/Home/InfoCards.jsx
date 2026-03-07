import React from "react";

const InfoCards = () => {
  const cardData = [
    {
      title: "Best Prices",
      desc: "We provide services at the best and most affordable price starting from Rs. 3,500 without compromising on quality.",
      subText: "Starts Rs. 3,500",
      color: "#9B2686", // Deep Pink
    },
    {
      title: "Free Quote",
      desc: "Get a free, no-obligation quote from our moving experts. Reach us at 98481 11925.",
      subText: "98481 11925",
      color: "#c2410c", // Deep Orange
    },
    {
      title: "24/7 Support",
      desc: "Our support team is available around the clock to ensure a smooth and timely delivery experience.",
      subText: "Support Active",
      color: "#0369a1", // Deep Blue
    },
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
              style={{ "--card-color": card.color }}
            >
              {/* Spinning Glow Orbs - Fixed Syntax with Brackets */}
              <span className="absolute -top-4 -left-4 w-16 h-16 rounded-full opacity-30 animate-[spin_6s_linear_infinite] bg-linear-to-b from-transparent to-var(--card-color) blur-xl" />
              <span className="absolute top-[60%] -left-8 w-20 h-20 rounded-full opacity-20 animate-[spin_5s_linear_infinite] bg-linear-to-b from-transparent to-var(--card-color) blur-xl" />

              {/* Main Card Container */}
              <div
                className="relative z-10 w-72 h-96 bg-white rounded-[20px] p-8 flex flex-col justify-between transition-all duration-500 group-hover:scale-105 overflow-hidden border border-gray-100"
                style={{
                  boxShadow: `0 20px 40px -15px ${card.color}40`,
                }}
              >
                {/* --- THE VIBRANT FILL (Solid 100% Color) --- */}
                <div 
                  className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0" 
                  style={{ backgroundColor: card.color }}
                />

                {/* Content - Using relative z-10 to stay above the color fill */}
                <div className="relative z-10 space-y-4">
                  {/* Floating Icon Wrapper */}
                  <div className="absolute -top-10 -right-10 bg-white rounded-full p-1 shadow-md group-hover:scale-110 transition-transform duration-500 border border-gray-100">
                    <svg className="w-8 h-8" fill={card.color} viewBox="0 0 512 512">
                      <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                    </svg>
                  </div>

                  <strong className="block text-2xl font-black text-var(--card-color) group-hover:text-white tracking-widest transition-colors duration-300">
                    {card.title}
                  </strong>

                  <p className="text-[14px] leading-relaxed text-black font-medium group-hover:text-white transition-colors duration-300">
                    {card.desc}
                  </p>

                  <hr className="border-t-[1.5px] border-gray-100 group-hover:border-white/20 transition-colors" />

                  <p className="text-2xl font-black text-gray-900 group-hover:text-white tracking-tight transition-colors">
                    {card.subText}
                  </p>
                </div>

                {/* Button - Inverts on hover to remain visible against dark background */}
                <button className="relative z-10 flex items-center justify-center gap-2 w-full py-3 px-4 rounded-full border-2 border-var(--card-color) text-var(--card-color) font-bold text-sm transition-all duration-300 bg-white group-hover:bg-white group-hover:border-white group-hover:text-var(--card-color) group-hover:shadow-lg">
                  Enquire Now
                  <svg className="w-4 h-4 fill-current transition-transform group-hover:translate-x-1" viewBox="0 0 512 512">
                    <path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
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