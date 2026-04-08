/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { api } from "@/lib/api";
import { useRouter } from "next/navigation";

type OtpFormType = {
  otp: string;
};

export default function OtpForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [serverError, setServerError] = useState("");
  const [timer, setTimer] = useState(60);
  const [resending, setResending] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { isSubmitting, errors },
  } = useForm<OtpFormType>();

  const otpValue = watch("otp") || "";

  useEffect(() => {
    const storedEmail = localStorage.getItem("verifyEmail");
    if (storedEmail) setEmail(storedEmail);
  }, []);

  useEffect(() => {
    if (timer <= 0) return;
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);

  const handleOtpChange = (value: string) => {
    const digitsOnly = value.replace(/\D/g, "").slice(0, 6);
    setValue("otp", digitsOnly);
  };

  const onSubmit = async (data: OtpFormType) => {
    setServerError("");

    try {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("otp", data.otp);

      await api.post("/verify_otp", formData);

      localStorage.removeItem("verifyEmail");
      router.push("/login");
    } catch (err: any) {
      setServerError(err?.response?.data?.message || "OTP verification failed");
    }
  };

  const resendOtp = async () => {
    if (!email) return;

    try {
      setResending(true);

      const formData = new FormData();
      formData.append("email", email);

      await api.post("/resend_otp", formData);

      setTimer(60);
    } catch {
      setServerError("Failed to resend OTP");
    } finally {
      setResending(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black p-4 sm:p-6">
      <div className="w-full max-w-sm sm:max-w-md bg-black rounded-3xl sm:rounded-[40px] p-6 sm:p-8 md:p-10 shadow-2xl border border-gray-900 relative overflow-hidden text-center">
        <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-[#84cc16] blur-[80px] sm:blur-[100px] opacity-10"></div>

        <div className="relative z-10">
          <div className="mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white italic uppercase">
              Verify OTP
            </h2>

            <p className="text-gray-500 text-xs sm:text-sm mt-2 leading-relaxed">
              Enter the 6-digit code sent to <br />
              <span className="text-white font-bold">
                {email || "your email"}
              </span>
            </p>
          </div>

          {serverError && (
            <div className="mb-5 p-3 sm:p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500 text-[11px] sm:text-xs font-bold uppercase">
              {serverError}
            </div>
          )}

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6 sm:space-y-8"
          >
            <input
              {...register("otp", {
                required: "OTP is required",
                minLength: { value: 6, message: "OTP must be 6 digits" },
              })}
              type="text"
              maxLength={6}
              onChange={(e) => handleOtpChange(e.target.value)}
              className="absolute opacity-0"
            />

            <div className="flex justify-between gap-2 sm:gap-3">
              {[...Array(6)].map((_, index) => (
                <div
                  key={index}
                  className={`w-10 h-12 sm:w-12 sm:h-14 md:w-14 md:h-16 flex items-center justify-center bg-[#111] border ${
                    otpValue.length === index
                      ? "border-[#84cc16]"
                      : "border-gray-800"
                  } rounded-xl text-white text-lg sm:text-xl font-black`}
                >
                  {otpValue[index] || ""}
                </div>
              ))}
            </div>

            {errors.otp && (
              <p className="text-red-500 text-[10px] font-bold uppercase">
                {errors.otp.message}
              </p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#84cc16] text-white font-black py-4 sm:py-5 rounded-xl sm:rounded-2xl hover:bg-[#65a30d] transition-all tracking-widest shadow-lg disabled:opacity-50 uppercase italic text-sm sm:text-base"
            >
              {isSubmitting ? "Verifying..." : "Confirm Code"}
            </button>
          </form>

          <div className="mt-8 sm:mt-10 pt-5 border-t border-gray-900">
            {timer > 0 ? (
              <p className="text-gray-600 text-[10px] uppercase tracking-widest">
                Resend in <span className="text-[#84cc16]">{timer}s</span>
              </p>
            ) : (
              <button
                onClick={resendOtp}
                disabled={resending}
                className="text-[#84cc16] text-[10px] uppercase tracking-widest hover:underline"
              >
                {resending ? "Sending..." : "Resend OTP"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
