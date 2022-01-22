import React from 'react';
import './WorkBar.css';
import LogoEj from '../../Images/imglogoej.jpg'

function WorkBar() {
  return (
    <section className="workBarContainer">
        <main className='jobBarContainer'>
            <div className='workBarImgContainer'>
              <img src={LogoEj} alt="Logo Empresa" />
            </div>
            <div className='workMainInfoImgContainer'>
                <p>Kasisto</p>
                <p>Front-End Software Engineer</p>
                <button>Full time</button>
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
            </div>
        </main>
    </section>
  );
}

export default WorkBar;