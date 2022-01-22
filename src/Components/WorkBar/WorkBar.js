import React from 'react';
import './WorkBar.css';

function WorkBar() {
  return (
    <section className="workBarContainer">
        <main>
            <div className='workBarImgContainer'>
              <img src="" alt="" />
            </div>
            <div className='workMainInfoImgContainer'>
              <p>Kasisto</p>
              <p>Front-End Software Engineer</p>
              <button>Full time</button>
            </div>
            <div className='workBarDataJobContainer'>
              <div className='workBarCityContainer'>
                  <i className="fas fa-globe-europe"></i>
                  <p>New York</p>
              </div>
              <div className='workBarDaysContainer'>
                  <i className="far fa-clock"></i>
                  <p>5 days ago</p>
              </div>
            </div>
        </main>
    </section>
  );
}

export default WorkBar;