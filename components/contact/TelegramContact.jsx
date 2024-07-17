import Link from 'next/link'
import React from 'react'
import { FaTelegram } from 'react-icons/fa6'

const TelegramContact = () => {
  return (
    <Link href={'https://t.me/milestonefinance'} className='rounded-full w-12 h-12 fixed left-5 bottom-2 bg-white z-50'>
        <FaTelegram className='text-blue-400 text-5xl hover:text-scheme-purple duration-300 transition-colors' />
    </Link>
  )
}

export default TelegramContact