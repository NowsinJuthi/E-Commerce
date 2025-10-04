import axios from "axios";
import { create } from "zustand";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import { Outlet } from "react-router-dom";
axios.defaults.headers.common["Authorization"] = `Bearer ${Cookies.get(
  "token"
)}`;

const UserStore = create((set) => ({

  isLogin: () => !!Cookies.get("token"),

  FormData: JSON.parse(localStorage.getItem("formData") || "{}"),
  LoginData: JSON.parse(localStorage.getItem("loginData") || "{}"),
  userLogin: JSON.parse(localStorage.getItem("userLogin") || "null"),
  profileDetails: null,

  ForgotData: JSON.parse(localStorage.getItem("forgotData") || "{}"),
  setForgot: (name, value) => {
    set((state) => {
      const newForgotData = { ...state.ForgotData, [name]: value };
      localStorage.setItem("forgotData", JSON.stringify(newForgotData));
      return { ForgotData: newForgotData };
    });
  },

  setFormData: (name, value) => {
    set((state) => {
      const newFormData = { ...state.FormData, [name]: value };
      localStorage.setItem("formData", JSON.stringify(newFormData));
      return { FormData: newFormData };
    });
  },

  ForgotUser: async (ForgotData) => {
    try {
      const res = await axios.post(`/api/v1/forgot-password`, {
        email: ForgotData.email,
        newPassword: ForgotData.newPassword,
      });
      if (res.data.message === "Password reset Success") {
        const user = { name: ForgotData.name, email: ForgotData.email };
        set({
          userLogin: { name: ForgotData.name, email: ForgotData.email },
          profileDetails: res.data.user || null,
        });
        localStorage.setItem("userLogin", JSON.stringify(user));
        return res.data;
      } else {
        return res.data;
      }
    } catch (error) {
      console.error("Password reset failed:", error);
      throw error;
    }
  },

  setLoginData: (name, value) => {
    set((state) => {
      const newLoginData = { ...state.LoginData, [name]: value };
      localStorage.setItem("loginData", JSON.stringify(newLoginData));
      return { LoginData: newLoginData };
    });
  },

  registerUser: async (formData) => {
    try {
      const res = await axios.post(`/api/v1/register`, formData);
      if (res.data.message === "Register Successful") {
        Cookies.set("token", res.data.jwt);
        const user = { name: formData.name, email: formData.email };
        set({ userLogin: user });
        localStorage.setItem("userLogin", JSON.stringify(user));
        toast.success("Registration successful!");
      }
      return res;
    } catch (err) {
      console.error("Registration failed:", err);
      throw err;
    }
  },

  loginUser: async (LoginData) => {
    try {
      const res = await axios.post(`/api/v1/login`, {
        email: LoginData.email,
        password: LoginData.password,
        
      });
      if (res.data.message === "Login Success") {
        Cookies.set("token", res.data.jwt);
        Cookies.set("role", res.data.role);

        const user = { name: LoginData.name, email: LoginData.email, role: Number(res.data.role) };
        set({
          userLogin: user,
          profileDetails: res.data.user || null,
        });
        localStorage.setItem("userLogin", JSON.stringify(user));
        return res.data;
      } else {
        return res.data;
      }
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  },

 logOutUser: async () => {
  Cookies.remove("token");
  localStorage.removeItem("userLogin");
  localStorage.removeItem("formData");
  localStorage.removeItem("loginData");
  set({ userLogin: null });
},


  profileDetailsRequest: async (updateFields = true) => {
    try {
      let res = await axios.get(`/api/v1/profile`);
      if (res.data["data"].length > 0) {
        const profile = res.data["data"][0];
        set({
          profileDetails: profile,
          profileData: updateFields
            ? {
                name: profile.name || "",
                email: profile.email || "",
                password: profile.password || "",
              }
            : {
                name: "",
                email: "",
                password: "",
              },
        });
      }
    } catch (err) {
      console.error("Logout failed:", err);
    }
  },

  profileSaveRequest: async (postBoby) => {
    try {
      set({ profileDetails: null });
      let res = await axios.post(`/api/v1/profile`, postBoby);
      return res.data["status"] == "success";
    } catch (error) {
      console.error("Profile save failed:", error);
    }
  },

  initUser: async () => {
    const user = JSON.parse(localStorage.getItem("userLogin"));
    if (user) set({ userLogin: user });
  },
}));

export default UserStore;
