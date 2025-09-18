import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Empty from './Empty';
import CheckOuButton from '../CheckOut/CheckOuButton';

const CartPage = ({ cart, setCart, selectedProduct, selectedPackageIndex, quantity }) => {


    const navigate = useNavigate();

    const handleCheckout = () => {
        if (!selectedProduct=== null) {
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



    const handleRemove = (id) => {
        const arr = cart.filter((item) => item.id !== id);
        setCart(arr);
    }
    const subtotal = cart.reduce((acc, item) => acc + (item.productPrice * item.quantity), 0);

    return (
        <div className="p-6">
            {
                cart.length === 0 ? (
                    <div className="main">
                        <Empty />
                    </div>
                ) : (

                    <div className="main border-gray-600 py-3 text-gray-200
                                       bg-background backdrop-blur-sm
                                       rounded-2xl text-center">
                        <div className="All py-5 w-[50%] mx-auto">
                            <h1 className='text-2xl pb-3'>Shopping Cart</h1>

                            {cart.map((product, index) => (
                                <>
                                    <hr className='text-gray-600' />

                                    <div key={index} className="all-itmes pt-5 grid grid-cols-12 items-center gap-2">
                                        <img src={product.img} alt="" className="w-28 h-28 col-span-3" />
                                        <p className='col-span-3'>Unit Price: {product.productPrice} TK</p>
                                        <p className='col-span-2'>Quantity: {product.quantity}</p>
                                        <p className='col-span-3 font-semibold'>Total: {product.productPrice * product.quantity} TK</p>
                                    </div>
                                    <button
                                        onClick={() => handleRemove(product.id)}
                                        className='col-span-1 cursor-pointer hover:text-red-600 pb-4'>
                                        Remove
                                    </button>
                                </>
                            ))}
                            <div className="subtotal pt-5 text-right">
                                <h2 className="text-xl font-bold">
                                    Subtotal: {subtotal} TK
                                </h2>
                            </div>
                        </div>

                        <Link to={'/check-out'}>
                            <button
                                onClick={handleCheckout}
                                className="mt-6 w-full cursor-pointer bg-button text-gray-200 py-2 rounded-xl hover:bg-[#11ae68] transition"
                            >
                                Checkout
                            </button>
                        </Link>

                        <Link to={'/'}>
                            <p className='text-sm py-5 hover:text-website'>Continue Shopping</p>
                        </Link>
                    </div>

                )}
        </div>
    );
};

export default CartPage;