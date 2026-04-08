/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useForm } from "react-hook-form";
import { api } from "@/lib/api";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

type LoginType = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const router = useRouter();
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginType>();

  const onSubmit = async (data: LoginType) => {
    setError("");
    try {
      const formData = new FormData();
      formData.append("email", data.email);
      formData.append("password", data.password);
      formData.append("remember_me", "true");

      const res = await api.post("/login", formData);
      const token = res.data?.token;

      if (!token) throw new Error("Token not found");

      document.cookie = `token=${token}; path=/; max-age=864000`;
      router.push("/");
    } catch (err: any) {
      setError(err?.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black p-4 sm:p-6">
      <div className="w-full max-w-sm sm:max-w-md md:max-w-lg bg-black rounded-3xl sm:rounded-[40px] p-6 sm:p-8 md:p-10 shadow-2xl border border-gray-900 relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-[#84cc16] blur-[80px] sm:blur-[100px] opacity-10"></div>

        <div className="relative z-10">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white italic tracking-tighter uppercase">
              Welcome Back
            </h2>
            <p className="text-gray-500 text-xs sm:text-sm mt-2">
              Enter your credentials to access your dashboard.
            </p>
          </div>

          {/* Error */}
          {error && (
            <div className="mb-5 p-3 sm:p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500 text-[11px] sm:text-xs text-center font-bold">
              {error}
            </div>
          )}

          {/* Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-5 sm:space-y-6"
          >
            {/* Email */}
            <div className="space-y-2">
              <label className="text-gray-400 text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] ml-1">
                Email Address
              </label>

              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email",
                  },
                })}
                placeholder="name@example.com"
                className={`w-full bg-[#111] border ${
                  errors.email ? "border-red-500/50" : "border-gray-800"
                } rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 text-white focus:border-[#84cc16] outline-none transition placeholder:text-gray-700`}
              />

              {errors.email && (
                <p className="text-red-500 text-[10px] ml-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div className="space-y-2">
              <div className="flex justify-between items-center px-1">
                <label className="text-gray-400 text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em]">
                  Password
                </label>

                <Link
                  href="#"
                  className="text-[#84cc16] text-[9px] sm:text-[10px] font-black uppercase tracking-widest hover:underline"
                >
                  Forgot?
                </Link>
              </div>

              <input
                type="password"
                {...register("password", {
                  required: "Password is required",
                })}
                placeholder="••••••••"
                className={`w-full bg-[#111] border ${
                  errors.password ? "border-red-500/50" : "border-gray-800"
                } rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 text-white focus:border-[#84cc16] outline-none transition placeholder:text-gray-700`}
              />

              {errors.password && (
                <p className="text-red-500 text-[10px] ml-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#84cc16] text-white font-black py-4 sm:py-5 rounded-xl sm:rounded-2xl hover:bg-[#65a30d] transition-all tracking-widest shadow-lg disabled:opacity-50 uppercase italic text-sm sm:text-base"
            >
              {isSubmitting ? "Authenticating..." : "Login Now"}
            </button>
          </form>

          {/* Divider */}
          <div className="mt-8 sm:mt-10">
            <div className="relative flex items-center justify-center mb-6 sm:mb-8">
              <div className="w-full border-t border-gray-800"></div>
              <span className="absolute bg-black px-3 sm:px-4 text-gray-600 text-[9px] sm:text-[10px] font-black uppercase tracking-widest">
                Or Continue With
              </span>
            </div>
          </div>

          {/* Footer */}
          <p className="mt-8 sm:mt-10 text-center text-gray-300 text-xs">
            Not a member yet?{" "}
            <Link
              href="/register"
              className="text-[#84cc16] font-black hover:underline ml-1"
            >
              Join The Elite
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
