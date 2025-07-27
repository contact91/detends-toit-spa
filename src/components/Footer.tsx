import React from "react";
import { motion } from "framer-motion";

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
    { text: "Formulaire de contact", href: "#formulaire-contact" },
    { text: "Spas et Accessoires", href: "#spas-accessoires" },
    { text: "À Propos", href: "#a-propos" },
    { text: "Tarifs", href: "#tarifs" },
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
    <footer className="w-full bg-primary pt-20 sm:pt-24 lg:pt-30 pb-6 sm:pb-12">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="w-full lg:max-w-[1440px] mx-auto">
          <div className="flex flex-col gap-8 sm:gap-10 lg:gap-11 items-center justify-center lg:items-start lg:justify-start">
            {/* Main Footer Content */}
            <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start w-full gap-8 lg:gap-0">
              {/* Left Section - Brand and Social */}
              <motion.div
                className="flex flex-col lg:flex-row justify-between items-center lg:items-start w-full lg:w-[58%] gap-8 lg:gap-0 text-center lg:text-left"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="flex flex-col gap-4 sm:gap-6 items-center lg:items-start w-full lg:w-[52%]">
                  {/* Logo */}
                  <motion.img
                    src="img_footer_logo.png"
                    alt="Détends-Toit Footer Logo"
                    className="w-[150px] h-[95px] sm:w-[180px] sm:h-[115px] lg:w-[216px] lg:h-[136px]"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-100px" }}
                  />

                  {/* Brand Description */}
                  <motion.div
                    className="flex flex-col gap-2 items-center lg:items-start w-full lg:w-[82%]"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-100px" }}
                  >
                    <h3 className="text-white font-normal text-lg sm:text-xl lg:text-2xl leading-6 sm:leading-7 lg:leading-8 text-center lg:text-left">
                      Bienvenue à Détends-Toit
                    </h3>
                    <p className="text-white font-light text-base sm:text-lg lg:text-xl leading-6 sm:leading-7 lg:leading-8 text-center lg:text-left w-full lg:w-[90%]">
                      Spas premium et loisirs à domicile, avec un service local
                      d'exception.
                    </p>
                  </motion.div>

                  {/* Social Links */}
                  <motion.div
                    className="flex gap-3 sm:gap-4 lg:gap-5 justify-center lg:justify-start items-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-100px" }}
                  >
                    {socialLinks.map((social, index) => (
                      <motion.button
                        key={index}
                        className="hover:opacity-80 transition-opacity duration-200 cursor-pointer"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.4,
                          delay: 0.8 + index * 0.1,
                          ease: "easeOut",
                        }}
                        viewport={{ once: true, margin: "-100px" }}
                        whileHover={{
                          scale: 1.1,
                          transition: { duration: 0.2 },
                        }}
                      >
                        <img
                          src={social.src}
                          alt={social.alt}
                          className={social.size}
                        />
                      </motion.button>
                    ))}
                  </motion.div>
                </div>

                {/* Navigation Links */}
                <motion.div
                  className="flex flex-col gap-4 sm:gap-6 items-center lg:items-start w-full lg:w-[40%] text-center lg:text-left"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <div className="flex flex-col items-center lg:items-start w-full lg:w-[82%]">
                    <h3 className="text-white font-light text-xl sm:text-2xl lg:text-3xl leading-7 sm:leading-8 lg:leading-10">
                      Explorez le site
                    </h3>
                    <img
                      src="/img_vector_11.svg"
                      alt="Decorative line"
                      className="w-full lg:w-[240px] h-[20px] sm:h-[25px] lg:h-[30px] -mt-1"
                    />
                  </div>

                  <ul className="flex flex-col gap-6 sm:gap-8 lg:gap-10 items-center lg:items-start w-full">
                    {navigationLinks.map((link, index) => (
                      <motion.li
                        key={index}
                        role="menuitem"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: 0.5 + index * 0.1,
                          ease: "easeOut",
                        }}
                        viewport={{ once: true, margin: "-100px" }}
                      >
                        <button
                          onClick={() => {
                            const element = document.querySelector(link.href);
                            if (element) {
                              element.scrollIntoView({
                                behavior: "smooth",
                                block: "start",
                              });
                            }
                          }}
                          className="text-white font-light text-lg sm:text-xl lg:text-2xl leading-6 sm:leading-7 lg:leading-9 hover:text-global-3 transition-colors duration-200 cursor-pointer"
                        >
                          {link.text}
                        </button>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>

              {/* Right Section - Contact Info */}
              <motion.div
                className="flex flex-col items-center lg:items-start w-full lg:w-[30%] text-center lg:text-left"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="flex flex-col items-center lg:items-start w-full lg:w-[62%]">
                  <h3 className="text-white font-light text-xl sm:text-2xl lg:text-3xl leading-7 sm:leading-8 lg:leading-10">
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
                    <motion.div
                      key={index}
                      className="flex justify-center lg:justify-start items-center w-full px-2 sm:px-3"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.8 + index * 0.1,
                        ease: "easeOut",
                      }}
                      viewport={{ once: true, margin: "-100px" }}
                    >
                      <img
                        src={contact.icon}
                        alt="Contact icon"
                        className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12"
                      />
                      <span className="text-white font-light text-base sm:text-lg lg:text-2xl leading-6 sm:leading-7 lg:leading-8 tracking-wide ml-2 sm:ml-3 lg:ml-2">
                        {contact.text}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Bottom Copyright */}
            <motion.div
              className="flex flex-col sm:flex-row justify-center sm:justify-between items-center sm:items-start w-full gap-4 sm:gap-0 pt-4 sm:pt-6 lg:pt-8 border-t border-gray-600 text-center sm:text-left"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <p className="text-white font-light text-sm sm:text-base leading-4 sm:leading-5">
                © 2025 Détends-Toit. Tous droits réservés.
              </p>
              <p className="text-white font-light text-sm sm:text-base leading-4 sm:leading-5">
                <span>Designed by </span>
                <span className="font-medium">IT Luxuoso</span>
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
