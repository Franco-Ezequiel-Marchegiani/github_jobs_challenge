import React from 'react';
import SidebarDetailWork from '../SidebarDetailWork/SidebarDetailWork';
import WorkDetailContent from '../WorkDetailContent/WorkDetailContent';
import './WorkDetail.css';

function WorkDetail() {
  return (
    <section className="containreAll">
        <h1 className='gitHubTitle'>Github <span>Jobs</span></h1>
        <main className='containetMain'>
          <SidebarDetailWork/>
          <WorkDetailContent/>
        </main>
    </section>
  );
}

export default WorkDetail;