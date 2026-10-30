"use client";

import React, { useState, useEffect, useCallback } from "react";
import CatWithSign from "@/components/CatWithSign";
import HeartButton from "@/components/HeartButton";
import PasscodeBoxes from "@/components/PasscodeBoxes";
import SecondPage from "@/components/SecondPage";
import BalloonsPage from "@/components/BalloonsPage";
import MessagePage from "@/components/MessagePage";
import VersesSlides from "@/components/VersesSlides";
import BoyAndCatPage from "@/components/BoyAndCatPage";
import FinalPage from "@/components/FinalPage";
import { sounds } from "@/lib/audio";
import { Volume2, VolumeX, AlertCircle } from "lucide-react";

const CORRECT_PIN = "0601";

type FlowStep = "passcode" | "second_page" | "balloons" | "message" | "verses" | "boy_cat" | "final";

export default function MobilePasscodeApp() {
  const [currentStep, setCurrentStep] = useState<FlowStep>("passcode");
  const [passcode, setPasscode] = useState<string>("");
  const [isError, setIsError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [catState, setCatState] = useState<"idle" | "typing" | "error" | "success">("idle");

  // Toggle sound
  const toggleSound = () => {
    sounds.enabled = !soundEnabled;
    setSoundEnabled(!soundEnabled);
  };

  // Reset to lock screen
  const handleLockAgain = () => {
    setCurrentStep("passcode");
    setPasscode("");
    setCatState("idle");
    setErrorMessage("");
    setIsError(false);
  };

  // Verify PIN
  const verifyPasscode = useCallback((pin: string) => {
    if (pin === CORRECT_PIN) {
      setCatState("success");
      setIsError(false);
      setErrorMessage("");
      sounds.playMelody();
      setTimeout(() => {
        setCurrentStep("second_page");
      }, 400);
    } else {
      setIsError(true);
      setErrorMessage("Try again");
      setCatState("error");
      sounds.playError();

      if (typeof navigator !== "undefined" && navigator.vibrate) {
        try {
          navigator.vibrate([100, 50, 100]);
        } catch {
          // Ignore
        }
      }

      setTimeout(() => {
        setPasscode("");
        setIsError(false);
        setCatState("idle");
      }, 850);
    }
  }, []);

  // Handle digit tap
  const handleDigit = (digit: string) => {
    if (isError || currentStep !== "passcode") return;
    if (passcode.length >= 4) return;

    sounds.playTap(460 + passcode.length * 60);
    const newPasscode = passcode + digit;
    setPasscode(newPasscode);
    setCatState("typing");
    setErrorMessage("");

    if (newPasscode.length === 4) {
      setTimeout(() => {
        verifyPasscode(newPasscode);
      }, 250);
    }
  };

  // Handle backspace
  const handleBackspace = () => {
    if (isError || currentStep !== "passcode" || passcode.length === 0) return;
    sounds.playTap(340);
    setPasscode((prev) => prev.slice(0, -1));
    setCatState(passcode.length > 1 ? "typing" : "idle");
  };

  // Handle Next on Passcode screen
  const handlePasscodeNext = () => {
    if (isError || currentStep !== "passcode") return;

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

  // Keyboard support for testing
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (currentStep !== "passcode") return;

      if (/^[0-9]$/.test(e.key)) {
        handleDigit(e.key);
      } else if (e.key === "Backspace" || e.key === "Delete") {
        handleBackspace();
      } else if (e.key === "Enter") {
        handlePasscodeNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [passcode, currentStep, isError, verifyPasscode]);

  return (
    <main className="min-h-[100dvh] w-full flex items-center justify-center p-0 sm:p-4 bg-[#f8b8c4]">
      {/* Mobile container: Optimized for mobile view */}
      <div className="w-full max-w-[420px] min-h-[100dvh] sm:min-h-[820px] sm:max-h-[880px] shadow-2xl flex flex-col justify-between items-center relative overflow-hidden sm:rounded-[38px] border-0 sm:border-[6px] sm:border-white/50 bg-[#fcaebc]">
        
        {/* STEP 1: Passcode Screen */}
        {currentStep === "passcode" && (
          <div className="w-full h-full min-h-[100dvh] sm:min-h-[820px] flex flex-col justify-between items-center py-4 px-4 sm:px-6 animate-pop">
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

                {/* Error Feedback */}
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
                <div className="flex justify-between w-full">
                  <HeartButton label="1" onClick={() => handleDigit("1")} />
                  <HeartButton label="2" onClick={() => handleDigit("2")} />
                  <HeartButton label="3" onClick={() => handleDigit("3")} />
                </div>

                <div className="flex justify-between w-full">
                  <HeartButton label="4" onClick={() => handleDigit("4")} />
                  <HeartButton label="5" onClick={() => handleDigit("5")} />
                  <HeartButton label="6" onClick={() => handleDigit("6")} />
                </div>

                <div className="flex justify-between w-full">
                  <HeartButton label="7" onClick={() => handleDigit("7")} />
                  <HeartButton label="8" onClick={() => handleDigit("8")} />
                  <HeartButton label="9" onClick={() => handleDigit("9")} />
                </div>

                <div className="flex justify-between w-full">
                  <HeartButton label="*" onClick={() => handleDigit("*")} />
                  <HeartButton label="0" onClick={() => handleDigit("0")} />
                  <HeartButton label="⌫" subLabel="Del" onClick={handleBackspace} />
                </div>

                <div className="w-full flex justify-center pt-2">
                  <button
                    type="button"
                    onClick={handlePasscodeNext}
                    className="w-[190px] xs:w-[210px] py-3 xs:py-3.5 bg-[#96374e] hover:bg-[#852f44] active:scale-95 text-white font-black text-xl xs:text-2xl rounded-full shadow-[0_6px_16px_rgba(150,55,78,0.38)] transition-all select-none cursor-pointer text-center"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>

            <div className="h-2 w-full" />
          </div>
        )}

        {/* STEP 2: Second Page ("Ubaiii, Lusu has something to say" + "Open it") */}
        {currentStep === "second_page" && (
          <div className="w-full h-full min-h-[100dvh] sm:min-h-[820px] animate-pop">
            <SecondPage onOpenIt={() => setCurrentStep("balloons")} />
          </div>
        )}

        {/* STEP 3: Balloons Screen (Full of green balloons, one red balloon with "Tap here") */}
        {currentStep === "balloons" && (
          <div className="w-full h-full min-h-[100dvh] sm:min-h-[820px] animate-pop">
            <BalloonsPage onRedBalloonTap={() => setCurrentStep("message")} />
          </div>
        )}

        {/* STEP 4: Full Page Message with "Next" button */}
        {currentStep === "message" && (
          <div className="w-full h-full max-h-[100dvh] sm:max-h-[880px] overflow-y-auto overscroll-contain animate-pop">
            <MessagePage onNext={() => setCurrentStep("verses")} />
          </div>
        )}

        {/* STEP 5: Quranic Verses Slides (6 Verses) */}
        {currentStep === "verses" && (
          <div className="w-full h-full min-h-[100dvh] sm:min-h-[820px] animate-pop">
            <VersesSlides
              onFinish={() => setCurrentStep("boy_cat")}
              onBackToMessage={() => setCurrentStep("message")}
            />
          </div>
        )}

        {/* STEP 6: Boy and Cat Page ("Tap now" -> Heartfelt Plea) */}
        {currentStep === "boy_cat" && (
          <div className="w-full h-full max-h-[100dvh] sm:max-h-[880px] overflow-y-auto overscroll-contain animate-pop">
            <BoyAndCatPage
              onNext={() => setCurrentStep("final")}
              onBackToVerses={() => setCurrentStep("verses")}
            />
          </div>
        )}

        {/* STEP 7: Final Resolution Screen */}
        {currentStep === "final" && (
          <div className="w-full h-full min-h-[100dvh] sm:min-h-[820px] animate-pop">
            <FinalPage onRestart={handleLockAgain} />
          </div>
        )}

      </div>
    </main>
  );
}
