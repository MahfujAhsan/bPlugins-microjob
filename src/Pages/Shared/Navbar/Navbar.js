import React from 'react';
import { Link } from 'react-router-dom';
import BrandLogo from "../../../assets/WebMaterials/jobboy.svg"

const Navbar = () => {
    const menuItems = <React.Fragment>
        <li className='hover:text-[#2196f3]'>
            <Link to="#">Talents</Link>
        </li>
        <li className='hover:text-[#2196f3]'>
            <Link to="#">Influencers</Link>
        </li>
        <li className='hover:text-[#2196f3]'>
            <Link to="#">Micro Jobs</Link>
        </li>
        <li className='hover:text-[#2196f3]'>
            <Link to="#">Post an Ad</Link>
        </li>
        <li>
            <Link to="/login">
                <button className='border-[3px] border-[#f2413a] rounded-[10px] px-[1rem] py-[0.5rem] text-[#f2413a] hover:text-[#2196f3] hover:border-[#2196f3]'>
                    Sign In
                </button>
            </Link>
        </li>
    </React.Fragment>
    return (
        <>
            <nav className='flex justify-between items-center px-[25px] py-[12px]'>
                <Link to="/">
                    <img className='w-[200px]' src={BrandLogo} alt="" />
                </Link>
                <ul className='flex items-center gap-[25px] font-Malven-Pro font-bold text-[#444445]'>
                    {menuItems}
                </ul>
            </nav>
        </>
    );
};

export default Navbar;