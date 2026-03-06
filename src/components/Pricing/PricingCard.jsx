// components/pricing/PricingCard.jsx
import React from "react";
import {useNavigate} from "react-router-dom"

const PricingCard = ({ plan }) => {
  const navigate =useNavigate()
  return (
    <div
      className={`relative bg-white rounded-[40px] p-8 transition-all duration-500 hover:-translate-y-4 ${
        plan.isFeatured
          ? "shadow-2xl border-2 border-[#b0008e]/20 scale-105 z-10"
          : "shadow-xl border border-gray-100"
      }`}
    >
      <div className={`inline-block px-4 py-2 rounded-full ${plan.lightAccent} mb-8`}>
        <span className="text-m font-black text-black">
          {plan.badge}
        </span>
      </div>

      <div className="mb-8">
        <h3 className="text-4xl font-black text-gray-900 mb-1">
          {plan.price}
        </h3>
        <p className="text-sm font-bold text-[#b0008e]">
          {plan.scope}
        </p>
      </div>

      <ul className="space-y-4 mb-10">
        {plan.features.map((feature, idx) => (
          <li key={idx} className="flex items-center gap-3 text-black font-medium text-sm">
            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            {feature}
          </li>
        ))}
      </ul>

      <button
                  onClick={() => navigate('/quote')}

        className={`w-full py-4 rounded-2xl font-black text-white bg-linear-to-r ${plan.accent} shadow-lg hover:shadow-xl transition-all active:scale-95`}
      >
        {plan.btnText}
      </button>
    </div>
  );
};

export default PricingCard; 