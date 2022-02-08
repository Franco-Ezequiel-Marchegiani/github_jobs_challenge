import React from 'react';
import SidebarDetailWork from '../SidebarDetailWork/SidebarDetailWork';
import WorkDetailContent from '../WorkDetailContent/WorkDetailContent';
import './WorkDetail.css';

function WorkDetail() {
  return (
    <section className="containreAll">
      <SidebarDetailWork/>
      <WorkDetailContent/>
    </section>
  );
}

export default WorkDetail;