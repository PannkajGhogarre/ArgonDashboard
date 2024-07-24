import React from 'react'
import { NavLink } from 'react-router-dom'

const Signin = () => {
    return (
        <>
            <div className='bg-[url("./px.jpg")] bg-cover bg-no-repeat'>
                <nav className='md:flex justify-between items-center border border-gray-400 shadow-md rounded-lg py-2 md:mx-24 my-5 px-4'>
                    <NavLink to={'/'} className='hover:bg-slate-200 p-1 rounded-lg'>
                        <h1 className='text-base font-bold text-gray-500 text-center'>Argon Dashboard 2</h1>
                    </NavLink>
                    <div className=''>
                        <ul className='md:flex gap-5'>
                            <NavLink to={'/'} className='flex justify-center items-center gap-1 hover:bg-slate-200 p-1 rounded-lg'>
                                <a href="#"><i className="ri-dashboard-line"></i></a>
                                <h3>Dashboard</h3>
                            </NavLink>
                            <NavLink to={'profie'} className='flex justify-center items-center gap-1 hover:bg-slate-200 p-1 rounded-lg'>
                                <a href="#"><i className="ri-user-fill"></i></a>
                                <h3>Profile</h3>
                            </NavLink>
                            <NavLink to={'signup'} className='flex justify-center items-center gap-1 hover:bg-slate-200 p-1 rounded-lg'>
                                <a href="#"><i className="ri-user-line border border-gray-400 rounded-full bg-gray-400"></i></a>
                                <h3>Sign Up</h3>
                            </NavLink>
                            <NavLink to={''} className='flex justify-center items-center gap-1 hover:bg-slate-200 p-1 rounded-lg'>
                                <a href="#"><i className="ri-key-line font-bold text-gray-800"></i></a>
                                <h3>Sign In</h3>
                            </NavLink>
                        </ul>
                    </div>
                    <div className='border border-gray-400 rounded-lg px-10 py-2 font-semibold text-sm text-white bg-three text-center'>
                        <button>
                            Free Download
                        </button>
                    </div>
                </nav>

                <div className=''>
                    <div className='flex flex-col h-screen justify-center items-center'>
                        <div>
                            <h2 className='text-2xl font-semibold py-2'>Sign In</h2>
                            <p className='text-base font-normal text-gray-700 py-2'>Enter your email and password to sign in</p>

                            <div className='flex flex-col gap-2 py-2'>
                                <input type="Email" placeholder='Email' className='px-5 py-2 border border-gray-400 rounded-lg' />
                                <input type="password" placeholder='Password' className='px-5 py-2 border border-gray-400 rounded-lg' />
                            </div>
                            <div className='flex gap-2 py-2'>
                                <input type="checkbox" className='w-10 border border-gray-400 rounded-xl' />
                                <p>Remebmer me</p>
                            </div>
                            <div className='border border-gray-400 rounded-lg items-center justify-center text-center px-32 py-2 bg-three text-xl font-medium text-white mt-5'>
                                <button>Sign In</button>
                            </div>
                            <p className='mt-10 text-center text-gray-700'>Don't have an account? <span className='text-three font-semibold'>Sign up</span></p>
                        </div>
                    </div>
                    <div>
                        {/* <img src="./px.jpg" alt="" className='w-72'/> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signin