/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { api } from "@/lib/api";
import { useState } from "react";
import Link from "next/link";
import { toast } from "sonner";

type FormDataType = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  confirmPassword: string;
  terms: boolean;
};

export default function RegisterForm() {
  const router = useRouter();
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormDataType>();

  const onSubmit = async (data: FormDataType) => {
    setServerError("");
    try {
      const formData = new FormData();
      formData.append("first_name", data.first_name);
      formData.append("last_name", data.last_name);
      formData.append("email", data.email);
      formData.append("password", data.password);
      formData.append("password_confirmation", data.confirmPassword);
      formData.append("terms", String(data.terms));

      const api_key = await api.post("/register", formData);
      localStorage.setItem("verifyEmail", data.email);
      console.log("hello", api_key);
      toast.success("Register successfully");
      // router.push("/verify-otp");
    } catch (err: any) {
      setServerError(err?.response?.data?.message || "Registration failed");
      toast.error("Register failed");
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6 font-sans">
      <div className="max-w-2xl w-full bg-black rounded-[40px] p-8 md:p-16 shadow-2xl relative overflow-hidden border border-gray-900">
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#84cc16] blur-[120px] opacity-10"></div>

        <div className="relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-black text-white italic tracking-tighter mb-3 uppercase">
              CREATE ACCOUNT
            </h2>
            <p className="text-gray-500 text-sm">
              Join the elite community of athletes today.
            </p>
          </div>

          {serverError && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-2xl text-red-500 text-sm text-center">
              {serverError}
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-gray-400 text-[10px] font-black uppercase tracking-[0.2em] ml-1">
                  First Name
                </label>
                <input
                  {...register("first_name", {
                    required: "First name is required",
                  })}
                  placeholder="John"
                  className={`w-full bg-[#111] border ${errors.first_name ? "border-red-500/50" : "border-gray-800"} rounded-2xl px-5 py-4 text-white focus:border-[#84cc16] focus:outline-none transition-all placeholder:text-gray-700`}
                />
                {errors.first_name && (
                  <p className="text-red-500 text-[10px] ml-1">
                    {errors.first_name.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-gray-400 text-[10px] font-black uppercase tracking-[0.2em] ml-1">
                  Last Name
                </label>
                <input
                  {...register("last_name", {
                    required: "Last name is required",
                  })}
                  placeholder="Doe"
                  className={`w-full bg-[#111] border ${errors.last_name ? "border-red-500/50" : "border-gray-800"} rounded-2xl px-5 py-4 text-white focus:border-[#84cc16] focus:outline-none transition-all placeholder:text-gray-700`}
                />
                {errors.last_name && (
                  <p className="text-red-500 text-[10px] ml-1">
                    {errors.last_name.message}
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-gray-400 text-[10px] font-black uppercase tracking-[0.2em] ml-1">
                Email Address
              </label>
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
                })}
                placeholder="john@example.com"
                className={`w-full bg-[#111] border ${errors.email ? "border-red-500/50" : "border-gray-800"} rounded-2xl px-5 py-4 text-white focus:border-[#84cc16] focus:outline-none transition-all placeholder:text-gray-700`}
              />
              {errors.email && (
                <p className="text-red-500 text-[10px] ml-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-gray-400 text-[10px] font-black uppercase tracking-[0.2em] ml-1">
                  Password
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: { value: 8, message: "Min 8 characters" },
                  })}
                  placeholder="••••••••"
                  className={`w-full bg-[#111] border ${errors.password ? "border-red-500/50" : "border-gray-800"} rounded-2xl px-5 py-4 text-white focus:border-[#84cc16] focus:outline-none transition-all placeholder:text-gray-700`}
                />
                {errors.password && (
                  <p className="text-red-500 text-[10px] ml-1">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-gray-400 text-[10px] font-black uppercase tracking-[0.2em] ml-1">
                  Confirm Password
                </label>
                <input
                  type="password"
                  {...register("confirmPassword", {
                    required: "Confirm your password",
                  })}
                  placeholder="••••••••"
                  className={`w-full bg-[#111] border ${errors.confirmPassword ? "border-red-500/50" : "border-gray-800"} rounded-2xl px-5 py-4 text-white focus:border-[#84cc16] focus:outline-none transition-all placeholder:text-gray-700`}
                />
                {errors.confirmPassword && (
                  <p className="text-red-500 text-[10px] ml-1">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>
            </div>

            <div className="pt-2">
              <label className="flex items-start gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  {...register("terms", { required: "You must accept terms" })}
                  className="mt-1 w-4 h-4 accent-[#84cc16] rounded border-gray-800 bg-[#111]"
                />
                <span className="text-gray-500 text-xs leading-relaxed">
                  I agree to the{" "}
                  <span className="text-white font-bold group-hover:underline">
                    Terms of Service
                  </span>{" "}
                  and{" "}
                  <span className="text-white font-bold group-hover:underline">
                    Privacy Policy
                  </span>
                  .
                </span>
              </label>
              {errors.terms && (
                <p className="text-red-500 text-[10px] mt-1 ml-7">
                  {errors.terms.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#84cc16] text-white font-black py-5 rounded-2xl hover:bg-[#65a30d] transition-all tracking-widest shadow-[0_10px_20px_rgba(132,204,22,0.2)] disabled:opacity-50 disabled:cursor-not-allowed mt-4 uppercase"
            >
              {isSubmitting ? "Creating Account..." : "Become a Champion"}
            </button>
          </form>

          <p className="mt-10 text-center text-gray-500 text-sm">
            Already a member?{" "}
            <Link
              href="/login"
              className="text-[#84cc16] font-bold hover:underline"
            >
              Sign In Instead
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
