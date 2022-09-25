import React from "react";
import like from '../img/like.png';
import "./Footer.css";

function Toggle({ active, handleChangeActive }) {
  return (
      <div className="toggle-wrapper">
        {active ? (<div>
                        <img
                        className="inactive"
                        src={like}
                        alt="heart"
                        onClick={() => handleChangeActive()}
                        />
                    </div>) 
                : 
                  (<h1 className="newsletter-sign"
                       onClick={() => handleChangeActive()}>Like us</h1>)}
      </div>
  );
}

export default Toggle;