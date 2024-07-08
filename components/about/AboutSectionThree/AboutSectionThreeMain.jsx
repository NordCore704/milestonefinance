import React from 'react'
import { AboutSectionThreeText, AboutSectionThreeHero } from '@/exports'

const AboutSectionThreeMain = () => {
  return (
    <section className='flex flex-col lg:flex-row gap-5 p-5 items-center justify-center'>
        <AboutSectionThreeText />
        <AboutSectionThreeHero />
    </section>
  )
}

export default AboutSectionThreeMain