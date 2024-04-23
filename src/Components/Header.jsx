import React from 'react'
import { SundownLogo } from './index'

function Header() {
  return (
    <div id='header' className='z-[99] relative '>
        <nav className='justify-between h-full w-full items-center flex md:flex bg-[#EFEAE3] py-8 px-5 md:px-9 md:pt-8'>
            <img src={SundownLogo} alt="LOGO" />
            <div className='md:flex flex-row hidden gap-x-4'>
              <h4 className='hover:text-white cursor-pointer' ><a href="#">Work</a></h4>
              <h4 className='hover:text-white cursor-pointer' ><a href="#">Studio</a></h4>
              <h4 className='hover:text-white cursor-pointer' ><a href="#">Contact</a></h4>
            </div>
            <div className='md:hidden'>
              <h3><a href="#">Menu</a></h3>
            </div>
        </nav>
    </div>
  )
}

export default Header