import React from 'react'
import { ton, binance, bitcoin, solana, tether, ethereum, litecoin, ripple } from '@/exports/image-exports'
import Image from 'next/image'


const CryptoGrid = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 w-full gap-4">
    <div className="shadow-md rounded-md p-2 flex flex-col justify-between gap-5">
        <Image src={bitcoin} className="w-20 self-center" alt="crypto"/>
        <div className="flex justify-between">
        <label htmlFor='bitcoin' className="font-semibold">Bitcoin</label>
        <input type="radio" name="bitcoin" className="" />
        </div>
       
    </div>
    <div className="shadow-md rounded-md p-2 flex flex-col justify-between gap-5">
        <Image src={ethereum} className="w-20 self-center" alt="crypto"/>
        <div className="flex justify-between">
        <label htmlFor='ethereum' className="font-semibold">Ethereum</label>
        <input type="radio" name="ethereum" className="" />
        </div>
       
    </div>
    <div className="shadow-md rounded-md p-2 flex flex-col justify-between gap-5">
        <Image src={solana} className="w-20 self-center" alt="crypto"/>
        <div className="flex justify-between">
        <label htmlFor='solana' className="font-semibold">Solana</label>
        <input type="radio" name="solana" className="" />
        </div>
       
    </div>
    <div className="shadow-md rounded-md p-2 flex flex-col justify-between gap-5">
        <Image src={binance} className="w-28 self-center" alt="crypto"/>
        <div className="flex justify-between">
        <label htmlFor='bnb' className="font-semibold">Binance</label>
        <input type="radio" name="bnb" className="" />
        </div>
       
    </div>
    <div className="shadow-md rounded-md p-2 flex flex-col justify-between gap-5">
        <Image src={tether} className="w-20 self-center" alt="crypto"/>
        <div className="flex justify-between">
        <label htmlFor='tether' className="font-semibold">Tether</label>
        <input type="radio" name="tether" className="" />
        </div>
       
    </div>
    <div className="shadow-md rounded-md p-2 flex flex-col justify-between gap-5">
        <Image src={ton} className="w-24 self-center" alt="crypto"/>
        <div className="flex justify-between">
        <label htmlFor='ton' className="font-semibold">Toncoin</label>
        <input type="radio" name="ton" className="" />
        </div>
       
    </div>
    <div className="shadow-md rounded-md p-2 flex flex-col justify-between gap-5">
        <Image src={ripple} className="w-20 self-center" alt="crypto"/>
        <div className="flex justify-between">
        <label htmlFor='xrp' className="font-semibold">Ripple</label>
        <input type="radio" name="xrp" className="" />
        </div>
       
    </div>
    <div className="shadow-md rounded-md p-2 flex flex-col justify-between gap-5">
        <Image src={litecoin} className="w-20 self-center" alt="crypto"/>
        <div className="flex justify-between">
        <label htmlFor='litecoin' className="font-semibold">Litecoin</label>
        <input type="radio" name="litecoin" className="" />
        </div>
       
    </div>
</div>
  )
}

export default CryptoGrid