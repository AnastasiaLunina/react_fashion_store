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
        <Nav/>
        <div className="bottom-wrapper">
          <a className="link" href="/shop">shop</a>
        </div>

      </div>
      <div className='sections-container'>
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
