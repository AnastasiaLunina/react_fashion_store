import './Footer.css';
import github from '../../img/github.png';
import linkedin from '../../img/linkedin.png';
import React, { useState } from "react";
import Toggle from './Toggle';

function Footer() {
  const [active, setActive] = useState(false);

  const handleChangeActive = () => {
    setActive((previousStar) => {
      return !previousStar;
    });
  };

  return(
    <div className="footer-container">
        <div className="newsletter">
            <Toggle active={active} handleChangeActive={handleChangeActive} />
            <ul className='social-media-list'>
                <li className='social-media-list-item'>tiktok</li>
                <li className='social-media-list-item'>instagram</li>
                <li className='social-media-list-item'>facebook</li>
                <li className='social-media-list-item'>pinterest</li>
                <li className='social-media-list-item'>youtube</li>
            </ul>

        </div>
        <div className='bottom-wrapper'>
            <p className="newsletter-sign-made">Made with ❤️</p>
            <div className='contact-container'>
                {/* eslint-disable react/jsx-no-target-blank*/}
                <a href="https://github.com/AnastasiaLunina" target='_blank'><img src={github} alt="github" className="newsletter-sign-github" width='30px' height='30px'></img></a>
                <a href="https://www.linkedin.com/in/anastasia-lunina/" target='_blank'><img src={linkedin} alt="linkedin" className="newsletter-sign-linkedin" width='30px' height='30px'></img></a>
            </div>
            </div>
    </div>
  )
}

export default Footer;