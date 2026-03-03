import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import QuoteForm from './QuoteForm';

const Carousel = () => {
  const slides = [
    {
      img: "https://images.unsplash.com/photo-1520038410233-7141be7e6f97?q=80&w=1600",
      title: "Safe & Reliable Relocation",
      desc: "Top-rated Packers and Movers in Narasaraopet."
    },
    {
      img: "https://images.unsplash.com/photo-1600518464441-9154a4dea21b?q=80&w=1600",
      title: "Door to Door Shifting",
      desc: "We handle your belongings with expert care."
    }
  ];

  return (
    <div className="relative h-[90vh] w-full">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
        loop
        className="h-full w-full"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div 
              className="h-full w-full bg-cover bg-center flex items-center"
              style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${slide.img})` }}
            >
              <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-10 items-center">
                <div className="text-white space-y-6">
                  <h1 className="text-4xl md:text-6xl font-bold leading-tight uppercase">
                    {slide.title}
                  </h1>
                  <p className="text-xl text-gray-200">{slide.desc}</p>
                  <div className="flex gap-4">
                    <button className="bg-orange-600 px-8 py-3 rounded font-bold hover:bg-orange-700 transition">
                      Call: 90147 04373
                    </button>
                  </div>
                </div>
                <div className="hidden md:block">
                  <QuoteForm />
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