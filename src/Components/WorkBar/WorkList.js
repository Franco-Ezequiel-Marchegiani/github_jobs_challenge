import React, { useEffect, useState } from 'react';
import './WorkBar.css';
import WorkBar from './WorkBar'
import PaginationWork from './PaginationWork'
import { Pagination, Spinner } from 'react-bootstrap';
function WorkList(ejemplo, ejemplo2, ejemplo3) {
  const [work, setWork] = useState();
  const [paginaActual, setPaginaActual] = useState(1);
  const [publicacionesPorPagina, setPublicacionesPorPagina ] = useState(5);
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

  //Get Publicaciones Actuales
  const indexUltimoPost = paginaActual * publicacionesPorPagina;
  const indexPrimerPost = indexUltimoPost - publicacionesPorPagina;
  let postActual
  if(work !== undefined){
    postActual = work.slice(indexPrimerPost,indexUltimoPost);
  }


  //Cambiar página
  const paginacion = (numeroPagina) => setPaginaActual(numeroPagina)


/* 
{work === undefined ? "loadingContentHome" : "workListContainer"}
 */
  return{
    work,
    render:(  
        <section className="workListContainer">
            {work === undefined ? 
              <Spinner className="spinnerLoading" animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
              </Spinner> 
              :
              <div>
                  {postActual.map((individualWork, key)=>{
                      return <WorkBar key={individualWork.MatchedObjectId} a={individualWork.MatchedObjectDescriptor.ApplyURI[0]} finalizacionBusqueda={individualWork.MatchedObjectDescriptor.ApplicationCloseDate} nombreOrganizacion={individualWork.MatchedObjectDescriptor.OrganizationName} ubicacionPuesto={individualWork.MatchedObjectDescriptor.PositionLocationDisplay} tituloPuesto={individualWork.MatchedObjectDescriptor.PositionTitle} inicioFechaPublicacion={individualWork.MatchedObjectDescriptor.PublicationStartDate} duracionJornada={individualWork.MatchedObjectDescriptor.PositionSchedule[0].Name} remuneracionMax-min={individualWork.MatchedObjectDescriptor.PositionRemuneration} idPuestoTrabajo={individualWork.MatchedObjectId}/>  
                  })}
                  <div> 
                      <PaginationWork paginaActual={paginaActual} postTotales={work} publicacionesPorPagina={publicacionesPorPagina} paginacion={paginacion}/>
                  </div>
              </div>
            }
                
      </section>
  )};
}
export default WorkList;