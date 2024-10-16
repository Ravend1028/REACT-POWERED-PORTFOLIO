import React from 'react'

// WHEN HOVERED UNDERLINE TITLE

const Section = ({title, company, description, image, alt, imageStyle}) => {
  return (
    <section data-aos="fade-right" className='group'>
      <div className='container mx-auto p-6 flex flex-col-reverse justify-between items-start border-zinc-200 border-b-2 space-y-7 space-y-reverse lg:flex-row lg:space-y-0'>
        <div className='flex flex-col justify-center items-start space-y-7'>
          <div className="space-y-2">
            <h1 className='font-pixel text-2xl md:text-3xl uppercase text-amber-600 relative after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-amber-600 after:transition-all after:duration-700 group-hover:after:w-full'>
              { title }
            </h1>

            <p className='font-pixel text-md'>
              { company }
            </p>
          </div>

          <p className='font-pixel leading-relaxed tracking-wide text-sm md:text-base md:max-w-2xl'>
            { description }
          </p>
        </div>

        <img className={ imageStyle } src={ image } alt={ alt } />
      </div>
    </section>
  )
}

export default Section