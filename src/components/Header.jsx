import React from 'react'
import { NavLink } from 'react-router-dom'

// NAVLINK WORKS THE SAME AS LINK BUT ADDS A CLASS TO THE ACTIVE LINK

const Header = () => {
  const classLink = ({ isActive }) =>  isActive ? 'text-xl text-amber-600 uppercase hover:text-amber-500' : 'text-xl uppercase hover:text-amber-500';

  return (
    <header>
      <div className='container mx-auto p-6 flex flex-row justify-center items-center space-x-10 font-pixel mb-10'>
        <NavLink to='/' className={ classLink }>
          Home
        </NavLink>

        <NavLink to="/experience" className={ classLink }>
          Experience
        </NavLink>
      
        <NavLink to="/techstack" className={ classLink }>
          Tech Stack
        </NavLink>
    
        <NavLink to="/projects" className={ classLink }>
          Projects
        </NavLink>
  
        <NavLink to="/certificates" className={ classLink }>
          Certificates
        </NavLink>
      </div>
    </header>
  )
}

export default Header