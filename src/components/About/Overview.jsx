const Overview = () => (
  <section className="py-20 px-6 bg-white">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-[#b0008e] font-black  text-5xl mb-4">Who We Are</h2>
        <h3 className="text-4xl md:text-3xl font-black text-gray-900 mb-6 leading-tight" style={{ fontFamily: 'Century Gothic, sans-serif' }}>
          Your Trusted Partners in <br /> Seamless Relocation
        </h3>
        <p className="text-gray-600 text-[20px] leading-relaxed font-montserrat">
          Vedha Packers and Movers started with a single goal: to redefine the moving experience in Guntur. 
          With years of expertise, we have grown into a premier logistics provider, handling everything 
          from delicate household items to large-scale office transitions with surgical precision.
        </p>
      </div>
      <div className="relative">
        <img 
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800" 
          alt="Warehouse Team" 
          className="rounded-2xl shadow-2xl"
        />
        <div className="absolute -bottom-6 -left-6 bg-[#b0008e] text-white p-8 rounded-xl hidden md:block">
          <p className="text-4xl font-black">10+</p>
          <p className="text-xs  font-bold">Years Experience</p>
        </div>
      </div>
    </div>
  </section>
);

export default Overview;