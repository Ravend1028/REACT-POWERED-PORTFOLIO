import React from 'react'
import resume from '../assets/DAVID_COE_RESUME.pdf'
import { LiaDownloadSolid } from "react-icons/lia";

// PRINTING OF CV HANDLER

const Socials = () => {
  return (
    <section>
      <div className='container mx-auto p-4 flex flex-col justify-center items-center space-y-16 lg:space-y-10 2xl:space-y-24 md:p-6'>
        <div className='flex flex-row justify-center items-center space-x-7'>
          <a 
            href="https://www.linkedin.com/in/raven-david-511407279/" 
            target="_blank" 
            rel="noopener noreferrer"
            className='bg-zinc-200 text-white p-2 hover:text-amber-500 rounded-lg md:rounded-xl hover:bg-amber-500'
          >
            <i className="fa-brands fa-linkedin text-2xl md:text-3xl 2xl:text-4xl text-gray-950"></i>
          </a>

          <a 
            href="https://github.com/Ravend1028" 
            target="_blank" 
            rel="noopener noreferrer"
            className='bg-zinc-200 text-white p-2 rounded-lg md:rounded-xl hover:bg-amber-500'
          >
            <i className="fa-brands fa-github text-2xl md:text-3xl 2xl:text-4xl text-gray-950"></i>
          </a>

          <a 
            href="https://www.facebook.com/raven.david.28" 
            target="_blank" 
            rel="noopener noreferrer"
            className='bg-zinc-200 text-white p-2 hover:text-amber-500 rounded-lg md:rounded-xl hover:bg-amber-500'
          >
            <i className="fa-brands fa-facebook text-2xl md:text-3xl 2xl:text-4xl text-gray-950"></i>
          </a>
        </div>

        <div className='border-zinc-200 border-b-2 m-3 px-2 hover:border-amber-500'>
          <a
            href={ resume } 
            download="resume"     
            className='text-zinc-200 inline-flex font-pixel text-xs lg:text-md 2xl:text-lg hover:text-amber-500'
          >
            Download CV 

            <LiaDownloadSolid className='mb-1 ml-2 text-lg'/>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Socials