import wave from '../img/wave.png';
import rectangle from '../img/Rectangle-hero.png';
import github from '../img/github.png';
import linkedin from '../img/linkedin.png';
import upwork from '../img/upwork.png';

const Hero = () => {
  return (
    <div className='bg-[#313036] overflow-x-hidden md:w-full w-screen' id='Hero'>
      <div className='font-[poppins] md:pl-10 pl-3' >
        <img src={wave} alt='' className='absolute z-0 ml-20 top-0 right-0 md:hidden hidden lg:flex' />
        <h1 className='Hero_title'>Tomas Sanchez</h1>
        <div className='mt-[3rem] md:block lg:flex block'>
          <div className='md:w-[30.65rem] w-full space-y-[2rem]'>
            <div className='flex flex-col text-[#D9D9D9] text-5xl leading-[3.75rem]'>
              <p>Front End</p>
              <p className='text-center'>Developer</p>
            </div>
            <p className='text-[#72EFDD] leading-[1.75rem]'>
              I'm an Argentinean web programmer. I have a huge passion in
              everything related to programming, design and structures. I love
              to make animations and things more and more complicated and
              extraordinary, I do not like to stand still, so I consider myself
              a very capable person, very intelligent and very eager to learn
              about all the worlds that exist.
            </p>
          </div>
          <div className='md:w-[25.75rem] w-full md:ml-16 space-y-[3rem] pb-3 md:pb-0'>
            <h1 className='text-[#72EFDD] text-4xl leading-[3.75rem]'>
              As a programmer...
            </h1>
            <p className='text-white leading-[1.75rem]'>
              As a programmer, one of the things I like the most is to find
              myself with high mountains, big and imposing things, that although
              at first may seem complicated, I know that I will manage to learn
              and overcome any obstacle that comes my way, all thanks to my
              powerful ambition and my tireless passion.
            </p>
          </div>
        </div>
        <div className='md:flex justify-end items-center hidden'>
          <img src={rectangle} alt='' className='right-0' />
          <ul className='flex content-center absolute right-0 space-x-16 mr-1'>
            <li className='items-center flex'>
              <a href='https://www.upwork.com/freelancers/~01e81106e7dd32b02f?viewMode=1' target={'_blank'}>
                <img src={upwork} />
              </a>
            </li>
            <li>
              <a href='https://github.com/TomasSanchez-FrontEndDev' target={'_blank'}>
                <img src={github} />
              </a>
            </li>
            <li>
              <a href=' www.linkedin.com/in/SanchezTomasFED' target={'_blank'}>
                <img src={linkedin} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Hero;
