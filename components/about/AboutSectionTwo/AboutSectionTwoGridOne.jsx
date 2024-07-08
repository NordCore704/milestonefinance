import Image from 'next/image'
import React from 'react'
import { joyMan, joyWoman } from '@/exports/image-exports'

const AboutSectionTwoGridOne = () => {
  return (
    <div className='bg-opacity-25 flex flex-col gap-4 bg-scheme-purpleThree px-3 pt-3 sm:w-1/2 justify-between'>
      <div className="flex flex-col gap-3"> 
    <h3 className="text-2xl font-bold text-center">
      Our Mission
    </h3>
    <p className="text-center">
    Our mission at Milestone Financial Management is to empower our clients with expert financial guidance and innovative investment strategies, fostering long-term growth and financial security. We strive to provide personalized investment solutions that align with our clients' unique needs and goals, ensuring that they can navigate the complexities of the financial world with confidence. Through our commitment to excellence and continuous improvement, we aim to deliver superior value and performance, helping our clients achieve their financial aspirations and build a prosperous future.
    </p>
      </div>
      <Image src={joyWoman} alt='person' className='self-center' />
    </div>
  )
}

export default AboutSectionTwoGridOne