import React from 'react'
import { IoMdPhonePortrait } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { IoEarthOutline } from "react-icons/io5";

function Footer() {
  return (
    <div className='md:h-16 h-72'>
      <div id='container' className='flex flex-wrap  md:flex-row  absolute inset-x-0 bottom-0 justify-center md:gap-60 gap-24'>
        <div id='phone' >
          <span  className='cursor-text'>
          <IoMdPhonePortrait className='w-10 h-10 ml-8' />
          <p>+91 9072907291</p>
          </span>
        </div>
        <div id='email'>
        <span className='cursor-pointer'>
        <MdEmail className='w-10 h-10 ml-10' />
        <p>hermes@gmail.com</p>
        </span>
        </div>
        <div id='address'>
        <span className='cursor-pointer'>
        <CiLocationOn className='w-10 h-10 ml-2' />
        <p>room2/42</p>
        <p>mavelikara</p>
        <p>Alappuzha</p>
        </span>
        </div>
        <div id='website' >
        <span className='cursor-pointer'>
        <IoEarthOutline className='w-10 h-10 ml-10' />
        <p>hermesnetworks.in</p>
        </span>
        </div>
      </div>
    </div>
  )
}

export default Footer
