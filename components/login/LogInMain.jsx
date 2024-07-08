import React from 'react'
import { LoginForm, LoginHero, } from '@/exports'

const LogInMain = () => {
  return (
    <section className='flex flex-col-reverse sm:flex-row gap-2 p-3 sm:px-3 sm:py-5 lg:px-4 lg:py-8'>
        <LoginForm />
        <LoginHero />
    </section>
  )
}

export default LogInMain