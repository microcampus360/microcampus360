import React from 'react'

import bulk from "../../assets/Dashboard/bwg/bulkwaste.png"

const BWG = () => {
  return (
    <div className="h-[80vh] overflow-scroll mb-4">

      <div className='p-6 mt-8'>

      <div className='w-full text-center'>

<h1 className='font-bold text-xl'>COMING SOON....</h1>

</div>
<div className='w-full flex items-center justify-center flex-col gap-6 mt-10'>

<img src={bulk} alt='bwg'></img>
<h2 className='font-bold text-xl'>BULK WASTE GENERATOR</h2>
<h3 className='text-lg text-center'>All BWGs contribute 50-60% of the city's wastequantum and in one go can significantlyreduce the waste load. This is a tailor madewaste removal service, where we can havean agreement with BWGs and programmedthe service as per the BWGs needs. Any BWGSfor eg Hospital, Clinics, University, Schools,Colleges, Municipalities, High Rise Apartments,Society, Hotels and Restaurants, ShoppingMalls, Marriage Gardens can enjoy fasterremoval/faster disposal and Stress-Freetransition.</h3>

</div>

      </div>
        
             
        
    </div>
  )
}

export default BWG