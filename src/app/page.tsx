"use client";
import HeroSection from "@/components/modules/HeroSection";
import NewsLatterSection from "@/components/modules/NewsLatterSection";
import ProductSection from "@/components/modules/ProductSection";
import ReviewSection from "@/components/modules/ReviewSection";
import TrainingSection from "@/components/modules/TrainingSection";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("token="));

    if (!token) {
      router.push("/register");
    }
  }, []);
  return (
    <main className="bg-background text-foreground min-h-screen">
      <HeroSection />
      <ProductSection />
      <TrainingSection />
      <ReviewSection />
      <NewsLatterSection />
    </main>
  );
}
