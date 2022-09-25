import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Lookbook from '../Lookbook/Lookbook';
import Footer from '../Footer/Footer';
import Nav from './Nav';
import './Home.css';

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
