import React from 'react';
import MapSection from './MapSection'; // Import the new name
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

const Contact = () => {
  return (
    <main className="bg-white min-h-screen">
      <div className="bg-[#4d72c7] py-18 pb-4 px-6 text-center">
        <h1 className="text-4xl md:text-7xl font-black text-white style={{ fontFamily: 'Century Gothic, sans-serif' }}">
          Contact <span className="text-[#ffffff]">Us</span>
        </h1>
        <p className="text-white mt-0 font-montserrat text-lg">
"Let’s start a conversation. Our team is here to help."        </p>
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