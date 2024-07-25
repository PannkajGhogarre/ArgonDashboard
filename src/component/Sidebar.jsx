import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = ({isOpen}) => {

    
  return (
    <div className='pl-5'>
        <div className={`${isOpen ?'translate-x-0' : '-translate-x-full'}md:w-72 h-auto p-2 mt-5 border border-gray-500 rounded-l-xl bg-white`}>
                    <div className='md:flex flex-col items-center justify-center text-center'>
                        <div className='md:flex flex-1 items-center justify-center gap-2'>
                            <div className='md:flex flex-wrap text-sm font-normal'>
                                <a href="#"><i className="ri-arrow-up-s-line border-2 border-black"></i></a>
                                <a href="#"><i className="ri-arrow-up-s-line border-2 border-black"></i></a>
                                <a href="#"><i className="ri-arrow-down-s-line border-2 border-black"></i></a>
                            </div>
                            <h1 className='text-base font-semibold'>Argon Dashboard 2 PRO</h1>
                        </div>
                    </div>

                    <div className='md:flex flex-col justify-center text-center p-2 mt-10'>
                        <NavLink to='/' className={({isActive}) => `${isActive ? "bg-gradient-to-tr from from-indigo-200 to-indigo-100 text-indigo-800 rounded-lg" : "hover:bg-indigo-50 text-gray-600 rounded-lg p-1"} flex flex-col items-center md:flex-row md:items-start p-2 md:gap-5 text-center md:text-left`}>
                            <a href="#"><i className="ri-dashboard-line text-xl font-normal text-indigo-500"></i></a>
                            <h3  className='text-base font-normal'>Dashboard</h3>
                        </NavLink>

                        <NavLink to={'tables'} className={({isActive}) => `${isActive ? "bg-gradient-to-tr from from-indigo-200 to-indigo-100 text-indigo-800 rounded-lg" : "hover:bg-indigo-50 text-gray-600 rounded-lg p-1"} flex flex-col items-center md:flex-row md:items-start p-2 md:gap-5 text-center md:text-left`}>
                            <a href="#"><i className="ri-table-line text-xl font-normal text-red-500"></i></a>
                            <h3 className='text-base font-normal'>Tables</h3>
                        </NavLink>

                        <NavLink to={'billing'} className={({isActive}) => `${isActive ? "bg-gradient-to-tr from from-indigo-200 to-indigo-100 text-indigo-800 rounded-lg" : "hover:bg-indigo-50 text-gray-600 rounded-lg p-1"} flex flex-col items-center md:flex-row md:items-start p-2 md:gap-5 text-center md:text-left`}>
                            <a href="#"><i className="ri-bank-card-2-fill text-xl font-normal text-green-600"></i></a>
                            <h3 className='text-base font-normal'>Billing</h3>
                        </NavLink>

                        <NavLink to='virtual' className={({isActive}) => `${isActive ? "bg-gradient-to-tr from from-indigo-200 to-indigo-100 text-indigo-800 rounded-lg" : "hover:bg-indigo-50 text-gray-600 rounded-lg p-1"} flex flex-col items-center md:flex-row md:items-start p-2 md:gap-5 text-center md:text-left`}>
                            <a href="#"><i className="ri-dashboard-line text-xl font-normal text-indigo-500"></i></a>
                            <h3  className='text-base font-normal'>Virtual Reality</h3>
                        </NavLink>

                        <NavLink to='rtl' className={({isActive}) => `${isActive ? "bg-gradient-to-tr from from-indigo-200 to-indigo-100 text-indigo-800 rounded-lg" : "hover:bg-indigo-50 text-gray-600 rounded-lg p-1"} flex flex-col items-center md:flex-row md:items-start p-2 md:gap-5 text-center md:text-left`}>
                            <a href="#"><i className="ri-dashboard-line text-xl font-normal text-indigo-500"></i></a>
                            <h3  className='text-base font-normal'>RTL</h3>
                        </NavLink>

                        <div className='items-center justify-center text-center mt-5'>
                            <h2 className='text-base font-medium'>Account Pages</h2>

                            <NavLink to={'profile'} className={({isActive}) => `${isActive ? "bg-gradient-to-tr from from-indigo-200 to-indigo-100 text-indigo-800 rounded-lg" : "hover:bg-indigo-50 text-gray-600 rounded-lg p-1"} flex flex-col items-center md:flex-row md:items-start p-2 md:gap-5 text-center md:text-left`}>
                                <a href="#"><i className="ri-user-fill text-xl font-normal text-gray-600"></i></a>
                                <h3 className='text-base font-normal'>Profile</h3>
                            </NavLink>

                            <NavLink to={'signin'} className={({isActive}) => `${isActive ? "bg-gradient-to-tr from from-indigo-200 to-indigo-100 text-indigo-800 rounded-lg" : "hover:bg-indigo-50 text-gray-600 rounded-lg p-1"} flex flex-col items-center md:flex-row md:items-start p-2 md:gap-5 text-center md:text-left`}>
                                <a href="#"><i className="ri-news-line text-xl font-normal text-red-600"></i></a>
                                <h3 className='text-base font-normal'>Sign-In</h3>
                            </NavLink>

                            <NavLink to={'signup'} className={({isActive}) => `${isActive ? "bg-gradient-to-tr from from-indigo-200 to-indigo-100 text-indigo-800 rounded-lg" : "hover:bg-indigo-50 text-gray-600 rounded-lg p-1"} flex flex-col items-center md:flex-row md:items-start p-2 md:gap-5 text-center md:text-left`} >
                                <a href="#"><i className="ri-login-box-line text-xl font-normal text-blue-400"></i></a>
                                <h3 className='text-base font-normal'>Sign-Up</h3>
                            </NavLink>
                        </div>

                        <div className='items-center justify-center text-center pt-5'>
                            <a href="#"><i className="ri-folder-4-line text-8xl font-thin text-blue-500"></i></a>
                            <p className='text-xl font-medium'>Need Help?</p>
                            <p className='text-base font-normal text-gray-500'>Please Check Our docs</p>
                        </div>
                    </div>
                    <div className='items-center justify-center text-center py-5'>
                        <button className='border border-gray-400 px-8 py-1 text-center font-normal rounded-lg mb-2 text-white bg-gray-500'>
                            Documentation</button>
                        <button className='border border-gray-400 px-8 py-1 text-center font-normal rounded-lg text-white bg-blue-400'>
                            Upgrade to Pro</button>
                    </div>
                        {/* <div className='md:hidden'>
                            <a href="#" onClick={toggleMenu}><i className={isOpen ? "ri-menu-line" : "ri-menu-line"}></i></a>
                        </div> */}
                </div>
    </div>
  )
}

export default Sidebar