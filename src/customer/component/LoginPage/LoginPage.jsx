import React from "react";
import { Link, useNavigate } from "react-router-dom";
import UserStore from "../store/UserStore";
import { toast } from "react-toastify";

const LoginPage = () => {
  const LoginData = UserStore((state) => state.LoginData);
  const setLoginData = UserStore((state) => state.setLoginData);
  const loginUser = UserStore((state) => state.loginUser);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await loginUser(LoginData);

      console.log("Response Data:", res);

      if (res.message === "Login Success") {
        toast.success("Login successful!");

        setLoginData("email", "");
        setLoginData("password", "");

        navigate("/profile");
      } else {
        toast.error(res.message || "Login failed");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div
      className="main my-10 mx-5 lg:mx-0 flex items-center
     justify-center h-screen"
    >
      <form
        onSubmit={handleSubmit}
        className="bg-box backdrop-blur-md rounded-2xl 
                   w-full max-w-md md:max-w-lg lg:max-w-xl
                   mx-auto p-6"
        action=""
      >
        <h1 className="text-3xl md:text-4xl font-serif text-green text-center text-gray-200 pb-2">
          Log In
        </h1>
        <hr className="text-gray-600 w-3/5 mx-auto" />

        {/* Email */}
        <div className="relative mt-6">
          <label className="block relative">
            <input
              value={LoginData.email}
              onChange={(e) => setLoginData("email", e.target.value)}
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
              value={LoginData.password}
              onChange={(e) => setLoginData("password", e.target.value)}
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
        {/* Remember & Forgot */}
        <div
          className="w-full flex justify-between items-center 
                        text-gray-200 text-sm py-5"
        >
          <label className="flex items-center">
            <input className="mr-2 accent-green" type="checkbox" /> Remember me
          </label>
          <a className="text-green hover:underline" href="">
            Forgot password?
          </a>
        </div>

        {/* Submit button */}
        <div className="text-center">
          <button
            type="submit"
            className="w-full py-2 rounded-lg bg-button text-white font-medium 
                       hover:bg-green/80 transition"
          >
            Log In
          </button>
        </div>

        {/* Registration */}
        <div className="registration pt-6 text-center text-gray-200">
          <p>
            Don’t have an account?{" "}
            <Link to="/registration" className="text-green hover:underline">
              Registration
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
