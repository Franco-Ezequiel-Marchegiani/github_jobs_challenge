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

       //Información extraer info Trabajo:
       /* 
       Parrafo 1:
          AgencyMarketingStatement         Información sobre la agencia

       Parrafo2:
       RequiredDocuments                Información importante
       Requirements                     Requisitos                 
       Education                        Educación
       Evaluations                      Evaluaciones
       
       Parrafo3: Es un array, iterarlo
       MajorDuties                      Obligaciones importantes

       Parrafo4:
       BenefitsUrl                      Link con beneficios del puesto
       AgencyContactEmail               mail de contacto
       AgencyContactPhone               Numero
       HowToApply                       Cómo aplicar
       ApplyOnlineUrl                   Link para aplicar de manera Online
       */
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
                                        <p></p>
                                </div>
                                <div className='infoWhatWeOffer'>
                                        <p>What we offer:</p>
                                        <p>You can see the benefits that we offer to you clicking <Link to={filtroPorId.MatchedObjectDescriptor.UserArea.Details.BenefitsUrl}>this link</Link> </p>
                                </div>
                                <div className='infoLocation'>
                                        <p>Location - {filtroPorId.MatchedObjectDescriptor.PositionLocationDisplay}</p>
                                        <p>We welcome your cover letter with a description of your previous complete experience and your resume. Applicants must be authorized to work in the US as we are unable to sponsor. Kasisto is an equal opportunity employer.</p>
                                </div>
                        </section>
                   </section>
                   }
                </section>
        );
}

export default WorkDetailContent;