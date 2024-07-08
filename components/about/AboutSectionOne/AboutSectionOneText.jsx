import Link from 'next/link'
import React from 'react'
import { FaBoltLightning } from 'react-icons/fa6'


const AboutSectionOneText = () => {
  return (
    <div className='flex flex-col gap-3 items-center text-center justify-center'>
        <div className="rounded-md flex gap-1 items-center bg-scheme-purpleThree self-center p-1">
            <FaBoltLightning /> About us
        </div>
        <h2 className="text-2xl font-semibold text-center">
            We are more than just a leader of financial technology
        </h2>
        <p className="">
        At Milestone Financial Management, we are dedicated to empowering individuals and businesses to achieve their financial goals through strategic investments. Our diverse portfolio includes stocks, cryptocurrency, land, agriculture, and real estate, providing a balanced approach to wealth creation and management.
        </p>
        <Link
              href={"/contact"}
              className={'py-1.5 px-3 rounded-2xl bg-scheme-purple text-white shadow-md shadow-scheme-purpleOne hover:bg-scheme-purpleOne self-center'}
            >
              Contact Us
            </Link>
    </div>
  )
}

export default AboutSectionOneText