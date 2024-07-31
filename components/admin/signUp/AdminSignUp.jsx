import { AdminSignUpForm, AdminSignUpHero } from '@/exports'
import React from 'react'

const AdminSignUp = () => {
  return (
    <section className='flex flex-col-reverse sm:flex-row gap-2 p-3 sm:px-3 sm:py-5 lg:px-4 lg:py-8'>
    <AdminSignUpForm />
    <AdminSignUpHero />
</section>
  )
}

export default AdminSignUp