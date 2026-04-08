"use client";
import { useEffect, useState } from "react";

export default function InitialLoader() {
  const [isVisible, setIsVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true); // start fade out
      setTimeout(() => setIsVisible(false), 700); // remove after animation
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center 
      bg-white dark:bg-slate-950 transition-opacity duration-700
      ${fadeOut ? "opacity-0" : "opacity-100"}`}
    >
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 rounded-full border-2 border-[#7EC832]"></div>

        <div className="absolute inset-0 animate-spin">
          <div className="w-3 h-3 bg-[#7EC832] rounded-full absolute top-0 left-1/2 -translate-x-1/2"></div>
        </div>

        <div className="absolute inset-2 animate-spin [animation-duration:2s]">
          <div className="w-2 h-2 bg-[#7EC832] rounded-full absolute bottom-0 right-1/2 translate-x-1/2"></div>
        </div>
      </div>

      <p className="mt-4 text-base text-orange-500 dark:text-orange-400 animate-pulse">
        Loading experience...
      </p>
    </div>
  );
}
