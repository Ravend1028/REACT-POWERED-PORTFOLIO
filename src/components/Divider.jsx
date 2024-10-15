import React from 'react'

const Divider = ({title, children}) => {
  return (
    <section data-aos="fade-right" className='group hover:bg-gray-200'>
      <div className="container mx-auto p-6 flex flex-col justify-center items-center border-black border-b-2 space-y-5">
        <h1 className='font-pixel text-2xl md:text-3xl uppercase text-amber-600 relative after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-amber-600 after:transition-all after:duration-700 group-hover:after:w-full'>
          {title}
        </h1>

        
        <div className='flex flex-wrap flex-row justify-center items-center space-x-2 xl:space-x-5'>
          {children}
        </div>
      </div>
    </section>
  )
}

export default Divider