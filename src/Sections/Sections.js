import React from 'react';
import './Sections.css';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";

function Sections() {
  return (
    <div>
    <Router>
      <nav className='link-container'>
        <Link to='/new' className='link'>new</Link>
        <Link to='/basics' className='link'>basics</Link>
        <Link to='/weartowork' className='link'>wear to work</Link>
        <Link to='/shoes' className='link'>shoes</Link>
        <Link to='/goingout' className='link'>going out</Link>
      </nav>
      <Routes>
        <Route path="/new" element='new'/>
        <Route path="/basics" element='basics'/>
        <Route path="/weartowork" element='weartowork'/>
        <Route path="/shoes" element='shoes'/>
        <Route path="/goingout" element='goingout'/>
      </Routes>
    </Router>
</div>
  );
};

export default Sections;