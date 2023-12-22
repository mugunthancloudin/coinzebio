import React from 'react';
import '../layout/getstart.css';
import twitter from '../layout/twitter.jpg';
import Medium from '../layout/medium.png';
import Telegram from '../layout/telegram.png';
import Discord from '../layout/discord.png';



export default function Getstart() {
  return (
    <div>
        <div className='container-fluid main-cont' id="action5">
            <div className='container'>
                <div className='row justify-content-around'>
                        <div className='col-lg-5 box1 mt-5'>
                         <div className='firdt-div'>
                            <h1>Get involved </h1>
                            <div className='sub-box mt-4'></div>
                          </div>
                          <div className='sec-div mt-5'>
                            <div>              
                             <img src={twitter}/>                 
                            <h6 className='mt-4'>Twitter</h6>
                            </div>
                            <div>
                            <img src={Medium}/>     
                            <h6 className='mt-4' >Medium</h6>
                            </div>
                            <div>
                            <img src={Telegram}/>     
                            <h6 className='mt-4'>Telegram</h6>
                            </div>
                            <div>
                            <img src={ Discord}/>     
                             <h6 className='mt-4'>Discord</h6>
                             </div>

                          </div>
                        </div>
                        <div className='col-lg-5 text-center'>
                            <div className='box2 mt-5'>
                                <h2>start trading on COINZEB</h2>
                                <button className='mt-5'> GET STARTED</button>
                            </div>
                        </div>

                </div>
            </div>
        </div>
      
    </div>
  )
}
