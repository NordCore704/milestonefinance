import Image from "next/image";
import { HomeIntro, PartnersMain, SectionFiveMain, SectionFourMain, SectionTwoMain, TestimonialsMain } from "@/exports";

export default function Home() {
  return (
    <main className="flex flex-col gap-5 bg-scheme-white p-4">
      <HomeIntro />
      <SectionTwoMain />
      <PartnersMain />
      {/* <SectionFourMain /> */}
      <TestimonialsMain />
      <SectionFiveMain />
    </main>
  );
}
