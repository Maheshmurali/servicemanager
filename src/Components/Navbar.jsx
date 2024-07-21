import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom'
import { BiLogoFirebase } from "react-icons/bi";


function Navbar() {
  return (
    <div>
     <div id='main' className='flex w-full justify-between '>
        <div id='logo' className='md:w-2/6 pl-4 m-4'> 
          <span ><BiLogoFirebase className='ml-2 '/> logo</span>
        </div>
        <div id='nav-bar'className='md:w-2/6' >
          <nav className=''>
            <ul className='flex justify-between md:mr-16 mt-8 md:mt-4 mr-6 gap-8 font-serif md:text-xl text:lg '>
              <li className='font-extralight hover:underline hover: duration-500 '>
                <Link to='/'>Home</Link>
              </li>
              <li className='hover:underline'>
                <Link to='/Service'>Service Reports</Link>
              </li>
              <li className='hover:underline'>
                <Link to='/about'>About</Link>
              </li>
            </ul>
          </nav>

        </div>
     </div>
    </div>
  )
}

export default Navbar
