import React from 'react';
import data from './data';

const Slides = ({id, image, slideIndex, index}) => {
    
    let position = "nextSlide";
    if(slideIndex === index){
        position = 'activeSlide'
    }
    if(slideIndex === index - 1 || (index === 0 && slideIndex === data.length - 1)){
        position = 'lastSlide'
    }
    return(
        <article className={position} key={id}>
            <img src={image} alt="clothes" className="lookbook-img" />
        </article>
        )
}



export default Slides;