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
                <Pagination.First />
                <Pagination.Prev />
                <Pagination.Item>{1}</Pagination.Item>
                <Pagination.Ellipsis />

                <Pagination.Item>{10}</Pagination.Item>
                <Pagination.Item>{11}</Pagination.Item>
                <Pagination.Item active>{12}</Pagination.Item>
                <Pagination.Item>{13}</Pagination.Item>
                <Pagination.Item disabled>{14}</Pagination.Item>

                <Pagination.Ellipsis />
                <Pagination.Item>{20}</Pagination.Item>
                <Pagination.Next />
                <Pagination.Last />
              </Pagination>
    </section>
  );
}

export default WorkList;