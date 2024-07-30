import React from 'react'
import { NavLink } from 'react-router-dom'
const Signup = () => {
  return (

    //   <div className='bg-[url("./city.jpg")] w-auto h-96 rounded-xl mx-2 my-2 bg-center bg-no-repeat bg-cover'>
    //             <nav className='md:flex justify-between items-center py-5 md:mx-24 my-5 px-4'>
    //                 <NavLink to={'/'} className='hover:bg-slate-200 p-1 rounded-lg'>
    //                     <h1 className='text-base font-bold text-white text-center'>Argon Dashboard 2</h1>
    //                 </NavLink>
    //                 <div className=''>
    //                     <ul className='md:flex gap-5'>
    //                         <NavLink to={'/'} className='flex justify-center items-center gap-1 hover:bg-slate-200 p-1 rounded-lg'>
    //                             <a href="#"><i className="ri-dashboard-line"></i></a>
    //                             <h3>Dashboard</h3>
    //                         </NavLink>
    //                         <NavLink to={'profie'} className='flex justify-center items-center gap-1 hover:bg-slate-200 p-1 rounded-lg'>
    //                             <a href="#"><i className="ri-user-fill"></i></a>
    //                             <h3>Profile</h3>
    //                         </NavLink>
    //                         <NavLink to={''} className='flex justify-center items-center gap-1 hover:bg-slate-200 p-1 rounded-lg'>
    //                             <a href="#"><i className="ri-user-line border border-gray-400 rounded-full bg-gray-400"></i></a>
    //                             <h3>Sign Up</h3>
    //                         </NavLink>
    //                         <NavLink to={'signin'} className='flex justify-center items-center gap-1 hover:bg-slate-200 p-1 rounded-lg'>
    //                             <a href="#"><i className="ri-key-line font-bold text-gray-800"></i></a>
    //                             <h3>Sign In</h3>
    //                         </NavLink>
    //                     </ul>
    //                 </div>
    //                 <div className='border border-gray-400 rounded-lg px-10 py-2 font-bold text-xs text-white bg-gray-700 text-center'>
    //                     <button>
    //                         Free Download
    //                     </button>
    //                 </div>
    //             </nav>

    //             <div>
    //                 <div className='flex flex-col h-screen justify-center items-center'>
    //                         <h2 className='md:text-5xl text-2xl font-bold py-2 text-white text-center'>Welcome!</h2>
    //                         <p className='text-base font-medium py-2 mb-5 md:text-white text-center text-wrap'>Use these awesome forms to login or create new account in your project for free.</p>
    //                     <div className='border-none border-gray-400 rounded-xl shadow-sm p-5 bg-white'>

    //                       <div className='text-center'>
    //                         <h2 className='text-xl font-medium py-2 mb-5'>Register with</h2>
    //                         <div className='flex items-center justify-center gap-2 py-5'>
    //                           <img src="./facebook.png" alt="" className='w-10 border border-gray-400 rounded-lg p-2'/>
    //                           <img src="./apple-logo.png" alt="" className='w-10 border border-gray-400 rounded-lg p-2'/>
    //                           <img src="./google.png" alt="" className='w-10 border border-gray-400 rounded-lg p-2'/>
    //                         </div>
    //                       </div>

    //                       <p className='text-center py-2'>or</p>

    //                         <div className='flex flex-col gap-2 py-2'>
    //                         <input type="text" placeholder='Name' className='px-5 py-2 border border-gray-400 rounded-lg' />
    //                             <input type="Email" placeholder='Email' className='px-5 py-2 border border-gray-400 rounded-lg' />
    //                             <input type="password" placeholder='Password' className='px-5 py-2 border border-gray-400 rounded-lg' />
    //                         </div>
    //                         <div className='flex gap-2 py-2'>
    //                             <input type="checkbox" className='w-4 border border-gray-400 rounded-xl' />
    //                             <p>I agree the <strong>Terms and Conditions</strong></p>
    //                         </div>
    //                         <div className='border border-gray-400 rounded-lg items-center justify-center text-center md:px-32 py-2 bg-gray-700 text-xl font-medium text-white mt-5'>
    //                             <button>Sign up</button>
    //                         </div>
    //                         <p className='mt-10 text-center text-gray-700'>Already have an account? <strong>Sign in</strong></p>
    //                     </div>
    //                 </div>

    //                 <div className='md:flex flex-wrap items-center justify-center text-center mt-10'>
    //                     <ul className='md:flex gap-14 text-gray-500 font-medium'>
    //                         <li>Company</li>
    //                         <li>About Us</li>
    //                         <li>Team</li>
    //                         <li>Product</li>
    //                         <li>Blog</li>
    //                         <li>Pricing</li>
    //                     </ul>
    //                 </div>

    //                 <div className='flex items-center justify-center text-center mt-10 font-medium text-xl text-gray-400 gap-5'>
    //                     <a href="#"><i class="ri-facebook-box-fill"></i></a>
    //                     <a href="#"><i class="ri-twitter-line"></i></a>
    //                     <a href="#"><i class="ri-instagram-line"></i></a>
    //                     <a href="#"><i class="ri-pinterest-line"></i></a>
    //                     <a href="#"><i class="ri-linkedin-box-fill"></i></a>
    //                 </div>
    //                <div className='flex items-center justify-center text-center mt-5 p-2 font-medium text-base text-gray-400 '>
    //                 <p>Copyright © 2022 Argon by Creative Tim.</p>
    //                </div>
    //             </div>
    //         </div>

    <div className='bg-[url("./city.jpg")] w-auto h-96 md:h-96 bg-center bg-no-repeat bg-cover'>
    <nav className='md:flex justify-between items-center py-5 md:mx-24 my-5 px-4'>
        <NavLink to={'/'} className='hover:bg-slate-200 p-1 rounded-lg'>
            <h1 className='text-base font-bold text-four text-center'>Argon Dashboard 2</h1>
        </NavLink>
        <div className=''>
            <ul className='md:flex gap-5'>
                <NavLink to={'/'} className='flex justify-center items-center gap-1 hover:bg-slate-200 p-1 rounded-lg'>
                    <a href="#"><i className="ri-dashboard-line"></i></a>
                    <h3>Dashboard</h3>
                </NavLink>
                <NavLink to={'/profile'} className='flex justify-center items-center gap-1 hover:bg-slate-200 p-1 rounded-lg'>
                    <a href="#"><i className="ri-user-fill"></i></a>
                    <h3>Profile</h3>
                </NavLink>
                <NavLink to={''} className='flex justify-center items-center gap-1 hover:bg-slate-200 p-1 rounded-lg'>
                    <a href="#"><i className="ri-user-line border border-gray-400 rounded-full bg-gray-400"></i></a>
                    <h3>Sign Up</h3>
                </NavLink>
                <NavLink to={'/signin'} className='flex justify-center items-center gap-1 hover:bg-slate-200 p-1 rounded-lg'>
                    <a href="#"><i className="ri-key-line font-bold text-gray-800"></i></a>
                    <h3>Sign In</h3>
                </NavLink>
            </ul>
        </div>
        <div className='border border-gray-400 rounded-lg px-10 py-2 font-bold text-xs text-white bg-gray-700 text-center'>
            <button>
                Free Download
            </button>
        </div>
    </nav>

    <div>
        <div className='flex flex-col h-auto md:h-screen justify-center items-center'>
            <h2 className='md:text-5xl text-2xl font-bold md:py-2 md:mt-10 text-white text-center'>Welcome!</h2>
            <p className='text-base font-medium md:py-2 mb-5 text-white text-center'>Use these awesome forms to login or create new account in your project for free.</p>
            <div className='border-none border-gray-400 rounded-xl shadow-sm p-5 bg-white'>

                <div className='text-center'>
                    <h2 className='text-xl font-medium py-2 mb-5'>Register with</h2>
                    <div className='flex items-center justify-center gap-2 py-5'>
                        <img src="./facebook.png" alt="" className='w-10 border border-gray-400 rounded-lg p-2'/>
                        <img src="./apple-logo.png" alt="" className='w-10 border border-gray-400 rounded-lg p-2'/>
                        <img src="./google.png" alt="" className='w-10 border border-gray-400 rounded-lg p-2'/>
                    </div>
                </div>

                <p className='text-center py-2'>or</p>

                <div className='flex flex-col gap-2 py-2'>
                    <input type="text" placeholder='Name' className='px-5 py-2 border border-gray-400 rounded-lg' />
                    <input type="Email" placeholder='Email' className='px-5 py-2 border border-gray-400 rounded-lg' />
                    <input type="password" placeholder='Password' className='px-5 py-2 border border-gray-400 rounded-lg' />
                </div>
                <div className='flex gap-2 py-2'>
                    <input type="checkbox" className='w-4 border border-gray-400 rounded-xl' />
                    <p>I agree the <strong>Terms and Conditions</strong></p>
                </div>
                <div className='border border-gray-400 rounded-lg items-center justify-center text-center md:px-32 py-2 bg-gray-700 text-xl font-medium text-white mt-5'>
                    <button>Sign up</button>
                </div>
                <p className='mt-10 text-center text-gray-700'>Already have an account? <strong>Sign in</strong></p>
            </div>
        </div>

        <div className='md:flex flex-wrap items-center justify-center text-center mt-10'>
            <ul className='md:flex gap-14 text-gray-500 font-medium'>
                <li>Company</li>
                <li>About Us</li>
                <li>Team</li>
                <li>Product</li>
                <li>Blog</li>
                <li>Pricing</li>
            </ul>
        </div>

        <div className='flex items-center justify-center text-center mt-10 font-medium text-xl text-gray-400 gap-5'>
            <a href="#"><i class="ri-facebook-box-fill"></i></a>
            <a href="#"><i class="ri-twitter-line"></i></a>
            <a href="#"><i class="ri-instagram-line"></i></a>
            <a href="#"><i class="ri-pinterest-line"></i></a>
            <a href="#"><i class="ri-linkedin-box-fill"></i></a>
        </div>
        <div className='flex items-center justify-center text-center mt-5 p-2 font-medium text-base text-gray-400 '>
            <p>Copyright © 2022 Argon by Creative Tim.</p>
        </div>
    </div>
</div>

  )
}

export default Signup