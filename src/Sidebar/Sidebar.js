import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Sidebar.css';
import {
  // BrowserRouter as Router,
  Link
} from "react-router-dom";

function Sidebar() {
  return (
    <Menu>
      <Link to='/' className="bm-item">Home</Link>
      <Link to='/shop' className="bm-item">Shop</Link>
      <Link to='/contact' className="bm-item">Contact us</Link>
    </Menu>
  );
};

export default Sidebar;