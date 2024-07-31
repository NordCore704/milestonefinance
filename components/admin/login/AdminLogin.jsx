import { AdminLoginForm, AdminLoginHero } from '@/exports'
import React from 'react'


const AdminLogin = () => {
  return (
    <section className='flex flex-col-reverse sm:flex-row gap-2 p-3 sm:px-3 sm:py-5 lg:px-4 lg:py-8'>
        <AdminLoginForm />
        <AdminLoginHero />
    </section>
  )
}

export default AdminLogin