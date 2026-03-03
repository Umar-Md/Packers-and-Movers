const FooterSocial = () => {
  const socialIcons = [
    { name: 'Facebook', icon: 'FB' },
    { name: 'Instagram', icon: 'IG' },
    { name: 'LinkedIn', icon: 'IN' },
  ];

  return (
    <div className="flex gap-4">
      {socialIcons.map((social) => (
        <a
          key={social.name}
          href="#"
          className="size-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:bg-[#b0008e] hover:text-white hover:border-[#b0008e] transition-all duration-300"
        >
          <span className="text-xs font-bold">{social.icon}</span>
        </a>
      ))}
    </div>
  );
};

export default FooterSocial;