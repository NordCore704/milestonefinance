import React from 'react'
import { mockup, purpleMockup } from '@/exports/image-exports'
import Image from 'next/image'

const HomeIntroIllustration = () => {
  return (
    <div className='sm:w-[60%] lg:w-[55%] flex items-center justify-center mt-5 sm:mt-0'>
<Image src={purpleMockup} alt='phone-illustration' className='w-full z-10 ' />
<div className="sm:w-64 sm:h-64 w-1/2 h-1/4 xl:w-80 xl:h-80 absolute lg:w-72 lg:h-72  bg-scheme-purple -skew-x-12"></div>
    </div>
  )
}

export default HomeIntroIllustration