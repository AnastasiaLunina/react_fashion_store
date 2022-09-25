import { useState } from "react";
import './Store.css';
import AOS from 'aos';
import React, { useEffect } from "react";
import "aos/dist/aos.css";

function Clothes({garment}) {
    useEffect(() => {
        AOS.init();
      }, []);
    const [showText, setShowText] = useState(false);

    const showTextOnClick = (element) => {
        element.showMore = !element.showMore
        setShowText(!showText)
      }

  return (
    <div className='products'>
        {garment?.map((item) => {
            const {id, name, price, image, description, showMore} = item;
            return(
                <div className='product-card' key={id} >
                    <img src={image} 
                         alt='clothes' 
                         width='400px' 
                         height='500px' 
                         data-aos="fade-zoom-in"
                         data-aos-easing="ease-in-back"
                         data-aos-delay="200"
                         data-aos-offset="0"/>
                    <div className='product-info'>
                        <div className='product-description'>
                            <p>{name}</p>
                            <p>${price}</p>
                        </div>
                        <p className='description'>{showMore ? description : description.substring(0, 170) + "...."}
                            <button className='show-more-btn' onClick={() => showTextOnClick(item)} > {showMore ? 'Show less' : 'Show more'}</button>
                        </p>
                    </div>
                </div>
            )
        })}
    </div>
  );
}

export default Clothes;
