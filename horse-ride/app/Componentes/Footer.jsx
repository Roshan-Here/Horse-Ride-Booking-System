import React from 'react'

function Footer() {
    const d = new Date()
    const year = d.getFullYear()
  return (
    <div className='w-full h-16 flex flex-col justify-center items-center text-center'>
      <p className='text-black text-lg'>Copyright © {year} - All right reserved</p>
    </div>
  )
}

export default Footer
