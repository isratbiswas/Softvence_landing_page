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
    formState: { isSubmitting },
  } = useForm<OtpFormType>();

  // Get email from localStorage
  useEffect(() => {
    const storedEmail = localStorage.getItem("verifyEmail");
    if (storedEmail) setEmail(storedEmail);
  }, []);

  // Timer countdown
  useEffect(() => {
    if (timer <= 0) return;

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  // OTP input auto move + restrict digits
  const handleOtpChange = (value: string) => {
    const digitsOnly = value.replace(/\D/g, "").slice(0, 6);
    setValue("otp", digitsOnly);
  };

  const onSubmit = async (data: OtpFormType) => {
    setServerError("");

    try {
      await api.post("/verify-otp", {
        email,
        otp: data.otp,
      });

      router.push("/login");
    } catch (err: any) {
      setServerError(err?.response?.data?.message || "OTP verification failed");
    }
  };

  const resendOtp = async () => {
    if (!email) return;

    try {
      setResending(true);

      await api.post("/resend-otp", { email });

      setTimer(60);
    } catch (err: any) {
      setServerError("Failed to resend OTP");
    } finally {
      setResending(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-2xl shadow text-center">
      <h2 className="text-2xl font-bold mb-4">Verify OTP</h2>

      <p className="text-sm text-gray-500 mb-4">
        Enter the 6-digit code sent to your email
      </p>

      {serverError && (
        <p className="text-red-500 text-sm mb-3">{serverError}</p>
      )}

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("otp", {
            required: "OTP is required",
            minLength: {
              value: 6,
              message: "OTP must be 6 digits",
            },
          })}
          maxLength={6}
          onChange={(e) => handleOtpChange(e.target.value)}
          placeholder="Enter OTP"
          className="w-full p-3 border rounded-lg text-center tracking-widest text-lg"
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full mt-5 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
        >
          {isSubmitting ? "Verifying..." : "Verify OTP"}
        </button>
      </form>

      {/* Resend OTP */}
      <div className="mt-5 text-sm">
        {timer > 0 ? (
          <p className="text-gray-500">Resend OTP in {timer}s</p>
        ) : (
          <button
            onClick={resendOtp}
            disabled={resending}
            className="text-blue-600 hover:underline"
          >
            {resending ? "Sending..." : "Resend OTP"}
          </button>
        )}
      </div>
    </div>
  );
}
