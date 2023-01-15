import React from 'react';
import { Link } from 'react-router-dom';
import BrandLogo from "../../assets/WebMaterials/jobboy.svg"

const NavBar = () => {
    return (
        <>
            <nav className='flex justify-between items-center py-[12px] px-[25px]'>
                <Link to="/">
                    <img className='w-[200px]' src={BrandLogo} alt="" />
                </Link>
                <ul>
                    <li className='text-[15px] font-Malven-Pro font-bold py-[15px] text-[#444445]'>
                        <Link to="/talents">Talents</Link>
                        <Link className='mx-[18px]' to="/influencer">Influencer</Link>
                        <Link to="/micro-job">MicroJobs</Link>
                        <Link className='mx-[18px]' to="/micro-job">Post an Add</Link>
                        <button className='border-[3px] border-[#f2413a] py-[0.5rem] px-[1rem] rounded-[10px] hover:border-[#2196f3] text-[#f2413a] hover:text-[#2196f3]'>
                            <Link className='' to="/sign-in">SIGN IN</Link>
                        </button>
                        <button className='mx-[18px]'>
                            <p className=''>Toggle Button</p>
                        </button>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default NavBar;