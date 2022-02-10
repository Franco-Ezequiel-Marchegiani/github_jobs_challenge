import React from 'react';
import './WorkBar.css';
import { Pagination } from 'react-bootstrap';
function PaginationWork({paginaActual, postTotales, publicacionesPorPagina}) {
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
     */
  return (
        <div>
            <Pagination>{pageNumbers}</Pagination>
            <ul className='pagination'>
                <li className='page-item'>1</li>
                <li className='page-item'>2</li>
                <li className='page-item'>3</li>
            </ul>
        </div>
  );
}

export default PaginationWork;