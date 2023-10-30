import React, {
    useEffect,
    useMemo,
    useState,
  } from 'react';
  
  
  import {
    usePagination,
    useTable,
  } from 'react-table';
  import {
    Button,
    Table,
  } from 'reactstrap';
  
  import ReportsColumn  from './ReportsColumn';
  
  export const ReportsTable = (prop) => {
  
      const columns = useMemo(()=> ReportsColumn,[])
    
      const[data , setData] =  useState([]);
   
     
      useEffect(()=>{
          setData(prop.dataArray);
          console.info('state data[] : '+JSON.stringify(data));
        });
       
  
      const {
          getTableProps,
          getTableBodyProps,
          headerGroups,
          page,
          nextPage,
          previousPage,
          canNextPage,
          canPreviousPage,
          pageOptions,
          state,
          gotoPage,
          pageCount,
          setPageSize,
          prepareRow
      } = useTable({
          columns,
          data
      },
      usePagination)
  
      const {pageIndex, pageSize} = state
      
      return (
          <>
          {console.info('from child component[] : '+JSON.stringify(prop.dataArray))}
          <Table size='sm' striped={true} style={{marginTop: 3}} {...getTableProps()}>
              <thead style={{background:'#254a9e', color:'white'}}>
                  {headerGroups.map((headerGroup) =>
                  <tr {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup.headers.map((column) => (
                      <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                      
                      ))}
                      </tr>
                  )}               
              
              </thead>
              <tbody {...getTableBodyProps()}>
                  
                  {page.map((row)=> {
                      prepareRow(row)
                      return (
                      <tr {...row.getRowProps()}>
                          {row.cells.map((cell) => {
                              return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  })}
                  </tr>
                  )
              })}
              </tbody>
      
          </Table>
          <div className="text-center">
          <span>
              page{' '}
              <strong>
                  {pageIndex + 1} of {pageOptions.length}
              </strong>{' '}
              </span>
              <span>
                   Go to page:{' '}
                  <input
                  type='number'
                  defaultValue={pageIndex + 1}
                  onChange={(e) => {
                      const pageNumber = e.target.value ? Number(e.target.value)-1 : 0
                      gotoPage(pageNumber)
                  }}
                  style={{width: '50px'}}
                  />
              </span>
              <select
              value={pageSize}
              onChange={(e) => setPageSize(Number(e.target.value))}>
                  {[10,25,50].map((pageSize)=> (
                      <option key={pageSize} value={pageSize}>Show {pageSize}</option>
                  ))}
              </select>
              <Button style={{background:'#254a9e', color:'white'}} size="sm" onClick={()=> gotoPage(0)} disabled={!canPreviousPage}>{'<<'}</Button>
              <Button style={{background:'#254a9e', color:'white'}} size="sm" onClick={()=> previousPage()} disabled={!canPreviousPage}>Previous</Button>
              <Button style={{background:'#254a9e', color:'white'}} size="sm" onClick={()=> nextPage()} disabled={!canNextPage}>Next</Button>
              <Button style={{background:'#254a9e', color:'white'}} size="sm" onClick={()=> gotoPage(pageCount-1)} disabled={!canNextPage}>{'>>'}</Button>
          </div>
          
          </>
      )
  }
  