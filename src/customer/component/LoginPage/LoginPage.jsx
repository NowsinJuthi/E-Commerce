import React from 'react';

const LoginPage = () => {
    return (
        <>

            <div className="main mt-10
                      lg:mt-20 flex flex-col">
                <div className="middle bg-slate-100 pt-5 px-3 lg:px-0
                     lg:pt-10 pb-10 dark:bg-website duration-700" >
                    <div className="form-div lg:ml-16 items-center">
                        <form className='
                            h-5/6 lg:w-2/5 bg-white lg:ml-96 pt-10 pb-20 rounded-2xl dark:bg-website1' action=''>
                            <h1 className='text-4xl font-serif pb-7 text-green text-center'>Log In</h1>

                            <div className="username pb-3 text-center">
                                <label>
                                    <input
                                        required
                                        className='p-2 rounded-md w-[350px]
                                             lg:w-2/3 border-2 border-gray-300 border-opacity-50 outline-none focus:border-green peer bg-inherit dark:text-white text-black'
                                    />
                                    <span className='w-24 text-lg text-slate-400 left-[40px]
                                            lg:left-1/4 lg:right-1/2 mt-2 tracking-wide peer-focus:text-green pointer-events-none
                                            peer-focus:text-sm peer-focus:-translate-y-5 text-opacity-80 absolute transition duration-200 
                                          bg-white dark:bg-website1 dark:duration-300 lg:ml-48 lg:mr-32 peer-vaild:text-sm peer-valid:-translate-y-5 dark:focus:text-white'>
                                        Username
                                    </span>
                                </label>
                            </div>


                            <div className="Password pb-3 pt-5 text-center">
                                <label>
                                    <input required className='p-2 rounded-md w-[350px]
                                        lg:w-2/3 border-2 border-gray-300 border-opacity-50 outline-none focus:border-green peer bg-inherit dark:text-white text-black' />

                                    <span className='w-24 text-lg text-slate-400 left-[40px]
                                             lg:left-1/4 lg:right-1/2 mt-2 tracking-wide peer-focus:text-green pointer-events-none
                                              peer-focus:text-sm peer-focus:-translate-y-5
                                              text-opacity-80 absolute transition duration-200 input-text
                                               bg-white dark:bg-website1 dark:duration-300 lg:ml-48 lg:mr-32 peer-vaild:text-sm peer-valid:-translate-y-5'>
                                        Password
                                    </span>
                                </label>
                            </div>

                            <div className="remember pl-6
                                lg:pl-24 pb-10 pt-5 lg:grid grid-cols-3 lg:gap-6
                                 dark:text-websitefont">
                                <label className=''>
                                    <input className='mr-2 accent-green' type="checkbox" />Remember me
                                </label>
                                <a className='text-green' href="">Forgot password?</a>
                            </div>
                            <Link to={'/dash-board'}>
                                <div className="login text-center">
                                    <button className='rounded-md py-2 px-[150px]
                                         lg:w-2/3 lg:p-2 border border-gray-300 bg-green text-white text-xl font-serif' type='submit'>Login</button>
                                </div>
                            </Link>


                            <Link to={'/registration'}>
                                <div className="registration pt-5 text-center dark:text-websitefont">
                                    <label>Don`t have an account?</label>
                                    <a className='text-green pl-3' href="">Reistration</a>
                                </div>
                            </Link>
                        </form>
                    </div>
                </div>
            </div>

        </>
    );
};

export default LoginPage;