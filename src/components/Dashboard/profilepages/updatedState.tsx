import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import city from "../../../assets/country/city.png"


import kerala from "../../../assets/state/kerala.png"
import andhra from "../../../assets/state/andhra.png"
import telangana from "../../../assets/state/telangana.png"
import maha from "../../../assets/state/maha.png"
import karnatak from "../../../assets/state/karnataka.png"
import tamil  from "../../../assets/state/tamil.png"
import { useUserContext } from "../../../contexts/UserContext"
import ClipLoader from "react-spinners/ClipLoader";

interface State{
   name : string,
   image : string
}

const UpdatedState = () =>{

    type StateImage = string;

   const [load, setLoad] = useState<number>(0);


    const [on, setOn] = useState<number>(0);
    const navigate = useNavigate();
    const {setState} = useUserContext();


    const handleUpdateForm = () =>{
        setLoad(1)
       //perform post to update state field in user
       setTimeout(()=>{
           navigate("/dashboard/profile")
       },2000)
       
        
    }

    const states: State[] = [
      { name: 'Kerala', image: kerala },
      { name: 'Andhra Pradesh', image: andhra },
      { name: 'Telangana', image: telangana },
      { name: 'Maharashtra', image: maha },
      { name: 'Karnataka', image: karnatak },
      { name: 'Tamil Nadu', image: tamil },
    ];

     return(

        <>
              <div className="h-[80vh] overflow-scroll mb-4">
            
             <div className="md:hidden relative w-full h-[100vh] overflow-hidden">
                 <div className="px-4 py-12 z-10 w-full flex flex-col justify-center items-center gap-4 gap-2">
                 
                 
                 <h1 className="text-xl font-bold text-center font-inter">SELECT STATE</h1>
                 <div className="w-full ml-4 justify-center mt-4 grid grid-cols-2 gap-8 ">
                  {
                     states.map((item:State) =>(

                       
                           <button  onClick={()=>{setOn(1)
                              setState(item.name);
                           }} className="rounded-lg  w-40 h-40 flex items-center justify-center relative focus:border-2 border-red-500 "><img className='w-36 h-36' src={item.image}></img></button>
                       

                     ))
                  }
                       
                      
                     
                       
                 </div>
                 {
                    on?

                    <div className='z-10'>
                        {
                            !load?
                            <button onClick={handleUpdateForm} className="rounded-lg z-10 px-8 py-2 bg-green-500 text-white w-40 mt-4 text-2xl">Update</button>
                            :

                            <ClipLoader
                            color={"green"}
                           
        
                            size={50}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                          />

                        }
                        
                    </div>
                
                 :
                 <></>
                 }


                 </div>
                 <div className="flex absolute bottom-0">
                    <img className="transform scale-x-[-1]" src={city}></img>
                    <img className="" src={city}></img>
                </div>

               
                 
                

             </div>
             </div>
         
        </>

     )



}

export default UpdatedState;