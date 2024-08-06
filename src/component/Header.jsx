import React,{useState} from 'react'
import { NavLink } from 'react-router-dom';
import Dashboard from './Dashboard';
const Header = ({toggleMenu,isOpen}) => {

    return (
        <>
            <div className='md:flex'>
                {/* <div className={`${isOpen?'block':'hidden'} md:w-72 h-auto p-2 mt-5 border border-gray-500 rounded-l-xl bg-white`}>
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
                        <NavLink to='/' className='md:flex items-start p-2 gap-5'>
                            <a href="#"><i className="ri-dashboard-line text-xl font-normal text-indigo-500"></i></a>
                            <h3  className='text-base font-normal'>Dashboard</h3>
                        </NavLink>

                        <NavLink to={'tables'} className='md:flex items-start p-2 gap-5'>
                            <a href="#"><i className="ri-table-line text-xl font-normal text-red-500"></i></a>
                            <h3 className='text-base font-normal'>Tables</h3>
                        </NavLink>

                        <div className='md:flex items-start p-2 gap-5'>
                            <a href="#"><i className="ri-bank-card-2-fill text-xl font-normal text-green-600"></i></a>
                            <h3 className='text-base font-normal'>Billing</h3>
                        </div>

                        <div className='md:flex items-start p-2 gap-5'>
                            <a href="#"><i className="ri-bank-card-2-fill text-xl font-normal text-green-600"></i></a>
                            <h3 className='text-base font-normal'>Virtual Reality</h3>
                        </div>

                        <div className='md:flex items-start  p-2 gap-5'>
                            <a href="#"><i className="ri-global-line text-xl font-normal text-red-600"></i></a>
                            <h3 className='text-base font-normal'>RTL</h3>
                        </div>

                        <div className='items-center justify-center text-center mt-5'>
                            <h2 className='text-base font-medium'>Account Pages</h2>

                            <div className='md:flex items-start  p-2 gap-5'>
                                <a href="#"><i className="ri-user-fill text-xl font-normal text-gray-600"></i></a>
                                <h3 className='text-base font-normal'>Profile</h3>
                            </div>

                            <div className='md:flex items-start  p-2 gap-5'>
                                <a href="#"><i className="ri-news-line text-xl font-normal text-red-600"></i></a>
                                <h3 className='text-base font-normal'>Sign-In</h3>
                            </div>

                            <div className='md:flex items-start  p-2 gap-5'>
                                <a href="#"><i className="ri-login-box-line text-xl font-normal text-blue-400"></i></a>
                                <h3 className='text-base font-normal'>Sign-Up</h3>
                            </div>
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
                        <div className='md:hi'>
                            <a href="#" onClick={toggleMenu}><i className={isOpen ? "ri-menu-line" : "ri-menu-line"}></i></a>
                        </div>
                </div> */}

                <div className='md:flex flex-1 justify-between mt-10 px-8 pt-2 text-center'>
                    <div className='flex flex-1 gap-5'>
                        <NavLink to='/' href="#"><i className="ri-home-8-line text-xl font-medium text-white"></i></NavLink>
                        <p className='text-white font-medium'>/</p>
                        <div className='pl-5'>
                            <a href="#" onClick={toggleMenu}><i className={isOpen ? "ri-menu-line" : "ri-menu-line"}></i></a>
                        </div>
                    </div>
                    <div className='flex justify-center gap-4 pt-5'>
                        <div className='md:w-56 h-8 flex items-center gap-2 border-none border-gray-500 px-1 py-2 bg-white rounded-xl'>
                            <a href="#"><i className="ri-search-line"></i></a>
                            <input type="text" className='border-none outline-none' placeholder='Type Here...'/>
                        </div>
                        <NavLink to={'signin'} className='flex justify-center gap-1'>
                            <a href="#"><i className="ri-user-fill border border-gray-500 rounded-full text-blue-400 bg-white"></i></a>
                            <h3 className='text-white font-normal'>sign-In</h3>
                        </NavLink>
                        <a href="#"><i className="ri-settings-3-line text-white font-normal"></i></a>
                        <a href="#"><i className="ri-notification-4-line text-white font-normal"></i></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header