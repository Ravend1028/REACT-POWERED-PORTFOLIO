import React from 'react'
import Raven from '../assets/images/raven-image.jpg'
import Socials from './Socials'

const Hero = () => {
  return (
    <main>
      <div className='container mx-auto p-6 flex flex-col justify-center items-center space-y-10'>
        <div className='flex flex-row justify-center items-center '>
          <div className='w-1/3 border-4 border-black'>
            <img className="rounded-xl transform rotate-3 border-2 border-black" src={Raven} alt="raven-image" />
          </div>
        </div>

        <div className='flex flex-col space-y-3 justify-center items-center'>
          <h1 className='font-pixel text-7xl uppercase'>
            Raven David
          </h1>

          <p className='font-pixel italic text-xl'>
            Computer Engineering &#124; Embedded and Web Software Engineering
          </p>

          <Socials />
        </div>
      </div>
    </main>
  )
}

export default Hero