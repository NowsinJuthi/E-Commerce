import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Empty from "./Empty";
import CheckOuButton from "../CheckOut/CheckOuButton";
import { Helmet } from "react-helmet";
import { toast } from "react-toastify";

const CartPage = ({
  cart,
  setCart,
  selectedProduct,
  selectedPackageIndex,
  quantity,
}) => {
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (selectedProduct === null) {
      alert("Please select a package first!");
      return;
    }

    const selectedItem = {
      id: selectedProduct.id,
      img: selectedProduct.img,
      productTitle: selectedProduct.productTitle,
      package: selectedProduct.product[selectedPackageIndex],
      quantity: quantity,
      productPrice: parseInt(
        selectedProduct.productPrice[selectedPackageIndex]
      ),
      playerId: selectedProduct.categorys === "games to up" ? playerId : "",
    };

    const exists = cart.find((item) => item.id === selectedItem.id);
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
  };
  const subtotal = cart.reduce(
    (acc, item) => acc + item.productPrice * item.quantity,
    0
  );

  return (
    <>
      <Helmet>
        <title>Cart | UniQbd</title>
        <meta
          name="description"
          content="View your shopping cart and proceed to checkout."
        />
        <meta name="keywords" content="UniQbd cart, shopping cart, checkout" />
      </Helmet>
      <div className="lg:p-6 p-3">
        {cart.length === 0 ? (
          <div className="main">
            <Empty />
          </div>
        ) : (
          <div
            className="main lg:py-4 py-2 text-gray-200
                                       bg-boxbg backdrop-blur-sm drop-shadow-lg
                                       rounded-[10px] text-center"
          >
            <div
              className="All lg:py-6 lg:w-[60%] w-[95%]
                         mx-auto rounded-[10px] pt-5 lg:p-10 lg:pl-4
                        bg-box drop-shadow-lg"
            >
              <h1 className="text-3xl pb-3">Shopping Cart</h1>
              <hr className="text-gray-600 pb-5" />

              {cart.map((product, index) => (
                <>
                  <div
                    key={index}
                    className="all-itmes pt-5 grid grid-cols-12 items-center gap-2"
                  >
                    <div className="left col-span-8 grid grid-cols-12">
                      <img
                        src={product.img}
                        alt=""
                        className="h-[70px] w-[150px] lg:w-30 lg:h-28
                                             lg:ml-10 pl-3 col-span-3"
                      />

                      <div className="package col-span-6 pt-4">
                        <p>{product.productTitle}</p>
                        <p>{product.package}</p>
                        {product?.categorys === "games to up" && (
                          <p className="col-span-3 pt-12 text-[14px]">
                            Player ID: {product.playerId}
                          </p>
                        )}
                        <p>Player ID: {product.playerId}</p>
                      </div>
                    </div>

                    <div className="right col-span-4">
                      <p className="col-span-3">
                        Price: {product.productPrice} TK
                      </p>
                      <p className="col-span-2">Quantity: {product.quantity}</p>
                      <p className="col-span-3">
                        SubTotal: {product.productPrice * product.quantity} TK
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleRemove(product.id)}
                    className="col-span-1 cursor-pointer hover:text-red-600 pb-4"
                  >
                    Remove
                  </button>
                  <hr className="text-gray-700 pb-5 w-[90%] mx-auto" />
                </>
              ))}
              <div className="subtotal pt-5 text-right">
                <h2 className="text-xl font-bold">
                  Cart Totals: {subtotal} TK
                </h2>
              </div>

              <Link to={"/check-out"}>
                <button
                  onClick={handleCheckout}
                  className="mt-6 w-[61%] cursor-pointer bg-button text-gray-200 py-2
                                rounded-[10px] hover:bg-[#39557c] transition"
                >
                  Checkout
                </button>
              </Link>

              <Link to={"/"}>
                <p className="text-sm py-5 hover:text-hover">
                  Continue Shopping
                </p>
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CartPage;
