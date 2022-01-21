import React from 'react';
import './Header.css';
import BackgroundImage from '../../Images/backgroundImg.png'
function Header() {
  return (
    <header className="headerContainer">
        <div>
            <input type="text" className='inputSearchHeader'/>
            <button className='btn-searchHeader'>Search</button>
        </div>
    </header>
  );
}

export default Header;