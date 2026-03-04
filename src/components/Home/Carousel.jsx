

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import QuoteForm from "./QuoteForm"; // Ensure the path matches your structure

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const Carousel = () => {
  const slides = [
    {
      img: "https://images.unsplash.com/photo-1520038410233-7141be7e6f97?q=80&w=1600",
      title: "Safe & Affordable Packers and Movers in India",
      subText: "Local & Intercity Shifting | Loading & Unloading | All India Transport",
    },
    {
      img: "https://images.unsplash.com/photo-1600518464441-9154a4dea21b?q=80&w=1600",
      title: "Reliable Door to Door Shifting Services",
      subText: "Home Shifting | Office Relocation | Vehicle Transport",
    },
  ];

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Swiper - Purely for visual atmosphere */}
      <div className="absolute inset-0 z-0">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          speed={2000}
          className="h-full w-full"
        >
          {slides.map((slide, i) => (
            <SwiperSlide key={i}>
              <div
                className="h-full w-full bg-cover bg-center"
                style={{
                  backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.95) 40%, rgba(255,255,255,0.7) 100%), url(${slide.img})`,
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Main Content Layer */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full pt-20">
          
          {/* LEFT SIDE: Copy & CTAs */}
          <div className="space-y-8 animate-in fade-in slide-in-from-left duration-1000">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-[1.1]">
                Safe & Affordable <br />
                <span className="text-[#b0008e]">Packers and Movers</span> <br />
                in India
              </h1>
              <p className="mt-6 text-lg md:text-xl text-gray-600 font-medium">
                {slides[0].subText}
              </p>
            </div>

            {/* 💰 Highlight Box */}
            <div className="inline-flex items-center gap-3 bg-white border-l-4 border-[#fd9115] px-6 py-4 shadow-lg rounded-r-2xl">
              <span className="text-3xl">💰</span>
              <div>
                <p className="text-m font-bold text-gray-400">Pricing Starts At</p>
                <p className="text-2xl font-black text-gray-900">₹3,500 Only*</p>
              </div>
            </div>

            {/* 🔥 CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#b0008e] text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl hover:scale-105">
                Get Free Quote
              </button>
              
              <a
                href="https://wa.me/919848111925"
                target="_blank"
                rel="noreferrer"
                className="bg-[#25D366] text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all flex items-center gap-2 hover:scale-105"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 448 512">
                   <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.7 17.8 69.7 27.2 106.2 27.2 122.4 0 222-99.6 222-222 0-59.3-23-115.1-65.1-157.1zM223.9 445.2c-33.1 0-65.7-8.9-94.1-25.7l-6.7-4-69.8 18.3L71.6 365l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.9-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 54 81.2 54 130.4 0 101.7-82.8 184.5-184.9 184.5zm101.1-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.2-8.5-44.2-27.1-16.4-14.6-27.4-32.7-30.6-38.2-3.2-5.6-.3-8.6 2.4-11.3 2.5-2.5 5.6-6.5 8.3-9.8 2.8-3.3 3.7-5.6 5.5-9.3 1.9-3.7.9-6.9-.5-9.8-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.8 23.5 9.2 31.5 11.8 13.3 4.2 25.4 3.6 35 2.2 10.7-1.5 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                </svg>
                WhatsApp Now
              </a>
            </div>
          </div>

          {/* RIGHT SIDE: Quote Form Integration */}
          <div className="hidden lg:block lg:pl-10">
             <QuoteForm />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Carousel;
