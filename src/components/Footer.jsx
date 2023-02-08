import React from 'react';
import EmailIcon from '../img/Mail.png';
import LinkedinIcon from '../img/LinkedinIcon.png';
import WhatsappIcon from '../img/WhatsappIcon.png';

const Footer = () => {
  return (
    <div className='bg-gradient-to-b from-[#72EFDD] to-[#72EF9C] pb-8 font-[poppins]' id='Footer'>
      <div className='flex justify-evenly'>
        <div className='bg-[#313036] flex flex-col w-14 p-2 rounded-2xl space-y-3'>
          <a href=''>
            <img src={EmailIcon} alt='Email' />
          </a>
          <a href=''>
            <img src={LinkedinIcon} alt='Linkedin' />
          </a>
          <a href=''>
            <img src={WhatsappIcon} alt='Whatsapp' />
          </a>
        </div>
        <div className='text-center flex flex-col justify-evenly text-[#313036]'>
          <p className='leading-10 text-4xl font-semibold'>Tomas Sanchez</p>
          <p className='leading-9 font-light text-1xl'>All rights reserved 2022</p>
        </div>
        <div className='bg-[#313036] flex flex-col w-14 p-2 rounded-2xl space-y-3'>
          <a href=''>
            <img src={EmailIcon} alt='' />
          </a>
          <a href=''>
            <img src={LinkedinIcon} alt='' />
          </a>
          <a href=''>
            <img src={WhatsappIcon} alt='' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
