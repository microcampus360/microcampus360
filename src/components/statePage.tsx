import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import city from "../assets/country/city.png"
import left from "../assets/welcome/round-left.png"

import kerala from "../assets/state/kerala.png"
import andhra from "../assets/state/andhra.png"
import telangana from "../assets/state/telangana.png"
import maha from "../assets/state/maha.png"
import karnatak from "../assets/state/karnataka.png"
import tamil  from "../assets/state/tamil.png"
import { useUserContext } from '../contexts/UserContext';

interface state{
   name : string,
   image : string
}

const State = () =>{

    const [on, setOn] = useState<number>(0);
    const navigate = useNavigate();
    const {setState} = useUserContext();

    const states: state[] = [
      { name: 'Kerala', image: kerala },
      { name: 'Andhra Pradesh', image: andhra },
      { name: 'Telangana', image: telangana },
      { name: 'Maharashtra', image: maha },
      { name: 'Karnataka', image: karnatak },
      { name: 'Tamil Nadu', image: tamil },
    ];

     return(

        <>
             
            
             <div className="md:hidden relative w-full h-[100vh] overflow-hidden">
                 <div className="px-4 py-12 z-10 w-full flex flex-col justify-center items-center gap-2">
                 <button onClick={()=>{navigate("/language")}}>   <img className="absolute top-0 left-0 m-4" src={left} alt='left' ></img> </button>
                 
                 <h1 className="text-xl font-bold text-center font-inter">SELECT STATE</h1>
                 <div className="w-full ml-4 justify-center mt-4 grid grid-cols-2 gap-8 ">
                  {
                     states.map((item:state) =>(

                       
                           <button  onClick={()=>{setOn(1)
                              setState(item.name);
                           }} className="rounded-lg  w-40 h-40 flex items-center justify-center relative focus:border-2 border-red-500 "><img className='w-36 h-36' src={item.image} alt='state'></img></button>
                       

                     ))
                  }
                       
                      
                     
                       
                 </div>
                 {
                    on?
                 <button onClick={()=>{navigate("/district")}}  className=" z-10 rounded-lg px-8 py-2 bg-green-500 text-white w-40 mt-4 text-2xl">continue</button>
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

export default State;