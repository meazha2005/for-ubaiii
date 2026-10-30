"use client";

import React from "react";
import CatWithSign from "./CatWithSign";

interface SecondPageProps {
  onOpenIt: () => void;
}

export default function SecondPage({ onOpenIt }: SecondPageProps) {
  return (
    <div className="relative w-full min-h-[100dvh] sm:min-h-[820px] flex flex-col items-center justify-center p-3 sm:p-5 overflow-hidden bg-gradient-to-b from-[#fdecee] via-[#fff5f6] to-[#ebf3fc]">
      {/* Dreamy Background Clouds */}
      <div className="absolute top-8 left-4 w-32 h-14 bg-white/75 rounded-full blur-[1px] pointer-events-none" />
      <div className="absolute top-12 left-12 w-24 h-12 bg-white/85 rounded-full blur-[1px] pointer-events-none" />
      <div className="absolute top-20 right-6 w-40 h-16 bg-white/65 rounded-full blur-[1px] pointer-events-none" />
      <div className="absolute bottom-12 left-8 w-36 h-14 bg-white/55 rounded-full blur-[1px] pointer-events-none" />

      {/* Floating Stars in background */}
      <div className="absolute top-6 left-8 text-amber-300 text-xl opacity-75 animate-pulse">★</div>
      <div className="absolute top-16 right-12 text-amber-300 text-2xl opacity-75 animate-pulse">★</div>
      <div className="absolute top-36 left-12 text-amber-200 text-base opacity-70">✦</div>
      <div className="absolute top-28 right-24 text-amber-200 text-sm opacity-70">✦</div>
      <div className="absolute bottom-20 right-8 text-amber-300 text-base opacity-70">★</div>

      {/* Center White Card */}
      <div className="relative w-full max-w-[390px] bg-white rounded-[38px] shadow-[0_18px_45px_rgba(230,170,185,0.4)] p-6 sm:p-8 flex flex-col items-center text-center z-10 border border-pink-100/80 animate-pop">
        
        {/* Top Header: SOMEONE MADE THIS FOR YOU */}
        <span className="text-[12px] sm:text-[13px] font-black tracking-[0.24em] text-[#4f83db] uppercase mb-2">
          SOMEONE MADE THIS FOR YOU
        </span>

        {/* Big Cat with Signboard: "Assalam alaikum Warahamathullai wabarakathu" */}
        <div className="my-1 w-full flex justify-center">
          <CatWithSign
            signText="Assalam alaikum Warahamathullai wabarakathu"
            variant="card"
            size="lg"
          />
        </div>

        {/* Content Section */}
        <div className="flex flex-col items-center mt-2 animate-pop w-full">
          {/* Ubaiii, Lusu has something to say. */}
          <h1 className="font-serif text-[26px] xs:text-[29px] sm:text-[32px] font-black text-[#1e293b] italic leading-tight px-1">
            Ubaiii, Lusu has something to say.
          </h1>

          {/* Open it button (No heart symbol, larger touch target) */}
          <button
            onClick={onOpenIt}
            className="mt-8 flex items-center justify-center bg-[#ff5e79] hover:bg-[#f34a67] active:scale-95 text-white font-black text-xl xs:text-2xl py-3.5 px-12 rounded-full shadow-[0_10px_25px_rgba(255,94,121,0.42)] transition-all cursor-pointer select-none"
          >
            Open it
          </button>
        </div>
      </div>
    </div>
  );
}
