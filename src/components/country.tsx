import React from "react";
import ind from "../assets/country/india.png"
import city from "../assets/country/city.png"


const Country = () =>{


     return(

        <>
             
            
             <div className="relative w-full h-screen">
                 <div className="px-4 py-16">

                 <h1 className="text-xl font-bold text-center font-inter">SELECT COUNTRY</h1>
                 <div className="w-full flex justify-start mt-16 ">
                       
                       <button className="shadow-custom-dark rounded-lg py-6 "><img src={ind}></img></button>
                 </div>

                 </div>
                 
                 <img className="absolute bottom-0 left-0 transform scale-x-[-1]" src={city}></img>
                 <img className="absolute bottom-0 right-0" src={city}></img>

             </div>
         
        </>

     )



}

export default Country;