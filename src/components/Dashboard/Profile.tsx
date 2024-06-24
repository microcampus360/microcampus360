import React from 'react';
import ProfileInfoUpdate from '../../assets/ProfilePage/ProfileInfoUpdate.svg';
import QRCode from '../../assets/ProfilePage/QRCode.svg';
import Arrow from '../../assets/ProfilePage/Arrow.svg';

import ChangeCountry from '../../assets/ProfilePage/ChangeCountry.svg';
import Language from '../../assets/ProfilePage/Language.svg';
import ScrapOrderHistory from '../../assets/ProfilePage/ScrapOrderHistory.svg';
import BioWaste from '../../assets/ProfilePage/BioWaste.svg';
import Merchants from '../../assets/ProfilePage/Merchants.svg';
import AboutUs from '../../assets/ProfilePage/AboutUs.svg';
import RateUs from '../../assets/ProfilePage/RateUs.svg';
import CallUs from '../../assets/ProfilePage/CallUs.svg';
import LogOut from '../../assets/ProfilePage/LogOut.svg';
import { Link } from 'react-router-dom';

const Profile = () => {

  const sections = [
    {
      name: 'Change Country',
      image: ChangeCountry,
      redirect: 'country'
    },
    {
      name: 'Language',
      image: Language,
      redirect: 'language'
    },
    {
      name: 'Scrap Order History',
      image: ScrapOrderHistory,
      redirect : '/dashboard/profile/scraporderhistory'
    },
    {
      name: 'Bio Waste History',
      image: BioWaste,
      redirect : '/dashboard/profile/biowastehistory'
    },
    {
      name: 'Merchants',
      image: Merchants
    },
    {
      name: 'About Us',
      image: AboutUs
    },
    {
      name: 'Rate Us',
      image: RateUs
    },
    {
      name: 'Call Us',
      image: CallUs,
      tel: '+1234567890' // Add the phone number here
    },
    {
      name: 'Log Out',
      image: LogOut,
      redirect: '/login'
    },
  ];

  return (
    <div>
      <div className='my-28 px-5'>
        <div className='box1 bg-[#E5EEE9] rounded-xl p-5'>
          <div className='flex justify-between w-full'>
            <div className='flex gap-2'>
              <div>
                <img src="https://st3.depositphotos.com/15648834/17930/v/380/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" className='w-28 h-28 object-cover rounded-full' alt="profile_image" />
              </div>
              <div className='flex flex-col'>
                <h3 className='text-xl font-bold'>DHEEMA</h3>
                <h3 className='text-xl'>1234567890</h3>
              </div>
            </div>
            <Link to={'/dashboard/profile/profileupdate'}>
              <img src={ProfileInfoUpdate} className='w-9 h-9' alt="" />
            </Link>
          </div>
          <Link to={'/dashboard/profile/qrcode'} className='mt-7 flex justify-center items-center gap-2'>
            <img src={QRCode} className='w-10 h-10' alt="QRCode" />
            <h3 className='text-xl font-bold'>VIEW QR CODE</h3>
          </Link>
        </div>
        <div className='box2 mt-5'>
          {
            sections.map((section) => (
              section.tel ? (
                <a href={`tel:${section.tel}`} className='flex justify-between items-center p-4 bg-[#E5EEE9] rounded-xl my-2 hover:scale-105 hover:duration-300 hover:ease-in-out hover:transition-all' key={section.name}>
                  <div className='flex gap-2 items-center'>
                    <img src={section.image} alt={section.name} />
                    <h3 className='font-bold'>{section.name}</h3>
                  </div>
                  <div>
                    <img src={Arrow} className='' alt="" />
                  </div>
                </a>
              ) : (
                <Link to={section.redirect || '#'} className='flex justify-between items-center p-4 bg-[#E5EEE9] rounded-xl my-2 hover:scale-105 hover:duration-300 hover:ease-in-out hover:transition-all' key={section.name}>
                  <div className='flex gap-2 items-center'>
                    <img src={section.image} alt={section.name} />
                    <h3 className='font-bold'>{section.name}</h3>
                  </div>
                  <div>
                    <img src={Arrow} className='' alt="" />
                  </div>
                </Link>
              )
            ))
          }
        </div>  
      </div>
    </div>
  );
}

export default Profile;
