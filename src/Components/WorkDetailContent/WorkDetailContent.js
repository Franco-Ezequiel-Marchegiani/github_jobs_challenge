import React, { useState, useEffect } from 'react';
import './WorkDetailContent.css';
import LogoEj from '../../Images/imglogoej.jpg'
import { Link, useParams } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
function WorkDetailContent(props) {
     const [work, setWork] = useState();
     const { id } = useParams()

     let url = process.env.REACT_APP_API;
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
        .then(data => setWork(data.SearchResult.SearchResultItems));
      },[])
      console.log(work);
     console.log(id);

     let filtroPorId
     if(work !== undefined){
        filtroPorId = work.find( individualWork => individualWork.MatchedObjectId === id)
        console.log(filtroPorId.MatchedObjectDescriptor.PositionTitle);
     }
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
       /* Ahora solo queda pasar toda la información del objeto de la variable "filtroPorId"
       Y pasarlo a la vista */

       //Date ago
       let diasTranscurridos
       if(work !== undefined){
            let fechaPublicacion = new Date(filtroPorId.MatchedObjectDescriptor.PublicationStartDate);
            console.log(fechaPublicacion);
            let fechaActual = new Date();
            let miliSegundosDia = 24 * 60 * 60 * 1000;
            let miliSegundosTranscurridos = Math.abs(fechaPublicacion.getTime() - fechaActual.getTime());
            diasTranscurridos = Math.round(miliSegundosTranscurridos/miliSegundosDia);
       }
        //Test xd 
        return (
              <section className="workDetailContainer">
                      {/* Hay un error al colocar el spiner */}
                {work === undefined ? 
                   <Spinner className="spinnerLoadingWorkDetail" animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                   </Spinner>  
                   :
                   <section>
                        <div className='infoHeader'>
                                <h1>{filtroPorId.MatchedObjectDescriptor.PositionTitle}</h1>
                                <button>{filtroPorId.MatchedObjectDescriptor.PositionSchedule[0].Name}</button>
                                <span><i className="far fa-clock"></i>{diasTranscurridos} days ago</span>
                        </div>
                        <div className='infoEmpresaWorkDetail'>
                                <img src={LogoEj} alt="" />
                                <h2>{filtroPorId.MatchedObjectDescriptor.OrganizationName}</h2>
                                <span><i className="fas fa-globe-americas"></i>{filtroPorId.MatchedObjectDescriptor.PositionLocationDisplay}</span>
                        </div>
                        <section className='textContainerWorkDetail'>
                                <div className='infoDigitalExperiences'>
                                        <p>Humanizing Digital Experiences®</p>
                                        <p>{filtroPorId.MatchedObjectDescriptor.UserArea.Details.AgencyMarketingStatement}</p>
                                </div>
                                <div className='infoPosition'>
                                        <p>This position</p>
                                        <p>{filtroPorId.MatchedObjectDescriptor.UserArea.Details.RequiredDocuments}</p>
                                        <p>{filtroPorId.MatchedObjectDescriptor.UserArea.Details.Requirements}</p>
                                        <p>{filtroPorId.MatchedObjectDescriptor.UserArea.Details.Education}</p>
                                        <p>{filtroPorId.MatchedObjectDescriptor.UserArea.Details.Evaluations}</p>
                                </div>
                                <div className='infoWhatWillBeDoing'>
                                        <p>What you'll be doing</p>
                                        <p>{filtroPorId.MatchedObjectDescriptor.UserArea.Details.MajorDuties} </p>
                                </div>
                                <div className='infoWhatWeOffer'>
                                        <p>What we offer:</p>
                                        <p>You can see the benefits that we offer to you clicking <Link to={filtroPorId.MatchedObjectDescriptor.UserArea.Details.BenefitsUrl}>this link</Link> </p>
                                        <p>{filtroPorId.MatchedObjectDescriptor.UserArea.Details.HowToApply}</p>
                                        {filtroPorId.MatchedObjectDescriptor.UserArea.Details.ApplyOnlineUrl !== undefined ? 
                                        <p><Link to={filtroPorId.MatchedObjectDescriptor.UserArea.Details.ApplyOnlineUrl}>Click here to apply</Link></p>
                                        :
                                        ""} 
                                </div>
                                <div className='infoLocation'>
                                        <p>Location - {filtroPorId.MatchedObjectDescriptor.PositionLocationDisplay}</p>
                                        <p>You can see the benefits <Link to={filtroPorId.MatchedObjectDescriptor.UserArea.Details.BenefitsUrl}>clicking here</Link></p>
                                        <p>{filtroPorId.MatchedObjectDescriptor.UserArea.Details.HowToApply}</p>
                                        <p>If you want to apply online, yo can do it right <Link to={filtroPorId.MatchedObjectDescriptor.UserArea.Details.ApplyOnlineUrl === undefined ? "" : filtroPorId.MatchedObjectDescriptor.UserArea.Details.ApplyOnlineUrl}>here</Link></p>
                                        <p>The mail of the Agency is: {filtroPorId.MatchedObjectDescriptor.UserArea.Details.AgencyContactEmail}</p>
                                        <p>The telephone of the Agency is: {filtroPorId.MatchedObjectDescriptor.UserArea.Details.AgencyContactPhone}</p>
                                </div>
                        </section>
                   </section>
                   }
                </section>
        );
}

export default WorkDetailContent;