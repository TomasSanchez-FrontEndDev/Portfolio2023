import React from 'react'

const Skills = () => {
  return (
    <div id='Skills' className='bg-[#313036] font-[poppins] text-white'>
      <h1 className='text-6xl  leading-10 text-center pt-9'>Skills</h1>
      <div className='md:flex md:justify-around py-8 skills space-y-3'>

        {/* html5 skill_box */}
        <div className='flex flex-col items-center text-center'>
          <h2 className='text-2xl'>Html5</h2>
          <div className='w-16 h-64 bg-[#D9D9D9] rounded-full'>
            <div className='w-full h-full rounded-full bg-[#72EFDD]'></div>
          </div>
        </div>

        {/* css skill_box */}
        <div className='flex flex-col items-center text-center'>
          <h2 className='text-2xl'>CSS</h2>
          <div className='w-16 h-64 bg-[#D9D9D9] rounded-full '>
            <div className='w-full h-5/6 rounded-full bg-[#72EF9C]'></div>
          </div>
        </div>

        {/* js skill_box */}
        <div className='flex flex-col items-center text-center'>
          <h2 className='text-2xl'>JS</h2>
          <div className='w-16 h-64 bg-[#D9D9D9] rounded-full'>
            <div className='w-full h-4/6 rounded-full bg-[#EEF08D]'></div>
          </div>
        </div>

        {/* Tailwind skill_box */}
        <div className='flex flex-col items-center text-center'>
          <h2 className='text-2xl'>Tailwind</h2>
          <div className='w-16 h-64 bg-[#D9D9D9] rounded-full'>
            <div className='w-full h-5/6 rounded-full bg-[#6A6ABE]'></div>
          </div>
        </div>

        {/* React skill_box */}
        <div className='flex flex-col text-center items-center'>
          <h2 className='text-2xl'>React</h2>
          <div className='w-16 h-64 bg-[#D9D9D9] rounded-full'>
            <div className='w-full h-5/6 rounded-full bg-[#98F598]'></div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Skills