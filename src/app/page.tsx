"use client";

import React, { useState, useEffect, useCallback } from "react";
import CatWithSign from "@/components/CatWithSign";
import HeartButton from "@/components/HeartButton";
import PasscodeBoxes from "@/components/PasscodeBoxes";
import SecondPage from "@/components/SecondPage";
import { sounds } from "@/lib/audio";
import { Volume2, VolumeX, AlertCircle } from "lucide-react";

const CORRECT_PIN = "0601";

export default function MobilePasscodePage() {
  const [passcode, setPasscode] = useState<string>("");
  const [isError, setIsError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [isUnlocked, setIsUnlocked] = useState<boolean>(false);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [catState, setCatState] = useState<"idle" | "typing" | "error" | "success">("idle");

  // Toggle sound
  const toggleSound = () => {
    sounds.enabled = !soundEnabled;
    setSoundEnabled(!soundEnabled);
  };

  // Verify PIN
  const verifyPasscode = useCallback((pin: string) => {
    if (pin === CORRECT_PIN) {
      setCatState("success");
      setIsError(false);
      setErrorMessage("");
      sounds.playMelody();
      setTimeout(() => {
        setIsUnlocked(true);
      }, 400);
    } else {
      setIsError(true);
      setErrorMessage("Try again");
      setCatState("error");
      sounds.playError();

      // Mobile haptic feedback
      if (typeof navigator !== "undefined" && navigator.vibrate) {
        try {
          navigator.vibrate([100, 50, 100]);
        } catch {
          // Ignore
        }
      }

      // Reset after error shake
      setTimeout(() => {
        setPasscode("");
        setIsError(false);
        setCatState("idle");
      }, 850);
    }
  }, []);

  // Handle digit tap
  const handleDigit = (digit: string) => {
    if (isError || isUnlocked) return;
    if (passcode.length >= 4) return;

    sounds.playTap(460 + passcode.length * 60);
    const newPasscode = passcode + digit;
    setPasscode(newPasscode);
    setCatState("typing");
    setErrorMessage("");

    // Automatically check when 4th digit is entered
    if (newPasscode.length === 4) {
      setTimeout(() => {
        verifyPasscode(newPasscode);
      }, 250);
    }
  };

  // Handle backspace
  const handleBackspace = () => {
    if (isError || isUnlocked || passcode.length === 0) return;
    sounds.playTap(340);
    setPasscode((prev) => prev.slice(0, -1));
    setCatState(passcode.length > 1 ? "typing" : "idle");
  };

  // Handle Next button click
  const handleNext = () => {
    if (isError || isUnlocked) return;

    if (passcode.length === 4) {
      verifyPasscode(passcode);
    } else {
      setIsError(true);
      setErrorMessage("Try again");
      setCatState("error");
      sounds.playError();
      setTimeout(() => {
        setIsError(false);
        setCatState("idle");
      }, 850);
    }
  };

  // Keyboard support for testing on laptop / desktop
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isUnlocked) return;

      if (/^[0-9]$/.test(e.key)) {
        handleDigit(e.key);
      } else if (e.key === "Backspace" || e.key === "Delete") {
        handleBackspace();
      } else if (e.key === "Enter") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [passcode, isUnlocked, isError, verifyPasscode]);

  // If unlocked, render the Second Page (Lusu & Ubaiii)
  if (isUnlocked) {
    return (
      <main className="min-h-[100dvh] w-full flex items-center justify-center bg-[#f8b8c4]">
        <div className="w-full max-w-[420px] min-h-[100dvh] sm:min-h-[820px] shadow-2xl flex flex-col justify-center items-center overflow-hidden sm:rounded-[36px]">
          <SecondPage
            onLockAgain={() => {
              setIsUnlocked(false);
              setPasscode("");
              setCatState("idle");
              setErrorMessage("");
            }}
          />
        </div>
      </main>
    );
  }

  // Page 1: Passcode Screen
  return (
    <main className="min-h-[100dvh] w-full flex items-center justify-center p-0 sm:p-4 bg-[#f8b8c4]">
      {/* Mobile container */}
      <div className="w-full max-w-[400px] min-h-[100dvh] sm:min-h-[800px] sm:max-h-[860px] bg-[#fcaebc] sm:rounded-[36px] shadow-2xl flex flex-col justify-between items-center relative overflow-hidden px-4 py-4 sm:px-6 sm:py-5 border-0 sm:border-[6px] sm:border-white/50">
        
        {/* Top Sound Control */}
        <div className="w-full flex items-center justify-end z-10">
          <button
            onClick={toggleSound}
            className="p-1.5 rounded-full bg-white/40 hover:bg-white/60 text-[#96374e] transition-colors cursor-pointer"
            title={soundEnabled ? "Mute sound" : "Enable sound"}
            aria-label="Toggle Sound"
          >
            {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>
        </div>

        {/* Center Content: Cat with Bismillah sign */}
        <div className="flex-1 flex flex-col justify-center items-center w-full z-10 -mt-2">
          
          {/* Cat holding "Bismillah" in its hands */}
          <div className="w-full flex justify-center mb-1">
            <CatWithSign
              signText="Bismillah"
              state={catState}
              variant="pink"
              size="lg"
            />
          </div>

          {/* Passcode Title & Boxes */}
          <div className="w-full flex flex-col items-center justify-center my-1.5 gap-2">
            <h2 className="text-[#96374e] text-xl sm:text-2xl font-black tracking-wide drop-shadow-xs">
              Enter a passcode
            </h2>

            {/* 4 Passcode Indicator Boxes */}
            <PasscodeBoxes
              length={4}
              value={passcode}
              isError={isError}
              onClear={() => {
                setPasscode("");
                setErrorMessage("");
                setCatState("idle");
              }}
            />

            {/* Error Message Feedback */}
            <div className="h-6 flex items-center justify-center">
              {errorMessage && (
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-red-500 text-white text-xs sm:text-sm font-bold shadow-xs animate-shake">
                  <AlertCircle className="w-4 h-4" />
                  <span>{errorMessage}</span>
                </div>
              )}
            </div>
          </div>

          {/* Heart Keypad */}
          <div className="w-full max-w-[280px] xs:max-w-[310px] flex flex-col items-center gap-2 xs:gap-2.5 mt-1">
            {/* Row 1: 1, 2, 3 */}
            <div className="flex justify-between w-full">
              <HeartButton label="1" onClick={() => handleDigit("1")} />
              <HeartButton label="2" onClick={() => handleDigit("2")} />
              <HeartButton label="3" onClick={() => handleDigit("3")} />
            </div>

            {/* Row 2: 4, 5, 6 */}
            <div className="flex justify-between w-full">
              <HeartButton label="4" onClick={() => handleDigit("4")} />
              <HeartButton label="5" onClick={() => handleDigit("5")} />
              <HeartButton label="6" onClick={() => handleDigit("6")} />
            </div>

            {/* Row 3: 7, 8, 9 */}
            <div className="flex justify-between w-full">
              <HeartButton label="7" onClick={() => handleDigit("7")} />
              <HeartButton label="8" onClick={() => handleDigit("8")} />
              <HeartButton label="9" onClick={() => handleDigit("9")} />
            </div>

            {/* Row 4: *, 0, ⌫ */}
            <div className="flex justify-between w-full">
              <HeartButton label="*" onClick={() => handleDigit("*")} />
              <HeartButton label="0" onClick={() => handleDigit("0")} />
              <HeartButton label="⌫" subLabel="Del" onClick={handleBackspace} />
            </div>

            {/* Next Button */}
            <div className="w-full flex justify-center pt-2">
              <button
                type="button"
                onClick={handleNext}
                className="w-[190px] xs:w-[210px] py-3 xs:py-3.5 bg-[#96374e] hover:bg-[#852f44] active:scale-95 text-white font-black text-xl xs:text-2xl rounded-full shadow-[0_6px_16px_rgba(150,55,78,0.38)] transition-all select-none cursor-pointer text-center"
              >
                Next
              </button>
            </div>
          </div>

        </div>

        {/* Empty bottom spacer */}
        <div className="h-2 w-full" />
      </div>
    </main>
  );
}
