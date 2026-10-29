"use client";

import React from "react";

interface HeartButtonProps {
  label: string;
  subLabel?: string;
  onClick: () => void;
  disabled?: boolean;
}

export default function HeartButton({
  label,
  subLabel,
  onClick,
  disabled = false,
}: HeartButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="group relative flex items-center justify-center w-[66px] h-[62px] xs:w-[74px] xs:h-[70px] sm:w-[82px] sm:h-[78px] select-none transition-all duration-150 active:scale-90 focus:outline-none disabled:opacity-50 touch-manipulation cursor-pointer"
      aria-label={label}
    >
      {/* Heart SVG */}
      <svg
        viewBox="0 0 100 90"
        className="w-full h-full drop-shadow-[0_3px_6px_rgba(100,20,40,0.28)] fill-[#96374e] group-hover:fill-[#872d42] group-active:fill-[#732235] transition-colors"
      >
        <path
          d="M 50,88 C 22,62 0,44 0,25 C 0,11 11,0 26,0 C 36,0 45,5 50,13 C 55,5 64,0 74,0 C 89,0 100,11 100,25 C 100,44 78,62 50,88 Z"
        />
      </svg>

      {/* Button Content: Big bold white text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pt-0 pb-1 pointer-events-none select-none text-white">
        <span className="font-black text-[25px] xs:text-[28px] sm:text-[32px] leading-none drop-shadow-sm">
          {label}
        </span>
        {subLabel && (
          <span className="text-[9px] font-bold tracking-wider opacity-90 uppercase leading-none mt-0.5">
            {subLabel}
          </span>
        )}
      </div>
    </button>
  );
}
