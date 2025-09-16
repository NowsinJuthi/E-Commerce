import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AddtoCard = () => {

    const notify = () => {
        toast.success('🦄 Wow so easy!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
        });

    }

    return (
        <div>
            <button onClick={notify} className="mt-6 w-full 
            cursor-pointer bg-[#11ae68] text-gray-200 py-2 rounded-xl hover:bg-[#11ae68] transition">
                Add To Cart
            </button>
        </div>
    );
};

export default AddtoCard;