import axios from "axios";
import { create } from "zustand";
import Cookies from "js-cookie";



export const ProductStore = create(() => ({
    ProductList: null,

    ProductListRequest: async (set) => {
       let res= await axios.get(`/api/v1/product-list`);
       if(res.data['status']==="Product List Found"){
        set({ProductList: res.data['data']})
       }
    }
}));