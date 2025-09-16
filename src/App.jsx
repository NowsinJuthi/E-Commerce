import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./customer/component/HomePage/MainPage";
import SingleProduct from "./customer/component/SinglePage/TopUp";
import Navigation from "./customer/component/Navbar/Navigation";
import Footer from "./customer/component/Footer/Footer";



function App() {
  return (
    <BrowserRouter>
    <Navigation/>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/uniqbd/:title" element={<SingleProduct />} />
      </Routes>
     <Footer/>
    </BrowserRouter>
  )
}

export default App
