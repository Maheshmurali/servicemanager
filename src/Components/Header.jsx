import React from 'react'



function Header() {
  const date = new Date().getDate()
  const month = new Date().getMonth()
  const year = new Date().getFullYear()
  return (
    <div className='flex md:mr-24'>
    <div className='w-full text-center -mt-12'>
      <h1 className='text-lg underline ml-28'>Daily Service Report</h1> 
    </div>
    <span className='bg-yellow-400 p-4 rounded-full'>{date}</span>
    <span className='bg-yellow-400 p-4 rounded-full'>{month}</span>
    <span className='bg-yellow-400 p-4 rounded-full'>{year}</span>
    </div>
  )
}

export default Header
