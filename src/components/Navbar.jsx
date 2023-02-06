import { Squash as Hamburger } from 'hamburger-react';
import LinkChanger from './Especial_components/ActionButton';

const Navbar = () => {
  return (
    <div className='px-4 bg-gradient-to-b from-[#72EFDD] to-[#72EF9C] h-screen flex flex-col text-center items-center sticky justify-evenly font-[poppins] top-0 bottom-0 left-0'>
      <div className=''>
        <Hamburger />
      </div>
      <hr className='border-[#313036] w-11/12' />
      <ul className='flex flex-col justify-around space-y-[65px] mt-[33px] mb-[25px]'>
        <li>
          <p>
            <a href='#AboutMe' data-replace='About Me'>
              <span>About Me</span>
            </a>
          </p>
        </li>
        <li>
          <a href='#Skills' data-replace='Skills'>
            <span>Skills</span>
          </a>
        </li>
        <li>
          <a href='#Projects' data-replace='Projects'>
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
        <LinkChanger/>
      </div>
      <p className='mb-[10px] absolute bottom-0'>By TS</p>
    </div>
  );
};
export default Navbar;
