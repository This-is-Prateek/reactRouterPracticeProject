import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='w-full h-[8%] flex justify-center shadow-md sticky top-0 bg-white'>
            <div className='flex w-3/4 text-sm font-bold'>
                <div className='mr-auto flex items-center justify-end'>
                    <img className='w-16' src="/images/Logo.svg" alt="logo" />
                </div>
                <div className='flex gap-8'>
                    <NavLink to="/" className={({ isActive }) => `flex items-center ${isActive ? "text-[#fd5e00]" : "text-black"}`}>Home</NavLink>
                    <NavLink to="/about" className={({ isActive }) => `flex items-center ${isActive ? "text-[#fd5e00]" : "text-black"}`}>About</NavLink>
                    <NavLink to="/contact" className={({ isActive }) => `flex items-center ${isActive ? "text-[#fd5e00]" : "text-black"}`}>Contact</NavLink>
                    <NavLink to="/github" className={({ isActive }) => `flex items-center ${isActive ? "text-[#fd5e00]" : "text-black"}`}>Github</NavLink>
                </div>
                <div className='flex ml-auto gap-5'>
                    <div className='flex items-center'>Log in</div>
                    <div className='flex items-center'>
                        <div className='px-4 py-2 bg-[#fd5e00] rounded-3xl text-white'>Get Started</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
