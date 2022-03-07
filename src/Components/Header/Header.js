import React from 'react';
import './Header.css';
import BackgroundImage from '../../Images/backgroundImg.png'
function Header({setUserSearch}) {
  return (
    <header className="headerContainer">
        <div className='searchHeaderContainer'>
            <i className="fas fa-briefcase"></i>
            <input onChange={(event)=> setUserSearch(event.target.value)} type="text" placeholder='Title, companies, expertise or benefits' className='inputSearchHeader'/>
            <button className='btn-searchHeader'>Search</button>
        </div>
    </header>
  );
}

export default Header;