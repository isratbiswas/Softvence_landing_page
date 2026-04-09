"use client";

import Link from "next/link";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="absolute top-4 left-0 mt-4 right-0 z-50 px-4 sm:px-6 lg:px-12">
      <div className="flex items-center justify-between">
        <div className="bg-white p-2 rounded-full shadow-lg">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#7EC832] rounded-full flex items-center justify-center">
            <div className="grid grid-cols-2 gap-1">
              <div className="w-2 h-2 border-2 border-white rounded-sm rotate-45" />
              <div className="w-2 h-2 border-2 border-white rounded-sm rotate-45" />
              <div className="w-2 h-2 border-2 border-white rounded-sm rotate-45" />
              <div className="w-2 h-2 border-2 border-white rounded-sm rotate-45" />
            </div>
          </div>
        </div>

        <div className="hidden md:flex items-center bg-black/90 border border-white/20 rounded-full px-6 lg:px-8 py-3 gap-6 lg:gap-8">
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

          <div className="flex items-center bg-white/10 rounded-full pl-3 pr-1 py-1 gap-2">
            <span className="text-gray-300 text-xs font-medium hidden lg:block">
              Search
            </span>
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
            <button className="bg-[#7EC832] text-white font-bold text-sm lg:text-lg px-6 lg:px-10 py-3 lg:py-4 rounded-full hover:bg-[#6db82a] transition-all shadow-xl uppercase">
              Register
            </button>
          </Link>
        </div>

        <button
          className="md:hidden p-3 bg-black rounded-full"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="w-5 h-0.5 bg-white mb-1.5" />
          <div className="w-5 h-0.5 bg-white mb-1.5" />
          <div className="w-5 h-0.5 bg-white" />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden mt-4 bg-black/95 border border-white/20 rounded-2xl p-6 space-y-4">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="block text-white hover:text-[#7EC832]"
          >
            Home
          </Link>

          <Link
            href="/locations"
            onClick={() => setMenuOpen(false)}
            className="block text-white hover:text-[#7EC832]"
          >
            Our gym location
          </Link>

          <Link
            href="/register"
            onClick={() => setMenuOpen(false)}
            className="block bg-[#7EC832] text-center text-white font-semibold py-3 rounded-full hover:bg-[#6db82a] transition"
          >
            Register
          </Link>

          <div className="flex items-center bg-white/10 rounded-full px-4 py-2 gap-2">
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none text-white text-sm w-full"
            />
            <button className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <FaSearch />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
