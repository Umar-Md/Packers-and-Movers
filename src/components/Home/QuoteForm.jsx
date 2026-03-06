import React, { useState, useEffect } from 'react';

const MobileViewForm = () => {
  // State for live time and date
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Update the time every minute
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  // Formatters
  const timeString = currentTime.toLocaleTimeString([], { 
    hour: '2-digit', 
    minute: '2-digit', 
    hour12: false 
  });

  const dateString = currentTime.toLocaleDateString('en-US', { 
    weekday: 'long', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <div className="flex items-center justify-center min-h-screen rounded-2xl p-4">
      {/* --- EXTERNAL PHONE CASE --- */}
      <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-14 rounded-[3rem] h-175 w-85 shadow-2xl overflow-hidden">
        
        {/* Dynamic Island / Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-28 bg-gray-800 rounded-b-3xl z-50"></div>
        
        {/* Phone Side Buttons */}
        <div className="absolute -left-4.25 top-24 h-12 w-0.75 bg-gray-800 rounded-l-lg"></div>
        <div className="absolute -left-4.25 top-40 h-12 w-0.75 bg-gray-800 rounded-l-lg"></div>
        <div className="absolute -right-4.25 top-32 h-20 w-0.75 bg-gray-800 rounded-r-lg"></div>

        {/* --- SCREEN CONTENT --- */}
        <div className="relative h-full w-full bg-[#F9F7F2] overflow-y-auto no-scrollbar pt-10 px-4">
          
          {/* Status Bar Mockup with LIVE TIME */}
          <div className="flex justify-between items-center px-4 mb-4 text-xs font-bold text-gray-800">
            <span>{timeString}</span>
            <div className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
              <div className="w-4 h-2.5 border border-gray-800 rounded-sm relative after:content-[''] after:absolute after:-right-1 after:top-0.5 after:w-0.5 after:h-1 after:bg-gray-800">
                <div className="h-full bg-gray-800 w-3/4"></div>
              </div>
            </div>
          </div>

          {/* Header with LIVE DATE */}
          <div className="text-center mb-6">
            <p className="text-black text-[12px] font-bold mb-1">
              {dateString}
            </p>
            <h2 className="text-3xl font-serif italic text-gray-800 tracking-tight">Priority Moving</h2>
          </div>

          {/* --- FORM SECTION --- */}
          <div className="relative group w-full mx-auto border-t-4 rounded-4xl border-amber-300">
            <div className="absolute -inset-2 bg-linear-to-r from-[#b0008e] to-[#fc51da] rounded-[20px] blur-2xl opacity-10"></div>
            
            <div className="relative bg-white/90 backdrop-blur-xl border border-white rounded-3xl p-5 shadow-lg">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-black leading-tight">
                  Get a <span className="text-[#ff9822]">Free Quote</span>
                </h3>
              </div>
              
              <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="text" 
                  placeholder="Full Name" 
                  className="w-full px-4 py-3.5 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#b0008e]/20 focus:border-[#b0008e]/50 text-sm font-semibold transition-all"
                  required 
                />

                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  className="w-full px-4 py-3.5 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#b0008e]/20 focus:border-[#b0008e]/50 text-sm font-semibold transition-all"
                  required 
                />

                <div className="grid grid-cols-2 gap-2">
                  <input type="text" placeholder="From" className="w-full px-4 py-3.5 bg-gray-50 border border-gray-100 rounded-xl text-xs font-semibold focus:outline-none focus:border-[#b0008e]/50" required />
                  <input type="text" placeholder="To" className="w-full px-4 py-3.5 bg-gray-50 border border-gray-100 rounded-xl text-xs font-semibold focus:outline-none focus:border-[#b0008e]/50" required />
                </div>

                <div className="bg-gray-50 border border-gray-100 rounded-xl px-4 py-2 focus-within:border-[#b0008e]/50 transition-all">
                  <label className="block text-[8px] font-black uppercase text-gray-400 mb-1">Move Date</label>
                  <input type="date" className="w-full bg-transparent outline-none text-xs font-bold cursor-pointer" required />
                </div>

                <button 
                  type="submit" 
                  className="w-full py-4 bg-green-500 hover:bg-[#21dab1] text-white rounded-xl font-bold text-sm shadow-md active:scale-95 transition-all mt-2"
                >
                  Get Instant Quote
                </button>

                <div className="flex items-center gap-3 py-2">
                  <div className="h-px grow bg-gray-200"></div>
                  <span className="text-[10px] font-black text-gray-300">OR</span>
                  <div className="h-px grow bg-gray-200"></div>
                </div>

                <a 
                  href="tel:9848111925" 
                  className="flex items-center justify-center gap-2 w-full py-3 border border-gray-100 rounded-xl text-gray-700 font-bold text-xs hover:bg-gray-50 transition-colors"
                >
                  Call Now: 9848111925
                </a>
              </form>
            </div>
          </div>

          {/* Home Indicator */}
          <div className="w-28 h-1 bg-gray-300 mx-auto mt-10 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default MobileViewForm;