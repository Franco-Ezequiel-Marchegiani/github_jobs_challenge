import React from 'react';
import './WorkBar.css';
import { Pagination } from 'react-bootstrap';
function PaginationWork({postTotales, publicacionesPorPagina}) {
    console.log(postTotales.length);
    let active = 2;
    let pageNumbers = [];
    for (let number = 1; number <= Math.ceil(); number++) {
    pageNumbers.push(
        <Pagination.Item key={number} active={number === active}>
        {number}
        </Pagination.Item>,
    );
    }
  return (
        <div>
            <Pagination>{pageNumbers}</Pagination>
        </div>
  );
}

export default PaginationWork;