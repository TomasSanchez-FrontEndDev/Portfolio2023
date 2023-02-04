import { Squash as Hamburger } from 'hamburger-react';



const Navbar = () => {
  return (
    <div className='min-w-[100px] bg-gradient-to-b from-[#72EFDD] to-[#72EF9C] h-screen flex flex-col text-center items-center sticky justify-evenly font-[poppins] top-0 bottom-0 left-0'>
      <div className=''>
        <Hamburger />
      </div>
      <hr className='border-[#313036] w-11/12' />
      <ul className='flex flex-col justify-around space-y-[65px] mt-[33px] mb-[25px]'>
        <li>
          <p>
            <a href='#' data-replace='About Me'>
              <span>About Me</span>
            </a>
          </p>
        </li>
        <li>
        <a href='#' data-replace='Skills'>
              <span>Skills</span>
            </a>
        </li>
        <li>
        <a href='#' data-replace='Projects'>
              <span>Projects</span>
            </a>
        </li>
      </ul>
      <hr className='w-10/12 border-[#313036]' />
      <div className='w-full flex justify-center mt-[30px] mb-[30px]'>
      <a href='#' data-replace='Games'>
              <span>Games</span>
            </a>
      </div>
      <hr className='w-8/12 border-[#313036]' />
      <div>
        <div className='bg-[#313036] w-[30px] py-[5px] rounded-full mt-[20px] mb-[5px] flex flex-col items-center space-y-1 selector-theme'>
          <input
            type='radio'
            name='toggle'
            id='one'
            className='rounded-full w-10/12 aspect-square button'
          />
          <input
            type='radio'
            name='toggle'
            id='two'
            className='rounded-full w-10/12 aspect-square button'
          />
          <input
            type='radio'
            name='toggle'
            id='three'
            className='rounded-full w-10/12 aspect-square button'
          />
        </div>
        <button>
          <img src='' alt='' />
        </button>
      </div>
      <p className='mb-[10px] absolute bottom-0'>By TS</p>
    </div>
  );
};

export default Navbar;
