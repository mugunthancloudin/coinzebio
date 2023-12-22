import React from "react";
import "./advantage.css";

export default function Advantage() {
  return (
    <>
      <div className="container-fluid text-white text-center container-cont">
          <div className="row">
            <h1 className="cont-h1">Fast, stable, scalable Ethereum.</h1>
            <h5 className="cont-h5 mt-4">
              OP Mainnet is a fast, stable, and scalable L2 blockchain built by
              Ethereum developers,
              <br /> for Ethereum developers. Built as a minimal extension to
              existing Ethereum software,
              <br /> OP Mainnet's EVM-equivalent architecture scales your
              Ethereum apps without surprises.
              <br /> If it works on Ethereum, it works on OP Mainnet at a
              fraction of the cost.
            </h5>
            <div className="mt-5">
              <button className="btn btn-danger w-25 p-4">
                Explore the Ecosystem
              </button>
              <button className="btn btn-secondary ms-5 w-25 p-4">
                Learn more about OP mainnet
              </button>
            </div>
          </div>
        </div>

      <div className="container-fluid text-white text-center mt-5 container-cont1">
          <div className="row">
            <h1 className="conte-h1">Built for the public good.</h1>
            <h5 className="conte-h5 mt-5">
              OP Mainnet is more than just a blockchain. It's an experiment in
              sustainable ecosystem funding <br /> fueled by protocol revenue.
              Retroactive Public Goods Funding is simple: you build for the
              public <br /> good, you're eligible to receive a grant. Join us on
              Discord and help build the future of Ethereum,
              <br /> sustainably.
            </h5>
            <div>
              <button className="btn btn-primary mt-5 w-25 p-4">
                Join us on Discord
              </button>
            </div>
        </div>
      </div>
    </>
  );
}
