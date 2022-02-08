import React from 'react';
import SidebarDetailWork from '../SidebarDetailWork/SidebarDetailWork';
import './WorkDetailContent.css';
import LogoEj from '../../Images/imglogoej.jpg'
function WorkDetailContent() {
  return (
        <section className="workDetailContainer">
                <div className='infoHeader'>
                    <h1>Front-End Software Engineer</h1>
                    <button>Full time</button>
                    <span>5 days ago</span>
                </div>
                <div>
                    <img src={LogoEj} alt="" />
                    <p>Kasisto</p>
                    <span>New York</span>
                </div>
        </section>
  );
}

export default WorkDetailContent;