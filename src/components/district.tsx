import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import city from "../assets/country/city.png"
import left from "../assets/welcome/round-left.png"
import loc from "../assets/district/Location.png"
import { useUserContext } from '../contexts/UserContext';


const District = () => {



   const [on, setOn] = useState<number>(0);
   const navigate = useNavigate();
   const { setDistrict } = useUserContext();

   const districts: string[] = ['ERNAKULUM', 'ALAPPHUZA', 'KOZHIKODE', 'TRIVANDRUM', 'THRISSUR']

   return (

      <>


         <div className="md:hidden relative w-full h-[100vh] overflow-hidden">
            <div className="px-4 py-12 z-10 w-full flex flex-col justify-center items-center gap-2">
               <button onClick={() => { navigate("/state") }}>   <img className="absolute top-0 left-0 m-4" src={left} alt='left'></img> </button>

               <h1 className="text-xl font-bold text-center font-inter">SELECT DISTRICT</h1>
               <div className="w-full ml-4 justify-center mt-4 grid grid-cols-2 gap-8 ">
                  {
                     districts.map((item: string) => (


                        <button onClick={() => {
                           setOn(1)
                           setDistrict(item);
                        }

                        } className="rounded-lg relative   bg-red-600 px-6 py-2 font-bold text-white focus:bg-red-900 "><img className='absolute left-0 ml-2' src={loc} alt='location'></img>{item}</button>


                     ))
                  }




               </div>
               {
                  on ?
                     <button onClick={() => { navigate("/dashboard") }} className=" z-10 rounded-lg px-8 py-2 bg-green-500 text-white w-40 mt-4 text-2xl">continue</button>
                     :
                     <></>
               }

            </div>
            <div className="flex absolute bottom-0">
               <img className="transform scale-x-[-1]" src={city} alt='city'></img>
               <img className="" src={city} alt='city'></img>
            </div>





         </div>

      </>

   )



}

export default District;