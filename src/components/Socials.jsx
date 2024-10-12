import React from 'react'

// PRINTING OF CV HANDLER

const Socials = () => {
  return (
    <section>
      <div className='container mx-auto p-6 flex flex-col justify-center items-center space-y-24'>
        <div className='flex flex-row justify-center items-center space-x-7'>
          <button className='bg-black text-white rounded-full p-2 hover:text-amber-500'>
            <i class="fa-brands fa-github fa-2x"></i>
          </button>

          <button className='bg-black text-white rounded-full p-2 hover:text-amber-500'>
            <i class="fa-brands fa-linkedin fa-2x"></i>
          </button>

          <button className='bg-black text-white rounded-full p-2 hover:text-amber-500'>
            <i class="fa-brands fa-facebook fa-2x"></i>
          </button>
        </div>

        <div>
          <button className='bg-black p-3 rounded-lg text-white font-pixel hover:text-amber-500'>
            Download CV
          </button>
        </div>
      </div>
    </section>
  )
}

export default Socials