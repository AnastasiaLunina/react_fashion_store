import React, { useState, useEffect, useContext } from "react";

import { data } from '../../data';
import { CartContext } from '../Context/Cart.context'

import './Store.scss';
import AOS from 'aos';
import "aos/dist/aos.css";

import Search from '../Search/Search';
// import Toggle from '../Toggle/Toggle';


function Clothes({ garment }) {
    // const {id, name, price, image, description, showMore} = garment;

    const [searchInput, setSearchInput] = useState('');
    const [filteredResults, setFilteredResults] = useState([]);
    // const [active, setActive] = useState(false);
    const [showText, setShowText] = useState(false);

    const { addItemToCart } = useContext(CartContext);

    useEffect(() => {
        AOS.init();
      }, []);

    const showTextOnClick = (element) => {
        element.showMore = !element.showMore
        setShowText(!showText)
      }

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
            const { id, name, price, image, description, showMore} = item;
            return(
                <div className='product-card' key={id} >
                    <img src={image} 
                         alt='clothes' 
                         width='400px' 
                         height='500px' 
                         data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="200" data-aos-offset="0"
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
                             data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="200" data-aos-offset="0"
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
                        <button className="add-to-cart-button"
                                onClick={() => addItemToCart(item)}>Add To Cart
                        </button>
                    </div>
                  )
                })
            )}
            
    </div>
  );
}

export default Clothes;
