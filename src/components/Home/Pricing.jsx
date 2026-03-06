import React from "react";
import { useNavigate } from "react-router-dom";
import Quote from "../../assets/quote.png";

const Pricing = () => {
  const navigate = useNavigate();

  const plans = [
    {
      badge: "🥉 Basic Local Shifting",
      price: "₹3,500*",
      scope: "1RK / 1BHK",
      features: ["Loading & Unloading", "Basic Packing", "Local Distance"],
      btnText: "Get Quote",
      // NEW CARD BG: Soft Orange/Amber
      cardBg: "bg-[#FFF7ED]",
      btnColor: "bg-[#ff6a00]",
      badgeBg: "bg-orange-200",
      textColor: "text-orange-900",
      quoteColor: "#ff6a00",
    },
    {
      badge: "🥈 Standard Intercity",
      price: "Custom",
      scope: "2BHK / 3BHK",
      features: ["Packing + Transport", "Insurance Option", "Shared Vehicle"],
      btnText: "Get Quote",
      // NEW CARD BG: Soft Slate/Blue
      cardBg: "bg-[#F1F5F9]",
      btnColor: "bg-[#54627b]",
      badgeBg: "bg-slate-200",
      textColor: "text-slate-900",
      isFeatured: true,
      quoteColor: "#54627b",
    },
    {
      badge: "🥇 Premium All India",
      price: "Custom",
      scope: "Full House Packing",
      features: [
        "Dedicated Vehicle",
        "Door-to-Door Delivery",
        "All India Service",
      ],
      btnText: "Book Now",
      // NEW CARD BG: Soft Pink/Lavender
      cardBg: "bg-[#FDF2F8]",
      btnColor: "bg-[#b0008e]",
      badgeBg: "bg-pink-200",
      textColor: "text-pink-900",
      quoteColor: "#b0008e",
    },
  ];

  return (
    <section className="bg-white py-24 px-6 font-montserrat overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter mb-4">
            Affordable <span className="text-[#b0008e]">Pricing Plans</span>
          </h2>
          <p className="text-gray-900 font-bold text-xl">
            Transparent moving costs with zero hidden charges.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative p-12 transition-all duration-700 hover:-translate-y-6 group flex flex-col justify-between ${plan.cardBg} ${
                plan.isFeatured
                  ? "shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] scale-105 z-10 border-2 border-white"
                  : "shadow-xl"
              }`}
              style={{ borderRadius: "60px" }}
            >
              {/* --- 180 Degree Rotated Quotation Mark --- */}
              <div className="absolute top-8 right-8 pointer-events-none">
                <img className="h-14 w-14" src={Quote} alt="Quote" />
              </div>

              <div>
                {/* Plan Badge */}
                <div
                  className={`inline-block px-6 py-2 rounded-full ${plan.badgeBg} mb-10 shadow-sm`}
                >
                  <span className={`text-xs font-black  ${plan.textColor}`}>
                    {plan.badge}
                  </span>
                </div>

                {/* Price Display */}
                <div className="mb-10">
                  <h3 className="text-4xl font-black text-gray-900 tracking-tighter">
                    {plan.price}
                  </h3>
                  <p className="text-lg font-bold text-[#b0008e] mt-2 italic">
                    {plan.scope}
                  </p>
                </div>

                {/* Features List */}
                <ul className="space-y-5 mb-12">
                  {plan.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-4 text-black font-bold"
                    >
                      <div className="shrink-0 w-7 h-7 rounded-full bg-green-500 flex items-center justify-center shadow-lg">
                        <svg
                          className="w-4 h-4 text-white"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="4"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="text-[16px]">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full h-1px bg-gray-300/50 mb-8"></div>
              {/* Action Button */}
              <button
                onClick={() => navigate("/quote")}
                className={`w-full py-4 rounded-full font-bold text-lg text-white ${plan.btnColor} shadow-lg hover:scale-105 hover:brightness-110 transition-all active:scale-95`}
              >
                {plan.btnText}
              </button>
            </div>
          ))}
        </div>

        {/* Footnote */}
        <div className="mt-20 flex justify-center">
          <div className=" bg-yellow-100 flex items-center gap-2 border-b-2 border-red-400 px-6 py-3 rounded-full shadow-md">
            <span>💡</span>
            <p className="text-sm font-semibold text-black">
              *Final price depends on distance & volume of goods.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
