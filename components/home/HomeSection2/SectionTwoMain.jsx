import React from "react";
import { SectionTwoHero, SectionTwoText } from "@/exports";

const SectionTwoMain = () => {
  return (
    <section className="flex flex-col-reverse sm:flex-row gap-5 w-full items-center">
      <SectionTwoHero />
      <SectionTwoText />
    </section>
  );
};

export default SectionTwoMain;
