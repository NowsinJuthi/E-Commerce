import React, { useState, useEffect } from 'react';
import { Topup } from '../Product/TopUp';
import { useNavigate, useParams } from 'react-router-dom';
import { LiaPlusSolid, LiaMinusSolid } from "react-icons/lia";
import { toast, ToastContainer } from "react-toastify";
import CheckOuButton from '../CheckOut/CheckOuButton';
import { allProduct } from '../Product/AllProduct';

const Package = ({ cart, setCart }) => {
    const { title } = useParams();
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [selectedPackageIndex, setSelectedPackageIndex] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const navigate = useNavigate();
    const [playerId, setPlayerId] = useState("");

    useEffect(() => {
        const product = allProduct.find(item => item.title === title);
        setSelectedProduct(product || null);
        setSelectedPackageIndex(null);
        setQuantity(1);
        setPlayerId("");
    }, [title]);

    if (!selectedProduct) return <p className="text-gray-200 p-6">No product found</p>;

    const handleQuantityChange = (d) => setQuantity(prev => Math.max(1, prev + d));


    const AddToCart = () => {
        if (selectedPackageIndex === null) {
            alert("Please select a package first!");
            return;
        }

        if (selectedProduct.categorys === "games to up" && !playerId.trim()) {
            toast.error("⚠️ Please enter your Player ID first!", { autoClose: 1500 });
            return;
        }
        const selectedItem = {
            id: selectedProduct.id,
            img: selectedProduct.img,
            productTitle: selectedProduct.productTitle,
            package: selectedProduct.product[selectedPackageIndex],
            quantity: quantity,
            productPrice: parseInt(selectedProduct.productPrice[selectedPackageIndex]),
            playerId: selectedProduct.categorys === "games to up" ? playerId : ""
        };


        const exists = cart.find(item => item.package === selectedItem.package);

        if (exists) {
            toast.error("🦄 Item already added to cart!", { autoClose: 1500 });
        } else {
            setCart([...cart, selectedItem]);
            toast.success("🛒 Item added to cart!", { autoClose: 1500 });
        }
        setTimeout(() => navigate("/cart"), 1500);
    };




    return (
        <div className="main">

            <div className="transparents grid grid-cols-12 px-5">
                {/* Left Side */}


                <div className="left grid col-span-6 grid-cols-2 gap-4 pb-10 pt-4 px-4 mt-8 
                rounded-2xl mb-36 bg-boxbg backdrop-blur-sm drop-shadow-lg">
                    {selectedProduct.product &&
                        selectedProduct.product.map((prod, index) => (
                            <label
                                key={index}
                                className="group relative rounded-xl shadow-md bg-box backdrop-blur-5xl
                                           hover:shadow-xl drop-shadow-lg overflow-hidden
                                          cursor-pointer transition-all
                                         hover:!bg-[#2c4d75] items-center
                                         has-[:checked]:!bg-[#2c4d75] has-[:checked]:border-button">


                                <input
                                    type="radio"
                                    name="size"
                                    className="absolute inset-0 appearance-none focus:outline-none peer sr-only"
                                    onChange={() => {
                                        if (selectedPackageIndex === index) {

                                            setQuantity((prev) => prev + 1);
                                        } else {

                                            setSelectedPackageIndex(index);
                                            setQuantity(1);
                                        }
                                    }}
                                />

                                <div className="main grid grid-cols-12">
                                    <div className="logo col-span-2 pt-3">
                                        {selectedProduct.productImg && (
                                            <img src={selectedProduct.productImg} className="text-sm font-medium text-gray-600 mt-1 group-has-checked:text-gray-200" />
                                        )}
                                    </div>
                                    <div className="package col-span-6 pl-3 pt-7">
                                        <span className="text-gray-200 text-md font-semibold">{prod}</span>
                                    </div>
                                    <div className="price col-span-4 pl-6 pt-3">
                                        {selectedProduct.productPrice && (
                                            <span className="text-gray-200 text-sm font-medium mt-1">
                                                {selectedProduct.productPrice[index]}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </label>
                        ))}
                </div>

                {/* Right Side */}
                <div className="right col-span-6 mb-5 rounded-2xl p-6 mt-8 ml-7
                 bg-boxbg backdrop-blur-sm drop-shadow-lg">

                    {selectedProduct.categorys === "games to up" && (
                        <div className="game-id text-gray-200 grid grid-cols-12 items-center gap-2 mb-5">
                            <label>
                                <input
                                    value={playerId}
                                    onChange={(e) => setPlayerId(e.target.value)}
                                    required
                                    className='p-2 rounded-[7px] w-[550px]
                                               bg-box drop-shadow-lg outline-none 
                                              focus:border-green peer text-gray-200'
                                />
                                <span className='absolute left-1/4 -mt-9 w-30 text-xl text-slate-200 rounded-[5%] backdrop-blur-md pl-5
                                             tracking-wide pointer-events-none transition-all duration-200
                                            peer-focus:text-green -ml-30 mr-30
                                            peer-focus:-translate-y-4 text-opacity-80  
                                            backdrop-opacity-5
                                            peer-focus:text-green-500 peer-focus:text-sm 
                                           peer-valid:-translate-y-5 text-opacity-80'>
                                    Player ID
                                </span>


                            </label>
                        </div>
                    )}



                    <div className="main grid">
                        {/* Quantity Selector */}
                        <div className="quantity grid grid-cols-12 col-span-2 pb-6 pt-5 pl-6
                         bg-box drop-shadow-lg
                          rounded-[10px]">
                            <div className="quty col-span-9">
                                <p className="text-gray-200 pt-1.5">Quantity</p>
                            </div>
                            <div className="button grid grid-cols-12 col-span-3 text-gray-300 
                                   bg-white/ backdrop-blur-sm shadow-[0_-0.5px_5px_rgba(0,0,0,0.3)] mr-5 rounded-2xl">
                                <div className="minus bg-box p-1 col-span-4 rounded-3xl">
                                    <LiaMinusSolid onClick={() => handleQuantityChange(-1)}
                                        className="cursor-pointer ml-0.5 text-xl text-white hover:text-border border-1 border-border rounded-[50%]" />
                                </div>
                                <span className="text-center col-span-4">{quantity}</span>
                                <div className="minus bg-box p-1 col-span-4 rounded-3xl">
                                    <LiaPlusSolid onClick={() => handleQuantityChange(+1)}
                                        className="ml-1 cursor-pointer text-xl text-white hover:text-border border-1 border-border rounded-[50%]" />
                                </div>
                            </div>


                        </div>

                        {/* Order Summary */}
                        <div className="order-summery col-span-2 rounded-[10px] p-5 mt-5
                         bg-box drop-shadow-lg">
                            <h1 className="text-gray-200 pb-3">Order Summary</h1>
                            <hr className="text-gray-500 pt-5" />
                            <h1 className="text-gray-200 text-sm">
                                Price: {selectedPackageIndex !== null && selectedProduct?.productPrice
                                    ? parseInt(selectedProduct.productPrice[selectedPackageIndex]) * quantity + " "
                                    : 'Select a package'}
                            </h1>

                            <CheckOuButton
                                cart={cart}
                                setCart={setCart}
                                selectedProduct={selectedProduct}
                                selectedPackageIndex={selectedPackageIndex}
                                quantity={quantity}
                                playerId={playerId}
                            />

                            <button
                                onClick={AddToCart}
                                className="mt-6 w-full cursor-pointer 
                                 hover:bg-[#39557c] bg-button
                                        text-gray-200 py-2 rounded-[10px] ">
                                Add To Cart
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Package;
