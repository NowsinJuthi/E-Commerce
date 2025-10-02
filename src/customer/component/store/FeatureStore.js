import axios from "axios";
import { create } from "zustand";
import Cookies from "js-cookie";



export const FeatureStore = create(() => ({
    FeatureList: null,

    FeatureListRequest: async (set) => {
       let res= await axios.get(`/api/v1/feature-list`);
       if(res.data['status']==="Feature List Found"){
        set({FeatureList: res.data['data']})
       }
    }
}));