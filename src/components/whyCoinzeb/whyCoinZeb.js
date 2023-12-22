import React from 'react';
import "./whyCoinZeb.css";
import landingPage from "../../components/datas/landingPage.json";


export default function WhyCoinZeb() {

    const reason = landingPage.reason;
    console.log(reason);

    
    return (
        <>
        <div className='container-fluid py-5 advanBg'>
        <div className='container text-white' id="action4">
            <div className='row'>
              <h1 className='fw-bold  text-center'>Why CoinZeb</h1>
            </div>
            <div className="row mt-3">
              {reason.map((reason) => (
                <div key={reason.id} className="col-lg-4 mb-3"  style={{ margin: "0 auto" }}>
                  <div className="">
                    <img
                      src={reason.icon}
                      className="card-img-top p-4"
                      alt={reason .name}
                      style={{ height: "150px", objectFit: "contain" }}
                    />
                    <div className="text-center">
                      <h5 className="fw-bold toolTitle">{reason.title}</h5>{" "}
                      <p className="toolsDesc px-5 pt-2">{reason.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
          
        </>
      )
}

