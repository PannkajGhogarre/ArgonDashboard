import React, {useState} from 'react'
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer'

const Layout = () => {
 
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='md:flex flex-row w-auto h-auto overflow-hidden'>
      <div><Sidebar isOpen={isOpen}/></div>
      <div className='px-5 w-full max-h-screen overflow-y-auto'>
      <Header toggleMenu={toggleMenu}/>
      <Outlet />
      <Footer/>
      <div className="fixed right-8 bottom-10 flex justify-center items-center px-4">
                        <button className="font-extrabold text-2xl bg-gray-300 rounded-full px-4 py-3">
                            <a href="#"><i className="ri-settings-3-fill"></i></a>
                        </button>
                    </div>
      </div>
    </div>
  )
}

export default Layout