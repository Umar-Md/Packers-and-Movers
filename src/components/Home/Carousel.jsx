import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Carousel = () => {
  const slides = [
    {
      img: "https://images.unsplash.com/photo-1520038410233-7141be7e6f97?q=80&w=1600",
      title: "Safe & Reliable Relocation",
      desc: "Top-rated Packers and Movers in Narasaraopet. Your trust, our commitment."
    },
    {
      img: "https://images.unsplash.com/photo-1600518464441-9154a4dea21b?q=80&w=1600",
      title: "Door to Door Shifting",
      desc: "Expert care for your belongings. Moving you across India with ease."
    }
  ];

  return (
    <div className="h-screen w-full">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination, Navigation]}
        effect="fade"
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
        navigation={true}
        loop={true}
        className="h-full w-full"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div 
              className="h-full w-full bg-cover bg-center flex items-center justify-center"
              style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${slide.img})` }}
            >
              <div className="max-w-5xl mx-auto px-6 text-center text-white space-y-8">
                <h1 className="text-5xl md:text-7xl font-black leading-tight uppercase tracking-tighter animate-fade-in">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto font-light">
                  {slide.desc}
                </p>
                <div className="flex flex-col sm:flex-row gap-5 justify-center pt-4">
                  <a href="tel:9014704373" className="bg-orange-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-orange-700 transition-all shadow-2xl hover:scale-105">
                    Call: 90147 04373
                  </a>
                  <button className="bg-white/10 backdrop-blur-md border border-white/30 px-10 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all">
                    Our Services
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;