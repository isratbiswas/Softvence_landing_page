"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-8 py-4">
      {/* Logo */}
      <div className="flex-shrink-0">
        <div className="w-10 h-10 md:w-12 md:h-12 bg-[#7EC832] rounded-xl flex items-center justify-center shadow-lg shadow-[#7EC832]/30">
          <svg
            viewBox="0 0 40 40"
            className="w-6 h-6 md:w-7 md:h-7"
            fill="none"
          >
            <circle cx="20" cy="20" r="18" stroke="white" strokeWidth="2.5" />
            <path
              d="M10 20 Q15 10 20 20 Q25 30 30 20"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
            />
            <circle cx="20" cy="20" r="3" fill="white" />
          </svg>
        </div>
      </div>

      {/* Center Nav Links + Search */}
      <div className="hidden md:flex items-center bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl px-6 py-2.5 gap-6">
        <Link
          href="/"
          className="text-white text-sm font-medium hover:text-[#7EC832] transition-colors duration-200"
        >
          Home
        </Link>

        <a
          href="#"
          className="text-gray-400 text-sm font-medium hover:text-[#7EC832] transition-colors duration-200 whitespace-nowrap"
        >
          Our gym location
        </a>
        <div className="w-px h-4 bg-white/20" />
        <div className="flex items-center gap-2 group cursor-pointer">
          <span className="text-gray-400 text-sm font-medium group-hover:text-white transition-colors">
            Search
          </span>
          <button
            className="w-8 h-8 bg-[#7EC832] rounded-lg flex items-center justify-center hover:bg-[#6db82a] transition-colors"
            onClick={() => setSearchOpen(!searchOpen)}
          >
            <svg
              className="w-4 h-4 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* CTA Button */}
      <div className="hidden md:block">
        <Link href="/register">
          <button className="bg-[#7EC832] hover:bg-[#6db82a] text-black font-bold text-sm px-6 py-3 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-[#7EC832]/40 hover:scale-105 active:scale-95 tracking-wide uppercase">
            REGI
          </button>
        </Link>
      </div>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden w-10 h-10 bg-black/60 backdrop-blur-md border border-white/10 rounded-xl flex items-center justify-center"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <div className="space-y-1.5">
          <span
            className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </div>
      </button>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="absolute top-full left-4 right-4 mt-2 bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl p-5 flex flex-col gap-4 md:hidden">
          <Link
            href="/"
            className="text-white text-sm font-medium hover:text-[#7EC832] transition-colors"
          >
            Home
          </Link>
          <a
            href="#"
            className="text-gray-400 text-sm font-medium hover:text-[#7EC832] transition-colors"
          >
            Our gym location
          </a>
          <div className="border-t border-white/10 pt-4">
            <Link
              href="/register"
              className="w-full block text-center bg-[#7EC832] hover:bg-[#6db82a] text-black font-bold text-sm px-6 py-3 rounded-xl transition-all uppercase tracking-wide"
            >
              REGI
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
