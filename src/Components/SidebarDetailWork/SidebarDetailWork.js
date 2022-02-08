import React from 'react';
import { Link } from 'react-router-dom';
import './SidebarDetailWork.css';
function SidebarDetailWork() {
  return (
    <aside>
        <Link className='goBackSidebarLink' to="/">Back to search</Link>
        <div>
            <h3>How to Apply</h3>
            <p>Please email a copy of your resume and online portfolio to <Link to="#">wes@kasisto.com</Link> & CC <Link to="#">eric@kasisto.com</Link> </p>
        </div>
    </aside>
  );
}

export default SidebarDetailWork;