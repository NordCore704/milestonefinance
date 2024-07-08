import React from 'react'
import { SignUpForm, SignUpHero } from '@/exports'


const SignUpMain = () => {
  return (
    <section className='flex flex-col-reverse sm:flex-row gap-2 p-3 sm:px-3 sm:py-5 lg:px-4 lg:py-8 '>
        <SignUpForm />
        <SignUpHero />
    </section>
  )
}

export default SignUpMain