"use client";

import React from "react";
import Image from "next/image";
import { sounds } from "@/lib/audio";
import { Sparkles } from "lucide-react";

interface BoyAndCatPageProps {
  onNext: () => void;
  onBackToVerses: () => void;
}

export default function BoyAndCatPage({
  onNext,
  onBackToVerses,
}: BoyAndCatPageProps) {
  const handleMessageClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    sounds.playTap();
    onNext();
  };

  return (
    <div
      className="relative w-full h-[100dvh] sm:h-[820px] max-h-[100dvh] sm:max-h-[880px] bg-gradient-to-b from-[#fdecee] via-[#fff5f6] to-[#ebf3fc] flex flex-col items-center p-3 sm:p-5 overflow-y-auto overscroll-contain select-none animate-pop"
      style={{ WebkitOverflowScrolling: "touch", touchAction: "pan-y" }}
    >
      {/* Top Header Bar */}
      <div className="w-full flex items-center justify-between pt-1 px-1 mb-2 shrink-0">
        <button
          onClick={onBackToVerses}
          className="text-xs font-bold text-[#96374e]/70 hover:text-[#96374e] py-1 px-2.5 rounded-full bg-white/70 shadow-xs transition-colors cursor-pointer"
        >
          ← Verses
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
        
        {/* ================= ABOVE: THE HEARTFELT MESSAGE CARD ================= */}
        <div className="w-full bg-white rounded-[28px] shadow-[0_16px_36px_rgba(230,170,185,0.35)] p-4 sm:p-5 border border-pink-100/90 text-left flex flex-col gap-2.5">
          <div className="flex items-center gap-1.5 text-[#96374e] font-black text-xs uppercase tracking-wider border-b border-pink-100/80 pb-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#ff5e79]" />
            <span>EN MANASULA IRUNDHU...</span>
          </div>

          {/* Paragraph 1 */}
          <p className="text-[13px] sm:text-[14px] text-[#334155] leading-[1.65] font-semibold select-text">
            Enaku edhuvum vena. Naan pannadhu nala dhan palaya ungala lose panniten. Enaku romba pidicha andha palaya Ubaii-ah tholachiten.
          </p>

          {/* Paragraph 2 */}
          <p className="text-[13px] sm:text-[14px] text-[#334155] leading-[1.65] font-semibold select-text">
            Please enna vittu dhoorama poidatheenga. Enna hate pannadheenga. Enaku en palaya Ubaii venum. Naan vera edhuvume kekkala.
          </p>

          {/* Paragraph 3 */}
          <p className="text-[13px] sm:text-[14px] text-[#334155] leading-[1.65] font-semibold select-text">
            Please enna mannichu, sila vishyatha marandhu purinjuka try pannunga. Ellame palaya madhiriye maaranum nu aasai padren. Neenga palaya madhiri  irundha adhuve enaku podhum.
          </p>

          {/* Paragraph 4 */}
          <p className="text-[13px] sm:text-[14px] text-[#334155] leading-[1.65] font-semibold select-text">
            Apdi kekkuradhuku kooda enaku thagudhi illanu theriyum. Naan pannadhu nala dhan ellame ippadi aachu. Irundhalum, manasara kekkuren...
            <br />
            Enaku en palaya Ubaii-ah thiruppi tharuveengala? Please. Enaku adhu mattum podhum.
          </p>

          {/* Signature */}
          <p className="text-right text-xs sm:text-sm font-black text-[#96374e] pt-1">
            — Unga Lusu 🥺
          </p>
        </div>

        {/* ================= BELOW: THE EMOTIONAL BOY & CAT IMAGE ================= */}
        <div className="relative w-full rounded-[28px] overflow-hidden bg-white/90 shadow-[0_16px_36px_rgba(230,170,185,0.3)] border border-pink-100 p-2 sm:p-2.5">
          {/* Speech Bubble: Clicking on this message from the boy navigates to next page */}
          <button
            type="button"
            onClick={handleMessageClick}
            className="absolute top-2 right-2 xs:right-4 z-20 max-w-[215px] text-left cursor-pointer group/msg active:scale-95 transition-all select-none"
            aria-label="Message from the boy: i'm here u got me again. Don't be sad"
          >
            <div className="relative bg-white/95 hover:bg-pink-50/95 backdrop-blur-md px-3.5 py-2.5 rounded-2xl shadow-xl border-2 border-[#96374e]/40 group-hover/msg:border-[#96374e] text-[#852a3f] text-xs sm:text-[13px] font-black leading-snug text-center transition-all">
              &ldquo;i&apos;m here u got me again. Don&apos;t be sad&rdquo;
              {/* Speech bubble arrow pointing down toward boy's head */}
              <div className="absolute -bottom-2 right-12 w-3.5 h-3.5 bg-white group-hover/msg:bg-pink-50/95 border-r-2 border-b-2 border-[#96374e]/40 group-hover/msg:border-[#96374e] transform rotate-45 transition-colors" />
            </div>
          </button>

          {/* The Uploaded Image: Crying Kitten & Boy */}
          <div className="relative w-full aspect-[539/463] rounded-2xl overflow-hidden bg-gradient-to-b from-transparent to-pink-50/30">
            <Image
              src="/boy-and-cat.png"
              alt="Boy comforting the cute crying kitten"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

      </div>

      {/* Spacer */}
      <div className="h-6 w-full shrink-0" />
    </div>
  );
}
