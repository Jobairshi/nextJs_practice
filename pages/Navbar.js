import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  // use link instead of a for removing loading page to retiderct
  return (
    <nav className='font-semibold flex items-center p-4'>
      
        <ul className='flex flex-row gap-4'>
          <li>
            <Link className='nav_button' href='/'>Home</Link>
           
          </li>

          <li >
          <Link className='nav_button' href='/about'>About</Link>
          </li>

          <li>
            <Link className='nav_button' href="/Blog">Blog</Link>
          </li>

          <li>
            <Link className='nav_button' href="/">Contact</Link>
          </li>
        </ul>

       </nav>
  )
}

export default Navbar