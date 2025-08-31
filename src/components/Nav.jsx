import React from 'react';

function Nav() {
    return (
    <nav className='sticky flex justify-between top-0 w-full shadow-md z-[1000] bg-[#4B2E2B] text-white backdrop-blur-[10px] transition-all duration-300 ease p-[24px] border-b-[rgba(0,0,0,0.1)] border-b-[1px] '>
        <div>
            <h1 className='font-[600]'>NaturaCoffe</h1>
        </div>

        <ul className='flex gap-6 '>
            <li><a href="#home" className='transition-all duration-300 hover:text-yellow-300'>Home</a></li>
            <li><a href="#about" className='transition-all duration-300 hover:text-yellow-300'>About Us</a></li>
            <li><a href="#menu" className='transition-all duration-300 hover:text-yellow-300'>Menu/Services</a></li>
            <li><a href="#gallery" className='transition-all duration-300 hover:text-yellow-300'>Gallery</a></li>
            <li><a href="#contact" className='transition-all duration-300 hover:text-yellow-300'>Contact</a></li>
        </ul>
    </nav>
  )
}

export default Nav;
