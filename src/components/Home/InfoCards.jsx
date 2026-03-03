import React from 'react';

const InfoCards = () => {
  const cardData = [
    {
      title: "BEST PRICES",
      desc: "We provide services at the best and most affordable price in Narasaraopet without compromising on quality.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      bgColor: "bg-[#b0008e]", // Matches the pink/magenta in your screenshot
      textColor: "text-white",
      isMiddle: false
    },
    {
      title: "Get A Free Quote",
      desc: "Call us today to get a free, no-obligation quote from our moving experts.",
      subText: "90147 04373",
      buttonText: "Contact Us",
      bgColor: "bg-white",
      textColor: "text-[#b0008e]",
      isMiddle: true // This flag triggers the extra height
    },
    {
      title: "24/7 SUPPORT",
      desc: "You should be able to enjoy everything in life. We guarantee that nothing will stop you with our quick strategy.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      bgColor: "bg-[#b0008e]",
      textColor: "text-white",
      isMiddle: false
    }
  ];

  return (
    <section className="relative z-40 mx-auto px-4 mt-10">
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 overflow-hidden shadow-2xl">
        {cardData.map((card, index) => (
          <div 
            key={index} 
            className={`
              ${card.bgColor} ${card.textColor} 
              flex-1 w-full transition-all duration-500 ease-in-out cursor-default
              flex flex-col items-center justify-center text-center p-12
              hover:scale-105 hover:z-50 group rounded-2xl
              ${card.isMiddle ? 'min-h-112.5 py-16 shadow-xl z-10 scale-105 md:scale-110' : 'min-h-100'}
            `}
          >
            {/* Icon (For Side Cards) */}
            {card.icon && (
              <div className="mb-6 transform group-hover:rotate-12 transition-transform duration-300">
                {card.icon}
              </div>
            )}
            
            {/* Title */}
            <h3 className="text-2xl font-bold mb-4 tracking-wider uppercase">
              {card.title}
            </h3>
            
            {/* Separator Line */}
            <div className={`w-12 h-0.5 mb-6 transition-all duration-300 group-hover:w-20 ${card.bgColor === 'bg-white' ? 'bg-[#b0008e]' : 'bg-white/40'}`}></div>
            
            {/* Description */}
            <p className={`text-sm leading-relaxed max-w-62.5 ${card.isMiddle ? 'text-gray-600 font-medium' : 'opacity-90'}`}>
              {card.desc}
            </p>

            {/* Middle Card Specific Content */}
            {card.isMiddle && (
              <div className="mt-6 flex flex-col items-center">
                <span className="text-lg font-black mb-6">{card.subText}</span>
                <button className="px-10 py-3 border-2 border-[#b0008e] text-[#b0008e] font-bold rounded-lg hover:bg-[#b0008e] hover:text-white transition-all transform active:scale-95">
                  {card.buttonText}
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default InfoCards;