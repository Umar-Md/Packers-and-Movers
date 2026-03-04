const Strengths = () => {
  const items = [
    { title: "Trained Staff", desc: "Expert packers for fragile items", icon: "👷‍♂️" },
    { title: "GPS Vehicles", desc: "Real-time tracking for your goods", icon: "🛰️" },
    { title: "Secure Packing", desc: "Multi-layer bubble & foam wrap", icon: "📦" },
    { title: "On-Time Delivery", desc: "We value your time strictly", icon: "⏰" }
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-[#b0008e] font-black text-xs mb-4">Why Choose Us</h2>
        <h3 className="text-4xl font-black text-gray-900" style={{ fontFamily: 'Century Gothic, sans-serif' }}>Our Strength</h3>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {items.map((item, idx) => (
          <div key={idx} className="p-8 bg-white border-b-4 border-gray-50 hover:border-[#b0008e] transition-all duration-300 text-left">
            <div className="text-4xl mb-6">{item.icon}</div>
            <h5 className="text-xl font-bold mb-2 text-gray-900">{item.title}</h5>
            <p className="text-gray-500 text-sm font-montserrat">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Strengths;