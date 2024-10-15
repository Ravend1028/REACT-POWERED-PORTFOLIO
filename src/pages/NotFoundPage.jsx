import React from 'react'
import { Link } from 'react-router-dom';
import Divider from '../components/Divider'

// WILL WORK ON THIS SOON
// CREATE A ROUTE FOR CATCH ALL - path = '*'

const NotFoundPage = () => {
  return (
    <Divider title={"404 Not Found"}>
      <div className="flex flex-col space-y-8 justify-center items-center">
        <p className='font-pixel leading-relaxed tracking-wide text-sm md:text-base'>
          Sorry, the page you are looking for does not exist.
        </p>

        <Link
          to='/'
          className='underline text-zinc-200 font-pixel text-xs lg:text-md 2xl:text-lg hover:text-amber-500'
        >
          Go Back
        </Link>
      </div>
    </Divider>
  )
}

export default NotFoundPage