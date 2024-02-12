import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <header className='header'>
        <NavLink to='/'>
          <p className='to-blue-500'>MILAD</p>
        </NavLink>
        <nav className='flex text-lg gap-7 font-medium'>
          <NavLink to="/about" className={({isActive})=> isActive ? "text-blue-500" : 'text-black'}>
            About
          </NavLink>
          <NavLink to="/projects" className={({isActive})=> isActive ? "text-blue-500" : 'text-black'}>
            Projects
          </NavLink>
        </nav>
    </header>
  )
}

export default NavBar