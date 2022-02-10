import React from 'react';
import './WorkBar.css';
import { Pagination } from 'react-bootstrap';
function PaginationWork({paginaActual, postTotales, publicacionesPorPagina, paginacion}) {
    let active = paginaActual;
    let pageNumbers = [];

    if(postTotales !== undefined){
        console.log(postTotales.length);
        
        for (let numero = 1; numero <= Math.ceil(postTotales.length / publicacionesPorPagina); numero++) {
        pageNumbers.push(
            <Pagination.Item onClick={() => paginacion(numero) } key={numero} active={numero === active}>
            {numero}
            </Pagination.Item>,
        );
        }
    }
    //Last steps:
    /* 
    - Add the Bootstrap link and script, and write the structure manualy
    -Then, keep working with the logic, adding an event and passing the result of the event to the father
    OPTIONA:
    -Write the structure to made the complete pagination
     */
  return (
        <div>
            <Pagination >{pageNumbers}</Pagination>
        </div>
  );
}

export default PaginationWork;