import React from 'react'
import { PartnersText, PartnersDisplay } from '@/exports'

const PartnersMain = () => {
  return (
    <section className='flex flex-col-reverse sm:flex-row gap-5 w-full items-center p-3 '>
        <PartnersText />
        <PartnersDisplay />
    </section>
  )
}

export default PartnersMain