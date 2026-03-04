import React from "react";

const ServiceSection = ({ service }) => {
  return (
    <section
      className={`py-20 px-6 ${service.reverse ? "bg-gray-50" : "bg-white"}`}
    >
      <div
        className={`max-w-7xl mx-auto flex flex-col ${service.reverse ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-12 lg:gap-20`}
      >
        {/* Image Container */}
        <div className="w-full lg:w-1/2">
          <div className="relative group">
            <div className="absolute -inset-2 bg-[#b0008e] rounded-2xl opacity-10 group-hover:opacity-20 transition-opacity"></div>
            <img
              src={service.img}
              alt={service.title}
              className="relative rounded-2xl shadow-2xl w-full h-100 object-cover border-4 border-white transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </div>
        </div>

        {/* Content Container */}
        <div className="w-full lg:w-1/2 space-y-8">
          <h2
            className="text-4xl md:text-5xl font-black text-gray-900 leading-tight italic "
            style={{ fontFamily: "Century Gothic, sans-serif" }}
          >
            {service.title}
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed font-medium">
            {service.desc}
          </p>

          {/* UPDATED POINTS: Pill/Button style with Dot */}
          <div className="flex flex-wrap gap-4 pt-2">
            {service.points.map((point, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 bg-white border-3 border-gray-100 px-5 py-3 rounded-xl shadow-lg hover:border-[#19c1eb] hover:shadow-md transition-all duration-300 group"
              >
                {/* Colored Dot Indicator */}
                <div className="h-3 w-3 rounded-full bg-[#61f328] group-hover:scale-125 transition-transform"></div>

                {/* Text Styling */}
                <span className="text-lg font-extrabold text-[#0f172a]">
                  {point}
                </span>
              </div>
            ))}
          </div>

          {/* MAGIC BUTTON */}
          <div className="pt-6">
            <button className="group relative px-10 py-4 bg-[#212121] text-white font-black text-lg rounded-[15px] transition-transform active:scale-95 overflow-hidden shadow-xl">
              {/* The Circling Border Layer */}
              <span
                className="absolute inset-0 p-0.5 rounded-[15px] 
      before:absolute before:inset-[-200%] before:bg-[conic-gradient(#488cfb,#29dbbc,#ddf505,#ff9f0e,#e440bb,#655adc,#488cfb)]
      before:group-hover:animate-[spin_4s_linear_infinite]
      
      mask-image:linear-gradient(#fff,#fff),linear-gradient(#fff,#fff)
      [mask-clip:content-box,padding-box]
      [-webkit-mask-composite:destination-out]
      mask-composite:exclude
      pointer-events-none"
              ></span>

              <span className="relative z-10">👉 Get Quote</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
