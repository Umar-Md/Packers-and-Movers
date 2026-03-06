// import React, { useState } from 'react';

// const ContactForm = () => {
//   // 1. State to manage form inputs
//   const [formData, setFormData] = useState({
//     name: '',
//     phone: '',
//     email: '',
//     moveFrom: '',
//     moveTo: '',
//     message: ''
//   });

//   // 2. State for feedback (loading, success, error)
//   const [status, setStatus] = useState({
//     loading: false,
//     message: '',
//     type: ''
//   });

//   // 3. Update state when user types
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   // 4. Submit logic to call your Node.js backend
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus({ loading: true, message: 'Sending your request...', type: 'info' });

//     try {
//       const response = await fetch('http://localhost:5000/send-email', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();

//       if (response.ok && data.success) {
//         setStatus({
//           loading: false,
//           message: 'Success! Your message has been sent.',
//           type: 'success'
//         });
//         // Reset form after successful send
//         setFormData({ name: '', phone: '', email: '', moveFrom: '', moveTo: '', message: '' });
//       } else {
//         throw new Error('Server responded with an error');
//       }
//     } catch (error) {
//       console.error('Submit Error:', error);
//       setStatus({
//         loading: false,
//         message: 'Something went wrong. Please try again later.',
//         type: 'error'
//       });
//     }
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="bg-white p-8 md:p-10 rounded-[40px] shadow-2xl border border-gray-50 space-y-5"
//     >
//       {/* Name and Phone Row */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//         <input
//           required
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           type="text"
//           placeholder="Your Name"
//           className="w-full p-4 bg-gray-50 rounded-2xl border-2 border-transparent focus:border-[#b0008e] focus:bg-white outline-none font-bold transition-all"
//         />
//         <input
//           required
//           name="phone"
//           value={formData.phone}
//           onChange={handleChange}
//           type="tel"
//           placeholder="Phone Number"
//           className="w-full p-4 bg-gray-50 rounded-2xl border-2 border-transparent focus:border-[#b0008e] focus:bg-white outline-none font-bold transition-all"
//         />
//       </div>

//       {/* Email Row */}
//       <input
//         required
//         name="email"
//         value={formData.email}
//         onChange={handleChange}
//         type="email"
//         placeholder="Email Address"
//         className="w-full p-4 bg-gray-50 rounded-2xl border-2 border-transparent focus:border-[#b0008e] focus:bg-white outline-none font-bold transition-all"
//       />

//       {/* Moving From and To Row */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//         <input
//           required
//           name="moveFrom"
//           value={formData.moveFrom}
//           onChange={handleChange}
//           type="text"
//           placeholder="Move From (City)"
//           className="w-full p-4 bg-gray-50 rounded-2xl border-2 border-transparent focus:border-[#b0008e] focus:bg-white outline-none font-bold transition-all"
//         />
//         <input
//           required
//           name="moveTo"
//           value={formData.moveTo}
//           onChange={handleChange}
//           type="text"
//           placeholder="Move To (City)"
//           className="w-full p-4 bg-gray-50 rounded-2xl border-2 border-transparent focus:border-[#b0008e] focus:bg-white outline-none font-bold transition-all"
//         />
//       </div>

//       {/* Message Area */}
//       <textarea
//         required
//         name="message"
//         value={formData.message}
//         onChange={handleChange}
//         placeholder="Your Message"
//         rows="4"
//         className="w-full p-4 bg-gray-50 rounded-2xl border-2 border-transparent focus:border-[#b0008e] focus:bg-white outline-none font-bold transition-all"
//       ></textarea>

//       {/* Status Messages for User */}
//       {status.message && (
//         <div className={`text-center py-2 px-4 rounded-xl font-bold text-sm ${
//           status.type === 'success' ? 'bg-green-100 text-green-700' :
//           status.type === 'error' ? 'bg-red-100 text-red-700' :
//           'bg-blue-100 text-blue-700'
//         }`}>
//           {status.message}
//         </div>
//       )}

//       {/* Submit Button */}
//       <div className="pt-4">
//         <button
//           disabled={status.loading}
//           type="submit"
//           className={`group relative w-full py-4 bg-[#212121] text-white font-black text-lg uppercase tracking-widest rounded-[15px] transition-transform active:scale-95 overflow-hidden shadow-lg ${status.loading ? 'opacity-70 cursor-not-allowed' : ''}`}
//         >
//           {/* Animated Gradient Border */}
//           <span
//             className="absolute inset-0 p-[2.5px] rounded-[15px] opacity-100 pointer-events-none
//             before:absolute before:inset-[-200%] before:bg-[conic-gradient(#488cfb,#29dbbc,#ddf505,#ff9f0e,#e440bb,#655adc,#488cfb)]
//             before:animate-[spin_4s_linear_infinite]
//             mask-image:linear-gradient(#fff_0_0),linear-gradient(#fff_0_0)
//             [mask-clip:content-box,padding-box]
//             mask-composite:exclude
//             [-webkit-mask-composite:destination-out]"
//             style={{ WebkitMaskComposite: 'destination-out' }}
//           ></span>

//           <span className="relative z-10 flex items-center justify-center gap-2">
//             {status.loading ? 'Processing...' : 'Send Message'}
//             {!status.loading && <span className="group-hover:translate-x-2 transition-transform">👉</span>}
//           </span>
//         </button>
//       </div>
//     </form>
//   );
// };

// export default ContactForm;

import React, { useState } from "react";

const ContactForm = () => {
  // 1. Initial State
  const initialForm = {
    name: "",
    phone: "",
    email: "",
    moveFrom: "",
    moveTo: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialForm);
  const [status, setStatus] = useState({
    loading: false,
    message: "",
    type: "",
  });

  // 2. Input Change Handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 3. Form Submission Logic
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({
      loading: true,
      message: "Connecting to server...",
      type: "info",
    });

    try {
      // Log for debugging
      console.log("Sending data to server:", formData);

      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus({
          loading: false,
          message: "Success! We have sent details to your email and WhatsApp.",
          type: "success",
        });
        setFormData(initialForm);
      } else {
        throw new Error(data.message || "Server error");
      }
    } catch (error) {
      console.error("Submit Error:", error);
      setStatus({
        loading: false,
        message: "Network Error. Check if Backend is running on Port 5000.",
        type: "error",
      });
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 md:p-10 rounded-[40px] shadow-2xl border border-gray-50 space-y-5 relative overflow-hidden"
      >
        <h2 className="text-2xl font-black text-gray-800 mb-6 text-center">
          Contact US
        </h2>

        {/* Input Group: Name & Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-1">
            <label className="text-s font-bold text-black ml-2">
              Full Name
            </label>
            <input
              required
              name="name"
              value={formData.name}
              onChange={handleChange}
              type="text"
              placeholder="Ex: Rajesh Kumar"
              className="w-full p-4 bg-gray-50 rounded-2xl border-2 border-transparent focus:border-[#b0008e] focus:bg-white outline-none font-bold transition-all shadow-sm"
            />
          </div>
          <div className="space-y-1">
            <label className="text-s font-bold text-black ml-2 ">
              Phone Number
            </label>
            <input
              required
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              type="tel"
              placeholder="Ex: 9989441906"
              className="w-full p-4 bg-gray-50 rounded-2xl border-2 border-transparent focus:border-[#b0008e] focus:bg-white outline-none font-bold transition-all shadow-sm"
            />
          </div>
        </div>

        {/* Email Input */}
        <div className="space-y-1">
          <label className="text-s font-bold text-black ml-2">
            Email Address
          </label>
          <input
            required
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            placeholder="Ex: abc@example.com"
            className="w-full p-4 bg-gray-50 rounded-2xl border-2 border-transparent focus:border-[#b0008e] focus:bg-white outline-none font-bold transition-all shadow-sm"
          />
        </div>

        {/* Input Group: Locations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-1">
            <label className="text-s font-bold text-black ml-2">
              Moving From
            </label>
            <input
              required
              name="moveFrom"
              value={formData.moveFrom}
              onChange={handleChange}
              type="text"
              placeholder="City Name"
              className="w-full p-4 bg-gray-50 rounded-2xl border-2 border-transparent focus:border-[#b0008e] focus:bg-white outline-none font-bold transition-all shadow-sm"
            />
          </div>
          <div className="space-y-1">
            <label className="text-s font-bold text-black ml-2">
              Moving To
            </label>
            <input
              required
              name="moveTo"
              value={formData.moveTo}
              onChange={handleChange}
              type="text"
              placeholder="City Name"
              className="w-full p-4 bg-gray-50 rounded-2xl border-2 border-transparent focus:border-[#b0008e] focus:bg-white outline-none font-bold transition-all shadow-sm"
            />
          </div>
        </div>

        {/* Message Textarea */}
        <div className="space-y-1">
          <label className="text-s font-bold text-black ml-2">
            Requirements
          </label>
          <textarea
            required
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your items (Fridge, Sofa, etc.)"
            rows="3"
            className="w-full p-4 bg-gray-50 rounded-2xl border-2 border-transparent focus:border-[#b0008e] focus:bg-white outline-none font-bold transition-all shadow-sm"
          ></textarea>
        </div>

        {/* Dynamic Status Notification */}
        {status.message && (
          <div
            className={`text-center py-3 px-4 rounded-2xl font-black text-sm transition-all animate-bounce ${
              status.type === "success"
                ? "bg-green-100 text-green-700 border border-green-200"
                : status.type === "error"
                  ? "bg-red-100 text-red-700 border border-red-200"
                  : "bg-blue-100 text-blue-700 border border-blue-200"
            }`}
          >
            {status.message}
          </div>
        )}

        {/* Fancy Submit Button */}
        <div className="pt-4">
          <button
            disabled={status.loading}
            type="submit"
            className={`group relative w-full py-5 bg-[#212121] text-white font-black text-lg  rounded-[20px] transition-transform active:scale-95 overflow-hidden shadow-2xl ${status.loading ? "opacity-70 cursor-not-allowed" : ""}`}
          >
            {/* The Rotating Magic Border */}
            <span
              className="absolute inset-0 p-0.75 rounded-[20px] opacity-100 pointer-events-none"
              style={{
                maskImage:
                  "linear-gradient(#fff 0 0), linear-gradient(#fff 0 0)",
                WebkitMaskImage:
                  "linear-gradient(#fff 0 0), linear-gradient(#fff 0 0)",
                maskClip: "content-box, padding-box",
                WebkitMaskComposite: "destination-out",
                maskComposite: "exclude",
              }}
            ></span>
            <span className="relative z-10 flex items-center justify-center gap-3">
              {status.loading ? (
                <>
                  <div className="w-5 h-5 border-t-2 border-white rounded-full animate-spin"></div>
                  Sending...
                </>
              ) : (
                <>
                  Confirm Inquiry{" "}
                  <span className="group-hover:translate-x-2 transition-transform">
                    🚀
                  </span>
                </>
              )}
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
