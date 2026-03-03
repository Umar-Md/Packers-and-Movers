import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const Hero = () => {
  const slides = [
    {
      img: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=2070",
      title: "Relocate With Confidence",
      desc: "India's most trusted packers and movers at your doorstep."
    },
    {
      img: "https://images.unsplash.com/photo-1520038410233-7141be7e6f97?q=80&w=2070",
      title: "Safe Vehicle Transport",
      desc: "Specialized carriers for your cars and bikes. Zero scratches guaranteed."
    }
  ];

  return (
    <section className="h-screen w-full relative">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
        loop
        className="h-full w-full"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="relative h-full w-full flex items-center justify-center text-center">
              <div className="absolute inset-0 z-0">
                <img src={slide.img} className="w-full h-full object-cover" alt="Moving" />
                <div className="absolute inset-0 bg-black/60"></div>
              </div>
              <div className="relative z-10 px-4 max-w-4xl">
                <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 uppercase tracking-tight">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-2xl text-gray-200 mb-8">{slide.desc}</p>
                <div className="flex gap-4 justify-center">
                  <button className="bg-orange-600 text-white px-8 py-3 rounded hover:bg-orange-700 font-bold transition">Get Quote</button>
                  <button className="border-2 border-white text-white px-8 py-3 rounded hover:bg-white hover:text-black font-bold transition">Call Us</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;