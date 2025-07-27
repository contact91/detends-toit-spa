import React, { useState } from "react";

interface EditTextProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  type?: "text" | "email" | "tel" | "number";
  disabled?: boolean;
  required?: boolean;
  className?: string;
}

const EditText: React.FC<EditTextProps> = ({
  placeholder = "",
  value = "",
  onChange,
  type = "text",
  disabled = false,
  required = false,
  className = "",
}) => {
  const [inputValue, setInputValue] = useState(value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  const baseClasses =
    "w-full bg-edittext-1 text-edittext-1 font-roundo font-light text-base sm:text-lg md:text-xl leading-6 tracking-wide rounded-none rounded-tr-[30px] rounded-br-[30px] rounded-bl-[30px] border-4 border-transparent form-input-focus transition-all duration-200";

  const paddingClasses = "px-4 py-3 sm:px-6 sm:py-4";

  const inputClasses = `
    ${baseClasses}
    ${paddingClasses}
    ${disabled ? "cursor-not-allowed opacity-50" : ""}
    ${className}
  `
    .trim()
    .replace(/\s+/g, " ");

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={inputValue}
      onChange={handleChange}
      disabled={disabled}
      required={required}
      className={inputClasses}
    />
  );
};

export default EditText;
