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
        <input type="radio" name="crypto" value={'bitcoin'} className="" onChange={() => handleCryptoSelection({ name: 'Bitcoin', address: 'your-bitcoin-address', network: 'BRC20'})}/>
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
        <Image src={solana} className="w-20 self-center" alt="crypto"/>
        <div className="flex justify-between">
        <label htmlFor='solana' className="font-semibold">Solana</label>
        <input type="radio" name="crypto" value={'Solana'} className="" onChange={() => handleCryptoSelection({ name: 'Solana', address: 'solana-address', network: 'Sol'})} />
        </div>
       
    </div>
    <div className="shadow-md rounded-md p-2 flex flex-col justify-between gap-5">
        <Image src={binance} className="w-28 self-center" alt="crypto"/>
        <div className="flex justify-between">
        <label htmlFor='bnb' className="font-semibold">Binance</label>
        <input type="radio" name="crypto" value={'Bnb'} className="" onChange={() => handleCryptoSelection({ name: 'Bnb', address: '0x-bnb', network: 'BEP20'})} />
        </div>
       
    </div>
    <div className="shadow-md rounded-md p-2 flex flex-col justify-between gap-5">
        <Image src={tether} className="w-20 self-center" alt="crypto"/>
        <div className="flex justify-between">
        <label htmlFor='tether' className="font-semibold">Tether</label>
        <input type="radio" name="crypto" value={'Tether'} className="" onChange={() => handleCryptoSelection({ name: 'Tether', address: '0xda0009bc973096582cc82d639e4dd320fe7c5359', network: 'tetherERC20'})} />
        </div>
       
    </div>
    <div className="shadow-md rounded-md p-2 flex flex-col justify-between gap-5">
        <Image src={ton} className="w-24 self-center" alt="crypto"/>
        <div className="flex justify-between">
        <label htmlFor='ton' className="font-semibold">Toncoin</label>
        <input type="radio" name="crypto" value={'Toncoin'} className="" onChange={() => handleCryptoSelection({ name: 'Toncoin', address: 'Ton-address', network: 'Ton'})} />
        </div>
       
    </div>
    <div className="shadow-md rounded-md p-2 flex flex-col justify-between gap-5">
        <Image src={ripple} className="w-20 self-center" alt="crypto"/>
        <div className="flex justify-between">
        <label htmlFor='xrp' className="font-semibold">Ripple</label>
        <input type="radio" name="crypto" value={'Ripple'} className="" onChange={() => handleCryptoSelection({ name: 'Ripple', address: 'ripple-address', network: 'ERC20'})} />
        </div>
       
    </div>
    <div className="shadow-md rounded-md p-2 flex flex-col justify-between gap-5">
        <Image src={litecoin} className="w-20 self-center" alt="crypto"/>
        <div className="flex justify-between">
        <label htmlFor='litecoin' className="font-semibold">Litecoin</label>
        <input type="radio" name="crypto" value={'Ripple'} className="" onChange={() => handleCryptoSelection({ name: 'Ripple', address: 'ripple-address', network: 'ERC20'})} />
        </div>
       
    </div>
</div>
  )
}

export default CryptoGrid