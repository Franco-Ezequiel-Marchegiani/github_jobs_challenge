import React, { useEffect, useState } from 'react';
import './WorkBar.css';
import LogoEj from '../../Images/imglogoej.jpg'
import { Link } from 'react-router-dom';

function WorkBar(props) {
  console.log(props.a);
  /* 
  ApplicationCloseDate      --- finalizacionBusqueda
  OrganizationName          --- nombreOrganizacion
  PositionLocationDisplay   --- ubicacionPuesto
  PositionTitle             --- tituloPuesto
  PublicationStartDate      --- inicioFechaPublicacion
  PositionSchedule          --- duracionJornada
  PositionRemuneration      --- remuneracionMax&min
   */

  return (
    <section className="workBarContainer">
        <Link className='test' to="/workDetail">
          <main className='jobBarContainer'>
                <div className='workBarImgContainer'>
                  <img src={LogoEj} alt="Logo Empresa" />
                </div>
                <div className='workMainInfoImgContainer'>
                    <p className='titleEmpresa'>{props.nombreOrganizacion}</p>
                    <p className='titlePuesto'>{props.tituloPuesto}</p>
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