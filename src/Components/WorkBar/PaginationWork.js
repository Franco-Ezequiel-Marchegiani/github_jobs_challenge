import React from 'react';
import './WorkBar.css';
import { Pagination } from 'react-bootstrap';
function PaginationWork({paginaActual, postTotales, publicacionesPorPagina, paginacion}) {
    let active = paginaActual;
    let pageNumbers = [];

    if(postTotales !== undefined){
        console.log(postTotales.length);
        
        for (let number = 1; number <= Math.ceil(postTotales.length / publicacionesPorPagina); number++) {
        pageNumbers.push(
            <Pagination.Item key={number} active={number === active}>
            {number}
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
            <Pagination onClick={(numero) => paginacion(numero) }>{pageNumbers}</Pagination>
        </div>
  );
}

export default PaginationWork;