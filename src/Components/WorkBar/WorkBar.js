import React, { useEffect, useState } from 'react';
import './WorkBar.css';
import LogoEj from '../../Images/imglogoej.jpg'
import { Link } from 'react-router-dom';

function WorkBar(props) {
  /* 
  ApplicationCloseDate      --- finalizacionBusqueda
  OrganizationName          --- nombreOrganizacion
  PositionLocationDisplay   --- ubicacionPuesto
  PositionTitle             --- tituloPuesto
  PublicationStartDate      --- inicioFechaPublicacion
  PositionSchedule          --- duracionJornada
  PositionRemuneration      --- remuneracionMax-min
  MatchedObjectId           --- idPuestoTrabajo
   */
  let fechaPublicacion = new Date(props.inicioFechaPublicacion);
  let fechaActual = new Date();

  let miliSegundosDia = 24 * 60 * 60 * 1000;

  let miliSegundosTranscurridos = Math.abs(fechaPublicacion.getTime() - fechaActual.getTime());

  let diasTranscurridos = Math.round(miliSegundosTranscurridos/miliSegundosDia);

  /* Set the link to Work Detail */
  let linkDetailBase = "/workDetail/"
  let linkCompleto = linkDetailBase + props.idPuestoTrabajo
  return (
    <section className="workBarContainer">
        <Link className='test' to={linkCompleto}>
          <main className='jobBarContainer'>
                <div className='workBarImgContainer'>
                  <img src={LogoEj} alt="Logo Empresa" />
                </div>
                <div className='workMainInfoImgContainer'>
                    <p className='titleEmpresa'>{props.nombreOrganizacion}</p>
                    <p className='titlePuesto'>{props.tituloPuesto}</p>
                    <button>{props.duracionJornada}</button>
                      <div className='workBarDataJobContainer'>
                        <div className='workBarCityContainer'>
                            <i className="fas fa-globe-europe"></i>
                            <p>{props.ubicacionPuesto}</p>
                        </div>
                        <div className='workBarDaysContainer'>
                            <i className="far fa-clock"></i>
                            <p>{diasTranscurridos} days ago</p>
                        </div>
                      </div>
                </div>
          </main>
        </Link>
    </section>
  );
}

export default WorkBar;