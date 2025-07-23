import { useState } from "react";
import { Button } from "./ui/button";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="max-w-7xl mx-auto py-6 md:py-2 px-6 md:px-0">
      <div className="grid grid-cols-2 md:grid-cols-3">
        {/* Logo */}
        <div className="flex items-center justify-start">
          <img src="/img_header_logo.png" alt="logo" className="w-24" />
        </div>

        {/* Links */}
        <div className="hidden md:block">
          <div className="flex items-center justify-center gap-x-12 text-lg text-nowrap h-full">
            <a className="cursor-pointer hover:text-highlight hover:scale-110 transition-all duration-200">
              À Propos
            </a>
            <a className="cursor-pointer hover:text-highlight hover:scale-110 transition-all duration-200">
              Spas et Accessoires
            </a>
            <a className="cursor-pointer hover:text-highlight hover:scale-110 transition-all duration-200">
              Tarifs
            </a>
          </div>
        </div>

        {/* Actions */}
        <div className="hidden md:block">
          <div className="flex items-center justify-end h-full">
            <Button
              className="rounded-full shadow-md"
              variant="highlight"
              size="lg"
            >
              Votre Devis Grautit
            </Button>
          </div>
        </div>

        {/* Hamburger icon */}
        <div className="block md:hidden">
          <div className="flex items-center justify-end h-full">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              <img src="/hamburger.png" alt="hamburger icon" />
            </Button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? "block border-y py-4 px-4" : "hidden"}`}>
        <div className="grid gap-y-4 text-lg h-full">
          <a className="block cursor-pointer hover:font-medium hover:text-primary">
            À Propos
          </a>
          <a className="block cursor-pointer hover:font-medium hover:text-primary">
            Spas et Accessoires
          </a>
          <a className="block cursor-pointer hover:font-medium hover:text-primary">
            Tarifs
          </a>
          <Button
            className="rounded-full shadow-md"
            variant="highlight"
            size="lg"
          >
            Votre Devis Grautit
          </Button>
        </div>
      </div>
    </div>
  );
}
