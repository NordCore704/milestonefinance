import React from 'react'
import { ContactText, ContactHero, } from '@/exports'

const ContactMain = () => {
  return (
    <section className='flex flex-col gap-5 sm:flex-row p-4 sm:px-4 sm:py-8 lg:px-4 lg:py-14'>
        <ContactText />
        <ContactHero />
        </section>
  )
}

export default ContactMain