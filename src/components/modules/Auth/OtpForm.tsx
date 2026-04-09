/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useForm } from "react-hook-form";
import { useEffect, useRef, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { api } from "@/lib/api";
import { toast } from "sonner";

type FormType = {
  otp: string;
};

export default function OtpPage() {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement | null>(null);

  const hasSubmittedRef = useRef(false);

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const { register, setValue, watch } = useForm<FormType>({
    defaultValues: { otp: "" },
  });

  const otp = watch("otp");

  // ✅ Load email
  useEffect(() => {
    const stored = localStorage.getItem("verifyEmail");

    if (!stored) {
      router.push("/register");
      return;
    }

    setEmail(stored);
  }, [router]);

  // ✅ Focus input
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // ✅ Handle OTP input
  const handleChange = (value: string) => {
    const clean = value.replace(/\D/g, "").slice(0, 6);

    setValue("otp", clean, {
      shouldValidate: true,
      shouldDirty: true,
    });
  };

  // ✅ Verify OTP API
  const verifyOtp = useCallback(
    async (otpValue: string) => {
      try {
        setLoading(true);

        const formData = new FormData();
        formData.append("email", email);
        formData.append("otp", otpValue);

        await api.post("/verify_otp", formData);

        toast.success("OTP verified 🎉");

        localStorage.removeItem("verifyEmail");

        router.push("/login");
      } catch (err: any) {
        const message = err?.response?.data?.message || "Invalid OTP";
        toast.error(message);

        setLoading(false);
        hasSubmittedRef.current = false;

        setValue("otp", "", {
          shouldValidate: true,
          shouldDirty: true,
        });

        inputRef.current?.focus();
      }
    },
    [email, router, setValue],
  );

  // ✅ AUTO SUBMIT (FIXED)
  useEffect(() => {
    if (otp.length === 6 && email && !hasSubmittedRef.current) {
      hasSubmittedRef.current = true;

      // small delay ensures state is fully updated
      setTimeout(() => {
        verifyOtp(otp);
      }, 0);
    }
  }, [otp, email, verifyOtp]);

  const { ref: formRef, ...rest } = register("otp");

  return (
    <div className="min-h-screen flex items-center justify-center text-white">
      <div className="w-full max-w-sm p-8 bg-[#111] rounded-2xl text-center">
        <h2 className="text-2xl font-bold mb-4">Verify OTP</h2>

        {/* Email Display */}
        <div className="mb-6 space-y-2">
          <p className="text-gray-400 text-sm">Code sent to:</p>

          <p className="text-white font-semibold break-all">{email}</p>
        </div>

        {/* OTP Input */}
        <div className="relative" onClick={() => inputRef.current?.focus()}>
          <input
            {...rest}
            ref={(el) => {
              formRef(el);
              inputRef.current = el;
            }}
            value={otp}
            type="text"
            inputMode="numeric"
            autoComplete="one-time-code"
            maxLength={6}
            onChange={(e) => handleChange(e.target.value)}
            className="absolute opacity-0 w-0 h-0"
          />

          {/* OTP Boxes */}
          <div className="flex justify-between gap-2 mb-6 cursor-text">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className={`w-10 h-12 flex items-center justify-center border rounded-lg text-lg font-bold transition ${
                  otp.length === i
                    ? "border-green-500 bg-green-500/10"
                    : "border-gray-700"
                }`}
              >
                {otp[i] || ""}
              </div>
            ))}
          </div>
        </div>

        {/* Loading */}
        {loading && (
          <p className="text-sm text-green-400 animate-pulse">Verifying...</p>
        )}
      </div>
    </div>
  );
}
