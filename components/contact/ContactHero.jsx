import { contactHero } from '@/exports/image-exports'
import Image from 'next/image'
import React from 'react'

const ContactHero = () => {
  return (
    <div className='self-center w-[100%] sm:w-[60%] h-[50%] sm:h-[100%]'>
        <Image src={contactHero} alt='' className='w-full h-full' />
    </div>
  )
}

export default ContactHero