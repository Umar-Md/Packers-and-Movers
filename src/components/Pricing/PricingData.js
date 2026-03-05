// components/pricing/pricingData.js

export const pricingPlans = [
  {
    id: 1,
    category: "local",
    badge: "🥉 Basic Local Shifting",
    price: "₹3,500*",
    scope: "1RK / 1BHK",
    features: ["Loading & Unloading", "Basic Packing", "Local Distance"],
    btnText: "Get Quote",
    accent: "from-orange-400 to-orange-600",
    lightAccent: "bg-orange-50",
  },
  {
    id: 2,
    category: "intercity",
    badge: "🥈 Standard Intercity",
    price: "Custom",
    scope: "2BHK / 3BHK",
    features: ["Packing + Transport", "Insurance Option", "Shared Vehicle"],
    btnText: "Get Quote",
    accent: "from-slate-400 to-slate-600",
    lightAccent: "bg-slate-50",
    isFeatured: true,
  },
  {
    id: 3,
    category: "all",
    badge: "🥇 Premium All India",
    price: "Custom",
    scope: "Full House Packing",
    features: ["Dedicated Vehicle", "Door-to-Door Delivery", "All India Service"],
    btnText: "Book Now",
    accent: "from-[#b0008e] to-[#ff4dc7]",
    lightAccent: "bg-pink-50",
  }
];