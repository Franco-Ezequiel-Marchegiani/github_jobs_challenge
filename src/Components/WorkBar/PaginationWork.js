import React from 'react';
import './WorkBar.css';
import { Pagination } from 'react-bootstrap';
function PaginationWork() {
    let active = 2;
    let pageNumbers = [];
    for (let number = 1; number <= 5; number++) {
        pageNumbers.push(
        <Pagination.Item key={number} active={number === active}>
        {number}
        </Pagination.Item>,
    );
    }
  return (
        <div>
            <Pagination>{items}</Pagination>
        </div>
  );
}

export default PaginationWork;