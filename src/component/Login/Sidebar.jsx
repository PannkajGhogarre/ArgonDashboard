import React from 'react'
import { GiVirtualMarker } from 'react-icons/gi'
import { LiaTableSolid } from 'react-icons/lia'
import { MdDashboard } from 'react-icons/md'
import { RiBillFill, RiPlayReverseFill } from 'react-icons/ri'

const Sidebar = () => {
  return (
    <div className='w-72 bg-white fixed h-full px-4 py-2'>
        <div className='mb-4 my-2'>
            <h1>Argon Dashboard</h1>
        </div>
        <hr />
        <ul className='mt-3 font-bold'>
            <li className='mb-2 rounded hover:shadow'>
                <a href="#" className='px-3'>
                    <MdDashboard className='inline-block w-6 h-6 mr-2 -mt-2'/>
                    Dashboard
                </a>
            </li>
            <li className='mb-2 rounded hover:shadow'>
                <a href="#" className='px-3'>
                    <LiaTableSolid className='inline-block w-6 h-6 mr-2 -mt-2'/>
                    TAbles
                </a>
            </li>
            <li className='mb-2 rounded hover:shadow'>
                <a href="#" className='px-3'>
                    <RiBillFill className='inline-block w-6 h-6 mr-2 -mt-2'/>
                    Billing
                </a>
            </li>
            <li className='mb-2 rounded hover:shadow'>
                <a href="#" className='px-3'>
                    <GiVirtualMarker className='inline-block w-6 h-6 mr-2 -mt-2'/>
                    Virtual Reality
                </a>
            </li>
            <li className='mb-2 rounded hover:shadow'>
                <a href="#" className='px-3'>
                    <RiPlayReverseFill className='inline-block w-6 h-6 mr-2 -mt-2'/>
                    RTL
                </a>
            </li>
        </ul>
    </div>
  )
}

export default Sidebar