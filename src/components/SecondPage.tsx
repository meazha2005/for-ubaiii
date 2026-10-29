"use client";

import React, { useState } from "react";
import CatWithSign from "./CatWithSign";
import confetti from "canvas-confetti";
import { sounds } from "@/lib/audio";
import { Sparkles, RefreshCw, Music } from "lucide-react";

interface SecondPageProps {
  onLockAgain: () => void;
}

export default function SecondPage({ onLockAgain }: SecondPageProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    sounds.playMelody();

    // Celebratory confetti burst
    confetti({
      particleCount: 65,
      spread: 75,
      origin: { y: 0.6 },
      colors: ["#ff758c", "#ff7eb3", "#ffd1dc", "#ffb3ba", "#ffffff"],
    });
  };

  return (
    <div className="relative w-full min-h-[100dvh] sm:min-h-[820px] flex flex-col items-center justify-center p-3 sm:p-5 overflow-hidden bg-gradient-to-b from-[#fdecee] via-[#fff5f6] to-[#ebf3fc]">
      {/* Dreamy Background Clouds */}
      <div className="absolute top-8 left-4 w-32 h-14 bg-white/75 rounded-full blur-[1px] pointer-events-none" />
      <div className="absolute top-12 left-12 w-24 h-12 bg-white/85 rounded-full blur-[1px] pointer-events-none" />
      <div className="absolute top-20 right-6 w-40 h-16 bg-white/65 rounded-full blur-[1px] pointer-events-none" />
      <div className="absolute bottom-12 left-8 w-36 h-14 bg-white/55 rounded-full blur-[1px] pointer-events-none" />

      {/* Floating Stars and Hearts in background */}
      <div className="absolute top-6 left-8 text-amber-300 text-xl opacity-75 animate-pulse">★</div>
      <div className="absolute top-16 right-12 text-amber-300 text-2xl opacity-75 animate-pulse">★</div>
      <div className="absolute top-36 left-12 text-pink-300 text-base opacity-70">♥</div>
      <div className="absolute top-28 right-24 text-pink-300 text-sm opacity-70">♥</div>
      <div className="absolute bottom-20 right-8 text-amber-300 text-base opacity-70">★</div>

      {/* Center White Card (Big, prominent, perfectly readable) */}
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

        {!isOpen ? (
          /* Initial View */
          <div className="flex flex-col items-center mt-2 animate-pop w-full">
            {/* Ubaiii, Lusu has something to say. */}
            <h1 className="font-serif text-[26px] xs:text-[29px] sm:text-[32px] font-black text-[#1e293b] italic leading-tight px-1">
              Ubaiii, Lusu has something to say.
            </h1>

            {/* Tap to open. There's a little music, so turn the sound on. */}
            <p className="text-sm sm:text-[15px] text-[#475569] italic mt-2.5 max-w-[290px] leading-snug font-medium">
              Tap to open. There&apos;s a little music, so turn the sound on.
            </p>

            {/* Open it button: Large & Prominent */}
            <button
              onClick={handleOpen}
              className="mt-6 flex items-center justify-center gap-2 bg-[#ff5e79] hover:bg-[#f34a67] active:scale-95 text-white font-black text-lg sm:text-xl py-3.5 px-10 rounded-full shadow-[0_10px_25px_rgba(255,94,121,0.42)] transition-all cursor-pointer"
            >
              <span>Open it</span>
              <span className="text-xl">💗</span>
            </button>
          </div>
        ) : (
          /* Opened Note View: Heartfelt message from Lusu to Ubaiii */
          <div className="w-full flex flex-col items-center mt-3 animate-pop">
            <div className="w-full bg-[#fff4f6] rounded-2xl p-5 border border-pink-200/80 text-left shadow-xs">
              <div className="flex items-center gap-1.5 text-[#96374e] font-black text-xs sm:text-sm uppercase tracking-wider mb-2.5">
                <Sparkles className="w-4 h-4 text-[#ff5e79]" />
                <span>Message for Ubaiii</span>
              </div>
              <p className="text-sm sm:text-base text-[#334155] leading-relaxed font-semibold">
                Dear Ubaiii,
              </p>
              <p className="text-sm sm:text-base text-[#334155] leading-relaxed mt-1.5 font-semibold">
                Assalam alaikum Warahamathullai wabarakathu! 🌸
              </p>
              <p className="text-sm sm:text-base text-[#334155] leading-relaxed mt-2 font-medium">
                I just wanted to say from the bottom of my heart that you are truly special to me.
                I am really sorry for anything that upset you. Your smile means the absolute world to me! 💕
              </p>
              <p className="text-right text-sm sm:text-base font-black text-[#96374e] mt-3.5">
                — Lusu ❤️
              </p>
            </div>

            {/* Actions: Replay melody & Lock again */}
            <div className="flex items-center justify-center gap-3.5 mt-5">
              <button
                onClick={() => sounds.playMelody()}
                className="flex items-center gap-1.5 bg-pink-100 hover:bg-pink-200 text-[#96374e] text-xs sm:text-sm font-bold py-2.5 px-5 rounded-full transition-colors cursor-pointer"
              >
                <Music className="w-4 h-4" />
                <span>Play Music</span>
              </button>

              <button
                onClick={onLockAgain}
                className="flex items-center gap-1.5 bg-[#96374e] hover:bg-[#832e43] text-white text-xs sm:text-sm font-bold py-2.5 px-5 rounded-full shadow-xs transition-colors cursor-pointer"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Lock Again</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
