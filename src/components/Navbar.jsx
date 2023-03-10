import LinkChanger from './Especial_components/ActionButton';
import Hamburguers from './Especial_components/Hamburguer'

const Navbar = () => {
  return (
    <div className='bg-gradient-to-b from-[#72EFDD] to-[#72EF9C] h-screen hidden lg:flex md:flex flex-col text-center items-center sticky justify-evenly font-[poppins] top-0 bottom-0 left-0 w-auto px-3' id='NavBar'>
      <div className=''>
        <Hamburguers />
      </div>
      <hr className='border-[#313036] w-11/12' />
      <ul className='flex flex-col justify-around space-y-[65px] mt-[2rem] mb-[1rem]'>
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
      <hr className='w-8/12 border-[#313036]' />
      <div className='mb-4'>
        <LinkChanger />
      </div>
      <p className='mb-[10px] absolute bottom-0'>By TS</p>
    </div>
  );
};
export default Navbar;


