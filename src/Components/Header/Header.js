import React from 'react';
import './Header.css';
import BackgroundImage from '../../Images/backgroundImg.png'
function Header() {
  return (
    <header className="headerContainer">
        <div className='searchHeaderContainer'>
            <input type="text" placeholder='Title, companies, expertise or benefits' className='inputSearchHeader'/>
            <button className='btn-searchHeader'>Search</button>
        </div>
    </header>
  );
}

export default Header;