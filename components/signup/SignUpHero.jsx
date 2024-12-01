'use client'
import React from 'react'
import { signupHero } from '@/exports/image-exports'
import Image from 'next/image'

const SignUpHero = () => {
  return (
    <div className='sm:w-[50%] self-center'>
      <Image src={signupHero} alt='' className='w-full' />
    </div>
  )
}

export default SignUpHero