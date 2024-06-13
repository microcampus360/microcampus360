import React from "react";
import eng from "../images/languages/Property 1=Default (1).png"
import hindi from "../images/languages/Property 1=Default (4).png"
import telugu from "../images/languages/Property 1=Default (2).png"
import tamil from "../images/languages/Property 1=Default.png"
import city from "../images/country/city.png"
const Language = () =>{

    


     return(

        <>
             
            
             <div className="relative w-full h-[100vh] overflow-hidden">
                 <div className="px-4 py-12 z-10 flex flex-col justify-center items-center gap-4 gap-2">

                 <h1 className="text-xl font-bold text-center font-inter">SELECT LANGUAGE</h1>
                 <div className="w-full flex justify-start mt-4 grid grid-cols-2 gap-6 ">
                       
                       <button   className="eng rounded-lg "></button>
                       <button className="shadow-custom-dark rounded-lg w-36  focus:border-red-500 "><img src={tamil}></img></button>
                       <button className="shadow-custom-dark rounded-lg w-36  focus:border-red-500 "><img src={hindi}></img></button>
                       <button className="shadow-custom-dark rounded-lg w-36  focus:border-red-500 "><img src={tamil}></img></button>
                 </div>

                 <button   className="rounded-lg px-8 py-2 bg-green-300 text-white w-40 mt-6 text-2xl">continue</button>
                

                 </div>

                <div className="absolute bottom-0 left-0">
                 
                <h2 className="text-center z-10 text-sm"> <span className="font-bold">NOTE : </span>Once you choose a language, you can change language again from Profile -&gt; Language.</h2>
                <div className="flex ">
                    <img className="transform scale-x-[-1]" src={city}></img>
                    <img className="" src={city}></img>
                </div>
                

                </div>
                 
                

             </div>
         
        </>

     )



}

export default Language;