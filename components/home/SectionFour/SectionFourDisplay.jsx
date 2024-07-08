import React from 'react'
import Image from 'next/image'
import { houseFour, houseOne, houseThree, houseTwo } from '@/exports/image-exports'

const SectionFourDisplay = () => {
  return (
    <div className='grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4'>
        <Image src={houseOne} className='rounded-lg' alt='houses-display' />
        <Image src={houseTwo} className='rounded-lg' alt='houses-display' />
        <Image src={houseThree} className='rounded-lg' alt='houses-display' />
        <Image src={houseFour} className='rounded-lg' alt='houses-display' />
    </div>
  )
}

export default SectionFourDisplay