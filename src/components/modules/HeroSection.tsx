import {
  FaInstagram,
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
} from "react-icons/fa6";
import { GiWalkingBoot } from "react-icons/gi";
import { GrYoga } from "react-icons/gr";
import { MdSportsGymnastics } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import Image from "next/image";
import { FaLongArrowAltRight } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="relative bg-white min-h-screen p-2 md:p-4 flex flex-col lg:flex-row gap-4 overflow-hidden">
      {/* LEFT COLUMN: Green Specialty Bar */}
      {/* Removed hardcoded mt-88; used lg:w-[320px] for fixed width on desktop only */}
      <div className="w-full lg:w-[320px] bg-[#7EC832] rounded-[30px] md:rounded-[40px] p-6 md:p-8 flex flex-col justify-end relative lg:rounded-se-[150px] overflow-hidden min-h-[400px] lg:min-h-full">
        {/* Subtle decorative pattern */}
        <div className="absolute top-6 left-6 md:top-10 md:left-6 opacity-20 text-2xl md:text-4xl">
          ●●●
          <br />
          ●●●
        </div>

        <h4 className="text-white font-black text-lg md:text-xl mb-6 md:mb-8 tracking-wider">
          OUR SPECIALTY
        </h4>

        <div className="space-y-3 md:space-y-4">
          {[
            { icon: <GiWalkingBoot />, title: "Ground running" },
            { icon: <GrYoga />, title: "Yoga Assistance" },
            { icon: <MdSportsGymnastics />, title: "Personal Trainer" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 md:gap-4 bg-white/20 p-3 md:p-4 rounded-xl md:rounded-2xl border border-white/10 backdrop-blur-sm"
            >
              <div className="text-white text-2xl md:text-3xl border border-white/30 p-1.5 md:p-2 rounded-lg md:rounded-xl">
                {item.icon}
              </div>
              <h5 className="text-white font-bold text-xs md:text-sm">
                {item.title}
              </h5>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT COLUMN: Main Hero Image and Text */}
      {/* RIGHT COLUMN: Main Hero Image and Text */}
      <div className="flex-1 bg-black rounded-[30px] md:rounded-[40px] relative overflow-hidden flex flex-col justify-end items-center p-6 md:p-12 lg:p-16 min-h-[500px] lg:min-h-full">
        {/* Social Icons - Top Left */}
        <div className="absolute top-6 left-6 md:top-8 md:left-8 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 text-white z-20">
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest opacity-70">
            Follow On:
          </span>
          <div className="flex gap-4">
            <FaFacebookF className="hover:text-[#7EC832] cursor-pointer transition-colors text-sm md:text-base" />
            <FaInstagram className="hover:text-[#7EC832] cursor-pointer transition-colors text-sm md:text-base" />
            <FaXTwitter className="hover:text-[#7EC832] cursor-pointer transition-colors text-sm md:text-base" />
            <FaLinkedinIn className="hover:text-[#7EC832] cursor-pointer transition-colors text-sm md:text-base" />
          </div>
        </div>

        {/* Hero Image Container */}
        <div className="absolute inset-0 flex justify-center items-center lg:items-start pt-10">
          <div className="relative w-full h-[70%] md:h-[85%] lg:h-[95%]">
            <Image
              src="/assets/hero.png"
              fill
              alt="Bodybuilders"
              className="object-contain grayscale contrast-125 brightness-90"
              priority
            />
          </div>
        </div>

        {/* Typography and CTA - CENTERED FOR DESKTOP */}
        <div className="relative z-10 w-full flex flex-col items-center">
          <h1 className="text-center leading-[0.9] select-none mb-8 md:mb-0">
            {/* "POWER YOUR" */}
            <span
              className="block text-4xl sm:text-6xl md:text-7xl lg:text-[90px] xl:text-[110px] font-black text-transparent"
              style={{ WebkitTextStroke: "1px rgba(255,255,255,0.6)" }}
            >
              POWER YOUR
            </span>

            {/* "POTENTIAL" */}
            <span className="relative block text-5xl sm:text-7xl md:text-8xl lg:text-[110px] xl:text-[140px] font-black tracking-tighter">
              <span
                className="absolute inset-0 text-transparent"
                style={{ WebkitTextStroke: "1px rgba(255,255,255,0.8)" }}
              >
                POTENTIAL
              </span>
              <span
                className="relative text-white"
                style={{
                  clipPath: "polygon(0 55%, 100% 55%, 100% 100%, 0 100%)",
                }}
              >
                POTENTIAL
              </span>
            </span>
          </h1>

          {/* Buttons Container - Centered */}
          <div className="flex flex-wrap items-center gap-3 mt-6 md:mt-10 justify-center">
            <button className="flex items-center gap-4 border border-white/40 bg-white/5 backdrop-blur-md rounded-xl md:rounded-2xl px-6 md:px-8 py-3 md:py-4 text-white hover:bg-white hover:text-black transition-all group">
              <span className="font-bold tracking-widest text-xs md:text-sm">
                SHOP NOW
              </span>
              <FaLongArrowAltRight className="text-lg md:text-xl group-hover:translate-x-2 transition-transform" />
            </button>

            <button className="w-12 h-12 md:w-14 md:h-14 border border-white/40 bg-white/5 backdrop-blur-md rounded-xl md:rounded-2xl flex items-center justify-center text-white hover:bg-[#7EC832] hover:border-[#7EC832] transition-colors">
              <IoLocationSharp className="text-xl md:text-2xl" />
            </button>
          </div>
        </div>

        {/* Decorative dots - Top Right */}
        <div className="absolute top-6 right-6 md:top-10 md:right-10 flex flex-col gap-1 opacity-20">
          {[...Array(3)].map((_, row) => (
            <div key={row} className="flex gap-1">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full"
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
