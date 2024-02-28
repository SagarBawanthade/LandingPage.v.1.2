import React from "react";
import "./marketinlab.css";
import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/700.css"; // Specify weight
import Heropage1 from "./components/Heropage1";
import WhatWeProvide from "./components/WhatWeProvide";
import Testimonials from "./components/Testimonials";
import ContactUs from "./components/ContactUs";
import Ourwork1 from "./components/Ourwork1";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div className="container">
    <Heropage1/>
    <Ourwork1/> 
    <WhatWeProvide/>
    <Testimonials/>
    <ContactUs/> 
    <Footer/>
    </div>
  );
};

export default App;
