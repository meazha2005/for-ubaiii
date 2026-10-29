"use client";

import React, { useEffect, useState } from "react";
import confetti from "canvas-confetti";
import CatIllustration from "./CatIllustration";
import { Lock, Heart, Sparkles, RefreshCw } from "lucide-react";

interface UnlockedScreenProps {
  onLock: () => void;
  useAiImage: boolean;
}

export default function UnlockedScreen({
  onLock,
  useAiImage,
}: UnlockedScreenProps) {
  const [openedEnvelope, setOpenedEnvelope] = useState(false);

  useEffect(() => {
    // Fire celebratory confetti burst
    const end = Date.now() + 1200;
    const colors = ["#ff758c", "#ff7eb3", "#ffffff", "#fcaebc", "#96374e"];

    (function frame() {
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.7 },
        colors,
      });
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.7 },
        colors,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  }, []);

  return (
    <div className="w-full flex-1 flex flex-col items-center justify-between py-6 px-4 text-center animate-pop">
      {/* Top Header */}
      <div className="w-full flex flex-col items-center">
        <span className="text-xs uppercase tracking-widest text-[#96374e]/70 font-semibold mb-1">
          بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
        </span>
        <div className="inline-flex items-center gap-1.5 bg-white/70 backdrop-blur-xs px-4 py-1 rounded-full border border-[#96374e]/20 shadow-xs">
          <Sparkles className="w-4 h-4 text-[#96374e]" />
          <span className="text-[#96374e] font-bold text-sm tracking-wide">
            Bismillah
          </span>
        </div>
      </div>

      {/* Celebrating Cat */}
      <div className="my-3 flex flex-col items-center">
        <CatIllustration state="success" useAiImage={useAiImage} />
        <div className="mt-3 inline-flex items-center gap-1 bg-[#96374e] text-white px-3 py-0.5 rounded-full text-xs font-bold shadow-xs">
          <Heart className="w-3.5 h-3.5 fill-white text-white" />
          <span>Unlocked Successfully!</span>
        </div>
      </div>

      {/* Secret Card / Welcome Box */}
      <div className="w-full max-w-[320px] bg-white/85 backdrop-blur-md rounded-2xl p-4 sm:p-5 border-2 border-[#96374e]/30 shadow-md flex flex-col items-center gap-2.5 transition-all">
        <h2 className="text-[#96374e] text-xl font-black">
          Welcome! 🌸
        </h2>
        <p className="text-[#7d2c40] text-xs leading-relaxed font-medium">
          Passcode <span className="font-bold underline decoration-pink-400">0601</span> accepted.
          May your day be filled with peace, barakah, and sweet moments!
        </p>

        {/* Interactive letter toggle */}
        <button
          onClick={() => setOpenedEnvelope(!openedEnvelope)}
          className="w-full mt-1 py-2 px-3 bg-[#ffd9e1] hover:bg-[#ffccd6] text-[#8e2942] rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 border border-[#96374e]/20"
        >
          <Heart className="w-3.5 h-3.5 fill-[#8e2942]" />
          <span>{openedEnvelope ? "Hide Secret Note" : "Open Secret Note 💌"}</span>
        </button>

        {openedEnvelope && (
          <div className="w-full p-3 bg-pink-50/90 rounded-xl text-left border border-pink-200/60 animate-pop">
            <p className="text-[11px] text-[#852a3f] leading-normal italic font-medium">
              &ldquo;Every journey that starts with Bismillah brings beauty and grace.
              Thank you for visiting!&rdquo; 💖
            </p>
          </div>
        )}
      </div>

      {/* Lock Again Button */}
      <div className="w-full flex justify-center pt-4">
        <button
          onClick={onLock}
          className="flex items-center justify-center gap-2 bg-[#96374e] hover:bg-[#802a3f] active:scale-95 text-white font-bold py-2.5 px-7 rounded-full shadow-[0_4px_12px_rgba(150,55,78,0.3)] transition-all text-sm tracking-wide cursor-pointer"
        >
          <RefreshCw className="w-4 h-4" />
          <span>Lock Again</span>
        </button>
      </div>
    </div>
  );
}
