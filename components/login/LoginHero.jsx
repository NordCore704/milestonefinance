import React from 'react'
import { loginHero } from '@/exports/image-exports'
import Image from 'next/image'

const LoginHero = () => {
  return (
    <div className='sm:w-[50%] self-center'>
      <Image src={loginHero} alt='' className='w-full' />
    </div>
  )
}

export default LoginHero