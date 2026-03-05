// components/pricing/PricingCTA.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const PricingCTA = () => {
  const navigate = useNavigate();
  return (
    <div className="mt-24 bg-[#b0008e] text-white py-16 rounded-[40px] text-center">
      <h3 className="text-3xl font-bold mb-4">Ready to Move?</h3>
      <p className="mb-6 text-white/80">
        Get instant quote and move stress-free.
      </p>
      <button
        onClick={() => navigate("/quote")}
        className="bg-white text-[#b0008e] px-8 py-3 rounded-full font-bold"
      >
        Get Instant Quote
      </button>
    </div>
  );
};

export default PricingCTA;
