import React from 'react'
import Raven from '../assets/images/raven-image.jpg'
import Socials from './Socials'

const Hero = () => {
  return (
    <main>
      <div className='container mx-auto p-4 flex flex-col justify-center items-center space-y-10 2xl:p-6'>
        <div className='flex flex-row justify-center items-center '>
          <div className=' border-4 border-black w-2/3 sm:w-1/2 md:w-2/5 xl:w-1/3'>
            <img className="rounded-xl transform rotate-3 border-2 border-black" src={ Raven } alt="raven-image" />
          </div>
        </div>

        <div className='flex flex-col space-y-3 justify-center items-center text-center'>
          <h1 className='font-pixel uppercase text-4xl sm:text-5xl 2xl:text-7xl'>
            Raven David
          </h1>

          <p className='font-pixel italic text-sm sm:text-base 2xl:text-xl'>
            Computer Engineering &#124; Embedded and Web Software Engineering
          </p>

          <Socials />
        </div>
      </div>
    </main>
  )
}

export default Hero