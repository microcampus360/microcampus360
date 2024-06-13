import React, { useState } from "react";
import left from "../assets/welcome/round-left.png"
import logo from "../assets/recyclick.svg"
import indiCust from "../assets/welcome/welcome1.png"
import city from "../assets/country/city.png"
const Welcome = () =>{

    const [welcomeNav,setNav] = useState<number[]>([1,0,0])


   


     return(

        <>
             
            <div className="md:hidden overflow-hidden">

                <div className="relative flex items-center justify-center w-full ">
                    <img className="absolute top-0 left-0 m-4" src={left}></img>
                    <div className="mt-10 flex items-center justify-center flex-col gap-4">
                        <h2 className="text-sm text-gray-500 font-semibold">Welcome to</h2>
                        <img className="w-28" src={logo}></img>

                    </div>

                </div>

                {
                    welcomeNav[0]?
                    <>
                    <div className="flex flex-col items-center justify-center w-full mt-4 gap-2 z-10">
                    <img className="w-116" src={indiCust}></img>
                    <h1 className="text-xl font-bold z-10">INDIVIDUAL CUSTOMER</h1>
                    <h2 className="text-sm text-center p-4 z-10">Team AAKRI specialises on time scrap/trash removal from residence/commercial houses. Just Schedule the booking through the AAKRI App and we'll be on our way. Our experienced, friendly and professional staff will be at your doorstep on the scheduled pickup date, quickly and efficiently weigh your scrap/trash and immediately pay you the cash/transfers then and there.</h2>

                    </div>
                    </>
                    :
                    welcomeNav[1]?
                    <>

<div className="flex flex-col items-center justify-center w-full mt-4 gap-2 z-10">
                    <img className="w-116" src={indiCust}></img>
                    <h1 className="text-xl font-bold z-10">BULK WASTE GENERATOR</h1>
                    <h2 className="text-sm text-center p-4 z-10">All BWGs contribute 50-60% of the city's waste quantum and in one go can significantly reduce the waste load. This is a tailor made waste removal service, where we can have an agreement with BWGs and programmed the service as per the BWGs needs. Any BWGS for eg Hospital, Clinics, University, Schools, Colleges, Municipalities, High Rise Apartments, Society, Hotels and Restaurants, Shopping Malls, Marriage Gardens can enjoy faster removal/faster disposal and Stress-Free transition.</h2>

                    </div>
                    
                    </>
                    :
                    <>

<div className="flex flex-col items-center justify-center w-full mt-4 gap-2 z-10">
                    <img className="w-116" src={indiCust}></img>
                    <h1 className="text-xl font-bold z-10">INDIVIDUAL CUSTOMER</h1>
                    <h2 className="text-sm text-center p-4 z-10">Team AAKRI specialises on time scrap/trash removal from residence/commercial houses. Just Schedule the booking through the AAKRI App and we'll be on our way. Our experienced, friendly and professional staff will be at your doorstep on the scheduled pickup date, quickly and efficiently weigh your scrap/trash and immediately pay you the cash/transfers then and there.</h2>

                    </div>
                    
                    </>
                }

<div className="nav flex items-center   ">

<div className={`${ welcomeNav[0] ? "px-4 bg-gray-800" : "px-2 bg-gray-500" } h-2 py-1 rounded z-10  ml-4 mb-12`}></div>
<div className={`${ welcomeNav[1] ? "px-4 bg-gray-800" : "px-2 bg-gray-500" } h-2 py-1 rounded z-10 ml-4 mb-12`}></div>
<div className={`${ welcomeNav[2] ? "px-4 bg-gray-800" : "px-2 bg-gray-500" } h-2 py-1 rounded z-10 ml-4 mb-12`}></div>

<div className=" w-full mr-4 mb-10 flex items-center justify-end ">

    <button className="bg-gray-800 px-6 py-2 text-white rounded-lg z-10">Next</button>

</div>

</div>

                
                <div className="flex z-0 absolute bottom-0">
                    <img className="transform scale-x-[-1]" src={city}></img>
                    <img className="" src={city}></img>
                </div>
                

            </div>
           
         
        </>

     )



}

export default Welcome;