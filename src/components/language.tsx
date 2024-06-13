import React, { useState } from 'react';

import city from "../assets/country/city.png"
const Language = () =>{

    const [on, setOn] = useState(0);


     return(

        <>
             
            
             <div className="relative w-full h-[100vh] overflow-hidden">
                 <div className="px-4 py-12 z-10 w-full flex flex-col justify-center items-center gap-4 gap-2">

                 <h1 className="text-xl font-bold text-center font-inter">SELECT LANGUAGE</h1>
                 <div className="w-full ml-4 justify-center mt-4 grid grid-cols-2 gap-6 ">
                       
                       <button  onClick={()=>{setOn(1)}} className="rounded-lg shadow-custom-dark bg-[#CCCBFF] w-36 h-36 relative focus:border border-red-500 "><span className="absolute  top-0 left-0 text-sm m-2 font-bold">English</span> <span className="text-3xl font-bold">EN</span></button>
                       <button  onClick={()=>{setOn(1)}}  className="rounded-lg shadow-custom-dark bg-[#85FF8A] w-36 h-36 relative focus:border border-red-500 "><span className="absolute  top-0 left-0 text-sm m-2 font-bold">தமிழ்</span> <span className="text-3xl font-bold">த</span></button>
                       <button onClick={()=>{setOn(1)}}  className="rounded-lg shadow-custom-dark bg-[#8186FF] w-36 h-36 relative focus:border border-red-500 "><span className="absolute  top-0 left-0 text-sm m-2 font-bold">हिन्दी</span> <span className="text-3xl font-bold">हि</span></button>
                       <button  onClick={()=>{setOn(1)}} className="rounded-lg shadow-custom-dark bg-[#FFCBCB] w-36 h-36 relative focus:border border-red-500 "><span className="absolute  top-0 left-0 text-sm m-2 font-bold">മലയാളം</span> <span className="text-3xl font-bold">മ</span></button>
                 </div>
                 {
                    on?
                 <button   className="rounded-lg px-8 py-2 bg-green-500 text-white w-40 mt-4 text-2xl">continue</button>
                 :
                 <></>
                 }

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