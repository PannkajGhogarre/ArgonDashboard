import React from 'react'
import Header from './component/Header'
import Dashboard from './component/Dashboard'
import { Route, Routes } from 'react-router-dom'
import Tables from './component/Tables'
import Layout from './component/Layout'
import Billing from './component/Billing'
import Virtual from './component/Virtual'
import Rtl from './component/Rtl'
import Signin from './component/Signin'
import Signup from './component/Signup'
import Profile from './component/Profile'

const App = () => {
  return (
    <div className='md:w-full h-72 bg-one'>
      <Routes >
        <Route path='/' element={<Layout />} >
          <Route index element={<Dashboard />} />
          <Route path='tables' element={<Tables />} />
          <Route path='billing' element={<Billing />} />
          {/* <Route path='virtual' element={<Virtual />} /> */}
          <Route path='rtl' element={<Rtl />} />
          <Route path='profile' element={<Profile />} />
        </Route>
        <Route path='signin' element={<Signin />} />
        <Route path='signup' element={<Signup />} />
      </Routes>
    </div>
  )
}

export default App