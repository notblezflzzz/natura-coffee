import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className='bg-[#4B2E2B] text-white py-6 mt-10'>
        <div className='max-w-6xl mx-auto px-6 text-center'>
            <div className='flex justify-center gap-6 mb-4 text-[20px]'>
                <a href="" className='hover:text-yellow-300 transition-all duration-300'><FaInstagram /></a>
                <a href="" className='hover:text-yellow-300 transition-all duration-300'><FaFacebookSquare /></a>
                <a href="" className='hover:text-yellow-300 transition-all duration-300'><FaTwitter /></a>
            </div>
            <p>© 2025 NaturaCoffe. All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer;
