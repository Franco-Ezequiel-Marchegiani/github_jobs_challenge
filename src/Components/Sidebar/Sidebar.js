import React from 'react';
import './Sidebar.css';

function Sidebar({fullTime, setFullTime, setUserSearch}) {
  return (
    <section className="sideBarContainer">
        <div className='checkBoxFullTimeContainer'>
          <input onClick={ () => setFullTime(!fullTime)} className='checkBoxFullTime' type="checkbox"/>
          <label htmlFor="" className='labelSidebar'><span>Full Time</span></label>
        </div>
        <div className='searchLocationContainer'>
            <label htmlFor="">Location</label>
            <i className="fas fa-globe-americas"></i>
            <input onChange={(event)=> setUserSearch(event.target.value)} placeholder='City, state, zip code or country' className='searchLocation' type="text"/>
            <div className='radioContainer'>
               <input type="radio" id="london" value="london" name="city"/>
               <label htmlFor="london">London</label>
            </div>
            <div className='radioContainer'>
               <input type="radio" id="amsterdam" value="amsterdam" name="city"/>
               <label htmlFor="amsterdam">Amsterdam</label>
            </div>
            <div className='radioContainer'>
               <input type="radio" id="newYork" value="newYork" name="city"/>
               <label htmlFor="newYork">New York</label>
            </div>
            <div className='radioContainer'>
               <input type="radio" id="berlin" value="berlin" name="city"/>
               <label htmlFor="berlin">Berlin</label>
            </div>
        </div>
    </section>
  );
}

export default Sidebar;