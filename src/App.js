import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import './App.css';

import StoreBase from '../src/components/Shop/StoreBase';
import MainModal from '../src/components/Modal/MainModal';
import Contact from '../src/components/Contact/Contact';
import Home from '../src/components/Home/Home';
import Checkout from '../src/components/Checkout/Checkout';

function App() {
  return (
    <div>
      <div>
        <MainModal/>
        <Router>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/shop" element={<StoreBase/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/checkout" element={<Checkout/>}/>
          </Routes>
        </Router>
      </div>
    </div>    
  );
}

export default App;
