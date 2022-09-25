import React from 'react';
import Home from './Home/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import StoreBase from './Shop/StoreBase';
import MainModal from '../src/Modal/MainModal';
import Contact from '../src/Contact/Contact';

function App() {
  return (
    <div>
      <div>
        <MainModal/>
        <Router>
          <nav className='link-container'>
          </nav>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/shop" element={<StoreBase/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Routes>
        </Router>
      </div>
    </div>    
  );
}

export default App;
