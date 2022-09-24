import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Sections from '../Sections/Sections';
import Lookbook from '../Lookbook/Lookbook';
import Footer from '../Footer/Footer';
// import Cards from '../Cards/Cards';
import RouteComponent from '../RouteComponent';
// import New from '../Cards/Cards';
import Nav from './Nav';



import './Home.css';
import logo from '../img/logo.png';
import cart from '../img/shopping-bag.png';

function Home() {
  return (
    <div>
      <div className="home" id="outer-container">
        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
        {/* <div id="page-wrap">
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
        </div> */}
        <Nav/>
        <div className="bottom-wrapper">
          <a className="link" href="/shop">shop</a>
        </div>

      </div>
      <div className='sections-container'>
        {/* <Cards /> */}
      </div>
      <div>
        <Lookbook/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default Home;
