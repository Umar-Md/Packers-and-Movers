import React from 'react';
import { useNavigate } from 'react-router-dom';

const Pricing = () => {
  const navigate = useNavigate();
  const plans = [
    {
      badge: "🥉 Basic Local Shifting",
      price: "₹3,500*",
      scope: "1RK / 1BHK",
      features: ["Loading & Unloading", "Basic Packing", "Local Distance"],
      btnText: "Get Quote",
      accent: "from-orange-400 to-orange-600",
      lightAccent: "bg-orange-50",
    },
    {
      badge: "🥈 Standard Intercity",
      price: "Custom",
      scope: "2BHK / 3BHK",
      features: ["Packing + Transport", "Insurance Option", "Shared Vehicle"],
      btnText: "Get Quote",
      accent: "from-slate-400 to-slate-600",
      lightAccent: "bg-slate-50",
      isFeatured: true, // Making this one stand out slightly
    },
    {
      badge: "🥇 Premium All India",
      price: "Custom",
      scope: "Full House Packing",
      features: ["Dedicated Vehicle", "Door-to-Door Delivery", "All India Service"],
      btnText: "Book Now",
      accent: "from-[#b0008e] to-[#ff4dc7]",
      lightAccent: "bg-pink-50",
    }
  ];

  return (
    <section className="bg-gray-50 py-24 px-6 font-montserrat">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Affordable <span className="text-[#b0008e]">Pricing Plans</span>
          </h2>
          <p className="text-gray-500 font-medium text-[18  px]">Transparent moving costs with zero hidden charges.</p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, i) => (
            <div 
              key={i} 
              className={`relative bg-white rounded-[40px] p-8 transition-all duration-500 hover:-translate-y-4 ${
                plan.isFeatured ? 'shadow-2xl border-2 border-[#b0008e]/20 scale-105 z-10' : 'shadow-xl border border-gray-100'
              }`}
            >
              {/* Plan Badge */}
              <div className={`inline-block px-4 py-2 rounded-full ${plan.lightAccent} mb-8`}>
                <span className="text-m font-black  text-gray-700">
                  {plan.badge}
                </span>
              </div>

              {/* Price & Scope */}
              <div className="mb-8">
                <h3 className="text-4xl font-black text-gray-900 mb-1">{plan.price}</h3>
                <p className="text-sm font-bold text-[#b0008e]">{plan.scope}</p>
              </div>

              {/* Features List */}
              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-600 font-medium text-sm">
                    <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
              onClick={() => navigate('/quote')}
              className={`w-full py-4 rounded-2xl font-black  text-white bg-linear-to-r ${plan.accent} shadow-lg hover:shadow-xl transition-all active:scale-95`}>
                {plan.btnText}
              </button>
            </div>
          ))}
        </div>

        {/* Footnote */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-sm border border-gray-100">
            <span className="text-xl">💡</span>
            <p className="text-sm text-gray-500 font-semibold italic">
              *Final price depends on distance & volume of goods.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;