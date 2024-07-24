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
      <div className='px-5 w-full'>
      <Header toggleMenu={toggleMenu}/>
      <Outlet />
      <Footer/>
      </div>
    </div>
  )
}

export default Layout