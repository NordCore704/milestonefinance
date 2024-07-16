import React from 'react'
import { FaCopy } from 'react-icons/fa6'

const PaymentMain = () => {
  return (
    <section className='flex flex-col gap-3 p-3 sm:p-4'>
      <div className="shadow-md rounded-xl px-3 py-5 sm:px-4 sm:py-5 flex flex-col gap-5">
        <p className="bg-yellow-400 text-white px-2 py-1 self-start rounded-lg font-semibold">Your payment window</p>
        <p className="">You are to make payment of <span className="font-semibold">$100</span> using the selected cryptocurrency</p>
        <p className="text-2xl font-semibold">Wallet Address</p>
        <p className="uppercase">Crypto <span className="capitalize">Address:</span></p>
        <div className="flex border rounded-lg justify-between">
          <p className="p-2">Wallet address</p>
          <button className="border p-2">
            <FaCopy />
          </button>
          
        </div>
        <p className="">Network Type: <span className="uppercase">Crypto Network</span></p>
        {/* <button className="rounded-lg bg-scheme-purple text-white p-2 hover:bg-scheme-purpleOne duration-300 transition-colors lg:w-[70%] self-start">
        Submit Payment
      </button> */}
      </div>

    </section>
  )
}

export default PaymentMain