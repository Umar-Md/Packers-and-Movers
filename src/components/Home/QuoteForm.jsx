import React, { useState, useEffect } from 'react';

const MobileViewForm = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const handleSendQuote = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    // ⭐ Starting quote price
    let quotePrice = 3500;

    // Example simple logic
    if (data.from_loc !== data.to_loc) {
      quotePrice = 3500;
    }

    // Add quote to form data
    data.quote_price = quotePrice;

    try {
      const response = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert(`Quote request sent! Estimated starting price ₹${quotePrice}`);
        e.target.reset();
      } else {
        alert("Server error. Please try again or call us.");
      }
    } catch (error) {
      alert("Network error. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
      <div className="relative mx-auto border-gray-800 bg-gray-800 border-14 rounded-[3rem] h-175 w-85 shadow-2xl overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-28 bg-gray-800 rounded-b-3xl z-50"></div>

        <div className="relative h-full w-full bg-white/50 overflow-y-auto no-scrollbar pt-10 px-4">

          <div className="flex justify-between items-center px-4 mb-4 text-xs font-bold text-white">
            <span>{timeString}</span>
          </div>

          <div className="text-center mb-6">
            <p className="text-pink-500 text-[12px] font-bold mb-1 uppercase tracking-widest">
              {dateString}
            </p>
            <h2 className="text-3xl font-serif italic text-white tracking-tight">
              Priority Moving
            </h2>
          </div>

          <div className="relative group w-full mx-auto border-t-4 rounded-4xl border-amber-300">
            <div className="absolute -inset-2 bg-linear-to-r from-[#b0008e] to-[#fc51da] rounded-[20px] blur-2xl opacity-10"></div>

            <div className="relative bg-white/90 backdrop-blur-xl border border-white rounded-3xl p-5 shadow-lg">
              <div className="mb-6">
                

                {/* ⭐ Quote Info */}
                <p className="text-xs text-gray-600 mt-1">
                  Starting shifting price from <b>₹3500*</b>
                </p>
              </div>

              <form className="space-y-3" onSubmit={handleSendQuote}>

                <input
                  name="user_name"
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-3.5 bg-gray-50 border border-gray-100 rounded-xl text-sm font-semibold"
                  required
                />

                <input
                  name="user_email"
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3.5 bg-gray-50 border border-gray-100 rounded-xl text-sm font-semibold"
                  required
                />

                <input
                  name="user_phone"
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3.5 bg-gray-50 border border-gray-100 rounded-xl text-sm font-semibold"
                  required
                />

                <div className="grid grid-cols-2 gap-2">
                  <input
                    name="from_loc"
                    type="text"
                    placeholder="From"
                    className="w-full px-4 py-3.5 bg-gray-50 border border-gray-100 rounded-xl text-xs font-semibold"
                    required
                  />
                  <input
                    name="to_loc"
                    type="text"
                    placeholder="To"
                    className="w-full px-4 py-3.5 bg-gray-50 border border-gray-100 rounded-xl text-xs font-semibold"
                    required
                  />
                </div>

                <div className="bg-gray-50 border border-gray-100 rounded-xl px-4 py-2">
                  <label className="block text-[8px] font-black uppercase text-gray-400 mb-1">
                    Move Date
                  </label>
                  <input
                    name="move_date"
                    type="date"
                    className="w-full bg-transparent outline-none text-xs font-bold cursor-pointer"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 text-white rounded-xl font-bold text-sm shadow-md transition-all mt-2 ${
                    isSubmitting
                      ? 'bg-gray-400'
                      : 'bg-green-500 hover:bg-[#21dab1] active:scale-95'
                  }`}
                >
                  {isSubmitting ? 'Sending...' : 'Get Instant Quote'}
                </button>

                <div className="flex items-center gap-3 py-2">
                  <div className="h-px grow bg-gray-200"></div>
                  <span className="text-[10px] font-black text-gray-300">OR</span>
                  <div className="h-px grow bg-gray-200"></div>
                </div>

                <a
                  href="tel:9848111925"
                  className="flex items-center justify-center gap-2 w-full py-3 border border-gray-100 rounded-xl text-gray-700 font-bold text-xs hover:bg-gray-50"
                >
                  Call Now: 9848111925
                </a>

              </form>
            </div>
          </div>

          <div className="w-28 h-1 bg-gray-500/20 mx-auto mt-10 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default MobileViewForm;