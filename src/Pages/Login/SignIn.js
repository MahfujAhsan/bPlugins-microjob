import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import LoginIllusion from "../../assets/WebMaterials/login-illusion.webp";

const SignIn = () => {

    const { register, handleSubmit } = useForm();
    const [data, setData] = useState("");

    return (
        <div className='flex justify-between items-center font-Malven-Pro'>
            <div>
                <div>
                    <h2 className='text-[36px] text-[#444445] font-bold mb-[1rem]'>Sign In</h2>
                    <p className='mb-[1.5rem] font-[700]'>Don't you have an account on Jobboy? <Link className='text-[#e3342f] hover:text-[#3490dc]' to="#">Register</Link></p>
                </div>
                <div>
                    <form className='w-11/12' onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
                        <div className="form-control w-full max-w-xs ">
                            <label className="label">
                                <span className="label-text text-[15px] font-semibold text-[#9a9a9a]">E-Mail Address</span>
                            </label>
                            <input type="text" {...register("email")} className="input input-bordered" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-[15px] font-semibold text-[#9a9a9a] mt-[1rem]">Password</span>
                            </label>
                            <input type="password" {...register("password")} className="input input-bordered" />
                        </div>
                        <div className='flex justify-between mt-[15px]'>
                            <input type="checkbox" />
                            <Link className='text-[#3490dc] font-[500]' to="#">
                                Forgot Your Password?
                            </Link>
                        </div>
                        <button type='submit' className='mt-[25px] w-full bg-transparent border-[2px] border-[#f2413a] py-[12px] rounded-[10px] text-[#f2413a] font-bold hover:text-[#fff] hover:bg-[#f2413a]'>Login</button>
                    </form>
                </div>
            </div>
            <div>
                <img className='w-[700px]' src={LoginIllusion} alt="" />
            </div>
        </div>
    );
};

export default SignIn;