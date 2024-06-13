import React from 'react'
import {useForm, SubmitHandler} from 'react-hook-form'
import truck from '../assets/RegisterPage/truck.svg'
import { useNavigate } from 'react-router-dom'

interface FormValues {
    name: string,
    phone : number,
    email : string,
    password: string,
}

const RegisterPage = () => {

    const {register, handleSubmit, formState} = useForm<FormValues>();
    const {errors} = formState;
    const navigate = useNavigate();

    const onSubmit : SubmitHandler<FormValues> = (data) => {
        console.log(data);
        navigate('/otp');
    }

  return (
    <div className='h-full'>
        <div className='h-full py-5 px-3 flex flex-col items-center justify-center'>
            <div className='flex flex-col w-full'>
                <img src={truck} className='w-full' alt="" />
                <h2 className='text-xl font-bold my-5'>Register with Recyclick</h2>
            </div>
            <form className='flex flex-col my-10 w-full text-xl' onSubmit={handleSubmit(onSubmit)}>
                <input type="text" className='border-2 border-slate-700 rounded-xl py-3 mx-5 px-2 text-center my-2' placeholder='Enter your Name' {...register('name', {
                    required: 'Name is required!'
                })} />
                {errors.name && <p className='text-red-500 w-full mb-1 mx-5'>{errors.name.message}</p>}
                <input type="email" className='border-2 border-slate-700 rounded-xl py-3 mx-5 px-2 text-center my-2' placeholder='Enter your Email' {...register('email', {
                    pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                        message: "Enter a valid email address"
                    },
                    required: 'Email is required!'
                })} />
                {errors.email && <p className='text-red-500 w-full mb-1 mx-5'>{errors.email.message}</p>}
                <input type="number" className='border-2 border-slate-700 rounded-xl py-3 mx-5 px-2 text-center my-2' placeholder='Enter your Phone' {...register('phone', {
                    required: 'Phone number is required!',
                    pattern: { value: /^\d{10}$/, message: 'Phone number must be 10 digits' }
                })} />
                {errors.phone && <p className='text-red-500 w-full mb-1 mx-5'>{errors.phone.message}</p>}
                <input type="password" className='border-2 border-slate-700 rounded-xl py-3 mx-5 px-2 text-center my-2' placeholder='Enter your Password' {...register('password', {
                    required: 'Password is required!',
                    minLength: {
                        value: 8,
                        message: "Password should be atleast 8 characters"
                    }
                })} />
                {errors.password && <p className='text-red-500 w-full mb-1 mx-5'>{errors.password.message}</p>}
                <button className='bg-[#006D4A] text-white py-3 px-2 mx-16 my-5 rounded-xl'>Register</button>
            </form>
        </div>
    </div>
  )
}

export default RegisterPage