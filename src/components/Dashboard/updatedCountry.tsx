import React, { useContext, useState } from "react";
import ind from "../../assets/country/india.png"
import city from "../../assets/country/city.png"
import { useNavigate } from 'react-router-dom'
import { useUserContext } from "../../contexts/UserContext"
import ClipLoader from "react-spinners/ClipLoader";

const UpdatedCountry = () =>{
    const [load, setLoad] = useState<number>(0);

     const [on, setOn] = useState<number>(0);
     const navigate = useNavigate();
     const {setCountry} = useUserContext();

     const handleUpdateForm = () =>{
         setLoad(1)
        //perform post to update country field in user
        setTimeout(()=>{
            navigate("/dashboard/profile")
        },2000)
        
         
     }

     return(

        <>
               <div className="h-[80vh] overflow-scroll mb-4">
            
             <div className="md:hidden relative w-full  h-screen">
                 <div className="px-4 py-16">

                 <h1 className="text-xl font-bold text-center font-inter">CHANGE COUNTRY</h1>
                 <div className="w-full flex justify-start mt-16 ">
                       
                       <button onClick={()=>{
                        setOn(1)
                        setCountry("India");
                        }} className="shadow-custom-dark rounded-lg py-6 focus:border border-red-500 "><img src={ind}></img></button>
                 </div>

                 </div>
                 <div className="flex items-center justify-center">

                 

                 {
                    on?

                    <div>
                        {
                            !load?
                            <button onClick={handleUpdateForm} className="rounded-lg px-8 py-2 bg-green-500 text-white w-40 mt-4 text-2xl">Update</button>
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
                 
                 <img className="absolute bottom-0 left-0 transform scale-x-[-1]" src={city}></img>
                 <img className="absolute bottom-0 right-0" src={city}></img>

             </div>
             </div>
         
        </>

     )



}

export default UpdatedCountry;