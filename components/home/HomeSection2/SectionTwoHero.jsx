'use client'
import React from 'react'
import Image from 'next/image'
import { laptopWoman, returns } from '@/exports/image-exports'

const SectionTwoHero = () => {
  return (
    <div className='w-full sm:w-1/2 relative'>
        <div className="w-full z-20 relative">
        <Image src={laptopWoman} alt={'woman with laptop'} className={'w-full z-20'}/>
        </div>
       
        <Image src={returns} alt={'stock returns'} className={'w-1/3 sm:w-32 z-20 lg:w-1/3 md:left-5 absolute shadow-md rounded-md top-5'}/>
        <div className="sm:w-64 sm:h-64 w-1/2 h-36 xl:w-80 xl:h-1/2 absolute bottom-0 lg:w-72 lg:h-72 sm:right-0 right-5 bg-scheme-purpleThree skew-x-12 opacity-25"></div>
    </div>
  )
}

export default SectionTwoHero