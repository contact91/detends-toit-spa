import React from "react";

const Footer: React.FC = () => {
  const socialLinks = [
    {
      src: "/img_iconoir_instagram.svg",
      alt: "Instagram",
      size: "w-6 h-6 sm:w-8 sm:h-8",
    },
    {
      src: "/img_teenyicons_facebook_outline.svg",
      alt: "Facebook",
      size: "w-5 h-5 sm:w-7 sm:h-7",
    },
    {
      src: "/Group.svg",
      alt: "LinkedIn",
      size: "w-6 h-6 sm:w-8 sm:h-8",
    },
    {
      src: "/img_devicon_twitter.svg",
      alt: "Twitter",
      size: "w-4 h-4 sm:w-6 sm:h-6",
    },
  ];

  const navigationLinks = [
    "Formulaire de contact",
    "Spas et Accessoires",
    "À Propos",
    "Tarifs",
  ];

  const contactInfo = [
    { icon: "/img_proicons_phone.svg", text: "+596 696 98 76 54" },
    {
      icon: "/img_vector_yellow_900.svg",
      text: "le-mail@détendstoit.com",
    },
    { icon: "/img_search.svg", text: "Martinique, FRANCE" },
  ];

  return (
    <footer className="w-full bg-primary pt-20 sm:pt-24 lg:pt-30">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="w-full lg:max-w-[1440px] mx-auto">
          <div className="flex flex-col gap-8 sm:gap-10 lg:gap-11 justify-start items-center">
            {/* Main Footer Content */}
            <div className="flex flex-col lg:flex-row justify-between items-start w-full gap-8 lg:gap-0">
              {/* Left Section - Brand and Social */}
              <div className="flex flex-col lg:flex-row justify-between items-start w-full lg:w-[58%] gap-8 lg:gap-0">
                <div className="flex flex-col gap-4 sm:gap-6 justify-start items-start w-full lg:w-[52%]">
                  {/* Logo */}
                  <img
                    src="img_footer_logo.png"
                    alt="Détends-Toit Footer Logo"
                    className="w-[150px] h-[95px] sm:w-[180px] sm:h-[115px] lg:w-[216px] lg:h-[136px]"
                  />

                  {/* Brand Description */}
                  <div className="flex flex-col gap-2 justify-center items-start w-full lg:w-[82%]">
                    <h3 className="text-white font-roundo font-normal text-lg sm:text-xl lg:text-2xl leading-6 sm:leading-7 lg:leading-8 text-left">
                      Bienvenue à Détends-Toit
                    </h3>
                    <p className="text-white font-roundo font-light text-base sm:text-lg lg:text-xl leading-6 sm:leading-7 lg:leading-8 text-left w-full lg:w-[90%]">
                      Spas premium et loisirs à domicile, avec un service local
                      d'exception.
                    </p>
                  </div>

                  {/* Social Links */}
                  <div className="flex gap-3 sm:gap-4 lg:gap-5 justify-start items-center">
                    {socialLinks.map((social, index) => (
                      <button
                        key={index}
                        className="hover:opacity-80 transition-opacity duration-200 cursor-pointer"
                      >
                        <img
                          src={social.src}
                          alt={social.alt}
                          className={social.size}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-col gap-4 sm:gap-6 justify-start items-start w-full lg:w-[40%]">
                  <div className="flex flex-col justify-start items-start w-full lg:w-[82%]">
                    <h3 className="text-white font-roundo font-light text-xl sm:text-2xl lg:text-3xl leading-7 sm:leading-8 lg:leading-10 text-left">
                      Explorez le site
                    </h3>
                    <img
                      src="/img_vector_11.svg"
                      alt="Decorative line"
                      className="w-full lg:w-[240px] h-[20px] sm:h-[25px] lg:h-[30px] -mt-1"
                    />
                  </div>

                  <ul className="flex flex-col gap-6 sm:gap-8 lg:gap-10 justify-start items-start w-full">
                    {navigationLinks.map((link, index) => (
                      <li key={index} role="menuitem">
                        <button className="text-white font-roundo font-light text-lg sm:text-xl lg:text-2xl leading-6 sm:leading-7 lg:leading-9 text-center hover:text-global-3 transition-colors duration-200 cursor-pointer">
                          {link}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Section - Contact Info */}
              <div className="flex flex-col justify-center items-start w-full lg:w-[30%]">
                <div className="flex flex-col justify-start items-center w-full lg:w-[62%]">
                  <h3 className="text-white font-roundo font-light text-xl sm:text-2xl lg:text-3xl leading-7 sm:leading-8 lg:leading-10 text-left">
                    Infos de contact
                  </h3>
                  <img
                    src="/img_vector_11.svg"
                    alt="Decorative line"
                    className="w-full lg:w-[240px] h-[20px] sm:h-[25px] lg:h-[30px] -mt-1 mr-1"
                  />
                </div>

                {/* Contact Items */}
                <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10 mt-4 sm:mt-5 lg:mt-6 w-full">
                  {contactInfo.map((contact, index) => (
                    <div
                      key={index}
                      className="flex justify-start items-center w-full px-2 sm:px-3"
                    >
                      <img
                        src={contact.icon}
                        alt="Contact icon"
                        className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12"
                      />
                      <span className="text-white font-roundo font-light text-base sm:text-lg lg:text-2xl leading-6 sm:leading-7 lg:leading-8 tracking-wide text-left ml-2 sm:ml-3 lg:ml-2">
                        {contact.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Copyright */}
            <div className="flex flex-col sm:flex-row justify-between items-start w-full gap-4 sm:gap-0 pt-4 sm:pt-6 lg:pt-8 border-t border-gray-600">
              <p className="text-white font-roundo font-light text-sm sm:text-base leading-4 sm:leading-5 text-left">
                © 2024 Gourmet Lyonnais. All rights reserved. Copyright
              </p>
              <p className="text-white font-roundo font-light text-sm sm:text-base leading-4 sm:leading-5 text-left">
                <span>Designed by </span>
                <span className="font-medium">IT Luxuoso</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
