import { logo } from '@/exports/image-exports'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const date = new Date()

const Footer = () => {
  return (
    <footer className='p-5 bg-scheme-purpleThree flex flex-col gap-5 bg-opacity-25'>
      <div className="flex gap-2 items-center">
        <Image src={logo} alt='logo' className='w-10'/>
        <p className="text-xl font-semibold">Milestone Financial Management</p>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-lg font-semibold">About us</p>
        <p className="">Milestone Financial Management is at your service with its user-friendly features secure infrastructure and applications that make a difference. Trade, Invest, Earn, Learn. </p>
      </div>
      <div className="flex flex-col gap-2">
      <p className="text-lg font-semibold">Quick Links</p>
      <div className="flex gap-3 flex-col">
     
     <Link href={'/'} className='hover:text-scheme-purple transition-colors duration-300'>Home</Link>
     <Link href={'/contact'} className='hover:text-scheme-purple transition-colors duration-300'>About</Link>
     <Link href={'/about'} className='hover:text-scheme-purple transition-colors duration-300'>Contact</Link>
     <Link href={'/auth/signup'} className='hover:text-scheme-purple transition-colors duration-300'>Log In</Link>
   </div>
      </div>

      <p className="text-sm">Milestone Financial Management, © {date.getFullYear()} All Rights Reserved</p>
    </footer>
  )
}

export default Footer