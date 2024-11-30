import React from 'react'
import { HomeIntroText, HomeIntroIllustration, } from '@/exports'

const HomeIntro = () => {
  return (
    <div className='flex flex-col gap-3 mt-0 w-full sm:flex-row'>
     <HomeIntroText />
     <HomeIntroIllustration />
    </div>
  )
}

export default HomeIntro