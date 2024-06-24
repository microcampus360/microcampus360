import React, { useState } from "react";
import logo from "../assets/recyclick.svg"
import indiCust from "../assets/welcome/welcome1.png"
import city from "../assets/country/city.png"
import bulk from "../assets/welcome/bulk.png"
import global from "../assets/welcome/globalrecycle.png"
import { useNavigate } from 'react-router-dom'

const Welcome = () =>{

    const [welcomeNav,setNav] = useState<number[]>([1,0,0])
    const [page,setPage] =   useState<number>(0)
    
    const handleNext = () =>{
        console.log("hello")
           const nextPage = page+1
           setPage(nextPage)

           let welArray = welcomeNav
           welArray[page] = 0;
           welArray[nextPage] = 1;
           
           setNav(welArray)

         
    }

    const handlePrev = () =>{
        const prevPage = page-1
        setPage(prevPage)

        let welArray = welcomeNav
        welArray[page] = 0;
        welArray[prevPage] = 1;
        
        setNav(welArray)


      
 }
   
 const navigate = useNavigate();

     return(

        <>
             
            <div className="md:hidden overflowx-hidden ">

                <div className="relative flex items-center justify-center w-full ">
               
                  
                    <div className="mt-10 flex items-center justify-center flex-col gap-4">
                        <h2 className="text-sm text-gray-500 font-semibold">Welcome to</h2>
                        <img className="w-28" src={logo} alt="logo"></img>

                    </div>

                </div>
                <div className="mt-8">

               

                {
                    welcomeNav[0]?
                    <>
                    <div className="flex flex-col items-center justify-center w-full mt-4 gap-2 z-10">
                    <img  src={indiCust} alt="indiCust"></img>
                    <h1 className="text-xl font-bold z-10">INDIVIDUAL CUSTOMER</h1>
                    <h2 className="text-sm text-center p-4 z-10">Team AAKRI specialises on time scrap/trash removal from residence/commercial houses. Just Schedule the booking through the AAKRI App and we'll be on our way. Our experienced, friendly and professional staff will be at your doorstep on the scheduled pickup date, quickly and efficiently weigh your scrap/trash and immediately pay you the cash/transfers then and there.</h2>

                    </div>
                    </>
                    :
                    welcomeNav[1]?
                    <>

<div className="flex flex-col items-center justify-center w-full mt-4 gap-2 z-10">
                    <img src={global} alt="global"></img>
                    <h1 className="text-xl font-bold z-10">BULK WASTE GENERATOR</h1>
                    <h2 className="text-sm text-center p-4 z-10">All BWGs contribute 50-60% of the city's wastequantum and in one go can significantlyreduce the waste load. This is a tailor madewaste removal service, where we can havean agreement with BWGs and programmedthe service as per the BWGs needs. Any BWGSfor eg Hospital, Clinics, University, Schools,Colleges, Municipalities, High Rise Apartments,Society, Hotels and Restaurants, ShoppingMalls, Marriage Gardens can enjoy fasterremoval/faster disposal and Stress-Freetransition.</h2>

                    </div>
                    
                    </>
                    :
                    <>

<div className="flex flex-col items-center justify-center w-full mt-4 gap-2 z-10">
                    <img  src={bulk} alt="bulk"></img>
                    <h1 className="text-xl font-bold z-10">GLOBAL RECYCLING MARKET PLACE</h1>
                    <h2 className="text-sm text-center p-4 z-10">It is an Online Marketplace where buyers and sellers can network and trade with the livestock. We connect suitable business streams using modern digital technology, maximise the value of the scrap and find the best potential players for every type of waste. This will optimise companies' material flow, making companies production more efficient, cost-effective and environmentally friendly.</h2>

                    </div>
                    
                    </>
                }
                 </div>

<div className="nav flex items-center mt-8 ">

<div className={`${ welcomeNav[0] ? "px-4 bg-gray-800" : "px-2 bg-gray-500" } h-2 py-1 rounded z-10  ml-4 mb-12`}></div>
<div className={`${ welcomeNav[1] ? "px-4 bg-gray-800" : "px-2 bg-gray-500" } h-2 py-1 rounded z-10 ml-4 mb-12`}></div>
<div className={`${ welcomeNav[2] ? "px-4 bg-gray-800" : "px-2 bg-gray-500" } h-2 py-1 rounded z-10 ml-4 mb-12`}></div>

<div className=" w-full mr-4 mb-10 flex items-center justify-end ">

{ 
  page === 0?
  <>
    <button onClick={handleNext} className="bg-gray-800 px-6 py-2 text-white font-semibold rounded-lg z-10">Next</button>
  </>
  :
 
  <>
  <button onClick={handlePrev}  className="bg-gray-800 px-6 py-2 text-white font-semibold rounded-lg z-10 mr-4">Previous</button>
  {
     page === 2?
  <button onClick={()=>{navigate("/home")}}  className="bg-gray-800 px-6 py-2 text-white font-semibold rounded-lg z-10">Next</button>
   :
   <button onClick={handleNext} className="bg-gray-800 px-6 py-2 text-white font-semibold rounded-lg z-10">Next</button>
    }
  </>
 
}



   

</div>

</div>

                
                <div className="flex z-0 ">
                    <img className="transform scale-x-[-1]" src={city} alt="city"></img>
                    <img className="" src={city} alt="city"></img>
                </div>
                

            </div>
           
         
        </>

     )



}

export default Welcome;