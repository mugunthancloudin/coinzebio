import React from "react";
import "./specilization.css";
import Accordion from "react-bootstrap/Accordion";
import Lottie from "lottie-react";
import coin from "../../assets/landingPage/specilization/specAni.json";

export default function Specilization() {
  return (
    <>
      <div className="container-fluid specBg pt-2 pb-5" id="action3">
        <div className="container">
            <div className="row text-white text-center py-5">
<h1>Find on CoinZeb</h1>
            </div>
          <div className="row">
            <div className="col-lg-6 pe-5">
            <Lottie
              animationData={coin}
              loop={true}
              autoplay={true}
              style={{ width: "100%" }}
              className=" "
            />
            </div>
            <div className="col-lg-6">
              <Accordion>
                <Accordion.Item eventKey="0" className="accStyle">
                  <Accordion.Header>Project Profiles</Accordion.Header>
                  <Accordion.Body>
                    Explore detailed profiles of utility-based cryptocurrency
                    projects. Learn about their objectives, use cases,
                    technology, and the problems they aim to solve.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1" className="mt-5 rounded">
                  <Accordion.Header>News and Updates</Accordion.Header>
                  <Accordion.Body>
                    Stay informed about the latest developments in the
                    cryptocurrency world. We provide regular updates on
                    projects, partnerships, and industry trends.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2" className="mt-5 rounded">
                  <Accordion.Header>Educational Resources</Accordion.Header>
                  <Accordion.Body>
                    New to the world of cryptocurrency? We offer articles,
                    guides, and tutorials to help you understand the
                    fundamentals and intricacies of blockchain technology and
                    utility tokens.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3" className="mt-5 rounded">
                  <Accordion.Header>Community</Accordion.Header>
                  <Accordion.Body>
                    Connect with like-minded individuals who share your interest
                    in utility-based cryptocurrencies. Join discussions, share
                    your insights, and expand your network
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="4" className="mt-5 rounded">
                  <Accordion.Header>Reviws and Analysis</Accordion.Header>
                  <Accordion.Body>
                    Our team of experts conducts in-depth reviews and analyses
                    of various utility-based cryptocurrency projects. We
                    evaluate their potential, risks, and overall impact on their
                    respective industries.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="5" className="mt-5 ">
                  <Accordion.Header>Portfolio Tracker</Accordion.Header>
                  <Accordion.Body>
                    Manage your cryptocurrency investments more effectively with
                    our integrated portfolio tracking tool. Keep a close eye on
                    your holdings and monitor their performances.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>    
        </div>
      </div>
    </>
  );
}






