import React, { useState } from "react";
import PricingCard from "./PricingCard";
import PricingToggle from "./PricingToggle";
import PricingCTA from "./PricingCTA";
import { pricingPlans } from "./PricingData";
const Pricing = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  // ✅ Updated Filtering Logic
  const filteredPlans =
    activeCategory === "all"
      ? pricingPlans
      : pricingPlans.filter((plan) => plan.category === activeCategory);

  return (
    <main className="min-h-screen bg-white">
      {/* 1. Added the Dark Header to match Services/About */}
      <div className="bg-[#0f172a] pt-40 pb-24 px-6 text-center">
        <h1 className="text-6xl md:text-8xl font-black text-white leading-none italic">
          Pricing <span className="text-[#b0008e]">Plans</span>
        </h1>
        <p className="text-gray-400 mt-6 font-semibold text-xs">
          Transparent • Affordable • Reliable
        </p>
      </div>

      <section className="bg-gray-50 py-24 px-6 font-montserrat">
        <div className="max-w-7xl mx-auto">
          {/* Toggle Component */}
          <PricingToggle
            active={activeCategory}
            setActive={setActiveCategory}
          />

          {/* 2. Responsive Grid for filtered results */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mt-12">
            {filteredPlans.length > 0 ? (
              filteredPlans.map((plan) => (
                <PricingCard key={plan.id} plan={plan} />
              ))
            ) : (
              <div className="col-span-3 text-center py-20 text-gray-400 font-bold">
                No plans found for this category
              </div>
            )}
          </div>

          <PricingCTA />
        </div>
      </section>
    </main>
  );
};

export default Pricing;