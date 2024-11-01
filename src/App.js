import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Comp/Home";
import Navbar from "./Comp/Navbar";
import Product from "./Comp/Product";
import ImmersiveExperience from "./Comp/ImmersiveExpreince";
import ViewallCard from "./Comp/ViewallCard";
import SingleCity from "./Comp/SingleCity";
import About from "./informoation/About";
import Contact from "./informoation/Contact";
import { Counte } from "./feature/counter/Counte";
import Cart from "./listing/Cart";
import Footer from "./Comp/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/ImmersiveExperience" element={<ImmersiveExperience/>} />
        <Route path="/viewallcard/" element={<ViewallCard/>}/>
      <Route path= "/singlecity/:id"    element={<SingleCity/>} />
      <Route path="/about"     element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/counter" element={<Counte/>} />
      <Route path="/cart" element={<Cart/>} />
      
       </Routes>
       <Footer/>
    </BrowserRouter>
  );
}

export default App;