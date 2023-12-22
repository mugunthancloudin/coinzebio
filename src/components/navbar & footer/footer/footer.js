import React from "react";
import "./footer.css";
import Lottie from "lottie-react";
import whatsApp from "../../assets/landingPage/footer/whatsapp.png";
import facebook from "../../assets/landingPage/footer/facebook.png";
import twitter from "../../assets/landingPage/footer/twitter.png";
import instagram from "../../assets/landingPage/footer/instagram.png";
import robo from "../../assets/landingPage/footer/footerRobo.json";
import logo from "../../../components/assets/landingPage/navbar/aimLogo.svg";
// import brandLogo from "../../assets/Header & footer/header/medichainlogo.svg";

export default function Footer() {
  return (
    <>
    <div className="container-fluid footerBg">
    <div className="container p-5 text-white pb-4">
        {/* <div className="row pt-5 pb-5">
          <div className="d-lg-flex justify-content-center">
            <div className="col-lg-6 text-lg-center ">
              <h3 className="fw-bold">Receive transmissions</h3>
              <p>Unsubscribe at any time. Privacy policy↗</p>
            </div>
            <div className="col-lg-6 ">
              <div className="d-flex justify-content-center">
                <input
                  type="email"
                  placeholder="Your email"
                  className="form-control email-input w-50"
                />
              </div>
            </div>
          </div>
        </div>

        <hr className="mt-5" /> */}
        <div className="row text-center ">
          <div className="col-lg-3">
            <h4 className="fw-bold mt-3">Products & Solutions</h4>
            <p className="mt-5">Cosmos SDK</p>
            <p>CometBFT</p>
            <p>IBC Protocol</p>
            <p>CosmWasm</p>
          </div>

          <div className="col-lg-3 mt-3">
            <h4 className="fw-bold">Developers</h4>
            <p className="mt-5">Tutorials</p>
            <p>Developer Academy</p>
            <p>Builders Program</p>
            <p>FAQ</p>
          </div>

          <div className="col-lg-3 mt-3">
            <h4 className="fw-bold">EcoSystem</h4>
            <p className="mt-5">Wallets</p>
            <p>Validators </p>
            <p>Case Studies</p>
            <p>Whitepaper</p>
          </div>

          <div className="col-lg-3 mt-3">
            <h4 className="fw-bold">Resourses</h4>
            <p className="mt-5">About</p>
            <p>Contact</p>
            <p>Press Kit</p>
            <p>Blog</p>
          </div>
        </div>

        <hr className="mt-5" />
        {/* <div className="row mt-5">
          <div className="col-lg-8 d-flex">
            <h3 className="me-3">COINZEB</h3>{" "}
            <span className="footerSpan me-3 mt-1">|</span>{" "}
            <h3 className="me-3">Privacy</h3>{" "}
            <span className="footerSpan mt-1 me-3">|</span> <h3>Trademark</h3>
          </div>
          <div className="col-lg-4">&nbsp;</div>
        </div> */}
        <div className="row">
          <p className="mt-3">
            CoinZeb is a registered trademark of the Interchain Foundation.
          </p>
          <p className="mt-1">
            This website is maintained by the Interchain Foundation (ICF) on
            behalf of the decentralized community. The contents and opinions of
            this website do not necessarily reflect those of the ICF. This
            website links to projects, dApps and cryptocurrency exchanges as a
            service to the public. The ICF does not warrant that the information
            provided by these websites is correct, complete, and up-to-date. The
            ICF is not responsible for the content of those websites and
            expressly rejects any liability for damages of any kind resulting
            from the use, reference to, or reliance on any information contained
            within these websites. If you spot an error or issue on this
            website, please email marketing-[at]-interchain.io
          </p>
        </div>
      </div>

    </div>
      
    </>
  );
}
