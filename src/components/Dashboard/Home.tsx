import logo from "../../assets/recyclick.svg"
import loc from "../../assets/district/Location.png"
import { useNavigate } from 'react-router-dom'



import paper from "../../assets/homepage/32 (1).png"
import plastic from "../../assets/homepage/36.png"
import metals from "../../assets/homepage/37.png"
import motor from "../../assets/homepage/38.png"
import ewaste from "../../assets/homepage/33 (1).png"
import twofour from "../../assets/homepage/39.png"
import others from "../../assets/homepage/34 (1).png"
import sewage from "../../assets/homepage/40.png"
import solid from "../../assets/homepage/35.png"
import { useState } from "react"

import { isVisible } from "@testing-library/user-event/dist/utils"

const Home = () =>{

    type ChoiceImage = string;

    const navigate = useNavigate();

    const choices : ChoiceImage[] = [paper,plastic,metals,motor,ewaste,twofour,others]
    const solidSewage : ChoiceImage[] = [solid,sewage]

    const[dis,setDis] = useState<boolean>(true)
    const [isVisible, setIsVisible] = useState<boolean[]>([false,false,false,false,false,false,false]);
    const [solidSewageVisible, setSolidSewage] = useState<boolean[]>([false,false]);

    const toggleCheckbox = (index: number) => {
        let vis = [...isVisible];
         
        vis = vis.map((choice,idx) => ( choice  === true && idx!=index ? false : choice))

        let solidSew = [...isVisible];
         
        solidSew = solidSew.map((choice,idx) => ( false ))
        
        if(vis[index] === false)setDis(false)
            else
            setDis(true) 
        vis[index] = !vis[index];
        setIsVisible(vis);
        setSolidSewage(solidSew)
      };

      const toggleSolidSewage = (index: number) => {

        let scrap = [...isVisible];
         
        scrap = scrap.map((choice,idx) => ( false))
       
        let vis = [...solidSewageVisible];
         
        vis = vis.map((choice,idx) => ( choice  === true && idx!=index ? false : choice))
        
        if(vis[index] === false)setDis(false)
        else
        setDis(true) 

        vis[index] = !vis[index];
        setIsVisible(scrap);
        setSolidSewage(vis);
      };

    return (
        
        <div className="h-[80vh] overflow-scroll mb-4">

        
           
           <div className="w-full flex items-center justify-center flex-col gap-2">
         
            <div className="w-full">

            <div className="w-full bg-[#BADC14] p-4 flex items-center justify-center">

                <h1 className="font-bold text-black">DISPOSAL OF BIO-MEDICAL WASTE</h1>

            </div>
            <div className="w-full p-6">

                <div className="rounded-lg border-2 border-[#BADC14] w-full flex items-center justify-center flex-col ">
                    <div className="p-8 flex items-center justify-center flex-col gap-2">
                        <div className="text-left ml-10">

                        <h2 className="text-sm font-bold">BIO-MEDICAL WASTE</h2>
                        <h2 className="text-xs text-gray-500">Adult Diaper, Domestic Bio Disposables, Kids Diaper, Sanitary Pads</h2>

                        </div>
                         
                      
                       <button className="p-4 rounded-full bg-[#BADC14] font-bold mt-4" >RAISE BIO-MEDICAL PICKUP</button>

                    </div>
                   

                </div>

            </div>



            </div>

            <div className="w-full bg-[#105540] p-2 flex items-center justify-center">

                <h1 className="font-bold text-white">Sell Scrap and Earn Cash</h1>

            </div>

            <div className="w-full p-4 flex items-center justify-center">

                <h2 className=" text-xs ">
                <span className="font-semibold">NOTE: </span>Green Category indicates (+ Bill) where customers are paid by AAKRI team, and Yellow Category indicates (-Bill), wher where customer have to pay to AAKRI for disposing. Final Bill will be settled after weighing of both Plus/Minus Bill. (For Corporate/Bulk orders please contact Toll Free)
                </h2>

            </div>
            <div className="p-4 w-full grid grid-cols-3 gap-2">

                    {
                        choices.map((choice : string,idx : number)=>(

                            <button onClick={()=>{toggleCheckbox(idx)}} className="relative">
                                <img src={choice}></img>
                                {
                                    isVisible[idx] && (
                                        <input
                                          type="checkbox"
                                          className="absolute top-0 right-0 m-2 "
                                          checked={isVisible[idx]}
                                          readOnly
                                        />
                                      )
                                    
                                }
                                
                            </button>

                        ))
                    }

            </div>

            <div className="w-full p-4 flex items-center justify-center">

                <h2 className=" text-xs ">
                  Pay us to manage a clean environment, we are committed to help you clear your solid/wet waste. Please schedule your booking and rest will be taken care of. Just a Pay away.
                </h2>

            </div>

            <div className="p-4 w-full grid grid-cols-3 gap-2">

                    {
                        solidSewage.map((choice : string,idx : number)=>(

                            <button onClick={()=>{toggleSolidSewage(idx)}} className="relative">
                                <img src={choice}></img>
                                {
                                    solidSewageVisible[idx] && (
                                        <input
                                          type="checkbox"
                                          className="absolute top-0 right-0 m-2 "
                                          checked={solidSewageVisible[idx]}
                                          readOnly
                                        />
                                      )
                                    
                                }
                                
                            </button>

                        ))
                    }

            </div>
            <div className="w-full flex items-center justify-center p-6">

            <button disabled={dis} className={`  ${ dis ? "bg-opacity-50" : "" } p-4 w-full text-white text-center rounded-full bg-[#780000] font-bold mt-4`} >RAISE SCRAP PICKUP</button>

            </div>

           

           </div>
           
           </div>
        
    )
}


export default Home;
