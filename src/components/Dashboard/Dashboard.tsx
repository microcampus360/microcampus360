import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import DashboardNav from './DashboardNav';

import PriceList from "./PriceList"
import BWG from './BWG';
import MarketPlace from './MarketPlace';
import Profile from './Profile';
import Header from './Header';
import Home from './Home';



interface RouteParams{
  subpage?: string;
  [key: string]: string | undefined;
}

const Dashboard: React.FC = () => {
  const {subpage} = useParams<RouteParams>();

  console.log(subpage);

  return (
    <>
      <Header/>
      {
        subpage === undefined && (<Home/>)
      }
      {
        subpage === 'pricelist' && (<PriceList/>)
      }
      {
        subpage === 'bwg' && (<BWG/>)
      }
      {
        subpage === 'marketplace' && (<MarketPlace/>)
      }
      {
        subpage === 'profile' && (<Profile/>)
      }
     
      <DashboardNav subpage={subpage ?? ''} />
    </>
  );
}

export default Dashboard