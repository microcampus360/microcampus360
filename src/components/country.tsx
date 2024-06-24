import React, { useState } from "react";
import ind from "../assets/country/india.png"
import city from "../assets/country/city.png"
import { useNavigate } from 'react-router-dom'
import { useUserContext } from "../contexts/UserContext";

const Country = () =>{

     const [on, setOn] = useState<number>(0);
     const navigate = useNavigate();
     const {setCountry} = useUserContext();

     return(

        <>
             
            
             <div className="md:hidden relative w-full  h-screen">
                 <div className="px-4 py-16">

                 <h1 className="text-xl font-bold text-center font-inter">SELECT COUNTRY</h1>
                 <div className="w-full flex justify-start mt-16 ">
                       
                       <button onClick={()=>{
                        setOn(1)
                        setCountry("India");
                        }} className="shadow-custom-dark rounded-lg py-6 focus:border border-red-500 "><img src={ind} alt="country"></img></button>
                 </div>

                 </div>
                 <div className="flex items-center justify-center">

                 

                 {
                    on?
                 <button onClick={()=>{navigate("/language")}} className="rounded-lg px-8 py-2 bg-green-500 text-white w-40 mt-4 text-2xl">continue</button>
                 :
                 <></>
                 }
                 </div>
                 
                 <img className="absolute bottom-0 left-0 transform scale-x-[-1]" src={city} alt="city"></img>
                 <img className="absolute bottom-0 right-0" src={city} alt="city"></img>

             </div>
         
        </>

     )



}

export default Country;