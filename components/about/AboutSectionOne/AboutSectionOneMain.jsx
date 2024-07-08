import React from "react";
import { AboutSectionOneHero, AboutSectionOneText } from "@/exports";

const AboutSectionOneMain = () => {
  return (
    <section className='flex flex-col-reverse gap-5 p-5'>
      <AboutSectionOneHero />
      <AboutSectionOneText />
    </section>
  );
};

export default AboutSectionOneMain;
