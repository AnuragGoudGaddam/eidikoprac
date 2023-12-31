// import Typography from '@mui/material/Typography';
import { withStyles } from "@material-ui/core/styles";
import MuiTableCell from "@material-ui/core/TableCell";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import GetAppOutlined from '@mui/icons-material/GetApp';
import CasesAllApiPaginaTableViewall from './CasesallpagesApi'
import {
  Box,
  Button, Paper,
  Table,
  TableBody, TableContainer,
  TableHead,
  TableRow,
  Tooltip,
} from "@mui/material";
import React, { useEffect, useMemo } from "react";
// import { Link } from "react-router-dom";
import {
  useGlobalFilter,
  usePagination,
  useTable
} from "react-table";
import { alignLabel, truncateText } from "./utils/utils/index";
// import { alignLabel, truncateText } from "src\component\Dashboard\UtilsIndex.js";
// import { Underline } from "../Underline";
// import { GlobalFilter } from "./Globalfilter"

/**
 * generic table with pagination.
 */
export function GenericTable({                       
  col: columns, apiData: data = [], title, viewAll, onChange = "",
  // isPagination = false,                                                            
  isGlobalSearch = true, isExportExcel = false, stickyHeader, onClick,
  action, renderStatus, isPageSize, pointerColumn
}) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    headerGroups,
    page,
    state,
    setGlobalFilter,
    setPageSize,
    prepareRow,
  } = useTable({
    columns,
    data,
  }, useGlobalFilter, usePagination);

//  console.log("entering table",columns,data, title, viewAll, onChange = "",
//  // isPagination = false,                                                            
//  isGlobalSearch = true, isExportExcel = false, stickyHeader, onClick,
//  action, renderStatus, isPageSize, pointerColumn );

  useEffect(() => {
    if (isPageSize) {
      setPageSize(10);
    } else {
      setPageSize(data.length);
    }
  }, []);

  const { globalFilter } = state

  const TableCell = withStyles({
    root: {
      border: "1px solid rgb(213 218 222)",
      align: "center",
      padding: "10px 10px",
      background: "white"
    },
  })(MuiTableCell);

  const renderTableBodyCell = (cell, row) => {
    if (cell.column.Header === "") {
      return action(cell, row);
    }
    if ((cell.column.Header === "STATUSES" || cell.column.Header === "EXPIRED") && renderStatus) {
      return renderStatus(cell.value)
    }
    if (cell.value) {
      if (typeof cell.value === "string") {
        if (cell.value.length > 150) {
          return (
            <Tooltip title={cell.value} className="pointer message-details" PopperProps={{ disablePortal: true }}>
              <Box component="span">
                {truncateText(cell.value, 150)}
              </Box>
            </Tooltip>
          )
        }
      }
      return cell.render("Cell")
    }
    return "N/A"
  }

  // Render the UI for your table
  return (
    <div>
      <Paper
        elevation={0}
        sx={{
          marginTop: "2px",
          marginBottom: "0px",
          display: "flex"
        }}
      >
        <TableContainer sx={{ maxHeight: stickyHeader ? 440 : '' }}>
          <Table {...getTableProps()}>
            <TableHead>
              {headerGroups.map((headerGroup, index) => (
                <TableRow {...headerGroup.getHeaderGroupProps()} key={index}>
                  {headerGroup.headers.map((column) => (
                    <TableCell
                      key={column.Header || column.id}
                      {...column.getHeaderProps()}
                      style={{
                        color: "rgb(26, 65, 152)",
                        fontWeight: "bold",
                        fontSize: "12px",
                        // fontFamily: 'Gilroy-Bold',
                        // whiteSpace:'nowrap',
                        background: "#F5F6F9",
                      }}
                      align={alignLabel(column.Header)}
                    >
                      {column.render("Header").toUpperCase()}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableHead>
            <TableBody>
              {console.log('row:', page)}
              {page.map((row, i) => {
                prepareRow(row);
                return (
                  <TableRow {...row.getRowProps()}>
                    {row.cells.map((cell, i) => {
                      return (
                        <TableCell
                          key={cell.column.Header}
                          {...cell.getCellProps()}
                          style={
                            { color: cell.column.Header === pointerColumn && cell.value ? "#F7971C" : "#000" }
                          }
                          className={cell.column.Header === pointerColumn && cell.value ? "pointer" : ""}
                          align={alignLabel(cell.column.Header)}
                          onClick={() => cell.column.Header === pointerColumn && cell.value ? onClick(cell) : ""}
                        >
                          {renderTableBodyCell(cell, row)}
                          {console.log('tabledata',renderTableBodyCell)}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
}
