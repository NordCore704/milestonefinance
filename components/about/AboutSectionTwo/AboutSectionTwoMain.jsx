import React from 'react'
import { AboutSectionTwoGridOne, AboutSectionTwoGridTwo } from '@/exports'

const AboutSectionTwoMain = () => {
  return (
    <section className='flex flex-col gap-0 sm:flex-row w-full'>
    <AboutSectionTwoGridOne />
    <AboutSectionTwoGridTwo />

    </section>
  )
}

export default AboutSectionTwoMain