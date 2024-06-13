import React from "react";
import logo from "../images/landing/logo (2).png"
import top from "../images/landing/top.png"
import down from "../images/landing/down.png"


const Landing = () =>{


     return(

        <>
             
             <div className="w-full h-[65vh] flex items-center justify-end flex-col bg-custom-gradient">

              <img src={logo}></img>         
             <img className="m-0" src={top}></img>

                       
             </div>
             <div className="w-full flex items-center justify-center">
                <img  src={down}></img>

             </div>
         
        </>

     )



}

export default Landing;