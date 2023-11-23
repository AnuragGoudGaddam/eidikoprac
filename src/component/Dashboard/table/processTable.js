import {
  Paper,
  Card,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { Box, CardContent, Dialog, DialogContent, Grid, Modal, Skeleton, TablePagination, TextField, Typography } from "@mui/material";
// import { CustomSnakbar } from "component/Snackbar/CustomSnakbar";

// import Typography from '@mui/material/Typography';
import { withStyles } from "@material-ui/core/styles";
import MuiTableCell from "@material-ui/core/TableCell";
import { Button } from "@mui/material";
//   import { Underline } from "component/Underline";
import React, { useMemo, useState } from "react";
// import { Alert } from "reactstrap";
// import AlertPopUp from "../../pages/CaseDetails/AlertPopUp";
// import Underline from "../Underline";
//   import EditNotificationsRounded from "@mui/icons-material/ModeEditRounded";
//   import DeleteRounded from "@mui/icons-material/DeleteRounded";
//   import { DeleteDialog } from "component/DeleteDialog/DeleteDialog";
//   import moment from "moment";
//   import { SubHeader } from "component";
// import {  getAllProcesses, updateProcess } from "services/AdminBoardApi";
import { useEffect } from "react";
import PropTypes from 'prop-types';
import TablePaginationActions from "@mui/material/TablePagination/TablePaginationActions";
import { Cases_column } from "./Cases_column";

/**
 * Alets table having Alerted transactions.
 * @param {*} param0
 * @returns
 */
function ProcessTable({ col, apiData, title }) {

  const openCasesData = [{ "httpCode": 200, "httpMessage": "Valid Token", "caseRefNo": "EEC-014337704-1000026011", "instanceId": "20116", "alertedEntityNumber": "BS_014337704", "createdDateTime": "21-May-2023 03:14:51", "caseStatus": null, "cifId": "014337704", "dataId": "4388", "taskAssignedToUser": "NaveenCha", "alertId": "", "primaryEntityName": "TOFIK NURA KEDIR", "ageing": "49", "sasCaseId": null, "createdUserId": "SYSTEM", "previousStep": null, "alertCreationDate": "19-May-2023", "currentStep": "L1", "taskSubject": "InvestigatorL1", "taskId": "594586", "dataTaskIdName": null, "dataTaskIdValue": null, "dataTaskDetails": { "name": "4388", "value": "594586" }, "sasAlertId": null, "count": "10", "getHighCRS": null, "l1User": null, "l2User": null, "mlro": null, "crsLoadDate": null, "isCrsAvailable": null, "crsValue": null }, { "httpCode": 200, "httpMessage": "success", "caseRefNo": "EEC-014337704-1000026023", "instanceId": "20120", "alertedEntityNumber": "BS_014337704", "createdDateTime": "21-May-2023 03:16:03", "caseStatus": null, "cifId": "014337704", "dataId": "4388", "taskAssignedToUser": "NaveenCha", "alertId": "", "primaryEntityName": "TOFIK NURA KEDIR", "ageing": "49", "sasCaseId": null, "createdUserId": "SYSTEM", "previousStep": null, "alertCreationDate": "19-May-2023", "currentStep": "L1", "taskSubject": "InvestigatorL1", "taskId": "594596", "dataTaskIdName": null, "dataTaskIdValue": null, "dataTaskDetails": { "name": "4388", "value": "594596" }, "sasAlertId": null, "count": "10", "getHighCRS": null, "l1User": null, "l2User": null, "mlro": null, "crsLoadDate": null, "isCrsAvailable": null, "crsValue": null }, { "httpCode": 200, "httpMessage": "success", "caseRefNo": "EEC-014323975-1000025798", "instanceId": "19884", "alertedEntityNumber": "BS_014323975", "createdDateTime": "19-May-2023 10:39:35", "caseStatus": null, "cifId": "014323975", "dataId": "4311", "taskAssignedToUser": "NaveenCha", "alertId": "", "primaryEntityName": "RUKN ALHASIB AL THAHBI TR L L C SOL", "ageing": "51", "sasCaseId": null, "createdUserId": "SYSTEM", "previousStep": null, "alertCreationDate": "17-May-2023", "currentStep": "L1", "taskSubject": "InvestigatorL1", "taskId": "586039", "dataTaskIdName": null, "dataTaskIdValue": null, "dataTaskDetails": { "name": "4311", "value": "586039" }, "sasAlertId": null, "count": "10", "getHighCRS": null, "l1User": null, "l2User": null, "mlro": null, "crsLoadDate": null, "isCrsAvailable": null, "crsValue": null }, { "httpCode": 200, "httpMessage": "success", "caseRefNo": "EEC-014323975-1000025810", "instanceId": "19904", "alertedEntityNumber": "BS_014323975", "createdDateTime": "19-May-2023 10:39:47", "caseStatus": null, "cifId": "014323975", "dataId": "4311", "taskAssignedToUser": "NaveenCha", "alertId": "", "primaryEntityName": "RUKN ALHASIB AL THAHBI TR L L C SOL", "ageing": "51", "sasCaseId": null, "createdUserId": "SYSTEM", "previousStep": null, "alertCreationDate": "17-May-2023", "currentStep": "L1", "taskSubject": "InvestigatorL1", "taskId": "585990", "dataTaskIdName": null, "dataTaskIdValue": null, "dataTaskDetails": { "name": "4311", "value": "585990" }, "sasAlertId": null, "count": "10", "getHighCRS": null, "l1User": null, "l2User": null, "mlro": null, "crsLoadDate": null, "isCrsAvailable": null, "crsValue": null }, { "httpCode": 200, "httpMessage": "success", "caseRefNo": "EEC-014317465-1000026268", "instanceId": "20350", "alertedEntityNumber": "BS_010597457", "createdDateTime": "24-May-2023 14:50:18", "caseStatus": null, "cifId": "014317465", "dataId": "4861", "taskAssignedToUser": "NaveenCha", "alertId": "", "primaryEntityName": "RAHIMO HAIDERALI SACOOR", "ageing": "117", "sasCaseId": null, "createdUserId": "SYSTEM", "previousStep": null, "alertCreationDate": "12-Mar-2023", "currentStep": "L1", "taskSubject": "InvestigatorL1", "taskId": "614509", "dataTaskIdName": null, "dataTaskIdValue": null, "dataTaskDetails": { "name": "4861", "value": "614509" }, "sasAlertId": null, "count": "10", "getHighCRS": null, "l1User": null, "l2User": null, "mlro": null, "crsLoadDate": null, "isCrsAvailable": null, "crsValue": null }, { "httpCode": 200, "httpMessage": "success", "caseRefNo": "EEC-014317465-1000026264", "instanceId": "20381", "alertedEntityNumber": "BS_010597457", "createdDateTime": "24-May-2023 08:18:12", "caseStatus": null, "cifId": "014317465", "dataId": "4861", "taskAssignedToUser": null, "alertId": "", "primaryEntityName": "RAHIMO HAIDERALI SACOOR", "ageing": "117", "sasCaseId": null, "createdUserId": "SYSTEM", "previousStep": null, "alertCreationDate": "12-Mar-2023", "currentStep": "L1", "taskSubject": "InvestigatorL1", "taskId": "613654", "dataTaskIdName": null, "dataTaskIdValue": null, "dataTaskDetails": { "name": "4861", "value": "613654" }, "sasAlertId": null, "count": "10", "getHighCRS": null, "l1User": null, "l2User": null, "mlro": null, "crsLoadDate": null, "isCrsAvailable": null, "crsValue": null }, { "httpCode": 200, "httpMessage": "success", "caseRefNo": "EEC-014317465-1000026269", "instanceId": "20396", "alertedEntityNumber": "BS_010597457", "createdDateTime": "24-May-2023 22:44:20", "caseStatus": null, "cifId": "014317465", "dataId": "4861", "taskAssignedToUser": "NaveenCha", "alertId": "", "primaryEntityName": "RAHIMO HAIDERALI SACOOR", "ageing": "117", "sasCaseId": null, "createdUserId": "SYSTEM", "previousStep": null, "alertCreationDate": "12-Mar-2023", "currentStep": "MLRO", "taskSubject": "Step: Review the case MLRO", "taskId": "624882", "dataTaskIdName": null, "dataTaskIdValue": null, "dataTaskDetails": { "name": "4861", "value": "624882" }, "sasAlertId": null, "count": "10", "getHighCRS": null, "l1User": null, "l2User": null, "mlro": null, "crsLoadDate": null, "isCrsAvailable": null, "crsValue": null }, { "httpCode": 200, "httpMessage": "success", "caseRefNo": "EEC-014309126-1000025664", "instanceId": "19695", "alertedEntityNumber": "BS_014309126", "createdDateTime": "17-May-2023 09:30:16", "caseStatus": null, "cifId": "014309126", "dataId": "3197", "taskAssignedToUser": "NaveenCha", "alertId": "", "primaryEntityName": "PHILEMON HOWARD", "ageing": "53", "sasCaseId": null, "createdUserId": "SYSTEM", "previousStep": null, "alertCreationDate": "15-May-2023", "currentStep": null, "taskSubject": "InvestigatorL1", "taskId": "576730", "dataTaskIdName": null, "dataTaskIdValue": null, "dataTaskDetails": { "name": "3197", "value": "576730" }, "sasAlertId": null, "count": "10", "getHighCRS": null, "l1User": null, "l2User": null, "mlro": null, "crsLoadDate": null, "isCrsAvailable": null, "crsValue": null }, { "httpCode": 200, "httpMessage": "success", "caseRefNo": "EEC-014309126-1000025684", "instanceId": "19730", "alertedEntityNumber": "BS_014309126", "createdDateTime": "17-May-2023 09:30:32", "caseStatus": null, "cifId": "014309126", "dataId": "3197", "taskAssignedToUser": "NaveenCha", "alertId": "", "primaryEntityName": "PHILEMON HOWARD", "ageing": "53", "sasCaseId": null, "createdUserId": "SYSTEM", "previousStep": null, "alertCreationDate": "15-May-2023", "currentStep": null, "taskSubject": "InvestigatorL1", "taskId": "576756", "dataTaskIdName": null, "dataTaskIdValue": null, "dataTaskDetails": { "name": "3197", "value": "576756" }, "sasAlertId": null, "count": "10", "getHighCRS": null, "l1User": null, "l2User": null, "mlro": null, "crsLoadDate": null, "isCrsAvailable": null, "crsValue": null }, { "httpCode": 200, "httpMessage": "success", "caseRefNo": "EEC-014299408-1000026265", "instanceId": "20382", "alertedEntityNumber": "BS_010597457", "createdDateTime": "24-May-2023 08:28:15", "caseStatus": null, "cifId": "014299408", "dataId": "4862", "taskAssignedToUser": "NaveenCha", "alertId": "", "primaryEntityName": "RAHIMO HAIDERALI SACOOR", "ageing": "117", "sasCaseId": null, "createdUserId": "SYSTEM", "previousStep": null, "alertCreationDate": "12-Mar-2023", "currentStep": "L2", "taskSubject": "Step: Investigator L2", "taskId": "1801884", "dataTaskIdName": null, "dataTaskIdValue": null, "dataTaskDetails": { "name": "4862", "value": "1801884" }, "sasAlertId": null, "count": "10", "getHighCRS": null, "l1User": null, "l2User": null, "mlro": null, "crsLoadDate": null, "isCrsAvailable": null, "crsValue": null }]
  
  let Alerts_column = [
    { Header: 'Case Ref NO', accessor: 'caseRefNo' },
    { Header: 'cifId', accessor: 'cifId' },
    { Header: 'Alerted Entity Number', accessor: 'alertedEntityNumber' },
    { Header: 'Instance Id', accessor: 'instanceId' },
    { Header: 'data Id', accessor: 'dataId' },
    // { Header: 'alertId', accessor: 'alertId' },
    { Header: 'primary Entity Name', accessor: 'primaryEntityName' },
    { Header: 'Ageing', accessor: 'ageing' },
    { Header: 'alertCreation Date', accessor: 'alertCreationDate' },
    { Header: 'created UserId', accessor: 'createdUserId' },
    { Header: 'taskAssigned To User', accessor: 'taskAssignedToUser' },
    { Header: 'created Date Time', accessor: 'createdDateTime' },
    // { Header: 'caseStatus', accessor: 'caseStatus' },
  ];


  const caseHeaders = Alerts_column.map(column => column.accessor);

  // Filter openCasesData to keep only records with matching headers
  const filteredOpenCasesData = openCasesData.filter(caseData => {
    const caseDataKeys = Object.keys(caseData);
    return caseHeaders.every(header => caseDataKeys.includes(header));
  });

  console.log(filteredOpenCasesData);

  const [Loading, setLoading] = useState(true);


  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  TablePaginationActions.propTypes = {
    count: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };





  const [editTableData, setEditTableData] = useState({

    "processId": 1,
    "processName": "Done",
    "isActive": "Yes",
    "regionId": 2

  });

  // const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [showEiditDialog, setShowEiditDialog] = useState(false);
  const [Eiditdata, setEiditData] = useState({});
  const eidiitPopup = (data) => {
    setEditTableData(data);
    setShowEiditDialog(true);
  };

  // modal

  const [snakbarOpen, setSnakbarOpen] = React.useState(false);
  const snackbar1 = (value) => {
    setSnakbarOpen(value);
  };
 

  const [data, setData] = useState([{ "processId": "1", "processName": "1", "regionId": "1", "action": "1" }]);

  const getProcess = () => {
    setLoading(false)
    // let res = await getAllProcesses();
    // if(res!=null){

    //   setData(()=>res);
    // }
    // setLoading(false)
    // setData(openCasesData)
  }

  //receive column & api data here
  // const columns = useMemo(() => Alerts_column(), []);  
  // const data = useMemo(() => demoData, [demoData]);

  const TableCell = withStyles({
    root: {
      border: "1px solid rgb(213 218 222)",
      align: "center",
      padding: "8px 10px",
    },
  })(MuiTableCell);

  const eiditModalHandler = () => { };

  useEffect(() => {

    // getProcess();



  }, []);
  const [Id, setId] = useState(null);
  // const deleteProcesss = async () => {
  //   let res = await deleteProcess(Id);
  //   if(res){
  //     console.log('Process deleted:',Id)

  //     getProcess();
  //   } else{
  //     console.log('Error while deleting Process:',Id);


  //   }
  // }

  // const updateProcesss = async (body) => {
  //   let res = await updateProcess(body);
  //   if(res){
  //     console.log('Process updated:',body.processId) 
  //     setShowEiditDialog(false);
  //     getProcess();
  //   } else{
  //     console.log('Error while updating Process:',body.processId);
  //     setShowEiditDialog(false);
  //   }
  // }

  // Render the UI for your table
  /**
   * OnClick it will open Alerted Transactions.
   */
  const handleCarbsClick = (pin) => {
    const carbsdetails = filteredOpenCasesData.find((each) => each.ageing === pin);
    console.log('Carbs clicked:', pin);


    localStorage.setItem('Anurag', JSON.stringify(carbsdetails));


    const newTab = window.open('/Dash', '_blank');
  };

console.log('crabd',handleCarbsClick);



  return (
    <div style={{ paddingTop: "1%", overflowX: "auto" }}>

      <div className="d-flex justify-content-between">
        <div>
          {/* <Typography variant="h6" component="h2" style={{ marginLeft: '1%' ,backgroundColor:'#EBEDF4'}}> */}
          {/* <h5> {title}</h5> */}
          {/* </Typography> */}
          {/* <Underline width="70%" className="my-2" /> */}
        </div>
      </div>
      {false ? (
        <>
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </>

      ) : (
        <Paper
          elevation={0}
          sx={{
            width: "100%",
            overflowX: "auto",

            marginBottom: "0%",
            display: "flex",
          }}
        >
          <TableContainer sx={{ height: "auto", width: "100%", display: "flex" }}>
            <Table>
              <TableHead>
                <TableRow>
                  {Alerts_column.map((column, i) => (
                    <TableCell
                      key={i}
                      style={{
                        color: "rgb(26, 65, 152)",
                        fontWeight: "bold",
                        fontSize: "12px",
                        // fontFamily: 'Gilroy-Bold',
                        background: "#F5F6F9",
                      }}
                    >
                      {column["Header"].toUpperCase()}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>


              {/* <TableBody>
                {(rowsPerPage > 0
              ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : data
            ).map((row, i) => (
                  <TableRow key={i}>

                
                    <TableCell>{row.dataTaskDetails}</TableCell>
                    <TableCell>{row.caseRefNo}</TableCell>
                    <TableCell>{row.sasCaseId}</TableCell>
                    <TableCell>{row.cifId}</TableCell>
                    <TableCell>{row.alertedEntityNumber}</TableCell>
                    <TableCell>{row.instanceId}</TableCell>
                    <TableCell>{row.primaryEntityName}</TableCell>
                    <TableCell>{row.ageing}</TableCell>
                    <TableCell>{row.alertCreationDate}</TableCell>
                    <TableCell>{row.createdUserId}</TableCell>
                    <TableCell>{row.taskAssignedToUser}</TableCell>
                    <TableCell>{row.createdDateTime}</TableCell>
                    <TableCell>{row.caseStatus}</TableCell>

            
                  </TableRow>
                ))}
              </TableBody> */}
              <TableBody>
                {(rowsPerPage > 0
                  ? filteredOpenCasesData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  : filteredOpenCasesData
                ).map((row, i) => (
                  <TableRow key={i}>
                    {Alerts_column.map((column, j) => (
                      <TableCell key={j}
                        onClick={() => handleCarbsClick(row['ageing'])}
                      >
                        {/* Access the corresponding property in the row */}
                        {row[column.accessor]}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          {/* <TablePagination            
                    rowsPerPageOptions={[5, 10, 25]}
                    rowsPerPage={5}
                    component="div"
                    count={data.length}
                    SelectProps={{
                        inputProps: {
                            "aria-label": "rows per page",
                        },
                        native: true,
                    }}
                    page={1}
                    // onPageChange={handleChangePage}
                    // onRowsPerPageChange={handleChangeRowsPerPage}
                   
                /> */}
          {/* <TablePagination sx={{
            '.MuiTablePagination-displayedRows': {
              marginBottom: '0px'
            },
            '.MuiTablePagination-selectLabel': {
              marginBottom: '0px'
            }
          }}
            rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
            component="div"
            colSpan={3}
            count={data.length}
            rowsPerPage={rowsPerPage}
            page={page}
            SelectProps={{
              inputProps: {
                'aria-label': 'rows per page',
              },
              // native: true,
            }}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            ActionsComponent={TablePaginationActions}
          /> */}
        </Paper>
      )}



    </div>
  );
}

export default React.memo(ProcessTable);

