import React from "react";
import "./about.css";

export default function About() {
  return (
    <>
      <div className="container-fluid aboutBg py-5" id="action2">
        <div className="container ">
          <div className="row text-white justify content around">
            <div className="card bg-dark text-white py-5 aboutCard">
              <div className="col-lg-10  text-center">
                <h4 className="aboutP">
                  At CoinZeb, we're committed to providing you with
                  comprehensive insights into utility-based cryptocurrency
                  projects. Our platform is designed to be informative,
                  user-friendly, and up-to-date, making it easier for you to
                  discover and understand the potential of these groundbreaking
                  initiatives.
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
