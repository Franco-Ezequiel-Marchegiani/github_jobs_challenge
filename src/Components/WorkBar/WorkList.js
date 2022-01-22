import React from 'react';
import './WorkBar.css';
import WorkBar from './WorkBar'
function WorkList() {
  return (
    <section className="workListContainer">
      <WorkBar/>
      <WorkBar/>
      <WorkBar/>
      <WorkBar/>
      <WorkBar/>
    </section>
  );
}

export default WorkList;