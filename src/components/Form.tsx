import React from "react";
import EditText from "./ui/EditText";
import Dropdown from "./ui/Dropdown";
import DatePicker from "./ui/DatePicker";
import TextArea from "./ui/TextArea";
import { Button } from "./ui/button";

const Form: React.FC = () => {
  return (
    <section className="w-full py-16 lg:py-32 bg-[url('/images/img_ellipse_dcoration_yellow_900_1.png')] bg-no-repeat bg-right-top">
      <div className="w-full lg:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-end items-center w-full gap-8 lg:gap-0 -mt-16 lg:-mt-19">
          {/* Left Side - Content */}
          <div className="w-full lg:w-[48%] flex flex-col justify-start items-start">
            <div className="flex flex-col gap-8 lg:gap-10 justify-start items-center w-full lg:w-[78%]">
              <h2 className="text-global-1 font-roundo font-light text-2xl sm:text-3xl lg:text-5xl xl:text-6xl leading-tight lg:leading-[76px] text-left uppercase w-full">
                Prêt à vivre votre moment bien-être?
              </h2>

              <p className="text-global-1 font-roundo font-light text-base lg:text-xl leading-6 lg:leading-8 tracking-wide text-left w-full lg:w-[96%]">
                Réservez dès maintenant ou demandez un devis personnalisé —
                notre équipe s'occupe de tout, et revient vers vous en moins de
                24 h
              </p>

              <div className="flex flex-col gap-4 lg:gap-6 justify-start items-center w-full">
                <div className="flex justify-start items-center w-full px-3">
                  <img
                    src="/img_proicons_phone.svg"
                    alt="Phone"
                    className="w-8 h-8 lg:w-12 lg:h-12"
                  />
                  <span className="text-global-1 font-roundo font-medium text-base lg:text-xl leading-6 lg:leading-6 tracking-wide text-left ml-2">
                    +596 696 50 26 88
                  </span>
                </div>

                <div className="flex justify-start items-center w-full p-2 lg:p-4">
                  <img
                    src="/img_vector_yellow_900.svg"
                    alt="Email"
                    className="w-6 h-8 lg:w-[38px] lg:h-[30px]"
                  />
                  <span className="text-global-1 font-roundo font-medium text-base lg:text-xl leading-6 lg:leading-6 tracking-wide text-left self-end ml-3">
                    contact@detends-toit.com
                  </span>
                </div>

                <div className="flex justify-start items-center w-full px-3">
                  <img
                    src="/img_search.svg"
                    alt="Location"
                    className="w-8 h-8 lg:w-12 lg:h-12"
                  />
                  <span className="text-global-1 font-roundo font-medium text-base lg:text-xl leading-6 lg:leading-6 tracking-wide text-left self-end ml-2 mb-2">
                    Martinique, FRANCE
                  </span>
                </div>
              </div>
            </div>

            <img
              src="/img_vector_10.svg"
              alt="Decorative line"
              className="w-full lg:w-[680px] h-[39px] lg:h-[78px] -mt-1"
            />
          </div>

          {/* Right Side - Contact Form */}
          <div className="w-full lg:w-[44%] flex flex-col justify-center items-start">
            <div className="flex flex-col justify-start items-end w-full lg:w-[82%] mt-9">
              <div className="flex flex-col justify-start items-end w-full">
                {/* Form Fields */}
                <div className="flex flex-col gap-1 justify-start items-center w-full">
                  <div className="flex justify-start items-center w-full px-4">
                    <span className="text-global-1 font-roundo font-normal text-base lg:text-xl leading-6 lg:leading-6 tracking-wide text-left">
                      Nom Complet *
                    </span>
                  </div>
                  <EditText placeholder="Gislène Théodose" className="w-full" />
                </div>

                <div className="flex flex-col gap-1 justify-start items-center w-full mt-5">
                  <div className="flex justify-start items-center w-full px-4">
                    <span className="text-global-1 font-roundo font-normal text-base lg:text-xl leading-6 lg:leading-6 tracking-wide text-left">
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
                    <span className="text-global-1 font-roundo font-normal text-base lg:text-xl leading-6 lg:leading-6 tracking-wide text-left">
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
                    <span className="text-global-1 font-roundo font-normal text-base lg:text-xl leading-6 lg:leading-6 tracking-wide text-left">
                      Choix de l'option *
                    </span>
                  </div>
                  <Dropdown
                    placeholder="Choisissez parmi les options ...."
                    className="w-full"
                  />
                </div>

                <div className="flex flex-col gap-1 justify-start items-center w-full mt-5">
                  <div className="flex justify-start items-center w-full px-4">
                    <span className="text-global-1 font-roundo font-normal text-base lg:text-xl leading-6 lg:leading-6 tracking-wide text-left">
                      Dates souhaitées
                    </span>
                  </div>
                  <DatePicker
                    placeholder="Sélectionnez une date"
                    className="w-full"
                  />
                </div>

                <div className="flex flex-col gap-1 justify-center items-start w-full mt-5">
                  <span className="text-global-1 font-roundo font-normal text-base lg:text-xl leading-6 lg:leading-6 tracking-wide text-left ml-4">
                    Détails de la réservation
                  </span>
                  <TextArea
                    placeholder="Vos demandes et commentaires ..."
                    className="w-full"
                  />
                </div>

                <Button
                  variant="primary"
                  size="default"
                  className="font-roundo font-medium text-base lg:text-xl leading-6 lg:leading-7 text-center capitalize mt-10"
                >
                  Envoyer Votre Demande
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
