import { useContext } from 'react';
import {
  Link
} from "react-router-dom";

import './Checkout.css';
import Sidebar from '../Sidebar/Sidebar';
import MainModal from '../Modal/MainModal';

import Nav from '../Home/Nav';
import { CartContext } from '../Context/Cart.context';

const Checkout = () => {
  const { cartItems, addItemToCart, removeItemFromCart, clearItemFromCart, cartTotal } = useContext(CartContext);

    return (
      <div>
        <Sidebar />
        <Nav />
        <MainModal/>

        <div className="back-to-shopping-container">
          <Link to='/shop' className="back-to-shopping">
            {/* <button className="back-to-shop-btn">Back To Shopping</button> */}
            {/* <img src={arrow} alt="arrow-back" className="arrow-back" /> */}
            <h2 className="back-to-shopping">Back To Shopping</h2>
          </Link>
        </div>
        <div className="checkout-container">
          {
            cartItems.map((cartItem) => {
              const { id, name, quantity, image, price } = cartItem;
              const subtotal = (quantity * price).toFixed(2);
              return(
                <div key={id} className="checkout-item">
                  <div>
                    <img src={image} alt={name} className="cart-image"/>
                  </div>
                  <div className="checkout-item-details">
                    <span className='checkout-name'>{name}</span>
                    <div>
                      <span onClick={() => removeItemFromCart(cartItem)} className="adjust-quantity-minus">&minus;</span>
                      <span className="checkout-quantity">{quantity}</span>
                      <span onClick={() => addItemToCart(cartItem)} className="adjust-quantity-plus">&#x2B;</span>
                    </div>
                    <span>{subtotal} USD</span>
                    <button 
                        className='checkout-delete-button'
                        onClick={() => clearItemFromCart(cartItem)}>
                        DELETE
                    </button>
                  </div>
                </div>
              ) 
            })
          }
        </div>
        <hr className='divider'/>
        <div className='total-container'>
          {/* <button className='total-promo-unlock total' 
                  onClick={unlockPromo}>
                  Unlock your promo
          </button>
          <h3 className='total-promo-title total'>Do you have a promo code?</h3>
          <input placeholder='Paste promo here' 
                 className='total-promo-input total'
                 value={input}
                 onChange={(event)=>change(event.target.value)}></input> */}
          <h3 className='total-field-title total'>TOTAL</h3>
          <span className='total-field total'>{cartTotal} USD</span>
        </div>
      </div>
    );
};

export default Checkout;