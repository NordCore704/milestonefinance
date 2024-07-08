import Link from 'next/link'
import React from 'react'

const AboutSectionFourMain = () => {
  return (
    <section className='bg-scheme-purple text-white p-3 flex flex-col gap-4 items-center justify-center h-64'>
        <p className="uppercase text-center">How to start? </p>
        <p className="font-semibold text-2xl text-center">Register with us today!</p>
        <Link
              href={"/auth/signup"}
              className={'py-1.5 px-3 rounded-xl bg-scheme-purpleThree text-white  hover:bg-scheme-purpleOne self-center'}
            >
              Sign Up
            </Link>
    </section>
  )
}

export default AboutSectionFourMain