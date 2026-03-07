import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';

const Testimonial = () => {
  const navigate = useNavigate();
  const testimonials = [
    {
      name: "Rahul Sharma",
      location: "Guntur",
      text: "Extremely professional service. My household goods reached Bangalore without a single scratch. The packing quality was top-notch!",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      name: "Suresh Babu",
      location: "Narasaraopet",
      text: "Affordable and fast. The team was very polite and handled my heavy furniture with ease. Best experience so far.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=facearea&facepad=2&w=256&h=256&q=80"
    },
   {
      name: "Priya Reddy",
      location: "Vijayawada",
      text: "I was worried about moving my car and delicate plants, but Vedha Packers made it look so easy. Highly recommend for long-distance shifting!",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=facearea&facepad=2&w=256&h=256&q=80"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  // Auto-slide remains but will restart if user interacts
  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="font-montserrat bg-white text-gray-900 overflow-x-hidden">
      
      {/* 5. ⭐ Premium Testimonials Section */}
      <section className="relative isolate overflow-hidden bg-gray-900 px-6 py-20 sm:py-24 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-linear-to-r from-[#b0008e]/20 to-transparent opacity-20" />
        <div className="absolute inset-y-0 left-0 -z-10 w-[200%] origin-bottom-left skew-x-[-30deg] bg-gray-700 shadow-xl ring-1 shadow-[#b0008e]/10 ring-white/50" />
        
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 text-left">
             <h2 className="text-[#9eb000] font-black  text-xl">Customer Stories</h2>
          </div>

          {/* Slider Container */}
          <div className="relative overflow-hidden w-full"> 
            <div 
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.45,0,0.55,1)] w-full" 
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((t, i) => (
                <figure key={i} className="w-full shrink-0 flex flex-col items-start text-left">
                  {/* 5-Star Rating */}
                  <div className="flex gap-1 text-yellow-500 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="size-5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))} 
                  </div>

                  <blockquote className="text-left text-lg/8 font-semibold text-white sm:text-xl/9 max-w-3xl">
                    <p>“{t.text}”</p>
                  </blockquote>

                  <figcaption className="flex items-center gap-4">
                    <img alt={t.name} src={t.image} className="size-12 rounded-full border-2 border-[#b0008e] object-cover" />
                    <div className="text-sm">
                      <div className="font-bold text-white tracking-tight">{t.name}</div>
                      <div className="text-gray-400 font-medium flex items-center gap-2">
                        <span>{t.location}</span>
                        <svg width={3} height={3} className="fill-gray-500"><circle r={1} cx={1} cy={1} /></svg>
                        <span className="text-[#00b00f] font-bold">Verified Client</span>
                      </div>
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="mt-10 flex items-center gap-6">
            {/* Left/Right Buttons */}
            <div className="flex gap-2">
              <button 
                onClick={prevSlide}
                className="group p-3 rounded-full border border-white/10 bg-white/5 hover:bg-[#b0008e] hover:border-[#b0008e] transition-all duration-300"
                aria-label="Previous testimonial"
              >
                <svg className="size-5 text-white group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={nextSlide}
                className="group p-3 rounded-full border border-white/10 bg-white/5 hover:bg-[#b0008e] hover:border-[#b0008e] transition-all duration-300"
                aria-label="Next testimonial"
              >
                <svg className="size-5 text-white group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Visual Counter */}
            <div className="text-gray-500 font-mono text-sm tracking-widest">
              <span className="text-white font-bold">{String(currentIndex + 1).padStart(2, '0')}</span>
              <span className="mx-2">/</span>
              <span>{String(testimonials.length).padStart(2, '0')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 📞 Final CTA Section */}
      <section className="relative h-60 flex items-center overflow-hidden px-6 lg:px-24">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1600518464441-9154a4dea21b?q=80&w=2000" 
            alt="Moving Truck" 
            className="w-full h-full object-cover brightness-[0.6]"
          />
          <div className="absolute inset-0 bg-linear-to-r from-black via-black/40 to-transparent"></div>
        </div>
        
        <div className="relative z-10 text-left max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-black text-white mb-8 tracking-tighter leading-tight">
            Planning to Move? <br /> 
            <span className="text-[#b0008e] italic">Let’s Make It Easy!</span>
          </h2>
          <div className="flex flex-wrap gap-4">
            <button
            onClick={() => navigate('/quote')}
            className="bg-[#FF6B00] text-white px-8 py-4 rounded-full font-black text-m hover:bg-white hover:text-[#b0008e] transition-all duration-300 shadow-xl flex items-center ">
              👉 Get Instant Quote
            </button>
            <button 
            onClick={() => navigate('/services')}
            className="bg-transparent border-2 border-white/20 text-white px-8 py-4 rounded-full font-bold text-m hover:bg-white/10 transition-all">
              View Services
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;