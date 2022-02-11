import React from 'react';
import './WorkBar.css';
import { Pagination } from 'react-bootstrap';
function PaginationWork({paginaActual, postTotales, publicacionesPorPagina, paginacion}) {
    let active = paginaActual;
    let pageNumbers = [];
    if(postTotales !== undefined){
        for (let numero = 1; numero <= Math.ceil(postTotales.length / publicacionesPorPagina); numero++) {
        pageNumbers.push(numero);
        }
    }
  return (
        <div>
            <Pagination className={postTotales === undefined ? "paginationContainer hiddenPagination" : "paginationContainer"}>
                {paginaActual === 1 ? <Pagination.First disabled /> : <Pagination.First onClick={() => paginacion(1)}/> }
                {paginaActual === 1 ? <Pagination.Prev disabled /> : <Pagination.Prev onClick={() => paginacion( paginaActual - 1)}/> }
                    {/* {paginaActual === 1 ? "" : <Pagination.Ellipsis />} */}
                    {pageNumbers.map(numero =>{
                        return <Pagination.Item onClick={() => paginacion(numero) } key={numero} active={numero === active}>
                                    {numero}
                                </Pagination.Item>
                    })}
                {paginaActual === 5 ? <Pagination.Next disabled /> : <Pagination.Next onClick={() => paginacion( paginaActual + 1)} /> }
                {paginaActual === 5 ? <Pagination.Last disabled /> : <Pagination.Last onClick={() => paginacion(Math.ceil(postTotales.length / publicacionesPorPagina))}/> }
                
            </Pagination>
        </div>
  );
}

export default PaginationWork;