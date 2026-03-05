import React from 'react';
import FooterLinks from './FooterLinks';
import FooterSocial from './FooterSocial';
import FooterContact from './FooterContact';

const Footer = () => {
  return (
    <footer className="bg-black pt-20 pb-10  px-6 font-montserrat border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-16">
          
          {/* Logo & Brand Section */}
          <div className="lg:col-span-4 space-y-8">
            <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
              Making every move a pleasant memory. We specialize in safe, secure, 
              and affordable logistics across India.
            </p>
            <FooterSocial />
          </div>

          {/* Links Section */}
          <div className="lg:col-span-5">
            <FooterLinks />
          </div>

          {/* Contact Section */}
          <div className="lg:col-span-3">
            <FooterContact />
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-600 text-[12px]  font-bold">
            © 2026 Vedha Packers and Movers. All rights reserved.
          </p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;