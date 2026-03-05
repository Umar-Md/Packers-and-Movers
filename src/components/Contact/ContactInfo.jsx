import React from 'react';
import { PhoneIcon, EnvelopeIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';

const ContactInfo = () => {
  const details = [
    { icon: <PhoneIcon className="w-6 h-6 text-blue-500" />, label: "Phone Number", value: "+91 98765 43210", color: "bg-blue-50" },
    { icon: <EnvelopeIcon className="w-6 h-6 text-pink-500" />, label: "Email Address", value: "info@packersmovers.com", color: "bg-pink-50" },
    { icon: <MapPinIcon className="w-6 h-6 text-purple-500" />, label: "Office Address", value: "123, Moving Plaza, Sector 5, City", color: "bg-purple-50" },
    { icon: <ClockIcon className="w-6 h-6 text-orange-500" />, label: "Working Hours", value: "Mon - Sat: 9:00 AM - 8:00 PM", color: "bg-orange-50" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16">
      {details.map((item, i) => (
        <div key={i} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-md hover:shadow-lg transition-shadow">
          <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mb-4`}>
            {item.icon}
          </div>
          <h4 className="text-m font-black text-gray-400 tracking-widest mb-1">{item.label}</h4>
          <p className="text-gray-900 font-bold">{item.value}</p>
        </div>
      ))}
    </div>
  );
};

export default ContactInfo;