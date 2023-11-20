import { withStyles } from "@material-ui/core/styles";
import MuiTableCell from "@material-ui/core/TableCell";
import PreviousIcon from "@mui/icons-material/ArrowBackIos";
import NextIcon from "@mui/icons-material/ArrowForwardIos";
import GetAppOutlined from '@mui/icons-material/GetApp';
import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded";
import ArrowDownwardRoundedIcon from "@mui/icons-material/ArrowDownwardRounded";
import {
  Button, Paper,
  Table,
  TableBody, TableContainer,
  TableHead,
  TableRow
} from "@mui/material";
import React, { forwardRef, useImperativeHandle, useEffect, useMemo, useState } from "react";
import {
  useGlobalFilter,
  usePagination,
  useTable
} from "react-table";
// import { Underline } from "../Underline";
import { TableRowsLoader } from "./TableRowsloader";

/**
 * table for All cases in readonly mode.
 * once search table will appear.
 */
const CasesAllApiPaginaTableViewall = forwardRef(({ col, apiData = [], title, apiFuntion, loading }, ref) => {

  const columns = useMemo(() => col, []);

  const data = apiData;
  let totalPage = 0
  if (apiData != "") {
    totalPage = Math.ceil(data[0]?.totalCount / 10);
  }
  const [currentPage, setCurrentPage] = useState(0);

  const [columnName, setColumnName] = React.useState("case created date");
  const [sort, setSort] = React.useState("desc");


  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    headerGroups,
    page,
    state,
    setPageSize,
    prepareRow,
  } = useTable({
    columns,
    data,
  }, useGlobalFilter, usePagination);

  useEffect(() => {
    setPageSize(10);
  }, []);

  const TableCell = withStyles({
    root: {
      border: "1px solid rgb(213 218 222)",
      align: "center",
      padding: "10px 10px",
    },
  })(MuiTableCell);

  // Render the UI for your table
  const previousPage = () => {

    if (currentPage !== 0) {
      console.log("Page__=", currentPage - 1)

      apiFuntion(currentPage - 1, columnName, sort)
      setCurrentPage(currentPage - 1);

    }

  }
  const nextPage = () => {
    if (currentPage + 1 < totalPage) {

      console.log("Page__=n", currentPage + 1)
      apiFuntion(currentPage + 1, columnName, sort)
      setCurrentPage(currentPage + 1);
    }
  }

  const backSort = (e) => {
    setColumnName(e);

    if (sort === "asc") {
      setSort("desc");
    } else {
      setSort("asc");
    }
  }
  useEffect(() => {
    apiFuntion(currentPage, columnName, sort)
  }, [sort]);

  useImperativeHandle(ref, () => ({
    InitState() {
      setCurrentPage(0);
    }
  })

  )
  if (loading) {
    return (
      <>
        {title
          ? (
            <div>
              <h5> {title}</h5>
              {/* <Underline width="30px" className="my-2" /> */}
            </div>
          ) : ""}
        <TableRowsLoader rows={[1, 2]} cells={[1, 2, 3, 4, 5]} />
      </>
    )
  }
  return (
    <div>
      <div className="d-flex justify-content-between">
        {title ? <div>

          <h5> {title}</h5>

          {/* <Underline width="30px" className="my-2" /> */}
        </div> : <div></div>}

        <div className="d-flex">

          {/* <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} /> */}
          <div style={{ display: "flex" }}>
            <Button disabled style={{ textTransform: "none" }}>

              <GetAppOutlined size={30} color="green" />
              Export to Excel
            </Button>
          </div>
        </div>
      </div>

      <Paper
        elevation={0}
        sx={{
          marginTop: "1%",
          marginBottom: "1%",
          display: "flex"
        }}
      >
        <TableContainer>
          <Table {...getTableProps()}>
            <TableHead>
              {headerGroups.map((headerGroup) => (
                <TableRow {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <TableCell onClick={() => backSort(column.render("Header").toLowerCase())}
                      {...column.getHeaderProps()}
                      style={{
                        color: "rgb(26, 65, 152)",
                        fontWeight: "bold",
                        fontSize: "12px",
                        // fontFamily: 'Gilroy-Bold',
                        cursor: "pointer",
                        background: "#F5F6F9",
                      }}
                    >
                      {column.render("Header").toUpperCase()}
                      {(column.render("Header").toLowerCase() == columnName) ? (sort === "asc" ? <ArrowUpwardRoundedIcon /> : <ArrowDownwardRoundedIcon />) : ""}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableHead>
            <TableBody>
              {page.map((row) => {
                prepareRow(row);
                return (
                  <TableRow {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                      return (
                        <TableCell
                          {...cell.getCellProps()}
                          style={{
                            background: "white",
                            color: "black",
                          }}
                        >
                          {cell.render("Cell")}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>

          </Table>
          {totalPage !== 0 &&
            <div style={{
              paddingTop: "1px",
              float: "right",
              fontSize: "14px",
              fontStyle: "normal",
              color: "#ADB8BF",
              fontFamily: "Gilroy",
              lineHeight: "15px"
            }}>
              <span>
                <strong
                  style={{ color: "black", fontSize: 15, fontFamily: "Gilroy" }}
                >
                  {currentPage + 1} out of {totalPage}{" "}
                </strong>
              </span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <PreviousIcon
                style={{
                  color: currentPage === 0 ? "#ADB8BF" : "#FF5E00",

                  fontStyle: "normal",
                  cursor: 'pointer',
                  fontFamily: "Gilroy",
                  lineHeight: "15px"
                }}
                onClick={() => previousPage()} disabled={currentPage === 0 ? false : true}
              />


              <NextIcon
                style={{
                  color: currentPage + 1 < totalPage ? "#FF5E00" : "#ADB8BF",
                  fontStyle: "normal",
                  cursor: 'pointer',

                  fontFamily: "Gilroy",
                  lineHeight: "15px"

                }}
                onClick={() => nextPage()} disabled={currentPage + 1 < totalPage ? false : true}
              />

            </div>
          }
        </TableContainer>



      </Paper>
    </div>
  );
})

export { CasesAllApiPaginaTableViewall };
