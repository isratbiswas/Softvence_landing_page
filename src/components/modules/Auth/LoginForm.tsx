import React from "react";
import Link from "next/link";
import { FaGoogle, FaGithub } from "react-icons/fa";

const LoginForm = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4 md:p-10 font-sans">
      <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 bg-black rounded-[40px] overflow-hidden shadow-2xl">
        <div className="hidden lg:block relative bg-[#84cc16] p-12 overflow-hidden">
          <div className="relative z-10 h-full flex flex-col justify-between text-white">
            <h2 className="text-5xl font-black italic leading-none tracking-tighter">
              WELCOME <br /> BACK.
            </h2>
            <p className="text-lg font-medium opacity-90 max-w-xs">
              The only bad workout is the one that didn&apos;t happen.
              Let&apos;s get after it.
            </p>
          </div>

          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/20 rounded-full blur-3xl"></div>
        </div>

        <div className="p-8 md:p-16 flex flex-col justify-center">
          <div className="mb-10">
            <h3 className="text-3xl font-bold text-white mb-2">Login</h3>
            <p className="text-gray-500 text-sm">
              Enter your details to access your dashboard.
            </p>
          </div>

          <form className="space-y-5">
            <div className="space-y-2">
              <label className="text-gray-400 text-xs font-bold uppercase tracking-widest">
                Email Address
              </label>
              <input
                type="email"
                placeholder="name@example.com"
                className="w-full bg-[#1a1a1a] border border-gray-800 rounded-2xl px-6 py-4 text-white placeholder:text-gray-600 focus:border-[#84cc16] focus:outline-none transition-all"
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-gray-400 text-xs font-bold uppercase tracking-widest">
                  Password
                </label>
                <Link
                  href="#"
                  className="text-[#84cc16] text-xs font-bold hover:underline"
                >
                  Forgot?
                </Link>
              </div>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full bg-[#1a1a1a] border border-gray-800 rounded-2xl px-6 py-4 text-white placeholder:text-gray-600 focus:border-[#84cc16] focus:outline-none transition-all"
              />
            </div>

            <button className="w-full bg-[#84cc16] text-white font-bold py-4 rounded-2xl hover:bg-[#65a30d] transition-all shadow-[0_10px_20px_rgba(132,204,22,0.2)] mt-4">
              SIGN IN
            </button>
          </form>

          <div className="mt-8">
            <div className="relative flex items-center justify-center mb-8">
              <div className="w-full border-t border-gray-800"></div>
              <span className="absolute bg-black px-4 text-gray-500 text-xs font-bold uppercase">
                Or continue with
              </span>
            </div>

            {/* <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-3 bg-transparent border border-gray-800 text-white py-3 rounded-2xl hover:bg-white hover:text-black transition-all font-bold text-sm">
                <FaGoogle /> Google
              </button>
              <button className="flex items-center justify-center gap-3 bg-transparent border border-gray-800 text-white py-3 rounded-2xl hover:bg-white hover:text-black transition-all font-bold text-sm">
                <FaGithub /> GitHub
              </button>
            </div> */}
          </div>

          <p className="mt-8 text-center text-gray-500 text-sm">
            Don&apos;t have an account?{" "}
            <Link
              href="/register"
              className="text-[#84cc16] font-bold hover:underline"
            >
              Register Now
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
