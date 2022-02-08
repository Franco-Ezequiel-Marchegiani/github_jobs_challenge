import React from 'react';
import SidebarDetailWork from '../SidebarDetailWork/SidebarDetailWork';
import './WorkDetailContent.css';

function WorkDetailContent() {
  return (
    <section className="workDetailContainer">
      <div className='infoHeader'>
          <h1>Front-End Software Engineer</h1>
          <button>Full time</button>
          <span>5 days ago</span>
      </div>
    </section>
  );
}

export default WorkDetailContent;