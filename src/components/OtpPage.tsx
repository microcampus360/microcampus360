import React, { useEffect, useState } from 'react'
import {useForm, SubmitHandler} from 'react-hook-form'

interface FormValues{
    otp : number
}

const OtpPage = () => {

    const [timer, setTimer] = useState<number>(30);
    const [canResend, setCanResend] = useState<boolean>(false);

    const {register, handleSubmit, formState} = useForm<FormValues>();
    const {errors} = formState;

    useEffect(() => {
        let interval : NodeJS.Timeout;
        if(timer > 0){
            interval = setInterval(() => {
                setTimer((prevTimer) => prevTimer - 1);
            }, 1000);
        }
        else{
            setCanResend(true);
        }

        return () => clearInterval(interval);
    }, [timer]);

    const handleResendOtp = () => {
        setTimer(30);
        setCanResend(false);
        onResendOtp();
    }

    const onResendOtp = () => {
        console.log("Resend otp logic");
    }

    const onSubmit : SubmitHandler<FormValues> = (data) => {
        console.log(data);
    }

  return (
    <div className='h-full'>
        <div className='h-full py-5 px-3 flex flex-col items-center justify-center'>
        <form className='flex flex-col my-10 w-full text-xl' onSubmit={handleSubmit(onSubmit)}>
                <input type="number" className='border-2 border-slate-700 rounded-xl py-3 mx-5 px-2 text-center my-2' placeholder='Enter the OTP' {...register('otp', {
                    pattern: { value: /^\d{6}$/, message: 'OTP must be 6 digits' },
                    required: 'OTP is required!'
                })} />
                {errors.otp && <p className='text-red-500 w-full mb-1 mx-5'>{errors.otp.message}</p>}

                <div>
                    {canResend ? (
                    <button className='w-fit px-5 py-2 my-2 flex justify-end font-bold' onClick={handleResendOtp}>Resend OTP</button>
                    ) : (
                    <p className='w-fit px-5 py-2 my-2 flex justify-end text-slate-500'>Resend OTP in {timer} seconds</p>
                    )}
                </div>

                <button className='bg-[#006D4A] text-white py-3 px-2 mx-16 my-5 rounded-xl'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default OtpPage