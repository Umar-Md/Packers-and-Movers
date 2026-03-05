import React from 'react';
import MapSection from './MapSection'; // Import the new name
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

const Contact = () => {
  return (
    <main className="bg-white min-h-screen">
      <div className="bg-[#dcebd5] pt-20 pb-4 px-6 text-center">
        <h1 className="text-6xl md:text-6xl font-black text-white leading-none italic">
          Contact <span className="text-[#923b81]">Us</span>
        </h1>
      </div>

      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Use the new component name here */}
          <MapSection /> 

          <div className="flex flex-col justify-center">
             <ContactForm />
          </div>
        </div>
        <ContactInfo />
      </section>
    </main>
  );
};

export default Contact;