import React from "react";
import { SectionFourText, SectionFourDisplay } from "@/exports";

const SectionFourMain = () => {
  return (
    <section className="flex flex-col gap-5 w-full items-center">
      <SectionFourText />
      <SectionFourDisplay />
    </section>
  );
};

export default SectionFourMain;
