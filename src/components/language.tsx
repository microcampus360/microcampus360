import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import city from "../assets/country/city.png"
import left from "../assets/welcome/round-left.png"
import { useUserContext } from '../contexts/UserContext';
const Language = () =>{

   type StateImage = string;

    const [on, setOn] = useState<number>(0);
    const navigate = useNavigate();
    const {setLanguage} = useUserContext();
     
    interface Language {
      lang: string;
      sub: string;
      color : string
    }

    const languages: Language[] = [
      { lang: 'English', sub: 'EN' ,color : "#CCCBFF"},
      { lang: 'தமிழ்', sub: 'த',color:"#85FF8A" },
      { lang: 'हिन्दी', sub: 'हि' ,color:"#8186FF"},
      { lang: 'മലയാളം', sub: 'മ' ,color:"#FFCBCB"},
      
    ];

     return(

        <>
             
            
             <div className="md:hidden relative w-full h-[100vh] overflow-hidden">
                 <div className="px-4 py-12 z-10 w-full flex flex-col justify-center items-center gap-4 gap-2">
                 <button onClick={()=>{navigate("/country")}}>   <img className="absolute top-0 left-0 m-4" src={left}></img> </button>
                 <h1 className="text-xl font-bold text-center font-inter">SELECT LANGUAGE</h1>
                 <div className="w-full ml-4 justify-center mt-4 grid grid-cols-2 gap-6 ">
                        
                        {
                           languages.map((item:Language)=>(
                              <button  onClick={()=>{setOn(1)
                                 setLanguage(item.lang);
                              }} className={`rounded-lg shadow-custom-dark bg-[${item.color}] w-36 h-36 relative focus:border border-red-500 `}><span className="absolute  top-0 left-0 text-sm m-2 font-bold">{item.lang}</span> <span className="text-3xl font-bold">{item.sub}</span></button>

                           ))
                        }
                      
                      
                 </div>
                 {
                    on?
                 <button onClick={()=>{navigate("/state")}}  className="rounded-lg px-8 py-2 bg-green-500 text-white w-40 mt-4 text-2xl">continue</button>
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