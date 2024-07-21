import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
function Home() {
  return (
    <div className='md:h-96 h-72'>
      <div id='container' className='w-full flex gap-2 md:gap-3 p-4 h-36 mt-36 text-center' >
        <div id='newinstallation' className='w-2/5 bg-gray-200 flex md:text-center md:p-12 p-8 hover:shadow-xl'>
            <span className='hover:cursor-pointer text-lg'>New Installation</span>
        </div>
        <div id='service' className='w-2/5 bg-gray-200 flex text-center p-12 hover:shadow-xl'>
            <span className='md:text-lg'><Link to='/service'>Service</Link></span>
        </div>
        <div id='enquries' className='w-2/5 bg-gray-200 flex text-center md:p-12 p-8 hover:shadow-xl'>
            <span className='md:text-lg'><Link to = '/about'>Make A Query</Link></span>
        </div>
      </div>
    </div>
  )
}

export default Home
