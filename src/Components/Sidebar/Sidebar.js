import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <section className="sideBarContainer">
        <div className='checkBoxFullTimeContainer'>
          <input className='checkBoxFullTime' type="checkbox"/>
          <label htmlFor="">Full Time</label>
        </div>
        <div className='searchLocationContainer'>
            <label htmlFor="">Location</label>
            <i className="fas fa-globe-americas"></i>
            <input placeholder='City, state, zip code or country' className='searchLocation' type="text"/>
            <div className='radioContainer'>
               <input type="radio" id="london" value="london" name="city"/>
               <label for="london" htmlFor="">London</label>
            </div>
            <div className='radioContainer'>
               <input type="radio" id="amsterdam" value="amsterdam" name="city"/>
               <label for="amsterdam" htmlFor="">Amsterdam</label>
            </div>
            <div className='radioContainer'>
               <input type="radio" id="newYork" value="newYork" name="city"/>
               <label for="newYork" htmlFor="">New York</label>
            </div>
            <div className='radioContainer'>
               <input type="radio" id="berlin" value="berlin" name="city"/>
               <label for="berlin" htmlFor="">Berlin</label>
            </div>
        </div>
    </section>
  );
}

export default Sidebar;