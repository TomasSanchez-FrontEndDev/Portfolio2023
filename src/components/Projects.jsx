import React from 'react';
import wave3 from '../img/Wave 3.png';
import Sunnyside from '../img/Sunnyside.png';
import Maker from '../img/Maker.png';
import Creatto from '../img/Creatto.png';
import Wave4 from '../img/Wave 4.png';

const projects = () => {
  return (
    <div className='w-full overflow-x-hidden' id='Projects'>
      <div className='flex text-center font-[poppins] pb-10 md:justify-center lg:justify-start'>
        <img src={wave3} alt='' className='h-8/12 md:hidden lg:flex' />
        <div className='w-6/12 md:min-w-[500px] md:min-h-[700px] rounded-3xl mt-36 bg-[#313036] p-8 flex flex-col justify-around'>
          <h1 className='text-white text-5xl'>Projects</h1>
          <div className='flex flex-col justify-around h-4/6'>
            <a
              href='https://cozy-puppy-4c6c9e.netlify.app/ '
              className='noHover'
              data-aos='fade-right'
              data-aos-offset='200'
              data-aos-easing='ease-in-sine'
              target={'_blank'}
            >
              <img src={Sunnyside} alt='Sunnyside' />
            </a>
            <a
              href='https://maker-landing-page-nyr.netlify.app/ '
              className='noHover'
              data-aos='fade-right'
              data-aos-offset='300'
              data-aos-easing='ease-in-sine'
              target={'_blank'}
            >
              <img src={Maker} alt='Maker' />
            </a>
            <a
              href='https://creatto.xyz/'
              className='noHover'
              data-aos='fade-right'
              data-aos-offset='400'
              data-aos-easing='ease-in-sine'
              target={'_blank'}
            >
              <img src={Creatto} alt='Creatto' />
            </a>
          </div>
          <div className='text-right cursor-pointer'>
            <a href='' className='noHover '>
              <button className='w-52 h-16 text-center rounded-[40px] bg-gradient-to-b from-[#79FFA6] to-[#72EFDD]'>
                <p className='text-2xl'>{'->'}</p>
              </button>
            </a>
          </div>
        </div>
      </div>
      <img src={Wave4} alt='Wave4' className='w-full' />
    </div>
  );
};

export default projects;
