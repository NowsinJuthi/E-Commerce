import axios from "axios";
import { create } from 'zustand';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';


const UserStore = create((set) => ({
    isLogin: () => !!Cookies.get('token'),

    FormData: {
        username: '',
        email: '',
        password: '',
        mobileNumber: ''
    },
    setFormData: (name, value) => {
        set((state) => ({
            FormData: {
                ...state.FormData,
                [name]: value
            }
        }));

    },
    LoginData: {
        email: '',
        password: '',

    },
    setLoginData: (name, value) => {
        set((state) => ({
            LoginData: {
                ...state.LoginData,
                [name]: value
            }
        }));
    },


    userLogin: null,
    registerUser: async (formData) => {
        try {
            const res = await axios.post(`/api/v1/registration`, formData);
            if (res.data.message === "Success") {
                set({ userLogin: res.data.data });
                Cookies.set("token", res.data.token);
                toast.success("Registration successful!");
            }
            return res;
        } catch (error) {
            return res.status(500).json({ message: "Failed" });;
        }
    },


    loginUser: async (formData) => {
        try {
            const res = await axios.post(`/api/v1/login`, formData);
            if (res.data.message === "Success") {
                set({ userLogin: res.data.data });
                Cookies.set("token", res.data.token);
            }
            return res;
        } catch (error) {
            res.status(500).json({ status: 'fail', message: error.message });
        }
    },

    logOutUser: async () => {
        try {
            set({ userLogin: null });
            Cookies.remove('token');
            console.log("Logout successful (client-side)");
            return true;
        } catch (err) {
            console.error("Logout failed:", err);
            return false;
        }
    },

    profileData: {
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        mobileNumber: ''
    },
    setprofileData: (name, value) => {
        set((state) => ({
            profileData: {
                ...state.profileData,
                [name]: value
            }
        }));

    },


    profileDetails: null,
    profileDetailsRequest: async (updateFields = true) => {
        try {
            let res = await axios.get(`/api/v1/read-profile`);
            if (res.data['data'].length > 0) {
                const profile = res.data['data'][0];
                set({
                    profileDetails: profile,
                    profileData: updateFields
                        ? {
                            firstName: profile.firstName || '',
                            lastName: profile.lastName || '',
                            email: profile.email || '',
                            address: profile.address || '',
                            mobileNumber: profile.mobileNumber || ''
                        }
                        : {
                            firstName: '',
                            lastName: '',
                            email: '',
                            address: '',
                            mobileNumber: ''
                        }
                });
            }
        } catch (error) {
            unauthorized(error.response.status);
        }
    },


    resetProfileData: () => set({
        profileData: {
            firstName: '',
            lastName: '',
            email: '',
            address: '',
            mobileNumber: ''
        }
    }),


    profileSaveRequest: async (postBoby) => {
        try {
            set({ profileDetails: null })
            let res = await axios.post(`/api/v1/profile`, postBoby)
            return res.data['status'] == "success"
        } catch (error) {
            unauthorized(error.response.status)
        }
    },
   
}));

export default UserStore;
