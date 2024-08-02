import React from 'react'

const Virtual = ({isOpen}) => {
  return (
    <div className={`${!isOpen ?'w-72' : 'w-20'} w-72 h-screen p-5 pt-5 bg-purple-400`}>
      <div className='flex gap-x-4 items-center'>
        <div className='items-center justify-center'>
          <div className='flex'>
            <img src="./image/up.png" alt="" className='w-5' />
            <img src="./image/up.png" alt="" className='w-5' />
          </div>
          <img src="./image/down.png" alt="" className='w-5' />
        </div>
        <h1 className={`text-four origin-left font-medium text-base duration-300 ${!isOpen && 'scale-0'}`}>Argon Dashboard</h1>
      </div>


    </div>
  )
}

export default Virtual