'use client'
import React from 'react'
import Image from 'next/image'
import { aboutHero } from '@/exports/image-exports'


const AboutSectionOneHero = () => {
  return (
    <div className='flex items-center justify-center self-center'>
      <Image src={aboutHero}  alt='' className='' />
    </div>
  )
}

export default AboutSectionOneHero