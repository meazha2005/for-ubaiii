"use client";

import React, { useState, useEffect, useRef } from "react";
import { sounds } from "@/lib/audio";
import { ChevronLeft, ChevronRight, BookOpen, Sparkles } from "lucide-react";

interface VersesSlidesProps {
  onFinish: () => void;
  onBackToMessage: () => void;
}

interface VerseSlide {
  id: number;
  title: string;
  arabic?: string;
  content: string;
  kuthu?: string;
}

const EXACT_VERSES_DATA: VerseSlide[] = [
  {
    id: 1,
    title: "Surah Al-Furqan (25:70)",
    arabic: "إِلَّا مَن تَابَ وَءَامَنَ وَعَمِلَ عَمَلٗا صَٰلِحٗا فَأُوْلَٰٓئِكَ يُبَدِّلُ ٱللَّهُ سَيِّـَٔاتِهِمۡ حَسَنَٰتٖۗ وَكَانَ ٱللَّهُ غَفُورٗا رَّحِ]",
    content: "ஆயினும், (அவர்களில்) எவர்கள் பாவத்திலிருந்து விலகி (மன்னிப்புக் கோரி) நம்பிக்கைகொண்டு நற்செயல்களைச் செய்கிறார்களோ, அத்தகையவர்கள் (முன்னர் செய்துவிட்ட) பாவங்களை அல்லாஹ் (மன்னிப்பது மட்டுமல்ல; அவற்றை) நன்மைகளாகவும் மாற்றிவிடுகிறான். அல்லாஹ் மிக்க மன்னிப்பவனும் மகா கருணையுடையவனும் ஆவான்.",
  },
  {
    id: 2,
    title: "Surah Ash-Shura (42:40)",
    arabic: "وَجَزَاؤُا سَيِّئَةٍ سَيِّئَةٌ مِّثْلُهَا ۖ فَمَنْ عَفَا وَأَصْلَحَ فَأَجْرُهُ عَلَى اللَّهِ ۚ إِنَّهُ لَا يُحِبُّ الظَّالِمِينَ",
    content: '"இன்னும் தீமைக்கும் கூலி அதைப் போன்ற தீமையே யாகும்; ஆனால், எவர் (அதனை) மன்னித்துச் சமாதானம் செய்கிறாரோ அவருக்குரிய நற்கூலி அல்லாஹ்விடம் இருக்கிறது - நிச்சயமாக அவன் அநியாயம் செய்பவர்களை நேசிக்க மாட்டான்."',
  },
  {
    id: 3,
    title: "ஸூரஹ் அல்-ஹிஜ்ர் (15:85):",
    content: '"எனவே, அழகிய முறையில் (அவர்களின் பிழைகளைப்) புறக்கணித்து விடுப்பீராக!"',
    kuthu: 'கருத்து: இங்கு "அழகிய முறை" என்பது, ஒருவரை மன்னித்த பிறகு அவரிடம் பழைய குறைகளையோ, தவறுகளையோ மீண்டும் குத்திக் காட்டாமல், மனக்கசப்பு இல்லாமல் முழுமையாக மன்னிப்பதைக் குறிக்கிறது.',
  },
  {
    id: 4,
    title: "ஸூரஹ் அன்-நூர் (24:22):",
    content: '"...அவர்கள் (மற்றவர்களின் குற்றங்களை) மன்னித்துப் புறக்கணித்து விடட்டும்; அல்லாஹ் உங்களுக்கு மன்னிப்பதை நீங்கள் விரும்ப மாட்டீர்களா? மேலும் அல்லாஹ் மிக மன்னிப்பவன்; மிக்க கிருபையுடையவன்."',
    kuthu: "கருத்து: நாம் மற்றவர்களின் கடந்த காலத் தவறுகளை மன்னித்து மறந்தால்தான், நாளை அல்லாஹ் நம்முடைய பாவங்களை மன்னிப்பான் என்பதை இந்த வசனம் உணர்த்துகிறது.",
  },
  {
    id: 5,
    title: "ஸூரஹ் ஆலி இம்ரான் (3:134):",
    content: '"...அவர்கள் கோபத்தை விழுங்கிவிடுவார்கள்; மனிதர்களின் தவறுகளை மன்னித்துவிடுவார்கள்; அல்லாஹ் இத்தகைய நன்மையாளர்களை நேசிக்கின்றான்."',
    kuthu: "கருத்து: தவறு செய்தவர் மீது கோபம் வரும்போது, அதை அடக்கிக்கொண்டு அவரிடம் பழையபடி கனிவாக நடப்பதே சிறந்த குணமாகும்.",
  },
  {
    id: 6,
    title: "ஸூரஹ் ஃபுஸ்ஸிலத் (41:34):",
    content: '"நன்மையும் தீமையும் சமமாக மாட்டா; நீங்கள் தீமையை மிக அழகிய நன்மையைக் கொண்டு தடுத்துக் கொள்ளுங்கள்! அப்போது, எவருக்கும் உமக்கும் இடையில் பகைமை இருந்ததோ, அவர் உங்களது நெருங்கிய நண்பரைப் போல் ஆகிவிடுவார்."',
    kuthu: "கருத்து: அவர்கள் செய்த பழைய கசப்பான விஷயங்களை மறந்து, நீங்கள் நன்மையான முறையில் (பழையபடி பாசமாக) பேசத் தொடங்கினால், உங்களிடம் பகைமையாக இருந்தவர்கள் கூட உங்கள் சிறந்த நண்பராக மாறிவிடுவார்கள்.",
  },
];

export default function VersesSlides({
  onFinish,
  onBackToMessage,
}: VersesSlidesProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const currentVerse = EXACT_VERSES_DATA[currentIndex];
  const isFirstSlide = currentIndex === 0;
  const isLastSlide = currentIndex === EXACT_VERSES_DATA.length - 1;

  const handleNext = () => {
    if (isLastSlide) {
      sounds.playTap(680);
      onFinish();
    } else {
      sounds.playTap(480 + (currentIndex + 1) * 35);
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (isFirstSlide) {
      sounds.playTap(380);
      onBackToMessage();
    } else {
      sounds.playTap(440);
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleSelectDot = (idx: number) => {
    sounds.playTap(480 + idx * 30);
    setCurrentIndex(idx);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        handleNext();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  // Mobile swipe gestures
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 45) {
      handleNext();
    } else if (diff < -45) {
      handlePrev();
    }
    touchStartX.current = null;
  };

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="relative w-full h-[100dvh] sm:h-[820px] max-h-[100dvh] sm:max-h-[880px] bg-gradient-to-b from-[#fdecee] via-[#fff5f6] to-[#ebf3fc] flex flex-col justify-between items-center p-3.5 sm:p-5 overflow-hidden select-none animate-pop"
      style={{ touchAction: "pan-y" }}
    >
      {/* Top Header Bar */}
      <div className="w-full flex items-center justify-between pt-1 px-1 shrink-0">
        <button
          onClick={handlePrev}
          className="flex items-center gap-1 bg-white/70 hover:bg-white text-[#96374e] px-2.5 py-1 rounded-full text-xs font-bold transition-all shadow-xs active:scale-95 cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>{isFirstSlide ? "Back" : "Prev"}</span>
        </button>

        <div className="inline-flex items-center gap-1.5 bg-white/85 px-3.5 py-1 rounded-full shadow-xs border border-pink-100">
          <BookOpen className="w-3.5 h-3.5 text-[#96374e]" />
          <span className="text-[#96374e] font-black text-xs uppercase tracking-wider">
            Quranic Wisdom
          </span>
        </div>

        <div className="bg-[#96374e] text-white px-2.5 py-0.5 rounded-full text-xs font-extrabold shadow-xs">
          {currentIndex + 1} / {EXACT_VERSES_DATA.length}
        </div>
      </div>

      {/* Slide Indicators: 6 Animated Dots */}
      <div className="flex items-center justify-center gap-1.5 my-2 shrink-0">
        {EXACT_VERSES_DATA.map((_, idx) => (
          <button
            key={idx}
            onClick={() => handleSelectDot(idx)}
            className={`transition-all duration-300 rounded-full cursor-pointer ${
              idx === currentIndex
                ? "w-7 h-2 bg-[#96374e] shadow-xs"
                : "w-2 h-2 bg-[#96374e]/25 hover:bg-[#96374e]/50"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Main Slide Card */}
      <div
        key={currentIndex}
        className="w-full max-w-[390px] bg-white rounded-[32px] shadow-[0_18px_45px_rgba(230,170,185,0.4)] p-5 sm:p-6 border border-pink-100/90 flex flex-col justify-between my-auto animate-pop max-h-[72dvh] sm:max-h-[660px] overflow-y-auto overscroll-contain"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {/* Card Header: Surah Title */}
        <div className="flex flex-col items-center text-center pb-2.5 border-b border-pink-100/80 shrink-0">
          <div className="w-8 h-8 rounded-full bg-pink-50 flex items-center justify-center mb-1.5 text-[#96374e] shadow-xs border border-pink-200/50">
            <Sparkles className="w-4 h-4 text-[#ff5e79]" />
          </div>
          <h2 className="text-[#96374e] font-black text-base sm:text-lg tracking-wide">
            {currentVerse.id}. {currentVerse.title}
          </h2>
        </div>

        {/* Card Body: Exact Text from User */}
        <div className="flex flex-col gap-3.5 py-3.5 text-left">
          {/* Arabic Text (only if present in user request) */}
          {currentVerse.arabic && (
            <div className="bg-[#fff9fa] rounded-2xl p-3.5 border border-pink-100/80 text-center">
              <p
                dir="rtl"
                className="text-[#641b2c] text-base sm:text-lg leading-[1.9] font-medium select-text"
                style={{ fontFamily: "'Amiri', 'Traditional Arabic', serif" }}
              >
                {currentVerse.arabic}
              </p>
            </div>
          )}

          {/* Main Content (Tamil Verse) */}
          <p className="text-[14px] sm:text-[15px] text-[#334155] leading-relaxed font-semibold select-text">
            {currentVerse.content}
          </p>

          {/* கருத்து (only if present in user request) */}
          {currentVerse.kuthu && (
            <div className="bg-[#fff4f6] rounded-2xl p-3.5 border-l-4 border-[#ff5e79] text-left">
              <p className="text-[13px] sm:text-[14px] text-[#475569] leading-relaxed font-medium select-text">
                {currentVerse.kuthu}
              </p>
            </div>
          )}
        </div>

        {/* Swipe hint */}
        <div className="text-center pt-1 text-[10px] text-[#96374e]/50 font-medium shrink-0">
          {isLastSlide ? "Tap Next to continue" : "Swipe left or tap Next →"}
        </div>
      </div>

      {/* Bottom Navigation Buttons */}
      <div className="w-full max-w-[390px] flex items-center justify-between gap-3 pt-2 shrink-0">
        <button
          onClick={handlePrev}
          className="flex-1 py-3 px-4 bg-white/90 hover:bg-white text-[#96374e] font-black text-sm rounded-full shadow-xs border border-pink-200/80 transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-1 select-none"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>{isFirstSlide ? "Back" : "Previous"}</span>
        </button>

        <button
          onClick={handleNext}
          className="flex-1 py-3 px-4 bg-[#96374e] hover:bg-[#832e43] text-white font-black text-sm sm:text-base rounded-full shadow-[0_6px_18px_rgba(150,55,78,0.35)] transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-1 select-none"
        >
          <span>{isLastSlide ? "Next" : "Next Verse"}</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
