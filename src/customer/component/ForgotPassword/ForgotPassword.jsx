import { useNavigate } from "react-router-dom";
import UserStore from "../store/UserStore";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";

const ForgotPassword = () => {
  const ForgotData = UserStore((state) => state.ForgotData);
  const setForgot = UserStore((state) => state.setForgot);
  const ForgotUser = UserStore((state) => state.ForgotUser);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await ForgotUser(ForgotData);

      console.log("Response Data:", res);

      if (res.message === "Password Reset Successfully") {
        toast.success("Password Reset successful!");

        setForgot("email", "");
        setForgot("newPassword", "");

        navigate("/profile");
      } else {
        toast.error("Password Reset failed");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <>
      <Helmet>
        <title>ForgotPassword| UniQbd</title>
        <meta
          name="description"
          content="Manage users, content, and settings."
        />
        <meta name="keywords" content="UniQbd admin, dashboard, management" />
      </Helmet>
      
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
            Reset Password
          </h1>
          <hr className="text-gray-600 w-3/5 mx-auto" />

          {/* Email */}
          <div className="relative mt-6">
            <label className="block relative">
              <input
                value={ForgotData.email}
                onChange={(e) => setForgot("email", e.target.value)}
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
                value={ForgotData.newPassword}
                onChange={(e) => setForgot("newPassword", e.target.value)}
                required
                type="password"
                name="newPassword"
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
                New Password
              </span>
            </label>
          </div>

          {/* Submit button */}
          <div className="text-center mt-10">
            <button
              type="submit"
              className="w-full py-2 rounded-lg bg-button text-white font-medium 
                       hover:bg-green/80 transition"
            >
              Password Reset
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ForgotPassword;
