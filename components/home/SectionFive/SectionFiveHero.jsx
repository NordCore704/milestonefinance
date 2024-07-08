import { savings } from '@/exports/image-exports'
import Image from 'next/image'
import React from 'react'

const SectionFiveHero = () => {
  return (
    <div className='sm:w-[60%] lg:w-[55%] flex items-center justify-center mt-5 sm:mt-0'>
        <Image src={savings} alt='savings-illustration'/>
    </div>
  )
}

export default SectionFiveHero