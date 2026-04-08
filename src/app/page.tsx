import NewsLatterSection from "@/components/modules/NewsLatterSection";
import ReviewSection from "@/components/modules/ReviewSection";
import TrainingSection from "@/components/modules/TrainingSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <TrainingSection />
      <ReviewSection />
      <NewsLatterSection />
    </div>
  );
}
