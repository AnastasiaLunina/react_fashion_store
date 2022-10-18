// import React, { useState } from "react";

import './Store.scss';

function Buttons({chosenClothes, resetClothes}) {
  // const [isActive, setIsActive] = useState(false);
  // const className = `${isActive ? ' change bn3637 bn36 active' : 'change bn3637 bn36'}`

  // const handleClick = () => {
  //   // 👇️ toggle isActive state on click
  //   setIsActive(current => !current);
  // };

  return (
    <div className='cont'>
        <button className='change bn3637 bn36' onClick={resetClothes}>all</button>
        <button className='change bn3637 bn36' onClick={() => {chosenClothes('basics')}}>basics</button>
        <button className='change bn3637 bn36' onClick={() => chosenClothes('going out')}>going out</button>
        <button className='change bn3637 bn36' onClick={() => {chosenClothes('new')}}>new</button>
        <button className='change bn3637 bn36' onClick={() => chosenClothes('wear to work')}>wear to work</button>
        <button className='change bn3637 bn36' onClick={() => chosenClothes('sport')}>sport</button>
    </div>
  );
}

export default Buttons;
