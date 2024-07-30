import React from 'react'

function Footer() {
  return (
    <div className='md:flex items-center justify-between px-10 py-5'>
        <div className='md:flex text-base font-medium text-gray-500 text-center mt-3'>
            <a href="#"><i class="ri-copyright-line"></i></a>
            <p>2024,</p>
            <div className='md:flex'>
                <p> made with</p>
                <a href="#"><i class="ri-heart-fill"></i></a>
                <p>by <span className='text-base font-bold text-black'>Creative Tim </span>for a better web.</p>
            </div>
        </div>

        <div className='md:flex gap-4 text-base font-medium text-gray-500 text-center mt-3'>
            <h3>Creative Tim</h3>
            <h3>About Us</h3>
            <h3>Blog</h3>
            <h3>License</h3>
        </div>
    </div>
  )
}

export default Footer