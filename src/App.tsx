import BlurShape from "./components/blur-shape";
import HeroSection from "./components/hero-section";
import NavBar from "./components/nav-bar";
import { Button } from "./components/ui/button";
import Footer from "./components/Footer";
import Form from "./components/Form";
import { motion } from "framer-motion";

function App() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <HeroSection />

      <div
        id="a-propos"
        className="max-w-7xl mx-auto py-6 md:py-2 px-4 md:px-0 mt-[600px] sm:mt-[700px] md:mt-[900px] lg:mt-[200px] xl:mt-70 relative"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <motion.div
            className="relative grid gap-y-8 p-4 place-items-center lg:place-items-start mt-16 sm:mt-8 md:mt-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <BlurShape
              className="absolute -left-20 -top-20 bg-highlight w-[400px] h-[400px] z-20"
              opacity="opacity-20"
            />
            <h1 className="text-primary text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-center lg:text-start leading-tight">
              Votre Partenaire Bien-Être
            </h1>
            <p className="text-primary text-xl text-center lg:text-start">
              Notre mission : vous offrir{" "}
              <span className="text-highlight font-medium">
                des instants de bien-être inoubliables
              </span>
              , chez vous. Proximité, qualité, professionnalisme:
              <span className="text-highlight font-medium">
                &nbsp; on s'occupe de tout, pour vous.
              </span>
            </p>
            <span className="text-primary text-sm sm:text-base text-center lg:text-start">
              « Disponible partout en Martinique – particuliers et pros »
            </span>
            <div className="flex">
              <Button
                onClick={() => {
                  const element = document.querySelector("#formulaire-contact");
                  if (element) {
                    element.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }
                }}
                variant="outline"
                size="lg"
                className="w-fit rounded-full border-2 border-highlight text-highlight hover:text-highlight m-0"
              >
                Rencontrez-Nous
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <img
              src="/Frame20.png"
              alt=""
              className="absolute left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0 lg:right-0 mt-8 lg:mt-0 w-sm lg:w-md"
            />
          </motion.div>
        </div>
        <motion.img
          src="/vector-6.png"
          alt=""
          className="hidden lg:block absolute -bottom-20 left-2/5 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        />
      </div>

      <div className="max-w-7xl mx-auto py-6 md:py-2 px-4 md:px-0 mt-[600px] sm:mt-[700px] md:mt-[600px] lg:mt-[200px] xl:mt-70 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <motion.div
            className="order-2 lg:order-none"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <img
              src="/img-section-3.png"
              alt=""
              className="absolute left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-0 mt-8 lg:mt-0 w-sm lg:w-xl"
            />
          </motion.div>
          <motion.div
            className="relative grid gap-y-8 p-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h1 className="text-primary text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-center lg:text-end leading-tight">
              Notre Promesse Qualité, Sécurité, Sérénité{" "}
            </h1>
            <div className="flex flex-col items-start lg:items-end">
              <span className="flex items-center gap-4 text-base sm:text-xl text-primary text-nowrap text-start lg:text-right">
                <img
                  src="/check-icon.png"
                  alt=""
                  className="-mt-3 block lg:hidden"
                />
                Matériel désinfecté &{" "}
                <span className="font-medium text-highlight">certifié CE</span>
                <img
                  src="/check-icon.png"
                  alt=""
                  className="-mt-3 hidden lg:block"
                />
              </span>
              <span className="flex items-center gap-4 text-base sm:text-xl text-primary text-nowrap text-start lg:text-right">
                <img
                  src="/check-icon.png"
                  alt=""
                  className="-mt-3 block lg:hidden"
                />
                <span className="font-medium text-highlight">
                  Produits sûrs
                </span>
                et homologués
                <img
                  src="/check-icon.png"
                  alt=""
                  className="-mt-3 hidden lg:block"
                />
              </span>
              <span className="flex items-center gap-4 text-base sm:text-xl text-primary text-nowrap text-start lg:text-right">
                <img
                  src="/check-icon.png"
                  alt=""
                  className="-mt-3 block lg:hidden"
                />
                Installation & formation à domicile
                <img
                  src="/check-icon.png"
                  alt=""
                  className="-mt-3 hidden lg:block"
                />
              </span>
              <span className="flex items-center gap-4 text-base sm:text-xl text-primary text-nowrap text-start lg:text-right">
                <img
                  src="/check-icon.png"
                  alt=""
                  className="-mt-3 block lg:hidden"
                />
                <span className="font-medium text-highlight">Sécurité</span>
                enfants garantie{" "}
                <img
                  src="/check-icon.png"
                  alt=""
                  className="-mt-3 hidden lg:block"
                />
              </span>
              <span className="flex items-center gap-4 text-base sm:text-xl text-primary text-start lg:text-right">
                <img
                  src="/check-icon.png"
                  alt=""
                  className="-mt-3 block lg:hidden"
                />
                Assistance disponible
                <span className="font-medium text-highlight">
                  à tout moment
                </span>
                <img
                  src="/check-icon.png"
                  alt=""
                  className="-mt-3 hidden lg:block"
                />
              </span>
            </div>
            <span className="text-primary text-sm sm:text-base text-center lg:text-end">
              « Disponible partout en Martinique – particuliers et pros »
            </span>
            <div className="flex justify-center lg:justify-end">
              <Button
                onClick={() => {
                  const element = document.querySelector("#formulaire-contact");
                  if (element) {
                    element.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }
                }}
                variant="outline"
                size="lg"
                className="w-fit rounded-full border-2 border-highlight text-highlight hover:text-highlight m-0"
              >
                Rencontrez-Nous
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="mx-auto mt-[600px] sm:mt-[700px] md:mt-[500px] lg:mt-[200px] xl:mt-70">
        <img src="/group-shape-blue.svg" alt="" className="w-full" />
        <div id="spas-accessoires" className="relative bg-primary py-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h1 className="text-highlight text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-center leading-tight px-2 sm:px-0">
              Spa & Détente à Domicile
            </h1>
            <p className="text-muted-foreground text-xl text-center mt-6">
              Transformez votre espace en lieu de détente et de bien-être avec
              nos spas
              <br /> et équipements. À vivre seul, à deux ou en groupe, en
              extérieur ou en intérieur
            </p>
          </motion.div>
          <div className="relative mt-16">
            <img
              src="/vector-7.png"
              alt=""
              className="absolute left-1/10 pointer-events-none select-none hidden md:block"
            />
            <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-10 md:gap-4 xl:gap-2 z-10 max-w-7xl mx-auto justify-items-center mt-20">
              <BlurShape
                className="absolute -left-20 -bottom-30 bg-blue-600 w-[400px] h-[400px] z-50"
                opacity="opacity-20"
              />
              {/* SPA 4 PLACES */}
              <motion.div
                className="bg-blue-600/10 border-muted/10 border-2 backdrop-blur-md rounded-tl-none rounded-tr-[210px] rounded-3xl flex flex-col items-center shadow-lg max-w-xs"
                initial={{ opacity: 0, y: 100, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              >
                <div className="overflow-hidden mb-6 flex items-center justify-center">
                  <img
                    src="/spa-4-places.png"
                    alt="Spa 4 places"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-4 flex flex-col h-[300px]">
                  <div className="grid place-items-center flex-grow">
                    <h2 className="text-white text-3xl font-normal text-center mb-4">
                      SPA 4 PLACES
                    </h2>
                    <p className="text-highlight text-base text-center mb-2">
                      Ø196 x 71 cm &nbsp; | &nbsp; Intérieur/Extérieur
                    </p>
                    <p className="text-white text-sm font-light text-center mb-4">
                      Compact & intime. Parfait pour petit salon, chambre ou
                      balcon.
                    </p>
                  </div>

                  <Button
                    onClick={() => {
                      const element = document.querySelector(
                        "#formulaire-contact"
                      );
                      if (element) {
                        element.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                      }
                    }}
                    className="rounded-full border-2 border-highlight text-highlight bg-white/10 hover:bg-highlight hover:text-white transition-colors px-6 py-2 mt-4"
                  >
                    Demandez Votre Devis
                  </Button>
                </div>
              </motion.div>
              {/* SPA 6 PLACES */}
              <motion.div
                className="bg-blue-600/10 border-muted/10 border-2 backdrop-blur-md rounded-t-[200px] rounded-b-3xl flex flex-col items-center shadow-lg max-w-xs"
                initial={{ opacity: 0, y: 100, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              >
                <div className="overflow-hidden mb-6 flex items-center justify-center">
                  <img
                    src="/spa-6-places.png"
                    alt="Spa 4 places"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-4 flex flex-col h-[300px]">
                  <div className="grid place-items-center flex-grow">
                    <h2 className="text-white text-3xl font-normal text-center mb-4">
                      Spa 6 Places <br /> (au sel)
                    </h2>
                    <p className="text-highlight text-base text-center mb-2">
                      Ø239 x 71 cm &nbsp; | &nbsp; Intérieur/Extérieur
                    </p>
                    <p className="text-white text-sm font-light text-center mb-4">
                      Sans produit chimique. Idéal en famille ou pour détente
                      prolongée.
                    </p>
                  </div>

                  <Button
                    onClick={() => {
                      const element = document.querySelector(
                        "#formulaire-contact"
                      );
                      if (element) {
                        element.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                      }
                    }}
                    className="rounded-full border-2 border-highlight text-highlight bg-white/10 hover:bg-highlight hover:text-white transition-colors px-6 py-2 mt-4"
                  >
                    Demandez Votre Devis
                  </Button>
                </div>
              </motion.div>
              {/* SPA 7 PLACES */}
              <motion.div
                className="bg-blue-600/10 border-muted/10 border-2 backdrop-blur-md rounded-tr-none rounded-tl-[210px] rounded-3xl flex flex-col items-center shadow-lg max-w-xs"
                initial={{ opacity: 0, y: 100, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              >
                <div className="overflow-hidden mb-6 flex items-center justify-center">
                  <img
                    src="/spa-7-places.png"
                    alt="Spa 4 places"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-4 flex flex-col min-h-[300px]">
                  <div className="grid place-items-center flex-grow">
                    <h2 className="text-white text-3xl font-normal text-center mb-4">
                      Spa 7 Places
                    </h2>
                    <p className="text-highlight text-base text-center mb-2">
                      230 x 230 x 71 cm &nbsp; | &nbsp; Intérieur/Extérieur
                    </p>
                    <p className="text-white text-sm font-light text-center mb-4">
                      Ultra-massant & spacieux. Idéal pour soirées festives,
                      EVJF, grands moments.
                    </p>
                  </div>

                  <Button
                    onClick={() => {
                      const element = document.querySelector(
                        "#formulaire-contact"
                      );
                      if (element) {
                        element.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                      }
                    }}
                    className="rounded-full border-2 border-highlight text-highlight bg-white/10 hover:bg-highlight hover:text-white transition-colors px-6 py-2 mt-4"
                  >
                    Demandez Votre Devis
                  </Button>
                </div>
              </motion.div>
              <BlurShape
                className="absolute -right-20 -bottom-30 bg-blue-600 w-[400px] h-[400px] z-50"
                opacity="opacity-20"
              />
            </div>
          </div>
          <div className="max-w-7xl mx-auto mt-[200px] px-6 md:px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative">
              {/* Left: Text Content */}
              <motion.div
                className="flex flex-col justify-between"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <h2 className="text-white text-5xl font-light mb-8 text-center md:text-start">
                  UNE EXPÉRIENCE COMPLÈTE,
                  <br />
                  POUR VOTRE PLAISIR
                </h2>
                <ul className="text-white text-lg font-light list-disc list-inside space-y-2 mb-8">
                  <li>
                    Pack confort (sièges, LED, porte gobelets, appuie-têtes,
                    marches)
                  </li>
                  <li>Pack cinéma (Écran TV 50 pouces et support trépied)</li>
                  <li>Parfum d'eau</li>
                  <li>Enceinte Bluetooth</li>
                  <li>Fontaine de chocolat</li>
                  <li>Jeux d'extérieur (Tétris, Puissance 4, Airtrack, …)</li>
                  <li>Et plus encore …</li>
                </ul>
                <a
                  onClick={() => {
                    const element = document.querySelector(
                      "#formulaire-contact"
                    );
                    if (element) {
                      element.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }
                  }}
                  className="text-orange-400 hover:underline text-base font-medium text-center md:text-start cursor-pointer"
                >
                  Définir mes options de réservation →
                </a>
              </motion.div>
              {/* Right: Image Placeholder */}
              <motion.div
                className="flex items-center justify-center min-h-[350px] relative"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <img src="/img-section-5.png" alt="" className="" />
              </motion.div>
            </div>
          </div>
          <div
            id="tarifs"
            className="max-w-7xl mx-auto mt-[200px] px-6 md:px-4"
          >
            <motion.div
              className="mb-24"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h1 className="text-white text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-light mb-6 sm:mb-8 text-center uppercase leading-tight">
                Nos Formules & Tarifs
              </h1>
            </motion.div>
            <motion.div
              className="bg-white p-12 rounded-4xl"
              initial={{ opacity: 0, y: 100, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <motion.div
                  className="relative p-4"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-100px" }}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                >
                  <div className="grid place-items-center lg:place-items-start">
                    <h1 className="uppercase text-4xl text-highlight font-light">
                      Pause Bulle
                    </h1>
                    <p className="text-lg mb-4">
                      Se détendre sans prise de tête.
                    </p>
                    <img src="/vector-9.png" alt="" className="mb-4" />
                    <span className="text-xl">À partir de</span>
                    <span className="block mt-4">
                      <span className="text-4xl text-highlight">130€</span> /2
                      jours *
                    </span>
                    <span className="block text-lg font-light mt-8 mb-4 text-center lg:text-start">
                      <span className="font-medium">Idéal pour :</span> Pause
                      zen sans contrainte, détente solo ou duo.
                    </span>
                    <span className="block text-lg font-light text-center lg:text-start">
                      <span className="font-medium">Inclus :</span> Spa 4, 6 ou
                      7 places
                    </span>
                  </div>
                  <img
                    src="/line-horizontal.png"
                    alt=""
                    className="block lg:hidden mt-8"
                  />
                  <img
                    src="/line-vertical.png"
                    alt=""
                    className="absolute right-0 top-0 hidden lg:block"
                  />
                </motion.div>
                <motion.div
                  className="relative p-4"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-100px" }}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                >
                  <div className="grid place-items-center lg:place-items-start">
                    <h1 className="uppercase text-4xl text-highlight font-light">
                      ROMANTIK
                    </h1>
                    <p className="text-lg mb-4">Ambiance cocooning</p>
                    <img src="/vector-9.png" alt="" className="mb-4" />
                    <span className="text-xl">À partir de</span>
                    <span className="block mt-4">
                      <span className="text-4xl text-highlight">155€</span> /2
                      jours *
                    </span>
                    <span className="block text-lg font-light mt-8 mb-4 text-center lg:text-start">
                      <span className="font-medium">Idéal pour :</span> Ambiance
                      romantique chaleureuse, moments complices
                    </span>
                    <span className="block text-lg font-light text-center lg:text-start">
                      <span className="font-medium">Inclus :</span> Spa 4, 6 ou
                      7 places, Pack Confort, Parfum d'eau, Enceinte BT
                    </span>
                  </div>
                  <img
                    src="/line-horizontal.png"
                    alt=""
                    className="block lg:hidden mt-8"
                  />
                  <img
                    src="/line-vertical.png"
                    alt=""
                    className="absolute right-0 top-0 hidden lg:block"
                  />
                </motion.div>
                <motion.div
                  className="relative p-4"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-100px" }}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                >
                  <div className="grid place-items-center lg:place-items-start">
                    <h1 className="uppercase text-4xl text-highlight font-light">
                      SPA'RTY TIME
                    </h1>
                    <p className="text-lg mb-4">Le pur plaisir de fêter</p>
                    <img src="/vector-9.png" alt="" className="mb-4" />
                    <span className="text-xl">À partir de</span>
                    <span className="block mt-4">
                      <span className="text-4xl text-highlight">191€</span> /2
                      jours *
                    </span>
                    <span className="block text-lg font-light text-center lg:text-start mt-8 mb-4">
                      <span className="font-medium">Idéal pour :</span>{" "}
                      Ambiances festives & ludiques, soirées entre amis
                    </span>
                    <span className="block text-lg font-light text-center lg:text-start">
                      <span className="font-medium">Inclus :</span> Spa 4,6 ou 7
                      places, Pack Confort, Parfum d'eau, Enceinte, Jeu de
                      fléchettes, Fontaine à chocolat
                    </span>
                  </div>
                </motion.div>
              </div>
              <motion.div
                className="flex flex-col items-center py-8 gap-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <Button
                  onClick={() => {
                    const element = document.querySelector(
                      "#formulaire-contact"
                    );
                    if (element) {
                      element.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }
                  }}
                  variant="highlight"
                  size="lg"
                  className="rounded-full"
                >
                  Envoyer Votre Demande
                </Button>
                <p className="text-center">
                  *Tarifs semaine, hors options ; toutes les <br /> formules
                  sont personnalisables.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
        <img src="/shape-dark-blue-bottom.png" alt="" className="w-full" />

        <div className="max-w-7xl mx-auto py-6 md:py-2 px-4 md:px-0 mt-[100px] sm:mt-[200px] md:mt-[150px] relative">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <motion.div
              className="order-2 lg:order-none"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <img
                src="/testimonials.png"
                alt=""
                className="mt-8 lg:mt-0 w-sm lg:w-xl mx-auto"
              />
            </motion.div>
            <motion.div
              className="relative grid gap-y-8 p-4"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.h1
                className="text-primary text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-center lg:text-end leading-tight"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
              >
                Pourquoi choisir Détends Toit ?
              </motion.h1>
              <motion.div
                className="flex flex-col items-start lg:items-end"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <span className="flex items-center gap-4 text-xl text-primary text-start lg:text-right">
                  Nos clients plébiscitent Détends Toit pour une
                </span>
                <span className="font-medium text-lg text-highlight">
                  expérience sensorielle complète.
                </span>
                <span>Profitez — et laissez-vous séduire ...</span>
              </motion.div>
              <motion.div
                className="flex justify-center lg:justify-end"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <Button
                  onClick={() => {
                    const element = document.querySelector(
                      "#formulaire-contact"
                    );
                    if (element) {
                      element.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }
                  }}
                  variant="outline"
                  size="lg"
                  className="w-fit rounded-full border-2 border-highlight text-highlight hover:text-highlight m-0"
                >
                  Venez le vivre aussi
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      <Form />
      <Footer />
    </div>
  );
}

export default App;
