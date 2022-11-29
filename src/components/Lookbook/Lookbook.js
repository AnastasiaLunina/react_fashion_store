import { useState, useEffect } from "react";
import data from "./data";
import './Lookbook.css';
import Slides from './Slides';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

function Lookbook() {
  // eslint-disable-next-line
  const [slides , setSlides] = useState(data);
  const [index , setIndex] = useState(0);

  useEffect(() => {
    const lastElement = data.length - 1;
    if (index < 0) {
      setIndex(lastElement);
    } 
    if (index > lastElement) {
      setIndex(0);
    }
  }, [index, slides])

  useEffect(() => {
    const slider = setInterval(() => {
      setIndex(index + 1);      
    }, 3000);
    return () => clearInterval(slider);
  }, [index]);

  return(
    <div>
      <div className="container">
      </div>
      <div className="container-img">
        {slides.map((slide, slideIndex) => {

          return (
            <Slides key={slide.id} {...slide} slideIndex={slideIndex} index={index} />
          )
        })}
      </div>

      <div className="container-btn">
        <button className="btn1" onClick={() => setIndex(index - 1)}><FontAwesomeIcon icon={faArrowRight} className='arrow'/></button>
        <button className="btn2" onClick={() => setIndex(index + 1)}><FontAwesomeIcon icon={faArrowLeft} className='arrow'/></button>
      </div>
    </div>
  )
}

export default Lookbook;