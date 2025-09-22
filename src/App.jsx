import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./customer/component/HomePage/MainPage";
import Navigation from "./customer/component/Navbar/Navigation";
import Footer from "./customer/component/Footer/Footer";
import { useState } from "react";
import CartPage from "./customer/component/AddToCart/CartPage";
import CheckOutPage from "./customer/component/CheckOut/CheckOutPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginPage from "./customer/component/LoginPage/LoginPage";
import Registration from "./customer/component/Registration/Registration";
import GiftCard from "./customer/component/GiftCardPage/GiftCard";
import GameTopupPage from "./customer/component/GameTopUpPage/GameTopupPage";
import Shop from "./customer/component/ShopPage/Shop";
import ContactUs from "./customer/component/ContactPage/ContactUs";
import SingleMainPage from "./customer/component/SinglePage/SingleMainPage";


function App() {

  const [cart, setCart] = useState([])


  return (
    <BrowserRouter>
      <div className="all col-span-12 w-full bg-no-repeat bg-center bg-cover bg-gray-900" >
        <div className="transparents max-w-screen">
          <Navigation cart={cart} setCart={setCart} />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/:title" element={<SingleMainPage cart={cart} setCart={setCart} />} />
            <Route path="/cart" element={<CartPage cart={cart} setCart={setCart} />} />
            <Route path="/check-out" element={<CheckOutPage cart={cart} setCart={setCart} />} />
            <Route path="/log-in" element={<LoginPage />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/git-card" element={<GiftCard />} />
            <Route path="/games-top-up" element={<GameTopupPage />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
          <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          <Footer />
        </div>
      </div>


    </BrowserRouter>
  )
}

export default App
