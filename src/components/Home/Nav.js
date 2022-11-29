import React, { useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import './Home.css';
import logo from '../../img/logo.png';
import cart from '../../img/shopping-bag.png';
import Tilty from 'react-tilty';

import CartDropdown from '../CartDropdown/CartDropdown';
// import Dashboard from '../Dashboard/Dashboard';

import { CartContext } from '../Context/Cart.context';
import Login from '../Login/Login';
import Logout from '../Logout/Logout';
import { useAuth0 } from "@auth0/auth0-react";

function Nav() {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  const { isLoading } = useAuth0();
  if (isLoading) {
    return <h1>Loading....</h1>
  }

  return (
    <div className="shop-cards-wrapper">
      <div className="shop-cards" id="outer-container">
        <div id="page-wrap">
        <Tilty style={{ transformStyle: 'preserve-3d', height: 160, width: 200 }} className='Tilt br2 shadow-2 logo'>
          <a className="logo" href="/"><img src={logo} className="logo-img" alt='logo' height='160px'/></a>
        </Tilty>

        </div>
        <div className='right-side-container'>
          <div className="shopping-cart-container">
            <div className="cart cart-btn" onClick={toggleIsCartOpen}>
                <img src={cart} alt='cart' className="cart"/>
                <span className="item-count">{cartCount}</span>
            </div>
          </div>

          {/* <form>
            <label>
              <input type="search" 
                    name="name" 
                    className="input-search" 
                    placeholder="search..."/>
            </label>
          </form> */}

          <div className="shopping-cart-container">
            <div className="login">
              <Login/>
              <Logout/>
            </div>
          </div>
        </div>
      </div>
      <Link to='/checkout'>
        {isCartOpen && <CartDropdown />}
      </Link>
      <Outlet />
    </div>
  );
}

export default Nav;
