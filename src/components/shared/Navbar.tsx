"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="absolute lg:mt-8 top-4 left-0 right-0 z-50 flex items-center justify-between px-6">
      <div className="bg-white p-2 rounded-full shadow-lg">
        <div className="w-12 h-12 bg-[#7EC832] rounded-full flex items-center justify-center">
          <div className="grid grid-cols-2 gap-1">
            <div className="w-2 h-2 border-2 border-white rounded-sm rotate-45" />
            <div className="w-2 h-2 border-2 border-white rounded-sm rotate-45" />
            <div className="w-2 h-2 border-2 border-white rounded-sm rotate-45" />
            <div className="w-2 h-2 border-2 border-white rounded-sm rotate-45" />
          </div>
        </div>
      </div>

      <div className="hidden md:flex items-center bg-black/90 border border-white/20 rounded-full px-8 py-3 gap-8">
        <Link
          href="/"
          className="text-white text-sm font-medium hover:text-[#7EC832] transition-colors"
        >
          Home
        </Link>

        <Link
          href="/locations"
          className="text-white text-sm font-medium hover:text-[#7EC832] transition-colors whitespace-nowrap"
        >
          Our gym location
        </Link>

        <div className="w-px h-5 bg-white/30" />

        <div className="flex items-center bg-white/10 rounded-full pl-4 pr-1 py-1 gap-3">
          <span className="text-gray-300 text-xs font-medium">Search</span>
          <button className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
            <svg
              className="w-4 h-4 text-white"
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

      <div className="hidden md:block">
        <Link href="/register">
          <button className="bg-[#7EC832] text-white font-black text-lg px-12 py-5 rounded-full hover:bg-[#6db82a] transition-all shadow-xl uppercase tracking-tighter">
            REGISTER
          </button>
        </Link>
      </div>

      <button
        className="md:hidden p-3 bg-black rounded-full"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <div className="w-6 h-0.5 bg-white mb-1.5" />
        <div className="w-6 h-0.5 bg-white mb-1.5" />
        <div className="w-6 h-0.5 bg-white" />
      </button>
    </nav>
  );
}
