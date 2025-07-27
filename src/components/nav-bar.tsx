import { useState, useEffect, useRef } from "react";
import { Button } from "./ui/button";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative top-0 left-0 right-0 z-60 bg-white/95 backdrop-blur-sm border-b border-gray-100 md:relative md:bg-transparent md:border-none touch-pan-y">
      <div className="max-w-7xl mx-auto py-4 md:py-6 px-4 md:px-0 relative">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center justify-start">
            <img
              src="/img_header_logo.png"
              alt="logo"
              className="w-20 md:w-24"
            />
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-x-8 lg:gap-x-16">
            <a
              onClick={() => {
                const element = document.querySelector("#a-propos");
                if (element) {
                  element.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
              }}
              className="cursor-pointer hover:text-highlight hover:scale-110 transition-all duration-200 text-lg text-nowrap"
            >
              À Propos
            </a>
            <a
              onClick={() => {
                const element = document.querySelector("#spas-accessoires");
                if (element) {
                  element.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
              }}
              className="cursor-pointer hover:text-highlight hover:scale-110 transition-all duration-200 text-lg text-nowrap"
            >
              Spas et Accessoires
            </a>
            <a
              onClick={() => {
                const element = document.querySelector("#tarifs");
                if (element) {
                  element.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
              }}
              className="cursor-pointer hover:text-highlight hover:scale-110 transition-all duration-200 text-lg text-nowrap"
            >
              Tarifs
            </a>
          </div>

          {/* Desktop Button */}
          <div className="hidden md:block">
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
              className="rounded-full shadow-md md:text-lg lg:text-lg md:px-4 md:py-1.5 lg:px-8 lg:py-3"
              variant="highlight"
              size="sm"
            >
              Votre Devis Grautit
            </Button>
          </div>

          {/* Mobile Hamburger */}
          <div className="block md:hidden">
            <button
              ref={hamburgerRef}
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 hover:bg-transparent focus:outline-none touch-manipulation"
            >
              <img src="/hamburger.png" alt="hamburger icon" />
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          ref={menuRef}
          className={`${
            isOpen ? "block" : "hidden"
          } absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg z-40 md:hidden touch-pan-y`}
        >
          <div className="grid gap-y-4 text-lg py-4 px-4">
            <a
              onClick={() => {
                const element = document.querySelector("#a-propos");
                if (element) {
                  element.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
                setIsOpen(false);
              }}
              className="block cursor-pointer hover:font-medium hover:text-primary py-2 text-center touch-manipulation"
            >
              À Propos
            </a>
            <a
              onClick={() => {
                const element = document.querySelector("#spas-accessoires");
                if (element) {
                  element.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
                setIsOpen(false);
              }}
              className="block cursor-pointer hover:font-medium hover:text-primary py-2 text-center touch-manipulation"
            >
              Spas et Accessoires
            </a>
            <a
              onClick={() => {
                const element = document.querySelector("#tarifs");
                if (element) {
                  element.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
                setIsOpen(false);
              }}
              className="block cursor-pointer hover:font-medium hover:text-primary py-2 text-center touch-manipulation"
            >
              Tarifs
            </a>
            <Button
              onClick={() => {
                const element = document.querySelector("#formulaire-contact");
                if (element) {
                  element.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
                setIsOpen(false);
              }}
              className="rounded-full shadow-md touch-manipulation"
              variant="highlight"
              size="lg"
            >
              Votre Devis Grautit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
