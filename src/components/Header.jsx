import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

// NAVLINK WORKS THE SAME AS LINK BUT ADDS A CLASS TO THE ACTIVE LINK

const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

 const classLink = ({ isActive }) => isActive ? 'text-xl text-amber-600 uppercase hover:text-amber-500 lg:flex' : 'text-xl uppercase hover:text-amber-500 lg:flex';

  return (
    <header>
      <div className='relative container mx-auto p-4 flex flex-row justify-between items-center space-x-10 font-pixel mb-2 2xl:mb-10 lg:p-6 lg:justify-center'>
        <button  className={`lg:hidden block focus:outline-none ${ isMenuOpen ? 'text-amber-600' : '' }`} onClick={ toggleMenu }>
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>

        <div className={`flex-col lg:flex-row lg:space-x-10 font-pixel ${ isMenuOpen ? 'flex' : 'hidden' } lg:flex`}>
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
      </div>
    </header>
  )
}

export default Header