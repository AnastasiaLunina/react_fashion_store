import React from 'react';
import Sidebar from './Sidebar/Sidebar';
import './App.css';
import logo from './img/logo.png'
import Sections from './Sections/Sections';
import Lookbook from './Lookbook/Lookbook';


function App() {
  return (
    <div>
      <div className="App" id="outer-container">
        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
        <div id="page-wrap">
          <a className="logo" href="/"><img src={logo} alt='logo' height='160px'/></a>
        </div>
        <div className="login-container">
        </div>
      </div>
      <div className='sections-container'>
        <Sections />
      </div>
      <div>
        <Lookbook/>
      </div>

    </div>
  );
}

export default App;
