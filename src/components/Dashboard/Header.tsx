import React from 'react'
import logo from '../../assets/recyclick.svg'
import loc from '../../assets/district/Location.png'
import { useUserContext } from '../../contexts/UserContext'

const Header = () => {

  const {district} = useUserContext();

  return (
    <div className='w-full  bg-white'>
      <div className='flex justify-between items-center px-5'>
        <img src={logo} className='w-24 h-24' alt="logo" />
        <div className="rounded-lg bg-red-600 px-4 py-2 font-bold text-white focus:bg-red-900 flex gap-2">
          <img src={loc}></img>
          <span>{district}</span>
        </div>
      </div>
    </div>
  )
}

export default Header