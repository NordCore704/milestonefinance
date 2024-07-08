import { contactHero } from '@/exports/image-exports'
import Image from 'next/image'
import React from 'react'

const ContactHero = () => {
  return (
    <div className='self-center'>
        <Image src={contactHero} alt='' className='' />
    </div>
  )
}

export default ContactHero