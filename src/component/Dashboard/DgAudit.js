import {
    Paper,
    Table,
    TableBody,
    TableContainer,
    TableHead,
    TableRow,
  } from "@material-ui/core";
  import { green, orange, red } from "@material-ui/core/colors";
  // import Typography from '@mui/material/Typography';
  import { withStyles } from "@material-ui/core/styles";
  import MuiTableCell from "@material-ui/core/TableCell";
  import { Cancel, CheckCircle, Error } from "@mui/icons-material";
  import React, { useMemo, useState } from "react";
  import { Underline } from "../Underline";
  import { DGAuditPopUp } from "./DGAuditPopUp";
  import { Alert } from "@mui/material";
  
  let DGAuditTable = ({ col, apiData, title }) => {
    const showAlert = apiData?.length != 0 ? false : true
    let AuditTableColumns = [
      // { Header: 'alert id', accessor: 'alertId' },
      { Header: "refresh timestamp", accessor: "refreshTimestamp" },
      { Header: "comments", accessor: "comments" },
      { Header: "triggered By", accessor: "triggeredBy" },
      { Header: "flexcube", accessor: "flexStatus" },
      { Header: "account summary", accessor: "accountSummaryStatus" },
      // { Header: "sas", accessor: "sasStatus" },
      { Header: "edms", accessor: "edmsStatus" },
      { Header: "firco", accessor: "fircoStatus" },
      { Header: "prime", accessor: "primeStatus" },
    ];
  
    //receive column & api data here
    const columns = useMemo(() => AuditTableColumns, []);
    const data = useMemo(() => apiData, [apiData]);
  
    const TableCell = withStyles({
      root: {
        border: "1px solid rgb(213 218 222)",
        align: "center",
        padding: "8px 10px",
      },
    })(MuiTableCell);
  
    const [openPopUp, togglepopup] = React.useState(false);
  
    const [selectedRecord, setSelectedRecord] = useState();
    const [system, setSystem] = useState();
    // Render the UI for your table
    /**
     * OnClick it will open Alerted Transactions.
     */
    return (
      <div style={{ paddingTop: "1%", overflowX: "auto" }}>
        {
          openPopUp && (
            <DGAuditPopUp
              row={selectedRecord}
              column={system}
              onClose={() => {
                togglepopup(false);
                window.location.reload(false);
              }}
            />
          )
          // <AlertPopUp
          //   data=[selectedRecord]
          //   onClose={() => {
          //     togglepopup(false);
          //     window.location.reload(false);
          //   }}
          // />
        }
        <div className="d-flex justify-content-between">
          <div>
            {/* <Typography variant="h6" component="h2" style={{ marginLeft: '1%' ,backgroundColor:'#EBEDF4'}}> */}
            <h5> {title}</h5>
            {/* </Typography> */}
            <Underline width="25%" className="my-2" />
          </div>
        </div>
  
        <Paper
          elevation={0}
          sx={{
            width: "100%",
            overflowX: "auto",
            marginBottom: "0%",
            display: "flex",
          }}
        >
          {showAlert ? (
            <Alert severity="warning" variant="outlined">
              Audit Information Not Found.
            </Alert>
          ) : (
            ""
          )}
  
          <TableContainer sx={{ height: "auto", width: "100%", display: "flex" }}>
            <Table>
              {apiData?.length != 0 && (
                <TableHead>
                  <TableRow>
                    {columns.map((column, i) => (
                      <TableCell
                        key={i}
                        style={{
                          color: "rgb(26, 65, 152)",
                          fontWeight: "bold",
                          fontSize: "12px",
                          textAlign: "center",
                          // fontFamily: 'Gilroy-Bold',
                          background: "#F5F6F9",
                        }}
                      >
                        {column["Header"].toUpperCase()}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
              )}
              <TableBody>
                {data.map((row, i) => (
                  <TableRow key={row.auditId}>
                    <TableCell
                      style={{
                        background: "white",
                        color: "black",
                      }}
                    >
                      {row.refreshTimestamp}
                    </TableCell>
  
                    <TableCell
                      style={{
                        background: "white",
                        color: "black",
                        textAlign: "center",
                      }}
                    >
                      {row.comments}
                    </TableCell>
                    <TableCell
                      style={{
                        background: "white",
                        color: "black",
                        textAlign: "center",
                      }}
                    >
                      {row.triggeredBy}
                    </TableCell>
  
                    <TableCell
                      style={{
                        background: "white",
                        color: "black",
                        textAlign: "center",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        if (!row.flexStatus == null || !row.flexStatus == "") {
                          var columnName = columns[3].Header;
                          setSystem(columnName);
                          togglepopup(!openPopUp);
                          setSelectedRecord({
                            auditId: row.auditId,
                            dataId: row.dataId,
                            system: columnName,
                            status: row.flexStatus,
                          });
                        }
                      }}
                    >
                      {/* {row.flexStatus} */}
                      {getIcon(row.flexStatus)}
                    </TableCell>
  
                    <TableCell
                      style={{
                        background: "white",
                        color: "black",
                        textAlign: "center",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        if (
                          !row.accSummaryStatus == null ||
                          !row.accSummaryStatus == ""
                        ) {
                          var columnName = columns[4].Header;
                          setSystem(columnName);
                          togglepopup(!openPopUp);
                          setSelectedRecord({
                            auditId: row.auditId,
                            dataId: row.dataId,
                            system: columnName,
                            status: row.accSummaryStatus,
                          });
                        }
                      }}
                    >
                      {/* {row.accountSummaryStatus} */}
                      {getIcon(row.accSummaryStatus)}
                    </TableCell>
  
                    {/* <TableCell
                      style={{
                        background: "white",
                        color: "black",
                        textAlign: "center",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        if (!row.sasStatus == null || !row.sasStatus == "") {
                          var columnName = columns[5].Header;
                          setSystem(columnName);
                          togglepopup(!openPopUp);
                          setSelectedRecord({
                            auditId: row.auditId,
                            dataId: row.dataId,
                            system: columnName,
                            status: row.sasStatus,
                          });
                        }
                      }}
                    >
                      {getIcon(row.sasStatus)}
                    </TableCell> */}
                    <TableCell
                      style={{
                        background: "white",
                        color: "black",
                        textAlign: "center",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        if (!row.edmsStatus == null || !row.edmsStatus == "") {
                          var columnName = columns[5].Header;
                          setSystem(columnName);
                          togglepopup(!openPopUp);
                          setSelectedRecord({
                            auditId: row.auditId,
                            dataId: row.dataId,
                            system: columnName,
                            status: row.edmsStatus,
                          });
                        }
                      }}
                    >
                      {/* {row.edmsStatus} */}
                      {getIcon(row.edmsStatus)}
                    </TableCell>
                    <TableCell
                      style={{
                        background: "white",
                        color: "black",
                        textAlign: "center",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        if (!row.fircoStatus == null || !row.fircoStatus == "") {
                          var columnName = columns[6].Header;
                          setSystem(columnName);
                          togglepopup(!openPopUp);
                          setSelectedRecord({
                            auditId: row.auditId,
                            dataId: row.dataId,
                            system: columnName,
                            status: row.fircoStatus,
                          });
                        }
                      }}
                    >
                      {/* {row.fircoStatus} */}
                      {getIcon(row.fircoStatus)}
                    </TableCell>
                    <TableCell
                      style={{
                        background: "white",
                        color: "black",
                        textAlign: "center",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        if (!row.primeStatus == null || !row.primeStatus == "") {
                          var columnName = columns[7].Header;
                          setSystem(columnName);
                          togglepopup(!openPopUp);
                          setSelectedRecord({
                            auditId: row.auditId,
                            dataId: row.dataId,
                            system: columnName,
                            status: row.primeStatus,
                          });
                        }
                      }}
                    >
                      {/* {row.primeStatus} */}
                      {getIcon(row.primeStatus)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <div
            style={{
              float: "right",
              padding: "3px 10px 0px 5px",
              margin: "5px",
              textTransform: "lowercase",
            }}
          ></div>
          {/* <TablePagination            
                      rowsPerPageOptions={[5, 10, 25]}
                      rowsPerPage={rowsPerPage}
                      component="div"
                      count={rows.length}
                      SelectProps={{
                          inputProps: {
                              "aria-label": "rows per page",
                          },
                          native: true,
                      }}
                      page={page}
                      onPageChange={handleChangePage}
                      onRowsPerPageChange={handleChangeRowsPerPage}
                     
                  /> */}
        </Paper>
      </div>
    );
  };
  
  //get the icon based on status
  export function getIcon(status) {
    if (status == "IN_PROGRESS") {
      return <Error style={{ color: orange[500] }} />;
    } else if (status == "COMPLETED") {
      return <CheckCircle style={{ color: green[500] }} />;
    } else if (status == "FAILED") {
      return <Cancel style={{ color: red[500] }} />;
    } else {
      return null;
    }
  }
  
  export { DGAuditTable };
  