import React from "react";
import { SectionFiveHero, SectionFiveText } from "@/exports";

const SectionFiveMain = () => {
  return (
    <section className='flex flex-col gap-3 mt-14 w-full sm:flex-row'>
      <SectionFiveHero />
      <SectionFiveText />
    </section>
  );
};

export default SectionFiveMain;
