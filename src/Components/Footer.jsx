import React from 'react'

function Footer() {
  return (
    <div className='flex flex-col justify-end py-[1vw] px-[3vw] h-screen w-full bg-black text-white fixed z-9 bottom-0'>
      <div className='z-9'>
        <div className="footer-shape"></div>
        <div className="footer-shape"></div>
        <div className="footer-shape"></div>
        
      </div>
      <div className='z-10 '>
        <div className='flex flex-col md:flex md:flex-row justify-between px-10'>
          <div className='text-[6vw] md:text-[2vw] leading-[5.5vw] md:leading-[2.5vw]'>
            <a href="#"><h2>Work</h2></a>
            <a href="#"><h2>Studio</h2></a>
            <a href="#"><h2>Contact</h2></a>
          </div>
          <div>
            <h2 className='md:text-[1.2vw] text-[3.2vw] font-light'>Get industry insights and creative <br /> inspiration straight to your inbox.</h2>
            <div>
              <input type="text" placeholder='Email address' className='bg-transparent pt-8 placeholder:text-gray-200 placeholder:font-thin' />
              <div className='w-full h-[10vh] border-t py-2 border-[#dadada]'></div>
            </div>
            
          </div>
          
        </div>      
        <h1 className='text-[22vw] my-[-6vw] z-10'>Sundown</h1>
        <div className='w-full md:h-[2vh] border-t border-[#dadada]'></div>
        <div className='flex md:justify-between  py-5 gap-x-8 font-light overflow-auto text-[8px] md:text-[17px]'>
          <p>UI Clone © Sundown Studio</p>
          <p>Dreams, Goals</p>
          <p>Instagram(c)</p>
          <p>LinkedIn(c)</p>
        </div>
      </div>
    </div>
  )
}

export default Footer