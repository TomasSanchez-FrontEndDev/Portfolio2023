import React from 'react';
import wave3 from '../img/Wave 3.png';
import Sunnyside from '../img/Sunnyside.png';
import Maker from '../img/Maker.png';
import Creatto from '../img/Creatto.png';
import Wave4 from '../img/Wave 4.png';

const projects = () => {
  return (
    <div>
      <div className='flex text-center font-[poppins] pb-10'>
        <img src={wave3} alt='' className='h-8/12' />
        <div className='w-6/12 h-5/12 rounded-3xl mt-36 bg-[#313036] p-8 flex flex-col justify-around'>
          <h1 className='text-white text-5xl'>Projects</h1>
          <div className='flex flex-col justify-around h-4/6'>
            <a href='' className='noHover'>
              <img src={Sunnyside} alt='Sunnyside' />
            </a>
            <a href='' className='noHover'>
              <img src={Maker} alt='Maker' />
            </a>
            <a href='' className='noHover'>
              <img src={Creatto} alt='Creatto' />
            </a>
          </div>
          <div className='text-right cursor-pointer'>
            <a href='' className='noHover '>
              <button className='w-52 h-16 text-center rounded-[40px] bg-gradient-to-b from-[#79FFA6] to-[#72EFDD]'>
                <p className='text-2xl'>{"->"}</p>
              </button>
            </a>
          </div>
        </div>
      </div>
      <img src={Wave4} alt="Wave4" />
    </div>
  );
};

export default projects;
