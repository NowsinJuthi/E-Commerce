import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from "react-toastify";

const CheckOuButton = ({ cart, setCart, selectedProduct, selectedPackageIndex, quantity }) => {
    const navigate = useNavigate();

    const handleCheckout = () => {
        if (!selectedProduct || selectedPackageIndex === null) {
            alert("Please select a package first!");
            return;
        }

        const selectedItem = {
            id: selectedProduct.id,
            img: selectedProduct.img,
            productTitle: selectedProduct.productTitle,
            package: selectedProduct.product[selectedPackageIndex],
            quantity: quantity,
            productPrice: parseInt(selectedProduct.productPrice[selectedPackageIndex]),
        };

        const exists = cart.find(item => item.id === selectedItem.id);
        if (exists) {
            toast.error("🦄 Item already added to cart!!", { autoClose: 1500 });
        } else {
            setCart([...cart, selectedItem]);
            toast.success("🦄 Item added to cart!", { autoClose: 1500 });
        }
        setTimeout(() => navigate("/check-out"), 1500);
    };

    return (
        <>
           
            <button
                onClick={handleCheckout}
                className="mt-6 w-full cursor-pointer bg-button text-gray-200 py-2 rounded-xl hover:bg-[#11ae68] transition"
            >
                Checkout
            </button>
        </>
    );
};

export default CheckOuButton;
