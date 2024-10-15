import React from 'react'
import Divider from '../components/Divider'

// WILL WORK ON THIS SOON
// CREATE A ROUTE FOR CATCH ALL - path = '*'

const NotFoundPage = () => {
  return (
    <Divider title={"404 Not Found"}>
      <p className='font-pixel leading-relaxed tracking-wide text-sm md:text-base'>
        Sorry, the page you are looking for does not exist.
      </p>
    </Divider>
  )
}

export default NotFoundPage