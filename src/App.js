import React from 'react';
import Sidebar from './Sidebar/Sidebar';
import Sections from './Sections/Sections';
import Lookbook from './Lookbook/Lookbook';
import Footer from './Footer/Footer';
// import Cards from './Cards/Cards';
import RouteComponent from './RouteComponent';
// import New from './Cards/Cards';
import Home from './Home/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import logo from './img/logo.png';
import cart from './img/shopping-bag.png';
import StoreBase from './Shop/StoreBase';
import MainModal from '../src/Modal/MainModal';

function App() {
  return (
    <div>
      <div>
        <MainModal/>
        <Router>
          <nav className='link-container'>
            {/* <Link to='/' className='link'>home</Link> */}
            {/* <Link to='/shop' className='link'>shop</Link> */}
          </nav>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/shop" element={<StoreBase/>}/>
          </Routes>
        </Router>
      </div>
    </div>    
  );
}

export default App;
