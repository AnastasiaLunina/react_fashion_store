import {
  Link
} from "react-router-dom";

import './Checkout.css';
import Sidebar from '../Sidebar/Sidebar';
import Nav from '../Home/Nav';

import arrow from '../../img/left-arrow.png';

const Cart = () => {
    return (
      <div>
        <Sidebar />
        <Nav />
        <img src='' alt='' />
        <div className="item-details">
        <Link to='/shop'>
          {/* <button className="back-to-shop-btn">Back To Shopping</button> */}
          <img src={arrow} alt="arrow-back" className="arrow-back" />
        </Link>
          <h1>UNDER CONSTRUCTION</h1>
          <span className="name"></span>
          <span className="price"></span>
        </div>
      </div>
    );
};

export default Cart;