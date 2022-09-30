import React, { useState, useEffect } from "react";

import { data } from '../data';
import Search from '../Search/Search';

import './Store.css';
import AOS from 'aos';
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

    const [searchInput, setSearchInput] = useState('');
    const [filteredResults, setFilteredResults] = useState([]);

    const searchItems = (searchValue) => {
        setSearchInput(searchValue)
        if (searchInput !== '') {
            const filteredData = data.filter((item) => {
                return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
            })
            setFilteredResults(filteredData)
        }
        else{
            setFilteredResults(data)
        }
}

  return (
    <div className='products'>
        <Search onChangeHandler={(e) => searchItems(e.target.value)} />

        
        {searchInput.length > 1 ? (
                    filteredResults?.map((item) => {
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
                         data-aos-offset="0"
                         className="card-img"/>
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
              })
            )
            : (garment?.map((item) => {
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
                             data-aos-offset="0"
                             className="card-img"/>
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
                })
            )}
    </div>
  );
}

export default Clothes;
