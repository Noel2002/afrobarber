import React from 'react';
import MenuIcon  from './icons/MenuIcon';

const Header = () => {
    return (
        <div className=' px-6 py-6 flex justify-between items-center'>
            <p className=' font-semibold text-2xl'>AFRO BARBER.</p>
            <MenuIcon className=" w-6 h-6" />
        </div>
    )
}

export default Header