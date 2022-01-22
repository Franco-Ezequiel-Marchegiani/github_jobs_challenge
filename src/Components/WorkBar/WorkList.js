import React from 'react';
import './WorkBar.css';
import WorkBar from './WorkBar'
import { Pagination } from 'react-bootstrap';
function WorkList() {
  return (
    <section className="workListContainer">
        <WorkBar/>
        <WorkBar/>
        <WorkBar/>
        <WorkBar/>
        <WorkBar/>
              <Pagination className='paginationContainer'>
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