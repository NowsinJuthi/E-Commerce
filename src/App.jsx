import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./customer/component/HomePage/MainPage";
import Navigation from "./customer/component/Navbar/Navigation";
import Footer from "./customer/component/Footer/Footer";
import TopupPage from "./customer/component/SinglePage/TopupPage";
import { useState } from "react";
import CartPage from "./customer/component/AddToCart/CartPage";
import CheckOutPage from "./customer/component/CheckOut/CheckOutPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginPage from "./customer/component/LoginPage/LoginPage";


function App() {

  const [cart, setCart] = useState([])


  return (
    <BrowserRouter>
      <div className="all col-span-12 w-full bg-no-repeat bg-center bg-cover bg-imgbg" >
        <div className="transparents max-w-screen ">
          <Navigation cart={cart} setCart={setCart} />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/uniqbd/:title" element={<TopupPage cart={cart} setCart={setCart} />} />
            <Route path="/cart" element={<CartPage cart={cart} setCart={setCart} />} />
            <Route path="/check-out" element={<CheckOutPage cart={cart} setCart={setCart} />} />
            
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
