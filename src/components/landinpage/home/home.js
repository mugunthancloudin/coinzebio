import React from "react";
import "./home.css";
import HomeParticle from "../particle/homeParticle";
import WordAnimation from "./wordAnimation";
import Lottie from "lottie-react";
import home from "../../assets/landingPage/home/home.json";
import bag from "../../assets/landingPage/home/bag.json";

export default function Home() {
  const words = [" Utility-based cryptocurrency", "one-stop destination","Inovative blockchain technologies"];

  return (
    <div className="container-fluid py-5 homeBg" id="action1">
      <div className="container">
        {/* <HomeParticle /> */}
        <div className="row homeBg">
          <div className="col-lg-6 lottieFile">
            <Lottie
              animationData={home}
              loop={true}
              autoplay={true}
              style={{ width: "100%" }}
              className=" pe-5"
            />
          </div>
          <div className="col-lg-6 text-white">
         
          <h1 className="homeH1">Explore the exciting world of</h1>
            <WordAnimation words={words} />
            <h1 className="">serve real-world purposes.</h1>
            <div className="justify-content-end">
            
            </div>
            
            
          </div>
        </div>
      </div>
    </div>
  );
}
