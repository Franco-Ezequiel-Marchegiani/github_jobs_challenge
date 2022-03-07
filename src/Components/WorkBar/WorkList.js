import React, { useEffect, useState } from 'react';
import './WorkBar.css';
import WorkBar from './WorkBar'
import PaginationWork from './PaginationWork'
import { Spinner } from 'react-bootstrap';
function WorkList(userSearch, fullTime) {
  /* Lo único que queda por añadir ahora, es:
  Utilizar el estado "fullTime" para generar una condición y filtrar
  Es un tipo de dato booleano, si es false que NO filtre por full time, y si es true, que filtre por si un trabajo es o no full time
  El siguiente renglón muestra cómo acceder a los objetos cuyo full time es verdadero (es un string) */
  /* console.log(work[5].MatchedObjectDescriptor.PositionSchedule[0].Name);  */
  console.log(fullTime);
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
    console.log(work[0].MatchedObjectDescriptor.PositionTitle);
  }


  //Cambiar página
  const paginacion = (numeroPagina) => setPaginaActual(numeroPagina)


/* 
{work === undefined ? "loadingContentHome" : "workListContainer"}
 */
  console.log(userSearch);
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
                {userSearch === "" ?
                postActual.filter(valueSearchUser =>{
                  if(userSearch === ""){
                    return valueSearchUser
                  }else if(valueSearchUser.MatchedObjectDescriptor.PositionTitle.toLowerCase().includes(userSearch.toLowerCase())){
                    return valueSearchUser
                  }
                }).map((individualWork, key)=>{
                    return <WorkBar key={individualWork.MatchedObjectId} finalizacionBusqueda={individualWork.MatchedObjectDescriptor.ApplicationCloseDate} nombreOrganizacion={individualWork.MatchedObjectDescriptor.OrganizationName} ubicacionPuesto={individualWork.MatchedObjectDescriptor.PositionLocationDisplay} tituloPuesto={individualWork.MatchedObjectDescriptor.PositionTitle} inicioFechaPublicacion={individualWork.MatchedObjectDescriptor.PublicationStartDate} duracionJornada={individualWork.MatchedObjectDescriptor.PositionSchedule[0].Name} remuneracionMax-min={individualWork.MatchedObjectDescriptor.PositionRemuneration} idPuestoTrabajo={individualWork.MatchedObjectId}/>  
                  })
                :
                work.filter(valueSearchUser =>{
                  if(userSearch === ""){
                    return valueSearchUser
                  }else if(valueSearchUser.MatchedObjectDescriptor.PositionTitle.toLowerCase().includes(userSearch.toString().toLowerCase())){
                    return valueSearchUser
                  }
                }).map((individualWork, key)=>{
                    return <WorkBar key={individualWork.MatchedObjectId} finalizacionBusqueda={individualWork.MatchedObjectDescriptor.ApplicationCloseDate} nombreOrganizacion={individualWork.MatchedObjectDescriptor.OrganizationName} ubicacionPuesto={individualWork.MatchedObjectDescriptor.PositionLocationDisplay} tituloPuesto={individualWork.MatchedObjectDescriptor.PositionTitle} inicioFechaPublicacion={individualWork.MatchedObjectDescriptor.PublicationStartDate} duracionJornada={individualWork.MatchedObjectDescriptor.PositionSchedule[0].Name} remuneracionMax-min={individualWork.MatchedObjectDescriptor.PositionRemuneration} idPuestoTrabajo={individualWork.MatchedObjectId}/>  
                  })
                }
                  <div> 
                      <PaginationWork paginaActual={paginaActual} postTotales={work} publicacionesPorPagina={publicacionesPorPagina} paginacion={paginacion}/>
                  </div>
              </div>
            }
                
      </section>
  )};
}
export default WorkList;