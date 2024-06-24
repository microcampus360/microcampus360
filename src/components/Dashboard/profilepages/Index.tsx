import React from 'react'
import { Link, useParams } from 'react-router-dom'
import ScrapOrderHistory from './ScrapOrderHistory';
import BioWasteHistory from './BioWasteHistory';
import QRCodePage from './QRCodePage';
import ProfileUpdate from './ProfileUpdate';
import BackArrow from '../../../assets/ProfilePage/BackArrow.svg'

import UpdatedCountry from './updatedCountry';
import UpdatedLanguage from './updatedLanguage';
import UpdatedDistrict from './updatedDistrict';
import UpdatedState from './updatedState';
 
const Index = () => {

  const {action} = useParams(); 

  return (
    <>
      <div className='text-2xl sticky top-0 font-bold p-5 shadow-md shadow-gray-300 flex gap-3 items-center'>
        <Link to={'/dashboard/profile'}> 
          <img src={BackArrow} className='w-6 h-6' alt="Back Arrow" />
        </Link>
        {
          action === 'scraporderhistory' && (
            <h2>Scrap Order History</h2>
          )
        }
        {
          action === 'biowastehistory' && (
            <h2>Bio Waste History</h2>
          )
        }
        {
          action === 'qrcode' && (
            <h2>QR Code</h2>
          )
        }
        {
          action === 'profileupdate' && (
            <h2>Update Your Profile</h2>
          )
        }
      </div>
      <div className='h-full'>
        {
          action === 'scraporderhistory' && (
            <ScrapOrderHistory />
          )
        }
        {
          action === 'biowastehistory' && (
            <BioWasteHistory />
          )
        }
        {
          action === 'qrcode' && (
            <QRCodePage />
          )
        }
        {
          action === 'profileupdate' && (
            <ProfileUpdate />
          )
        }
         {
        action === 'country' && (<UpdatedCountry/>)
      }
      {
        action === 'language' && (<UpdatedLanguage/>)
      }
      {
        action === 'district' && (<UpdatedDistrict/>)
      }
       {
        action === 'state' && (<UpdatedState/>)
      }
      </div>
    </>
  )
}

export default Index