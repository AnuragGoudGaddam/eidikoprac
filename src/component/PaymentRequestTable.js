import React, { useMemo, useEffect, useState } from "react";

import { PaymentColumns } from "../app-data/PaymentColumn";
import { Button, Table } from "reactstrap";
import axios from "axios";
import { properties } from "./properties";
import GlobalFilteringPaymentReq from "./GlobalFilteringPaymentReq";
import {
  usePagination,
  useTable,
  useFilters,
  useSortBy,
  useGlobalFilter,
} from "react-table";
export const PaymentRequestTable = (props) => {
  const columns = useMemo(() => PaymentColumns, []);

  const data = props.data;

  // const getListDocumnetsFromServer = () => {
  //   axios.get(properties.getPaymentData).then(
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

  // useEffect(() => {
  //   getListDocumnetsFromServer();
  // }, []);

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
    usePagination
  );

  const { pageIndex, pageSize } = state;
  const { globalFilter } = state;
  return (
    <>
      <div style={{ marginLeft: "83%", width: "18%", marginTop: "-4rem" }}>
        <GlobalFilteringPaymentReq
          filter={globalFilter}
          setFilter={setGlobalFilter}
          style={{ marginLeft: "10" }}
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
