import React from 'react';
import FacebookLogo from "../assets/WebMaterials/facebook.svg";
import GoogleLogo from "../assets/WebMaterials/google.svg";

const SocialButtons = ({googleLogin, facebookLogin}) => {


    return (
        <React.Fragment>
            <button onClick={() => facebookLogin()} type='submit' className='mt-[5px] w-[550px] bg-transparent border-[2px] border-[#212529] py-[12px] rounded-[10px] text-[#212529] font-bold hover:text-[#fff] hover:bg-[#212529] flex justify-center items-center gap-x-[45px]'>
                <img className='h-[25px] w-[25px] text-left' src={FacebookLogo} alt="facebook_logo" />
                <p>Login With Facebook</p>
            </button>
            <button onClick={() => googleLogin()} type='submit' className='mt-[25px] w-[550px] bg-transparent border-[2px] border-[#212529] py-[12px] rounded-[10px] text-[#212529] font-bold hover:text-[#fff] hover:bg-[#212529] flex justify-center items-center gap-x-[45px]'>
                <img className='h-[25px] w-[25px] text-left' src={GoogleLogo} alt="facebook_logo" />
                <p>Login With Google</p>
            </button>
        </React.Fragment>
    );
};

export default SocialButtons;