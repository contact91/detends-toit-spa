import React, { useState } from "react";

interface TextAreaProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  rows?: number;
  disabled?: boolean;
  required?: boolean;
  className?: string;
}

const TextArea: React.FC<TextAreaProps> = ({
  placeholder = "Vos demandes et commentaires ...",
  value = "",
  onChange,
  rows = 4,
  disabled = false,
  required = false,
  className = "",
}) => {
  const [textValue, setTextValue] = useState(value);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    setTextValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  const baseClasses =
    "w-full bg-edittext-1 text-edittext-1 font-roundo font-light text-base sm:text-lg md:text-xl leading-6 tracking-wide rounded-none rounded-tr-[32px] rounded-br-[32px] rounded-bl-[32px] border-4 border-transparent form-input-focus transition-all duration-200 resize-vertical";

  const paddingClasses = "px-4 py-3 sm:px-6 sm:py-4";

  const textAreaClasses = `
    ${baseClasses}
    ${paddingClasses}
    ${disabled ? "cursor-not-allowed opacity-50" : ""}
    ${className}
  `
    .trim()
    .replace(/\s+/g, " ");

  return (
    <textarea
      placeholder={placeholder}
      value={textValue}
      onChange={handleChange}
      rows={rows}
      disabled={disabled}
      required={required}
      className={textAreaClasses}
    />
  );
};

export default TextArea;
