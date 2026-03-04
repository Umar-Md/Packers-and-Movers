import React, { useState, useEffect } from "react";

const FloatingActions = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const phoneNumber = "919848111925";
  const message = encodeURIComponent(
    "Hello 👋 I would like to get more details about your services."
  );

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4 items-center">

      {/* 🟢 WhatsApp Button - Clean Version */}
      <a
        href={`https://wa.me/${phoneNumber}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex items-center justify-center h-14 w-14 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
      >
        {/* Clean WhatsApp SVG Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="h-7 w-7 fill-current"
        >
          <path d="M16.004 2.003C8.83 2.003 3.002 7.83 3.002 15.005c0 2.643.776 5.1 2.107 7.173L3 30l7.992-2.097a12.94 12.94 0 0 0 5.012 1.01c7.174 0 13.002-5.828 13.002-13.002 0-7.175-5.828-13.002-13.002-13.002zm0 23.708c-2.147 0-4.148-.58-5.87-1.59l-.42-.249-4.744 1.244 1.265-4.623-.273-.451a10.93 10.93 0 0 1-1.66-5.837c0-6.046 4.915-10.961 10.962-10.961 6.045 0 10.96 4.915 10.96 10.961 0 6.047-4.915 10.962-10.96 10.962zm5.913-7.983c-.322-.161-1.904-.94-2.199-1.048-.295-.107-.51-.16-.725.162-.215.322-.833 1.048-1.022 1.263-.188.214-.376.241-.698.08-.322-.161-1.36-.501-2.59-1.596-.958-.854-1.603-1.908-1.79-2.23-.188-.322-.02-.496.141-.657.145-.144.322-.376.483-.564.161-.188.215-.322.322-.537.107-.215.054-.403-.027-.564-.08-.161-.725-1.75-.994-2.397-.262-.63-.529-.545-.725-.555l-.617-.011c-.215 0-.564.08-.859.403-.295.322-1.13 1.103-1.13 2.688 0 1.585 1.157 3.114 1.318 3.329.161.215 2.278 3.479 5.523 4.875.772.333 1.374.532 1.843.681.774.246 1.479.211 2.037.128.622-.093 1.904-.778 2.173-1.531.268-.752.268-1.397.188-1.531-.08-.134-.295-.215-.617-.376z"/>
        </svg>
      </a>

      {/* 🔝 Scroll To Top Button */}
      <button
        onClick={scrollToTop}
        className={`h-12 w-12 bg-white text-gray-900 rounded-full shadow-lg flex items-center justify-center hover:bg-[#b0008e] hover:text-white transition-all duration-500 transform ${
          isVisible
            ? "translate-y-0 opacity-100 scale-100"
            : "translate-y-10 opacity-0 scale-50 pointer-events-none"
        }`}
      >
        <svg
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={3}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
        </svg>
      </button>

    </div>
  );
};

export default FloatingActions;