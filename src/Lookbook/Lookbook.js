import { useState } from "react";
import { data } from "./data";
import './Lookbook.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'


function Lookbook() {
  const [person , setPerson] = useState(0);
  const { description, image} = data[person];

  const previousPerson = () => {
    setPerson((person => {
      person--;
      if (person < 0 ) {
        return data.length - 1;
      }
      return person;
    }))
  }

  const nextPerson = () => {
    setPerson((person => {
      person++;
      if (person > data.length - 1) {
        return person = 0;
      }
      return person;
    }))
  }

  return(
    <div>
      <div className="container">
        <h2 className="text">{description}</h2>
      </div>
      <div className="container-img">
        <img className='lookbook-img' src={image} alt="person"/>
      </div>

      <div className="container-btn">
        {/* <FontAwesomeIcon icon={faArrowRight} onClick={previousPerson} className="btn1"/>
        <FontAwesomeIcon icon={faArrowLeft} onClick={previousPerson} className="btn2"/> */}

        <button className="btn1" onClick={previousPerson}><FontAwesomeIcon icon={faArrowRight} className='arrow'/></button>
        <button className="btn2" onClick={nextPerson}><FontAwesomeIcon icon={faArrowLeft} className='arrow'/></button>
      </div>
    </div>
  )
}

export default Lookbook;