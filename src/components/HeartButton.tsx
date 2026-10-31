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
      className="group relative flex items-center justify-center w-[66px] h-[66px] xs:w-[74px] xs:h-[74px] sm:w-[82px] sm:h-[82px] select-none transition-all duration-150 active:scale-90 focus:outline-none disabled:opacity-50 touch-manipulation cursor-pointer"
      aria-label={label}
    >
      {/* Adorable Cat Paw SVG (Replacing Heart Symbol) */}
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full drop-shadow-[0_3px_6px_rgba(100,20,40,0.28)] fill-[#96374e] group-hover:fill-[#872d42] group-active:fill-[#732235] transition-colors"
      >
        {/* 4 Cute Toe Beans (Paw Pads) */}
        {/* Far-left toe bean */}
        <ellipse
          cx="20"
          cy="26"
          rx="8.5"
          ry="11.5"
          transform="rotate(-28 20 26)"
        />
        {/* Center-left toe bean */}
        <ellipse
          cx="40"
          cy="15"
          rx="9.5"
          ry="12.5"
          transform="rotate(-8 40 15)"
        />
        {/* Center-right toe bean */}
        <ellipse
          cx="60"
          cy="15"
          rx="9.5"
          ry="12.5"
          transform="rotate(8 60 15)"
        />
        {/* Far-right toe bean */}
        <ellipse
          cx="80"
          cy="26"
          rx="8.5"
          ry="11.5"
          transform="rotate(28 80 26)"
        />

        {/* Large Main Palm Pad (Metacarpal Pad) */}
        <path
          d="M 22,62 C 16,74 22,89 36,92 C 43,94 57,94 64,92 C 78,89 84,74 78,62 C 72,50 62,45 50,48 C 38,45 28,50 22,62 Z"
        />
      </svg>

      {/* Button Content: Number placed perfectly inside the cat palm pad */}
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-2.5 xs:pb-3 sm:pb-3.5 pointer-events-none select-none text-white">
        <span className="font-black text-[23px] xs:text-[26px] sm:text-[30px] leading-none drop-shadow-sm font-cute">
          {label}
        </span>
        {subLabel && (
          <span className="text-[8px] font-bold tracking-wider opacity-90 uppercase leading-none mt-0.5">
            {subLabel}
          </span>
        )}
      </div>
    </button>
  );
}
