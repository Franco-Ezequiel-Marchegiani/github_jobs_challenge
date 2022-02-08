import React, { useEffect, useState } from 'react';
import './WorkBar.css';
import WorkBar from './WorkBar'
import { Pagination, Spinner } from 'react-bootstrap';
function WorkList() {
  const [work, setWork] = useState()
  console.log(work);
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
  return (
    <section className="workListContainer">
        {work === undefined ? 
        <Spinner className="spinnerLoading" animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner> 
        :
        <div>
          {work.map((individualWork, key)=>{
          return <WorkBar key={individualWork + key} finalizacionBusqueda={individualWork.MatchedObjectDescriptor.ApplicationCloseDate} nombreOrganizacion={individualWork.MatchedObjectDescriptor.OrganizationName} ubicacionPuesto={individualWork.MatchedObjectDescriptor.PositionLocationDisplay} tituloPuesto={individualWork.MatchedObjectDescriptor.PositionTitle} inicioFechaPublicacion={individualWork.MatchedObjectDescriptor.PublicationStartDate}/>  
          })}
        </div>
        }
              <Pagination className={work === undefined ? "paginationContainer hiddenPagination" : "paginationContainer"}>
                <Pagination.Prev />
                <Pagination.Item>{1}</Pagination.Item>
                <Pagination.Item active>{2}</Pagination.Item>
                <Pagination.Item>{3}</Pagination.Item>
                <Pagination.Ellipsis />
                <Pagination.Item>{10}</Pagination.Item>
                <Pagination.Next />
              </Pagination>
    </section>
  );
}
export default WorkList;