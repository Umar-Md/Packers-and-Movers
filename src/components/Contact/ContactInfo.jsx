import React from 'react';

const ContactInfo = () => {
  const details = [
    { icon: "📞", label: "Phone Number", value: "+91 98765 43210", color: "bg-blue-50" },
    { icon: "📧", label: "Email Address", value: "info@packersmovers.com", color: "bg-pink-50" },
    { icon: "📍", label: "Office Address", value: "123, Moving Plaza, Sector 5, City", color: "bg-purple-50" },
    { icon: "🕒", label: "Working Hours", value: "Mon - Sat: 9:00 AM - 8:00 PM", color: "bg-orange-50" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16">
      {details.map((item, i) => (
        <div key={i} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
          <div className={`w-12 h-12 ${item.color} rounded-2xl flex items-center justify-center text-2xl mb-4`}>
            {item.icon}
          </div>
          <h4 className="text-xs font-black text-gray-400 tracking-widest mb-1">{item.label}</h4>
          <p className="text-gray-900 font-bold">{item.value}</p>
        </div>
      ))}
    </div>
  );
};

export default ContactInfo;