const FooterLinks = () => {
  const sections = [
    {
      title: "Services",
      links: ["House Shifting", "Office Relocation", "Vehicle Transport", "Storage Solutions"]
    },
    {
      title: "Quick Links",
      links: ["Home", "About Us", "Contact", "Privacy Policy"]
    }
  ];

  return (
    <div className="grid grid-cols-2 gap-8 sm:gap-12">
      {sections.map((section) => (
        <div key={section.title}>
          <h3 className="text-white font-bold mb-6 text-[16px]">
            {section.title}
          </h3>
          <ul className="space-y-4">
            {section.links.map((link) => (
              <li key={link}>
                <a href="#" className="text-white hover:text-[#b0008e] transition-colors text-sm font-medium">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FooterLinks;