import React from 'react'
import logo from '../assets/recyclick.svg'
import truck from '../assets/IndexPage/truck.svg'
import people from '../assets/IndexPage/people.svg'
import { Link } from 'react-router-dom'

const IndexPage = () => {

  return (
    <div>
        <div className='md:hidden'>
            <div className="h-[65vh] bg-gradient-to-t from-[#FFCFAB] via-[#EDD7B8] via-[30%] to-[#EFFAF5]">
                <div className='h-full flex flex-col items-center justify-end'>
                    <img src={logo} className='w-64 h-48' alt="" />
                    <img src={truck} className='w-full' alt="" />
                </div>
            </div>
            <div className='flex flex-col items-center'>
                <img src={people} className='w-[35vh]' alt="" />
                <div className='w-full flex justify-evenly py-4'>
                    <Link to='/login' className='text-2xl px-10 text-white bg-green-500 rounded-xl'>Login</Link>
                    <Link to='/register' className='text-2xl px-8 text-white bg-green-500 py-1 rounded-xl'>Register</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default IndexPage