import React from 'react';
// import './Sections.css';
// import New from './Cards/New';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";

function RouteComponent({chosenClothes}) {
  return (
    <div className='main-container'>
    <Router>
      <nav className='link-container'>
        <Link to='/new' className='link' onClick={() => chosenClothes('new')}>new</Link>
        <Link to='/basics' className='link' onClick={() => chosenClothes('basics')}>basics</Link>
        <Link to='/weartowork' className='link' onClick={() => chosenClothes('work')}>wear to work</Link>
        <Link to='/shoes' className='link' onClick={() => chosenClothes('shoes')}>shoes</Link>
        <Link to='/goingout' className='link' onClick={() => chosenClothes('out')}>going out</Link>
      </nav>
      <Routes>
        {/* <Route path="/new" element={<New/>}/> */}
        <Route path="/basics" element='basics'/>
        <Route path="/weartowork" element='weartowork'/>
        <Route path="/shoes" element='shoes'/>
        <Route path="/goingout" element='goingout'/>
      </Routes>
    </Router>
</div>
  );
};

export default RouteComponent;