import React from 'react';
import SidebarDetailWork from '../SidebarDetailWork/SidebarDetailWork';
import WorkDetailContent from '../WorkDetailContent/WorkDetailContent';
import './WorkDetail.css';

function WorkDetail() {
  return (
    <section className="workDetailContainer">
      <SidebarDetailWork/>
      <WorkDetailContent/>
    </section>
  );
}

export default WorkDetail;