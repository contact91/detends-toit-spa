import React, { useState, useMemo, useEffect, useRef } from "react";

interface DatePickerProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  className?: string;
  isOpen?: boolean;
  onToggle?: (isOpen: boolean) => void;
}

const DatePicker: React.FC<DatePickerProps> = ({
  placeholder = "Sélectionnez une date",
  value = "",
  onChange,
  disabled = false,
  className = "",
  isOpen: controlledIsOpen,
  onToggle,
}) => {
  const [selectedValue, setSelectedValue] = useState(value);
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const datePickerRef = useRef<HTMLDivElement>(null);

  // Use controlled state if provided, otherwise use internal state
  const isOpen =
    controlledIsOpen !== undefined ? controlledIsOpen : internalIsOpen;
  const setIsOpen = onToggle || setInternalIsOpen;

  // Handle clicks outside the date picker
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        datePickerRef.current &&
        !datePickerRef.current.contains(event.target as Node)
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

  const dayNames = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"];

  // Generate calendar data for the current month
  const calendarData = useMemo(() => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();

    const firstDay = new Date(year, month, 1);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());

    const days = [];
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    for (let i = 0; i < 42; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);

      const isCurrentMonth = date.getMonth() === month;
      const isToday = date.getTime() === today.getTime();
      const isPast = date < today;
      const isSelectable = !isPast && isCurrentMonth;

      days.push({
        date,
        day: date.getDate(),
        isCurrentMonth,
        isToday,
        isPast,
        isSelectable,
        value: `${date.getDate().toString().padStart(2, "0")}-${(
          date.getMonth() + 1
        )
          .toString()
          .padStart(2, "0")}-${date.getFullYear()}`,
        label: `${date.getDate().toString().padStart(2, "0")}/${(
          date.getMonth() + 1
        )
          .toString()
          .padStart(2, "0")}/${date.getFullYear()}`,
      });
    }

    return days;
  }, [currentMonth]);

  const handleDateSelect = (dateValue: string) => {
    setSelectedValue(dateValue);
    setIsOpen(false);
    if (onChange) {
      onChange(dateValue);
    }
  };

  const handleToggle = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  const goToPreviousMonth = () => {
    const newMonth = new Date(currentMonth);
    newMonth.setMonth(currentMonth.getMonth() - 1);
    setCurrentMonth(newMonth);
  };

  const goToNextMonth = () => {
    const newMonth = new Date(currentMonth);
    newMonth.setMonth(currentMonth.getMonth() + 1);
    setCurrentMonth(newMonth);
  };

  const selectedOption = calendarData.find(
    (day) => day.value === selectedValue
  );
  const displayText = selectedOption ? selectedOption.label : placeholder;

  const baseClasses =
    "relative w-full bg-edittext-1 text-edittext-1 font-roundo font-light text-base sm:text-lg md:text-xl leading-6 tracking-wide rounded-none rounded-tr-[30px] rounded-br-[30px] rounded-bl-[30px] border-4 border-transparent form-input-focus transition-all duration-200 cursor-pointer";

  const paddingClasses = "pl-4 pr-12 py-3 sm:pl-6 sm:pr-14 sm:py-4";

  const datePickerClasses = `
    ${baseClasses}
    ${paddingClasses}
    ${disabled ? "cursor-not-allowed opacity-50" : ""}
    ${className}
  `
    .trim()
    .replace(/\s+/g, " ");

  const monthNames = [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre",
  ];

  return (
    <div className="relative w-full" ref={datePickerRef}>
      <div className={datePickerClasses} onClick={handleToggle}>
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
        <div className="absolute top-full left-0 right-0 z-20 bg-white border border-gray-200 rounded-bl-[30px] rounded-br-[30px] shadow-lg p-4 min-w-[320px] touch-pan-y">
          {/* Calendar Header */}
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={goToPreviousMonth}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200 touch-manipulation"
            >
              <svg
                className="w-5 h-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <h3 className="text-lg font-medium text-global-1">
              {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
            </h3>
            <button
              onClick={goToNextMonth}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200 touch-manipulation"
            >
              <svg
                className="w-5 h-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Day Names */}
          <div className="grid grid-cols-7 gap-1 mb-2">
            {dayNames.map((day) => (
              <div
                key={day}
                className="p-2 text-center text-sm font-medium text-gray-500"
              >
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-1">
            {calendarData.map((day, index) => (
              <button
                key={index}
                onClick={() => day.isSelectable && handleDateSelect(day.value)}
                disabled={!day.isSelectable}
                className={`
                  p-2 text-sm rounded-lg transition-all duration-200 touch-manipulation
                  ${day.isCurrentMonth ? "text-global-1" : "text-gray-300"}
                  ${day.isToday ? "bg-highlight text-white font-medium" : ""}
                  ${day.isPast ? "text-gray-400 cursor-not-allowed" : ""}
                  ${
                    day.isSelectable && !day.isToday
                      ? "hover:bg-gray-100 cursor-pointer"
                      : ""
                  }
                  ${
                    selectedValue === day.value
                      ? "bg-highlight/20 border-2 border-highlight"
                      : ""
                  }
                `}
              >
                {day.day}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DatePicker;
