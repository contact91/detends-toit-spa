import BlurShape from "./blur-shape";
import { Button } from "./ui/button";

export default function HeroSection() {
  return (
    <div className="max-w-7xl mx-auto py-6 md:py-2 px-6 md:px-2 relative">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <img
            src="/hero-image.png"
            alt=""
            className="absolute left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 w-sm md:w-lg lg:w-md xl:w-lg z-50 max-w-full"
          />
          <BlurShape
            className="absolute md:top-xl left-20 lg:left-30 xl:left-40 bg-highlight w-[500px] h-[500px] z-20"
            opacity="opacity-20"
          />
          <img
            src="/vector-2.png"
            alt=""
            className="absolute top-[600px] lg:top-20 top-auto right-0 lg:right-auto lg:left-40 xl:left-50 xl:w-lg w-md"
          />
          <div className="absolute z-50 block lg:hidden left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 top-[660px]">
            <div className="flex flex-col items-center gap-4">
              <span className="text-white text-2xl text-center">
                Réservez <br /> Votre Spa
              </span>
              <img src="/chevron-down-drop-icon.png" alt="" className="w-16" />
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2 grid gap-8 place-items-center lg:place-items-end py-8">
          <span className="flex gap-2">
            <img src="/mdi_stars-outline.png" alt="" />
            +100 client(e)s déjà séduit(e)s !
          </span>
          <h1 className="text-primary text-5xl md:text-7xl xl:text-8xl font-light uppercase text-center lg:text-right">
            L'Expérience Spa Ultime chez vous
          </h1>
          <p className="text-xl text-center lg:text-right">
            Un moment de{" "}
            <span className="font-medium">pure détente à domicile</span>. Votre
            spa est livré, installé et préparé juste pour vous
          </p>
          <div className="hidden lg:block">
            <div className="flex gap-4">
              <Button variant="highlight" size="lg" className="rounded-full">
                Réservez votre Spa
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full border-2 border-highlight text-highlight hover:text-highlight"
              >
                Contactez-nous
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
