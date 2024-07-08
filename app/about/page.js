import React from 'react'
import { AboutSectionFourMain, AboutSectionOneMain, AboutSectionThreeMain, AboutSectionTwoMain } from '@/exports';


export default function About() {
    return (
      <main className="flex flex-col gap-5 bg-scheme-white">
       <AboutSectionOneMain />
       <AboutSectionTwoMain />
       <AboutSectionThreeMain />
       <AboutSectionFourMain />
      </main>
    );
  }