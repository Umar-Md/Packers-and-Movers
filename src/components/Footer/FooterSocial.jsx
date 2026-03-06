import React from 'react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

const FooterSocial = () => {
  const socialIcons = [
    { 
      name: 'Facebook', 
      icon: <Facebook size={18} />, 
      href: 'https://facebook.com/yourpage' 
    },
    { 
      name: 'Instagram', 
      icon: <Instagram size={18} />, 
      href: 'https://instagram.com/yourhandle' 
    },
    { 
      name: 'LinkedIn', 
      icon: <Linkedin size={18} />, 
      href: 'https://linkedin.com/company/yourcompany' 
    },
  ];

  return (
    <div className="flex gap-4">
      {socialIcons.map((social) => (
        <a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.name}
          className="group size-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:bg-[#b0008e] hover:text-white hover:border-[#b0008e] transition-all duration-300"
        >
          <span className="transition-transform duration-300 group-hover:scale-110">
            {social.icon}
          </span>
        </a>
      )
      )}
    </div>
  );
};

export default FooterSocial;