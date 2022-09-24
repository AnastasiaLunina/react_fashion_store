import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Sidebar.css';
// import New from '../Cards/New';

function Sidebar() {
  return (
    <Menu>
      <a className="bm-item" href="/">Home</a>
      <a className="bm-item" href="/shop">Shop</a>
      <a className="bm-item" href="/contact">Contact us</a>
    </Menu>
  );
};

export default Sidebar;