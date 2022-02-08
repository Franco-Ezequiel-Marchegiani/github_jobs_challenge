import React from 'react';
import { Link } from 'react-router-dom';
import './SidebarDetailWork.css';
function SidebarDetailWork() {
  return (
    <aside className='sidebarWorkDetailContainer'>
        <Link className='goBackSidebarLink' to="/"><i className="fas fa-long-arrow-alt-left"></i>Back to search</Link>
        <div className='howToApplyTitleContainer'>
            <h3 className='howToApplyTitle'>How to Apply</h3>
            <p className='howToApplyParagraph'>Please email a copy of your resume and online portfolio to <Link className='linkTextSidebarWorkDetail' to="#">wes@kasisto.com</Link> & CC <Link className='linkTextSidebarWorkDetail' to="#">eric@kasisto.com</Link> </p>
        </div>
    </aside>
  );
}

export default SidebarDetailWork;