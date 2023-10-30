import React, { useMemo, useEffect, useState } from 'react';

import {
  useFilters,
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from 'react-table';
import {
  Button,
  Table,
} from 'reactstrap';

import SEARCH_RESULT_COLUMNS from '../app-data/SerachResultColumn';
import ExportsButtons from './ExportsButtons';

const SearchResults = (props) => {
    const columns = useMemo(() => SEARCH_RESULT_COLUMNS, [])
    const[data , setData] =  useState([]);
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        state,
        setGlobalFilter,
        page,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
        gotoPage,
        pageCount,
        setPageSize,
    } = useTable({ columns, data }, useGlobalFilter, useFilters, useSortBy, usePagination)
    const { pageIndex, pageSize } = state
    const { globalFilter } = state
  
      
    useEffect(() =>{
     
       setData(props.Data);
    });

    console.info('props : '+JSON.stringify(props.Data))
    
    return (
        <div>
         
            <Table size='sm' striped={false} striped={true} style={{ marginTop: 20 }} {...getTableProps()}>
                <thead style={{ backgroundColor: '#254a9e', color: 'white', bordercolor: '#254a9e', fontSize: 14 }}>
                    {
                        headerGroups.map((headerGroup) => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {
                                    headerGroup.headers.map((column) => (
                                        <th {...column.getHeaderProps(column.getSortByToggleProps())}> {column.render('Header')}
                                            <span>
                                                {
                                                    column.isSorted ? (column.isSortedDesc ? ' ⬇️' : ' ⬆️') : ''
                                                }
                                            </span>
                                        </th>
                                    ))
                                }

                            </tr>
                        ))
                    }
                </thead>
                <tbody {...getTableBodyProps()}>
                    {
                        page.map((row) => {
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps()}>
                                    {
                                        row.cells.map((cell) => {
                                            return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                        })
                                    }

                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
            <div style={{textAlign:'center'}}>
                <span>
                    Page{' '}
                    <strong>
                        {pageIndex+1} of {pageOptions.length}
                    </strong>{' '}
                </span>
                <span>
                    | Go To Page:{' '}
                    <input type="number" defaultValue={pageIndex+1} onChange={(e)=>{
                        const pageNumber = e.target.value ? Number(e.target.value)-1:0
                        gotoPage(pageNumber)                        
                    }} 
                        style={{width:'50px', padding:'2',}}/>{' '}
                </span>
                <select value={pageSize} onChange={(e)=>setPageSize(Number(e.target.value))}>
                        {[10, 20, 50].map((pageSize)=>(
                        <option key={pageSize} value={pageSize}>
                                Show {pageSize}
                        </option>))}
                </select>
                <Button style={{backgroundColor:'#254a9e', color:'white'}} size="sm" onClick={()=>gotoPage(0)} disabled={!canPreviousPage}>{'<<'}</Button>{' '}
                <Button style={{backgroundColor:'#254a9e', color:'white'}} size="sm" onClick={()=>previousPage()} disabled={!canPreviousPage}>Previous</Button>{' '}
                <Button style={{backgroundColor:'#254a9e', color:'white'}} size="sm" onClick={()=>nextPage(pageCount-1)} disabled={!canNextPage}>Next</Button>{' '}
                <Button style={{backgroundColor:'#254a9e', color:'white'}} size="sm" onClick={()=>gotoPage(pageCount-1)} disabled={!canNextPage}>{'>>'}</Button>
            </div>
        </div>
        
        
)
}

export default SearchResults
