import React from 'react'
import { ourVision } from '@/exports/image-exports'
import Image from 'next/image'

const AboutSectionThreeHero = () => {
  return (
    <div className='rounded-lg lg:w-[40%]'>
        <Image src={ourVision} alt='' className='rounded-lg w-full'/>
    </div>
  )
}

export default AboutSectionThreeHero