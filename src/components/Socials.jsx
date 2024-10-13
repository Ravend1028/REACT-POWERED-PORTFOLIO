import React from 'react'

// PRINTING OF CV HANDLER

const Socials = () => {
  return (
    <section>
      <div className='container mx-auto p-4 flex flex-col justify-center items-center space-y-8 2xl:space-y-24 md:p-6'>
        <div className='flex flex-row justify-center items-center space-x-7'>
          <button className='bg-black text-white p-2 hover:text-amber-500 rounded-lg md:rounded-full'>
            <i class="fa-brands fa-github text-2xl md:text-3xl 2xl:text-4xl"></i>
          </button>

          <button className='bg-black text-white p-2 hover:text-amber-500 rounded-lg md:rounded-full'>
            <i class="fa-brands fa-linkedin text-2xl md:text-3xl 2xl:text-4xl"></i>
          </button>

          <button className='bg-black text-white p-2 hover:text-amber-500 rounded-lg md:rounded-full'>
            <i class="fa-brands fa-facebook text-2xl md:text-3xl 2xl:text-4xl"></i>
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