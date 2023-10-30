
import {
    Button
  } from "reactstrap";
  import {
    usePagination,
    useTable,
  } from 'react-table';
  import React, {
    useEffect,
    useMemo,
    useState,
  } from 'react';
  import ReportsColumn  from './ReportsColumn';
export default function ReserveFundDetailsTableFooters()  {
    const columns = useMemo(()=> ReportsColumn,[])

  const [data, setData] = useState([]);

    const {
       
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
        state,
        gotoPage,
        pageCount,
        setPageSize
      
    } = useTable({
        columns,
        data
    },
    usePagination)
    
    const {pageIndex, pageSize} = state


  return (
    <div className="text-center" style={ { height: 50 } }  >
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
                  style={{width: '50px' ,height:'100%'}}
                  />
              </span>
              <select
              value={pageSize}
              onChange={(e) => setPageSize(Number(e.target.value))}>
                  {[10,25,50].map((pageSize)=> (
                      <option key={pageSize} value={pageSize}>Show {pageSize}</option>
                  ))}
              </select>
              <Button style={{background:'#254a9e', color:'white'}} position='absolute' size="sm" onClick={()=> gotoPage(0)} enabled={!canPreviousPage}>{'<<'}</Button>
              <Button style={{background:'#254a9e', color:'white'}} size="sm" onClick={()=> previousPage()} enabled={!canPreviousPage}>Previous</Button>
              <Button style={{background:'#254a9e', color:'white'}} size="sm" onClick={()=> nextPage()} enabled={!canNextPage}>Next</Button>
              <Button style={{background:'#254a9e', color:'white'}} size="sm" onClick={()=> gotoPage(pageCount-1)} enabled={!canNextPage}>{'>>'}</Button>
              {/* <button style={{background:'#254a9e', color:'white'}} size="sm" onClick={()=> gotoPage(0)} enabled={!canPreviousPage}>{'<<'}</button>
              <button style={{background:'#254a9e', color:'white'}} size="sm" onClick={()=> previousPage()} enabled={!canPreviousPage}>Previous</button>
              <button style={{background:'#254a9e', color:'white'}} size="sm" onClick={()=> nextPage()} enabled={!canNextPage}>Next</button>
              <button style={{background:'#254a9e', color:'white'}} size="sm" onClick={()=> gotoPage(pageCount-1)} enabled={!canNextPage}>{'>>'}</button> */}
          </div>
  )
}

