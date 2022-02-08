import React, { useEffect } from 'react';
import './WorkBar.css';
import LogoEj from '../../Images/imglogoej.jpg'
import { Link } from 'react-router-dom';

function WorkBar() {

  let url = "https://data.usajobs.gov/api/search?JobCategoryCode=2210"
  let userAgent = process.env.REACT_APP_API_USERAGENT;  
  let authKey = process.env.REACT_APP_AUTHKEY;
  let header = {
    method: 'GET',      
    headers: {          
        "Host": "localhost:3000",          
        "User-Agent": userAgent,          
        "Authorization-Key": authKey      
    }  
  }
   useEffect(()=>{
    fetch(url,header)
    .then(response => response.json())
    .then(data => console.log(data));
  },[]) 
  return (
    <section className="workBarContainer">
        <Link className='test' to="/workDetail">
          <main className='jobBarContainer'>
                <div className='workBarImgContainer'>
                  <img src={LogoEj} alt="Logo Empresa" />
                </div>
                <div className='workMainInfoImgContainer'>
                    <p className='titleEmpresa'>Kasisto</p>
                    <p className='titlePuesto'>Front-End Software Engineer</p>
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
        </Link>
    </section>
  );
}

export default WorkBar;