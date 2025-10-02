import axios from "axios";
import { create } from "zustand";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

const UserStore = create((set) => ({
  isLogin: () => !!Cookies.get("token"),

  FormData: {
    name: "",
    email: "",
    password: "",
  },
  setFormData: (name, value) => {
    set((state) => ({
      FormData: {
        ...state.FormData,
        [name]: value,
      },
    }));
  },

  LoginData: {
    email: "",
    password: "",
  },
  setLoginData: (name, value) => {
    set((state) => ({
      LoginData: { ...state.LoginData, [name]: value },
    }));
  },

  userLogin: null,
  registerUser: async (formData) => {
    try {
      const res = await axios.post(`/api/v1/register`, formData);

      if (res.data.message === "Register Successful") {
        Cookies.set("token", res.data.jwt);
        set({ userLogin: { name: formData.name, email: formData.email } });

        toast.success("Registration successful!");
      }

      return res;
    } catch (error) {
      console.error("Registration failed:", error);
      throw error;
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

      set({
        userLogin: {
          name: LoginData.name,
          email: LoginData.email
        },
        profileDetails: res.data.user || null,
      });

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
    try {
      set({ userLogin: null });
      Cookies.remove("token");
      console.log("Logout successful (client-side)");
      return true;
    } catch (err) {
      console.error("Logout failed:", err);
      return false;
    }
  },

  profileData: {
    name: "",
    email: "",
    password: "",
  },
  setprofileData: (name, value) => {
    set((state) => ({
      profileData: {
        ...state.profileData,
        [name]: value,
      },
    }));
  },

  profileDetails: null,
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

  resetProfileData: () =>
    set({
      profileData: {
        name: "",
        email: "",
        password: "",
      },
    }),

  profileSaveRequest: async (postBoby) => {
    try {
      set({ profileDetails: null });
      let res = await axios.post(`/api/v1/profile`, postBoby);
      return res.data["status"] == "success";
    } catch (error) {
      console.error("Profile save failed:", error);
    }
  },
}));

export default UserStore;
