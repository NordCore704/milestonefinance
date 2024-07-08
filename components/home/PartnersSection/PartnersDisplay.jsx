import { wsj, ethereum, binance, motleyFool, yahooFinance, nasdaq, deriv, optimism, } from '@/exports/image-exports'
import Image from 'next/image'
import React from 'react'

const PartnersDisplay = () => {
  return (
    <div className='flex flex-col gap-5 sm:w-[60%] '>
        <div className="flex gap-5 sm:gap-8 self-center">
        <div className="w-12 h-12 sm:w-20 sm:h-20 md:h-28 md:w-28 flex items-center justify-center rounded-full shadow-md">
        <Image src={wsj} className='' alt='wsj'/>
        </div>
        <div className="w-12 h-12 sm:w-20 sm:h-20 md:h-28 md:w-28 flex items-center justify-center rounded-full shadow-md">
        <Image src={ethereum} className='p-2' alt='wsj'/>
        </div>
        <div className="w-12 h-12 sm:w-20 sm:h-20 md:h-28 md:w-28 flex items-center justify-center rounded-full shadow-md">
        <Image src={binance} className='' alt='wsj'/>
        </div>
        </div>

        <div className="flex gap-5 sm:gap-8 self-center">
        <div className="w-12 h-12 sm:w-20 sm:h-20 md:h-28 md:w-28 flex items-center justify-center rounded-full shadow-md">
        <Image src={motleyFool} className='' alt='wsj'/>
        </div>

        <div className="w-12 h-12 sm:w-20 sm:h-20 md:h-28 md:w-28 flex items-center justify-center rounded-full shadow-md self-center">
        <Image src={nasdaq} className=' p-2' alt='wsj'/>
        </div>
        </div>

        <div className="flex gap-5 sm:gap-8 self-center">
        <div className="w-12 h-12 sm:w-20 sm:h-20 md:h-28 md:w-28 flex items-center justify-center rounded-full shadow-md">
        <Image src={optimism} className='' alt='wsj'/>
        </div>
        <div className="w-12 h-12 sm:w-20 sm:h-20 md:h-28 md:w-28 flex items-center justify-center rounded-full shadow-md">
        <Image src={yahooFinance} className='' alt='wsj'/>
        </div>
        <div className="w-12 h-12 sm:w-20 sm:h-20 md:h-28 md:w-28 flex items-center justify-center rounded-full shadow-md">
        <Image src={deriv} className='rounded-full' alt='wsj'/>
        </div>
        </div>

        
    </div>
  )
}

export default PartnersDisplay