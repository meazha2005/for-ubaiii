"use client";

import React from "react";
import { Sparkles, RefreshCw, ChevronLeft } from "lucide-react";
import { sounds } from "@/lib/audio";

interface PoemPageProps {
  onBack: () => void;
  onRestart: () => void;
}

const POEM_STANZAS = [
  {
    num: 1,
    line1: "If I have to cry, let it be for you,",
    line2: "If I have to smile, let it be for the happiness in your eyes.",
  },
  {
    num: 2,
    line1: "If I have to get lost, let it be in your presence,",
    line2: "If I have to be found, let it be in your arms.",
  },
  {
    num: 3,
    line1: "If I have to melt, let it be in your voice,",
    line2: "If I have to freeze, let it be in your absence.",
  },
  {
    num: 4,
    line1: "If I have to wait, let it be for your reply,",
    line2: "If I have to rush, let it be to see you.",
  },
  {
    num: 5,
    line1: "If I have to break, let it be in front of you,",
    line2: "If I have to heal, let it be because of you.",
  },
  {
    num: 6,
    line1: "If I have to pray, let it be for your happiness,",
    line2: "If I have to wish, let it be for your presence forever.",
  },
  {
    num: 7,
    line1: "If I have to fall, let it be for you again and again,",
    line2: "If I have to rise, let it be holding your hand.",
  },
  {
    num: 8,
    line1: "If I have to be silent, let it be listening to your voice,",
    line2: "If I have to have to speak . Let it be about u",
  },
  {
    num: 9,
    line1: "if i have to live , let it be as ur peace",
    line2: "If i have to die, let it be in your memories",
  },
];

export default function PoemPage({ onBack, onRestart }: PoemPageProps) {
  const handleRestartClick = () => {
    sounds.playTap();
    onRestart();
  };

  const handleBackClick = () => {
    sounds.playTap();
    onBack();
  };

  return (
    <div
      className="relative w-full h-[100dvh] sm:h-[820px] max-h-[100dvh] sm:max-h-[880px] bg-gradient-to-b from-[#fdecee] via-[#fff5f6] to-[#ebf3fc] flex flex-col items-center p-3 sm:p-5 overflow-y-auto overscroll-contain select-none animate-pop"
      style={{ WebkitOverflowScrolling: "touch", touchAction: "pan-y" }}
    >
      {/* Top Header Bar */}
      <div className="w-full flex items-center justify-between pt-1 px-1 mb-2 shrink-0">
        <button
          onClick={handleBackClick}
          className="text-xs font-bold text-[#96374e]/70 hover:text-[#96374e] py-1 px-2.5 rounded-full bg-white/70 shadow-xs transition-colors cursor-pointer flex items-center gap-1"
        >
          <ChevronLeft className="w-3.5 h-3.5" />
          <span>Back</span>
        </button>

        <div className="inline-flex items-center gap-1.5 bg-white/85 px-3.5 py-1 rounded-full shadow-xs border border-pink-100">
          <Sparkles className="w-3.5 h-3.5 text-[#ff5e79]" />
          <span className="text-[#96374e] font-black text-xs uppercase tracking-wider">
            Lusu to Ubaiii
          </span>
        </div>

        <span className="text-amber-300 text-lg opacity-80">★</span>
      </div>

      {/* Main Container */}
      <div className="w-full max-w-[390px] flex flex-col items-center gap-3.5 my-1 shrink-0 animate-pop">
        
        {/* Poem Master Card */}
        <div className="w-full bg-white rounded-[28px] shadow-[0_16px_36px_rgba(230,170,185,0.35)] p-4 sm:p-5 border border-pink-100/90 text-left flex flex-col gap-3.5">
          
          {/* Card Header */}
          <div className="flex items-center justify-between border-b border-pink-100/80 pb-2">
            <div className="flex items-center gap-1.5 text-[#96374e] font-black text-xs uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#ff5e79]" />
              <span>FOR MY UBAIII 🌸</span>
            </div>
            <span className="text-[11px] font-bold text-[#96374e]/60 bg-pink-50 px-2 py-0.5 rounded-full">
              9 Lines
            </span>
          </div>

          {/* Stanzas List */}
          <div className="flex flex-col gap-3">
            {POEM_STANZAS.map((stanza) => (
              <div
                key={stanza.num}
                className="flex items-start gap-2.5 p-2.5 rounded-2xl bg-gradient-to-r from-pink-50/50 via-white to-pink-50/30 border border-pink-100/60 shadow-xs"
              >
                {/* Number Badge */}
                <div className="w-6 h-6 rounded-full bg-[#96374e] text-white flex items-center justify-center text-xs font-black shrink-0 mt-0.5 shadow-xs">
                  {stanza.num}
                </div>

                {/* Stanza Verses */}
                <div className="flex flex-col gap-0.5 select-text">
                  <p className="text-[12.5px] sm:text-[13.5px] text-[#334155] font-semibold leading-snug">
                    {stanza.line1}
                  </p>
                  <p className="text-[12.5px] sm:text-[13.5px] text-[#852a3f] font-bold leading-snug">
                    {stanza.line2}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Signature */}
          <div className="pt-2 border-t border-pink-100/80 flex items-center justify-between">
            <span className="text-xs text-[#64748b] font-medium">
              Forever &amp; Always
            </span>
            <span className="text-xs sm:text-sm font-black text-[#96374e]">
              — Unga Lusu 🥺🌸
            </span>
          </div>
        </div>

        {/* Start Over / Lock Button */}
        <div className="w-full flex justify-center pt-2 pb-6">
          <button
            onClick={handleRestartClick}
            className="flex items-center gap-1.5 text-xs font-bold text-[#96374e]/70 hover:text-[#96374e] py-2 px-4 rounded-full bg-white/70 hover:bg-white shadow-xs transition-colors cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Start Over (Lock)</span>
          </button>
        </div>

      </div>

      {/* Spacer */}
      <div className="h-6 w-full shrink-0" />
    </div>
  );
}
