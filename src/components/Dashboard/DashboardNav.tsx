import React from 'react'
import Home from '../../assets/Footer/Home.svg'
import PriceList from '../../assets/Footer/PriceList.svg'
import BWG from '../../assets/Footer/BWG.svg'
import MarketPlace from '../../assets/Footer/MarketPlace.svg'
import Profile from '../../assets/Footer/Profile.svg'
import { Link } from 'react-router-dom'


interface DashboardNavProps {
    subpage: string;
}

const DashboardNav: React.FC<DashboardNavProps> = ({subpage}) => {

    const linkClasses = (type: string|undefined = undefined) => {
        let classes = 'font-bold'
        if(type === subpage){
            classes += ' text-black';
        }
        else{
            classes += ' text-gray-500';
        }
        return classes;
    }
    
    console.log(subpage);

  return (
    <div>
        <div className='bg-[#E6E6E6] h-fit p-3 w-full fixed bottom-0 flex justify-around'>
            <Link to={'/dashboard'} className='flex flex-col gap-2 justify-center items-center'>
                    <img src={Home} className='w-10 h-10' alt="Home" />
                    <h3 className={`${linkClasses('')}`}>
                        Home
                    </h3>
                    {subpage === '' && (<span className='w-[50%] h-1 bg-[#C33708] rounded-2xl mt-[-7px]'></span>)}
                </Link>
            <Link to={'/dashboard/pricelist'} className='flex flex-col gap-2 justify-center items-center'>
                <img src={PriceList} className='w-10 h-10' alt="PriceList" />
                <h3 className={`${linkClasses('pricelist')}`}>Price List
                </h3>
                {subpage === 'pricelist' && (<span className='w-[50%] h-1 bg-[#C33708] rounded-2xl mt-[-7px]'></span>)}
            </Link>
            <Link to={'/dashboard/bwg'} className='flex flex-col gap-2 justify-center items-center'>
                <img src={BWG} className='w-10 h-10' alt="BWG" />
                <h3 className={`${linkClasses('bwg')}`}>BWG</h3>
                {subpage === 'bwg' && (<span className='w-[50%] h-1 bg-[#C33708] rounded-2xl mt-[-7px]'></span>)}
            </Link>
            <Link to={'/dashboard/marketplace'} className='flex flex-col gap-2 justify-center items-center'>
                <img src={MarketPlace} className='w-10 h-10' alt="MarketPlace" />
                <h3 className={`${linkClasses('marketplace')}`}>Market Place</h3>
                {subpage === 'marketplace' && (<span className='w-[50%] h-1 bg-[#C33708] rounded-2xl mt-[-7px]'></span>)}
            </Link>
            <Link to={'/dashboard/profile'} className='flex flex-col gap-2 justify-center items-center'>
                <img src={Profile} className='w-10 h-10' alt="Profile" />
                <h3 className={`${linkClasses('profile')}`}>Profile</h3>
                {subpage === 'profile' && (<span className='w-[50%] h-1 bg-[#C33708] rounded-2xl mt-[-7px]'></span>)}
            </Link>
        </div>
    </div>
  )
}

export default DashboardNav