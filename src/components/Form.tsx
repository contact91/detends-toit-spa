import React, { useState } from "react";
import EditText from "./ui/EditText";
import Dropdown from "./ui/Dropdown";
import DatePicker from "./ui/DatePicker";
import TextArea from "./ui/TextArea";
import { Button } from "./ui/button";
import BlurShape from "./blur-shape";
import { motion } from "framer-motion";

const Form: React.FC = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleDropdownToggle = (dropdownId: string, isOpen: boolean) => {
    if (isOpen) {
      setOpenDropdown(dropdownId);
    } else {
      setOpenDropdown(null);
    }
  };

  return (
    <section
      id="formulaire-contact"
      className="w-full py-16 lg:py-32 bg-[url('/images/img_ellipse_dcoration_yellow_900_1.png')] bg-no-repeat bg-right-top mt-24"
    >
      <div className="relative w-full lg:max-w-[1440px] mx-auto px-8 sm:px-6 lg:px-8">
        <BlurShape
          className="absolute -right-80 -bottom-30 bg-highlight w-[1000px] h-[1000px] -z-10"
          opacity="opacity-20"
        />
        <div className="flex flex-col lg:flex-row justify-end items-center w-full gap-8 lg:gap-0 -mt-16 lg:-mt-19">
          {/* Left Side - Content */}
          <motion.div
            className="w-full lg:w-[48%] flex flex-col justify-start items-start"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="flex flex-col gap-8 lg:gap-10 justify-start items-center w-full lg:w-[78%]">
              <motion.h2
                className="text-global-1 font-light text-5xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight lg:leading-[76px] text-center uppercase w-full"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
              >
                Prêt à vivre votre moment bien-être?
              </motion.h2>

              <motion.p
                className="text-global-1 font-light text-base lg:text-xl leading-6 lg:leading-8 tracking-wide text-center md:text-left w-full lg:w-[96%]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <span className="text-highlight font-medium">
                  Réservez dès maintenant
                </span>{" "}
                ou demandez un devis personnalisé — notre équipe s'occupe de
                tout, et revient vers vous en moins de 24 h
              </motion.p>

              <motion.div
                className="flex flex-col gap-4 lg:gap-6 justify-start items-start w-full"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="flex justify-start items-center w-full">
                  <img
                    src="/img_proicons_phone.svg"
                    alt="Phone"
                    className="w-8 h-8 lg:w-12 lg:h-12"
                  />
                  <span className="text-global-1 font-medium text-base lg:text-xl leading-6 lg:leading-6 tracking-wide text-left ml-2">
                    +596 696 50 26 88
                  </span>
                </div>

                <div className="flex justify-start items-center w-full">
                  <img
                    src="/img_vector_yellow_900.svg"
                    alt="Email"
                    className="w-6 h-8 lg:w-[38px] lg:h-[30px]"
                  />
                  <span className="text-global-1 font-medium text-base lg:text-xl leading-6 lg:leading-6 tracking-wide text-left ml-3">
                    contact@detends-toit.com
                  </span>
                </div>

                <div className="flex justify-start items-center w-full">
                  <img
                    src="/img_search.svg"
                    alt="Location"
                    className="w-8 h-8 lg:w-12 lg:h-12"
                  />
                  <span className="text-global-1  font-medium text-base lg:text-xl leading-6 lg:leading-6 tracking-wide text-left ml-2">
                    Martinique, FRANCE
                  </span>
                </div>
              </motion.div>
            </div>

            <motion.img
              src="/img_vector_10.svg"
              alt="Decorative line"
              className="w-full lg:w-[680px] h-[39px] lg:h-[78px] -mt-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            />
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            className="w-full lg:w-[44%] flex flex-col justify-center items-start"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="flex flex-col justify-start items-end w-full lg:w-[82%] mt-9">
              <motion.div
                className="flex flex-col justify-start items-end w-full"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
              >
                {/* Form Fields */}
                <div className="flex flex-col gap-1 justify-start items-center w-full">
                  <div className="flex justify-start items-center w-full px-4">
                    <span className="text-global-1 font-normal text-base lg:text-xl leading-6 lg:leading-6 tracking-wide text-left">
                      Nom Complet *
                    </span>
                  </div>
                  <EditText placeholder="Gislène Théodose" className="w-full" />
                </div>

                <div className="flex flex-col gap-1 justify-start items-center w-full mt-5">
                  <div className="flex justify-start items-center w-full px-4">
                    <span className="text-global-1 font-normal text-base lg:text-xl leading-6 lg:leading-6 tracking-wide text-left">
                      Email *
                    </span>
                  </div>
                  <EditText
                    type="email"
                    placeholder="mon-email@email.com"
                    className="w-full"
                  />
                </div>

                <div className="flex flex-col gap-1 justify-start items-center w-full mt-5">
                  <div className="flex justify-start items-center w-full px-4">
                    <span className="text-global-1 font-normal text-base lg:text-xl leading-6 lg:leading-6 tracking-wide text-left">
                      Téléphone *
                    </span>
                  </div>
                  <EditText
                    type="tel"
                    placeholder="0696 12 34 56"
                    className="w-full"
                  />
                </div>

                <div className="flex flex-col gap-1 justify-start items-center w-full mt-5">
                  <div className="flex justify-start items-center w-full px-4">
                    <span className="text-global-1 font-normal text-base lg:text-xl leading-6 lg:leading-6 tracking-wide text-left">
                      Choix de la formule *
                    </span>
                  </div>
                  <Dropdown
                    placeholder="Sélectionnez votre formule"
                    options={[
                      { value: "pause-bulle", label: "PAUSE BULLE" },
                      { value: "romantik", label: "ROMANTIK" },
                      { value: "sparty-time", label: "SPA'RTY TIME" },
                    ]}
                    className="w-full"
                    isOpen={openDropdown === "formule"}
                    onToggle={(isOpen) =>
                      handleDropdownToggle("formule", isOpen)
                    }
                  />
                </div>

                <div className="flex flex-col gap-1 justify-start items-center w-full mt-5">
                  <div className="flex justify-start items-center w-full px-4">
                    <span className="text-global-1 font-normal text-base lg:text-xl leading-6 lg:leading-6 tracking-wide text-left">
                      Choix de l'option *
                    </span>
                  </div>
                  <Dropdown
                    placeholder="Choisissez parmi les options ...."
                    options={[
                      { value: "spa-4-places", label: "Spa 4 Places" },
                      { value: "spa-6-places", label: "Spa 6 Places (au sel)" },
                      { value: "spa-7-places", label: "Spa 7 Places" },
                      { value: "pack-confort", label: "Pack Confort" },
                      { value: "pack-cinema", label: "Pack Cinéma" },
                      { value: "parfum-eau", label: "Parfum d'eau" },
                      {
                        value: "enceinte-bluetooth",
                        label: "Enceinte Bluetooth",
                      },
                      {
                        value: "fontaine-chocolat",
                        label: "Fontaine de chocolat",
                      },
                      { value: "jeux-exterieur", label: "Jeux d'extérieur" },
                    ]}
                    className="w-full"
                    isOpen={openDropdown === "options"}
                    onToggle={(isOpen) =>
                      handleDropdownToggle("options", isOpen)
                    }
                  />
                </div>

                <div className="flex flex-col gap-1 justify-start items-center w-full mt-5">
                  <div className="flex justify-start items-center w-full px-4">
                    <span className="text-global-1 font-normal text-base lg:text-xl leading-6 lg:leading-6 tracking-wide text-left">
                      Dates souhaitées
                    </span>
                  </div>
                  <DatePicker
                    placeholder="Sélectionnez une date"
                    className="w-full"
                    isOpen={openDropdown === "dates"}
                    onToggle={(isOpen) => handleDropdownToggle("dates", isOpen)}
                  />
                </div>

                <div className="flex flex-col gap-1 justify-center items-start w-full mt-5">
                  <span className="text-global-1 font-normal text-base lg:text-xl leading-6 lg:leading-6 tracking-wide text-left ml-4">
                    Détails de la réservation
                  </span>
                  <TextArea
                    placeholder="Vos demandes et commentaires ..."
                    className="w-full"
                  />
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <Button
                    variant="primary"
                    size="default"
                    className="font-medium text-base lg:text-xl leading-6 lg:leading-7 text-center capitalize mt-10"
                  >
                    Envoyer Votre Demande
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Form;
