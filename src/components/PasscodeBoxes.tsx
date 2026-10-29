"use client";

import React from "react";

interface PasscodeBoxesProps {
  length?: number;
  value: string;
  isError: boolean;
  onClear?: () => void;
}

export default function PasscodeBoxes({
  length = 4,
  value,
  isError,
  onClear,
}: PasscodeBoxesProps) {
  const items = Array.from({ length });

  return (
    <div
      onClick={onClear}
      className={`flex items-center justify-center gap-3 xs:gap-3.5 transition-transform duration-200 cursor-pointer ${
        isError ? "animate-shake" : ""
      }`}
      title="Tap to clear"
    >
      {items.map((_, index) => {
        const isFilled = index < value.length;
        return (
          <div
            key={index}
            className={`w-[50px] h-[50px] xs:w-[56px] xs:h-[56px] sm:w-[62px] sm:h-[62px] rounded-2xl border-[3px] flex items-center justify-center transition-all duration-200 shadow-sm ${
              isError
                ? "border-red-600 bg-red-100/70"
                : isFilled
                ? "border-[#96374e] bg-white/80 shadow-[0_3px_10px_rgba(150,55,78,0.2)]"
                : "border-[#96374e] bg-white/35"
            }`}
          >
            {isFilled && (
              <span className="text-[#96374e] text-3xl xs:text-4xl font-black select-none leading-none animate-pop transform translate-y-1">
                *
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
}
