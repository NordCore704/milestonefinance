import React from 'react'

const PlansGrid = () => {
  return (
    <figure className="flex flex-col w-full">
    <h4 className="text-lg">Select Package</h4>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
      <button className="rounded-xl text-left p-3 shadow-md flex flex-col gap-5 hover:bg-gray-200 duration-300 transition-colors">
        <div className="flex justify-between gap-1">
          <div className="flex-col flex gap-1">
            <h4 className="font-semibold text-lg">Basic Plan</h4>
            <p className="text-xs sm:text-sm text-gray-600">Up to 5 securities</p>
          </div>
          <p className="p-1 border self-start rounded-2xl font-semibold sm:text-sm text-xs text-center ">Renewable in 15 days</p>
        </div>
        <p className="font-semibold text-3xl">+50%<span className="text-sm text-gray-600 font-medium"> ROI weekly</span></p>
      </button>
      <button className="rounded-xl text-left p-3 shadow-md flex flex-col gap-5 hover:bg-gray-200 duration-300 transition-colors">
        <div className="flex justify-between gap-1">
          <div className="flex-col flex gap-1">
            <h4 className="font-semibold text-lg ">Standard Plan</h4>
            <p className="sm:text-sm text-xs text-gray-600">Up to 10 securities</p>
          </div>
          <p className="p-1 border self-start rounded-2xl font-semibold sm:text-sm text-xs text-center ">Renewable in 25 days</p>
        </div>
        <p className="font-semibold text-3xl">+100%<span className="text-sm text-gray-600 font-medium"> ROI weekly</span></p>
      </button>
      <button className="rounded-xl text-left p-3 shadow-md flex flex-col gap-5 hover:bg-gray-200 duration-300 transition-colors">
        <div className="flex justify-between gap-1">
          <div className="flex-col flex gap-1">
            <h4 className="font-semibold text-lg">Premium Plan</h4>
            <p className="sm:text-sm text-xs text-gray-600">Up to 20 securities</p>
          </div>
          <p className="p-1 border self-start rounded-2xl font-semibold sm:text-sm text-xs text-center ">Renewable in 35 days</p>
        </div>
        <p className="font-semibold text-3xl">+200%<span className="text-sm text-gray-600 font-medium"> ROI weekly</span></p>
      </button>
      <button className="rounded-xl text-left p-3 shadow-md flex flex-col gap-5 hover:bg-gray-200 duration-300 transition-colors">
        <div className="flex justify-between gap-1">
          <div className="flex-col flex gap-1">
            <h4 className="font-semibold text-lg">Deluxe Plan</h4>
            <p className="sm:text-sm text-xs text-gray-600">Up to 50 securities</p>
          </div>
          <p className="p-1 border self-start rounded-2xl font-semibold sm:text-sm text-xs text-center ">Renewable in 50 days</p>
        </div>
        <p className="font-semibold text-3xl">+500%<span className="text-sm text-gray-600 font-medium"> ROI weekly</span></p>
      </button>
    </div>
    
    <div className="flex flex-col gap-1 mt-5">
        <label htmlFor="amount" className="">Enter Amount</label>
        <input type="text" name="amount" className="border border-scheme-purple rounded-xl outline-none p-2" />
    </div>
  </figure>
  )
}

export default PlansGrid