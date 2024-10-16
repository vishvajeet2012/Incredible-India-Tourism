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
      <Route path="contact" element={<Contact/>} />
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;