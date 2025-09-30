import React, { useEffect } from "react";
import { Link} from "react-router-dom";
import { getUser, register } from "../State/Auth/Action";
import { useDispatch, useSelector } from "react-redux";

const Registration = () => {
 
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const {auth}=useSelector((store) => store);

  useEffect(() => {
    if (jwt) {
      dispatch(getUser(jwt))
    }
  }, [jwt, auth.jwt]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    const userData = {
      name: data.get("name"),
      email: data.get("email"),
      password: data.get("password"),
    };
    dispatch(register(userData));
    console.log("userData", userData);
    event.target.reset();
   
  };

  return (
    <div className="main h-screen flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-box backdrop-blur-md rounded-2xl 
                   w-full max-w-md md:max-w-lg lg:max-w-xl 
                   mx-auto p-6"
      >
        <h1 className="text-3xl md:text-4xl font-serif text-green text-center text-gray-200 pb-2">
          Registration
        </h1>
        <hr className="text-gray-600 w-3/5 mx-auto" />

        {/* Name */}
        <div className="relative mt-10">
          <label className="block relative">
            <input
              required
              type="text"
              name="name"
              className="peer p-3 rounded-md w-full
                         bg-button
                         outline-none focus:border-green text-gray-200"
            />
            <span
              className="absolute left-3 top-3 text-[15px] text-slate-200 
                         tracking-wide pointer-events-none
                         peer-focus:text-green peer-focus:text-[12px] 
                         peer-focus:-translate-y-3 peer-focus:top-1
                         peer-valid:text-green peer-valid:text-[12px] 
                         peer-valid:-translate-y-3 peer-valid:top-1
                         transition duration-200"
            >
              Name
            </span>
          </label>
        </div>

        {/* Email */}
        <div className="relative mt-6">
          <label className="block relative">
            <input
              required
              type="email"
              name="email"
              className="peer p-3 rounded-md w-full
                         bg-button
                         outline-none focus:border-green text-gray-200"
            />
            <span
              className="absolute left-3 top-3 text-[15px] text-slate-200 
                         tracking-wide pointer-events-none
                         peer-focus:text-green peer-focus:text-[12px] 
                         peer-focus:-translate-y-3 peer-focus:top-1
                         peer-valid:text-green peer-valid:text-[12px] 
                         peer-valid:-translate-y-3 peer-valid:top-1
                         transition duration-200"
            >
              Email Address
            </span>
          </label>
        </div>

        {/* Password */}
        <div className="relative mt-6">
          <label className="block relative">
            <input
              required
              type="password"
              name="password"
              className="peer p-3 rounded-md w-full
                         bg-button 
                         outline-none focus:border-green text-gray-200"
            />
            <span
              className="absolute left-3 top-3 text-[15px] text-slate-200 
                         tracking-wide pointer-events-none
                         peer-focus:text-green peer-focus:text-[12px] 
                         peer-focus:-translate-y-3 peer-focus:top-1
                         peer-valid:text-green peer-valid:text-[12px] 
                         peer-valid:-translate-y-3 peer-valid:top-1
                         transition duration-200"
            >
              Password
            </span>
          </label>
        </div>

        {/* Submit */}
        <div className="text-center mt-8">
          <button
            type="submit"
            className="w-full py-2 rounded-lg bg-button text-white font-medium 
                       hover:bg-green/80 transition"
          >
            Register
          </button>
        </div>

        {/* Already have account */}
        <div className="pt-6 text-center text-gray-200">
          <p>
            Have an account?{" "}
            <Link to="/log-in" className="text-green hover:underline">
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Registration;
