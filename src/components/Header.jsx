import React from 'react';
import logo from "../assets/logo.png";

const Header = () => {
    return (
        <div className='flex justify-center flex-col items-center gap-3 text-gray-500'>
            <img className='w-[350px]' src={logo} alt="" />
            <p>Journalism without Fear or favour</p>
        </div>
    );
};

export default Header;