import React from 'react';
import './Sections.css';
// import New from '../Cards/New';

function Sections({chosenClothes}) {
  return (
    <div className='main-container'>
      <nav className='link-container'>
        <button className='link' onClick={() => chosenClothes('new')}>new</button>
        <button className='link' onClick={() => chosenClothes('basics')}>basics</button>
        <button className='link' onClick={() => chosenClothes('work')}>wear to work</button>
        <button className='link' onClick={() => chosenClothes('shoes')}>shoes</button>
        <button className='link' onClick={() => chosenClothes('out')}>going out</button>
      </nav>
    </div>
  );
};

export default Sections;