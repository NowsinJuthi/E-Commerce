import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
    return (
        <>
            <div className="main">

                <form className='bg-boxbg backdrop-blur-md rounded-2xl w-[40%] mx-auto my-10 py-5' action=''>
                    <h1 className='text-4xl font-serif  text-green text-center text-gray-200 pb-2'>Log In</h1>
                    <hr className='text-gray-600 w-[60%] mx-auto'/>
                    <div className="username pb-3 text-center pt-10 ">
                        <label>
                            <input
                                required
                                className='p-2 rounded-md w-[350px]
                                              bg-[#0b2440] border-opacity-50 outline-none 
                                              focus:border-green peer text-gray-200'
                            />
                            <span className='w-30 text-[15px] text-slate-200 rounded-[5%]
                                            left-1/4 mt-2 tracking-wide peer-focus:text-green pointer-events-none
                                            peer-focus:text-[12px] peer-focus:-translate-y-4 text-opacity-80 absolute transition duration-200 
                                           backdrop-blur-sm backdrop-opacity-5
                                           -ml-10 mr-30 peer-vaild:text-sm peer-valid:-translate-y-4'>
                                Email Address
                            </span>
                        </label>
                    </div>


                    <div className="Password pb-3 pt-5 text-center">
                       <label>
                            <input
                                required
                                className='p-2 rounded-md w-[350px]
                                              bg-[#0b2440] border-opacity-50 outline-none 
                                              focus:border-green peer text-gray-200'
                            />
                            <span className='w-30 text-[15px] text-slate-200 rounded-[5%]
                                            left-1/4 mt-2 tracking-wide peer-focus:text-green pointer-events-none
                                            peer-focus:text-[12px] peer-focus:-translate-y-4 text-opacity-80 absolute transition duration-200 
                                           backdrop-blur-sm backdrop-opacity-5
                                           -ml-14 mr-30 peer-vaild:text-sm peer-valid:-translate-y-4'>
                                Password
                            </span>
                        </label>
                    </div>

                    <div className="remember w-[70%] mx-auto 
                                pl-2 pb-10 pt-5 grid grid-cols-2 gap-20 text-gray-200">
                        <label className=''>
                            <input className='mr-2 accent-green' type="checkbox" />Remember me
                        </label>
                        <a className='text-green' href="">Forgot password?</a>
                    </div>



                    <Link to={'/registration'}>
                        <div className="registration pt-5 text-center text-gray-200">
                            <label>Don`t have an account?</label>
                            <a className='text-green pl-3' href="">Reistration</a>
                        </div>
                    </Link>
                </form>

            </div>
        </>
    );
};

export default LoginPage;