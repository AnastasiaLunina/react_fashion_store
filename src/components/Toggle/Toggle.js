import React from "react";

import empty from '../../img/heartempty.png';
import heart from '../../img/heart.png';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import './Toggle.css';

AOS.init({
    duration: 1200,
  })


function Toggle({ active, handleChangeActive, garment }) {
  return (
    
      <div >
        {active ? (<div>
                        <button
                        className='btn btn-like'
                        onClick={() => handleChangeActive(garment.id)}>
                          <img src={heart} alt='heart' className='img-btn-small' />
                        </button>
                    </div>) 
                : 
                  (<button className='btn btn-like'
                       onClick={() => handleChangeActive(garment.id)} >
                        <img src={empty} alt='heart' className='img-btn-small'/>
                    </button>)}
      </div>
  );
}

export default Toggle;