import React, { useState, useEffect, useRef } from "react";

interface DropdownOption {
  value: string;
  label: string;
}

interface DropdownProps {
  placeholder?: string;
  options?: DropdownOption[];
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  required?: boolean;
  className?: string;
  isOpen?: boolean;
  onToggle?: (isOpen: boolean) => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  placeholder = "Choisissez parmi les options ....",
  options = [
    { value: "spa-relaxation", label: "Spa Relaxation" },
    { value: "massage-therapy", label: "Massage Therapy" },
    { value: "wellness-package", label: "Wellness Package" },
    { value: "beauty-treatment", label: "Beauty Treatment" },
  ],
  value = "",
  onChange,
  disabled = false,
  className = "",
  isOpen: controlledIsOpen,
  onToggle,
}) => {
  const [selectedValue, setSelectedValue] = useState(value);
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Use controlled state if provided, otherwise use internal state
  const isOpen =
    controlledIsOpen !== undefined ? controlledIsOpen : internalIsOpen;
  const setIsOpen = onToggle || setInternalIsOpen;

  // Handle clicks outside the dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, setIsOpen]);

  const handleSelect = (optionValue: string) => {
    setSelectedValue(optionValue);
    setIsOpen(false);
    if (onChange) {
      onChange(optionValue);
    }
  };

  const handleToggle = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  const selectedOption = options.find(
    (option) => option.value === selectedValue
  );
  const displayText = selectedOption ? selectedOption.label : placeholder;

  const baseClasses =
    "relative w-full bg-edittext-1 text-edittext-1 font-roundo font-light text-base sm:text-lg md:text-xl leading-6 tracking-wide rounded-none rounded-tr-[30px] rounded-br-[30px] rounded-bl-[30px] border-4 border-transparent form-input-focus transition-all duration-200 cursor-pointer";

  const paddingClasses = "pl-4 pr-12 py-3 sm:pl-6 sm:pr-14 sm:py-4";

  const dropdownClasses = `
    ${baseClasses}
    ${paddingClasses}
    ${disabled ? "cursor-not-allowed opacity-50" : ""}
    ${className}
  `
    .trim()
    .replace(/\s+/g, " ");

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <div className={dropdownClasses} onClick={handleToggle}>
        <span className={selectedValue ? "text-global-1" : "text-edittext-1"}>
          {displayText}
        </span>
        <div className="absolute right-4 sm:right-6 top-1/2 transform -translate-y-1/2">
          <img
            src="/img_weuiarrowfilled2.svg"
            alt="dropdown arrow"
            className={`w-6 h-4 sm:w-8 sm:h-6 transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </div>
      </div>

      {isOpen && !disabled && (
        <div className="absolute top-full left-0 right-0 z-10 bg-white border border-gray-200 rounded-bl-[30px] rounded-br-[30px] shadow-lg max-h-48 overflow-y-auto touch-pan-y">
          {options.map((option) => (
            <div
              key={option.value}
              className="px-4 py-3 sm:px-6 sm:py-4 hover:bg-gray-50 cursor-pointer text-global-1 font-roundo font-light text-base sm:text-lg md:text-xl touch-manipulation"
              onClick={() => handleSelect(option.value)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
