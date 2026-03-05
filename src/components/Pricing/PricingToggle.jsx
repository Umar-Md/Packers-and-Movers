// components/pricing/PricingToggle.jsx
import React from "react";

const PricingToggle = ({ active, setActive }) => {
  const tabs = ["all", "local", "intercity"];

  return (
    <div className="flex justify-center mb-12">
      <div className="bg-white p-2 rounded-full shadow-md flex gap-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`px-6 py-2 rounded-full text-sm font-bold capitalize transition ${
              active === tab
                ? "bg-[#b0008e] text-white"
                : "text-gray-500 hover:text-black"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PricingToggle;