import React from 'react'

import global from "../../assets/Dashboard/marketplace/globalrecycle (2).png"

const MarketPlace = () => {
  return (
    <div className="h-[80vh] overflow-scroll mb-4">

    <div className='p-6 mt-8'>

    <div className='w-full text-center'>

<h1 className='font-bold text-xl'>COMING SOON....</h1>

</div>
<div className='w-full flex items-center justify-center flex-col gap-6 mt-10'>

<img src={global} alt='global'></img>
<h2 className='font-bold text-xl'>GLOBAL RECYCLING MARKET 
PLACE</h2>
<h3 className='text-lg text-center'>It is an Online Marketplace where buyers and sellers can network and trade with the livestock. We connect suitable business streams using modern digital technology, maximise the value of the scrap and find the best potential players for every type of waste. This will optimise companies' material flow, making companies production more efficient, cost-effective and environmentally friendly.</h3>

</div>

    </div>
      
           
      
  </div>
  )
}

export default MarketPlace