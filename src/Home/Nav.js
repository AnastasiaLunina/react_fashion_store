import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Sections from '../Sections/Sections';
import Lookbook from '../Lookbook/Lookbook';
import Footer from '../Footer/Footer';
// import Cards from '../Cards/Cards';
import RouteComponent from '../RouteComponent';
// import New from '../Cards/Cards';


import './Home.css';
import logo from '../img/logo.png';
import cart from '../img/shopping-bag.png';

function Nav() {
  return (
    <div>
      <div className="shop-cards" id="outer-container">
        <div id="page-wrap">
          <a className="logo" href="/"><img src={logo} alt='logo' height='160px'/></a>
        </div>
        <div className="shopping-cart-container">
          <a href="cart"><img src={cart} alt='cart' className="cart"/></a>
        </div>

        <form>
          <label>
            <input type="search" name="name" className="input-search" placeholder="search..."/>
          </label>
        </form>

        <div className="shopping-cart-container">
          <h2 className="login">Log in</h2>
        </div>
      </div>
    </div>
  );
}

export default Nav;
