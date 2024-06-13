import React from 'react'
import Header from './Header'
import {Outlet} from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <h3 className='h-screen text-6xl font-bold w-full flex justify-center items-center max-md:hidden'>This App is only available for mobile View</h3>
      <div className="h-screen flex flex-col min-h-screen md:hidden">
              <Header/>
              <Outlet/>
          </div>
    </>
  )
}

export default Layout