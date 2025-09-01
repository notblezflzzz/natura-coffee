import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { href: "#home", text: "Home" },
        { href: "#about", text: "About Us" },
        { href: "#menu", text: "Menu/Services" },
        { href: "#gallery", text: "Gallery" },
        { href: "#contact", text: "Contact" }
    ];

    return (
        <nav className='fixed top-0 left-0 right-0 w-full shadow-md z-[1000] bg-[#4B2E2B] text-white backdrop-blur-[10px] transition-all duration-300'>
            <div className='max-w-6xl mx-auto w-full flex justify-between items-center px-6 py-4'>
                <h1 className='font-semibold text-xl'>NaturaCoffe</h1>

                <ul className='hidden md:flex items-center gap-8'>
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a 
                                href={link.href} 
                                className='transition-all duration-300 hover:text-yellow-300'
                            >
                                {link.text}
                            </a>
                        </li>
                    ))}
                </ul>

                <button 
                    className='md:hidden p-2' 
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={24}/> : <Menu size={24}/>}
                </button>

                {isOpen && (
                    <div className='md:hidden fixed top-[72px] left-0 w-full bg-[#4B2E2B] border-t border-[rgba(255,255,255,0.1)]'>
                        <ul className='flex flex-col gap-4 w-full py-4'>
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <a 
                                        href={link.href}
                                        className='block w-full px-6 py-2 transition-all duration-300 hover:bg-[rgba(255,255,255,0.1)] hover:text-yellow-300'
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.text}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Nav;