import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import SignupIllusion from "../../assets/WebMaterials/signup-illusion.webp";
import FacebookLogo from "../../assets/WebMaterials/facebook.svg";
import GoogleLogo from "../../assets/WebMaterials/google.svg";
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';
import app from '../../Firebase/firebase.config';
import useToken from '../../Hooks/useToken';

const SingUp = () => {
    
    const auth = getAuth(app);

    const { register, formState: { errors }, handleSubmit } = useForm();
    
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [token] = useToken(user);
    const navigate = useNavigate();

    let errorText;

    if(loading || updating ){
        return <div>Signing...</div>
    }

    if(error || updateError){
        errorText = <p className='text-red-600 font-Malven-Pro font-semibold mt-[4px]'>{error.message}</p>
    }

    if(token){
        navigate("/")
    }

    const onSubmit = async(data) => {
        console.log(data)
        await createUserWithEmailAndPassword(data.email, data.password, data.name);
        await updateProfile({ displayName: data.name });
    };

    

    return (
        <div className='flex justify-between font-Malven-Pro'>
            <div>
                <div>
                    <h2 className='text-[36px] text-[#444445] font-bold mb-[1rem]'>Sign Up</h2>
                    <p className='mb-[1.5rem] font-[700]'>You already have an account on Jobboy? <Link className='text-[#e3342f] hover:text-[#3490dc]' to="/login">Sign In</Link></p>
                </div>
                <div className='w-[600px]'>
                    <form className='w-11/12' onSubmit={handleSubmit((onSubmit))}>

                    <div className="form-control w-[550px]">
                            <label className="label">
                                <span className="label-text text-[15px] font-semibold text-[#9a9a9a]">Your full name</span>
                            </label>
                            <input type="text"
                                {...register("name", { required: "Name is required" })}
                                className="input input-bordered" />
                            {errors.name && <p className='text-red-600 font-Malven-Pro font-semibold pl-[4px] mt-[3px]'>{errors.name?.message}</p>}
                        </div>

                        <div className="form-control w-[550px]">
                            <label className="label">
                                <span className="label-text text-[15px] font-semibold text-[#9a9a9a]">E-mail</span>
                            </label>
                            <input type="email"
                                {...register("email", { required: "Email is required",
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Enter a valid Email'
                                } },
                                )}
                                className="input input-bordered" />
                            {errors.email?.type === 'required' && <p className='text-red-600 font-Malven-Pro font-semibold pl-[4px] mt-[3px]'>{errors.email?.message}</p>}
                            {errors.email?.type === 'pattern' && <p className='text-red-600 font-Malven-Pro font-semibold pl-[4px] mt-[3px]'>{errors.email?.message}</p>}

                        </div>

                        <div className="form-control w-[550px]">
                            <label className="label">
                                <span className="label-text text-[15px] font-semibold text-[#9a9a9a]">Password</span>
                            </label>
                            <input type="password"
                                {...register("password", { required: "Password is required", minLength: { value: 6, message: 'Password must be 6 characters or longer' } })}
                                className="input input-bordered" />
                            {errors.password && <p className='text-red-600 font-Malven-Pro font-semibold pl-[4px] mt-[3px]'>{errors.password?.message}</p>}
                        </div>



                        <div className='flex justify-between mt-[15px]'>
                            <input type="checkbox" />
                            <Link className='text-[#3490dc] font-[500]' to="#">
                                Forgot Your Password?
                            </Link>
                        </div>
                        {errorText}
                        <button className='mt-[25px] mb-[5px] w-[550px] bg-transparent border-[2px] border-[#f2413a] py-[12px] rounded-[10px] text-[#f2413a] font-bold hover:text-[#fff] hover:bg-[#f2413a]'>Register</button>
                    </form>
                    <div className='divider'>or</div>
                    <button type='submit' className='mt-[5px] w-[550px] bg-transparent border-[2px] border-[#212529] py-[12px] rounded-[10px] text-[#212529] font-bold hover:text-[#fff] hover:bg-[#212529] flex justify-center items-center gap-x-[45px]'>
                        <img className='h-[25px] w-[25px] text-left' src={FacebookLogo} alt="facebook_logo" />
                        <p>Login With Facebook</p>
                    </button>
                    <button type='submit' className='mt-[25px] w-[550px] bg-transparent border-[2px] border-[#212529] py-[12px] rounded-[10px] text-[#212529] font-bold hover:text-[#fff] hover:bg-[#212529] flex justify-center items-center gap-x-[45px]'>
                        <img className='h-[25px] w-[25px] text-left' src={GoogleLogo} alt="facebook_logo" />
                        <p>Login With Google</p>
                    </button>
                </div>
            </div>
            <div>
                <img className='w-[700px] h-[800px]' src={SignupIllusion} alt="" />
            </div>
        </div>
    );
};

export default SingUp;