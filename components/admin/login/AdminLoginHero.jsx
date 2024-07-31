import { adminLoginHero, adminSigupHero } from '@/exports/image-exports'
import Image from 'next/image'
import React from 'react'

const AdminLoginHero = () => {
  return (
    <div className='sm:w-[50%] self-center'>
    <Image src={adminSigupHero} alt='' className='w-full' />
  </div>
  )
}

export default AdminLoginHero