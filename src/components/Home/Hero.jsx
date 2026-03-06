import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useNavigate } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Hero = () => {
  const navigate = useNavigate();

  const centuryFont = {
    fontFamily: '"Century Gothic", CenturyGothic, AppleGothic, sans-serif',
  };

  const slides = [
    {
      img: "https://images.unsplash.com/photo-1520038410233-7141be7e6f97?q=80&w=1600",
      title: "Safe & Reliable Packers Movers in Guntur",
      desc: "Home Shifting | Office Relocation | Car Transport",
    },
    {
      img: "https://images.unsplash.com/photo-1600518464441-9154a4dea21b?q=80&w=1600",
      title: "Door to Door Shifting",
      desc: "Expert care for your belongings. Moving you across India with ease.",
    },
  ];

  return (
    <div className="relative h-screen w-full overflow-hidden bg-gray-900">
      {/* --- Global Styles for Animations --- */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700;900&display=swap');
          
          .waves {
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 15vh;
            min-height: 100px;
            max-height: 150px;
            z-index: 20;
          }

          .parallax > use {
            animation: move-forever 25s cubic-bezier(.55,.5,.45,.5) infinite;
          }
          .parallax > use:nth-child(1) { animation-delay: -2s; animation-duration: 7s; }
          .parallax > use:nth-child(2) { animation-delay: -3s; animation-duration: 10s; }
          .parallax > use:nth-child(3) { animation-delay: -4s; animation-duration: 13s; }
          .parallax > use:nth-child(4) { animation-delay: -5s; animation-duration: 20s; }

          @keyframes move-forever {
            0% { transform: translate3d(-90px,0,0); }
            100% { transform: translate3d(85px,0,0); }
          }

          /* Swiper Pagination Styling */
          .swiper-pagination-bullet { background: white !important; opacity: 0.5; }
          .swiper-pagination-bullet-active { background: #b0008e !important; opacity: 1; }
          .swiper-button-next, .swiper-button-prev { color: white !important; transform: scale(0.7); }
        `}
      </style>

      {/* --- Main Slider --- */}
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        slidesPerView={1}
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        speed={1500}
        pagination={{ clickable: true }}
        navigation={true}
        loop={true}
        className="h-full w-full"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div
              className="h-full w-full bg-cover bg-center flex items-center justify-center relative"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${slide.img})`,
              }}
            >
              <div className="max-w-5xl mx-auto px-6 text-center text-white space-y-8 z-10 mb-24">
                <h1
                  className="text-4xl md:text-7xl font-black leading-tight drop-shadow-2xl"
                  style={centuryFont}
                >
                  {slide.title}
                </h1>

                <p
                  className="text-lg md:text-2xl text-gray-200 max-w-2xl mx-auto tracking-wide"
                  style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400 }}
                >
                  {slide.desc}
                </p>

                <div className="flex flex-col sm:flex-row gap-5 justify-center pt-6">
                  <a
                    href="tel:9848111925"
                    className="bg-[#b0008e] px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[#b0008e] transition-all duration-300 shadow-xl hover:scale-105 active:scale-95"
                    style={centuryFont}
                  >
                    Call: 9848111925
                  </a>

                  <button 
                    onClick={() => navigate('/services')}
                    className="bg-white/10 backdrop-blur-md border border-white/40 px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-black transition-all duration-300 active:scale-95"
                    style={centuryFont}
                  >
                    Our Services
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* --- Animated Waves (Moving Left to Right) --- */}
      <svg 
        className="waves" 
        xmlns="http://www.w3.org/2000/svg" 
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28" 
        preserveAspectRatio="none" 
        shapeRendering="auto"
      >
        <defs>
          <path 
            id="gentle-wave" 
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" 
          />
        </defs>
        <g className="parallax">
          {/* Layer 1: Faint Pinkish-White */}
          <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7)" />
          {/* Layer 2: Medium Opacity White */}
          <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
          {/* Layer 3: Low Opacity White */}
          <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
          {/* Layer 4: Solid White (Matches next section background) */}
          <use xlinkHref="#gentle-wave" x="48" y="7" fill="#ffffff" />
        </g>
      </svg>
    </div>
  );
};

export default Hero;