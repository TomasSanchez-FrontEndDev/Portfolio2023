import Myphoto from '../img/MyPhoto.png';
import wave2 from '../img/Wave2.png';

const About_me = () => {
  return (
    <div className='bg-[#f5f5f5]'>
      <div className='absolute mx-0' id='AboutMe'></div>
      <div className='flex justify-around text-[#313036] font-[poppins] mt-4 md:ml-10'>
        <div className='w-5/12 mt-4 z-10'>
          <h1 className='text-4xl font-semibold leading-10 text-center'>
            About me
          </h1>
          <p className='mt-2 leading-6 text-shadow' data-aos="zoom-in-up">
            As an electronic technician, I have acquired the ability to detect
            and solve problems in the most efficient way possible, I have a
            great ability to translate a possible problem to reality and solve
            it, which creates an excellent tool to solve problems that have not
            yet appeared or in turn solve existing ones. I have a great ability
            to understand any kind of flow and this helped me a lot to study and
            acquire knowledge in HTML5, CSS3, JS, and have the ability to use
            frameworks such as REACT and Tailwind.
          </p>
          <p className='mt-20 leading-6 text-shadow' data-aos="zoom-in-down">
            In my daily life I love to spend time with my friends and family, I
            love to understand all possible aspects of life, existential
            questions are a great motivation. Learning more and more every day
            and being able to create virtual worlds, design web pages and
            program them is my driving force. I have an enormous adaptability, I
            love to work in a team and above all I love to help others in every
            possible way.
          </p>
        </div>
        <div className='text-center mr-20 italic flex flex-col z-10'>
          <img src={Myphoto} />
          <p className='' >
            “People <b>hate</b> and <b>fear</b>
          </p>
          <p>
            what they cannot <b>comprehend</b>”
          </p>
        </div>
      </div>
      <img src={wave2} className='center lg:-mt-64 md:-mt-32'/>
    </div>
  );
};

export default About_me;
