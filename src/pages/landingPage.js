import React from "react";
import "./page.css";
import Navbar from "../components/navbar & footer/header/navbar";
import Home from "../components/landinpage/home/home";
import About from "../components/landinpage/about/about";
import Advantage from "../components/landinpage/advantages/advantage";
import Contact from "../components/landinpage/contact/contact";
import Footer from "../components/navbar & footer/footer/footer";
import Scrollbar from "../components/navbar & footer/header/navbar";
import WhyCoinZeb from "../components/whyCoinzeb/whyCoinZeb";
import Getstart from "../components/landinpage/layout/getstart";
import Specilization from "../components/landinpage/specilization/specilization";

export default function LandingPage() {
  return (
    <>
      {/* <div className="container-fluid landingCss"> */}
        <Scrollbar />
        
        <Home />
        <About />
        <Specilization/>
        {/* <Advantage /> */}

        <WhyCoinZeb/>
        {/* <Contact /> */}
        <Getstart/>
        <Footer />
      {/* </div> */}
    </>
  );
}
