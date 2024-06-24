import React, { useEffect, useState } from 'react'
import Index from './Index'
import  QRCode  from 'qrcode.react'
import { Link } from 'react-router-dom';

const QRCodePage = () => {

  const [qrdata, setQrData] = useState('');

  const handleGenerateQRCode = () => {
    const data = "https://google.com";
    setQrData(data);
  }

  useEffect(() => {
    handleGenerateQRCode();
  }, []);

  return (
    <>
      <div className='h-full flex flex-col items-center justify-center gap-20'>
        {
          <QRCode value={qrdata} />
        }
        <Link to={'/dashboard/profile'} className='bg-[#006D4A] w-[50vw] text-xl text-white py-3 px-2 rounded-xl text-center'>Go Back</Link>
      </div>
    </>
  )
}

export default QRCodePage