import React from 'react'

const Profile = () => {
    return (
        <div className='mx-auto p-4'>
            <div className='md:flex items-center md:justify-between md:mt-28 border-none border-gray-400 rounded-xl shadow-md p-4 bg-white'>
                <div className='flex items-center justify-center gap-5'>
                    <img src="./icons.png" alt="" className=' w-20 border border-gray-300 rounded-lg p-1' />
                    <div className='items-center justify-center'>
                        <h2 className='text-xl font-medium'>Alex Thompson</h2>
                        <p className='text-base font-normal'>CEO / Co-Founder</p>
                    </div>
                </div>
                <div className='flex flex-wrap items-center justify-center md:gap-10 gap-5 border-none border-gray-400 rounded-lg p-3 bg-gray-100'>
                    <div className='flex gap-1'>
                        <a href="#"><i className="ri-apps-fill font-normal text-gray-600"></i></a>
                        <h3 className='font-normal text-gray-600'>App</h3>
                    </div>
                    <div className='flex gap-1'>
                        <a href="#"><i className="ri-message-2-fill font-normal text-gray-600"></i></a>
                        <h3 className='font-normal text-gray-600'>Message</h3>
                    </div>
                    <div className='flex gap-1'>
                        <a href="#"><i className="ri-settings-2-fill font-normal text-gray-600"></i></a>
                        <h3 className='font-normal text-gray-600'>Setting</h3>
                    </div>
                </div>
            </div>

            <div className='md:flex mt-5 justify-between gap-1'>
                <div className='w-full box-border border-gray-400 rounded-xl p-4 mt-5 bg-white'>
                    <h2 className='text-base font-bold text-four'>Platform Settings</h2>
                    <div className='mt-5'>
                        <h2 className='mt-5 text-base font-medium text-gray-700'>ACCOUNT</h2>
                        <div className='flex gap-4 mt-5'>
                            <input type="checkbox" />
                            <p>Email me when someone follows me</p>
                        </div>
                        <div className='flex gap-4 mt-5'>
                            <input type="checkbox" />
                            <p>Email me when someone answers on my post</p>
                        </div>
                        <div className='flex gap-4 mt-5'>
                            <input type="checkbox" />
                            <p>Email me when someone mentions me</p>
                        </div>

                        <h2 className='mt-5 text-base font-medium text-gray-700'>APPLICATION</h2>
                        <div className='flex gap-4 mt-5'>
                            <input type="checkbox" />
                            <p>New launches and projects</p>
                        </div>
                        <div className='flex gap-4 mt-5'>
                            <input type="checkbox" />
                            <p>Monthly product updates</p>
                        </div>
                        <div className='flex gap-4 mt-5'>
                            <input type="checkbox" />
                            <p>Subscribe to newsletter</p>
                        </div>
                    </div>
                </div>

                <div className='w-full box-border border-gray-400 rounded-xl p-4 mt-5 bg-white'>
                    <div className='flex justify-between'>
                        <h2 className='text-base font-bold text-four'>Profile Information</h2>
                        <a href="#"><i className="ri-pencil-line"></i></a>
                    </div>
                    <p className='text-wrap text-base font-normal text-gray-500 mt-5'>Hi, I'm Alec Thompson, Decisions: If you can't decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).</p>

                    <h3 className='text-base font-semibold mt-5'>Full Name: <span className='text-base font-normal text-gray-500'>Alec M. Thompson</span></h3>
                    <h3 className='text-base font-semibold mt-5'>Mobile: <span className='text-base font-normal text-gray-500'>(44) 123 1234 123</span></h3>
                    <h3 className='text-base font-semibold mt-5'>Email: <span className='text-base font-normal text-gray-500'>alecthompson@mail.com</span></h3>
                    <h3 className='text-base font-semibold mt-5'>Location: <span className='text-base font-normal text-gray-500'>USA</span></h3>
                    <div className='flex mt-5 gap-3'>
                        <h3 className='text-base font-semibold'>Social:</h3>
                        <a href="#"><i className="ri-facebook-box-fill"></i></a>
                        <a href="#"><i className="ri-twitter-fill"></i></a>
                        <a href="#"><i className="ri-instagram-fill"></i></a>
                    </div>
                </div>

                <div className='w-full box-border border-gray-400 rounded-xl p-4 mt-5 bg-white'>
                    <h2 className='text-base font-bold text-four'>Conversations</h2>
                    <div className='flex justify-between mt-10'>
                        <div className='flex items-center justify-center gap-4'>
                        <img src="./icons.png" alt="" className='w-14'/>
                        <div>
                            <h1 className='text-base font-medium text-gray-800'>Sophie B.</h1>
                            <p className='text-xs'>Hi! I need more information..</p>
                        </div>
                        </div>
                        <button className='text-one font-medium'>Reply</button>
                    </div>
                    <div className='flex justify-between mt-3'>
                        <div className='flex items-center justify-center gap-4'>
                        <img src="./icons.png" alt="" className='w-14'/>
                        <div>
                            <h1 className='text-base font-medium text-gray-800'>Anne Marie</h1>
                            <p className='text-xs'>Awesome work, can you..</p>
                        </div>
                        </div>
                        <button className='text-one font-medium'>Reply</button>
                    </div>
                    <div className='flex justify-between mt-3'>
                        <div className='flex items-center justify-center gap-4'>
                        <img src="./icons.png" alt="" className='w-14'/>
                        <div>
                            <h1 className='text-base font-medium text-gray-800'>Ivanna</h1>
                            <p className='text-xs'>About files I can..</p>
                        </div>
                        </div>
                        <button className='text-one font-medium'>Reply</button>
                    </div>
                    <div className='flex justify-between mt-3'>
                        <div className='flex items-center justify-center gap-4'>
                        <img src="./icons.png" alt="" className='w-14'/>
                        <div>
                            <h1 className='text-base font-medium text-gray-800'>Peterson</h1>
                            <p className='text-xs'>Have a great afternoon..</p>
                        </div>
                        </div>
                        <button className='text-one font-medium'>Reply</button>
                    </div>
                    <div className='flex justify-between mt-3'>
                        <div className='flex items-center justify-center gap-4'>
                        <img src="./icons.png" alt="" className='w-14'/>
                        <div>
                            <h1 className='text-base font-medium text-gray-800'>Nick Daniel</h1>
                            <p className='text-xs'>Hi! I need more information..</p>
                        </div>
                        </div>
                        <button className='text-one font-medium'>Reply</button>
                    </div>
                </div>

            </div>

            <div className='mt-5 border-none border-gray-200 rounded-xl p-4 bg-white md:text-left text-center'>
                <h2 className='text-base font-medium text-four'>Projects</h2>
                <h3 className='text-sm font-medium text-four mt-5'>Architects design houses</h3>
                <div className='md:flex flex-wrap mt-5 justify-between text-center mx-auto'>
                    <div className='w-64 items-center justify-center mt-5 mx-auto'>
                        <img src="./1.jpg" alt="" className='w-64 h-36 rounded-xl'/>
                        <h3 className='text-base font-normal text-four mt-3'>project #2</h3>
                        <h1 className='text-xl font-medium text-four mt-3'>Modern</h1>
                        <p className='text-base font-normal text-four mt-3'>As Uber works through a huge amount of internal management turmoil.</p>
                        <div className='mt-5'>
                        <button className='border border-one rounded-lg px-6 py-1 text-sm text-center items-center bg-white justify-center text-one font-semibold'>View Project</button>
                        </div>
                    </div>
                    <div className='w-64 items-center justify-center mt-5 mx-auto'>
                        <img src="./2.jpg" alt="" className='w-64 h-36 rounded-xl'/>
                        <h3 className='text-base font-normal text-four mt-3'>project #1</h3>
                        <h1 className='text-xl font-medium text-four mt-3'>scandinavian</h1>
                        <p className='text-base font-normal text-four mt-3'>Music is something that every person has his or her own specific opinion about..</p>
                        <div className='mt-5'>
                        <button className='border border-one rounded-lg px-6 py-1 text-sm text-center items-center bg-white justify-center text-one font-semibold'>View Project</button>
                        </div>
                    </div>
                    <div className='w-64 items-center justify-center mt-5 mx-auto'>
                        <img src="./3.jpg" alt="" className='w-64 h-36 rounded-xl'/>
                        <h3 className='text-base font-normal text-four mt-3'>project #3</h3>
                        <h1 className='text-xl font-medium text-four mt-3'>minimalist</h1>
                        <p className='text-base font-normal text-four mt-3'>Different people have different taste, and various types of music.</p>
                        <div className='mt-5'>
                        <button className='border border-one rounded-lg px-6 py-1 text-sm text-center items-center bg-white justify-center text-one font-semibold'>View Project</button>
                        </div>
                    </div>
                    <div className='flex flex-col w-64 h-auto items-center justify-center mt-5 text-center border border-gray-400 rounded-xl p-4 mx-auto'>
                        <a href="#"><i className="ri-add-large-line text-xl font-bold text-gray-400"></i></a>
                        <h1 className='text-2xl font-bold text-gray-400 mt-3'>New project</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile