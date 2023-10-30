import React, { useMemo, useEffect, useState } from "react";
import {
  usePagination,
  useTable,
  useFilters,
  useGlobalFilter,
  useSortBy,
} from "react-table";
import { CompletedRequestColumn } from "./CompletedRequestColumn";
import { Button, Table } from "reactstrap";
import GlobalFilteringCompReq from "./GlobalFilteringCompReq";

export const CompletedRequestTable = (prop) => {
  const columns = useMemo(() => CompletedRequestColumn, []);

  const [data, setData] = useState([]);

  // const getListDocumnetsFromServer = () => {
  //   axios.get(properties.getCompletedRequests).then(
  //     (response) => {
  //       console.log("loading....");
  //       setData(response.data);
  //       console.log(response.data);
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );
  // };

  useEffect(() => {
    setData(prop.dataArray);
    console.info("state data[][][] : " + JSON.stringify(data));
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
    setGlobalFilter,
    prepareRow,
  } = useTable(
    { columns, data },
    useGlobalFilter,
    useFilters,
    useSortBy,
    usePagination,
    usePagination
  );

  const { pageIndex, pageSize } = state;
  const { globalFilter } = state;
  return (
    <>
      <div
        style={{
          marginLeft: "83%",
          // alignSelf: "self-end",

          marginTop: "-7.5rem",
          marginBottom: "4rem",
          width: "15%",
        }}>
        <GlobalFilteringCompReq
          filter={globalFilter}
          setFilter={setGlobalFilter}
        />
      </div>
      <Table
        size='sm'
        striped={true}
        style={{ marginTop: "1rem" }}
        {...getTableProps()}>
        <thead
          style={{
            background: "#254a9e",
            color: "white",
            fontSize: 14,
            fontWeight: "bold",
          }}>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody style={{ fontSize: 14 }} {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td style={{ fontSize: 14 }} {...cell.getCellProps()}>
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </Table>
      <div className='text-center'>
        <span>
          page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span>
        <span>
          Go to page:{" "}
          <input
            type='number'
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const pageNumber = e.target.value
                ? Number(e.target.value) - 1
                : 0;
              gotoPage(pageNumber);
            }}
            style={{ width: "50px" }}
          />
        </span>
        <select
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}>
          {[10, 25, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
        <Button
          style={{ background: "#254a9e", color: "white" }}
          size='sm'
          onClick={() => gotoPage(0)}
          disabled={!canPreviousPage}>
          {"<<"}
        </Button>
        <Button
          style={{ background: "#254a9e", color: "white" }}
          size='sm'
          onClick={() => previousPage()}
          disabled={!canPreviousPage}>
          Previous
        </Button>
        <Button
          style={{ background: "#254a9e", color: "white" }}
          size='sm'
          onClick={() => nextPage()}
          disabled={!canNextPage}>
          Next
        </Button>
        <Button
          style={{ background: "#254a9e", color: "white" }}
          size='sm'
          onClick={() => gotoPage(pageCount - 1)}
          disabled={!canNextPage}>
          {">>"}
        </Button>
      </div>
    </>
  );
};
