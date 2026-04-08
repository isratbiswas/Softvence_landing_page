import NewsLatterSection from "@/components/modules/NewsLatterSection";
import ReviewSection from "@/components/modules/ReviewSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <ReviewSection />
      <NewsLatterSection />
    </div>
  );
}
