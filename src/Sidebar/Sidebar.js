import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Sidebar.css';

function Sidebar() {
  return (
    <Menu>
      <a className="bm-item" href="/">Home</a>
      <a className="bm-item" href="/new">New</a>
      <a className="bm-item" href="/basics">Basics</a>
      <a className="bm-item" href="/weartowork">Wear to Work</a>
      <a className="bm-item" href="/shoes">Shoes</a>
      <a className="bm-item" href="/goingout">Going Out</a>
        <a className="bm-item" href="/contactus">Contact us</a>
        <a className="bm-item" href="/goingout">facebook</a>
        <a className="bm-item" href="/goingout">instagram</a>
        <a className="bm-item" href="/goingout">twitter</a>
    </Menu>
  );
};

export default Sidebar;