import React from 'react';

const ContactForm = () => {
  return (
    <form className="bg-white p-8 md:p-10 rounded-[40px] shadow-2xl border border-gray-50 space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <input 
          type="text" 
          placeholder="Your Name" 
          className="w-full p-4 bg-gray-50 rounded-2xl border-2 border-transparent focus:border-[#b0008e] focus:bg-white outline-none font-bold transition-all" 
        />
        <input 
          type="tel" 
          placeholder="Phone Number" 
          className="w-full p-4 bg-gray-50 rounded-2xl border-2 border-transparent focus:border-[#b0008e] focus:bg-white outline-none font-bold transition-all" 
        />
      </div>
      
      <input 
        type="email" 
        placeholder="Email Address" 
        className="w-full p-4 bg-gray-50 rounded-2xl border-2 border-transparent focus:border-[#b0008e] focus:bg-white outline-none font-bold transition-all" 
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <input 
          type="text" 
          placeholder="Move From (City)" 
          className="w-full p-4 bg-gray-50 rounded-2xl border-2 border-transparent focus:border-[#b0008e] focus:bg-white outline-none font-bold transition-all" 
        />
        <input 
          type="text" 
          placeholder="Move To (City)" 
          className="w-full p-4 bg-gray-50 rounded-2xl border-2 border-transparent focus:border-[#b0008e] focus:bg-white outline-none font-bold transition-all" 
        />
      </div>

      <textarea 
        placeholder="Your Message" 
        rows="4" 
        className="w-full p-4 bg-gray-50 rounded-2xl border-2 border-transparent focus:border-[#b0008e] focus:bg-white outline-none font-bold transition-all"
      ></textarea>

      <div className="pt-4">
        <button 
          type="submit" 
          className="group relative w-full py-4 bg-[#212121] text-white font-black text-lg uppercase tracking-widest rounded-[15px] transition-transform active:scale-95 overflow-hidden shadow-lg"
        >
          {/* Animated Border Component */}
          <span 
            className="absolute inset-0 p-[2.5px] rounded-[15px] opacity-100 pointer-events-none
            before:absolute before:inset-[-200%] before:bg-[conic-gradient(#488cfb,#29dbbc,#ddf505,#ff9f0e,#e440bb,#655adc,#488cfb)]
            before:animate-[spin_4s_linear_infinite]
            mask-image:linear-gradient(#fff_0_0),linear-gradient(#fff_0_0)
            [mask-clip:content-box,padding-box]
            mask-composite:exclude
            [-webkit-mask-composite:destination-out]"
            style={{ WebkitMaskComposite: 'destination-out' }}
          ></span>
          
          <span className="relative z-10 flex items-center justify-center gap-2">
            Send Message <span className="group-hover:translate-x-2 transition-transform">👉</span>
          </span>
        </button>
      </div>
    </form>
  );
};

export default ContactForm;