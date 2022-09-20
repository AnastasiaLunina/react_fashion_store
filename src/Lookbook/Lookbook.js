import { useState } from "react";
import { data } from "./data";
import './Lookbook.css'

function Lookbook() {
  const [person , setPerson] = useState(0);
  const { id, name, description, age, image} = data[person];

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
        <button className="btn1" onClick={previousPerson}>Previous</button>
        <button className="btn2" onClick={nextPerson}>Next</button>
      </div>
    </div>
  )
}

export default Lookbook;