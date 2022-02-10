import React from 'react';
import './WorkBar.css';
import { Pagination } from 'react-bootstrap';
function PaginationWork({postTotales, publicacionesPorPagina}) {
    let active = 2;
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
  return (
        <div>
            <Pagination>{pageNumbers}</Pagination>
        </div>
  );
}

export default PaginationWork;