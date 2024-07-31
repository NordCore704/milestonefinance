'use client'
import React from 'react'
import { ton, binance, bitcoin, solana, tether, ethereum, litecoin, ripple } from '@/exports/image-exports'
import Image from 'next/image'


const CryptoGrid = ({ handleCryptoSelection }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 w-full gap-4">
    <div className="shadow-md rounded-md p-2 flex flex-col justify-between gap-5">
        <Image src={bitcoin} className="w-20 self-center" alt="crypto"/>
        <div className="flex justify-between">
        <label htmlFor='bitcoin' className="font-semibold">Bitcoin</label>
        <input type="radio" name="crypto" value={'bitcoin'} className="" onChange={() => handleCryptoSelection({ name: 'Bitcoin', address: '327smF8PcQXkGkYQezH273bvy6Wn3kkfy4', network: 'BTC'})}/>
        </div>
       
    </div>
    <div className="shadow-md rounded-md p-2 flex flex-col justify-between gap-5">
        <Image src={ethereum} className="w-20 self-center" alt="crypto"/>
        <div className="flex justify-between">
        <label htmlFor='ethereum' className="font-semibold">Ethereum</label>
        <input type="radio" name='crypto' value={'Ethereum'} className="" onChange={() => handleCryptoSelection({ name: 'Ethereum', address: '0xda0009bc973096582cc82d639e4dd320fe7c5359', network: 'ERC20'})} />
        </div>
       
    </div>

  
    <div className="shadow-md rounded-md p-2 flex flex-col justify-between gap-5">
        <Image src={tether} className="w-20 self-center" alt="crypto"/>
        <div className="flex justify-between">
        <label htmlFor='tether' className="font-semibold">Tether (ERC-20)</label>
        <input type="radio" name="crypto" value={'Tether'} className="" onChange={() => handleCryptoSelection({ name: 'Tether', address: '0xda0009bc973096582cc82d639e4dd320fe7c5359', network: 'ERC20'})} />
        </div>
       
    </div>
    <div className="shadow-md rounded-md p-2 flex flex-col justify-between gap-5">
        <Image src={tether} className="w-20 self-center" alt="crypto"/>
        <div className="flex justify-between">
        <label htmlFor='tether' className="font-semibold">Tether (TRC-20)</label>
        <input type="radio" name="crypto" value={'Tether'} className="" onChange={() => handleCryptoSelection({ name: 'Tether', address: 'TTxP1UHbpv1FKwKk5jqVjnat5eBHxmae5i', network: 'TRC20'})} />
        </div>
       
    </div>
   
</div>
  )
}

export default CryptoGrid