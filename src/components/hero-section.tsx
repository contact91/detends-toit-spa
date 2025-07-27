import BlurShape from "./blur-shape";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { useState } from "react";

export default function HeroSection() {
  const [showModal, setShowModal] = useState(false);

  const handleVideoClick = () => {
    console.log("Video clicked!");
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="max-w-7xl mx-auto py-6 md:py-2 px-4 lg:px-8 xl:px-12 relative ">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <motion.div
          className="order-2 lg:order-1"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Mobile Video (2MB) */}
          <div className="absolute left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 w-sm md:w-lg lg:w-md xl:w-md h-[600px] md:h-[750px] lg:h-[600px] xl:h-[650px] z-50 max-w-full rounded-tr-full rounded-br-full rounded-bl-full overflow-hidden md:hidden">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
              style={{
                width: "100%",
                height: "100%",
                minWidth: "100%",
                minHeight: "100%",
                pointerEvents: "none",
              }}
            >
              <source src="/webm 2 mb.webm" type="video/webm" />
            </video>
            <div
              onClick={handleVideoClick}
              className="absolute inset-0 w-full h-full cursor-pointer touch-manipulation z-10"
              style={{ background: "transparent" }}
            />
          </div>

          {/* Desktop Video (4MB) */}
          <div className="absolute left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 w-sm md:w-lg lg:w-md xl:w-md h-[600px] md:h-[750px] lg:h-[600px] xl:h-[650px] z-50 max-w-full rounded-tr-full rounded-br-full rounded-bl-full overflow-hidden hidden md:block">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
              style={{
                width: "100%",
                height: "100%",
                minWidth: "100%",
                minHeight: "100%",
                pointerEvents: "none",
              }}
            >
              <source src="/webm 4 mb.webm" type="video/webm" />
            </video>
            <div
              onClick={handleVideoClick}
              className="absolute inset-0 w-full h-full cursor-pointer touch-manipulation z-10"
              style={{ background: "transparent" }}
            />
          </div>

          <BlurShape
            className="absolute top-[500px] md:top-[100px] left-2 lg:left-24 xl:left-40 bg-highlight w-[500px] h-[500px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] z-20"
            opacity="opacity-20"
          />
          <img
            src="/vector-2.png"
            alt=""
            className="absolute top-[700px] lg:top-20 right-0 lg:right-18 lg:left-24 xl:left-40 xl:w-lg w-md"
          />
        </motion.div>
        <motion.div
          className="order-1 lg:order-2 grid gap-8 place-items-center lg:place-items-end py-8 px-4 lg:px-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="flex gap-2">
            <img src="/mdi_stars-outline.png" alt="" />
            +100 client(e)s déjà séduit(e)s !
          </span>
          <h1 className="text-primary text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-center lg:text-right leading-tight">
            L'Expérience Spa Ultime chez vous
          </h1>
          <p className="text-xl text-center lg:text-right">
            Un moment de{" "}
            <span className="font-medium">pure détente à domicile</span>. Votre
            spa est livré, installé et préparé juste pour vous
          </p>
          <div className="hidden lg:block">
            <div className="flex flex-col sm:flex-row gap-4">
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
                variant="highlight"
                size="lg"
                className="rounded-full md:text-sm md:px-6 md:py-2 lg:text-lg lg:px-8 lg:py-3"
              >
                Réservez votre Spa
              </Button>
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
                className="rounded-full border-2 border-highlight text-highlight hover:text-highlight md:text-sm md:px-6 md:py-2 lg:text-lg lg:px-8 lg:py-3"
              >
                Contactez-nous
              </Button>
            </div>
          </div>
          <div className="block lg:hidden">
            <div className="flex flex-col gap-4">
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
                variant="highlight"
                size="lg"
                className="rounded-full"
              >
                Réservez votre Spa
              </Button>
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
                className="rounded-full border-2 border-highlight text-highlight hover:text-highlight"
              >
                Contactez-nous
              </Button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Video Modal - Still using Mux video */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-[9999] touch-pan-y"
          onClick={closeModal}
        >
          <div
            className="w-[70vw] h-[70vh] mx-4 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300 z-10 bg-black bg-opacity-50 rounded-full w-8 h-8 flex items-center justify-center touch-manipulation"
              onClick={closeModal}
            >
              ×
            </button>
            <div className="w-full h-full rounded-lg overflow-hidden">
              <iframe
                src="https://player.mux.com/013Y5XVLhcQrmdRCoJgzekZuiFFx4fPT1h02tX1chmp7s?metadata-video-title=Version+Final+v2+-+9x16&video-title=Version+Final+v2+-+9x16&controls=1"
                width="100%"
                height="100%"
                allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                allowFullScreen
                className="w-full h-full"
                style={{ border: "none" }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
