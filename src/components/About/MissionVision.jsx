const MissionVision = () => (
  <section className="py-20 bg-gray-50 px-6">
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
      {/* Mission */}
      <div className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
        <div className="size-12 bg-[#b0008e]/10 rounded-full flex items-center justify-center mb-6">
          <span className="text-[#b0008e] font-black">M</span>
        </div>
        <h4 className="text-2xl font-black mb-4" style={{ fontFamily: 'Century Gothic, sans-serif' }}>Our Mission</h4>
        <p className="text-gray-600 font-montserrat italic text-lg">
          “Deliver safe, affordable and stress-free relocation services to every household and business we serve.”
        </p>
      </div>

      {/* Vision */}
      <div className="bg-gray-900 p-10 rounded-3xl text-white shadow-xl">
        <div className="size-12 bg-[#b0008e] rounded-full flex items-center justify-center mb-6">
          <span className="text-white font-black">V</span>
        </div>
        <h4 className="text-2xl font-black mb-4" style={{ fontFamily: 'Century Gothic, sans-serif' }}>Our Vision</h4>
        <p className="text-gray-300 font-montserrat italic text-lg">
          “To become the most trusted and tech-enabled packers and movers in Andhra Pradesh by 2030.”
        </p>
      </div>
    </div>
  </section>
);

export default MissionVision;