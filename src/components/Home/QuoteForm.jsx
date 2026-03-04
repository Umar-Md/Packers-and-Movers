import React from 'react';

const QuoteForm = () => {
  return (
    /* mt-12 added to create a gap from the top component */
    <div className="relative group max-w-md w-full mx-auto mt-6 mb-12">
      {/* Dynamic Background Glow */}
      <div className="absolute -inset-2 bg-linear-to-r from-[#b0008e] to-[#fc51da] rounded-[20px] blur-3xl opacity-10 group-hover:opacity-20 transition-opacity duration-700"></div>
      
      <div className="relative bg-white/90 backdrop-blur-xl border border-white rounded-[20px] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.05)] overflow-hidden">
        
        {/* Subtle Inner Gradient Flare */}
        <div className="absolute top-0 right-0 mr-16 -mt-10 w-20 h-20 bg-[#b0008e]/10 rounded-full blur-3xl"></div>

        {/* Header Section - Uppercase and Tighter removed */}
        <div className="relative z-10 mb-8">
          <span className="inline-block px-3 py-1 rounded-full bg-[#b0008e]/10 text-[#b0008e] text-[10px] font-black mb-3">
            Priority Moving
          </span>
          <h3 className="text-3xl font-bold text-gray-900 leading-tight">
            Get a <span className="text-[#b0008e]">Free Quote</span>
          </h3>
        </div>
        
        <form className="relative z-10 space-y-4" onSubmit={(e) => e.preventDefault()}>
          
          <div className="space-y-4">
            {/* Name */}
            <div className="relative">
              <input 
                type="text" 
                placeholder="Full Name" 
                className="w-full pl-5 pr-4 py-4 bg-gray-50/50 border border-gray-100 rounded-2xl focus:outline-none focus:border-[#b0008e]/50 focus:bg-white transition-all font-semibold text-gray-800 placeholder:text-gray-500"
                required 
              />
            </div>

            {/* Phone */}
            <div className="relative">
              <input 
                type="tel" 
                placeholder="Phone Number" 
                className="w-full pl-5 pr-4 py-4 bg-gray-50/50 border border-gray-100 rounded-2xl focus:outline-none focus:border-[#b0008e]/50 focus:bg-white transition-all font-semibold text-gray-800 placeholder:text-gray-500"
                required 
              />
            </div>

            {/* From & To */}
            <div className="grid grid-cols-2 gap-3">
              <input 
                type="text" 
                placeholder="From City" 
                className="w-full px-5 py-4 bg-gray-50/50 border border-gray-100 rounded-2xl focus:outline-none focus:border-[#b0008e]/50 focus:bg-white transition-all font-semibold text-gray-800 placeholder:text-gray-500 text-sm"
                required 
              />
              <input 
                type="text" 
                placeholder="To City" 
                className="w-full px-5 py-4 bg-gray-50/50 border border-gray-100 rounded-2xl focus:outline-none focus:border-[#b0008e]/50 focus:bg-white transition-all font-semibold text-gray-800 placeholder:text-gray-500 text-sm"
                required 
              />
            </div>

            {/* Move Date */}
            <div className="group/date relative bg-gray-50/50 border border-gray-100 rounded-2xl px-5 py-3 transition-all focus-within:border-[#b0008e]/50 focus-within:bg-white">
              <label className="block text-[10px] font-black text-gray-400  mb-1">Estimated Move Date</label>
              <input 
                type="date" 
                className="w-full bg-transparent outline-none text-gray-800 font-bold text-sm cursor-pointer"
                required 
              />
            </div>
          </div>

          <div className="pt-2 space-y-4">
            <button 
              type="submit" 
              className="group/btn relative w-full py-5 bg-green-500 rounded-2xl overflow-hidden transition-all duration-300 active:scale-95"
            >
              <div className="absolute inset-0 bg-[#21dab1] translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
              <span className="relative z-10 text-white font-bold tracking-wide flex items-center justify-center gap-2">
                Get Instant Quote
                <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
              </span>
            </button>

            <div className="relative flex items-center gap-4 py-2">
              <div className="h-px grow bg-gray-300"></div>
              <span className="text-[12px] font-black  ">OR</span>
              <div className="h-px grow bg-gray-300"></div>
            </div>

            <a 
              href="tel:9848111925" 
              className="flex items-center justify-center gap-3 w-full py-4 bg-white border-2 border-gray-900/5 rounded-2xl text-gray-900 font-bold hover:border-[#b0008e] hover:text-[#b0008e] transition-all duration-300 group/phone shadow-sm"
            >
              <div className="w-8 h-8 rounded-full bg-gray-900 group-hover:bg-[#b0008e] flex items-center justify-center transition-colors">
                 <svg className="w-3 h-3 fill-white" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
              </div>
              <span className="tracking-tight text-sm">Call Now: 9848111925</span>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default QuoteForm;